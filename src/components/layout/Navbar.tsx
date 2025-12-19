"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navItems = [
    { name: "Home", href: "/" },
    { name: "ViProBac", href: "/viprobac" },
    // { name: "ViProGro", href: "/viprogro" }, // Hidden for future launch
    {
        name: "Solutions", href: "#", children: [
            { name: "Drinking Water", href: "/drinking-water" },
            { name: "Clinical Trials", href: "/clinical-trials" },
            { name: "SANS 241", href: "/sans241" },
        ]
    },
    {
        name: "Company", href: "#", children: [
            { name: "Our Team", href: "/team" },
            { name: "Production", href: "/production" },
            { name: "Water Crisis", href: "/water-crisis" },
        ]
    },
    { name: "Contact", href: "/#contact" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-black/60 backdrop-blur-md border-white/10 py-4"
                    : "bg-black/30 backdrop-blur-sm border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading tracking-tighter">
                    ViPro<span className="text-viprobac">Bac</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group">
                            {item.children ? (
                                <button
                                    className="text-sm font-medium text-muted-foreground hover:text-viprobac transition-colors flex items-center gap-1"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {item.name}
                                </button>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="text-sm font-medium text-muted-foreground hover:text-viprobac transition-colors"
                                >
                                    {item.name}
                                </Link>
                            )}

                            {/* Dropdown */}
                            {item.children && (
                                <div
                                    className={cn(
                                        "absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200",
                                        activeDropdown === item.name ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                                    )}
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <div className="bg-background/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[180px] shadow-xl">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors whitespace-nowrap"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Button variant="glass" size="sm">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            {item.children ? (
                                <div className="space-y-2">
                                    <div className="text-lg font-medium py-2 border-b border-white/5 text-viprobac">
                                        {item.name}
                                    </div>
                                    <div className="pl-4 flex flex-col gap-2">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="text-base text-gray-400 py-1"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={item.href}
                                    className="block text-lg font-medium py-2 border-b border-white/5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Button className="w-full mt-4" variant="default">
                        Get Started
                    </Button>
                </div>
            )}
        </nav>
    )
}
