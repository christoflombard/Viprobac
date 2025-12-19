import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { User, Mail, Linkedin } from "lucide-react"

const teamMembers = [
    {
        name: "Pieter",
        role: "Marketing & Operations Management",
        bio: "Driving the vision of ViProBac with a focus on sustainable water solutions.",
        image: null // Placeholder
    }
]

export default function TeamPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <Hero
                    title="Meet Our Team"
                    subtitle="The experts behind ViProBac's innovative water solutions."
                    className="min-h-[60vh]"
                />

                <section className="py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-wrap justify-center gap-8">
                            {teamMembers.map((member, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:border-viprobac/50 transition-all w-full max-w-md">
                                    <div className="mb-6 w-32 h-32 rounded-full bg-white/10 mx-auto flex items-center justify-center overflow-hidden">
                                        {member.image ? (
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <User className="w-16 h-16 text-gray-400" />
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                        <div className="text-viprobac font-medium mb-4">{member.role}</div>
                                        <p className="text-gray-400 mb-6">{member.bio}</p>
                                        <div className="flex justify-center gap-4">
                                            <button className="p-2 rounded-full bg-white/5 hover:bg-viprobac/20 hover:text-viprobac transition-colors">
                                                <Mail className="w-5 h-5" />
                                            </button>
                                            <button className="p-2 rounded-full bg-white/5 hover:bg-viprobac/20 hover:text-viprobac transition-colors">
                                                <Linkedin className="w-5 h-5" />
                                            </button>
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
