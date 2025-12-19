import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { Button } from "@/components/ui/Button"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { ContactForm } from "@/components/ui/ContactForm"
import { ArrowRight, Droplets, Sprout } from "lucide-react"

import { UnicornBackground } from "@/components/ui/UnicornBackground"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Hero
          title="Water Treatment Solutions"
          subtitle="From water purification to disease control – securing your assets, your health, and your yield."
          showRipple={true}
          liquidEffect={true}
        >
          <Link href="/viprobac">
            <Button size="lg" className="bg-viprobac text-black hover:bg-viprobac/90 shadow-[0_0_30px_rgba(0,240,255,0.5)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all duration-300">
              Explore ViProBac
            </Button>
          </Link>
          {/* <Link href="/viprogro">
            <Button size="lg" className="bg-viprogro text-black hover:bg-viprogro/90 shadow-[0_0_30px_rgba(0,255,136,0.5)] hover:shadow-[0_0_40px_rgba(0,255,136,0.7)] transition-all duration-300">
              Explore ViProGro
            </Button>
          </Link> */}
        </Hero>

        {/* Mission Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
            <UnicornBackground />
            <div className="absolute inset-0 bg-black/20" />
          </div>
          <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl relative z-10">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
                Clean Water. Safe Environment. <span className="text-viprobac">Local Solutions.</span>
              </h2>
              <p className="text-xl text-gray-200 mb-16 leading-relaxed">
                At ViPro Group, we deliver two focused but complementary solution brands: ViProBac, improving water-quality with copper & zinc-based technology; and ViProGro, delivering disease-control and environmental hygiene for agriculture, industry and water systems.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <ScrollReveal delay={0.2} className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-viprobac/30 transition-all">
                <div className="text-viprobac text-3xl font-bold mb-4">SANS 241 Aligned</div>
                <div className="text-lg text-white leading-relaxed">Compliance-first solutions designed around South African water quality standards.</div>
              </ScrollReveal>

              <ScrollReveal delay={0.4} className="p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-viprobac/30 transition-all">
                <div className="text-blue-400 text-3xl font-bold mb-4">Batch Traceability & QC</div>
                <div className="text-lg text-white leading-relaxed">Controlled formulation with documented batches for consistency and accountability.</div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.6}>
              <p className="text-gray-500 text-base italic">
                "Built for regulated environments: documentation, traceability, and consistent standards."
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Local Manufacturing Teaser */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-auto overflow-hidden group min-h-[400px]">
                  <div className="absolute inset-0 bg-viprobac/20 mix-blend-overlay z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent z-10" />
                  <Image
                    src="/production-1.jpg"
                    alt="Local Manufacturing"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6 w-fit">
                      <span className="text-xs font-bold uppercase tracking-wider">Proudly South African</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">
                      Manufactured <span className="text-blue-400">Locally</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
                      Our state-of-the-art production facility in South Africa ensures we maintain the highest quality standards while supporting the local economy. We synthesize our proprietary formulations in-house for guaranteed reliability.
                    </p>
                    <Link href="/production">
                      <Button variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300">
                        View Our Facility <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ViProBac Card */}
              <ScrollReveal direction="left" parallax className="group relative overflow-hidden rounded-3xl border border-viprobac/20 bg-viprobac/5 p-8 transition-all hover:border-viprobac/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <div className="absolute inset-0 bg-gradient-to-br from-viprobac/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Droplets className="mb-6 h-12 w-12 text-viprobac" />
                <h2 className="mb-4 text-3xl font-bold text-white">ViPro<span className="text-viprobac">Bac</span></h2>
                <p className="mb-8 text-gray-400">
                  Advanced metal biocide technology for water purification. Eliminates pathogens and pollutants with long-lasting residual protection.
                </p>
                <Link href="/viprobac">
                  <Button className="w-full bg-viprobac text-black hover:bg-viprobac/80">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </ScrollReveal>

              {/* ViProGro Card */}
              {/* ViProGro Card (Non-interactive) */}
              <ScrollReveal direction="right" delay={0.2} parallax className="group relative overflow-hidden rounded-3xl border border-viprogro/20 bg-viprogro/5 p-8 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all cursor-default">
                <div className="absolute inset-0 bg-gradient-to-br from-viprogro/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Sprout className="mb-6 h-12 w-12 text-viprogro" />
                <h2 className="mb-4 text-3xl font-bold text-white">ViPro<span className="text-viprogro">Gro</span></h2>
                <p className="mb-8 text-gray-400">
                  Specialized disease control and plant health solutions. Protects crops and enhances yield with eco-friendly formulations.
                </p>
                {/* Disabled Button */}
                <div className="opacity-50 pointer-events-none">
                  <Button variant="viprogro" className="w-full cursor-not-allowed">
                    Coming Soon <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-viprobac/5 to-transparent pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                  Get in <span className="text-viprobac">Touch</span>
                </h2>
                <p className="text-lg text-gray-400 mb-8">
                  Ready to transform your water quality or secure your harvest? Contact our expert team for a consultation or site evaluation.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <svg className="w-6 h-6 text-viprobac" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Call Us</div>
                      <div className="font-bold">+27 82 462 5184</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <svg className="w-6 h-6 text-viprobac" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email Us</div>
                      <div className="font-bold">pieterl@viprobac.co.za</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
