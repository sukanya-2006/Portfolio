"use client"
import { motion } from "framer-motion"

const experiences = [
  {
    date: "2024 — present",
    title: "Frontend Developer",
    company: "Self-directed projects & freelance",
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 4rem", borderTop: "0.5px solid #e5e5e5" }}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#aaa", marginBottom: "2rem" }}
      >
        EXPERIENCE
      </motion.p>

      {experiences.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.3, delay: i * 0.1 }}
          style={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}
        >
          <span style={{ fontSize: "11px", color: "#aaa", minWidth: "100px", paddingTop: "3px" }}>{e.date}</span>
          <div>
            <p style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{e.title}</p>
            <p style={{ fontSize: "12px", color: "#888" }}>{e.company}</p>
          </div>
        </motion.div>
      ))}

      <p style={{ fontSize: "12px", color: "#bbb", fontStyle: "italic" }}>
        More experiences will appear here as you grow.
      </p>
    </section>
  )
}