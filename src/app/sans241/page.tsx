import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { CheckCircle2, FileText, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function Sans241Page() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero
                    title="SANS 241 Compliance"
                    subtitle="Meeting South Africa's stringent standards for safe drinking water."
                    className="min-h-[60vh]"
                />

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-4xl mx-auto">
                            <ScrollReveal>
                                <h2 className="text-3xl font-bold font-heading mb-6 text-white">Understanding SANS 241</h2>
                                <p className="text-lg text-gray-400 mb-8">
                                    SANS 241 is the definitive national standard for drinking water quality in South Africa. It specifies the physical, aesthetic, chemical, and microbiological limits that water must meet to be considered safe for human consumption.
                                </p>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                <ScrollReveal delay={0.1} className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold text-viprobac mb-4">Microbiological Safety</h3>
                                    <p className="text-gray-400 mb-4">
                                        Ensuring water is free from pathogens like E. coli and Coliforms. ViProBac's copper-zinc ionization effectively neutralizes these threats.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-viprobac" /> E. coli: Not Detected</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-viprobac" /> Total Coliforms: ≤ 10 count/100ml</li>
                                    </ul>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2} className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h3 className="text-xl font-bold text-viprobac mb-4">Chemical Compliance</h3>
                                    <p className="text-gray-400 mb-4">
                                        Managing levels of macro and micro-determinants. Our formulation ensures copper and zinc levels remain well below toxicity thresholds.
                                    </p>
                                    <ul className="space-y-2 text-sm text-gray-300">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-viprobac" /> Copper: ≤ 2000 µg/L</li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-viprobac" /> Zinc: ≤ 5 mg/L</li>
                                    </ul>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal className="bg-blue-950/20 border border-viprobac/20 rounded-2xl p-8 text-center">
                                <ShieldCheck className="w-16 h-16 text-viprobac mx-auto mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-4">Certified Safety</h3>
                                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                    ViProBac has been rigorously tested and proven to deliver effective disinfection while maintaining full compliance with SANS 241-1:2015 standards.
                                </p>
                                <Button className="gap-2">
                                    <FileText className="w-4 h-4" /> Download Compliance Report
                                </Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
