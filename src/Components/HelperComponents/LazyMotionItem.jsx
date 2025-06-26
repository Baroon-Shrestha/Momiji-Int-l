import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function LazyMotionItem({ type, src }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {type === "image" ? (
        <img
          src={src}
          loading="lazy"
          alt="gallery item"
          className="w-full h-auto object-cover rounded-lg"
        />
      ) : (
        <video
          src={src}
          muted
          autoPlay
          loop
          playsInline
          className="w-full h-auto object-cover rounded-lg"
        />
      )}
    </motion.div>
  );
}
