import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    // Dane wyciągnięte z nagłówka CV [cite: 1, 2, 3]
    title: "Małgorzata Frelich-Korycka | Ekspert BHP & PPOŻ",
    description: "Główny Specjalista ds. BHP, Auditor ISO, Inspektor PPOŻ. Ponad 20 lat doświadczenia w bezpieczeństwie pracy i nowoczesnych technologiach.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
        <body className={`${inter.variable} min-h-screen flex flex-col`}>
        {/* Prosty Navbar */}
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <span className="font-bold text-xl text-primary">Małgorzata</span>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
                        <a href="#o-mnie" className="hover:text-accent transition">O mnie</a>
                        <a href="#galeria" className="hover:text-accent transition">Galeria</a>
                        <a href="#kompetencje" className="hover:text-accent transition">Kompetencje</a>
                        <a href="#doswiadczenie" className="hover:text-accent transition">Doświadczenie</a>

                        <a href="#kontakt" className="px-4 py-2 bg-primary text-white rounded-full hover:bg-slate-800 transition">Kontakt</a>
                    </div>
                </div>
            </div>
        </nav>

        <main className="flex-grow pt-16">
            {children}
        </main>

        {/* Footer z informacją o RODO z CV [cite: 55, 56] */}
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-xs px-4">
            <p>© {new Date().getFullYear()} Małgorzata Frelich-Korycka. Wszelkie prawa zastrzeżone.</p>
            <p className="mt-2 max-w-2xl mx-auto opacity-50">
                Strona ma charakter informacyjny.
            </p>
        </footer>
        </body>
        </html>
    );
}