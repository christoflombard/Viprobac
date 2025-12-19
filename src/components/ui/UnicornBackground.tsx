"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"

export function UnicornBackground() {
    const initialized = useRef(false)

    const handleLoad = () => {
        if (!initialized.current && (window as any).UnicornStudio) {
            (window as any).UnicornStudio.init()
            initialized.current = true
        }
    }

    return (
        <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
            <div data-us-project="yWZ2Tbe094Fsjgy9NRnD" className="absolute w-full h-full left-0 top-0 -z-10"></div>
            <Script
                src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
                strategy="lazyOnload"
                onLoad={handleLoad}
            />
        </div>
    )
}
