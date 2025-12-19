"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealProps {
    children: React.ReactNode
    className?: string
    direction?: "up" | "down" | "left" | "right"
    delay?: number
    duration?: number
    stagger?: number
    parallax?: boolean
}

export function ScrollReveal({
    children,
    className,
    direction = "up",
    delay = 0,
    duration = 1,
    stagger = 0,
    parallax = false,
}: ScrollRevealProps) {
    const el = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!el.current) return

        const x = direction === "left" ? -50 : direction === "right" ? 50 : 0
        const y = direction === "up" ? 50 : direction === "down" ? -50 : 0

        if (parallax) {
            gsap.fromTo(
                el.current,
                { y: 50 },
                {
                    y: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            )
        } else {
            gsap.fromTo(
                el.current,
                { opacity: 0, x, y },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration,
                    delay,
                    ease: "power3.out",
                    stagger,
                    scrollTrigger: {
                        trigger: el.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        }
    }, [direction, delay, duration, stagger, parallax])

    return (
        <div ref={el} className={cn("will-change-transform", className)}>
            {children}
        </div>
    )
}
