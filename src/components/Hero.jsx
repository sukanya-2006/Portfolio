
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";

// // ── Particle Canvas ────────────────────────────────────────────────────────────
// function ParticleBackground() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animId;

//     const resize = () => {
//       canvas.width  = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const DOTS = 120;
//     const dots = Array.from({ length: DOTS }, () => ({
//       x:  Math.random() * window.innerWidth,
//       y:  Math.random() * window.innerHeight,
//       r:  Math.random() * 1.5 + 0.4,
//       vx: (Math.random() - 0.5) * 0.15,
//       vy: (Math.random() - 0.5) * 0.15,
//       o:  Math.random() * 0.35 + 0.1,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       dots.forEach((d) => {
//         d.x += d.vx; d.y += d.vy;
//         if (d.x < 0) d.x = canvas.width;
//         if (d.x > canvas.width) d.x = 0;
//         if (d.y < 0) d.y = canvas.height;
//         if (d.y > canvas.height) d.y = 0;
//         ctx.beginPath();
//         ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255,255,255,${d.o})`;
//         ctx.fill();
//       });
//       for (let i = 0; i < dots.length; i++) {
//         for (let j = i + 1; j < dots.length; j++) {
//           const dx = dots[i].x - dots[j].x;
//           const dy = dots[i].y - dots[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(dots[i].x, dots[i].y);
//             ctx.lineTo(dots[j].x, dots[j].y);
//             ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 100)})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }
//       animId = requestAnimationFrame(draw);
//     };
//     draw();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} style={{
//       position: "absolute", inset: 0,
//       width: "100%", height: "100%",
//       pointerEvents: "none", zIndex: 0,
//     }} />
//   );
// }

// // ── Animated Counter ───────────────────────────────────────────────────────────
// function Counter({ target, suffix = "" }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const started = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && !started.current) {
//         started.current = true;
//         const steps = 60;
//         const inc = target / steps;
//         let current = 0;
//         const timer = setInterval(() => {
//           current += inc;
//           if (current >= target) { setCount(target); clearInterval(timer); }
//           else setCount(Math.floor(current));
//         }, 1800 / steps);
//       }
//     });
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [target]);

//   return <span ref={ref}>{count}{suffix}</span>;
// }

// // ── Intro Screen ───────────────────────────────────────────────────────────────
// function IntroScreen({ onDone }) {
//   useEffect(() => {
//     const t = setTimeout(onDone, 3000);
//     return () => clearTimeout(t);
//   }, [onDone]);

//   return (
//     <motion.div
//       key="intro"
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
//       style={{
//         position: "fixed", inset: 0,
//         background: "#0e0e0e", zIndex: 999,
//         display: "flex", flexDirection: "column",
//         alignItems: "center", justifyContent: "center",
//         overflow: "hidden",
//       }}
//     >
//       <motion.div
//         initial={{ x: "-100%", opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//         style={{
//           fontSize: "clamp(60px, 13vw, 160px)", fontWeight: 900,
//           fontFamily: "'Anton', 'Impact', sans-serif",
//           color: "#e8641a", textTransform: "uppercase",
//           letterSpacing: "-3px", lineHeight: 0.9,
//         }}
//       >
//         SUKANYA
//       </motion.div>

//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
//         style={{
//           fontSize: "clamp(60px, 13vw, 160px)", fontWeight: 900,
//           fontFamily: "'Anton', 'Impact', sans-serif",
//           color: "#ffffff", textTransform: "uppercase",
//           letterSpacing: "-3px", lineHeight: 0.9,
//         }}
//       >
//         BHOWMICK
//       </motion.div>

//       <motion.div
//         initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
//         transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//         style={{
//           marginTop: "24px", height: "2px",
//           width: "clamp(200px, 40vw, 500px)",
//           background: "linear-gradient(90deg, #e8641a, transparent)",
//           transformOrigin: "left",
//         }}
//       />

//       <motion.p
//         initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.9, duration: 0.5 }}
//         style={{
//           marginTop: "16px", fontSize: "13px",
//           color: "rgba(255,255,255,0.35)", letterSpacing: "4px",
//           textTransform: "uppercase", fontFamily: "monospace",
//         }}
//       >
//         Full Stack Developer
//       </motion.p>
//     </motion.div>
//   );
// }

// // ── Main Hero ──────────────────────────────────────────────────────────────────
// const stats = [
//   { value: 7,  suffix: "+",  label: "Projects Built"  },
//   { value: 3,  suffix: "+",  label: "Domains Covered" },
//   { value: 2,  suffix: "yr", label: "Years Learning"  },
// ];

// export default function Hero() {
//   const [showIntro, setShowIntro] = useState(true);

//   return (
//     <>
//       <AnimatePresence>
//         {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
//       </AnimatePresence>

//       <section id="home" style={{
//         position: "relative", minHeight: "100vh",
//         background: "#141414", display: "flex",
//         alignItems: "center", overflow: "hidden",
//       }}>
//         <ParticleBackground />

//         {/* Vertical Email — Left */}
//         <div style={{
//           position: "fixed", left: "22px", top: "50%",
//           transform: "translateY(-50%)", zIndex: 10,
//           display: "flex", flexDirection: "column",
//           alignItems: "center", gap: "12px",
//         }}>
//           <a href="mailto:sukanyabhowmick094@gmail.com" style={{
//             writingMode: "vertical-rl", transform: "rotate(180deg)",
//             fontSize: "11px", letterSpacing: "2px",
//             color: "rgba(255,255,255,0.3)", textDecoration: "none",
//             fontFamily: "monospace", transition: "color 0.2s ease",
//           }}
//             onMouseEnter={(e) => e.target.style.color = "#e8641a"}
//             onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.3)"}
//           >
//             sukanyabhowmick094@gmail.com
//           </a>
//           <div style={{
//             width: "1px", height: "60px",
//             background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)",
//           }} />
//         </div>

//         {/* Stats — Right */}
//         <div style={{
//           position: "fixed", right: "32px", top: "50%",
//           transform: "translateY(-50%)", zIndex: 10,
//           display: "flex", flexDirection: "column",
//           gap: "36px", textAlign: "right",
//         }}>
//           {stats.map((s) => (
//             <div key={s.label}>
//               <p style={{
//                 fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 900,
//                 color: "#e8641a", margin: 0, lineHeight: 1,
//                 fontFamily: "'Anton', 'Impact', sans-serif", letterSpacing: "-1px",
//               }}>
//                 <Counter target={s.value} suffix={s.suffix} />
//               </p>
//               <p style={{
//                 fontSize: "11px", color: "rgba(255,255,255,0.35)",
//                 margin: "4px 0 0", letterSpacing: "1px", textTransform: "uppercase",
//               }}>
//                 {s.label}
//               </p>
//             </div>
//           ))}
//           <div style={{
//             width: "1px", height: "60px",
//             background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)",
//             marginLeft: "auto",
//           }} />
//         </div>

//         {/* Main Content */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: showIntro ? 0 : 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           style={{
//             position: "relative", zIndex: 1,
//             padding: "0 120px", maxWidth: "900px",
//           }}
//         >
//           {/* Badge */}
//           <div style={{ marginBottom: "28px" }}>
//             <span style={{
//               display: "inline-flex", alignItems: "center", gap: "8px",
//               padding: "6px 14px", background: "rgba(232,100,26,0.1)",
//               border: "1px solid rgba(232,100,26,0.3)", borderRadius: "999px",
//               fontSize: "12px", color: "#e8641a", fontWeight: 500, letterSpacing: "0.5px",
//             }}>
//               <span style={{
//                 width: "7px", height: "7px", borderRadius: "50%",
//                 background: "#e8641a", display: "inline-block",
//                 animation: "pulse 2s infinite",
//               }} />
//               Open to Internships
//             </span>
//           </div>

//           {/* Big Title */}
//           <div style={{ lineHeight: 0.9, marginBottom: "32px" }}>
//             <motion.h1
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: showIntro ? 0 : 1, x: showIntro ? -40 : 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               style={{
//                 fontSize: "clamp(64px, 10vw, 130px)", fontWeight: 900,
//                 color: "#e8641a", margin: 0,
//                 fontFamily: "'Anton', 'Impact', sans-serif",
//                 textTransform: "uppercase", letterSpacing: "-2px", display: "block",
//               }}
//             >
//               FULL STACK
//             </motion.h1>
//             <motion.h1
//               initial={{ opacity: 0, x: -40 }}
//               animate={{ opacity: showIntro ? 0 : 1, x: showIntro ? -40 : 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               style={{
//                 fontSize: "clamp(64px, 10vw, 130px)", fontWeight: 900,
//                 color: "#ffffff", margin: 0,
//                 fontFamily: "'Anton', 'Impact', sans-serif",
//                 textTransform: "uppercase", letterSpacing: "-2px", display: "block",
//               }}
//             >
//               DEVELOPER
//             </motion.h1>
//           </div>

//           {/* Tagline */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//             style={{
//               fontSize: "16px", color: "rgba(255,255,255,0.45)",
//               maxWidth: "420px", lineHeight: 1.6,
//               margin: "0 0 36px", fontStyle: "italic",
//               letterSpacing: "0.3px",
//             }}
//           >
//             Hi, I am <b>Sukanya </b>
//             <br />
//             Building the web, one commit at a time.
//           </motion.p>

//           {/* Buttons */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
//             transition={{ duration: 0.5, delay: 0.7 }}
//             style={{ display: "flex", gap: "14px", alignItems: "center" }}
//           >
//             {/* View My Work — links to /projects */}
//             <Link
//               href="/projects"
//               style={{
//                 padding: "13px 30px", background: "#e8641a",
//                 color: "#fff", fontWeight: 700, fontSize: "13px",
//                 textDecoration: "none", borderRadius: "6px",
//                 textTransform: "uppercase", letterSpacing: "1.5px",
//                 transition: "all 0.2s ease", display: "inline-block",
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
//               View My Work
//             </Link>

//             {/* Contact Me — links to /contact */}
//             <Link
//               href="/contact"
//               style={{
//                 padding: "13px 30px", background: "transparent",
//                 color: "rgba(255,255,255,0.65)", fontWeight: 500, fontSize: "13px",
//                 textDecoration: "none", borderRadius: "6px",
//                 border: "1px solid rgba(255,255,255,0.15)",
//                 letterSpacing: "0.5px", transition: "all 0.2s ease",
//                 display: "inline-block",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.borderColor = "#e8641a";
//                 e.currentTarget.style.color       = "#e8641a";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
//                 e.currentTarget.style.color       = "rgba(255,255,255,0.65)";
//               }}
//             >
//               Contact Me
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: showIntro ? 0 : 1 }}
//           transition={{ delay: 1.2 }}
//           style={{
//             position: "absolute", bottom: "32px", left: "50%",
//             transform: "translateX(-50%)",
//             display: "flex", flexDirection: "column",
//             alignItems: "center", gap: "6px",
//           }}
//         >
//           <p style={{
//             fontSize: "10px", color: "rgba(255,255,255,0.2)",
//             letterSpacing: "2px", textTransform: "uppercase", margin: 0,
//           }}>scroll</p>
//           <motion.div
//             animate={{ y: [0, 6, 0] }}
//             transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
//             style={{
//               width: "1px", height: "30px",
//               background: "linear-gradient(to bottom, rgba(232,100,26,0.6), transparent)",
//             }}
//           />
//         </motion.div>

//         <style>{`
//           @keyframes pulse {
//             0%, 100% { opacity: 1; transform: scale(1); }
//             50% { opacity: 0.4; transform: scale(1.3); }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// }
















// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// // ── Particle Canvas ────────────────────────────────────────────────────────────
// function ParticleBackground() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animId;

//     const resize = () => {
//       canvas.width  = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const DOTS = 120;
//     const dots = Array.from({ length: DOTS }, () => ({
//       x:  Math.random() * window.innerWidth,
//       y:  Math.random() * window.innerHeight,
//       r:  Math.random() * 1.5 + 0.4,
//       vx: (Math.random() - 0.5) * 0.15,
//       vy: (Math.random() - 0.5) * 0.15,
//       o:  Math.random() * 0.35 + 0.1,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       dots.forEach((d) => {
//         d.x += d.vx; d.y += d.vy;
//         if (d.x < 0) d.x = canvas.width;
//         if (d.x > canvas.width) d.x = 0;
//         if (d.y < 0) d.y = canvas.height;
//         if (d.y > canvas.height) d.y = 0;
//         ctx.beginPath();
//         ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255,255,255,${d.o})`;
//         ctx.fill();
//       });
//       for (let i = 0; i < dots.length; i++) {
//         for (let j = i + 1; j < dots.length; j++) {
//           const dx = dots[i].x - dots[j].x;
//           const dy = dots[i].y - dots[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(dots[i].x, dots[i].y);
//             ctx.lineTo(dots[j].x, dots[j].y);
//             ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 100)})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }
//       animId = requestAnimationFrame(draw);
//     };
//     draw();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} style={{
//       position: "absolute", inset: 0,
//       width: "100%", height: "100%",
//       pointerEvents: "none", zIndex: 0,
//     }} />
//   );
// }

// // ── Animated Counter ───────────────────────────────────────────────────────────
// function Counter({ target, suffix = "" }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const started = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting && !started.current) {
//         started.current = true;
//         const steps = 60;
//         const inc = target / steps;
//         let current = 0;
//         const timer = setInterval(() => {
//           current += inc;
//           if (current >= target) { setCount(target); clearInterval(timer); }
//           else setCount(Math.floor(current));
//         }, 1800 / steps);
//       }
//     });
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [target]);

//   return <span ref={ref}>{count}{suffix}</span>;
// }

// // ── Intro Screen ───────────────────────────────────────────────────────────────
// function IntroScreen({ onDone }) {
//   useEffect(() => {
//     const t = setTimeout(onDone, 3000);
//     return () => clearTimeout(t);
//   }, [onDone]);

//   return (
//     <motion.div
//       key="intro"
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
//       style={{
//         position: "fixed", inset: 0, background: "#0e0e0e", zIndex: 999,
//         display: "flex", flexDirection: "column",
//         alignItems: "center", justifyContent: "center", overflow: "hidden",
//       }}
//     >
//       <motion.div
//         initial={{ x: "-100%", opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
//         style={{
//           fontSize: "clamp(60px, 13vw, 160px)", fontWeight: 900,
//           fontFamily: "'Anton', 'Impact', sans-serif",
//           color: "#e8641a", textTransform: "uppercase",
//           letterSpacing: "-3px", lineHeight: 0.9,
//         }}
//       >
//         SUKANYA
//       </motion.div>

//       <motion.div
//         initial={{ x: "100%", opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
//         style={{
//           fontSize: "clamp(60px, 13vw, 160px)", fontWeight: 900,
//           fontFamily: "'Anton', 'Impact', sans-serif",
//           color: "#ffffff", textTransform: "uppercase",
//           letterSpacing: "-3px", lineHeight: 0.9,
//         }}
//       >
//         BHOWMICK
//       </motion.div>

//       <motion.div
//         initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
//         transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//         style={{
//           marginTop: "24px", height: "2px",
//           width: "clamp(200px, 40vw, 500px)",
//           background: "linear-gradient(90deg, #e8641a, transparent)",
//           transformOrigin: "left",
//         }}
//       />

//       <motion.p
//         initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.9, duration: 0.5 }}
//         style={{
//           marginTop: "16px", fontSize: "13px",
//           color: "rgba(255,255,255,0.35)", letterSpacing: "4px",
//           textTransform: "uppercase", fontFamily: "monospace",
//         }}
//       >
//         Full Stack Developer
//       </motion.p>
//     </motion.div>
//   );
// }

// // ── Stats ──────────────────────────────────────────────────────────────────────
// const stats = [
//   { value: 7,  suffix: "+",  label: "Projects Built"  },
//   { value: 3,  suffix: "+",  label: "Domains Covered" },
//   { value: 2,  suffix: "yr", label: "Years Learning"  },
// ];

// // ── Main Hero ──────────────────────────────────────────────────────────────────
// export default function Hero() {
//   const [showIntro, setShowIntro] = useState(true);

//   return (
//     <>
//       <AnimatePresence>
//         {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
//       </AnimatePresence>

//       <section id="home" style={{
//         position: "relative", minHeight: "100vh",
//         background: "#141414", display: "flex",
//         alignItems: "center", overflow: "hidden",
//       }}>
//         <ParticleBackground />

//         {/* Vertical Email — Left */}
//         <div style={{
//           position: "fixed", left: "22px", top: "50%",
//           transform: "translateY(-50%)", zIndex: 10,
//           display: "flex", flexDirection: "column",
//           alignItems: "center", gap: "12px",
//         }}>
//           <a
//             href="mailto:sukanyabhowmick094@gmail.com"
//             style={{
//               writingMode: "vertical-rl", transform: "rotate(180deg)",
//               fontSize: "11px", letterSpacing: "2px",
//               color: "rgba(255,255,255,0.3)", textDecoration: "none",
//               fontFamily: "monospace", transition: "color 0.2s ease",
//             }}
//             onMouseEnter={(e) => e.target.style.color = "#e8641a"}
//             onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.3)"}
//           >
//             sukanyabhowmick094@gmail.com
//           </a>
//           <div style={{
//             width: "1px", height: "60px",
//             background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)",
//           }} />
//         </div>

//         {/* Stats — Right */}
//         <div style={{
//           position: "fixed", right: "32px", top: "50%",
//           transform: "translateY(-50%)", zIndex: 10,
//           display: "flex", flexDirection: "column",
//           gap: "36px", textAlign: "right",
//         }}>
//           {stats.map((s) => (
//             <div key={s.label}>
//               <p style={{
//                 fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 900,
//                 color: "#e8641a", margin: 0, lineHeight: 1,
//                 fontFamily: "'Anton', 'Impact', sans-serif", letterSpacing: "-1px",
//               }}>
//                 <Counter target={s.value} suffix={s.suffix} />
//               </p>
//               <p style={{
//                 fontSize: "11px", color: "rgba(255,255,255,0.35)",
//                 margin: "4px 0 0", letterSpacing: "1px", textTransform: "uppercase",
//               }}>
//                 {s.label}
//               </p>
//             </div>
//           ))}
//           <div style={{
//             width: "1px", height: "60px",
//             background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)",
//             marginLeft: "auto",
//           }} />
//         </div>

//         {/* ── Main Content — Two Column ── */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: showIntro ? 0 : 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//           style={{
//             position: "relative", zIndex: 1,
//             padding: "0 120px",
//             width: "100%",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: "40px",
//           }}
//         >
//           {/* Left — Text */}
//           <div style={{ flex: 1, maxWidth: "700px" }}>

//             {/* Badge */}
//             <div style={{ marginBottom: "28px" }}>
//               <span style={{
//                 display: "inline-flex", alignItems: "center", gap: "8px",
//                 padding: "6px 14px", background: "rgba(232,100,26,0.1)",
//                 border: "1px solid rgba(232,100,26,0.3)", borderRadius: "999px",
//                 fontSize: "12px", color: "#e8641a", fontWeight: 500, letterSpacing: "0.5px",
//               }}>
//                 <span style={{
//                   width: "7px", height: "7px", borderRadius: "50%",
//                   background: "#e8641a", display: "inline-block",
//                   animation: "pulse 2s infinite",
//                 }} />
//                 Open to Internships
//               </span>
//             </div>

//             {/* Big Title */}
//             <div style={{ lineHeight: 0.9, marginBottom: "28px" }}>
//               <motion.h1
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: showIntro ? 0 : 1, x: showIntro ? -40 : 0 }}
//                 transition={{ duration: 0.6, delay: 0.4 }}
//                 style={{
//                   fontSize: "clamp(54px, 8vw, 120px)", fontWeight: 900,
//                   color: "#e8641a", margin: 0,
//                   fontFamily: "'Anton', 'Impact', sans-serif",
//                   textTransform: "uppercase", letterSpacing: "-2px", display: "block",
//                 }}
//               >
//                 FULL STACK
//               </motion.h1>
//               <motion.h1
//                 initial={{ opacity: 0, x: -40 }}
//                 animate={{ opacity: showIntro ? 0 : 1, x: showIntro ? -40 : 0 }}
//                 transition={{ duration: 0.6, delay: 0.5 }}
//                 style={{
//                   fontSize: "clamp(54px, 8vw, 120px)", fontWeight: 900,
//                   color: "#ffffff", margin: 0,
//                   fontFamily: "'Anton', 'Impact', sans-serif",
//                   textTransform: "uppercase", letterSpacing: "-2px", display: "block",
//                 }}
//               >
//                 DEVELOPER
//               </motion.h1>
//             </div>

//             {/* Tagline */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               style={{
//                 fontSize: "16px", color: "rgba(255,255,255,0.45)",
//                 maxWidth: "420px", lineHeight: 1.6,
//                 margin: "0 0 36px", fontStyle: "italic", letterSpacing: "0.3px",
//               }}
//             >
//               Building the web, one commit at a time.
//             </motion.p>

//             {/* Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
//               transition={{ duration: 0.5, delay: 0.7 }}
//               style={{ display: "flex", gap: "14px", alignItems: "center" }}
//             >
//               <Link
//                 href="/projects"
//                 style={{
//                   padding: "13px 30px", background: "#e8641a",
//                   color: "#fff", fontWeight: 700, fontSize: "13px",
//                   textDecoration: "none", borderRadius: "6px",
//                   textTransform: "uppercase", letterSpacing: "1.5px",
//                   transition: "all 0.2s ease", display: "inline-block",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = "#f0731f";
//                   e.currentTarget.style.transform  = "translateY(-2px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = "#e8641a";
//                   e.currentTarget.style.transform  = "translateY(0)";
//                 }}
//               >
//                 View My Work
//               </Link>

//               <Link
//                 href="/contact"
//                 style={{
//                   padding: "13px 30px", background: "transparent",
//                   color: "rgba(255,255,255,0.65)", fontWeight: 500, fontSize: "13px",
//                   textDecoration: "none", borderRadius: "6px",
//                   border: "1px solid rgba(255,255,255,0.15)",
//                   letterSpacing: "0.5px", transition: "all 0.2s ease",
//                   display: "inline-block",
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.borderColor = "#e8641a";
//                   e.currentTarget.style.color       = "#e8641a";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
//                   e.currentTarget.style.color       = "rgba(255,255,255,0.65)";
//                 }}
//               >
//                 Contact Me
//               </Link>
//             </motion.div>
//           </div>

//           {/* Right — Profile Photo */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{
//               opacity: showIntro ? 0 : 1,
//               scale:   showIntro ? 0.8 : 1,
//             }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             style={{ flexShrink: 0, position: "relative" }}
//           >
//             {/* Floating animation wrapper */}
//             <motion.div
//               animate={{ y: [0, -14, 0] }}
//               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//               style={{ position: "relative" }}
//             >
//               {/* Outer glow ring */}
//               <div style={{
//                 position:     "absolute",
//                 inset:        "-6px",
//                 borderRadius: "50%",
//                 background:   "conic-gradient(#e8641a, transparent, #e8641a, transparent, #e8641a)",
//                 animation:    "spin 6s linear infinite",
//                 opacity:      0.5,
//               }} />

//               {/* Orange border ring */}
//               <div style={{
//                 position:     "absolute",
//                 inset:        "-3px",
//                 borderRadius: "50%",
//                 border:       "2px solid rgba(232,100,26,0.6)",
//               }} />

//               {/* Photo circle */}
//               <div style={{
//                 width:        "260px",
//                 height:       "260px",
//                 borderRadius: "50%",
//                 overflow:     "hidden",
//                 position:     "relative",
//                 border:       "3px solid #e8641a",
//               }}>
//                 <Image
//                   src="/profile.jpeg"
//                   alt="Sukanya Bhowmick"
//                   fill
//                   style={{ objectFit: "cover", objectPosition: "center top" }}
//                   priority
//                 />
//               </div>

//               {/* Name tag below photo */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 10 : 0 }}
//                 transition={{ delay: 0.9, duration: 0.4 }}
//                 style={{
//                   marginTop:      "16px",
//                   textAlign:      "center",
//                   fontSize:       "13px",
//                   color:          "rgba(255,255,255,0.4)",
//                   letterSpacing:  "1px",
//                   textTransform:  "uppercase",
//                   fontFamily:     "monospace",
//                 }}
//               >
//                 Sukanya Bhowmick
//               </motion.div>
//             </motion.div>
//           </motion.div>

//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: showIntro ? 0 : 1 }}
//           transition={{ delay: 1.2 }}
//           style={{
//             position: "absolute", bottom: "32px", left: "50%",
//             transform: "translateX(-50%)",
//             display: "flex", flexDirection: "column",
//             alignItems: "center", gap: "6px",
//           }}
//         >
//           <p style={{
//             fontSize: "10px", color: "rgba(255,255,255,0.2)",
//             letterSpacing: "2px", textTransform: "uppercase", margin: 0,
//           }}>scroll</p>
//           <motion.div
//             animate={{ y: [0, 6, 0] }}
//             transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
//             style={{
//               width: "1px", height: "30px",
//               background: "linear-gradient(to bottom, rgba(232,100,26,0.6), transparent)",
//             }}
//           />
//         </motion.div>

//         <style>{`
//           @keyframes pulse {
//             0%, 100% { opacity: 1; transform: scale(1); }
//             50% { opacity: 0.4; transform: scale(1.3); }
//           }
//           @keyframes spin {
//             from { transform: rotate(0deg); }
//             to   { transform: rotate(360deg); }
//           }
//         `}</style>
//       </section>
//     </>
//   );
// }











"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// ── Particle Canvas ────────────────────────────────────────────────────────────
function ParticleBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const DOTS = 120;
    const dots = Array.from({ length: DOTS }, () => ({
      x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.4, vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15, o: Math.random() * 0.35 + 0.1,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = canvas.width; if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height; if (d.y > canvas.height) d.y = 0;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${d.o})`; ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x; const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${0.04 * (1 - dist / 100)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 0 }} />;
}

// ── Animated Counter ───────────────────────────────────────────────────────────
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null); const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 60; const inc = target / steps; let current = 0;
        const timer = setInterval(() => {
          current += inc;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, 1800 / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

// ── Intro Screen ───────────────────────────────────────────────────────────────
function IntroScreen({ onDone }) {
  useEffect(() => { const t = setTimeout(onDone, 3000); return () => clearTimeout(t); }, [onDone]);
  return (
    <motion.div key="intro" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      style={{ position: "fixed", inset: 0, background: "#0e0e0e", zIndex: 999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <motion.div initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{ fontSize: "clamp(60px, 13vw, 160px)", fontWeight: 900, fontFamily: "'Anton', 'Impact', sans-serif", color: "#e8641a", textTransform: "uppercase", letterSpacing: "-3px", lineHeight: 0.9 }}>
        SUKANYA
      </motion.div>
      <motion.div initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        style={{ fontSize: "clamp(60px, 13vw, 160px)", fontWeight: 900, fontFamily: "'Anton', 'Impact', sans-serif", color: "#ffffff", textTransform: "uppercase", letterSpacing: "-3px", lineHeight: 0.9 }}>
        BHOWMICK
      </motion.div>
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        style={{ marginTop: "24px", height: "2px", width: "clamp(200px, 40vw, 500px)", background: "linear-gradient(90deg, #e8641a, transparent)", transformOrigin: "left" }} />
      <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}
        style={{ marginTop: "16px", fontSize: "13px", color: "rgba(255,255,255,0.35)", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "monospace" }}>
        Full Stack Developer
      </motion.p>
    </motion.div>
  );
}

const stats = [
  { value: 7,  suffix: "+",  label: "Projects Built"  },
  { value: 3,  suffix: "+",  label: "Domains Covered" },
  { value: 2,  suffix: "yr", label: "Years Learning"  },
];

export default function Hero() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
      </AnimatePresence>

      <section id="home" style={{
        position: "relative", minHeight: "100vh", background: "#141414",
        display: "flex", alignItems: "center", overflow: "hidden",
      }}>
        <ParticleBackground />

        {/* Vertical Email — Left */}
        <div style={{
          position: "fixed", left: "22px", top: "50%",
          transform: "translateY(-50%)", zIndex: 10,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "12px",
        }}>
          <a href="mailto:sukanyabhowmick094@gmail.com" style={{
            writingMode: "vertical-rl", transform: "rotate(180deg)",
            fontSize: "11px", letterSpacing: "2px",
            color: "rgba(255,255,255,0.3)", textDecoration: "none",
            fontFamily: "monospace", transition: "color 0.2s ease",
          }}
            onMouseEnter={(e) => e.target.style.color = "#e8641a"}
            onMouseLeave={(e) => e.target.style.color = "rgba(255,255,255,0.3)"}
          >
            sukanyabhowmick094@gmail.com
          </a>
          <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)" }} />
        </div>

        {/* Stats — Right fixed, pushed further right */}
        <div style={{
          position: "fixed", right: "28px", top: "50%",
          transform: "translateY(-50%)", zIndex: 10,
          display: "flex", flexDirection: "column", gap: "32px", textAlign: "right",
        }}>
          {stats.map((s) => (
            <div key={s.label}>
              <p style={{
                fontSize: "clamp(24px, 2.5vw, 34px)", fontWeight: 900,
                color: "#e8641a", margin: 0, lineHeight: 1,
                fontFamily: "'Anton', 'Impact', sans-serif", letterSpacing: "-1px",
              }}>
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p style={{
                fontSize: "10px", color: "rgba(255,255,255,0.35)",
                margin: "4px 0 0", letterSpacing: "1px", textTransform: "uppercase",
              }}>
                {s.label}
              </p>
            </div>
          ))}
          <div style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, rgba(255,255,255,0.15), transparent)", marginLeft: "auto" }} />
        </div>

        {/* ── Main Content — Two Column ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            position: "relative", zIndex: 1,
            // Left padding for email, right padding to stay clear of stats
            padding: "0 160px 0 100px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          {/* Left — Text */}
          <div style={{ flex: 1 }}>
            {/* Badge */}
            <div style={{ marginBottom: "28px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 14px", background: "rgba(232,100,26,0.1)",
                border: "1px solid rgba(232,100,26,0.3)", borderRadius: "999px",
                fontSize: "12px", color: "#e8641a", fontWeight: 500, letterSpacing: "0.5px",
              }}>
                <span style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  background: "#e8641a", display: "inline-block", animation: "pulse 2s infinite",
                }} />
                Open to Internships
              </span>
            </div>

            {/* Title */}
            <div style={{ lineHeight: 0.9, marginBottom: "28px" }}>
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: showIntro ? 0 : 1, x: showIntro ? -40 : 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  fontSize: "clamp(50px, 7vw, 110px)", fontWeight: 900,
                  color: "#e8641a", margin: 0,
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  textTransform: "uppercase", letterSpacing: "-2px", display: "block",
                }}
              >
                FULL STACK
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: showIntro ? 0 : 1, x: showIntro ? -40 : 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  fontSize: "clamp(50px, 7vw, 110px)", fontWeight: 900,
                  color: "#ffffff", margin: 0,
                  fontFamily: "'Anton', 'Impact', sans-serif",
                  textTransform: "uppercase", letterSpacing: "-2px", display: "block",
                }}
              >
                DEVELOPER
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                fontSize: "16px", color: "rgba(255,255,255,0.45)",
                maxWidth: "380px", lineHeight: 1.6,
                margin: "0 0 36px", fontStyle: "italic", letterSpacing: "0.3px",
              }}
            >
              Hi, I am <b>Sukanya</b>
              <br />
              Building the web, one commit at a time.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 20 : 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{ display: "flex", gap: "14px", alignItems: "center" }}
            >
              <Link href="/projects" style={{
                padding: "13px 30px", background: "#e8641a",
                color: "#fff", fontWeight: 700, fontSize: "13px",
                textDecoration: "none", borderRadius: "6px",
                textTransform: "uppercase", letterSpacing: "1.5px",
                transition: "all 0.2s ease", display: "inline-block",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#f0731f"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "#e8641a"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View My Work
              </Link>
              <Link href="/contact" style={{
                padding: "13px 30px", background: "transparent",
                color: "rgba(255,255,255,0.65)", fontWeight: 500, fontSize: "13px",
                textDecoration: "none", borderRadius: "6px",
                border: "1px solid rgba(255,255,255,0.15)",
                letterSpacing: "0.5px", transition: "all 0.2s ease", display: "inline-block",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#e8641a"; e.currentTarget.style.color = "#e8641a"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
              >
                Contact Me
              </Link>
            </motion.div>
          </div>

          {/* Right — Profile Photo, shifted left of the stats */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: showIntro ? 0 : 1, scale: showIntro ? 0.8 : 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ flexShrink: 0 }}
          > */}
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: showIntro ? 0 : 1, scale: showIntro ? 0.8 : 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
               flexShrink: 0,
               marginRight: "80px"   // 👈 THIS pushes it LEFT
          }}
>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ position: "relative" }}
            >
              {/* Spinning glow ring */}
              <div style={{
                position: "absolute", inset: "-6px", borderRadius: "50%",
                background: "conic-gradient(#e8641a, transparent, #e8641a, transparent, #e8641a)",
                animation: "spin 6s linear infinite", opacity: 0.4,
              }} />
              {/* Orange border */}
              <div style={{
                position: "absolute", inset: "-3px", borderRadius: "50%",
                border: "2px solid rgba(232,100,26,0.5)",
              }} />
              {/* Photo */}
              <div style={{
                width: "220px", height: "220px",
                borderRadius: "50%", overflow: "hidden",
                position: "relative", border: "3px solid #e8641a",
              }}>
                <Image
                  src="/profile.jpeg"
                  alt="Sukanya Bhowmick"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
              {/* Name tag */}
              <div style={{
                marginTop: "14px", textAlign: "center",
                fontSize: "11px", color: "rgba(255,255,255,0.35)",
                letterSpacing: "2px", textTransform: "uppercase", fontFamily: "monospace",
              }}>
                Sukanya Bhowmick
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: showIntro ? 0 : 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: "absolute", bottom: "32px", left: "50%",
            transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "6px",
          }}
        >
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.2)", letterSpacing: "2px", textTransform: "uppercase", margin: 0 }}>scroll</p>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            style={{ width: "1px", height: "30px", background: "linear-gradient(to bottom, rgba(232,100,26,0.6), transparent)" }} />
        </motion.div>

        <style>{`
          @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.4;transform:scale(1.3)} }
          @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        `}</style>
      </section>
    </>
  );
}

