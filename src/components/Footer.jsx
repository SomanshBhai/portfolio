import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-8 text-center border-t"
      style={{
        borderColor: "var(--theme-border)",
      }}
    >
      <p
        style={{
          color: "var(--theme-muted)",
        }}
      >
        © {new Date().getFullYear()} Somansh. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;
