
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const socials = [
  {
    label:  "LinkedIn",
    handle: "linkedin.com/in/sukanya-bhowmick-b8400333a/",
    href:   "https://www.linkedin.com/in/sukanya-bhowmick-b8400333a/",
    color:  "#0A66C2",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.79２ ２４ １．７７１ ２４ｈ２０．４５１Ｃ２３．２ ２４ ２４ ２３．２２７ ２４ ２２．２７１Ｖ１．７２９Ｃ２４ .774 ２３．２ ０ ２２．２２２ ０ｈ．００３ｚ"/>
      </svg>
    ),
  },
  {
    label:  "Email",
    handle: "sukanyabhowmick094@gmail.com",
    href:   "mailto:sukanyabhowmick094@gmail.com",
    color:  "#e8641a",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label:  "Twitter / X",
    handle: "@SukanyaBho45080",
    href:   "https://x.com/SukanyaBho45080",
    color:  "#e8641a",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label:  "GitHub",
    handle: "github.com/sukanya-2006",
    href:   "https://github.com/sukanya-2006",
    color:  "rgba(255,255,255,0.6)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const inputStyle = {
  width:        "100%",
  padding:      "13px 16px",
  background:   "#1c1c1c",
  border:       "1px solid rgba(255,255,255,0.08)",
  borderRadius: "8px",
  color:        "#fff",
  fontSize:     "14px",
  outline:      "none",
  fontFamily:   "inherit",
  transition:   "border-color 0.2s ease",
};

export default function Contact() {
  const formRef               = useRef(null);
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [status, setStatus]   = useState("idle");

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,
        formRef.current,    EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        position:   "relative",
        background: "#141414",
        minHeight:  "100vh",
        overflow:   "hidden",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position:     "absolute", top: "-150px", right: "-150px",
        width: "500px", height: "500px",
        background:   "radial-gradient(circle, #e8641a, transparent 65%)",
        filter:       "blur(160px)", opacity: 0.05, pointerEvents: "none",
      }} />
      <div style={{
        position:     "absolute", bottom: "-100px", left: "-100px",
        width: "400px", height: "400px",
        background:   "radial-gradient(circle, #9a5a2a, transparent 65%)",
        filter:       "blur(140px)", opacity: 0.06, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>

        {/* ══════════════════════════════════════════════════════════
            SECTION 1 — Header + Resume
        ══════════════════════════════════════════════════════════ */}
        <div style={{ padding: "120px 24px 80px" }}>

          {/* Label */}
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
              color: "#e8641a", textTransform: "uppercase", marginBottom: "12px",
            }}
          >
            Let&apos;s Connect
          </motion.p>

          {/* Heading */}
          <motion.div
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{ marginBottom: "50px" }}
          >
            <h2 style={{
              fontFamily:    "'Anton', 'Impact', sans-serif",
              fontSize:      "clamp(42px, 7vw, 80px)",
              fontWeight:    900,
              textTransform: "uppercase",
              letterSpacing: "-1px",
              lineHeight:    0.95,
              margin:        "0 0 20px",
            }}>
              <span style={{ color: "#fff" }}>GOT SOMETHING</span>
              <br />
              <span style={{ color: "#e8641a" }}>IN MIND?</span>
            </h2>
            <p style={{
              color: "rgba(255,255,255,0.4)", fontSize: "15px",
              lineHeight: 1.7, maxWidth: "480px", margin: 0,
            }}>
              Whether it&apos;s a job opportunity, a collab, or just a hello —
              my inbox is always open.
            </p>
            {/* Orange underline */}
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                marginTop: "20px", height: "2px", width: "100px",
                background: "linear-gradient(90deg, #e8641a, transparent)",
                transformOrigin: "left",
              }}
            />
          </motion.div>

          {/* ── Resume Card ── */}
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{
              background:   "#1c1c1c",
              border:       "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding:      "32px",
              display:      "flex",
              alignItems:   "center",
              justifyContent: "space-between",
              gap:          "24px",
              flexWrap:     "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
              {/* Icon */}
              <div style={{
                width: "52px", height: "52px", borderRadius: "12px",
                background: "rgba(232,100,26,0.1)",
                border: "1px solid rgba(232,100,26,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#e8641a", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <div>
                <p style={{ color: "#fff", fontWeight: 700, fontSize: "16px", margin: "0 0 4px" }}>
                  My Resume
                </p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", margin: 0 }}>
                  Full-stack developer · Updated April 2026
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 24px", background: "#e8641a",
                  color: "#fff", fontWeight: 700, fontSize: "13px",
                  textDecoration: "none", borderRadius: "8px",
                  textTransform: "uppercase", letterSpacing: "1px",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => e.target.style.background = "#f0731f"}
                onMouseLeave={(e) => e.target.style.background = "#e8641a"}
              >
                View
              </a>
              <a
                href="/resume.pdf"
                download
                style={{
                  padding: "10px 24px", background: "transparent",
                  color: "rgba(255,255,255,0.6)", fontWeight: 500, fontSize: "13px",
                  textDecoration: "none", borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textTransform: "uppercase", letterSpacing: "1px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#e8641a";
                  e.target.style.color       = "#e8641a";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.color       = "rgba(255,255,255,0.6)";
                }}
              >
                Download
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px", margin: "0 24px",
          background: "linear-gradient(to right, transparent, rgba(232,100,26,0.2), transparent)",
        }} />

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 — Socials
        ══════════════════════════════════════════════════════════ */}
        <div style={{ padding: "80px 24px" }}>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
              color: "#e8641a", textTransform: "uppercase", marginBottom: "8px",
            }}
          >
            Find Me On
          </motion.p>
          <motion.h3
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontFamily: "'Anton', 'Impact', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 900, textTransform: "uppercase",
              color: "#fff", letterSpacing: "-0.5px", margin: "0 0 36px",
            }}
          >
            SOCIALS
          </motion.h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "14px",
          }}>
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ x: 4, borderColor: s.color }}
                style={{
                  display:        "flex",
                  alignItems:     "center",
                  gap:            "16px",
                  padding:        "18px 20px",
                  background:     "#1c1c1c",
                  border:         "1px solid rgba(255,255,255,0.06)",
                  borderRadius:   "12px",
                  textDecoration: "none",
                  transition:     "border-color 0.2s ease",
                  cursor:         "pointer",
                }}
              >
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: `${s.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: s.color, flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "#fff", fontSize: "14px", fontWeight: 600, margin: "0 0 2px" }}>
                    {s.label}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", margin: 0 }}>
                    {s.handle}
                  </p>
                </div>
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "18px" }}>→</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px", margin: "0 24px",
          background: "linear-gradient(to right, transparent, rgba(232,100,26,0.2), transparent)",
        }} />

        {/* ══════════════════════════════════════════════════════════
            SECTION 3 — Message Form
        ══════════════════════════════════════════════════════════ */}
        <div style={{ padding: "80px 24px 120px" }}>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontSize: "11px", fontWeight: 600, letterSpacing: "3px",
              color: "#e8641a", textTransform: "uppercase", marginBottom: "8px",
            }}
          >
            Send a Message
          </motion.p>
          <motion.h3
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{
              fontFamily: "'Anton', 'Impact', sans-serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 900, textTransform: "uppercase",
              color: "#fff", letterSpacing: "-0.5px", margin: "0 0 8px",
            }}
          >
            DROP ME A NOTE
          </motion.h3>
          <motion.p
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{
              color: "rgba(255,255,255,0.4)", fontSize: "14px",
              lineHeight: 1.7, margin: "0 0 40px", maxWidth: "480px",
            }}
          >
            Got a question, a project idea, or just want to say hi?
            Write whatever you have in mind — I read every message.
          </motion.p>

          {/* Form Box */}
          <motion.div
            variants={fadeUp} custom={3} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            style={{
              background:   "#1c1c1c",
              border:       "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding:      "36px",
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Name + Email row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label style={{
                    display: "block", fontSize: "12px", fontWeight: 500,
                    color: "rgba(255,255,255,0.4)", marginBottom: "8px", letterSpacing: "0.5px",
                  }}>
                    Your Name
                  </label>
                  <input
                    type="text" name="name" value={form.name}
                    onChange={handleChange} placeholder="Riya Sharma" required
                    style={inputStyle}
                    onFocus={(e)  => e.target.style.borderColor = "#e8641a"}
                    onBlur={(e)   => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>
                <div>
                  <label style={{
                    display: "block", fontSize: "12px", fontWeight: 500,
                    color: "rgba(255,255,255,0.4)", marginBottom: "8px", letterSpacing: "0.5px",
                  }}>
                    Your Email
                  </label>
                  <input
                    type="email" name="email" value={form.email}
                    onChange={handleChange} placeholder="riya@example.com" required
                    style={inputStyle}
                    onFocus={(e)  => e.target.style.borderColor = "#e8641a"}
                    onBlur={(e)   => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{
                  display: "block", fontSize: "12px", fontWeight: 500,
                  color: "rgba(255,255,255,0.4)", marginBottom: "8px", letterSpacing: "0.5px",
                }}>
                  Your Message
                </label>
                <textarea
                  name="message" value={form.message}
                  onChange={handleChange} required rows={6}
                  placeholder="Hey Sukanya, I'd love to chat about..."
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.65 }}
                  onFocus={(e)  => e.target.style.borderColor = "#e8641a"}
                  onBlur={(e)   => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  padding:       "14px 0",
                  background:    status === "sending" ? "rgba(232,100,26,0.5)" : "#e8641a",
                  color:         "#fff",
                  border:        "none",
                  borderRadius:  "9px",
                  fontSize:      "13px",
                  fontWeight:    700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  cursor:        status === "sending" ? "not-allowed" : "pointer",
                  transition:    "background 0.2s ease, transform 0.15s ease",
                  fontFamily:    "inherit",
                }}
                onMouseEnter={(e) => {
                  if (status !== "sending") {
                    e.target.style.background = "#f0731f";
                    e.target.style.transform  = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = status === "sending"
                    ? "rgba(232,100,26,0.5)" : "#e8641a";
                  e.target.style.transform  = "translateY(0)";
                }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>

              {/* Feedback */}
              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    textAlign: "center", fontSize: "13px", color: "#4ade80",
                    padding: "12px", borderRadius: "8px",
                    background: "rgba(74,222,128,0.07)",
                    border: "1px solid rgba(74,222,128,0.15)",
                  }}
                >
                  ✓ Message sent! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    textAlign: "center", fontSize: "13px", color: "#f87171",
                    padding: "12px", borderRadius: "8px",
                    background: "rgba(248,113,113,0.07)",
                    border: "1px solid rgba(248,113,113,0.15)",
                  }}
                >
                  Something went wrong. Try emailing me directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div style={{
          padding:      "28px 24px",
          borderTop:    "1px solid rgba(255,255,255,0.05)",
          display:      "flex",
          justifyContent: "space-between",
          alignItems:   "center",
        }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px", margin: 0 }}>
            Designed & built by{" "}
            <span style={{ color: "#e8641a" }}>Sukanya Bhowmick</span>
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "13px", margin: 0 }}>
            © 2026
          </p>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.2); }
      `}</style>
    </section>
  );
}