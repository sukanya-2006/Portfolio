// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// /* ───────── PROJECT DATA ───────── */
// const projects = [
//   // DESIGN
 
  
//   {
//     id: 1,
//     category: "design",
//     image: "/projects/spotify-clone.png",
//     title: "Spotify Clone",
//     desc: "Music player UI clone.",
//     stack: ["JS", "HTML", "CSS"],
//     github: "https://github.com/sukanya-2006/Spotify-Clone-Project1",
//     live: "https://sukanya-2006.github.io/Spotify-Clone-Project1/",
//   },
//     {
//     id: 2,
//     category: "design",
//     image: "/projects/tin-dog.png",
//     title: "Tin Dog",
//     desc: "Responsive landing page project.",
//     stack: ["HTML", "CSS"],
//     github: "https://github.com/sukanya-2006/tindog-html-css",
//     live: "https://sukanya-2006.github.io/tindog-html-css/",
//   },
//    {
//     id: 3,
//     category: "design",
//     image: "/projects/weather-app.png",
//     title: "React Weather App",
//     desc: "A clean, responsive weather application built in React.",
//     stack: ["React", "CSS", "API"],
//     github: "https://github.com/sukanya-2006/react-weather-app",
//     // live: "#",
//   },



//   // FULL STACK
//     {
//     id: 4,
//     category: "fullstack",
//     image: "/projects/haven-villas.png",
//     title: "Haven Villas",
//     desc: "Hotel booking platform.",
//     stack: ["Node.js", "Express"],
//     github: "https://github.com/sukanya-2006/Haven-Villas",
//     live: "https://haven-villas.onrender.com/",
//   },
//   {
//     id: 5,
//     category: "fullstack",
//     image: "/projects/proconnect.png",
//     title: "ProConnect",
//     desc: "LinkedIn-style networking platform.",
//     stack: ["Next.js", "MongoDB"],
//     github: "https://github.com/sukanya-2006/ProConnect",
    
//   },

//   // AI
//   {
//     id: 6,
//     category: "ai",
//     image: "/projects/safar.png",
//     title: "SAFAR",
//     desc: "AI travel planner using LLM.",
//     stack: ["Flask", "Groq"],
//     github: "https://github.com/sukanya-2006/SAFAR",
//     // live: "#",
//   },
//   {
//     id: 7,
//     category: "ai",
//     image: "/projects/sarcasm-detector.png",
//     title: "Sarcasm Detector",
//     desc: "ML model detecting sarcasm.",
//     stack: ["Python", "BERT"],
//     github: "https://github.com/sukanya-2006/sarcasm-detector",
//   },
// ];

// /* ───────── TABS ───────── */
// const tabs = [
//   { key: "design", label: "Design / Frontend" },
//   { key: "fullstack", label: "Full Stack" },
//   { key: "ai", label: "AI Powered" },
// ];

// /* ───────── ANIMATION ───────── */
// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08 },
//   }),
// };

// export default function Projects() {
//   const [activeTab, setActiveTab] = useState("design");
//   const [hovered, setHovered] = useState(null);

//   const filtered = projects.filter((p) => p.category === activeTab);

//   return (
//     <section style={{ padding: "100px 24px", background: "var(--bg-soft)" }}>
//       <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

//         {/* TITLE */}
//         <h2 style={{ textAlign: "center", fontSize: "40px", marginBottom: "50px" }}>
//           Things I've Built
//         </h2>

//         {/* TABS */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//           border: "1px solid var(--border-soft)",
//           borderRadius: "10px",
//           overflow: "hidden",
//           marginBottom: "50px",
//         }}>
//           {tabs.map((tab, i) => (
//             <button
//               key={tab.key}
//               onClick={() => setActiveTab(tab.key)}
//               onMouseEnter={() => setHovered(tab.key)}
//               onMouseLeave={() => setHovered(null)}
//               style={{
//                 padding: "14px",
//                 background:
//                   activeTab === tab.key
//                     ? "var(--primary-dim)"
//                     : "transparent",

//                 border: "none",
//                 borderRight:
//                   i < tabs.length - 1
//                     ? "1px solid var(--border-soft)"
//                     : "none",

//                 borderBottom:
//                   activeTab === tab.key
//                     ? "2px solid var(--primary)"
//                     : "2px solid transparent",

//                 color:
//                   activeTab === tab.key
//                     ? "var(--primary)"
//                     : "var(--muted)",

//                 cursor: "pointer",
//                 fontSize: "13px",
//               }}
//             >
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* GRID */}
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "20px",
//         }}>
//           <AnimatePresence>
//             {filtered.map((p, i) => (
//               <motion.div
//                 key={p.id}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={i}
//                 whileHover={{
//                   y: -5,
//                   borderColor: "var(--primary)",
//                   boxShadow: "0 10px 36px rgba(99,102,241,0.2)",
//                 }}
//                 style={{
//                   border: "1px solid var(--border-soft)",
//                   borderRadius: "12px",
//                   overflow: "hidden",
//                   background: "var(--bg-card)",
//                 }}
//               >

//                 {/* IMAGE */}
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   style={{
//                     width: "100%",
//                     height: "180px",
//                     objectFit: "cover",
//                   }}
//                 />

//                 {/* CONTENT */}
//                 <div style={{ padding: "16px" }}>
//                   <h3 style={{ marginBottom: "6px" }}>{p.title}</h3>
//                   <p style={{ color: "var(--muted)", fontSize: "13px" }}>
//                     {p.desc}
//                   </p>

//                   {/* BUTTONS */}
//                   <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>

//                     {/* LIVE */}
//                     {p.live && (
//                       <a
//                         href={p.live}
//                         target="_blank"
//                         style={{
//                           flex: 1,
//                           padding: "9px 0",
//                           background: "#22c55e",
//                           color: "#04130a",
//                           textAlign: "center",
//                           fontSize: "12px",
//                           fontWeight: 600,
//                           borderRadius: "7px",
//                           textDecoration: "none",
//                         }}
//                       >
//                         Live Demo
//                       </a>
//                     )}

//                     {/* GITHUB */}
//                     {p.github && (
//                       <a
//                         href={p.github}
//                         target="_blank"
//                         style={{
//                           flex: 1,
//                           padding: "9px 0",
//                           border: "1px solid var(--border)",
//                           color: "var(--text)",
//                           textAlign: "center",
//                           fontSize: "12px",
//                           borderRadius: "7px",
//                           textDecoration: "none",
//                         }}
//                       >
//                         GitHub
//                       </a>
//                     )}

//                   </div>
//                 </div>

//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  // ── DESIGN / FRONTEND ──────────────────────────────────────────
  {
    id: 1,
    category: "design",
    image: "/projects/weather-app.png",
    title: "React Weather App",
    desc: "A clean, responsive weather application built in React that fetches real-time weather data and displays it with a smooth, minimal UI.",
    stack: ["React", "CSS", "OpenWeather API" ],
    github: "https://github.com/sukanya-2006/react-weather-app",
    // live: "",
  },
  {
    id: 2,
    category: "design",
    image: "/projects/tin-dog.png",
    title: "Tin Dog",
    desc: "A fun Tinder-for-dogs landing page built to practice responsive design, Bootstrap layout, and modern frontend UI patterns.",
    stack: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/sukanya-2006/tin-dog",
    live: "https://sukanya-2006.github.io/tindog-html-css/",
  },
  {
    id: 3,
    category: "design",
    image: "/projects/spotify-clone.png",
    title: "Spotify Clone",
    desc: "A pixel-perfect Spotify UI clone with a working music player interface, sidebar navigation, and responsive layout.",
    stack: ["HTML", "CSS"],
    github: "https://github.com/sukanya-2006/spotify-clone",
    live: "https://sukanya-2006.github.io/Spotify-Clone-Project1/",
  },

  // ── FULL STACK ─────────────────────────────────────────────────
  {
    id: 4,
    category: "fullstack",
    image: "/projects/proconnect.png",
    title: "ProConnect",
    desc: "A LinkedIn-style professional networking app with auth flows, post feeds, and connection management — built end to end with Next.js and Express.",
    stack: ["Next.js", "Express", "MongoDB", "Redux Toolkit"],
    github: "https://github.com/sukanya-2006/pro-connect",
    live: null,
  },
  {
    id: 5,
    category: "fullstack",
    image: "/projects/haven-villas.png",
    title: "Haven Villas",
    desc: "A full-stack hotel and villa booking platform with property listings, booking management, and user authentication — deployed on Render.",
    stack: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/sukanya-2006/haven-villas",
    live: "https://haven-villas.onrender.com",
  },

  // ── AI POWERED ─────────────────────────────────────────────────
  {
    id: 6,
    category: "ai",
    image: "/projects/safar.png",
    title: "SAFAR",
    desc: "AI travel companion app that generates personalized trip plans using LLaMA 3.3-70B via Groq and semantic search with Sentence Transformers.",
    stack: ["Flask", "LLaMA 3.3", "Groq", "Supabase", "Sentence Transformers"],
    github: "https://github.com/sukanya-2006/SAFAR",
   live: null,
  },
  {
    id: 7,
    category: "ai",
    image: "/projects/sarcasm-detector.png",
    title: "Sarcasm Detector",
    desc: "Fine-tuned DistilBERT model to detect sarcasm in news headlines, containerized with Docker and built as a learning ground for CI/CD.",
    stack: ["Python", "DistilBERT", "Docker", "Hugging Face"],
    github: "https://github.com/sukanya-2006/sarcasm-detector",
    live: null,
  },
];

const tabs = [
  { key: "design",    label: "Design / Frontend" },
  { key: "fullstack", label: "Full Stack"         },
  { key: "ai",        label: "AI Powered"         },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.09, ease: "easeOut" },
  }),
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.18 } },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("design");
  const [hovered,   setHovered]   = useState(null);

  const filtered = projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      style={{
        position:   "relative",
        minHeight:  "100vh",
        background: "#141414",
        padding:    "100px 120px 80px",
        overflow:   "hidden",
      }}
    >
      {/* Subtle orange glow top-right */}
      <div style={{
        position:     "absolute",
        top:          "-160px",
        right:        "-160px",
        width:        "500px",
        height:       "500px",
        background:   "radial-gradient(circle, #e8641a, transparent 65%)",
        filter:       "blur(160px)",
        opacity:      0.05,
        pointerEvents:"none",
      }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>

        {/* ── Section Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            fontSize:      "11px",
            fontWeight:    600,
            letterSpacing: "3px",
            color:         "#e8641a",
            textTransform: "uppercase",
            marginBottom:  "10px",
          }}
        >
          My Work
        </motion.p>

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{ marginBottom: "52px" }}
        >
          <h2 style={{
            fontFamily:    "'Anton', 'Impact', sans-serif",
            fontSize:      "clamp(42px, 7vw, 80px)",
            fontWeight:    900,
            textTransform: "uppercase",
            letterSpacing: "-1px",
            lineHeight:    0.95,
            margin:        0,
          }}>
            <span style={{ color: "#e8641a" }}>THINGS</span>{" "}
            <span style={{ color: "#ffffff" }}>I&apos;VE</span>
            <br />
            <span style={{ color: "#ffffff" }}>BUILT</span>
          </h2>

          {/* Orange underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              marginTop:       "16px",
              height:          "2px",
              width:           "120px",
              background:      "linear-gradient(90deg, #e8641a, transparent)",
              transformOrigin: "left",
            }}
          />
        </motion.div>

        {/* ── Tab Switcher ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginBottom:        "48px",
            border:              "1px solid rgba(255,255,255,0.07)",
            borderRadius:        "10px",
            overflow:            "hidden",
            background:          "rgba(255,255,255,0.02)",
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              onMouseEnter={() => setHovered(tab.key)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding:      "15px 12px",
                background:   activeTab === tab.key
                  ? "rgba(232,100,26,0.1)"
                  : hovered === tab.key
                  ? "rgba(255,255,255,0.03)"
                  : "transparent",
                border:       "none",
                borderRight:  i < tabs.length - 1
                  ? "1px solid rgba(255,255,255,0.07)"
                  : "none",
                borderBottom: activeTab === tab.key
                  ? "2px solid #e8641a"
                  : "2px solid transparent",
                color:        activeTab === tab.key
                  ? "#e8641a"
                  : hovered === tab.key
                  ? "rgba(255,255,255,0.7)"
                  : "rgba(255,255,255,0.3)",
                fontSize:     "13px",
                fontWeight:   activeTab === tab.key ? 600 : 400,
                cursor:       "pointer",
                transition:   "all 0.2s ease",
                letterSpacing:"0.3px",
                fontFamily:   "inherit",
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* ── Cards Grid ── */}
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap:                 "20px",
        }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const hasLinks = project.github || project.live;
              return (
                <motion.div
                  key={project.id}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  whileHover={{
                    y:           -6,
                    borderColor: "rgba(232,100,26,0.5)",
                    boxShadow:   "0 12px 40px rgba(232,100,26,0.1)",
                  }}
                  style={{
                    display:       "flex",
                    flexDirection: "column",
                    borderRadius:  "14px",
                    border:        "1px solid rgba(255,255,255,0.06)",
                    background:    "#1c1c1c",
                    overflow:      "hidden",
                    transition:    "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  {/* Screenshot */}
                  <div style={{
                    height:       "175px",
                    overflow:     "hidden",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    flexShrink:   0,
                    background:   "#111",
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width:          "100%",
                        height:         "100%",
                        objectFit:      "cover",
                        objectPosition: "top",
                        display:        "block",
                        transition:     "transform 0.4s ease",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                  </div>

                  {/* Body */}
                  <div style={{
                    display:       "flex",
                    flexDirection: "column",
                    flex:          1,
                    padding:       "18px",
                    gap:           "10px",
                  }}>

                    {/* Title */}
                    <h3 style={{
                      color:      "#fff",
                      fontWeight: 600,
                      fontSize:   "15px",
                      margin:     0,
                      fontFamily: "'Anton', 'Impact', sans-serif",
                      letterSpacing: "0.3px",
                    }}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      color:      "rgba(255,255,255,0.4)",
                      fontSize:   "12.5px",
                      lineHeight: 1.65,
                      margin:     0,
                      flex:       1,
                    }}>
                      {project.desc}
                    </p>

                    {/* Stack Pills */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {project.stack.map((tech) => (
                        <span key={tech} style={{
                          fontSize:   "11px",
                          padding:    "3px 9px",
                          borderRadius:"5px",
                          background: "rgba(232,100,26,0.07)",
                          border:     "1px solid rgba(232,100,26,0.15)",
                          color:      "rgba(232,100,26,0.8)",
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    {hasLinks && (
                      <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              flex:           1,
                              textAlign:      "center",
                              padding:        "8px 0",
                              borderRadius:   "7px",
                              background:     "#e8641a",
                              color:          "#fff",
                              fontSize:       "12px",
                              fontWeight:     700,
                              textDecoration: "none",
                              letterSpacing:  "0.5px",
                              textTransform:  "uppercase",
                              transition:     "background 0.2s ease",
                            }}
                            onMouseEnter={(e) => e.target.style.background = "#f0731f"}
                            onMouseLeave={(e) => e.target.style.background = "#e8641a"}
                          >
                            Live Demo
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              flex:           1,
                              textAlign:      "center",
                              padding:        "8px 0",
                              borderRadius:   "7px",
                              border:         "1px solid rgba(255,255,255,0.1)",
                              color:          "rgba(255,255,255,0.55)",
                              fontSize:       "12px",
                              fontWeight:     500,
                              textDecoration: "none",
                              transition:     "all 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.borderColor = "#e8641a";
                              e.target.style.color       = "#e8641a";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.borderColor = "rgba(255,255,255,0.1)";
                              e.target.style.color       = "rgba(255,255,255,0.55)";
                            }}
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
      `}</style>
    </section>
  );
}