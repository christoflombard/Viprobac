"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

interface ShimmeringTextProps extends React.HTMLAttributes<HTMLDivElement> {
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
    const words = text.split(" ");

    return (
        <div
            className={cn("inline-flex flex-wrap justify-center gap-[0.25em]", className)}
            {...props}
        >
            {words.map((word, wordIndex) => {
                // Calculate base index for this word to maintain continuous staggering across the sentence
                const baseIndex = text.split(" ").slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0);

                return (
                    <span key={wordIndex} className="inline-block whitespace-nowrap">
                        {word.split("").map((char, charIndex) => {
                            const index = baseIndex + charIndex;
                            const delay = index * (duration / (text.length * 2));

                            return (
                                <motion.span
                                    key={`${wordIndex}-${charIndex}`}
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
                                    style={{ display: "inline-block" }}
                                    className="mx-[1.5px]"
                                >
                                    {char}
                                </motion.span>
                            );
                        })}
                    </span>
                );
            })}
        </div>
    );
}
