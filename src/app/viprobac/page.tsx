import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { Button } from "@/components/ui/Button"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { CheckCircle2, FileText, FlaskConical, ShieldCheck } from "lucide-react"

export default function ViProBacPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero
                    title="Transforming Water — Safely. Locally. Reliably."
                    subtitle="ViProBac: The advanced copper & zinc-based solution for South Africa’s water-pollution crisis."
                    showRipple={true}
                    liquidEffect={true}
                >
                    <Button size="lg" className="bg-viprobac text-black hover:bg-viprobac/80 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                        Request Site Evaluation
                    </Button>
                    <Button size="lg" variant="outline" className="border-viprobac/30 text-viprobac hover:bg-viprobac hover:text-black">
                        Download Tech Sheet
                    </Button>
                </Hero>

                {/* Technology Section */}
                <section className="py-20 bg-black/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <ScrollReveal direction="left">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                                    Advanced <span className="text-viprobac">Metal Biocide</span> Technology
                                </h2>
                                <p className="text-lg text-gray-400 mb-6">
                                    ViProBac utilizes a proprietary blend of copper and zinc ions to target and eliminate pathogens and pollutants in raw water sources. Unlike traditional chemical treatments, our solution provides long-lasting residual protection.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Locally developed for South African conditions",
                                        "Effective against heavy metals and organic contaminants",
                                        "Compliant with SANS water quality standards",
                                        "Long-lasting residual effect"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle2 className="text-viprobac w-5 h-5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </ScrollReveal>
                            <ScrollReveal direction="right" delay={0.2} className="relative h-[400px] rounded-2xl overflow-hidden border border-viprobac/20 bg-viprobac/5 flex items-center justify-center">
                                {/* Placeholder for Tech Diagram */}
                                <FlaskConical className="w-32 h-32 text-viprobac/50 animate-pulse" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="text-xl font-bold text-white mb-2">Ionization Process</div>
                                    <div className="text-sm text-gray-400">Copper (Cu2+) and Zinc (Zn2+) ions disrupt cell membranes of pathogens.</div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Applications Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
                                Applications & <span className="text-viprobac">Use Cases</span>
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: "Municipal Water", desc: "Treatment for dams and reservoirs to meet SANS 241 standards." },
                                { title: "Mining & Industry", desc: "Process water treatment and effluent management." },
                                { title: "Agriculture", desc: "Irrigation water purification to protect crop health." },
                                { title: "Wastewater", desc: "Final polishing and pathogen reduction in effluent." }
                            ].map((app, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-viprobac/50 transition-colors group">
                                    <ShieldCheck className="w-10 h-10 text-viprobac mb-4 group-hover:scale-110 transition-transform" />
                                    <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                                    <p className="text-sm text-gray-400">{app.desc}</p>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SANS 241 Compliance Section */}
                <section className="py-20 bg-blue-950/20 border-y border-white/5">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
                                Ensuring Safe Drinking Water: <span className="text-viprobac">SANS 241 Compliance</span>
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                            <ScrollReveal direction="left" className="space-y-6">
                                <h3 className="text-2xl font-bold text-white">What Is SANS 241?</h3>
                                <p className="text-gray-400">
                                    SANS 241 is the South African National Standard that defines acceptable limits for microbiological, chemical, physical, and aesthetic parameters in drinking water. It sets stringent criteria to guarantee water is safe for long-term human consumption.
                                </p>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                    <h4 className="font-bold text-viprobac mb-4">Key Limits (SANS 241-1:2015)</h4>
                                    <ul className="space-y-3 text-sm text-gray-300">
                                        <li className="flex justify-between border-b border-white/10 pb-2">
                                            <span>Copper Limit</span>
                                            <span className="font-mono text-white">≤ 2000 µg/L (2 mg/L)</span>
                                        </li>
                                        <li className="flex justify-between pt-2">
                                            <span>Zinc Limit (Aesthetic)</span>
                                            <span className="font-mono text-white">≤ 5 mg/L</span>
                                        </li>
                                    </ul>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal direction="right" className="space-y-6">
                                <h3 className="text-2xl font-bold text-white">Viprobac: Passing the Test</h3>
                                <p className="text-gray-400">
                                    Viprobac is specially formulated to deliver disinfectant action at recommended dosages without exceeding SANS 241 limits.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-viprobac/10 flex items-center justify-center shrink-0">
                                            <ShieldCheck className="w-5 h-5 text-viprobac" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Mechanism of Action</h4>
                                            <p className="text-sm text-gray-400">Copper and zinc ions kill or inhibit a wide range of waterborne pathogens, providing reliable bactericidal action.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-viprobac/10 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-viprobac" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Safety Compliance</h4>
                                            <p className="text-sm text-gray-400">Residual levels remain well under SANS 241 thresholds, ensuring effective disinfection without compromising safety.</p>
                                        </div>
                                    </li>
                                </ul>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal delay={0.2}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Public Health Assurance</h4>
                                    <p className="text-sm text-gray-400">Disinfection that stays within national safety standards, protecting consumers from toxic overexposure.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Regulatory Confidence</h4>
                                    <p className="text-sm text-gray-400">Water service providers can use Viprobac confidently, knowing it aligns with chemical determinand limits.</p>
                                </div>
                                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                                    <h4 className="font-bold text-white mb-2">Long-Term Sustainability</h4>
                                    <p className="text-sm text-gray-400">A low-maintenance, cost-effective solution using controlled trace elements.</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <div className="mt-12 text-center">
                            <Button variant="outline" className="gap-2">
                                <FileText className="w-4 h-4" /> View Full SANS 241 Report
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
