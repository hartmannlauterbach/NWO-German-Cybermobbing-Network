/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Shield, 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Phone, 
  AlertTriangle, 
  Info, 
  Home as HomeIcon,
  Users,
  Globe,
  MessageSquare,
  Scale,
  LifeBuoy
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Section = 'home' | 'cybermobbing' | 'gangstalking' | 'hilfe';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Startseite', icon: HomeIcon },
    { id: 'cybermobbing', label: 'Cybermobbing', icon: Globe },
    { id: 'gangstalking', label: 'Gangstalking', icon: Users },
    { id: 'hilfe', label: 'Hilfe & Kontakt', icon: LifeBuoy },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'cybermobbing':
        return <CybermobbingSection />;
      case 'gangstalking':
        return <GangstalkingSection />;
      case 'hilfe':
        return <HilfeSection />;
      default:
        return <HomeSection setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] font-sans text-[#333]">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-1 px-4 text-xs flex justify-between items-center">
        <div className="flex gap-4">
          <span>Polizei Niedersachsen (Stil-Inspiration)</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Barrierefrei</span>
        </div>
        <div className="flex gap-4">
          <span>DE</span>
          <span>EN</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white border-b border-[#cccccc] shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4 cursor-pointer" onClick={() => setActiveSection('home')}>
              <div className="bg-[#003366] p-2 rounded-sm">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#003366] leading-tight uppercase tracking-tighter">
                  Präventionsportal
                </h1>
                <p className="text-sm text-gray-600 font-medium">Gemeinsam gegen digitale Gewalt</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-1 h-full items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id as Section)}
                  className={`px-4 h-full flex items-center text-sm font-semibold transition-colors border-b-4 ${
                    activeSection === item.id 
                      ? 'border-[#003366] text-[#003366] bg-blue-50' 
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#003366]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center bg-gray-100 rounded-md px-3 py-1.5 border border-gray-300">
                <input 
                  type="text" 
                  placeholder="Suchen..." 
                  className="bg-transparent border-none focus:ring-0 text-sm w-40 outline-none"
                />
                <Search className="w-4 h-4 text-gray-500" />
              </div>
              <button 
                className="md:hidden p-2 text-gray-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-200 absolute w-full z-40 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id as Section);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                    activeSection === item.id 
                      ? 'bg-blue-50 text-[#003366]' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center text-xs text-gray-500 gap-2">
          <HomeIcon className="w-3 h-3" />
          <span>Startseite</span>
          {activeSection !== 'home' && (
            <>
              <ChevronRight className="w-3 h-3" />
              <span className="capitalize">{activeSection}</span>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:block space-y-6">
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              <div className="bg-[#003366] text-white px-4 py-3 font-bold text-sm uppercase">
                Themenübersicht
              </div>
              <div className="p-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id as Section)}
                    className={`w-full text-left px-3 py-2 text-sm rounded transition-colors flex items-center justify-between group ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-[#003366] font-bold' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    <ChevronRight className={`w-4 h-4 transition-transform ${activeSection === item.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-4 rounded-sm shadow-sm">
              <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                <AlertTriangle className="w-5 h-5" />
                <span>Notruf 110</span>
              </div>
              <p className="text-xs text-red-800 leading-relaxed">
                In akuten Gefahrensituationen wählen Sie bitte sofort den polizeilichen Notruf 110.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-4 rounded-sm shadow-sm">
              <h3 className="font-bold text-[#003366] mb-3 border-b pb-2 text-sm uppercase">Quick Links</h3>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="hover:text-[#003366] cursor-pointer flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> Online-Wache
                </li>
                <li className="hover:text-[#003366] cursor-pointer flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> Opferschutz
                </li>
                <li className="hover:text-[#003366] cursor-pointer flex items-center gap-2">
                  <ChevronRight className="w-3 h-3" /> Präventionstipps
                </li>
              </ul>
            </div>
          </aside>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
              >
                {renderSection()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-white/80" />
                <span className="text-lg font-bold tracking-tight">PRÄVENTIONSPORTAL</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Dieses Portal dient der Aufklärung und Prävention von digitaler Gewalt. 
                Wir unterstützen Betroffene und informieren über rechtliche Möglichkeiten.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 border-b border-gray-700 pb-2">Informationen</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer transition-colors">Impressum</li>
                <li className="hover:text-white cursor-pointer transition-colors">Datenschutz</li>
                <li className="hover:text-white cursor-pointer transition-colors">Barrierefreiheit</li>
                <li className="hover:text-white cursor-pointer transition-colors">Kontakt</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 border-b border-gray-700 pb-2">Kontakt</h4>
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Notruf: 110</p>
                    <p>In dringenden Fällen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Beratung</p>
                    <p>info@praevention-digital.de</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
            &copy; 2026 Präventionsportal - Inspiriert durch das Design der Polizei Niedersachsen.
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomeSection({ setActiveSection }: { setActiveSection: (s: Section) => void }) {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative h-64 md:h-96 rounded-sm overflow-hidden shadow-md">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
          alt="Digital Security" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/90 to-transparent flex items-center">
          <div className="px-8 md:px-12 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Sicherheit im digitalen Raum
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Informieren Sie sich über Cybermobbing und Gangstalking. 
              Wir bieten Aufklärung, Schutzmaßnahmen und rechtliche Orientierung.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setActiveSection('cybermobbing')}
                className="bg-white text-[#003366] px-6 py-3 rounded-sm font-bold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Cybermobbing verstehen
              </button>
              <button 
                onClick={() => setActiveSection('gangstalking')}
                className="bg-[#003366] text-white border border-white/30 px-6 py-3 rounded-sm font-bold hover:bg-[#004488] transition-colors shadow-lg"
              >
                Was ist Gangstalking?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-[#003366]">
            <Globe className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#003366] mb-3">Cybermobbing</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Beleidigungen, Bedrohungen oder Bloßstellungen im Internet. Cybermobbing findet rund um die Uhr statt und erreicht ein großes Publikum.
          </p>
          <button 
            onClick={() => setActiveSection('cybermobbing')}
            className="text-[#003366] font-bold text-sm flex items-center gap-1 hover:underline"
          >
            Mehr erfahren <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white p-6 border border-gray-200 shadow-sm rounded-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-[#003366]">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#003366] mb-3">Gangstalking</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Systematisches Belästigen durch eine Gruppe von Personen. Erfahren Sie, wie Sie Anzeichen erkennen und sich schützen können.
          </p>
          <button 
            onClick={() => setActiveSection('gangstalking')}
            className="text-[#003366] font-bold text-sm flex items-center gap-1 hover:underline"
          >
            Mehr erfahren <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Help Banner */}
      <div className="bg-[#003366] text-white p-8 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="flex items-center gap-6">
          <div className="bg-white/10 p-4 rounded-full">
            <Phone className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-1">Brauchen Sie Hilfe?</h3>
            <p className="text-white/80">Wir sind für Sie da. Kontaktieren Sie unsere Beratungsstelle.</p>
          </div>
        </div>
        <button 
          onClick={() => setActiveSection('hilfe')}
          className="bg-white text-[#003366] px-8 py-3 rounded-sm font-bold hover:bg-gray-100 transition-colors whitespace-nowrap"
        >
          Zum Kontakt
        </button>
      </div>
    </div>
  );
}

function CybermobbingSection() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          Cybermobbing: Gefahr aus dem Netz
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#003366]" /> Was ist Cybermobbing?
            </h3>
            <p className="leading-relaxed">
              Cybermobbing bezeichnet das absichtliche Beleidigen, Bedrohen, Bloßstellen oder Belästigen anderer mithilfe von Kommunikationsmitteln über einen längeren Zeitraum. 
              Im Gegensatz zum klassischen Mobbing findet es im digitalen Raum statt – in sozialen Netzwerken, Messengern oder Foren.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-gray-50 p-6 border-l-4 border-[#003366]">
              <h4 className="font-bold mb-2">Merkmale</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Anonymität der Täter</li>
                <li>Große Reichweite</li>
                <li>Rund um die Uhr verfügbar</li>
                <li>Inhalte verbreiten sich unkontrolliert</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 border-l-4 border-red-500">
              <h4 className="font-bold mb-2">Folgen für Betroffene</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Psychische Belastung</li>
                <li>Sozialer Rückzug</li>
                <li>Leistungsabfall</li>
                <li>Angstzustände</li>
              </ul>
            </div>
          </div>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#003366]" /> Rechtliche Lage in Deutschland
            </h3>
            <p className="leading-relaxed">
              Obwohl es keinen spezifischen Straftatbestand "Cybermobbing" gibt, sind viele Handlungen strafbar unter:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <li className="bg-white border p-3 rounded shadow-sm text-sm font-medium">§ 185 StGB: Beleidigung</li>
              <li className="bg-white border p-3 rounded shadow-sm text-sm font-medium">§ 186 StGB: Üble Nachrede</li>
              <li className="bg-white border p-3 rounded shadow-sm text-sm font-medium">§ 201a StGB: Verletzung des Intimbereichs</li>
              <li className="bg-white border p-3 rounded shadow-sm text-sm font-medium">§ 238 StGB: Nachstellung (Stalking)</li>
            </ul>
          </section>

          <section className="bg-blue-50 p-8 rounded-sm border border-blue-100 mt-8">
            <h3 className="text-xl font-bold text-[#003366] mb-4">Erste Schritte für Betroffene</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="bg-[#003366] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <p><strong>Keine Reaktion:</strong> Antworten Sie nicht auf Beleidigungen. Das ist oft das Ziel der Täter.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#003366] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <p><strong>Beweise sichern:</strong> Erstellen Sie Screenshots von Nachrichten, Kommentaren oder Profilen.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#003366] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <p><strong>Melden & Blockieren:</strong> Nutzen Sie die Meldefunktionen der Plattformen und blockieren Sie die Täter.</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-[#003366] text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <p><strong>Hilfe suchen:</strong> Vertrauen Sie sich Freunden, Familie oder Beratungsstellen an.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function GangstalkingSection() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          Gangstalking: Systematische Belästigung
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#003366]" /> Definition und Einordnung
            </h3>
            <p className="leading-relaxed">
              Gangstalking (auch "Organized Stalking") beschreibt die Wahrnehmung, von einer organisierten Gruppe von Menschen systematisch verfolgt, beobachtet oder belästigt zu werden. 
              Dies kann sowohl im physischen Alltag als auch im digitalen Raum geschehen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Häufig beschriebene Methoden</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Überwachung</h4>
                Gefühl des ständigen Beobachtetwerdens, auch in der eigenen Wohnung.
              </div>
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Street Theater</h4>
                Inszenierte Situationen im öffentlichen Raum, die nur für das Opfer bestimmt scheinen.
              </div>
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Gaslighting</h4>
                Gezielte Manipulation, um das Opfer an der eigenen Wahrnehmung zweifeln zu lassen.
              </div>
            </div>
          </section>

          <section className="bg-yellow-50 p-6 border border-yellow-200 rounded-sm">
            <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Wichtiger Hinweis
            </h3>
            <p className="text-sm text-yellow-900 leading-relaxed">
              Das Phänomen Gangstalking ist komplex. Während Betroffene oft unter extremem Stress leiden, ist es wichtig, zwischen realen kriminellen Handlungen (Stalking nach § 238 StGB) 
              und psychischen Belastungsreaktionen zu unterscheiden. Wir empfehlen in jedem Fall eine professionelle Beratung.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Handlungsempfehlungen</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Tagebuch führen:</strong> Dokumentieren Sie Vorfälle sachlich mit Datum, Uhrzeit und Ort.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Ärztliche/Psychologische Beratung:</strong> Suchen Sie das Gespräch mit Fachleuten, um die psychische Belastung zu bewältigen.</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Polizeiliche Anzeige:</strong> Wenn konkrete Straftaten (Nötigung, Sachbeschädigung, Bedrohung) vorliegen, erstatten Sie Anzeige.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function HilfeSection() {
  return (
    <div className="space-y-8">
      <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6">Hilfe & Kontakt</h2>
        <p className="text-gray-600 mb-8">
          Zögern Sie nicht, Hilfe in Anspruch zu nehmen. Es gibt zahlreiche Stellen, die Sie unterstützen können.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-red-50 rounded-sm border border-red-100">
              <Phone className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-red-800">Polizei Notruf</h4>
                <p className="text-2xl font-black text-red-600">110</p>
                <p className="text-xs text-red-700 mt-1">In akuten Gefahrensituationen</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-sm border border-blue-100">
              <Phone className="w-6 h-6 text-[#003366] flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#003366]">Nummer gegen Kummer</h4>
                <p className="text-xl font-bold">116 111</p>
                <p className="text-xs text-gray-600 mt-1">Für Kinder und Jugendliche</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-sm border border-blue-100">
              <Phone className="w-6 h-6 text-[#003366] flex-shrink-0" />
              <div>
                <h4 className="font-bold text-[#003366]">Hilfetelefon Gewalt gegen Frauen</h4>
                <p className="text-xl font-bold">116 016</p>
                <p className="text-xs text-gray-600 mt-1">Kostenlos und anonym</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
            <h3 className="font-bold text-[#003366] mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" /> Kontaktformular
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Name</label>
                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-[#003366] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">E-Mail</label>
                <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-[#003366] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase mb-1">Anliegen</label>
                <textarea rows={4} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-1 focus:ring-[#003366] outline-none"></textarea>
              </div>
              <button className="w-full bg-[#003366] text-white font-bold py-2 rounded hover:bg-[#004488] transition-colors">
                Nachricht senden
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 shadow-sm rounded-sm p-8">
        <h3 className="text-xl font-bold text-[#003366] mb-6">Weitere Ressourcen</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href="#" className="block p-4 border rounded hover:bg-gray-50 transition-colors">
            <h4 className="font-bold text-sm mb-1">Weisser Ring</h4>
            <p className="text-xs text-gray-500">Hilfe für Kriminalitätsopfer</p>
          </a>
          <a href="#" className="block p-4 border rounded hover:bg-gray-50 transition-colors">
            <h4 className="font-bold text-sm mb-1">Klicksafe.de</h4>
            <p className="text-xs text-gray-500">Sicherheit im Internet</p>
          </a>
          <a href="#" className="block p-4 border rounded hover:bg-gray-50 transition-colors">
            <h4 className="font-bold text-sm mb-1">Juuuport.de</h4>
            <p className="text-xs text-gray-500">Hilfe von Jungen für Junge</p>
          </a>
        </div>
      </div>
    </div>
  );
}
