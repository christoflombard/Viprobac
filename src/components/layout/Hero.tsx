"use client"
import dynamic from "next/dynamic"
import { ShimmeringText } from "@/components/ui/ShimmeringText"
import { cn } from "@/lib/utils"

const LiquidBackground = dynamic(() => import("@/components/LiquidBackground"), { ssr: false })
const WaterRipple = dynamic(() => import("@/components/ui/WaterRipple").then(mod => mod.WaterRipple), { ssr: false })

interface HeroProps {
    title: string | React.ReactNode
    subtitle: string
    children?: React.ReactNode
    className?: string
    variant?: "default" | "viprogro"
    backgroundImage?: string
    showRipple?: boolean
    liquidEffect?: boolean
    liquidImage?: string
}

export function Hero({ title, subtitle, children, className, variant = "default", backgroundImage, showRipple, liquidEffect, liquidImage }: HeroProps) {
    const isViprogro = variant === "viprogro"

    return (
        <section className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}>


            {/* Note: If we use WaterRipple with backgroundImage, we should hide the default image rendering below? 
               The current Hero implementation renders backgroundImage in lines 20-27.
               If showRipple is true AND backgroundImage is present, WaterRipple handles the background.
               We should conditionally render the static background only if showRipple is false.
            */}

            {/* Background Image (Static fallback if no ripple) */}
            {backgroundImage && !showRipple ? (
                <div className="absolute inset-0 z-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
                </div>
            ) : null}

            {/* If no background image, render the Animated Gradient (lines 29-57). 
                WaterRipple will sit ON TOP as overlay if showRipple is true. 
            */}
            {!backgroundImage && (
                <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black">
                    {/* Primary animated gradient orb */}
                    <div className={cn(
                        "absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse-slow",
                        isViprogro
                            ? "bg-gradient-to-r from-viprogro/30 via-emerald-500/20 to-transparent"
                            : "bg-gradient-to-r from-viprobac/30 via-blue-500/20 to-transparent"
                    )} />

                    {/* Secondary animated gradient orb */}
                    <div className={cn(
                        "absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slower",
                        isViprogro
                            ? "bg-gradient-to-l from-yellow-400/20 via-viprogro/15 to-transparent"
                            : "bg-gradient-to-l from-viprogro/20 via-emerald-500/15 to-transparent"
                    )} />

                    {/* Accent orb */}
                    <div className={cn(
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl animate-spin-very-slow",
                        isViprogro
                            ? "bg-gradient-to-tr from-emerald-500/10 via-transparent to-yellow-500/10"
                            : "bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10"
                    )} />

                    {/* Grid overlay for depth */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L2BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
                </div>
            )}

            {/* Water Ripple Effect (Overlay/Replacement) */}
            {/* If backgroundImage exists, WaterRipple handles the background.
                If NO backgroundImage, WaterRipple is transparent overlay ON TOP of the gradient. */}
            {showRipple && !liquidEffect && (
                <div className="absolute inset-0 overflow-hidden">
                    <WaterRipple backgroundImage={backgroundImage} />
                </div>
            )}

            {/* Liquid Metal Background */}
            {liquidEffect && (
                <LiquidBackground image={liquidImage} className="absolute inset-0 z-0" />
            )}

            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={cn("absolute top-1/4 left-[10%] w-2 h-2 rounded-full animate-float", isViprogro ? "bg-viprogro" : "bg-viprobac")} />
                <div className={cn("absolute top-1/3 right-[15%] w-3 h-3 rounded-full animate-float-delayed", isViprogro ? "bg-yellow-400" : "bg-viprogro")} />
                <div className={cn("absolute bottom-1/3 left-[20%] w-2 h-2 rounded-full animate-float-slow", isViprogro ? "bg-emerald-400" : "bg-blue-400")} />
                <div className={cn("absolute bottom-1/4 right-[25%] w-2 h-2 rounded-full animate-float", isViprogro ? "bg-lime-400" : "bg-purple-400")} />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center pt-32">
                {/* Title with animated gradient */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    {typeof title === "string" ? (
                        <ShimmeringText
                            text={title}
                            duration={3}
                            wave={true}
                            color="#ffffff"
                            shimmeringColor={isViprogro ? "#4ade80" : "#38bdf8"}
                            className="drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
                        />
                    ) : (
                        title
                    )}
                </h1>

                {/* Subtitle with enhanced glassmorphism */}
                <div className="max-w-3xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                    <p className="text-lg md:text-2xl text-white/90 backdrop-blur-md bg-black/40 rounded-2xl p-8 border border-white/20 shadow-2xl font-medium tracking-wide">
                        {subtitle}
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
                    {children}
                </div>

                {/* Decorative line */}
                <div className="mt-20 flex items-center justify-center gap-4 opacity-50">
                    <div className={cn("h-[1px] w-20 bg-gradient-to-r from-transparent to-transparent", isViprogro ? "via-viprogro" : "via-viprobac")} />
                    <div className={cn("w-2 h-2 rounded-full animate-pulse", isViprogro ? "bg-viprogro" : "bg-viprobac")} />
                    <div className={cn("h-[1px] w-20 bg-gradient-to-l from-transparent to-transparent", isViprogro ? "via-viprogro" : "via-viprogro")} />
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    )
}
