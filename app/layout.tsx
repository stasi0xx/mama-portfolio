import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd"; // Zaraz to stworzymy

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap", // Ważne dla LCP (Largest Contentful Paint)
});

// Branding: MFK Consulting
const BRAND_NAME = "MFK Consulting";
const BRAND_TAGLINE = "BHP i ISO 45001";
const BASE_URL = "https://mfk-consulting.pl"; // Zmień na prawdziwą domenę jak kupisz

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: `${BRAND_NAME}: ${BRAND_TAGLINE} | Ekspert Prewencji Wypadkowej`,
        template: `%s | ${BRAND_NAME}`,
    },
    description: "Kompleksowy nadzór BHP, PPOŻ i wdrażanie ISO 45001. Audyty, szkolenia i nowoczesna prewencja wypadkowa z wykorzystaniem AI. Działamy w Trójmieście i na terenie całej Polski.",
    keywords: [
        "BHP Gdynia", "Usługi BHP Gdańsk", "ISO 45001 wdrażanie",
        "Inspektor PPOŻ Trójmiasto", "Audyt BHP", "Nadzór BHP budowa",
        "MFK Consulting", "Małgorzata Frelich-Korycka", "Ocena ryzyka zawodowego"
    ],
    authors: [{ name: "Małgorzata Frelich-Korycka" }],
    creator: "MFK Consulting",
    publisher: "MFK Consulting",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: `${BRAND_NAME}: ${BRAND_TAGLINE}`,
        description: "Profesjonalny nadzór BHP i PPOŻ. 100% pozytywnych kontroli PIP. Sprawdź ofertę audytów i szkoleń.",
        url: BASE_URL,
        siteName: BRAND_NAME,
        locale: 'pl_PL',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg', // Musisz dodać taki plik do /public (1200x630px)
                width: 1200,
                height: 630,
                alt: 'MFK Consulting - Bezpieczeństwo i Innowacja',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl" className="scroll-smooth">
        <body className={`${inter.variable} min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased`}>

        {/* Wstrzyknięcie danych strukturalnych dla Google */}
        <JsonLd />

        {/* Navbar z nowym Brandingiem */}
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/60 shadow-sm transition-all duration-300 supports-[backdrop-filter]:bg-white/60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <a href="/" className="flex flex-col group">
                        <div className="flex items-center gap-2">
                            <span className="font-extrabold text-2xl text-slate-900 leading-none tracking-tight group-hover:text-emerald-700 transition-colors">
                                MFK <span className="text-emerald-600">Consulting</span>
                            </span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 tracking-widest uppercase mt-0.5 group-hover:text-slate-700 transition-colors">
                            BHP • PPOŻ • ISO 45001
                        </span>
                    </a>

                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
                        <a href="#dlaczego-ja" className="hover:text-emerald-600 transition hover:scale-105 transform duration-200">Dlaczego my?</a>
                        <a href="#oferta" className="hover:text-emerald-600 transition hover:scale-105 transform duration-200">Oferta</a>
                        <a href="#doswiadczenie" className="hover:text-emerald-600 transition hover:scale-105 transform duration-200">Doświadczenie</a>
                        <a href="#galeria" className="hover:text-emerald-600 transition hover:scale-105 transform duration-200">Realizacje</a>

                        <a href="#kontakt" className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-emerald-600 transition shadow-lg hover:shadow-emerald-500/30 active:scale-95 duration-200 font-semibold">
                            Darmowa Konsultacja
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
                <div className="mb-4">
                    <span className="font-bold text-white text-lg">MFK Consulting</span>
                </div>
                <p className="mb-2">© {new Date().getFullYear()} Małgorzata Frelich-Korycka. Wszelkie prawa zastrzeżone.</p>
                <p className="opacity-50 text-xs max-w-lg mx-auto">
                    Strona ma charakter informacyjny i nie stanowi oferty handlowej w rozumieniu Art. 66 par. 1 Kodeksu Cywilnego.
                </p>
            </div>
        </footer>
        </body>
        </html>
    );
}