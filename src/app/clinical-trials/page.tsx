import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { FileText, FlaskConical, TrendingDown } from "lucide-react"

const trials = [
    {
        title: "Pathogen Reduction Study",
        date: "2024",
        summary: "Demonstrated 99.9% reduction in E. coli and Coliform counts within 2 hours of application.",
        stats: [
            { label: "E. coli Reduction", value: "99.9%" },
            { label: "Time to Effect", value: "2 Hours" }
        ]
    },
    {
        title: "Long-term Residual Effect",
        date: "2023",
        summary: "Maintained effective disinfection levels in stored water for over 30 days without re-dosing.",
        stats: [
            { label: "Residual Duration", value: "30+ Days" },
            { label: "Re-growth", value: "0%" }
        ]
    },
    {
        title: "Biofilm Removal Analysis",
        date: "2023",
        summary: "Effective penetration and removal of established biofilm in irrigation pipelines.",
        stats: [
            { label: "Biofilm Reduction", value: "85%" },
            { label: "Flow Improvement", value: "15%" }
        ]
    }
]

export default function ClinicalTrialsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero
                    title="Clinical Trials"
                    subtitle="Scientific validation of ViProBac's efficacy and safety."
                    className="min-h-[60vh]"
                />

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                            {trials.map((trial, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-viprobac/30 transition-all">
                                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <FlaskConical className="w-5 h-5 text-viprobac" />
                                                <span className="text-sm text-viprobac font-mono">{trial.date}</span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4">{trial.title}</h3>
                                            <p className="text-gray-400 mb-6">{trial.summary}</p>
                                            <button className="text-sm text-viprobac hover:underline flex items-center gap-2">
                                                <FileText className="w-4 h-4" /> View Full Report
                                            </button>
                                        </div>
                                        <div className="flex gap-4 w-full md:w-auto">
                                            {trial.stats.map((stat, j) => (
                                                <div key={j} className="bg-black/20 rounded-xl p-4 min-w-[120px] text-center border border-white/5">
                                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                    <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
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
