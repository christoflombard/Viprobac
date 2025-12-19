import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { Building2, Droplets, Home, Tractor } from "lucide-react"

const sectors = [
    {
        title: "Municipalities",
        icon: Building2,
        desc: "Large-scale water purification for towns and cities. Ensuring safe, potable water delivery to communities compliant with SANS 241.",
        features: ["Bulk water treatment", "Reservoir protection", "Distribution network safety"]
    },
    {
        title: "Agriculture & Farms",
        icon: Tractor,
        desc: "Clean drinking water for farm communities and livestock. Protecting rural health and ensuring animal welfare.",
        features: ["Borehole water treatment", "Livestock drinking troughs", "Staff housing supply"]
    },
    {
        title: "Residential Estates",
        icon: Home,
        desc: "Independent water security for gated communities and estates. Managing private water systems and backup supplies.",
        features: ["Point-of-entry systems", "Storage tank hygiene", "Greywater recycling"]
    }
]

export default function DrinkingWaterPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero
                    title="Drinking Water Solutions"
                    subtitle="Safe, clean water for municipalities, farms, and communities."
                    className="min-h-[60vh]"
                />

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {sectors.map((sector, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-viprobac/30 transition-all group">
                                    <div className="w-14 h-14 rounded-full bg-viprobac/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <sector.icon className="w-7 h-7 text-viprobac" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{sector.title}</h3>
                                    <p className="text-gray-400 mb-8 min-h-[80px]">{sector.desc}</p>
                                    <ul className="space-y-3">
                                        {sector.features.map((feature, j) => (
                                            <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-viprobac" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
