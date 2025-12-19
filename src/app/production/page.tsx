import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Factory, MapPin, Settings } from "lucide-react"

export default function ProductionPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero
                    title="Our Production"
                    subtitle="Locally manufactured excellence. Proudly South African."
                    className="min-h-[60vh]"
                    backgroundImage="/production-5.jpg"
                />

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Feature Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-viprobac/10 text-viprobac border border-viprobac/20 mb-6">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-bold uppercase tracking-wider">Made in South Africa</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                                    State-of-the-Art <span className="text-viprobac">Facility</span>
                                </h2>
                                <p className="text-lg text-gray-400 mb-6">
                                    Our production plant is equipped with advanced reactor technology to synthesize our proprietary copper-zinc formulations. By manufacturing locally, we ensure quality control, supply chain reliability, and support for the local economy.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 text-gray-300">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                            <Factory className="w-5 h-5 text-viprobac" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">High Capacity Reactors</div>
                                            <div className="text-sm">Scalable production to meet municipal and industrial demand.</div>
                                        </div>
                                    </li>
                                    <li className="flex items-center gap-4 text-gray-300">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                            <Settings className="w-5 h-5 text-viprobac" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-white">Precision Control</div>
                                            <div className="text-sm">Automated systems ensure exact chemical ratios for consistent efficacy.</div>
                                        </div>
                                    </li>
                                </ul>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2} className="relative aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 group">
                                <img
                                    src="/production-1.jpg"
                                    alt="Reactor Close-up"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <div className="text-white font-bold text-xl">Production Reactor 1</div>
                                    <div className="text-sm text-gray-300">Main Synthesis Unit</div>
                                </div>
                            </ScrollReveal>
                        </div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ScrollReveal delay={0.1} className="relative h-80 rounded-2xl overflow-hidden group border border-white/10">
                                <img
                                    src="/production-2.jpg"
                                    alt="Technician Monitoring"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute bottom-4 left-4 p-2 bg-black/60 backdrop-blur-sm rounded-lg">
                                    <p className="text-white text-sm font-bold">Quality Assurance</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2} className="relative h-80 rounded-2xl overflow-hidden group border border-white/10 md:col-span-2">
                                <img
                                    src="/production-3.jpg"
                                    alt="IBC Storage Tanks"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute bottom-4 left-4 p-2 bg-black/60 backdrop-blur-sm rounded-lg">
                                    <p className="text-white text-sm font-bold">Large Scale Storage</p>
                                    <p className="text-xs text-gray-300">Ready for distribution</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3} className="relative h-80 rounded-2xl overflow-hidden group border border-white/10 md:col-span-2">
                                <img
                                    src="/production-5.jpg"
                                    alt="Full Reactor View"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute bottom-4 left-4 p-2 bg-black/60 backdrop-blur-sm rounded-lg">
                                    <p className="text-white text-sm font-bold">Advanced Infrastructure</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.4} className="relative h-80 rounded-2xl overflow-hidden group border border-white/10">
                                <img
                                    src="/production-4.jpg"
                                    alt="Technician Operation"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute bottom-4 left-4 p-2 bg-black/60 backdrop-blur-sm rounded-lg">
                                    <p className="text-white text-sm font-bold">Expert Operation</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
