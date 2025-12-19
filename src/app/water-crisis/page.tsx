import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { AlertTriangle, Play, ExternalLink, Droplets, Factory, TrendingDown, Shield, Users, Banknote } from "lucide-react"
import Link from "next/link"

const videos = [
    {
        id: "JLIxC4mvN8I",
        title: "South Africa's Water Crisis Documentary",
    },
    {
        id: "ZHOfS3OaVq4",
        title: "The State of SA's Water Infrastructure",
    },
    {
        id: "ZovIbdGIueg",
        title: "Pollution Impact on Communities",
    },
    {
        id: "effPF2dBurE",
        title: "Water Scarcity in Urban Areas",
    },
    {
        id: "0ND1EW-stTw",
        title: "Agricultural Water Challenges",
    },
    {
        id: "izG4j0SErJI",
        title: "Solutions for Water Security",
    },
    {
        id: "p0xvJuEdIBU",
        title: "The Path Forward",
    }
]

export default function WaterCrisisPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero
                    title="Water Crisis in SA"
                    subtitle="Understanding South Africa's water infrastructure collapse and the urgent call for action."
                    className="min-h-[60vh]"
                />

                {/* Introduction Section */}
                <section className="py-20 bg-black/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 mb-6">
                                <AlertTriangle className="w-4 h-4" />
                                <span className="text-sm font-bold uppercase tracking-wider">National Emergency</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                                The Clear and Present <span className="text-red-500">Danger</span>
                            </h2>
                            <p className="text-lg text-gray-400 mb-6">
                                South Africa is confronting a national water crisis that constitutes a failure of strategic asset management, moving beyond an environmental concern to become a direct and escalating threat to public health, economic stability, and national security.
                            </p>
                            <p className="text-lg text-gray-400 mb-6">
                                The paradox of full dams coexisting with dry taps in major urban centers starkly illustrates that this is not a crisis of scarcity, but a <span className="text-white font-semibold">catastrophic failure of infrastructure, governance, and political will</span>.
                            </p>
                            <p className="text-lg text-gray-400">
                                This is not a future risk; it is an active corrosion of state capacity, threatening to create ungovernable zones where essential services have collapsed and public health emergencies are the norm.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Infographics Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                                Understanding the <span className="text-viprobac">Crisis</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Visual breakdown of the root causes and consequences of South Africa&apos;s water infrastructure failure.
                            </p>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <ScrollReveal className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                <img
                                    src="/infographic-1.jpg"
                                    alt="South Africa's Water Crisis: A System on the Brink - Root Causes and Consequences"
                                    className="w-full h-auto"
                                />
                            </ScrollReveal>
                            <ScrollReveal delay={0.2} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                                <img
                                    src="/infographic-2.jpg"
                                    alt="South Africa's Water Crisis: Maintenance Backlog and Health Risks"
                                    className="w-full h-auto"
                                />
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Case Studies Section */}
                <section className="py-20 bg-black/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                                Case Studies in <span className="text-red-500">Collapse</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                                From decaying inland wastewater systems to direct ocean discharge, a pattern of neglect emerges.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Gauteng Case Study */}
                            <ScrollReveal className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                                        <Factory className="w-6 h-6 text-orange-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Gauteng&apos;s Inland Decay</h3>
                                        <p className="text-sm text-gray-500">From Source to Tap</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    The complete collapse of the Rooiwal Wastewater Works was the direct cause of the deadly Hammanskraal cholera outbreak. The plant continues to discharge vast amounts of raw, untreated sewage into the Apies River daily.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500 font-bold">•</span>
                                        <span><strong className="text-white">Biological Hazard:</strong> Algal blooms produce potent natural poisons, depleting oxygen and leaving fish diseased.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500 font-bold">•</span>
                                        <span><strong className="text-white">Chemical Hazard:</strong> Pharmaceuticals, ARVs, and illicit drugs like methamphetamine detected. Estrogen at 130x international guidelines.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-red-500 font-bold">•</span>
                                        <span><strong className="text-white">30-40% Water Loss:</strong> Treated water lost to leaks before reaching consumers.</span>
                                    </li>
                                </ul>
                            </ScrollReveal>

                            {/* Cape Town Case Study */}
                            <ScrollReveal delay={0.2} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                                        <Droplets className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Cape Town&apos;s Coastal Crisis</h3>
                                        <p className="text-sm text-gray-500">A Threat to the Blue Economy</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Cape Town discharges raw, untreated sewage directly into the ocean 24/7 via three marine outfalls, impacting the city&apos;s most iconic beaches. Sewage plumes are visible from Table Mountain.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 font-bold">•</span>
                                        <span><strong className="text-white">Public Health Risks:</strong> Full spectrum of viruses, parasites, and flesh-eating organisms in the water.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 font-bold">•</span>
                                        <span><strong className="text-white">Chemical Pollution:</strong> Pharmaceuticals and &quot;forever chemicals&quot; found in marine organisms from sea urchins to penguins.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-blue-500 font-bold">•</span>
                                        <span><strong className="text-white">Superbugs:</strong> Marine microbes resistant to 16 different frontline antibiotics discovered.</span>
                                    </li>
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* Consequences Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                                Compounding <span className="text-red-500">Consequences</span>
                            </h2>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ScrollReveal className="p-6 rounded-2xl bg-red-500/5 border border-red-500/20 text-center">
                                <AlertTriangle className="w-10 h-10 text-red-500 mx-auto mb-4" />
                                <h3 className="font-bold text-white mb-2">Disease Outbreaks</h3>
                                <p className="text-sm text-gray-400">Cholera, typhoid, and waterborne diseases from failed treatment.</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1} className="p-6 rounded-2xl bg-orange-500/5 border border-orange-500/20 text-center">
                                <Users className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                                <h3 className="font-bold text-white mb-2">Food Chain Risk</h3>
                                <p className="text-sm text-gray-400">Contaminated fish sold in markets, introducing toxins to consumers.</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2} className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/20 text-center">
                                <TrendingDown className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
                                <h3 className="font-bold text-white mb-2">Economic Collapse</h3>
                                <p className="text-sm text-gray-400">Tourism threatened, farms destroyed, investment fleeing.</p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3} className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20 text-center">
                                <Shield className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                                <h3 className="font-bold text-white mb-2">Antibiotic Resistance</h3>
                                <p className="text-sm text-gray-400">Superbugs breeding in polluted waters threaten global health.</p>
                            </ScrollReveal>
                        </div>

                        {/* Funding Gap Table */}
                        <ScrollReveal className="mt-16 max-w-2xl mx-auto">
                            <div className="rounded-2xl overflow-hidden border border-white/10">
                                <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <Banknote className="w-5 h-5 text-viprobac" />
                                        Johannesburg Infrastructure Funding Gap
                                    </h3>
                                </div>
                                <div className="divide-y divide-white/10">
                                    <div className="flex justify-between px-6 py-4">
                                        <span className="text-gray-400">Required Investment</span>
                                        <span className="font-bold text-red-500">R64 Billion</span>
                                    </div>
                                    <div className="flex justify-between px-6 py-4">
                                        <span className="text-gray-400">Allocated Budget</span>
                                        <span className="font-bold text-yellow-500">R7 Billion</span>
                                    </div>
                                    <div className="flex justify-between px-6 py-4 bg-red-500/5">
                                        <span className="text-white font-semibold">Funding Shortfall</span>
                                        <span className="font-bold text-red-500">R57 Billion</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Framework for Recovery */}
                <section className="py-20 bg-black/50">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                                Framework for <span className="text-viprobac">Recovery</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Non-negotiable strategic imperatives for securing South Africa&apos;s water future.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ScrollReveal className="p-8 rounded-2xl bg-gradient-to-b from-viprobac/10 to-transparent border border-viprobac/20">
                                <div className="text-5xl font-bold text-viprobac mb-4">01</div>
                                <h3 className="text-xl font-bold text-white mb-4">Emergency Capital Injection</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• Urgent refurbishment of distribution networks</li>
                                    <li>• Reduce 30-40% water losses from aging pipes</li>
                                    <li>• Upgrade wastewater treatment plants with modern tech</li>
                                </ul>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1} className="p-8 rounded-2xl bg-gradient-to-b from-viprogro/10 to-transparent border border-viprogro/20">
                                <div className="text-5xl font-bold text-viprogro mb-4">02</div>
                                <h3 className="text-xl font-bold text-white mb-4">Public-Private Partnerships</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• Inject private capital and expertise</li>
                                    <li>• Ensure transparency and regulatory stability</li>
                                    <li>• De-politicize water management</li>
                                </ul>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2} className="p-8 rounded-2xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20">
                                <div className="text-5xl font-bold text-blue-500 mb-4">03</div>
                                <h3 className="text-xl font-bold text-white mb-4">Governance & Accountability</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li>• Radical transparency from municipalities</li>
                                    <li>• Enforce Blue and Green Drop standards</li>
                                    <li>• Decisive intervention for failing authorities</li>
                                </ul>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                {/* YouTube Videos Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <ScrollReveal className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
                                Watch & <span className="text-red-500">Learn</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Educational videos documenting South Africa&apos;s water crisis and the path forward.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {videos.map((video, i) => (
                                <ScrollReveal key={video.id} delay={i * 0.05} className="group">
                                    <Link
                                        href={`https://www.youtube.com/watch?v=${video.id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div className="relative aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden mb-3 group-hover:border-red-500/50 transition-all">
                                            <img
                                                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                                alt={video.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">{video.title}</h3>
                                        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                            <ExternalLink className="w-3 h-3" /> Watch on YouTube
                                        </div>
                                    </Link>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-20 bg-gradient-to-t from-red-500/10 to-transparent">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                                The Time for Action is <span className="text-red-500">Now</span>
                            </h2>
                            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
                                South Africa is facing an imminent and entirely self-inflicted national water catastrophe. The choice is no longer between investment and austerity; it is between managed recovery and uncontrolled state failure.
                            </p>
                            <Link href="/#contact">
                                <button className="px-8 py-4 bg-viprobac text-black font-bold rounded-lg hover:bg-viprobac/90 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                                    Contact Us for Solutions
                                </button>
                            </Link>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
