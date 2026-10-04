import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 200,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 200,
    damping: 30,
  });

  useEffect(() => {
    // No cursor effect on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      mouseX.set(e.clientX - 100);
      mouseY.set(e.clientY - 100);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed top-0 left-0 z-0 h-[200px] w-[200px] rounded-full bg-green-500/15 blur-[70px]"
    />
  );
}

export default Cursor;
