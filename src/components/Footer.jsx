import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-8 text-center border-t border-white/10"
    >
      <p className="text-gray-400">
        © {new Date().getFullYear()} Somansh. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;