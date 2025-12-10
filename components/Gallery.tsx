/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/ui/blur-fade"; // Upewnij się, że ścieżka do komponentu MagicUI jest poprawna

// Generujemy tablicę ścieżek do 21 zdjęć
// Zakładamy, że zdjęcia są w folderze /public i nazywają się zdjecie1.jpeg, zdjecie2.jpeg itd.
const images = Array.from({ length: 21 }, (_, i) => {
    return `/zdjecie${i + 1}.jpeg`;
});

export function Gallery() {
    return (
        <section id="galeria" className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                    Moja Galeria
                </h2>

                <div className="columns-1 gap-4 sm:columns-2 md:columns-3 space-y-4">
                    {images.map((imageUrl, idx) => (
                        <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                            <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img
                                    className="size-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    src={imageUrl}
                                    alt={`Realizacja BHP i PPOŻ - zdjęcie ${idx + 1}`}
                                    loading="lazy"
                                />
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}