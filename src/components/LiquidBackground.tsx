"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LiquidBackgroundProps {
    className?: string;
    image?: string;
}

export default function LiquidBackground({
    className,
    image = "/liquid-texture.png" // Clean local texture
}: LiquidBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        let app: any;
        let cancelled = false;

        (async () => {
            // ✅ EXACT same library, now installed locally
            const { default: LiquidBackground } = await import(
                "threejs-components/build/backgrounds/liquid1.min.js"
            );

            if (cancelled || !canvasRef.current) return;

            const canvas = canvasRef.current;

            // ✅ EXACT same logic as the vanilla JS snippet
            app = LiquidBackground(canvas);

            app.loadImage(image);
            app.liquidPlane.material.metalness = 0.75;
            app.liquidPlane.material.roughness = 0.25;
            app.liquidPlane.uniforms.displacementScale.value = 5;
            app.setRain(false); // mouse/hover ripples stay, fake "rain" is off

            app.onResize?.();
        })();

        const onResize = () => {
            app?.onResize?.();
        };

        window.addEventListener("resize", onResize);

        return () => {
            cancelled = true;
            window.removeEventListener("resize", onResize);
            app?.dispose?.();
        };
    }, [image]); // Re-run if image changes

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 h-full w-full -z-10", className)}
        // don't disable pointer-events, library needs mouse move
        />
    );
}
