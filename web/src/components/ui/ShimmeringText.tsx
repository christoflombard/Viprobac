"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface ShimmeringTextProps extends MotionProps {
    text: string;
    duration?: number;
    wave?: boolean;
    color?: string;
    shimmeringColor?: string;
    className?: string;
}

export function ShimmeringText({
    text,
    duration = 2,
    wave = false,
    color = "hsl(var(--muted-foreground))",
    shimmeringColor = "hsl(var(--foreground))",
    className,
    ...props
}: ShimmeringTextProps) {
    const characters = text.split("");

    return (
        <div
            className={cn("inline-flex flex-wrap justify-center", className)}
            {...props}
        >
            {characters.map((char, index) => {
                // Stagger logic: each character starts slightly later
                // We ensure the total cycle matches `duration` roughly, but simple staggering is easier
                const delay = index * (duration / (characters.length * 2));

                return (
                    <motion.span
                        key={index}
                        initial={{
                            color: color,
                            y: 0,
                            x: 0,
                            scale: 1,
                            rotate: 0,
                        }}
                        animate={{
                            color: [color, shimmeringColor, color],
                            y: wave ? [0, -3, 3, 0] : 0,
                            x: wave ? [0, 5, -5, 0] : 0,
                            scale: wave ? [1, 1.1, 1] : 1,
                            rotate: wave ? [0, 8, -8, 0] : 0,
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: delay,
                        }}
                        style={{ display: "inline-block", whiteSpace: "pre" }}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </div>
    );
}
