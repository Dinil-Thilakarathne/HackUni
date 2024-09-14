"use client";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";

type AnimatedBoxProps = {
  children: React.ReactNode;
  className?: string;
  borderWidth?: number;
  borderColor?: string;
};

export default function AnimatedBox({
  children,
  className,
  borderWidth = 2,
  borderColor = "red",
}: AnimatedBoxProps) {
  return (
    <div className={cn("relative bg-transparent", className)}>
      <motion.div
        className="absolute inset-0 z-[1] h-full w-full rounded-lg p-2 bg-slate-200 border-slate-200"
        style={{
          clipPath: "inset(0 0 0 0 round 8px)",
          borderWidth: borderWidth,
        }}
      >
        <motion.div
          className="absolute aspect-[2_/_1] w-[10rem]"
          style={{
            background: `radial-gradient(100% 100% at right, ${borderColor}, transparent 50%)`,
            offsetPath: "border-box",
            offsetAnchor: "100% 50%",
          }}
          animate={{ offsetDistance: [0, "100%"] }}
          transition={{
            duration: 15,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        ></motion.div>
      </motion.div>
      <motion.div
        className="relative z-10 rounded-lg border-2 border-transparent bg-white p-6"
        style={{ margin: borderWidth }}
      >
        {children}
      </motion.div>
    </div>
  );
}
