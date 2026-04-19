
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

// ── Particle Background ────────────────────────────────────────────────────────
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const DOTS = 100;
    const dots = Array.from({ length: DOTS }, () => ({
      x:  Math.random() * window.innerWidth,
      y:  Math.random() * window.innerHeight * 4,
      r:  Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.12,
      vy: (Math.random() - 0.5) * 0.12,
      o:  Math.random() * 0.3 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.o})`;
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.03*(1-dist/90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas ref={canvasRef} style={{
      position: "absolute", inset: 0,
      width: "100%", height: "100%",
      pointerEvents: "none", zIndex: 0,
    }} />
  );
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

// ── Real SVG Tech Logos ────────────────────────────────────────────────────────
const TechIcon = ({ name }) => {
  const icons = {
    "HTML": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#E44D26" d="M5 3l1.5 17L16 23l9.5-3L27 3z"/>
        <path fill="#F16529" d="M16 21.5l7.7-2.1 1.3-14.4H16z"/>
        <path fill="#EBEBEB" d="M16 13h-4.1l-.3-3H16V7H8.4l.8 9H16zm0 6.7l-.1.02-3.3-.9-.2-2.3H9.9l.4 4.5 5.7 1.6z"/>
        <path fill="#fff" d="M16 13v3h3.8l-.4 3.8-3.4.9V24l5.7-1.6.8-9.4z"/>
      </svg>
    ),
    "CSS": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#1572B6" d="M5 3l1.5 17L16 23l9.5-3L27 3z"/>
        <path fill="#33A9DC" d="M16 21.5l7.7-2.1 1.3-14.4H16z"/>
        <path fill="#fff" d="M16 13H11.9l-.3-3H16V7H8.9l.8 9H16zm0 6.7-.1.02-3.3-.9-.2-2.3H9.8l.4 4.5L16 23z"/>
        <path fill="#EBEBEB" d="M16 13v3h3.6l-.4 3.8-3.2.9V24l5.5-1.6.9-10.4z"/>
      </svg>
    ),
    "JavaScript": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <rect width="32" height="32" fill="#F7DF1E" rx="3"/>
        <path d="M9 25.3c.7 1.2 1.6 2 3.2 2 1.3 0 2.2-.7 2.2-1.6 0-1.1-.9-1.5-2.4-2.1l-.8-.4c-2.4-1-4-2.3-4-5 0-2.5 1.9-4.4 4.8-4.4 2.1 0 3.6.7 4.7 2.6l-2.5 1.6c-.6-1-1.2-1.4-2.2-1.4-1 0-1.6.6-1.6 1.4 0 1 .6 1.4 2 2l.8.3c2.8 1.2 4.4 2.4 4.4 5.2 0 3-2.3 4.7-5.4 4.7-3 0-5-1.5-5.9-3.4l2.7-1.5zm10.4.4c.5 1 1 1.8 2.1 1.8.98 0 1.6-.4 1.6-1.8V14.4h3v11.4c0 3-1.7 4.3-4.3 4.3-2.3 0-3.6-1.2-4.3-2.6l2-1.8z"/>
      </svg>
    ),
    "React": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <circle cx="16" cy="16" r="2.8" fill="#61DAFB"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)"/>
        <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)"/>
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <circle cx="16" cy="16" r="14" fill="#000"/>
        <path fill="#fff" d="M10.5 10h2v8.5l6-8.5h2V22h-2v-8.5L12.5 22h-2z"/>
      </svg>
    ),
    "Bootstrap": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <rect width="32" height="32" rx="6" fill="#7952B3"/>
        <path fill="#fff" d="M9 8h8.5c3.5 0 5.5 1.8 5.5 4.5 0 2-1.1 3.3-2.8 3.8 2.2.4 3.8 1.9 3.8 4.2C24 23.5 21.8 25 18 25H9V8zm3 7.5h5c1.7 0 2.8-.8 2.8-2.2S18.7 11 17 11h-5v4.5zm0 7h5.5c1.8 0 3-.9 3-2.5s-1.2-2.5-3-2.5H12V22.5z"/>
      </svg>
    ),
    "Tailwind CSS": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#38BDF8" d="M16 7c-3.6 0-5.8 1.8-6.7 5.3 1.3-1.8 2.9-2.4 4.7-2 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.7 2.9 5.8 2.9 3.6 0 5.8-1.8 6.7-5.3-1.3 1.8-2.9 2.4-4.7 2-1-.3-1.7-1-2.5-1.8C20.5 8.6 19.1 7 16 7zm-6.7 8c-3.6 0-5.8 1.8-6.7 5.3 1.3-1.8 2.9-2.4 4.7-2 1 .3 1.7 1 2.5 1.8 1.3 1.3 2.7 2.9 5.8 2.9 3.6 0 5.8-1.8 6.7-5.3-1.3 1.8-2.9 2.4-4.7 2-1-.3-1.7-1-2.5-1.8C13.8 16.6 12.4 15 9.3 15z"/>
      </svg>
    ),
    "Framer Motion": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#BB4FF0" d="M8 4h16v8H16zm0 8h8l8 8H16zm0 8h8v8z"/>
      </svg>
    ),
    "Redux": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#764ABC" d="M20.6 7.8c-.4-1.8-1.5-2.8-2.8-2.8-1.8 0-2.8 1.4-2.8 3.2 0 .6.1 1.2.3 1.7-1.2.3-2.3.9-3.2 1.8-1.2-1-2.5-1.2-3.5-.6-1.5.9-1.7 2.9-.5 4.4.4.5.9.9 1.5 1.1-.1.5-.1 1.1-.1 1.6 0 2.4.8 4.5 2 5.9-1.1 1.4-1.2 2.9-.3 3.8 1.2 1.1 3.3.7 4.9-.9.9.4 1.9.6 3 .6 1 0 2-.2 3-.6 1.6 1.6 3.7 2 4.9.9.9-.9.8-2.4-.3-3.8 1.2-1.4 2-3.5 2-5.9 0-.5 0-1.1-.1-1.6.6-.2 1.1-.6 1.5-1.1 1.2-1.5 1-3.5-.5-4.4-1-.6-2.3-.4-3.5.6-.9-.9-2-1.5-3.2-1.8.2-.5.3-1.1.3-1.7-.1-1.5-.9-2.7-2.6-3.4z"/>
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#339933" d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3zm0 2.3l9.5 5.2v10.5L16 26.7l-9.5-5.2V10.5L16 5.3z"/>
        <path fill="#339933" d="M16 9c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"/>
      </svg>
    ),
    "Express.js": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#fff" d="M4 14h11v1.5H6l8 9H12L4 15.5V14zm24 0H17v1.5h9l-8 9h2l8-9.5V14z"/>
      </svg>
    ),
    "Flask": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#fff" d="M13 4v10L6 24c-.8 1.3-.1 4 3 4h14c3.1 0 3.8-2.7 3-4l-7-10V4h-6zm1 2h4v9.5l7 10c.3.6 0 1.5-1 1.5H8c-1 0-1.3-.9-1-1.5l7-10V6z"/>
        <circle cx="12" cy="21" r="1.5" fill="#e8641a"/>
        <circle cx="18" cy="24" r="1" fill="#e8641a"/>
      </svg>
    ),
    "MongoDB": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#47A248" d="M16 3c-.5 5-2.5 6.8-3.8 8.5C10.8 13.5 10 15.5 10 18c0 3.5 2.2 6.5 6 7.8V28h1V3h-1zm1 0v25h1v-2.2c3.8-1.3 6-4.3 6-7.8 0-2.5-.8-4.5-2.2-6.5C20.5 9.8 18.5 8 17 3z"/>
      </svg>
    ),
    "Supabase": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#3ECF8E" d="M17.5 3.5L5 18h9.5l-1 10.5L27 14H17.5z"/>
      </svg>
    ),
    "PostgreSQL": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#336791" d="M16 3C9.4 3 4 8.4 4 15c0 5.5 3.5 10.1 8.5 11.8V30h7v-3.2C24.5 25.1 28 20.5 28 15c0-6.6-5.4-12-12-12z"/>
        <path fill="#fff" d="M16 7c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1 12v-3H13v-2h2v-1h-2v-2h2V9h2v2h1v2h-1v1h1v2h-1v3h-2z"/>
      </svg>
    ),
    "Git": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#F05032" d="M29.5 14.6L17.4 2.5c-.8-.8-2-.8-2.8 0l-2.8 2.8 3.5 3.5c.8-.3 1.8-.1 2.5.6.7.7.9 1.7.6 2.5l3.4 3.4c.8-.3 1.8-.1 2.5.6 1 1 1 2.6 0 3.6-1 1-2.6 1-3.6 0-.7-.7-.9-1.8-.5-2.7l-3.2-3.2v8.4c.2.1.5.3.7.5 1 1 1 2.6 0 3.6-1 1-2.6 1-3.6 0-1-1-1-2.6 0-3.6.2-.2.5-.4.8-.5v-8.5c-.3-.1-.6-.3-.8-.5-.7-.7-.9-1.8-.5-2.7L10.2 7.6 2.5 15.3c-.8.8-.8 2 0 2.8l12.1 12.1c.8.8 2 .8 2.8 0l12.1-12.1c.8-.7.8-2 0-2.5z"/>
      </svg>
    ),
    "GitHub": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#fff" d="M16 3C9.4 3 4 8.4 4 15c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.7.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C24.6 24.8 28 20.3 28 15c0-6.6-5.4-12-12-12z"/>
      </svg>
    ),
    "Docker": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#2496ED" d="M27.8 14.4c-.4-.3-1.4-.4-2.2-.3-.1-.8-.6-1.5-1.3-2l-.5-.3-.3.5c-.4.5-.5 1.4-.5 2 .1.5.3 1 .6 1.4-.3.2-.9.4-1.7.4H3.6c-.2 1.3.1 3 .9 4.2.9 1.2 2.2 1.8 3.9 1.8 3.7 0 6.4-1.7 7.7-4.8.5 0 1.6 0 2.2-.9h.1c.5 0 1.5-.1 2-.9l.1-.2-.2-.2c-.2-.2-.8-.3-1.3-.2zM8 12H6v2h2v-2zm3 0H9v2h2v-2zm3 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-9-3H6v2h2V9zm3 0H9v2h2V9zm3 0h-2v2h2V9zm3 0h-2v2h2V9zm-3-3h-2v2h2V6z"/>
      </svg>
    ),
    "VS Code": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#007ACC" d="M23.5 4L12 14.5 6.5 10 4 11.5v9l2.5 1.5 5.5-4.5L23.5 28 28 25.5v-19L23.5 4zM26 24l-11-8.5L26 8v16z"/>
      </svg>
    ),
    "Java": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#EA2D2E" d="M12 21.5s-1.2.7.8.9c2.4.3 3.7.2 6.3-.2 0 0 .7.4 1.7.8-6 2.6-13.5-.1-8.8-1.5z"/>
        <path fill="#EA2D2E" d="M11.3 18.7s-1.3 1 .7 1.1c2.5.2 4.5.2 8-.4 0 0 .5.5 1.3.8-7 2-14.8.2-10-1.5z"/>
        <path fill="#EA2D2E" d="M17 13.2c1.4 1.6-.4 3.1-.4 3.1s3.6-1.9 1.9-4.2c-1.5-2.1-2.7-3.2 3.7-6.8 0 0-10 2.5-5.2 7.9z"/>
        <path fill="#EA2D2E" d="M24.4 23.1s.9.7-.9 1.3c-3.4 1-14 1.3-17-.1-1.1-.5.9-1.1 1.5-1.3.6-.1 1-.1 1-.1-1.2-.8-7.5 1.6-3.2 2.3 11.6 1.9 21.2-.9 18.6-2.1zM12.5 15.5s-5.4 1.3-1.9 1.7c1.5.2 4.5.2 7.3-.1 2.3-.2 4.6-.7 4.6-.7s-.8.3-1.4.7c-5.5 1.4-16.2.8-13.1-.7 2.6-1.3 4.5-1 4.5-1zM21.8 20.1c5.6-2.9 3-5.7 1.2-5.3-.4.1-.6.2-.6.2s.2-.3.5-.4c3.5-1.2 6.2 3.6-1.1 5.5 0 0 .1-.1 0 0z"/>
        <path fill="#EA2D2E" d="M18.5 3s3.1 3.1-2.9 7.9c-4.8 3.8-1.1 5.9 0 8.4-2.8-2.5-4.8-4.7-3.5-6.8 2.1-3.1 7.8-4.6 6.4-9.5z"/>
      </svg>
    ),
    "Python": (
      <svg viewBox="0 0 32 32" width="26" height="26">
        <path fill="#3776AB" d="M15.9 3c-4.3 0-4 1.9-4 1.9v2h8.2v.7H9.9S6 7.2 6 11.7c0 4.4 2.5 4.3 2.5 4.3h1.5v-2.1s-.1-2.5 2.5-2.5h8s2.4 0 2.4-2.3V5.3c0 0 .3-2.3-7-2.3zm-3 1.4c.4 0 .7.3.7.7s-.3.7-.7.7-.7-.3-.7-.7.3-.7.7-.7z"/>
        <path fill="#FFD43B" d="M16.1 29c4.3 0 4-1.9 4-1.9v-2h-8.2v-.7h10.2s3.9.4 3.9-4.1c0-4.4-2.5-4.3-2.5-4.3h-1.5v2.1s.1 2.5-2.5 2.5h-8s-2.4 0-2.4 2.3v3.8s-.3 2.3 7 2.3zm3-1.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7.7.3.7.7-.3.7-.7.7z"/>
      </svg>
    ),
  };

  return icons[name] || (
    <span style={{ fontSize: "13px", fontWeight: 900, color: "#e8641a", fontFamily: "monospace" }}>
      {name.substring(0, 2).toUpperCase()}
    </span>
  );
};

// ── Skill categories ───────────────────────────────────────────────────────────
const categories = [
  {
    label: "Frontend",
    skills: ["HTML","CSS","JavaScript","React","Next.js","Bootstrap","Tailwind CSS","Framer Motion","Redux"],
  },
  {
    label: "Backend",
    skills: ["Node.js","Express.js","Next.js","Flask"],
  },
  {
    label: "Database",
    skills: ["MongoDB","Supabase","PostgreSQL"],
  },
  {
    label: "Tools",
    skills: ["Git","GitHub","Docker","VS Code"],
  },
  {
    label: "Languages",
    skills: ["Java","Python"],
  },
];

function Divider() {
  return (
    <div style={{
      height: "1px", margin: "0 40px",
      background: "linear-gradient(to right, transparent, rgba(232,100,26,0.15), transparent)",
    }} />
  );
}

// ── ABOUT ──────────────────────────────────────────────────────────────────────
// function About() {
//   return (
//     <section id="about" style={{
//       padding: "120px 40px 100px",
//       background: "#141414",
//       position: "relative",
//       overflow: "hidden",
//     }}>
//       <ParticleBackground />
//       <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

//         <motion.div variants={fadeUp} initial="hidden" whileInView="visible"
//           viewport={{ once: true }} style={{ marginBottom: "80px" }}>
//           <p style={{
//             fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
//             color: "#e8641a", textTransform: "uppercase", marginBottom: "24px",
//           }}>About Me</p>
//           <h2 style={{
//             fontFamily: "'Anton', 'Impact', sans-serif",
//             fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900,
//             textTransform: "uppercase", letterSpacing: "-1px",
//             lineHeight: 1, color: "#fff", margin: "0 0 24px", maxWidth: "800px",
//           }}>
//             I build things that{" "}
//             <span style={{ color: "#e8641a" }}>live on the internet</span>
//             {" "}and actually work.
//           </h2>
//           <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
//             style={{
//               height: "2px", width: "80px",
//               background: "linear-gradient(90deg, #e8641a, transparent)",
//               transformOrigin: "left",
//             }}
//           />
//         </motion.div>

//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "60px", alignItems: "start" }}>
//           <motion.div variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
//             <h3 style={{
//               fontFamily: "'Anton', 'Impact', sans-serif",
//               fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900,
//               textTransform: "uppercase", color: "#fff",
//               letterSpacing: "-0.5px", lineHeight: 1, margin: 0,
//             }}>
//               Hi, I&apos;m<br /><span style={{ color: "#e8641a" }}>Sukanya.</span>
//             </h3>
//             <div style={{ height: "1px", margin: "24px 0", background: "rgba(255,255,255,0.08)" }} />
//             {[
//               { label: "Based in",  value: "Kolkata, India"     },
//               { label: "Studying",  value: "B.Tech CS (AI/ML)" },
//               { label: "Available", value: "Remote Internships" },
//             ].map((f) => (
//               <div key={f.label} style={{
//                 display: "flex", justifyContent: "space-between",
//                 alignItems: "center", padding: "10px 0",
//                 borderBottom: "1px solid rgba(255,255,255,0.05)",
//               }}>
//                 <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>{f.label}</span>
//                 <span style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>{f.value}</span>
//               </div>
//             ))}
//           </motion.div>

//           <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
//             viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//             <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
//             I’m a second-year Computer Science student exploring the intersection of full-stack development and AI.

//             I enjoy building products that feel smooth, intuitive, and purposeful — where design and functionality work together, not against each other.


//             </p>
//             <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
//             Recently, I’ve been integrating LLMs into my projects to make them more intelligent and interactive. I’m driven by curiosity, a love for building, and the idea that good tech should feel effortless to use.
//             </p>
//             <div style={{ marginTop: "8px" }}>
//               <span style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 padding: "8px 16px", background: "rgba(232,100,26,0.08)",
//                 border: "1px solid rgba(232,100,26,0.25)", borderRadius: "999px",
//                 fontSize: "13px", color: "#e8641a", fontWeight: 500,
//               }}>
//                 <span style={{
//                   width: "7px", height: "7px", borderRadius: "50%",
//                   background: "#e8641a", animation: "pulse 2s infinite",
//                 }} />
//                 Open to remote internships
//               </span>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//       <style>{`
//         @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.3)} }
//       `}</style>
//     </section>
//   );
// }




function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 40px 100px",
        background: "#141414",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ParticleBackground />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {/* SECTION TITLE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ marginBottom: "80px" }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "3px",
              color: "#e8641a",
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            About Me
          </p>

          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(48px, 6vw, 72px)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "-1px",
              lineHeight: 1.05,
              color: "#ffffff",
              margin: "0 0 24px",
              maxWidth: "900px",
            }}
          >
            I build things that{" "}
            <span style={{ color: "#e8641a" }}>
              live on the internet
            </span>{" "}
            and actually work.
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              height: "2px",
              width: "80px",
              background: "linear-gradient(90deg, #e8641a, transparent)",
              transformOrigin: "left",
            }}
          />
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1,
                margin: 0,
              }}
            >
              Hi, I’m <br />
              <span style={{ color: "#e8641a" }}>Sukanya.</span>
            </h3>

            <div
              style={{
                height: "1px",
                margin: "24px 0",
                background: "rgba(255,255,255,0.08)",
              }}
            />

            {[
              { label: "Based in", value: "Kolkata, India" },
              { label: "Studying", value: "B.Tech CS (AI/ML)" },
              { label: "Available", value: "Remote Internships" },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {f.label}
                </span>

                <span
                  style={{
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {f.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* RIGHT SIDE TEXT */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "18px",
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: "560px",
                margin: 0,
              }}
            >
              I’m a developer who enjoys turning ideas into interactive,
              real-world products.

              Currently pursuing Computer Science with a focus on AI/ML, I build
              full-stack applications that combine clean design, solid
              engineering, and intelligent features.
            </p>

            <p
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "16px",
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: "560px",
                margin: 0,
              }}
            >
              Lately, I’ve been experimenting with LLMs to make apps not just
              functional, but genuinely smart. I’m always learning, always
              building, and always exploring.
            </p>

            {/* BADGE */}
            <div style={{ marginTop: "10px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  background: "rgba(232,100,26,0.08)",
                  border: "1px solid rgba(232,100,26,0.25)",
                  fontSize: "13px",
                  color: "#e8641a",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    background: "#e8641a",
                  }}
                />
                Open to internships / freelance
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pulse Animation */}
      <style>{`
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}

// ── SKILLS ─────────────────────────────────────────────────────────────────────
function Skills() {
  return (
    <section id="skills" style={{
      padding: "100px 40px", background: "#141414",
      position: "relative", overflow: "hidden",
    }}>
      <ParticleBackground />
      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }} style={{ marginBottom: "60px" }}>
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
            color: "#e8641a", textTransform: "uppercase", marginBottom: "12px",
          }}>My Stack</p>
          <h2 style={{
            fontFamily: "'Anton', 'Impact', sans-serif",
            fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "-1px", lineHeight: 1, margin: 0,
          }}>
            <span style={{ color: "#e8641a" }}>TOOLS</span>{" "}
            <span style={{ color: "#fff" }}>I BUILD WITH</span>
          </h2>
        </motion.div>

        {categories.map((cat, ci) => (
          <motion.div key={cat.label}
            variants={fadeUp} custom={ci}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              display: "grid", gridTemplateColumns: "220px 1fr",
              gap: "40px", alignItems: "center", padding: "32px 0",
              borderBottom: ci < categories.length - 1
                ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            {/* Category label — bold and clear */}
            <h3 style={{
              fontFamily:    "'Anton', 'Impact', sans-serif",
              fontSize:      "clamp(32px, 3.5vw, 48px)",
              fontWeight:    900,
              textTransform: "uppercase",
              letterSpacing: "-0.5px",
              color:         "rgba(255,255,255,0.18)",
              margin:        0,
              lineHeight:    1,
            }}>
              {cat.label}
            </h3>

            {/* Skills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              {cat.skills.map((skill, si) => (
                <motion.div key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: si * 0.05 }}
                  whileHover={{ y: -3, borderColor: "rgba(232,100,26,0.5)" }}
                  style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    padding: "10px 14px", background: "#1c1c1c",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "10px", transition: "border-color 0.2s ease",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    background: "#252525",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <TechIcon name={skill} />
                  </div>
                  <span style={{
                    color: "rgba(255,255,255,0.8)", fontSize: "13px",
                    fontWeight: 500, whiteSpace: "nowrap",
                  }}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ── RANDOM THOUGHTS ────────────────────────────────────────────────────────────
function RandomThoughts() {
  return (
    <section style={{
      padding: "120px 40px", background: "#141414",
      textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px", height: "300px",
        background: "radial-gradient(ellipse,rgba(232,100,26,0.06),transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
        <motion.p variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
            color: "#e8641a", textTransform: "uppercase", marginBottom: "48px",
          }}>
          Random Thoughts
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}>
          <div style={{
            fontFamily: "'Anton','Impact',sans-serif",
            fontSize: "120px", color: "rgba(232,100,26,0.15)",
            lineHeight: 0.5, marginBottom: "32px", userSelect: "none",
          }}>"</div>
          <h2 style={{
            fontFamily: "'Anton','Impact',sans-serif",
            fontSize: "clamp(48px,8vw,100px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "-2px",
            lineHeight: 0.95, margin: "0 0 40px", color: "#fff",
          }}>
            WHAT IF IT <span style={{ color: "#e8641a" }}>ALL</span>
            <br />WORKS OUT?
          </h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              color: "rgba(255,255,255,0.2)", fontSize: "13px",
              letterSpacing: "2px", textTransform: "uppercase", fontFamily: "monospace",
            }}>
            — Sukanya Bhowmick
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ── CTA ────────────────────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ padding: "100px 40px 120px", background: "#141414", textAlign: "center" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p style={{
            fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
            color: "#e8641a", textTransform: "uppercase", marginBottom: "20px",
          }}>What&apos;s Next?</p>
          <h2 style={{
            fontFamily: "'Anton','Impact',sans-serif",
            fontSize: "clamp(36px,6vw,72px)", fontWeight: 900,
            textTransform: "uppercase", letterSpacing: "-1px",
            lineHeight: 1, color: "#fff", margin: "0 0 20px",
          }}>
            READY TO <span style={{ color: "#e8641a" }}>BUILD</span>
            <br />SOMETHING?
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.4)", fontSize: "15px",
            lineHeight: 1.7, margin: "0 0 48px",
          }}>
            I&apos;m currently open to remote internship opportunities.
            Whether you have a project in mind or just want to say hi — I&apos;d love to hear from you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/projects" style={{
              padding: "14px 36px", background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)", borderRadius: "8px",
              color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 600,
              textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase",
              transition: "all 0.2s ease", display: "inline-block",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor="#e8641a"; e.currentTarget.style.color="#e8641a"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor="rgba(255,255,255,0.15)"; e.currentTarget.style.color="rgba(255,255,255,0.7)"; }}
            >View My Work</Link>
            <Link href="/contact" style={{
              padding: "14px 36px", background: "#e8641a",
              border: "1px solid #e8641a", borderRadius: "8px",
              color: "#fff", fontSize: "13px", fontWeight: 700,
              textDecoration: "none", letterSpacing: "1px", textTransform: "uppercase",
              transition: "all 0.2s ease", display: "inline-block",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background="#f0731f"; e.currentTarget.style.transform="translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background="#e8641a"; e.currentTarget.style.transform="translateY(0)"; }}
            >Contact Me</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomeContent() {
  return (
    <>
      <About />
      <Divider />
      <Skills />
      <Divider />
      <RandomThoughts />
      <Divider />
      <CTA />
    </>
  );
}















// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";

// const fadeUp = {
//   hidden:  { opacity: 0, y: 30 },
//   visible: (i = 0) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
//   }),
// };

// // ── Skill categories ───────────────────────────────────────────────────────────
// const categories = [
//   {
//     label: "Frontend",
//     skills: [
//       { name: "HTML",          icon: "🌐" },
//       { name: "CSS",           icon: "🎨" },
//       { name: "JavaScript",    icon: "JS" },
//       { name: "React",         icon: "⚛️" },
//       { name: "Next.js",       icon: "▲"  },
//       { name: "Bootstrap",     icon: "B"  },
//       { name: "Tailwind CSS",  icon: "🌊" },
//       { name: "Framer Motion", icon: "🎯" },
//       { name: "Redux",         icon: "🔄" },
//     ],
//   },
//   {
//     label: "Backend",
//     skills: [
//       { name: "Node.js",   icon: "🟢" },
//       { name: "Express.js", icon: "⚡" },
//       { name: "Next.js",   icon: "▲"  },
//       { name: "Flask",     icon: "🔬" },
//     ],
//   },
//   {
//     label: "Database",
//     skills: [
//       { name: "MongoDB",    icon: "🍃" },
//       { name: "Supabase",   icon: "⚡" },
//       { name: "PostgreSQL", icon: "🐘" },
//     ],
//   },
//   {
//     label: "Tools",
//     skills: [
//       { name: "Git",    icon: "🌿" },
//       { name: "GitHub", icon: "🐙" },
//       { name: "Docker", icon: "🐳" },
//       { name: "VS Code", icon: "💙" },
//     ],
//   },
//   {
//     label: "Languages",
//     skills: [
//       { name: "Java",   icon: "☕" },
//       { name: "Python", icon: "🐍" },
//     ],
//   },
// ];

// // ── Divider ────────────────────────────────────────────────────────────────────
// function Divider() {
//   return (
//     <div style={{
//       height:     "1px",
//       margin:     "0 40px",
//       background: "linear-gradient(to right, transparent, rgba(232,100,26,0.15), transparent)",
//     }} />
//   );
// }

// // ── ABOUT ──────────────────────────────────────────────────────────────────────
// function About() {
//   return (
//     <section id="about" style={{ padding: "120px 40px 100px", background: "#141414" }}>
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

//         <motion.div
//           variants={fadeUp} initial="hidden" whileInView="visible"
//           viewport={{ once: true }} style={{ marginBottom: "80px" }}
//         >
//           <p style={{
//             fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
//             color: "#e8641a", textTransform: "uppercase", marginBottom: "24px",
//           }}>
//             About Me
//           </p>
//           <h2 style={{
//             fontFamily: "'Anton', 'Impact', sans-serif",
//             fontSize: "clamp(36px, 5vw, 64px)",
//             fontWeight: 900, textTransform: "uppercase",
//             letterSpacing: "-1px", lineHeight: 1,
//             color: "#fff", margin: "0 0 24px", maxWidth: "800px",
//           }}>
//             I build things that{" "}
//             <span style={{ color: "#e8641a" }}>live on the internet</span>
//             {" "}and actually work.
//           </h2>
//           <motion.div
//             initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             style={{
//               height: "2px", width: "80px",
//               background: "linear-gradient(90deg, #e8641a, transparent)",
//               transformOrigin: "left",
//             }}
//           />
//         </motion.div>

//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1.4fr",
//           gap: "60px", alignItems: "start",
//         }}>
//           {/* Left */}
//           <motion.div
//             variants={fadeUp} custom={1} initial="hidden"
//             whileInView="visible" viewport={{ once: true }}
//           >
//             <h3 style={{
//               fontFamily: "'Anton', 'Impact', sans-serif",
//               fontSize: "clamp(32px, 4vw, 52px)",
//               fontWeight: 900, textTransform: "uppercase",
//               color: "#fff", letterSpacing: "-0.5px",
//               lineHeight: 1, margin: 0,
//             }}>
//               Hi, I&apos;m<br />
//               <span style={{ color: "#e8641a" }}>Sukanya.</span>
//             </h3>
//             <div style={{ height: "1px", margin: "24px 0", background: "rgba(255,255,255,0.08)" }} />
//             {[
//               { label: "Based in",  value: "Odisha, India"      },
//               { label: "Studying",  value: "B.Tech CS (AI/ML)"  },
//               { label: "Available", value: "Remote Internships"  },
//             ].map((f) => (
//               <div key={f.label} style={{
//                 display: "flex", justifyContent: "space-between",
//                 alignItems: "center", padding: "10px 0",
//                 borderBottom: "1px solid rgba(255,255,255,0.05)",
//               }}>
//                 <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px" }}>{f.label}</span>
//                 <span style={{ color: "#fff", fontSize: "13px", fontWeight: 500 }}>{f.value}</span>
//               </div>
//             ))}
//           </motion.div>

//           {/* Right */}
//           <motion.div
//             variants={fadeUp} custom={2} initial="hidden"
//             whileInView="visible" viewport={{ once: true }}
//             style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//           >
//             <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
//               I&apos;m a second-year Computer Science student specializing in AI/ML
//               at Sri Sri University, Cuttack. I build full-stack web applications
//               — from pixel-perfect frontends to backend APIs that don&apos;t break
//               under pressure.
//             </p>
//             <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "15px", lineHeight: 1.8, margin: 0 }}>
//               Lately I&apos;ve been weaving LLM APIs into my projects to make them
//               genuinely smarter. I care about code that&apos;s clean, interfaces
//               that feel alive, and products that solve real problems. When I&apos;m
//               not coding I&apos;m probably travelling or planning my next trip.
//             </p>
//             <div style={{ marginTop: "8px" }}>
//               <span style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 padding: "8px 16px",
//                 background: "rgba(232,100,26,0.08)",
//                 border: "1px solid rgba(232,100,26,0.25)",
//                 borderRadius: "999px", fontSize: "13px",
//                 color: "#e8641a", fontWeight: 500,
//               }}>
//                 <span style={{
//                   width: "7px", height: "7px", borderRadius: "50%",
//                   background: "#e8641a", animation: "pulse 2s infinite",
//                 }} />
//                 Open to remote internships
//               </span>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.4; transform: scale(1.3); }
//         }
//       `}</style>
//     </section>
//   );
// }

// // ── SKILLS ─────────────────────────────────────────────────────────────────────
// function Skills() {
//   return (
//     <section id="skills" style={{ padding: "100px 40px", background: "#141414" }}>
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

//         {/* Heading */}
//         <motion.div
//           variants={fadeUp} initial="hidden" whileInView="visible"
//           viewport={{ once: true }} style={{ marginBottom: "70px" }}
//         >
//           <p style={{
//             fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
//             color: "#e8641a", textTransform: "uppercase", marginBottom: "12px",
//           }}>
//             My Stack
//           </p>
//           <h2 style={{
//             fontFamily: "'Anton', 'Impact', sans-serif",
//             fontSize: "clamp(36px, 5vw, 60px)",
//             fontWeight: 900, textTransform: "uppercase",
//             letterSpacing: "-1px", lineHeight: 1, margin: 0,
//           }}>
//             <span style={{ color: "#e8641a" }}>TOOLS</span>{" "}
//             <span style={{ color: "#fff" }}>I BUILD WITH</span>
//           </h2>
//         </motion.div>

//         {/* Category rows */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
//           {categories.map((cat, ci) => (
//             <motion.div
//               key={cat.label}
//               variants={fadeUp} custom={ci}
//               initial="hidden" whileInView="visible"
//               viewport={{ once: true }}
//               style={{
//                 display:     "grid",
//                 gridTemplateColumns: "200px 1fr",
//                 gap:         "40px",
//                 alignItems:  "center",
//                 padding:     "36px 0",
//                 borderBottom: ci < categories.length - 1
//                   ? "1px solid rgba(255,255,255,0.05)"
//                   : "none",
//               }}
//             >
//               {/* Category label */}
//               <div>
//                 <h3 style={{
//                   fontFamily:    "'Anton', 'Impact', sans-serif",
//                   fontSize:      "clamp(28px, 3vw, 44px)",
//                   fontWeight:    900,
//                   textTransform: "uppercase",
//                   letterSpacing: "-0.5px",
//                   color:         "rgba(255,255,255,0.12)",
//                   margin:        0,
//                   lineHeight:    1,
//                 }}>
//                   {cat.label}
//                 </h3>
//               </div>

//               {/* Skill icons */}
//               <div style={{
//                 display:   "flex",
//                 flexWrap:  "wrap",
//                 gap:       "12px",
//                 alignItems:"center",
//               }}>
//                 {cat.skills.map((skill, si) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.3, delay: si * 0.06 }}
//                     whileHover={{ y: -4, scale: 1.05 }}
//                     style={{
//                       display:        "flex",
//                       alignItems:     "center",
//                       gap:            "10px",
//                       padding:        "10px 16px",
//                       background:     "#1c1c1c",
//                       border:         "1px solid rgba(255,255,255,0.06)",
//                       borderRadius:   "10px",
//                       transition:     "border-color 0.2s ease",
//                       cursor:         "default",
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.borderColor = "rgba(232,100,26,0.4)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
//                     }}
//                   >
//                     {/* Icon box */}
//                     <div style={{
//                       width:          "36px",
//                       height:         "36px",
//                       borderRadius:   "8px",
//                       background:     "rgba(232,100,26,0.08)",
//                       border:         "1px solid rgba(232,100,26,0.12)",
//                       display:        "flex",
//                       alignItems:     "center",
//                       justifyContent: "center",
//                       fontSize:       skill.icon.length <= 2 ? "12px" : "18px",
//                       fontWeight:     900,
//                       color:          "#e8641a",
//                       flexShrink:     0,
//                       fontFamily:     skill.icon.length <= 2 ? "monospace" : "inherit",
//                       letterSpacing:  "0px",
//                     }}>
//                       {skill.icon}
//                     </div>
//                     <span style={{
//                       color:      "rgba(255,255,255,0.7)",
//                       fontSize:   "13px",
//                       fontWeight: 500,
//                       whiteSpace: "nowrap",
//                     }}>
//                       {skill.name}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── RANDOM THOUGHTS ────────────────────────────────────────────────────────────
// function RandomThoughts() {
//   return (
//     <section style={{
//       padding: "120px 40px", background: "#141414",
//       textAlign: "center", position: "relative", overflow: "hidden",
//     }}>
//       <div style={{
//         position: "absolute", top: "50%", left: "50%",
//         transform: "translate(-50%, -50%)",
//         width: "600px", height: "300px",
//         background: "radial-gradient(ellipse, rgba(232,100,26,0.06), transparent 70%)",
//         pointerEvents: "none",
//       }} />
//       <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
//         <motion.p
//           variants={fadeUp} initial="hidden" whileInView="visible"
//           viewport={{ once: true }}
//           style={{
//             fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
//             color: "#e8641a", textTransform: "uppercase", marginBottom: "48px",
//           }}
//         >
//           Random Thoughts
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <div style={{
//             fontFamily: "'Anton', 'Impact', sans-serif",
//             fontSize: "120px", color: "rgba(232,100,26,0.15)",
//             lineHeight: 0.5, marginBottom: "32px", userSelect: "none",
//           }}>
//             "
//           </div>
//           <h2 style={{
//             fontFamily:    "'Anton', 'Impact', sans-serif",
//             fontSize:      "clamp(48px, 8vw, 100px)",
//             fontWeight:    900,
//             textTransform: "uppercase",
//             letterSpacing: "-2px",
//             lineHeight:    0.95,
//             margin:        "0 0 40px",
//             color:         "#fff",
//           }}>
//             WHAT IF IT{" "}
//             <span style={{ color: "#e8641a" }}>ALL</span>
//             <br />
//             WORKS OUT?
//           </h2>
//           <motion.p
//             initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//             style={{
//               color: "rgba(255,255,255,0.2)", fontSize: "13px",
//               letterSpacing: "2px", textTransform: "uppercase",
//               fontFamily: "monospace",
//             }}
//           >
//             — Sukanya Bhowmick
//           </motion.p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // ── CTA ────────────────────────────────────────────────────────────────────────
// function CTA() {
//   return (
//     <section style={{
//       padding: "100px 40px 120px",
//       background: "#141414", textAlign: "center",
//     }}>
//       <div style={{ maxWidth: "700px", margin: "0 auto" }}>
//         <motion.div
//           variants={fadeUp} initial="hidden"
//           whileInView="visible" viewport={{ once: true }}
//         >
//           <p style={{
//             fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
//             color: "#e8641a", textTransform: "uppercase", marginBottom: "20px",
//           }}>
//             What&apos;s Next?
//           </p>
//           <h2 style={{
//             fontFamily: "'Anton', 'Impact', sans-serif",
//             fontSize: "clamp(36px, 6vw, 72px)",
//             fontWeight: 900, textTransform: "uppercase",
//             letterSpacing: "-1px", lineHeight: 1,
//             color: "#fff", margin: "0 0 20px",
//           }}>
//             READY TO{" "}
//             <span style={{ color: "#e8641a" }}>BUILD</span>
//             <br />SOMETHING?
//           </h2>
//           <p style={{
//             color: "rgba(255,255,255,0.4)", fontSize: "15px",
//             lineHeight: 1.7, margin: "0 0 48px",
//           }}>
//             I&apos;m currently open to remote internship opportunities.
//             Whether you have a project in mind or just want to say hi —
//             I&apos;d love to hear from you.
//           </p>
//           <div style={{
//             display: "flex", gap: "16px",
//             justifyContent: "center", flexWrap: "wrap",
//           }}>
//             <Link
//               href="/projects"
//               style={{
//                 padding: "14px 36px", background: "transparent",
//                 border: "1px solid rgba(255,255,255,0.15)",
//                 borderRadius: "8px", color: "rgba(255,255,255,0.7)",
//                 fontSize: "13px", fontWeight: 600,
//                 textDecoration: "none", letterSpacing: "1px",
//                 textTransform: "uppercase", transition: "all 0.2s ease",
//                 display: "inline-block",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = "#e8641a";
//                 e.currentTarget.style.color       = "#e8641a";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
//                 e.currentTarget.style.color       = "rgba(255,255,255,0.7)";
//               }}
//             >
//               View My Work
//             </Link>
//             <Link
//               href="/contact"
//               style={{
//                 padding: "14px 36px", background: "#e8641a",
//                 border: "1px solid #e8641a", borderRadius: "8px",
//                 color: "#fff", fontSize: "13px", fontWeight: 700,
//                 textDecoration: "none", letterSpacing: "1px",
//                 textTransform: "uppercase", transition: "all 0.2s ease",
//                 display: "inline-block",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = "#f0731f";
//                 e.currentTarget.style.transform  = "translateY(-2px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = "#e8641a";
//                 e.currentTarget.style.transform  = "translateY(0)";
//               }}
//             >
//               Contact Me
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // ── EXPORT ─────────────────────────────────────────────────────────────────────
// export default function HomeContent() {
//   return (
//     <>
//       <About />
//       <Divider />
//       <Skills />
//       <Divider />
//       <RandomThoughts />
//       <Divider />
//       <CTA />
//     </>
//   );
// }