import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Link href="/" className="text-2xl font-bold font-heading tracking-tighter">
                        ViPro<span className="text-viprobac">Bac</span>
                    </Link>
                    <p className="text-sm text-gray-400">
                        Advanced water purification and disease control solutions for South Africa.
                    </p>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Solutions</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/viprobac" className="hover:text-viprobac">Water Purification</Link></li>
                        {/* <li><Link href="/viprogro" className="hover:text-viprogro">Disease Control</Link></li> */}
                        <li><Link href="/#applications" className="hover:text-white">Applications</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/#about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
                        <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold mb-4">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>pieterl@viprobac.co.za</li>
                        <li>+27 82 462 5184</li>
                        <li>Cape Town, South Africa</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-white/5">
                <div className="mb-8 p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-500 text-justify">
                    <strong className="block mb-2 text-gray-400">Disclaimer:</strong>
                    The information provided on this website regarding our water purification (ViProBac) and disease control (ViProGro) solutions is for general informational purposes only. While we strive to ensure the accuracy and reliability of our data, including SANS 241 compliance and clinical trial results, specific product performance may vary based on environmental conditions, application methods, and water quality. Users are advised to consult with our technical team for site-specific recommendations. ViPro Group assumes no liability for any errors, omissions, or damages arising from the use of this information. All products should be used in accordance with the provided safety data sheets and instructions.
                </div>
                <div className="text-center text-xs text-gray-500">
                    © {new Date().getFullYear()} ViProBac Group. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
