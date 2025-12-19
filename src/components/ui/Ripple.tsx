"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RippleProps {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
    className?: string;
}

export const Ripple = React.memo(function Ripple({
    mainCircleSize = 210,
    mainCircleOpacity = 0.24,
    numCircles = 8,
    className,
}: RippleProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]",
                className,
            )}
        >
            {Array.from({ length: numCircles }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        scale: [1, 1.4 + i * 0.15],
                        opacity: [mainCircleOpacity, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut",
                    }}
                    style={{
                        width: mainCircleSize,
                        height: mainCircleSize,
                    }}
                    className="absolute rounded-full border border-white bg-white/5 shadow-xl backdrop-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            ))}
        </div>
    );
});

Ripple.displayName = "Ripple";
