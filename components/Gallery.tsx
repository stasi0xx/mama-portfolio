import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

// Generujemy tablicę ścieżek
const images = Array.from({ length: 18 }, (_, i) => `/zdjecie${i + 1}.jpeg`);

export function Gallery() {
    return (
        <section id="galeria" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Galeria Wydarzeń</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Zobacz jak wygląda bezpieczeństwo w praktyce. Zdjęcia ze szkoleń, audytów i konferencji branżowych.
                    </p>
                </div>

                <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
                    {images.map((imageUrl, idx) => (
                        <BlurFade key={imageUrl} delay={0.1 + idx * 0.05} inView>
                            <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 break-inside-avoid bg-slate-100 group">
                                <Image
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    src={imageUrl}
                                    alt={`Realizacja BHP i PPOŻ - zdjęcie ${idx + 1}`}
                                    width={600}
                                    height={400}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    loading="lazy"
                                />
                                {/* Opcjonalny overlay z opisem, jeśli kiedyś będziesz chciał dodać */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}