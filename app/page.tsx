import Image from "next/image";
import { CheckCircle, Shield, Award, Users, BookOpen, ChevronRight, Mail, Phone, Globe } from "lucide-react";
import {Gallery} from "@/components/Gallery";

export default function Home() {
  return (
      <div className="overflow-hidden">

        {/* --- HERO SECTION --- */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-accent text-white min-h-[85vh] flex items-center section-padding">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-medium border border-accent/30">
                <Shield size={16} /> Ekspert Bezpieczeństwa Pracy
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Bezpieczeństwo. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Innowacja.
              </span> <br/>
                Kultura Pracy.
              </h1>
              <p className="text-lg text-slate-300 max-w-lg">
                Główny Specjalista ds. BHP i PPOŻ z ponad 20-letnim doświadczeniem.
                Łączę twarde kompetencje techniczne z nowoczesnym zarządzaniem (ISO, AI).
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#kontakt" className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-emerald-50 transition shadow-lg flex items-center gap-2">
                  Skontaktuj się <ChevronRight size={18}/>
                </a>
                <a href="#doswiadczenie" className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-lg hover:bg-white/10 transition">
                  Zobacz doświadczenie
                </a>
              </div>
            </div>

            {/* ZDJĘCIE PROFILOWE (Poprawione) */}
            <div className="relative flex justify-center items-center">
              {/* Ozdobna poświata */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-secondary rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Ramka zdjęcia */}
              <div className="relative w-full max-w-[400px] aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-sm">
                <Image
                    src="/mama.png"
                    alt="Małgorzata Frelich-Korycka"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- STATYSTYKI --- */}
        <section className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-sm text-slate-500">Lat doświadczenia</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-slate-500">Pozytywnych kontroli (PIP, PSP)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">ISO</div>
              <div className="text-sm text-slate-500">Auditor Wiodący</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">AI</div>
              <div className="text-sm text-slate-500">Innowacje w prewencji</div>
            </div>
          </div>
        </section>

        {/* --- SEKCJA O MNIE --- */}
        <section id="o-mnie" className="section-padding bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* Kolumna 1: Tekst i Edukacja */}
            <div className="order-2 md:order-1 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Więcej niż Inspektor BHP
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Nazywam się Małgorzata Frelich-Korycka. Od ponad 20 lat zajmuję się bezpieczeństwem pracy, ale moją prawdziwą pasją jest praca z ludźmi. Łączę kompetencje techniczne Inspektora PPOŻ z umiejętnościami zarządczymi zdobytymi na studiach podyplomowych.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Wierzę, że skuteczne BHP to nie tylko dokumentacja, ale przede wszystkim kultura organizacyjna i nowoczesne narzędzia – dlatego aktywnie wdrażam rozwiązania oparte na AI w prewencji wypadkowej.
                </p>
              </div>

              {/* Edukacja i działalność - Kafelki */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Kafelek 1: Edukacja */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-accent mb-2">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="font-bold text-primary text-sm mb-1">Solidne Wykształcenie</h4>
                  <p className="text-xs text-slate-500">
                    Absolwentka CIOP-PIB (Bezpieczeństwo Człowieka), Uniwersytetu Gdańskiego oraz WSAIB (Zarządzanie Jakością).
                  </p>
                </div>

                {/* Kafelek 2: Społecznik */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-secondary mb-2">
                    <Users size={24} />
                  </div>
                  <h4 className="font-bold text-primary text-sm mb-1">Działalność Społeczna</h4>
                  <p className="text-xs text-slate-500">
                    Radna dzielnicy Cisowa i członek zarządu oddziału OSPSBHP w Gdańsku. Angażuję się w sprawy lokalnej społeczności.
                  </p>
                </div>
              </div>
            </div>

            {/* Kolumna 2: Zdjęcie */}
            <div className="order-1 md:order-2 relative">
              {/* Element dekoracyjny pod zdjęciem */}
              <div className="absolute top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition duration-500 border-8 border-white">
                {/* Zakładam użycie jednego ze zdjęć z Twojej puli, np. zdjecie5.jpeg */}
                <Image
                    src="/zdjecie5.jpeg"
                    alt="Małgorzata Frelich-Korycka podczas pracy"
                    width={600}
                    height={800}
                    className="w-full h-auto object-cover"
                />

                {/* Badge na zdjęciu */}
              </div>
            </div>

          </div>
        </section>

        <Gallery />

        {/* --- KOMPETENCJE --- */}
        <section id="kompetencje" className="section-padding bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4">Kluczowe Kompetencje</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Specjalizuję się nie tylko w nadzorze, ale w budowaniu kultury bezpieczeństwa.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Karta 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border-t-4 border-accent">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-6">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Systemy Zarządzania ISO</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Pełnomocnik Zarządu i Auditor Wewnętrzny Zintegrowanych Systemów Zarządzania (ISO 45001, 9001, 14001).
                </p>
              </div>

              {/* Karta 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border-t-4 border-secondary">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Kultura Bezpieczeństwa</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Przeprowadzam audyty behawioralne, szkolenia oraz koordynuję prace szczególnie niebezpieczne.
                </p>
              </div>

              {/* Karta 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border-t-4 border-primary">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Reprezentacja i Prawo</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Skuteczna reprezentacja przed organami kontroli (PIP, PSP, UDT, SANEPID). Laureatka nagrody PIP.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DOŚWIADCZENIE --- */}
        <section id="doswiadczenie" className="section-padding bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Ścieżka Zawodowa</h2>

            <div className="space-y-12 relative before:content-[''] before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-slate-200">

              {/* Pozycja 1 - PEWIK */}
              <div className="relative md:flex items-center justify-between group">
                <div className="md:w-[45%] mb-4 md:mb-0 md:text-right pr-8">
                  <h3 className="text-xl font-bold text-primary">PEWIK Gdynia</h3>
                  <p className="text-accent font-medium">Specjalista ds. BHP & PPOŻ / Pełnomocnik Zarządu</p>
                  <span className="text-sm text-slate-500 block mt-1">01.2019 – obecnie</span>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-accent rounded-full z-10"></div>
                <div className="md:w-[45%] pl-8 pb-8 md:pb-0 border-l md:border-l-0 border-slate-200 ml-[7px] md:ml-0">
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0"/> Nadzór nad ISO 45001, 9001, 14001</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0"/> 100% kontroli z wynikiem pozytywnym</li>
                    <li className="flex gap-2"><CheckCircle size={16} className="text-secondary shrink-0"/> Wdrażanie innowacji (AI)</li>
                  </ul>
                </div>
              </div>

              {/* Pozycja 2 - Makro */}
              <div className="relative md:flex items-center justify-between group flex-row-reverse">
                <div className="md:w-[45%] mb-4 md:mb-0 pl-8">
                  <h3 className="text-xl font-bold text-primary">Makro Cash and Carry Polska</h3>
                  <p className="text-accent font-medium">Specjalista ds. BHP (Region Północ)</p>
                  <span className="text-sm text-slate-500 block mt-1">2014 – 2019</span>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-slate-300 rounded-full z-10"></div>
                <div className="md:w-[45%] pr-8 md:text-right pb-8 md:pb-0 border-l md:border-l-0 border-slate-200 ml-[7px] md:ml-0">
                  <p className="text-sm text-slate-600">
                    Zarządzanie bezpieczeństwem w 4 lokalizacjach (Gdynia, Gdańsk, Słupsk, Władysławowo). Wdrażanie standardów korporacyjnych w środowisku wielkopowierzchniowym.
                  </p>
                </div>
              </div>

              {/* Pozycja 3 - Własna działalność */}
              <div className="relative md:flex items-center justify-between group">
                <div className="md:w-[45%] mb-4 md:mb-0 md:text-right pr-8">
                  <h3 className="text-xl font-bold text-primary">Własna działalność gospodarcza</h3>
                  <p className="text-accent font-medium">Usługi BHP & Nadzór Techniczny</p>
                  <span className="text-sm text-slate-500 block mt-1">2004 – 2007</span>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-4 border-slate-300 rounded-full z-10"></div>
                <div className="md:w-[45%] pl-8 border-l md:border-l-0 border-slate-200 ml-[7px] md:ml-0">
                  <p className="text-sm text-slate-600">
                    Nadzór techniczny nad robotami elektroenergetycznymi i telekomunikacyjnymi.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- KONTAKT (BEZ FORMULARZA) --- */}
        <section id="kontakt" className="section-padding bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Porozmawiajmy o bezpieczeństwie</h2>
            <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
              Zapraszam do kontaktu w sprawach audytów, szkoleń oraz stałej współpracy w zakresie BHP i PPOŻ.
            </p>

            {/* Karty kontaktowe w jednym rzędzie */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Email */}
              <a href="mailto:malgorzata.frelich.bhp@gmail.com" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 p-8 rounded-2xl transition duration-300 flex flex-col items-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <span className="text-sm text-slate-400 break-all">malgorzata.frelich.bhp@gmail.com</span>
              </a>

              {/* Telefon */}
              <a href="tel:+48507107336" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-secondary/50 p-8 rounded-2xl transition duration-300 flex flex-col items-center">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1">Telefon</h3>
                <span className="text-sm text-slate-400">+48 507-107-336</span>
              </a>

              {/* Strona WWW */}

            </div>
          </div>
        </section>

      </div>
  );
}