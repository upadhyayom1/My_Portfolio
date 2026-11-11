import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { personalInfo } from "../data/portfolioData";
import { RotateCw, Move } from "lucide-react";

function checkWebGLSupport() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function InteractiveBadge() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [webGLFailed, setWebGLFailed] = useState(() => !checkWebGLSupport());
  const [hintVisible, setHintVisible] = useState(true);
  const flipTriggerRef = useRef(null);

  useEffect(() => {
    if (webGLFailed) return;

    const host = containerRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setTimeout(() => setWebGLFailed(true), 0);
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.VSMShadowMap;

    const MAXANISO = renderer.capabilities.getMaxAnisotropy();
    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.85;

    const VIEW_H = 10;
    const FOV = 32;
    const CAM_Z = (VIEW_H / 2) / Math.tan(THREE.MathUtils.degToRad(FOV / 2));
    const camera = new THREE.PerspectiveCamera(FOV, 1, 0.5, 80);
    camera.position.set(0, 0, CAM_Z);

    // Lights
    scene.add(new THREE.HemisphereLight(0xffffff, 0xf0ede6, 0.95));
    const key = new THREE.DirectionalLight(0xfff8ee, 1.8);
    key.position.set(-2.5, 3.2, 12);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    Object.assign(key.shadow.camera, {
      left: -10,
      right: 10,
      top: 8,
      bottom: -8,
      near: 2,
      far: 30,
    });
    key.shadow.radius = 12;
    key.shadow.bias = -0.0004;
    scene.add(key);

    const rim = new THREE.DirectionalLight(0x17804a, 0.9);
    rim.position.set(6, 2, -4);
    scene.add(rim);

    // Shadow catcher wall
    const wall = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 40),
      new THREE.ShadowMaterial({ color: 0x0e0f11, opacity: 0.12 })
    );
    wall.position.z = -1.8;
    wall.receiveShadow = true;
    scene.add(wall);
    const WALL_Z = -1.6;

    // Helper utilities
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const tex = (c) => {
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = MAXANISO;
      return t;
    };
    const mk = (w, h) => {
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      return [c, c.getContext("2d")];
    };
    const rr = (g, x, y, w, h, r) => {
      g.beginPath();
      g.moveTo(x + r, y);
      g.arcTo(x + w, y, x + w, y + h, r);
      g.arcTo(x + w, y + h, x, y + h, r);
      g.arcTo(x, y + h, x, y, r);
      g.arcTo(x, y, x + w, y, r);
      g.closePath();
    };

    const FW = 1000;
    const FH = 1400;

    // Texture generation: Front Face
    const [fc, fg] = mk(FW, FH);
    function drawFront(g) {
      g.fillStyle = "#FFFFFF";
      g.fillRect(0, 0, FW, FH);

      // Fine tooth grain
      for (let i = 0; i < 5000; i++) {
        g.fillStyle = `rgba(14,15,17,${Math.random() * 0.02})`;
        g.fillRect(Math.random() * FW, Math.random() * FH, 2, 2);
      }

      // Guilloche security curved lines
      g.save();
      g.strokeStyle = "rgba(14,15,17,0.06)";
      g.lineWidth = 1.4;
      for (let k = 0; k < 22; k++) {
        g.beginPath();
        for (let x = 0; x <= FW; x += 6) {
          const y =
            950 +
            k * 8 +
            Math.sin(x * 0.012 + k * 0.4) * 28 * Math.sin(x * 0.0035 + k * 0.2);
          if (x === 0) g.moveTo(x, y);
          else g.lineTo(x, y);
        }
        g.stroke();
      }
      g.restore();

      // Header row
      g.fillStyle = "#0E0F11";
      g.font = '600 24px "DM Mono", monospace';
      g.letterSpacing = "3px";
      g.fillText("MNNIT ALLAHABAD", 70, 96);
      g.textAlign = "right";
      g.fillText("ID: CSE-2029", FW - 70, 96);
      g.textAlign = "left";

      // Divider line
      g.fillStyle = "#0E0F11";
      g.fillRect(70, 126, FW - 140, 2.5);

      // Institution Subtitle
      g.fillStyle = "#0E0F11";
      g.font = '500 18px "DM Mono", monospace';
      g.letterSpacing = "2px";
      g.fillText("DEPT. OF COMPUTER SCIENCE & ENGINEERING", 70, 168);

      // Primary Name
      g.fillStyle = "#0E0F11";
      g.font = '700 152px "Inter Tight", sans-serif';
      g.letterSpacing = "-5px";
      g.fillText("Om", 65, 340);
      g.fillStyle = "#17804A";
      g.fillText("Upadhyay", 65, 480);

      // Role Pill & Label
      g.fillStyle = "#0E0F11";
      rr(g, 68, 526, 310, 44, 6);
      g.fill();
      g.fillStyle = "#FAFAF8";
      g.font = '600 18px "DM Mono", monospace';
      g.letterSpacing = "2px";
      g.fillText("SOFTWARE DEVELOPER", 88, 554);

      // Technical Focus Labels
      g.fillStyle = "#0E0F11";
      g.font = '500 20px "DM Mono", monospace';
      g.letterSpacing = "2px";
      g.fillText("SYSTEMS · FULL-STACK · ALGORITHMS", 70, 630);

      // Gold Chip Well Area (Left)
      g.fillStyle = "rgba(23,128,74,0.1)";
      rr(g, 70, 675, 150, 115, 14);
      g.fill();
      g.strokeStyle = "#17804A";
      g.lineWidth = 2;
      rr(g, 70, 675, 150, 115, 14);
      g.stroke();

      // Academic Credentials (Right)
      g.fillStyle = "#0E0F11";
      g.font = '600 24px "Inter Tight", sans-serif';
      g.fillText("B.Tech. Computer Science", 250, 715);
      g.fillStyle = "#4B4D52";
      g.font = '500 18px "DM Mono", monospace';
      g.fillText("BATCH: 2025–2029", 250, 747);
      g.fillText("CAMPUS: PRAYAGRAJ, INDIA", 250, 777);

      // Divider line
      g.fillStyle = "#E5E7EB";
      g.fillRect(70, 830, FW - 140, 2);

      // Key Metrics Strip
      g.fillStyle = "#0E0F11";
      g.font = '700 36px "Inter Tight", sans-serif';
      g.fillText("8.82", 70, 895);
      g.fillText("600+", 260, 895);
      g.fillText("2★", 450, 895);
      g.fillText("1100+", 610, 895);

      g.fillStyle = "#6B6D72";
      g.font = '500 14px "DM Mono", monospace';
      g.letterSpacing = "1.5px";
      g.fillText("CGPA / 10.0", 70, 928);
      g.fillText("LEETCODE SOLVED", 260, 928);
      g.fillText("CODECHEF", 450, 928);
      g.fillText("CODEFORCES", 610, 928);

      // Verification & Barcode area
      g.fillStyle = "#E5E7EB";
      g.fillRect(70, 990, FW - 140, 2);

      // Barcode bars
      const bars = [3, 2, 5, 2, 4, 6, 2, 3, 2, 5, 3, 4, 2, 6, 4, 2, 5, 3, 2, 4, 3, 5, 2];
      let curX = 70;
      g.fillStyle = "#0E0F11";
      for (const b of bars) {
        g.fillRect(curX, 1025, b * 3, 48);
        curX += b * 3 + 6;
      }

      g.fillStyle = "#0E0F11";
      g.font = '500 14px "DM Mono", monospace';
      g.fillText("VERIFIED ENGINEERING CREDENTIAL · TAP TO FLIP", 70, 1115);

      // Outer border
      g.strokeStyle = "rgba(14,15,17,0.18)";
      g.lineWidth = 2.5;
      rr(g, 10, 10, FW - 20, FH - 20, 24);
      g.stroke();
    }

    // Texture generation: Back Face (Interactive Links & Tech Stack)
    const [bc, bg] = mk(FW, FH);
    const ROW0 = 360;
    const ROWH = 120;
    const LINKS = [
      ["01 / GITHUB", "github.com/upadhyayom1", "https://github.com/upadhyayom1"],
      ["02 / LINKEDIN", "in/om-upadhyay", "https://www.linkedin.com/in/om-upadhyay-772787371/"],
      ["03 / LEETCODE", "leetcode.com/upadhyayom1", "https://leetcode.com/upadhyayom1/"],
      ["04 / CODEFORCES", "codeforces.com/profile/upadhyayom1", "https://codeforces.com/profile/upadhyayom1"],
      ["05 / EMAIL", "upadhyayom234@gmail.com", "mailto:upadhyayom234@gmail.com"],
    ];

    function drawBack(g, hoveredIdx = -1) {
      g.fillStyle = "#FAFAF8";
      g.fillRect(0, 0, FW, FH);

      // Header
      g.fillStyle = "#0E0F11";
      g.font = '500 24px "DM Mono", monospace';
      g.letterSpacing = "3px";
      g.fillText("TECHNICAL CAPABILITIES", 70, 96);
      g.textAlign = "right";
      g.fillText("IDENTIFIERS", FW - 70, 96);
      g.textAlign = "left";

      g.fillStyle = "rgba(14,15,17,0.15)";
      g.fillRect(70, 126, FW - 140, 2);

      // Tech Stack Pills Row
      const coreStack = ["React", "TypeScript", "Node.js", "PostgreSQL", "C++", "FastAPI", "Redis"];
      let pillX = 70;
      let pillY = 170;
      for (const skill of coreStack) {
        g.font = '500 16px "DM Mono", monospace';
        const textW = g.measureText(skill).width;
        const pW = textW + 28;
        if (pillX + pW > FW - 70) {
          pillX = 70;
          pillY += 46;
        }
        g.fillStyle = "#F0F0ED";
        rr(g, pillX, pillY, pW, 36, 6);
        g.fill();
        g.strokeStyle = "#D7D9DE";
        g.lineWidth = 1;
        rr(g, pillX, pillY, pW, 36, 6);
        g.stroke();
        g.fillStyle = "#0E0F11";
        g.fillText(skill, pillX + 14, pillY + 23);
        pillX += pW + 12;
      }

      g.fillStyle = "rgba(14,15,17,0.1)";
      g.fillRect(70, 310, FW - 140, 1.5);

      // Interactive Links Rows
      LINKS.forEach(([numLabel, val], i) => {
        const y = ROW0 + i * ROWH;
        const isHovered = i === hoveredIdx;

        if (isHovered) {
          g.fillStyle = "#0E0F11";
          rr(g, 65, y - 10, FW - 130, ROWH - 12, 8);
          g.fill();

          g.fillStyle = "#FAFAF8";
          g.font = '400 16px "DM Mono", monospace';
          g.letterSpacing = "2px";
          g.fillText(numLabel, 90, y + 26);

          g.font = '600 24px "Inter Tight", sans-serif';
          g.fillText(val, 90, y + 66);

          g.textAlign = "right";
          g.font = '400 26px "Inter Tight", sans-serif';
          g.fillText("↗", FW - 90, y + 54);
          g.textAlign = "left";
        } else {
          g.fillStyle = "#F7F7F5";
          rr(g, 65, y - 10, FW - 130, ROWH - 12, 8);
          g.fill();
          g.strokeStyle = "#E5E7EB";
          g.lineWidth = 1;
          rr(g, 65, y - 10, FW - 130, ROWH - 12, 8);
          g.stroke();

          g.fillStyle = "#6B6D72";
          g.font = '400 15px "DM Mono", monospace';
          g.letterSpacing = "2px";
          g.fillText(numLabel, 90, y + 26);

          g.fillStyle = "#0E0F11";
          g.font = '500 23px "Inter Tight", sans-serif';
          g.fillText(val, 90, y + 66);

          g.textAlign = "right";
          g.fillStyle = "#6B6D72";
          g.font = '400 22px "Inter Tight", sans-serif';
          g.fillText("↗", FW - 90, y + 54);
          g.textAlign = "left";
        }
      });

      // Bottom footer instructions
      g.fillStyle = "#6B6D72";
      g.font = '400 15px "DM Mono", monospace';
      g.letterSpacing = "2px";
      g.textAlign = "center";
      g.fillText("CLICK A LINK TO OPEN · CLICK CARD TO FLIP", FW / 2, 1070);
      g.textAlign = "left";

      // Border
      g.strokeStyle = "rgba(14,15,17,0.12)";
      g.lineWidth = 2;
      rr(g, 10, 10, FW - 20, FH - 20, 24);
      g.stroke();
    }

    drawFront(fg);
    drawBack(bg, -1);

    const frontTex = tex(fc);
    const backTex = tex(bc);

    // Build Lanyard Strap Texture (Woven nylon with repeat text)
    const [stc, stg] = mk(64, 1024);
    stg.fillStyle = "#0E0F11";
    stg.fillRect(0, 0, 64, 1024);
    // Subtle weave pattern
    for (let y = 0; y < 1024; y += 4) {
      stg.fillStyle = y % 8 === 0 ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.15)";
      stg.fillRect(0, y, 64, 2);
    }
    // Repeating text along strap
    stg.save();
    stg.translate(36, 512);
    stg.rotate(Math.PI / 2);
    stg.fillStyle = "#FAFAF8";
    stg.font = '500 13px "DM Mono", monospace';
    stg.letterSpacing = "3px";
    stg.textAlign = "center";
    stg.fillText("OM UPADHYAY · SOFTWARE DEVELOPER · MNNIT ALLAHABAD", 0, 0);
    stg.restore();

    const strapTex = tex(stc);
    strapTex.wrapS = strapTex.wrapT = THREE.RepeatWrapping;
    const strapMat = new THREE.MeshStandardMaterial({
      map: strapTex,
      roughness: 0.85,
      side: THREE.DoubleSide,
      envMapIntensity: 0.5,
    });

    // Foil Hologram Texture
    const [hc, hg] = mk(256, 256);
    const grad = hg.createConicGradient(0, 128, 128);
    ["#ffd9e8", "#d9e4ff", "#d4fff1", "#fff5c9", "#f0d9ff", "#cdeeff", "#ffd9e8"].forEach(
      (col, idx, arr) => grad.addColorStop(idx / (arr.length - 1), col)
    );
    hg.fillStyle = grad;
    hg.fillRect(0, 0, 256, 256);
    hg.strokeStyle = "rgba(255,255,255,0.6)";
    hg.lineWidth = 1.5;
    for (let r = 8; r < 128; r += 9) {
      hg.beginPath();
      hg.arc(128, 128, r, 0, Math.PI * 2);
      hg.stroke();
    }
    hg.fillStyle = "rgba(14,15,17,0.7)";
    hg.font = '600 84px "Inter Tight", sans-serif';
    hg.textAlign = "center";
    hg.fillText("OU", 128, 158);
    const holoTex = tex(hc);
    holoTex.center.set(0.5, 0.5);

    // Microchip texture
    const [cc, cg] = mk(256, 190);
    cg.fillStyle = "#c9a35a";
    cg.fillRect(0, 0, 256, 190);
    cg.strokeStyle = "#856424";
    cg.lineWidth = 3;
    cg.strokeRect(6, 6, 244, 178);
    // Chip contact patterns
    cg.fillStyle = "#856424";
    cg.fillRect(80, 10, 3, 170);
    cg.fillRect(173, 10, 3, 170);
    cg.fillRect(10, 95, 236, 3);
    const chipTex = tex(cc);

    // Geometries
    const IW = 2.4;
    const IH = 3.36;
    const ICY = -0.15;
    const SW = 2.65;
    const ST = 1.95;
    const SB = -2.1;

    function rrShape(w, h, r, cx = 0, cy = 0) {
      const s = new THREE.Shape();
      const x = cx - w / 2;
      const y = cy - h / 2;
      s.moveTo(x + r, y);
      s.lineTo(x + w - r, y);
      s.absarc(x + w - r, y + r, r, -Math.PI / 2, 0, false);
      s.lineTo(x + w, y + h - r);
      s.absarc(x + w - r, y + h - r, r, 0, Math.PI / 2, false);
      s.lineTo(x + r, y + h);
      s.absarc(x + r, y + h - r, r, Math.PI / 2, Math.PI, false);
      s.lineTo(x, y + r);
      s.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
      return s;
    }

    function normUV(g) {
      g.computeBoundingBox();
      const bb = g.boundingBox;
      const w = bb.max.x - bb.min.x;
      const h = bb.max.y - bb.min.y;
      const uv = g.attributes.uv.array;
      const pos = g.attributes.position.array;
      for (let i = 0, j = 0; i < pos.length; i += 3, j += 2) {
        uv[j] = (pos[i] - bb.min.x) / w;
        uv[j + 1] = (pos[i + 1] - bb.min.y) / h;
      }
      g.attributes.uv.needsUpdate = true;
      return g;
    }

    const card = new THREE.Group();
    scene.add(card);

    const faceGeo = normUV(new THREE.ShapeGeometry(rrShape(IW, IH, 0.16), 6));
    const cardMatFront = new THREE.MeshPhysicalMaterial({
      map: frontTex,
      color: 0xffffff,
      toneMapped: false,
      roughness: 0.55,
      clearcoat: 0.15,
      clearcoatRoughness: 0.25,
      envMapIntensity: 0.18,
    });
    const cardMatBack = new THREE.MeshPhysicalMaterial({
      map: backTex,
      color: 0xffffff,
      toneMapped: false,
      roughness: 0.55,
      clearcoat: 0.15,
      clearcoatRoughness: 0.25,
      envMapIntensity: 0.18,
    });

    const front = new THREE.Mesh(faceGeo, cardMatFront);
    front.position.set(0, ICY, 0.0105);
    card.add(front);

    const back = new THREE.Mesh(faceGeo, cardMatBack);
    back.position.set(0, ICY, -0.0105);
    back.rotation.y = Math.PI;
    card.add(back);

    // Card Core
    const coreGeo = new THREE.ExtrudeGeometry(rrShape(IW, IH, 0.16), {
      depth: 0.02,
      bevelEnabled: false,
      curveSegments: 6,
    });
    coreGeo.translate(0, 0, -0.01);
    const core = new THREE.Mesh(
      coreGeo,
      new THREE.MeshStandardMaterial({ color: 0x0e0f11, roughness: 0.6 })
    );
    core.position.set(0, ICY, 0);
    core.castShadow = true;
    card.add(core);

    // Hologram Disc
    const holo = new THREE.Mesh(
      new THREE.CircleGeometry(0.14, 32),
      new THREE.MeshPhysicalMaterial({
        map: holoTex,
        metalness: 0.35,
        roughness: 0.25,
        iridescence: 1,
        iridescenceIOR: 1.6,
        iridescenceThicknessRange: [200, 700],
        envMapIntensity: 1.4,
      })
    );
    holo.position.set(0.85, ICY - 0.98, 0.0125);
    card.add(holo);

    // Microchip Mesh
    const chip = new THREE.Mesh(
      new RoundedBoxGeometry(0.36, 0.28, 0.012, 2, 0.04),
      new THREE.MeshStandardMaterial({
        map: chipTex,
        metalness: 0.85,
        roughness: 0.32,
        envMapIntensity: 1.5,
      })
    );
    chip.position.set(-0.84, ICY + 0.18, 0.012);
    card.add(chip);

    // Sleeve with real slot cutout
    const sleeveShape = rrShape(SW, ST - SB, 0.16, 0, (ST + SB) / 2);
    // Slot hole in sleeve
    {
      const p = new THREE.Path();
      const w = 0.64;
      const h = 0.12;
      const r = 0.06;
      p.moveTo(-w / 2 + r, -h / 2);
      p.absarc(w / 2 - r, 0, r, -Math.PI / 2, Math.PI / 2, false);
      p.absarc(-w / 2 + r, 0, r, Math.PI / 2, Math.PI * 1.5, false);
      sleeveShape.holes.push(p);
    }
    const sleeveMat = new THREE.MeshPhysicalMaterial({
      transparent: true,
      opacity: 0.22,
      roughness: 0.04,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      side: THREE.DoubleSide,
      depthWrite: false,
      envMapIntensity: 1.2,
      color: 0xffffff,
    });
    const sleeveGeo = normUV(new THREE.ShapeGeometry(sleeveShape, 8));
    const sFront = new THREE.Mesh(sleeveGeo, sleeveMat);
    sFront.position.z = 0.038;
    sFront.renderOrder = 2;
    card.add(sFront);

    const sBack = new THREE.Mesh(sleeveGeo, sleeveMat);
    sBack.position.z = -0.038;
    sBack.renderOrder = 1;
    card.add(sBack);

    // Invisible pick geometry for hit testing
    const pick = new THREE.Mesh(
      new THREE.BoxGeometry(SW, ST - SB, 0.2),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    pick.position.y = (ST + SB) / 2;
    card.add(pick);

    // Metal Clasp and Rings
    const metalMat = new THREE.MeshStandardMaterial({
      color: 0x0e0f11,
      metalness: 0.9,
      roughness: 0.25,
      envMapIntensity: 1.4,
    });
    const clasp = new THREE.Group();
    scene.add(clasp);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.018, 12, 36), metalMat);
    ring.rotation.y = Math.PI / 2;
    ring.position.y = 0.066;
    clasp.add(ring);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.14, 12), metalMat);
    stem.position.y = 0.2;
    clasp.add(stem);
    const crimp = new THREE.Mesh(new RoundedBoxGeometry(0.28, 0.12, 0.07, 3, 0.03), metalMat);
    crimp.position.y = 0.34;
    clasp.add(crimp);

    // Straps: 2 ribbons
    const N = 14;
    const SUBS = 5;
    const NS = N * SUBS + 1;
    function ribbon() {
      const g = new THREE.BufferGeometry();
      g.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(NS * 6), 3).setUsage(THREE.DynamicDrawUsage)
      );
      g.setAttribute(
        "normal",
        new THREE.BufferAttribute(new Float32Array(NS * 6), 3).setUsage(THREE.DynamicDrawUsage)
      );
      g.setAttribute(
        "uv",
        new THREE.BufferAttribute(new Float32Array(NS * 4), 2).setUsage(THREE.DynamicDrawUsage)
      );
      const idx = [];
      for (let k = 0; k < NS - 1; k++) {
        const a = 2 * k;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
      g.setIndex(idx);
      const m = new THREE.Mesh(g, strapMat);
      m.castShadow = true;
      m.frustumCulled = false;
      scene.add(m);
      return m;
    }
    const ribbons = [ribbon(), ribbon()];

    // XPBD / Verlet Physics Setup
    const V = THREE.Vector3;
    const parts = [];
    const strands = [[], []];
    const anchors = [new V(), new V()];
    let iC;
    let S = 1;
    let segL = 1;
    let hookLen = 0.34;
    let mobile = false;
    let viewW = 16;
    const anchorY = 5.8;

    const ex = new V(1, 0, 0);
    const ey = new V(0, 1, 0);
    const ez = new V(0, 0, 1);
    const com = new V();
    const t1 = new V();
    const t2 = new V();
    const t3 = new V();
    const t4 = new V();
    const qa = new THREE.Quaternion();
    const qi = new THREE.Quaternion();

    const G = 55;
    const H = 1 / 1000;
    const DAMP_L = 0.55;
    const DAMP_A = 1.1;
    const M = 1;

    const B = {
      x: new V(),
      xp: new V(),
      q: new THREE.Quaternion(),
      qp: new THREE.Quaternion(),
      v: new V(),
      w: new V(),
      I: new V(),
      rH: new V(),
    };

    let flip = 1;
    let flipDir = 1;
    let grab = null;
    let hoverRow = -1;
    const breeze = new V();
    const pointer = {
      x: 0,
      y: 0,
      nx: 0,
      ny: 0,
      has: false,
      world: new V(),
      prev: new V(),
      vel: new V(),
    };

    const P = (x, y, z, m) => {
      parts.push({
        p: new V(x, y, z),
        pp: new V(x, y, z),
        v: new V(),
        w: m ? 1 / m : 0,
      });
      return parts.length - 1;
    };

    const invI = (a, out) => {
      qi.copy(B.q).invert();
      out.copy(a).applyQuaternion(qi);
      out.set(out.x / B.I.x, out.y / B.I.y, out.z / B.I.z);
      return out.applyQuaternion(B.q);
    };

    function applyBody(r, imp) {
      B.x.addScaledVector(imp, 1 / M);
      invI(t4.crossVectors(r, imp), t4);
      qa.set(t4.x, t4.y, t4.z, 0).multiply(B.q);
      B.q.x += 0.5 * qa.x;
      B.q.y += 0.5 * qa.y;
      B.q.z += 0.5 * qa.z;
      B.q.w += 0.5 * qa.w;
      B.q.normalize();
    }

    function wBody(r, n) {
      t4.crossVectors(r, n);
      const a = t4.clone();
      invI(a, a);
      return 1 / M + t4.dot(a);
    }

    function build(W, Hh) {
      parts.length = 0;
      strands[0].length = strands[1].length = 0;
      const aspect = W / Hh;
      viewW = VIEW_H * aspect;
      mobile = aspect < 0.9;
      S = mobile ? clamp(viewW / 5.2, 0.78, 1.0) : clamp(viewW / 7.2, 0.95, 1.25);

      const clampY = mobile ? 2.1 : 1.75;
      hookLen = 0.345 * S;
      const ax = mobile ? 1.0 : 1.5 * S;
      anchors[0].set(-ax, anchorY, -0.05);
      anchors[1].set(ax, anchorY, -0.05);

      const Cp = new V(0, clampY, 0);
      segL = (anchors[0].distanceTo(Cp) * 1.006) / 14;
      iC = P(Cp.x, Cp.y, Cp.z, 0.12);

      for (let k = 0; k < 2; k++) {
        for (let i = 0; i <= 14; i++) {
          if (i === 14) {
            strands[k].push(iC);
            continue;
          }
          const p = t1.copy(anchors[k]).lerp(Cp, i / 14);
          const id = P(p.x, p.y, p.z, i === 0 ? 0 : 0.045);
          strands[k].push(id);
        }
      }

      const w = SW * S;
      const h = (ST - SB) * S;
      B.I.set((M * h * h) / 12, (M * w * w) / 12, (M * (w * w + h * h)) / 12);
      B.rH.set(0, (-(ST + SB) / 2) * S, 0);
      B.q.identity();
      B.qp.identity();
      B.x.set(0, clampY - hookLen, 0).sub(B.rH);
      B.xp.copy(B.x);
      B.v.set(0, 0, 0);
      B.w.set(0, 0, 0);

      card.scale.setScalar(S);
      clasp.scale.setScalar(S);
      for (const m of ribbons) m.userData.w = 0.26 * S;
      updateFrame();
    }

    function updateFrame() {
      ex.set(1, 0, 0).applyQuaternion(B.q);
      ey.set(0, 1, 0).applyQuaternion(B.q);
      ez.set(0, 0, 1).applyQuaternion(B.q);
      com.copy(B.x);
    }

    function rope(a, b, len) {
      t1.subVectors(b.p, a.p);
      const d = t1.length();
      if (d <= len || d < 1e-7) return;
      const ws = a.w + b.w;
      if (!ws) return;
      const k = (d - len) / (d * ws);
      a.p.addScaledVector(t1, k * a.w);
      b.p.addScaledVector(t1, -k * b.w);
    }

    function tether(o, A, len) {
      t1.subVectors(o.p, A);
      const d = t1.length();
      if (d > len) o.p.addScaledVector(t1, (len - d) / d);
    }

    function hook() {
      const c = parts[iC];
      const r = t2.copy(B.rH).applyQuaternion(B.q);
      const Pw = t3.copy(B.x).add(r);
      t1.subVectors(Pw, c.p);
      const d = t1.length();
      if (d <= hookLen || d < 1e-7) return;
      const n = t1.divideScalar(d).clone();
      const wb = wBody(r, n);
      const lam = -(d - hookLen) / (c.w + wb);
      c.p.addScaledVector(n, -lam * c.w);
      applyBody(r, n.multiplyScalar(lam));
    }

    function grabSolve(h) {
      const r = t2.copy(grab.local).applyQuaternion(B.q);
      const Pw = t3.copy(B.x).add(r);
      t1.subVectors(Pw, grab.target);
      const d = t1.length();
      if (d < 1e-6) return;
      const n = t1.divideScalar(d).clone();
      const alpha = 0.0009 / (h * h);
      const lam = -d / (wBody(r, n) + alpha);
      applyBody(r, n.multiplyScalar(lam));
    }

    function twistSolve(h) {
      const goalZ = flip > 0 ? 1 : -1;
      const err = ez.z - goalZ;
      const torq = -16 * err * (flip > 0 ? 1 : -1) - 3.2 * B.w.y;
      B.w.y += torq * h;
    }

    function substep(h) {
      B.xp.copy(B.x);
      B.qp.copy(B.q);

      // External forces
      for (const o of parts) {
        if (!o.w) continue;
        o.pp.copy(o.p);
        o.v.y -= G * h;
        o.v.addScaledVector(breeze, h * 0.4);
        o.p.addScaledVector(o.v, h);
      }

      B.v.y -= G * h;
      B.v.addScaledVector(breeze, h);
      B.x.addScaledVector(B.v, h);

      twistSolve(h);
      qa.set(B.w.x * h * 0.5, B.w.y * h * 0.5, B.w.z * h * 0.5, 0).multiply(B.q);
      B.q.x += qa.x;
      B.q.y += qa.y;
      B.q.z += qa.z;
      B.q.w += qa.w;
      B.q.normalize();

      // Constraints
      for (let it = 0; it < 6; it++) {
        for (let k = 0; k < 2; k++) {
          const s = strands[k];
          for (let i = 0; i < s.length - 1; i++) {
            rope(parts[s[i]], parts[s[i + 1]], segL);
          }
          for (let i = 1; i < s.length; i++) {
            tether(parts[s[i]], anchors[k], i * segL);
          }
        }
        hook();
        if (grab) grabSolve(h);
      }

      // Wall collision
      let push = 0;
      const CORNERS = [
        [-SW / 2, ST],
        [SW / 2, ST],
        [-SW / 2, SB],
        [SW / 2, SB],
      ];
      for (const c of CORNERS) {
        t1.set(c[0] * S, c[1] * S, 0).applyQuaternion(B.q).add(B.x);
        if (WALL_Z - t1.z > push) push = WALL_Z - t1.z;
      }
      if (push > 0) B.x.z += push;

      // Velocities
      for (const o of parts) {
        if (!o.w) continue;
        o.v.subVectors(o.p, o.pp).divideScalar(h).multiplyScalar(Math.exp(-0.9 * h));
      }
      B.v.subVectors(B.x, B.xp).divideScalar(h).multiplyScalar(Math.exp(-DAMP_L * h));
      qa.copy(B.q).multiply(qi.copy(B.qp).invert());
      B.w
        .set(qa.x, qa.y, qa.z)
        .multiplyScalar((2 / h) * (qa.w < 0 ? -1 : 1))
        .multiplyScalar(Math.exp(-DAMP_A * h));
    }

    function settle(n) {
      for (let i = 0; i < n; i++) substep(H);
      for (const o of parts) o.v.set(0, 0, 0);
      B.v.set(0, 0, 0);
      B.w.set(0, 0, 0);
    }

    // Sync meshes from physics
    const mtx = new THREE.Matrix4();
    const xs = new V();
    const us = new V();
    const zs = new V();
    const pts = Array.from({ length: N + 1 }, () => new V());
    const smp = Array.from({ length: NS }, () => new V());
    const ext0 = new V();
    const ext1 = new V();
    const tg = new V();
    const fv = new V();
    const sd = new V();
    const nn = new V();
    const cardN = new V();

    function cr(p0, p1, p2, p3, t, out) {
      const t2_ = t * t;
      const t3_ = t2_ * t;
      return out.set(
        0.5 *
          (2 * p1.x +
            (-p0.x + p2.x) * t +
            (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2_ +
            (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3_),
        0.5 *
          (2 * p1.y +
            (-p0.y + p2.y) * t +
            (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2_ +
            (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3_),
        0.5 *
          (2 * p1.z +
            (-p0.z + p2.z) * t +
            (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t2_ +
            (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * t3_)
      );
    }

    function sync() {
      updateFrame();
      const Hp = t1.copy(B.rH).applyQuaternion(B.q).add(B.x);
      card.position.copy(Hp);
      card.quaternion.copy(B.q);

      holoTex.rotation = ez.x * 2.2 + ex.z * 2.2 + ey.x * 1.5;

      us.subVectors(parts[iC].p, Hp);
      if (us.lengthSq() < 1e-8) us.copy(ey);
      us.normalize();

      xs.copy(ex).addScaledVector(us, -ex.dot(us)).normalize();
      zs.crossVectors(xs, us);
      mtx.makeBasis(xs, us, zs);
      clasp.quaternion.setFromRotationMatrix(mtx);
      clasp.position.copy(Hp);

      cardN.copy(ez).multiplyScalar(ez.z >= 0 ? 1 : -1);

      strands.forEach((s, k) => {
        s.forEach((id, i) => pts[i].copy(parts[id].p));
        pts[14].addScaledVector(us, 0.04 * S);
        ext0.copy(pts[0]).multiplyScalar(2).sub(pts[1]);
        ext1.copy(pts[N]).multiplyScalar(2).sub(pts[N - 1]);

        let j = 0;
        for (let i = 0; i < N; i++) {
          const p0 = i ? pts[i - 1] : ext0;
          const p3 = i + 2 <= N ? pts[i + 2] : ext1;
          for (let m = 0; m < SUBS; m++) {
            cr(p0, pts[i], pts[i + 1], p3, m / SUBS, smp[j++]);
          }
        }
        smp[j].copy(pts[N]);

        const g = ribbons[k].geometry;
        const pa = g.attributes.position.array;
        const na = g.attributes.normal.array;
        const ua = g.attributes.uv.array;
        const hw = ribbons[k].userData.w / 2;
        let arc = 0;
        const texLen = hw * 2 * 16;

        for (let i = 0; i < NS; i++) {
          const a = smp[Math.max(0, i - 1)];
          const b = smp[Math.min(NS - 1, i + 1)];
          tg.subVectors(b, a).normalize();
          if (i) arc += smp[i].distanceTo(smp[i - 1]);

          const u = i / (NS - 1);
          const w = clamp((u - 0.72) / 0.28, 0, 1);
          const ws = w * w * (3 - 2 * w);
          fv.subVectors(camera.position, smp[i]).normalize().lerp(cardN, ws).normalize();
          sd.crossVectors(tg, fv).normalize();
          nn.crossVectors(sd, tg).normalize();
          if (nn.dot(fv) < 0) nn.negate();

          const o = i * 6;
          const p = smp[i];
          const taper = 1 - 0.3 * ws;
          pa[o] = p.x - sd.x * hw * taper;
          pa[o + 1] = p.y - sd.y * hw * taper;
          pa[o + 2] = p.z - sd.z * hw * taper;
          pa[o + 3] = p.x + sd.x * hw * taper;
          pa[o + 4] = p.y + sd.y * hw * taper;
          pa[o + 5] = p.z + sd.z * hw * taper;

          na[o] = na[o + 3] = nn.x;
          na[o + 1] = na[o + 4] = nn.y;
          na[o + 2] = na[o + 5] = nn.z;

          const v = arc / texLen;
          ua[i * 4] = 0;
          ua[i * 4 + 1] = v;
          ua[i * 4 + 2] = 1;
          ua[i * 4 + 3] = v;
        }

        g.attributes.position.needsUpdate = true;
        g.attributes.normal.needsUpdate = true;
        g.attributes.uv.needsUpdate = true;
      });
    }

    // Pointer Interactivity (Grab, Drag, Flip, Links)
    const ray = new THREE.Raycaster();
    const ndc = new THREE.Vector2();

    function setNDC(cx, cy) {
      const r = canvas.getBoundingClientRect();
      ndc.set(
        ((cx - r.left) / r.width) * 2 - 1,
        -(((cy - r.top) / r.height) * 2 - 1)
      );
      ray.setFromCamera(ndc, camera);
      return r;
    }

    function onPlane(z, out) {
      const o = ray.ray.origin;
      const d = ray.ray.direction;
      const t = (z - o.z) / d.z;
      return out.copy(o).addScaledVector(d, t);
    }

    function hitCard(cx, cy) {
      setNDC(cx, cy);
      const h = ray.intersectObjects([pick], false);
      return h[0] || null;
    }

    function backRow(cx, cy) {
      if (ez.z > -0.25) return -1;
      setNDC(cx, cy);
      const h = ray.intersectObject(back, false)[0];
      if (!h) return -1;
      const y = (1 - h.uv.y) * FH;
      const i = Math.floor((y - ROW0) / ROWH);
      return i >= 0 && i < LINKS.length ? i : -1;
    }

    let down = null;

    function turn() {
      flip = -flip;
      setIsFlipped(flip < 0);
      B.v.y += 1.5;
      B.w.addScaledVector(ey, 2.5 * flipDir);
    }

    // Expose flip toggle
    flipTriggerRef.current = turn;

    function onPointerDown(e) {
      const h = hitCard(e.clientX, e.clientY);
      if (!h) return;
      const local = t1
        .subVectors(h.point, B.x)
        .applyQuaternion(qi.copy(B.q).invert())
        .clone();
      grab = { local, z: h.point.z, target: h.point.clone() };
      down = { x: e.clientX, y: e.clientY, t: performance.now() };
      host.style.cursor = "grabbing";
      setHintVisible(false);
      try {
        host.setPointerCapture(e.pointerId);
      } catch {
        // pointer capture optional on some browsers
      }
      e.preventDefault();
    }

    function onPointerMove(e) {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.has = true;

      if (grab) {
        setNDC(e.clientX, e.clientY);
        onPlane(grab.z, grab.target);
        grab.target.y = Math.min(grab.target.y, 4.2);
        grab.target.x = clamp(grab.target.x, -viewW / 2 + 0.6, viewW / 2 - 0.6);
        return;
      }

      const row = backRow(e.clientX, e.clientY);
      if (row !== hoverRow) {
        hoverRow = row;
        drawBack(bg, hoverRow);
        backTex.needsUpdate = true;
      }

      if (row >= 0) {
        host.style.cursor = "pointer";
      } else if (hitCard(e.clientX, e.clientY)) {
        host.style.cursor = "grab";
      } else {
        host.style.cursor = "";
      }
    }

    function onPointerUp(e) {
      if (!grab) return;
      grab = null;
      host.style.cursor = "";

      const sp = B.v.length();
      if (sp > 16) B.v.multiplyScalar(16 / sp);
      const ws = B.w.length();
      if (ws > 14) B.w.multiplyScalar(14 / ws);

      if (
        down &&
        Math.hypot(e.clientX - down.x, e.clientY - down.y) < 10 &&
        performance.now() - down.t < 400
      ) {
        const row = backRow(e.clientX, e.clientY);
        if (row >= 0) {
          const url = LINKS[row][2];
          if (url.startsWith("mailto")) {
            window.location.href = url;
          } else {
            window.open(url, "_blank", "noopener,noreferrer");
          }
        } else {
          turn();
        }
      }
      down = null;
    }

    // Touch support
    function onTouchStart(e) {
      const t = e.touches[0];
      if (t && hitCard(t.clientX, t.clientY)) {
        onPointerDown({
          clientX: t.clientX,
          clientY: t.clientY,
          pointerId: 1,
          preventDefault: () => e.preventDefault(),
        });
      }
    }

    host.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    host.addEventListener("pointerup", onPointerUp);
    host.addEventListener("pointercancel", onPointerUp);
    host.addEventListener("touchstart", onTouchStart, { passive: false });

    // Keyboard support
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        turn();
      }
    }
    host.addEventListener("keydown", onKeyDown);

    // Sizing and Animation Loop
    let animId;
    let acc = 0;
    let lastTime = performance.now();

    function resize() {
      const r = host.getBoundingClientRect();
      const Wd = Math.max(1, r.width);
      const Hd = Math.max(1, r.height);
      const dpr = Math.min(window.devicePixelRatio || 1, Wd < 700 ? 1.8 : 2);
      renderer.setPixelRatio(dpr);
      renderer.setSize(Wd, Hd, false);
      camera.aspect = Wd / Hd;
      camera.updateProjectionMatrix();

      build(Wd, Hd);
      settle(1200);
      sync();
      renderer.render(scene, camera);
    }

    resize();
    window.addEventListener("resize", resize);

    function tick(now) {
      const dt = clamp((now - lastTime) / 1000, 0, 0.05);
      lastTime = now;

      // Pointer breeze interaction
      if (pointer.has) {
        setNDC(pointer.x, pointer.y);
        onPlane(0, pointer.world);
        if (dt > 0) {
          t1.subVectors(pointer.world, pointer.prev).divideScalar(dt);
          pointer.vel.lerp(t1, 1 - Math.exp(-dt * 16));
        }
        pointer.prev.copy(pointer.world);
        if (!grab) {
          const dx = pointer.world.x - com.x;
          const dy = pointer.world.y - com.y;
          const fall = Math.exp(-(dx * dx + dy * dy) / (2 * (2.8 * S) ** 2));
          breeze.x += clamp(pointer.vel.x * 1.5 * fall, -35, 35) * dt * 5;
          breeze.z += clamp(Math.abs(pointer.vel.x) * 0.4 * fall, 0, 18) * dt * 5;
          breeze.y += clamp(pointer.vel.y * 0.5 * fall, -18, 18) * dt * 5;
        }
      }
      breeze.multiplyScalar(Math.exp(-dt * 3.5));

      acc += dt;
      let n = 0;
      while (acc >= H && n < 40) {
        substep(H);
        acc -= H;
        n++;
      }
      if (n === 40) acc = 0;

      sync();
      renderer.render(scene, camera);
      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);

    // Cleanup WebGL resources cleanly
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      host.removeEventListener("pointerdown", onPointerDown);
      host.removeEventListener("pointerup", onPointerUp);
      host.removeEventListener("pointercancel", onPointerUp);
      host.removeEventListener("touchstart", onTouchStart);
      host.removeEventListener("keydown", onKeyDown);

      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      frontTex.dispose();
      backTex.dispose();
      strapTex.dispose();
      holoTex.dispose();
      chipTex.dispose();
      renderer.dispose();
    };
  }, [webGLFailed]);

  // Static/CSS 3D Fallback for reduced motion or WebGL fallback
  if (webGLFailed) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-4">
        <div
          className="relative w-[300px] h-[420px] rounded-2xl bg-white border border-[#E5E7EB] shadow-md p-6 cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
          onClick={() => setIsFlipped(!isFlipped)}
          role="button"
          tabIndex={0}
          aria-label="Om Upadhyay Developer Badge. Click to flip."
        >
          {/* Lanyard Clip Top */}
          <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-[#0E0F11] flex items-center justify-center bg-[#FAFAF8]">
            <div className="w-3 h-3 rounded-full bg-[#0E0F11]" />
          </div>

          {!isFlipped ? (
            <div className="flex flex-col h-full justify-between select-none">
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#6B6D72] border-b border-[#E5E7EB] pb-2 mb-4">
                  <span>MNNIT ALLAHABAD</span>
                  <span>ID: CSE-2029</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-[#0E0F11]">Om</h3>
                <h3 className="text-3xl font-bold tracking-tight text-[#17804A] -mt-1 mb-3">Upadhyay</h3>
                <span className="inline-block bg-[#0E0F11] text-[#FAFAF8] text-[10px] font-mono px-2 py-0.5 rounded tracking-wider mb-4">
                  SOFTWARE DEVELOPER
                </span>
                <p className="text-xs text-[#6B6D72] font-mono leading-relaxed">
                  B.Tech. Computer Science &amp; Engineering<br />
                  Campus: Prayagraj, India · 2025–2029
                </p>
              </div>
              <div className="border-t border-[#E5E7EB] pt-4">
                <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                  <div className="bg-[#F0F0ED] p-2 rounded">
                    <span className="block font-bold text-sm text-[#0E0F11]">8.82</span>
                    <span className="text-[10px] text-[#6B6D72]">CGPA</span>
                  </div>
                  <div className="bg-[#F0F0ED] p-2 rounded">
                    <span className="block font-bold text-sm text-[#0E0F11]">600+</span>
                    <span className="text-[10px] text-[#6B6D72]">LEETCODE</span>
                  </div>
                </div>
                <p className="text-[10px] font-mono text-center text-[#6B6D72] mt-3">
                  Click badge to view technical links ↗
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-full justify-between select-none">
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono tracking-widest text-[#6B6D72] border-b border-[#E5E7EB] pb-2 mb-3">
                  <span>CAPABILITIES</span>
                  <span>VERIFIED</span>
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {personalInfo.hero.badgeDetails.stack.map((s) => (
                    <span key={s} className="bg-[#F0F0ED] text-[#0E0F11] text-[10px] font-mono px-2 py-0.5 rounded border border-[#D7D9DE]">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="block p-2 rounded bg-[#F7F7F5] border border-[#E5E7EB] text-xs font-mono hover:bg-[#0E0F11] hover:text-[#FAFAF8] transition-colors">
                    01 / GitHub: @upadhyayom1 ↗
                  </a>
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="block p-2 rounded bg-[#F7F7F5] border border-[#E5E7EB] text-xs font-mono hover:bg-[#0E0F11] hover:text-[#FAFAF8] transition-colors">
                    02 / LinkedIn: /in/om-upadhyay ↗
                  </a>
                  <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="block p-2 rounded bg-[#F7F7F5] border border-[#E5E7EB] text-xs font-mono hover:bg-[#0E0F11] hover:text-[#FAFAF8] transition-colors">
                    03 / LeetCode: @upadhyayom1 ↗
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="block p-2 rounded bg-[#F7F7F5] border border-[#E5E7EB] text-xs font-mono hover:bg-[#0E0F11] hover:text-[#FAFAF8] transition-colors">
                    04 / Email: upadhyayom234 ↗
                  </a>
                </div>
              </div>
              <p className="text-[10px] font-mono text-center text-[#6B6D72]">
                Click badge to flip back ⤾
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center outline-none select-none touch-none"
      tabIndex={0}
      aria-label="Om Upadhyay's interactive 3D lanyard identification badge. Drag to swing, tap to turn over."
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-auto"
        style={{ touchAction: "none" }}
      />

      {/* Floating Interaction Controls */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-[#FAFAF8]/90 backdrop-blur-md border border-[#E5E7EB] rounded-full px-3.5 py-1.5 shadow-sm text-xs font-mono text-[#6B6D72]">
        <span className="flex items-center gap-1.5">
          <Move className="w-3.5 h-3.5 text-[#0E0F11]" />
          <span>Drag badge to fling</span>
        </span>
        <span className="w-1 h-1 rounded-full bg-[#D7D9DE]" />
        <button
          onClick={() => flipTriggerRef.current && flipTriggerRef.current()}
          className="flex items-center gap-1.5 text-[#0E0F11] hover:text-[#17804A] font-medium transition-colors"
          type="button"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>Flip card ({isFlipped ? "Back" : "Front"})</span>
        </button>
      </div>

      {/* Initial Subtle Hint */}
      {hintVisible && (
        <div className="absolute top-8 right-6 z-10 hidden sm:flex items-center gap-2 pointer-events-none opacity-80 transition-opacity">
          <div className="text-right font-mono text-[11px] text-[#6B6D72] uppercase tracking-wider">
            Grab badge to swing
            <br />
            Tap to flip over
          </div>
          <div className="w-6 h-px bg-[#D7D9DE]" />
        </div>
      )}
    </div>
  );
}
