export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService", // Lub 'ConsultingService' jeśli wolisz
        "name": "MFK Consulting: BHP i ISO 45001",
        "image": "https://mfk-consulting.pl/mama.png", // Link do zdjęcia głównego
        "url": "https://mfk-consulting.pl",
        "telephone": "+48507107336",
        "email": "malgorzata.frelich.bhp@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Gdynia",
            "addressRegion": "Pomorskie",
            "addressCountry": "PL"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 54.5189, // Przykładowe współrzędne Gdyni - warto podać dokładne biura jeśli jest
            "longitude": 18.5305
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "16:00"
        },
        "priceRange": "$$",
        "description": "Główny Specjalista ds. BHP i PPOŻ, Auditor Wiodący ISO. Usługi nadzoru BHP, audyty, szkolenia i dokumentacja.",
        "founder": {
            "@type": "Person",
            "name": "Małgorzata Frelich-Korycka",
            "jobTitle": "Główny Specjalista ds. BHP"
        },
        "sameAs": [
            "https://www.linkedin.com/in/ma%C5%82gorzata-frelich-korycka-872045144/" // Jeśli ma LinkedIn - koniecznie dodhttps://www.facebook.com/..."
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}