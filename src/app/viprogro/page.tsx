import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { Button } from "@/components/ui/Button"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Bug, Factory, Sprout, TrendingUp } from "lucide-react"

export default function ViProGroPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero
                    title="Protecting Environment. Controlling Disease. Ensuring Yield."
                    subtitle="ViProGro: Advanced disease-control solutions for agriculture & industry."
                    variant="viprogro"
                >
                    <Button size="lg" variant="viprogro" className="shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                        Find Your Solution
                    </Button>
                    <Button size="lg" variant="outline" className="border-viprogro/30 text-viprogro hover:bg-viprogro hover:text-black">
                        Download Product Guide
                    </Button>
                </Hero>

                {/* Problem & Impact Section */}
                <section className="py-20 bg-black/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <ScrollReveal parallax>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                                    Secure your <span className="text-viprogro">Harvest</span>
                                </h2>
                                <p className="text-lg text-gray-400">
                                    Disease outbreaks in agriculture and industrial contamination can lead to devastating losses. ViProGro offers targeted formulations to neutralize threats before they impact your bottom line.
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ScrollReveal delay={0.2} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                                <TrendingUp className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Yield Loss</h3>
                                <p className="text-sm text-gray-400">Prevent significant crop loss due to fungal and bacterial diseases.</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.4} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                                <Factory className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Compliance</h3>
                                <p className="text-sm text-gray-400">Meet strict agricultural and environmental safety regulations.</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.6} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center">
                                <Bug className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Resistance</h3>
                                <p className="text-sm text-gray-400">Combat pathogen resistance with our advanced multi-mode action.</p>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Solutions Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
                                Targeted <span className="text-viprogro">Solutions</span>
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ScrollReveal direction="left" className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-viprogro/50 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Sprout className="w-32 h-32" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Crop Disease Control</h3>
                                <p className="text-gray-400 mb-6">
                                    Specialized formulations for citrus, grapes, and other high-value crops. Effective against black spot, mildew, and bacterial blight.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-300 mb-8">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-viprogro" /> Preventative & Curative</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-viprogro" /> No residue issues</li>
                                </ul>
                                <Button variant="link" className="text-viprogro p-0">Read More &rarr;</Button>
                            </ScrollReveal>

                            <ScrollReveal direction="right" delay={0.2} className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-viprogro/50 transition-all">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Factory className="w-32 h-32" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Industrial Hygiene</h3>
                                <p className="text-gray-400 mb-6">
                                    Sanitization solutions for packhouses, processing plants, and equipment. Ensure your produce stays clean from farm to fork.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-300 mb-8">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-viprogro" /> Food-safe formulations</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-viprogro" /> Easy application</li>
                                </ul>
                                <Button variant="link" className="text-viprogro p-0">Read More &rarr;</Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
