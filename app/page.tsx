import Image from "next/image";
import {
  ShieldCheck,
  Target,
  Briefcase,
  FileText,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  ChevronRight,
  HardHat,
  Users
} from "lucide-react";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
      <div className="overflow-hidden">

        {/* --- HERO SECTION --- */}
        <section className="relative bg-slate-900 text-white min-h-[90vh] flex items-center pt-20 pb-16 overflow-hidden">
          {/* Tło abstrakcyjne */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/40 via-slate-900 to-slate-900 z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold border border-emerald-500/20 backdrop-blur-sm">
                <ShieldCheck size={16} /> Ekspert Bezpieczeństwa & AI
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                Bezpieczeństwo. <br/>
                <span className="text-emerald-400">Innowacja.</span> <br/>
                Skuteczność.
              </h1>

              <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                Jako <strong>Członek Zarządu OSPSBHP (o. Gdańsk)</strong> i Główny Specjalista, łączę twarde kompetencje techniczne z zaawansowanym zarządzaniem.
                Nowoczesne BHP to strategiczny filar Twojego biznesu, a nie tylko formalność.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="#kontakt" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition shadow-lg shadow-emerald-900/20 flex justify-center items-center gap-2">
                  Zadbajmy o standardy <ChevronRight size={18}/>
                </a>
                <a href="#oferta" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition backdrop-blur-sm flex justify-center items-center">
                  Sprawdź ofertę
                </a>
              </div>

              {/* Quick stats mini */}
              <div className="pt-8 flex gap-8 border-t border-white/10">
                <div>
                  <div className="text-2xl font-bold text-white">20+ lat</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Doświadczenia</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-emerald-400">100%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">Pozytywnych kontroli</div>
                </div>
              </div>
            </div>

            {/* ZDJĘCIE PROFILOWE */}
            <div className="relative flex justify-center lg:justify-end animate-in fade-in duration-1000 delay-200">
              <div className="relative w-[350px] sm:w-[450px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-800">
                <Image
                    src="/mama.png"
                    alt="Małgorzata Frelich-Korycka - Główny Specjalista BHP"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Małgorzata Frelich-Korycka</p>
                  <p className="text-emerald-400 text-sm">Główny Specjalista ds. BHP i PPOŻ</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- DLACZEGO JA (USP) --- */}
        <section id="dlaczego-ja" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Dlaczego warto mi zaufać?</h2>
              <p className="text-slate-600 text-lg">
                Moja misja to zmiana postrzegania roli Behapowca. Jestem partnerem w biznesie, który dba o to, by bezpieczeństwo szło w parze z efektywnością.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: "100% Skuteczności",
                  desc: "100% pozytywnych kontroli organów nadzoru (PIP, PSP, SANEPID). Przygotowuję firmy do kontroli bez stresu."
                },
                {
                  icon: HardHat,
                  title: "Praktyka Terenowa",
                  desc: "Specjalizuję się w obsłudze placów budowy i nadzorze nad pracami szczególnie niebezpiecznymi. Nie jestem teoretykiem zza biurka."
                },
                {
                  icon: Users,
                  title: "Zaufanie Branży",
                  desc: "Jako Członek Zarządu OSPSBHP (o. Gdańsk) aktywnie kształtuję standardy bezpieczeństwa pracy na Pomorzu."
                },
                {
                  icon: Zap,
                  title: "AI & Innowacje",
                  desc: "Jako ekspert AI w prewencji, wdrażam nowoczesne narzędzia, które optymalizują procesy i realnie zmniejszają ryzyko."
                }
              ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5 transition duration-300 group">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-900 mb-6 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- OFERTA (SERVICES) --- */}
        <section id="oferta" className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">W czym wspieram Klientów?</h2>
                <p className="text-slate-400 max-w-xl">
                  Kompleksowe usługi dopasowane do specyfiki Twojej branży.
                </p>
              </div>
              <a href="#kontakt" className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition text-sm font-medium">
                Zamów wycenę indywidualną
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Usługa 1 */}
              <div className="group relative bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-emerald-500/20 transition"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-500"/> Nadzór i Organizacja
                </h3>
                <p className="text-slate-300 mb-6">
                  Realny nadzór nad bezpieczną organizacją pracy w terenie i zakładach przemysłowych. Nie tylko podpisuję dokumenty – sprawdzam, czy procedury działają w praktyce.
                </p>
              </div>

              {/* Usługa 2 */}
              <div className="group relative bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-purple-500/20 transition"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <FileText className="text-purple-400"/> Dokumentacja i Procedury
                </h3>
                <p className="text-slate-300 mb-6">
                  Tworzę „szyte na miarę” instrukcje, procedury wewnętrzne oraz oceny ryzyka zawodowego. Dokumenty, które faktycznie chronią pracowników i interesy pracodawcy.
                </p>
              </div>

              {/* Usługa 3 */}
              <div className="group relative bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-blue-400"/> Doradztwo Strategiczne ISO
                </h3>
                <p className="text-slate-300 mb-6">
                  Pomagam kadrze zarządzającej wdrażać systemy ISO (45001, 9001, 14001). Optymalizuję procesy bezpieczeństwa, czyniąc je integralną częścią zarządzania firmą.
                </p>
              </div>

              {/* Usługa 4 */}
              <div className="group relative bg-slate-800/50 p-8 rounded-2xl border border-white/5 hover:border-emerald-500/50 transition duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-amber-500/20 transition"></div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <ShieldCheck className="text-amber-400"/> Audyty i Kontrole
                </h3>
                <p className="text-slate-300 mb-6">
                  Przeprowadzam rzetelne audyty stanu BHP (w tym ppoż.). Wykrywam nieprawidłowości zanim zrobi to kontrola państwowa, oszczędzając Twój stres i pieniądze.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- REALIZACJE (GALLERY) --- */}
        <Gallery />

        {/* --- DOŚWIADCZENIE (Timeline) --- */}
        <section id="doswiadczenie" className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Ścieżka Ekspercka</h2>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={18} className="text-white"/>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-emerald-200 transition">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-900">PEWIK Gdynia</h3>
                    <time className="text-xs font-medium text-emerald-600">2019 - Obecnie</time>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Specjalista ds. BHP & PPOŻ / Pełnomocnik Zarządu</p>
                  <p className="text-sm text-slate-600">Nadzór nad systemami ISO, 100% pozytywnych kontroli, wdrażanie innowacji w bezpieczeństwie.</p>
                </div>
              </div>

              {/* NOWY ELEMENT: CZŁONEK ZARZĄDU */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Users size={18} className="text-white"/>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-emerald-200 transition">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-900">OSPSBHP Oddział Gdańsk</h3>
                    <time className="text-xs font-medium text-slate-500">Funkcja Społeczna</time>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Członek Zarządu</p>
                  <p className="text-sm text-slate-600">Aktywny udział w strukturach Ogólnopolskiego Stowarzyszenia Pracowników Służby BHP. Organizacja szkoleń, konferencji i podnoszenie standardów branżowych na Pomorzu.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={18} className="text-slate-500"/>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-emerald-200 transition">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-900">Makro Cash & Carry</h3>
                    <time className="text-xs font-medium text-slate-500">2014 - 2019</time>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Specjalista ds. BHP (Region Północ)</p>
                  <p className="text-sm text-slate-600">Zarządzanie bezpieczeństwem w 4 lokalizacjach wielkopowierzchniowych.</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={18} className="text-slate-500"/>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-emerald-200 transition">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-900">Własna Działalność</h3>
                    <time className="text-xs font-medium text-slate-500">2004 - 2007</time>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Usługi BHP & Nadzór Techniczny</p>
                  <p className="text-sm text-slate-600">Nadzór nad robotami elektroenergetycznymi i telekomunikacyjnymi.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- KONTAKT --- */}
        <section id="kontakt" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Skontaktuj się ze mną</h2>
            <p className="text-slate-600 mb-12 max-w-xl mx-auto">
              Zadzwoń lub napisz, aby omówić audyt, szkolenie lub stałą współpracę. Odpowiadam na wiadomości w ciągu 24h.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <a href="mailto:malgorzata.frelich.bhp@gmail.com" className="group flex flex-col items-center p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 mb-6 shadow-sm group-hover:scale-110 transition group-hover:text-emerald-600">
                  <Mail size={32} />
                </div>
                <span className="text-slate-500 font-medium mb-1">Email</span>
                <span className="text-xl md:text-2xl font-bold text-slate-900 break-all">malgorzata.frelich.bhp@gmail.com</span>
              </a>

              <a href="tel:+48507107336" className="group flex flex-col items-center p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition duration-300">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-900 mb-6 shadow-sm group-hover:scale-110 transition group-hover:text-emerald-600">
                  <Phone size={32} />
                </div>
                <span className="text-slate-500 font-medium mb-1">Telefon</span>
                <span className="text-xl md:text-2xl font-bold text-slate-900">+48 507-107-336</span>
              </a>
            </div>
          </div>
        </section>

      </div>
  );
}