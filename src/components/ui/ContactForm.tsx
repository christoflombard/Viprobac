"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Send } from "lucide-react"

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")
        // Simulate API call
        setTimeout(() => {
            setStatus("success")
        }, 1500)
    }

    if (status === "success") {
        return (
            <div className="p-8 rounded-2xl bg-white/5 border border-viprobac/30 text-center animate-in fade-in zoom-in">
                <div className="w-16 h-16 bg-viprobac/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-viprobac" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. Our team will get back to you shortly.</p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                    Send Another Message
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-viprobac focus:ring-1 focus:ring-viprobac outline-none transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-viprobac focus:ring-1 focus:ring-viprobac outline-none transition-all"
                        placeholder="john@company.com"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-viprobac focus:ring-1 focus:ring-viprobac outline-none transition-all appearance-none"
                >
                    <option>General Inquiry</option>
                    <option>Request Site Evaluation (ViProBac)</option>
                    <option>Product Information (ViProGro)</option>
                    <option>Partnership Opportunity</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/10 text-white focus:border-viprobac focus:ring-1 focus:ring-viprobac outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                />
            </div>

            <Button type="submit" className="w-full gap-2" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
                {!status && <Send className="w-4 h-4" />}
            </Button>
        </form>
    )
}
