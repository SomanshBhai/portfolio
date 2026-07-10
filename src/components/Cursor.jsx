import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 250,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 250,
    damping: 25,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 175);
      mouseY.set(e.clientY - 175);
    };

    window.addEventListener("mousemove", moveCursor);

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
      className="pointer-events-none fixed top-0 left-0 z-0 h-[350px] w-[350px] rounded-full bg-green-500/20 blur-[120px]"
    />
  );
}

export default Cursor;