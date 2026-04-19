// "use client"
// import { motion } from "framer-motion"

// const skills = ["React", "Next.js", "JavaScript", "HTML & CSS", "Framer Motion", "Canva", "Social Media Design"]
// const learning = ["TypeScript", "Tailwind CSS", "UI/UX Principles"]

// export default function About() {
//   return (
//     <section id="about" style={{ padding: "5rem 4rem", borderTop: "0.5px solid #e5e5e5" }}>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#aaa", marginBottom: "1.5rem" }}
//       >
//         ABOUT
//       </motion.p>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
//         style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, maxWidth: "560px", marginBottom: "2.5rem" }}
//       >
//         20 years old, endlessly curious, and convinced that good UI can change how people feel.
//         I'm a frontend developer who also loves content and storytelling — the best products sit
//         right at that intersection.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         style={{
//           background: "#f9f9f9", borderRadius: "10px",
//           padding: "1rem 1.25rem", maxWidth: "560px", marginBottom: "2rem",
//           fontSize: "13px", color: "#555", lineHeight: 1.7
//         }}
//       >
//         fun fact — I applied to a Bangalore startup community called Kalakum with zero connections,
//         just pure belief that showing up matters more than who you know.
//       </motion.div>

//       <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#aaa", marginBottom: "1rem" }}>SKILLS</p>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.5rem" }}>
//         {skills.map((s, i) => (
//           <motion.span
//             key={s}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", bounce: 0.5, delay: i * 0.06 }}
//             whileHover={{ scale: 1.08 }}
//             style={{
//               fontSize: "12px", padding: "5px 14px",
//               border: "0.5px solid #ddd", borderRadius: "20px", color: "#444", cursor: "default"
//             }}
//           >
//             {s}
//           </motion.span>
//         ))}
//       </div>

//       <p style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#aaa", marginBottom: "1rem" }}>CURRENTLY EXPLORING</p>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
//         {learning.map((s, i) => (
//           <motion.span
//             key={s}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ type: "spring", bounce: 0.5, delay: i * 0.06 }}
//             whileHover={{ scale: 1.08 }}
//             style={{
//               fontSize: "12px", padding: "5px 14px",
//               border: "0.5px dashed #ddd", borderRadius: "20px", color: "#888", cursor: "default"
//             }}
//           >
//             {s}
//           </motion.span>
//         ))}
//       </div>
//     </section>
//   )
// }



"use client";
import { motion } from "framer-motion";

const skills = ["React", "Next.js", "JavaScript", "HTML & CSS", "Framer Motion"];
const learning = ["TypeScript", "Tailwind CSS", "UI/UX Principles"];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">

        <motion.p
          className="text-sm tracking-widest text-gray-400 mb-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          ABOUT
        </motion.p>

        <motion.h2
          className="text-3xl font-semibold mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          A bit about me
        </motion.h2>

        <motion.p
          className="text-gray-300 max-w-xl mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          I'm Sukanya, a frontend developer passionate about building clean,
          interactive user interfaces and meaningful digital experiences.
        </motion.p>

        <div className="section-divider" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <h3 className="mb-4 text-lg">Skills</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {skills.map((s) => (
              <span key={s} className="skill">{s}</span>
            ))}
          </div>

          <h3 className="mb-4 text-lg">Currently Exploring</h3>
          <div className="flex flex-wrap gap-3">
            {learning.map((l) => (
              <span key={l} className="skill">{l}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}