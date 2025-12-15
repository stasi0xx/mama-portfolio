import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Małgorzata Frelich-Korycka | Ekspert BHP, PPOŻ i ISO",
    description: "Główny Specjalista ds. BHP i PPOŻ, Auditor Wiodący ISO. Oferuję nadzór, dokumentację, audyty oraz wdrażanie AI w prewencji wypadkowej.",
    keywords: ["BHP", "PPOŻ", "ISO", "Audyt BHP", "Nadzór BHP", "Gdynia", "Trójmiasto", "Bezpieczeństwo Pracy"],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl" className="scroll-smooth">
        <body className={`${inter.variable} min-h-screen flex flex-col bg-slate-50 text-slate-900`}>
        {/* Navbar */}
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <a href="#" className="flex flex-col">
                        <span className="font-bold text-xl text-slate-900 leading-none">Małgorzata</span>
                        <span className="text-sm font-medium text-slate-500">Frelich-Korycka</span>
                    </a>
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
                        <a href="#dlaczego-ja" className="hover:text-emerald-600 transition">Dlaczego ja?</a>
                        <a href="#oferta" className="hover:text-emerald-600 transition">Oferta</a>
                        <a href="#doswiadczenie" className="hover:text-emerald-600 transition">Doświadczenie</a>
                        <a href="#galeria" className="hover:text-emerald-600 transition">Realizacje</a>

                        <a href="#kontakt" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-emerald-600 transition shadow-lg hover:shadow-emerald-500/20">
                            Kontakt
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <main className="flex-grow pt-20">
            {children}
        </main>

        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800 text-center text-sm">
            <div className="max-w-7xl mx-auto px-4">
                <p className="mb-2">© {new Date().getFullYear()} Małgorzata Frelich-Korycka. Bezpieczeństwo. Innowacja. Skuteczność.</p>
                <p className="opacity-50">Strona profesjonalna.</p>
            </div>
        </footer>
        </body>
        </html>
    );
}