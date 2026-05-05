"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [titleText, setTitleText] = useState<"product" | "ux">("product");

  useEffect(() => {
    // Change text at midpoint of line animations (~1.6s)
    const textTimer = setTimeout(() => {
      setTitleText("ux");
    }, 1600);

    // Hide screen
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 4200);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const lineEase = [0.22, 1, 0.36, 1] as const;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(170deg, #000000 0%, #1c1c1c 100%)",
          }}
        >
          {/* ── Horizontal Line 1 (top 30%) — slides LEFT → RIGHT ── */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "30%",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 0.2, duration: 0.75, ease: lineEase }}
              style={{ width: "100%", height: "100%", background: "#626262", opacity: 0.45 }}
            />
          </div>

          {/* ── Horizontal Line 2 (top 70%) — slides RIGHT → LEFT ── */}
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: "70%",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              transition={{ delay: 1.1, duration: 0.75, ease: lineEase }}
              style={{ width: "100%", height: "100%", background: "#626262", opacity: 0.45 }}
            />
          </div>

          {/* ── Vertical Line 1 (left 14%) — slides TOP → BOTTOM ── */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "14%",
              width: "1px",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 1.9, duration: 0.75, ease: lineEase }}
              style={{ width: "100%", height: "100%", background: "#626262", opacity: 0.45 }}
            />
          </div>

          {/* ── Vertical Line 2 (right 14%) — slides BOTTOM → TOP ── */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: "14%",
              width: "1px",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ delay: 2.3, duration: 0.75, ease: lineEase }}
              style={{ width: "100%", height: "100%", background: "#626262", opacity: 0.45 }}
            />
          </div>

          {/* ── Ghost "Alan Valdez" — very faint background text ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ duration: 1.6, ease: "easeOut", delay: 0.4 }}
            style={{
              position: "absolute",
              bottom: "-4%",
              left: "-2%",
              fontSize: "clamp(120px, 20vw, 300px)",
              fontFamily: "var(--font-montserrat), sans-serif",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.07em",
              lineHeight: 0.98,
              userSelect: "none",
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            Alan Valdez
          </motion.div>

          {/* ── Central headline with text swap ── */}
          <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <AnimatePresence mode="wait">
              {titleText === "product" ? (
                <motion.h1
                  key="product"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16, transition: { duration: 0.35, ease: "easeIn" } }}
                  transition={{ duration: 0.9, ease: lineEase, delay: 0.15 }}
                  style={{
                    fontSize: "clamp(48px, 9vw, 140px)",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontWeight: 400,
                    color: "white",
                    lineHeight: 0.98,
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  Product{" "}
                  <span style={{ fontWeight: 800 }}>Designer</span>
                </motion.h1>
              ) : (
                <motion.h1
                  key="ux"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16, transition: { duration: 0.35 } }}
                  transition={{ duration: 0.6, ease: lineEase }}
                  style={{
                    fontSize: "clamp(48px, 9vw, 140px)",
                    fontFamily: "var(--font-montserrat), sans-serif",
                    fontWeight: 400,
                    color: "white",
                    lineHeight: 0.98,
                    letterSpacing: "-0.01em",
                    margin: 0,
                  }}
                >
                  UX{" "}
                  <span style={{ fontWeight: 800 }}>Engineer</span>
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
