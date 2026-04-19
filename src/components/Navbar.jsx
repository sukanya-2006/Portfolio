

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// // ── Custom Cursor ──────────────────────────────────────────────────────────────
// export function CustomCursor() {
//   const cursorRef = useRef(null);
//   const dotRef    = useRef(null);
//   const [hovered, setHovered] = useState(false);
//   const [clicked, setClicked] = useState(false);
//   const pos       = useRef({ x: 0, y: 0 });
//   const current   = useRef({ x: 0, y: 0 });
//   const animId    = useRef(null);

//   useEffect(() => {
//     document.body.style.cursor = "none";

//     const move = (e) => {
//       pos.current = { x: e.clientX, y: e.clientY };
//       if (dotRef.current) {
//         dotRef.current.style.transform =
//           `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
//       }
//       const target = e.target;
//       const isClickable =
//         target.tagName === "A"      ||
//         target.tagName === "BUTTON" ||
//         target.closest("a")         ||
//         target.closest("button");
//       setHovered(!!isClickable);
//     };

//     const down = () => setClicked(true);
//     const up   = () => setClicked(false);

//     const follow = () => {
//       current.current.x += (pos.current.x - current.current.x) * 0.12;
//       current.current.y += (pos.current.y - current.current.y) * 0.12;
//       if (cursorRef.current) {
//         cursorRef.current.style.transform =
//           `translate(${current.current.x - 20}px, ${current.current.y - 20}px)`;
//       }
//       animId.current = requestAnimationFrame(follow);
//     };

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mousedown", down);
//     window.addEventListener("mouseup",   up);
//     animId.current = requestAnimationFrame(follow);

//     return () => {
//       document.body.style.cursor = "";
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mousedown", down);
//       window.removeEventListener("mouseup",   up);
//       cancelAnimationFrame(animId.current);
//     };
//   }, []);

//   return (
//     <>
//       <div
//         ref={cursorRef}
//         style={{
//           position:     "fixed",
//           top: 0, left: 0,
//           width:        hovered ? "48px" : "40px",
//           height:       hovered ? "48px" : "40px",
//           borderRadius: "50%",
//           border:       `1.5px solid ${hovered ? "#e8641a" : "rgba(232,100,26,0.5)"}`,
//           pointerEvents:"none",
//           zIndex:       99999,
//           transition:   "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease",
//           background:   clicked ? "rgba(232,100,26,0.1)" : "transparent",
//           display:      "flex",
//           alignItems:   "center",
//           justifyContent: "center",
//         }}
//       >
//         {hovered && (
//           <span style={{
//             fontSize: "14px", color: "#e8641a",
//             fontWeight: 700, lineHeight: 1,
//           }}>↗</span>
//         )}
//       </div>
//       <div
//         ref={dotRef}
//         style={{
//           position:     "fixed",
//           top: 0, left: 0,
//           width:        hovered ? "0px" : "8px",
//           height:       hovered ? "0px" : "8px",
//           borderRadius: "50%",
//           background:   "#e8641a",
//           pointerEvents:"none",
//           zIndex:       99999,
//           transition:   "width 0.15s ease, height 0.15s ease",
//         }}
//       />
//     </>
//   );
// }

// // ── Navbar ─────────────────────────────────────────────────────────────────────
// const links = [
//   { label: "home",     href: "/"         },
//   { label: "projects", href: "/projects" },
//   { label: "contact",  href: "/contact"  },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: -16 }}
//       animate={{ opacity: 1,  y: 0   }}
//       transition={{ duration: 0.5, delay: 3.2 }}
//       style={{
//         position:       "fixed",
//         top: 0, left: 0, right: 0,
//         zIndex:         100,
//         padding:        "0 40px",
//         height:         "64px",
//         display:        "flex",
//         alignItems:     "center",
//         justifyContent: "space-between",
//         background:     scrolled ? "rgba(14,14,14,0.92)" : "transparent",
//         backdropFilter: scrolled ? "blur(14px)" : "none",
//         borderBottom:   scrolled
//           ? "1px solid rgba(255,255,255,0.05)"
//           : "1px solid transparent",
//         transition: "background 0.3s ease, border-color 0.3s ease",
//       }}
//     >
//       {/* Logo */}
//       <Link href="/" style={{
//         fontFamily:     "'Anton', 'Impact', sans-serif",
//         fontSize:       "22px",
//         fontWeight:     900,
//         color:          "#e8641a",
//         textDecoration: "none",
//         letterSpacing:  "2px",
//         textTransform:  "uppercase",
//       }}>
//         SK
//       </Link>

//       {/* Links */}
//       <ul style={{
//         display: "flex", gap: "36px",
//         listStyle: "none", margin: 0, padding: 0,
//       }}>
//         {links.map((link) => {
//           const isActive = pathname === link.href;
//           return (
//             <li key={link.href} style={{ position: "relative" }}>
//               <Link
//                 href={link.href}
//                 style={{
//                   fontSize:       "13px",
//                   fontWeight:     isActive ? 600 : 400,
//                   color:          isActive ? "#e8641a" : "rgba(255,255,255,0.4)",
//                   textDecoration: "none",
//                   letterSpacing:  "0.5px",
//                   textTransform:  "lowercase",
//                   paddingBottom:  "4px",
//                   display:        "block",
//                   transition:     "color 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => {
//                   if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.85)";
//                 }}
//                 onMouseLeave={(e) => {
//                   if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.4)";
//                 }}
//               >
//                 {link.label}
//               </Link>
//               {isActive && (
//                 <motion.span
//                   layoutId="nav-underline"
//                   style={{
//                     position: "absolute", bottom: "-2px",
//                     left: 0, right: 0, height: "1.5px",
//                     background: "#e8641a", borderRadius: "2px",
//                   }}
//                 />
//               )}
//             </li>
//           );
//         })}
//       </ul>

//       {/* Hire Me */}
//       <a
//         href="/contact"
//         style={{
//           padding:        "8px 20px",
//           background:     "transparent",
//           border:         "1px solid rgba(232,100,26,0.5)",
//           borderRadius:   "6px",
//           color:          "#e8641a",
//           fontSize:       "12px",
//           fontWeight:     700,
//           textDecoration: "none",
//           letterSpacing:  "1.5px",
//           textTransform:  "uppercase",
//           transition:     "all 0.2s ease",
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.background  = "#e8641a";
//           e.currentTarget.style.color       = "#fff";
//           e.currentTarget.style.borderColor = "#e8641a";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.background  = "transparent";
//           e.currentTarget.style.color       = "#e8641a";
//           e.currentTarget.style.borderColor = "rgba(232,100,26,0.5)";
//         }}
//       >
//         Hire Me
//       </a>
//     </motion.nav>
//   );
// }








"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ── Custom Cursor ──────────────────────────────────────────────────────────────
export function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef    = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const pos     = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const animId  = useRef(null);

  useEffect(() => {
    document.body.style.cursor = "none";

    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
      const t = e.target;
      setHovered(!!(t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button")));
    };
    const down = () => setClicked(true);
    const up   = () => setClicked(false);

    const follow = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.12;
      current.current.y += (pos.current.y - current.current.y) * 0.12;
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${current.current.x - 20}px, ${current.current.y - 20}px)`;
      }
      animId.current = requestAnimationFrame(follow);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    animId.current = requestAnimationFrame(follow);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(animId.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={{
        position: "fixed", top: 0, left: 0,
        width: hovered ? "48px" : "40px",
        height: hovered ? "48px" : "40px",
        borderRadius: "50%",
        border: `1.5px solid ${hovered ? "#e8641a" : "rgba(232,100,26,0.5)"}`,
        pointerEvents: "none", zIndex: 99999,
        transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease",
        background: clicked ? "rgba(232,100,26,0.1)" : "transparent",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {hovered && (
          <span style={{ fontSize: "14px", color: "#e8641a", fontWeight: 700, lineHeight: 1 }}>↗</span>
        )}
      </div>
      <div ref={dotRef} style={{
        position: "fixed", top: 0, left: 0,
        width: hovered ? "0px" : "8px",
        height: hovered ? "0px" : "8px",
        borderRadius: "50%", background: "#e8641a",
        pointerEvents: "none", zIndex: 99999,
        transition: "width 0.15s ease, height 0.15s ease",
      }} />
    </>
  );
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
const links = [
  { label: "home",     href: "/"         },
  { label: "projects", href: "/projects" },
  { label: "contact",  href: "/contact"  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 3.2 }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 40px", height: "64px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(14,14,14,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Logo — sukanya.dev */}
      <Link href="/" style={{
        fontFamily:     "'Anton', 'Impact', sans-serif",
        fontSize:       "16px",
        fontWeight:     900,
        color:          "#e8641a",
        textDecoration: "none",
        letterSpacing:  "1px",
        textTransform:  "lowercase",
      }}>
        sukanya.dev
      </Link>

      {/* Links */}
      <ul style={{ display: "flex", gap: "36px", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href} style={{ position: "relative" }}>
              <Link
                href={link.href}
                style={{
                  fontSize: "13px",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "#e8641a" : "rgba(255,255,255,0.4)",
                  textDecoration: "none", letterSpacing: "0.5px",
                  textTransform: "lowercase", paddingBottom: "4px",
                  display: "block", transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
              >
                {link.label}
              </Link>
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  style={{
                    position: "absolute", bottom: "-2px", left: 0, right: 0,
                    height: "1.5px", background: "#e8641a", borderRadius: "2px",
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>

      {/* Hire Me */}
      <a href="/contact" style={{
        padding: "8px 20px", background: "transparent",
        border: "1px solid rgba(232,100,26,0.5)", borderRadius: "6px",
        color: "#e8641a", fontSize: "12px", fontWeight: 700,
        textDecoration: "none", letterSpacing: "1.5px",
        textTransform: "uppercase", transition: "all 0.2s ease",
      }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background  = "#e8641a";
          e.currentTarget.style.color       = "#fff";
          e.currentTarget.style.borderColor = "#e8641a";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background  = "transparent";
          e.currentTarget.style.color       = "#e8641a";
          e.currentTarget.style.borderColor = "rgba(232,100,26,0.5)";
        }}
      >
        Hire Me
      </a>
    </motion.nav>
  );
}