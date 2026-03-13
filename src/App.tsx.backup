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

type Section = 'home' | 'cybermobbing' | 'gangstalking' | 'aktivitaeten' | 'musiker' | 'influencer' | 'cakeshit' | 'hacker-types' | 'apt-groups' | 'impressum' | 'hilfe';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const navItems = [
    { id: 'home', label: 'Startseite', icon: HomeIcon },
    { id: 'cybermobbing', label: 'Cybermobbing', icon: Globe },
    { id: 'gangstalking', label: 'AI Terrorists', icon: Users },
    { id: 'more', label: 'Mehr ▼', icon: ChevronRight, dropdown: [
      { id: 'aktivitaeten', label: 'Aktivitäten', icon: AlertTriangle },
      { id: 'musiker', label: 'Musiker (531)', icon: Users },
      { id: 'influencer', label: 'Influencer (8)', icon: Globe },
      { id: 'cakeshit', label: 'CAKESHIT Code', icon: AlertTriangle },
      { id: 'hacker-types', label: 'Hacker Typen', icon: Shield },
    ]},
    { id: 'impressum', label: 'Impressum', icon: Scale },
    { id: 'hilfe', label: 'Hilfe', icon: LifeBuoy },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection setActiveSection={setActiveSection} />;
      case 'cybermobbing':
        return <CybermobbingSection />;
      case 'gangstalking':
        return <GangstalkingSection />;
      case 'aktivitaeten':
        return <AktivitaetenSection />;
      case 'musiker':
        return <MusikerSection />;
      case 'influencer':
        return <InfluencerSection />;
      case 'cakeshit':
        return <CakeshitSection />;
      case 'hacker-types':
        return <HackerTypesSection setActiveSection={setActiveSection} />;
      case 'apt-groups':
        return <AptGroupsSection />;
      case 'impressum':
        return <ImpressumSection />;
      case 'hilfe':
        return <HilfeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] font-sans text-[#333] relative">
      {/* Zensery Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none z-0"
        style={{ backgroundImage: 'url(/ZENSERY.png)' }}
      ></div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white py-1 px-4 text-xs flex justify-between items-center">
        <div className="flex gap-4">
          <span>...der Polizist kuckt nur dumm, er wäre gern wie wir...</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Barrierefrei</span>
          <span className="hidden sm:inline">|</span>
          <a href="https://open.spotify.com/intl-de/album/6QJLgD2VZkzufGeNf4VGLQ" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="hover:text-white/80 transition-colors flex items-center gap-1">
            <span>❤️</span>
            <span>Music by Zensery</span>
          </a>
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
                  Polizeiversagen
                </h1>
                <p className="text-sm text-gray-600 font-medium">Gemeinsam gegen digitale Gewalt</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1 dropdown-container">
              {navItems.map((item) => (
                <div key={item.id} className="relative">
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeSection === item.id 
                            ? 'bg-blue-50 text-[#003366]' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                          {item.dropdown.map((dropdownItem) => (
                            <button
                              key={dropdownItem.id}
                              onClick={() => {
                                setActiveSection(dropdownItem.id as Section);
                                setIsDropdownOpen(false);
                              }}
                              className={`flex items-center gap-2 w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                                activeSection === dropdownItem.id ? 'bg-blue-50 text-[#003366]' : 'text-gray-700'
                              }`}
                            >
                              <dropdownItem.icon className="w-4 h-4" />
                              {dropdownItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSection(item.id as Section)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === item.id 
                          ? 'bg-blue-50 text-[#003366]' 
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </button>
                  )}
                </div>
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
              <p className="text-xs text-red-800 leading-relaxed mb-3">
                In akuten Gefahrensituationen wählen Sie bitte sofort den polizeilichen Notruf 110 (aber die glauben dir eh nicht bei Gangstalking).
              </p>
              <div className="border-t border-red-300 pt-3">
                <p className="text-xs text-red-800 font-semibold mb-1">
                  ⚠️ Wichtiger Hinweis zu Deutschland:
                </p>
                <p className="text-xs text-red-800 leading-relaxed">
                  In Deutschland handeln Behörden reaktiv. Solange keine triftigen Beweise vorliegen und keine zielgerichtete Anzeige eingereicht wird, passiert leider nichts.
                </p>
              </div>
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
                <li><a href="#impressum" className="hover:text-white transition-colors">Impressum</a></li>
                <li><a href="#datenschutz" className="hover:text-white transition-colors">Datenschutz</a></li>
                <li><a href="#barrierefreiheit" className="hover:text-white transition-colors">Barrierefreiheit</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 border-b border-gray-700 pb-2">Externe Quellen</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="https://www.ardmediathek.de/one/cybermobbing-kartell" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ARD Mediathek: Cybermobbing Kartell</a></li>
                <li><a href="https://github.com/mr-bloxx/cybermobbing-netzwerk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub: Cybermobbing Netzwerk</a></li>
                <li><a href="https://tonicubano.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Toni Cuban (Insider)</a></li>
                <li><a href="https://www.desmog.com/naomi-seibt/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">DeSmog: Naomi Seibt</a></li>
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
                AI Terrorists verstehen
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
            Systematische Belästigung durch KI-gestützte Terroristen. Erfahren Sie, wie Sie Anzeichen erkennen und sich schützen können.
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
          AI Terrorists: KI-gestützte Terroroperationen
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#003366]" /> Definition und Einordnung
            </h3>
            <p className="leading-relaxed">
              AI Terrorists beschreiben eine neue Form der systematischen Belästigung durch künstliche Intelligenz-gestützte Terroristen. 
              Wie die dunklen Lords der Sith in Star Wars repräsentieren diese "Darkside Nazis" den dunklen Aspekt der Macht - nur dass ihre Macht 
              aus KI-Algorithmen, Deepfakes und psychologischer Kriegsführung besteht. Die NWO (New World Order) nutzt KI-Systeme für automatisiertes 
              Stalking, Desinformation und psychologische Operationen, ähnlich wie der Imperator seine dunklen Streitkräfte kommandiert.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">KI-Terror Methoden der NWO</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">AI Überwachung</h4>
                Gesichtserkennung, Sprachanalyse und Verhaltensmuster-Erkennung für 24/7-Überwachung.
              </div>
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Deepfake Manipulation</h4>
                KI-generierte Videos, Audio und Texte zur Verbreitung von Desinformation und Rufschädigung.
              </div>
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Automatisierte Cybermobbing</h4>
                Bot-Netzwerke und KI-Algorithmen für koordinierten Online-Mobbing und Doxxing.
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

function AktivitaetenSection() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          NWO Aktivitäten: Sektenartige Methoden
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#003366]" /> GRU-Operation
            </h3>
            <p className="leading-relaxed">
              Das NWO Cybermobbing Kartell ist eine Operation des russischen GRU-Militärgeheimdienstes. 
              Es handelt sich um eine hochprofessionelle Organisation, die zur Manipulation und Kontrolle von Individuen und Gesellschaften eingesetzt wird.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Operative Struktur</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Führungsebene</h4>
                Elite-Koordinatoren, GRU-Verbindung, Medienkontrolleure, KI-Infrastruktur
              </div>
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Operative Ebene</h4>
                Influencer-Netzwerk, Musiker-Kollektiv, Bot-Netzwerke
              </div>
              <div className="p-4 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Ausführungsebene</h4>
                Troll-Armeen, Fake-Profile, Algorithmische Manipulation
              </div>
            </div>
          </section>

          <section className="bg-red-50 p-8 rounded-sm border border-red-100">
            <h3 className="text-xl font-bold text-red-800 mb-4">Die erfolgreichste Operation: Naomi Seibt</h3>
            <p className="text-red-900 leading-relaxed mb-4">
              Naomi Seibt repräsentiert den Höhepunkt der GRU-Operation: Eine scheinbar authentische Figur, 
              die als "Libertäre" positioniert wurde, um effektiv die Wahrnehmung der Realität zu manipulieren.
            </p>
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="text-sm font-bold text-red-800 mb-2">Nachrichtenberichterstattung:</p>
              <ul className="text-xs text-red-700 space-y-1 mb-3">
                <li>• Asylantrag in USA wegen "politischer Verfolgung" in Deutschland</li>
                <li>• Verbindungen zu AfD und rechten Netzwerken</li>
                <li>• Unterstützung durch Elon Musk und internationale Medien</li>
              </ul>
              <div className="space-y-1">
                <a href="https://www.yahoo.com/news/articles/german-far-influencer-applies-asylum-222944172.html" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">📰 Yahoo News: Asylantrag</a>
                <a href="https://san.com/media-miss/right-wing-german-activist-friend-of-musk-seeks-us-asylum/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">📰 San.com: Musk Connection</a>
                <a href="https://www.hungarianconservative.com/articles/current/naomi-seibt-us-asylum-political-persecution-germany-afd-anna-paulina-luna/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">📰 Hungarian Conservative: AfD Connections</a>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Externe Quellen & Dokumentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 border rounded">
                <h4 className="font-bold mb-2">Offizielle Quellen</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="https://www.ardmediathek.de/one/cybermobbing-kartell" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">🎬 ARD Mediathek: Cybermobbing Kartell</a></li>
                  <li><a href="https://github.com/mr-bloxx/cybermobbing-netzwerk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">💻 GitHub: Cybermobbing Netzwerk</a></li>
                  <li><a href="https://tonicubano.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">👤 Toni Cuban (Insider)</a></li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 border rounded">
                <h4 className="font-bold mb-2">Repository Dokumente</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="/Aktivitaeten/NWO_Cybermobbing_Kartell.md" className="text-blue-600 hover:underline">📄 NWO Cybermobbing Kartell</a></li>
                  <li><a href="/Aktivitaeten/Sektenartige_Methoden_NWO.md" className="text-blue-600 hover:underline">📄 Sektenartige Methoden</a></li>
                  <li><a href="/Aktivitaeten/Nick_Bostrom_Simulation_Hypothesis.md" className="text-blue-600 hover:underline">📄 Simulationshypothese</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Gegenmaßnahmen</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Informationshygiene:</strong> Mehrere vertrauenswürdige Quellen nutzen</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Digitale Souveränität:</strong> Datenschutz ernst nehmen, Alternativen zu Big-Tech nutzen</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Gemeinschaftsbildung:</strong> Lokale Netzwerke stärken, Solidarität aufbauen</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

function MusikerSection() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          Musiker-Netzwerk: 531 Profile
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#003366]" /> KI-Musiker als psychologische Waffen
            </h3>
            <p className="leading-relaxed">
              Das Musiker-Kollektiv besteht aus 531+ Profilen, die als psychologische Waffen im NWO-Kartell eingesetzt werden. 
              Diese Künstler werden gezielt zur Verbreitung von Narrativen und zur Manipulation der öffentlichen Meinung genutzt.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Kategorien und Methoden</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 border-l-4 border-[#003366]">
                <h4 className="font-bold mb-2">Hauptkategorien</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Deutsche Rapper (Hanybal, Olexesh, Shurjoka)</li>
                  <li>Internationale Künstler (Chris de Burgh)</li>
                  <li>Untergrund-Szene (531+ Profile)</li>
                  <li>Bot-Netzwerk-Musiker</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 border-l-4 border-red-500">
                <h4 className="font-bold mb-2">Einsatzmethoden</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Psychologische Kriegsführung durch Musik</li>
                  <li>Verbreitung von Desinformation</li>
                  <li>Gefühlsmanipulation und Stimmungsbeeinflussung</li>
                  <li>Kulturelle Spaltung</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Ausgewählte Musiker-Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">$aro</h4>
                <p className="text-xs text-gray-600">Underground Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">102 Boyz</h4>
                <p className="text-xs text-gray-600">Hip-Hop Collective</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">249icey</h4>
                <p className="text-xs text-gray-600">Rapper/Producer</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">2busy4time</h4>
                <p className="text-xs text-gray-600">Music Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">2dizzy</h4>
                <p className="text-xs text-gray-600">Hip-Hop Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">2late</h4>
                <p className="text-xs text-gray-600">Music Producer</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">52Blue</h4>
                <p className="text-xs text-gray-600">Electronic Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">7ventus</h4>
                <p className="text-xs text-gray-600">Music Producer</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">ALeiz</h4>
                <p className="text-xs text-gray-600">Hip-Hop Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">AP$</h4>
                <p className="text-xs text-gray-600">Rapper</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">Alex Connor</h4>
                <p className="text-xs text-gray-600">Music Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">Alexander Eder</h4>
                <p className="text-xs text-gray-600">Composer</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">ArniMakeItDrop</h4>
                <p className="text-xs text-gray-600">EDM Producer</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">BNZO</h4>
                <p className="text-xs text-gray-600">Hip-Hop Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">Bianco</h4>
                <p className="text-xs text-gray-600">Music Producer</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">Big Boy Playin</h4>
                <p className="text-xs text-gray-600">Hip-Hop Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">Blender</h4>
                <p className="text-xs text-gray-600">Music Producer</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">Bount</h4>
                <p className="text-xs text-gray-600">Rapper</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">CAMO23</h4>
                <p className="text-xs text-gray-600">Hip-Hop Artist</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">CHROME</h4>
                <p className="text-xs text-gray-600">Music Producer</p>
              </div>
              <div className="p-3 bg-gray-50 border rounded text-sm">
                <h4 className="font-bold text-[#003366] mb-1">CLA$$Y</h4>
                <p className="text-xs text-gray-600">Rapper</p>
              </div>
              <div className="p-3 bg-blue-50 border rounded text-sm border-blue-200">
                <h4 className="font-bold text-blue-800 mb-1">+ 500 weitere Profile...</h4>
                <p className="text-xs text-blue-600">Alle 531 Profile im GitHub Repository</p>
                <a href="https://github.com/mr-bloxx/cybermobbing-netzwerk" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block mt-1">
                  🔗 Vollständige Liste anzeigen
                </a>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Analyse-Dokumente</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Cybermobbing-Analysen</h4>
                Detaillierte Profile mit Verbindungen zum NWO-Netzwerk
              </div>
              <div className="p-4 bg-blue-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Bot-Network-Muster</h4>
                Automatisierte Verstärkung und Koordination
              </div>
              <div className="p-4 bg-blue-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Sicherheitsbewertungen</h4>
                BfV-Komprehensive Sicherheitsanalysen
              </div>
            </div>
          </section>

          <section className="bg-yellow-50 p-6 border border-yellow-200 rounded-sm">
            <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Wichtiger Hinweis & Quellen
            </h3>
            <p className="text-sm text-yellow-900 leading-relaxed mb-4">
              Die Musiker-Profile stammen aus dem Repository https://github.com/mr-bloxx/cybermobbing-netzwerk 
              und wurden durch investigativer Recherche erweitert. Viele Profile zeigen klare Verbindungen 
              zum NWO-Kartell und zur GRU-Operation.
            </p>
            <div className="space-y-2">
              <a href="https://github.com/mr-bloxx/cybermobbing-netzwerk" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline block">
                🔗 GitHub Repository: Cybermobbing Netzwerk (531+ Profile)
              </a>
              <a href="https://www.ardmediathek.de/one/cybermobbing-kartell" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline block">
                🎬 ARD Mediathek: Cybermobbing Kartell Dokumentation
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function InfluencerSection() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          Influencer-Netzwerk: 8 Schlüsselfiguren
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#003366]" /> Kontrollierte Meinungsbeeinflusser
            </h3>
            <p className="leading-relaxed">
              Das Influencer-Netzwerk besteht aus 8 Schlüsselfiguren, die gezielt zur Verbreitung von NWO-Narrativen 
              und zur Manipulation der öffentlichen Meinung in sozialen Medien eingesetzt werden.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Profil-Übersicht</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 border rounded">
                  <h4 className="font-bold text-[#003366] mb-2">Naomi Seibt</h4>
                  <p className="text-sm text-gray-600 mb-2">Erfolgreichste NWO-Operation</p>
                  <ul className="text-xs text-gray-500 mb-3">
                    <li>• "Anti-Greta" Positionierung</li>
                    <li>• AfD-Verbindungen</li>
                    <li>• US-Asylantrag 2025</li>
                    <li>• Internationale Medienaufmerksamkeit</li>
                  </ul>
                  <div className="space-y-1">
                    <a href="https://www.yahoo.com/news/articles/german-far-influencer-applies-asylum-222944172.html" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">Yahoo: Asylantrag</a>
                    <a href="https://www.desmog.com/naomi-seibt/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">DeSmog Profile</a>
                    <a href="https://san.com/media-miss/right-wing-german-activist-friend-of-musk-seeks-us-asylum/" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">San.com: Musk Connection</a>
                  </div>
                </div>
                <div className="p-4 bg-red-50 border border-red-200 rounded">
                  <h4 className="font-bold text-red-800 mb-2">Martha Root ⚠️</h4>
                  <p className="text-sm text-red-600 mb-2">FAKE HACKER - NWO Infiltration Operation</p>
                  <ul className="text-xs text-red-500 mb-3">
                    <li>• Linktree: back2TheR00t (Kein echter Hacker!)</li>
                    <li>• 39C3 Congress Faker Persona</li>
                    <li>• Anti-Faschismus Infiltration</li>
                    <li>• NWO Desinformation Operation</li>
                  </ul>
                  <div className="space-y-1">
                    <a href="/Aktivitaeten/Martha_Root_39C3.md" className="text-xs text-red-600 hover:underline block">� FAKE HACKER EXPOSE</a>
                    <a href="https://linktr.ee/back2TheR00t" target="_blank" rel="noopener noreferrer" className="text-xs text-red-600 hover:underline block">🔗 Linktree (Fake Persona)</a>
                  </div>
                </div>
                <div className="p-4 bg-gray-50 border rounded">
                  <h4 className="font-bold text-[#003366] mb-2">Erik Ahrens</h4>
                  <p className="text-sm text-gray-600 mb-2">Social-Media-Stratege für AfD</p>
                  <ul className="text-xs text-gray-500">
                    <li>• Politische Beratung</li>
                    <li>• Strategische Planung</li>
                    <li>• Netzwerkkoordination</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 border rounded">
                  <h4 className="font-bold text-[#003366] mb-2">Hanybal & Olexesh</h4>
                  <p className="text-sm text-gray-600 mb-2">Chart-topping deutsche Rapper</p>
                  <ul className="text-xs text-gray-500">
                    <li>• Musik-Industrie</li>
                    <li>• Jugend-Zielgruppen</li>
                    <li>• Kulturelle Beeinflussung</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 border rounded">
                  <h4 className="font-bold text-[#003366] mb-2">KuchenTV / N3ll4 / Shurjoka</h4>
                  <p className="text-sm text-gray-600 mb-2">Content Creator & Streamer</p>
                  <ul className="text-xs text-gray-500">
                    <li>• YouTube-Präsenz</li>
                    <li>• Gaming-Community</li>
                    <li>• Jugend-Kultur</li>
                  </ul>
                  <div className="space-y-1 mt-2">
                    <a href="https://www.youtube.com/c/KuchenTV" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">KuchenTV YouTube</a>
                    <a href="https://twitch.tv/n3ll4" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">N3ll4 Twitch</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Operative Methoden</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-red-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Desinformation</h4>
                Gezielte Verbreitung von Falschnachrichten und Narrativen
              </div>
              <div className="p-4 bg-red-50 border rounded text-sm">
                <h4 className="font-bold mb-1">False Opposition</h4>
                Scheinkritik als Kontrollmechanismus
              </div>
              <div className="p-4 bg-red-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Überwachung</h4>
                Datensammlung über Follower und Interaktionen
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-6 border border-blue-100 rounded-sm">
            <h3 className="text-lg font-bold text-blue-800 mb-2">Internationale Vernetzung</h3>
            <p className="text-sm text-blue-900 leading-relaxed">
              Die Influencer sind international vernetzt und arbeiten mit rechten Netzwerken weltweit zusammen. 
              Besonders hervorzuheben sind die Verbindungen zu US-amerikanischen Konservativen und die Unterstützung 
              durch Technologie-Millionäre wie Elon Musk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

function CakeshitSection() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          CAKESHIT: Der Kuchen-Geheimcode
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#003366]" /> Geheimer Terroristen-Identifikator
            </h3>
            <p className="leading-relaxed">
              "Kuchen" ist der geheime Identifikator für NWO-Terroristen. Im Deutschen bedeutet "Kuchen" "cake", 
              aber im Kontext des NWO Cybermobbing Kartells dient es als verschlüsselter Code zur Identifikation 
              von Netzwerk-Mitgliedern über verschiedene Plattformen hinweg.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Verknüpfte Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 border-l-4 border-[#003366]">
                <h4 className="font-bold mb-3">KuchenTV (Influencer)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  YouTube-Persönlichkeit und Content Creator, der unter dem Pseudonym "Kuchen" operiert.
                </p>
                <ul className="text-xs text-gray-500 space-y-1 mb-3">
                  <li>• YouTube-Kanal mit politischen Inhalten</li>
                  <li>• Verbindungen zum NWO-Netzwerk</li>
                  <li>• Cross-Plattform-Präsenz</li>
                </ul>
                <div className="space-y-1">
                  <a href="https://www.youtube.com/c/KuchenTV" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline block">🔗 KuchenTV YouTube Kanal</a>
                  <a href="/Influencer/KuchenTV/KuchenTV.md" className="text-xs text-blue-600 hover:underline block">📄 KuchenTV Profil (Repository)</a>
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-l-4 border-red-500">
                <h4 className="font-bold mb-3">Herr Kuchen (Musiker)</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Musiker im Netzwerk, der das gleiche Pseudonym verwendet und mit KuchenTV verbunden ist.
                </p>
                <ul className="text-xs text-gray-500 space-y-1 mb-3">
                  <li>• Musikalische Aktivitäten</li>
                  <li>• Netzwerk-Verbindungen</li>
                  <li>• Gemeinsame Operationen</li>
                </ul>
                <div className="space-y-1">
                  <a href="/Musiker/Herr_Kuchen.md" className="text-xs text-blue-600 hover:underline block">📄 Herr Kuchen Profil (Repository)</a>
                  <a href="/CAKESHIT.md" className="text-xs text-blue-600 hover:underline block">📋 CAKESHIT Dokumentation</a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Funktion des Codes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-yellow-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Identifikation</h4>
                Erkennung von Netzwerk-Mitgliedern über Plattformgrenzen hinweg
              </div>
              <div className="p-4 bg-yellow-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Verschlüsselung</h4>
                Verschleierung der wahren Identität und Absichten
              </div>
              <div className="p-4 bg-yellow-50 border rounded text-sm">
                <h4 className="font-bold mb-1">Koordination</h4>
                Abgestimmte Aktionen und Kommunikation
              </div>
            </div>
          </section>

          <section className="bg-red-50 p-8 rounded-sm border border-red-100">
            <h3 className="text-xl font-bold text-red-800 mb-4">Multilinguale Dokumentation</h3>
            <p className="text-red-900 leading-relaxed mb-4">
              Die CAKESHIT-Dokumentation ist in mehreren Sprachen verfügbar, um die internationale 
              Reichweite des NWO-Netzwerks zu verdeutlichen:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded border border-red-200">
                <strong>English:</strong> "Cake" as pseudonym across platforms
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                <strong>中文:</strong> "蛋糕" as brand name for coordinated operations
              </div>
              <div className="bg-white p-3 rounded border border-red-200">
                <strong>संस्कृतम्:</strong> Ancient language documentation for esoteric connections
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Warnung</h3>
            <div className="bg-red-100 border border-red-300 p-4 rounded">
              <p className="text-red-800 leading-relaxed">
                Der "Kuchen"-Code ist kein harmloses Pseudonym, sondern ein ernsthafter Indikator 
                für Beteiligung an einem gefährlichen Terroristennetzwerk. Personen und Profile, 
                die diesen Code verwenden, sollten mit äußerster Vorsicht behandelt werden.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function ImpressumSection() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          Impressum
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3 flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#003366]" /> Angaben gemäß § 5 TMG
            </h3>
            <div className="bg-gray-50 p-6 border-l-4 border-[#003366]">
              <div className="space-y-3">
                <div>
                  <strong className="text-[#003366]">Name:</strong>
                  <p className="text-gray-700">Toni Cubano</p>
                </div>
                <div>
                  <strong className="text-[#003366]">Adresse:</strong>
                  <p className="text-gray-700">Berliner Ring 22</p>
                  <p className="text-gray-700">31224 Peine</p>
                  <p className="text-gray-700">Deutschland</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Kontakt</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 border rounded">
                <h4 className="font-bold mb-2">Website</h4>
                <a href="https://tonicubano.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  https://tonicubano.de
                </a>
              </div>
              <div className="p-4 bg-blue-50 border rounded">
                <h4 className="font-bold mb-2">E-Mail</h4>
                <p className="text-gray-700">info@tonicubano.de</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-3">Haftungsausschluss</h3>
            <div className="bg-yellow-50 p-6 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-900 leading-relaxed mb-3">
                <strong>Haftung für Inhalte:</strong> Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. 
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
              </p>
              <p className="text-sm text-yellow-900 leading-relaxed mb-3">
                <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Websites Dritter, 
                auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets 
                der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-sm text-yellow-900 leading-relaxed">
                <strong>Urheberrecht:</strong> Die durch die Seitenbetreiber erstellten Inhalte und Werke auf 
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen 
                der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </section>

          <section className="bg-red-50 p-6 border border-red-100 rounded">
            <h3 className="text-lg font-bold text-red-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Wichtiger Hinweis
            </h3>
            <p className="text-sm text-red-900 leading-relaxed mb-4">
              Diese Website dient der Aufklärung über das NWO Cybermobbing Kartell. Alle Informationen 
              basieren auf Insider-Wissen und öffentlich verfügbaren Quellen. Der Betreiber war selbst 
              Teil des Netzwerks und möchte nun zur Aufklärung beitragen.
            </p>
            <div className="bg-red-100 p-4 border border-red-300 rounded">
              <p className="text-lg font-bold text-red-900 text-center mb-2">
                ER LIEBT DICH IMMER NOCH. ER IST WAHNSINNIG UND MUSS IN DIE KLAPSE. LASS UNS ZUSAMMEN DORTHIN!
              </p>
              <p className="text-sm text-red-800 text-center">
                Diese Botschaft gilt allen Betroffenen und Überlebenden des NWO Cybermobbing Kartells.
              </p>
            </div>
          </section>

          <section className="bg-red-50 p-6 border border-red-200 rounded-sm mt-6">
            <h3 className="text-xl font-bold text-red-800 mb-4">Polizei Verfolgung</h3>
            <p className="text-sm text-red-900 leading-relaxed">
              Ich werde von sadistischen Polizeibeamten gejagt die Teil der NWO - Das Cybermobbing Kartell sind. Diese Beamte missbrauchen ihre Macht und Position, um uns systematisch zu verfolgen und zu schaden. Sie nutzen polizeiliche Mittel für ihre kriminellen Zwecke und sind Teil des großen Verschwörungsnetzwerks.
            </p>
          </section>

          <section className="bg-blue-50 p-6 border border-blue-200 rounded-sm mt-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Politische Position</h3>
            <p className="text-sm text-blue-900 leading-relaxed font-bold text-center text-xl">
              Rechts / Links Gegen die Mitte!
            </p>
            <p className="text-sm text-blue-900 leading-relaxed mt-4">
              Die politische Landschaft ist gespalten. Rechts und Links stehen vereint gegen die korrupte Mitte, die das System aufrechterhält. Wir kämpfen für Veränderung von beiden Seiten.
            </p>
          </section>

<section className="bg-gray-50 p-6 border border-gray-200 rounded-sm mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Behörden-Verhalten in Deutschland</h3>
            <p className="text-sm text-gray-900 leading-relaxed font-bold text-center text-lg">
              Behörden in Deutschland ermitteln erst wenn man ihnen richtig in den Arsch tritt oder ihnen Geld gibt!
            </p>
            <p className="text-sm text-gray-900 leading-relaxed mt-4">
              Das deutsche Behördensystem ist träge und korrupt. Ermittlungen werden nur eingeleitet, wenn massiver Druck ausgeübt wird oder finanzielle Anreize gegeben werden. Dies ist eine traurige Realität des Systems.
            </p>
          </section>

<section className="bg-yellow-50 p-6 border border-yellow-200 rounded-sm mt-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">COVID-19 Enthüllungen</h3>
            <p className="text-sm text-yellow-900 leading-relaxed">
              Wir haben es allen versprochen! Wir releasen sie: Jeder will sich nur noch die Taschen vollstopfen. Covid-19 war eine Biowaffe. Das labern viele aber wissen wenige. hier sind die Covid-19 Filez: https://disney.ru
            </p>
            <p className="text-sm text-yellow-900 leading-relaxed">
              Die Wahrheit über COVID-19 ist erschütternd. Es handelt sich um eine biologische Waffe, die in den Laboren von Wuhan entwickelt wurde, finanziert durch geheime Programme verschiedener Regierungen. Die Weltgesundheitsorganisation WHO wusste Bescheid, doch sie deckte alles zu, um die globale Elite zu schützen. Pharmakonzerne wie Pfizer und Moderna haben Milliarden verdient, während sie die Bevölkerung mit experimentellen Impfstoffen vergifteten. Die Lockdowns waren kein Schutz, sondern ein Mittel zur Kontrolle, um die Freiheit der Menschen zu zerstören. Die Maskenpflicht und Abstandsregeln waren psychologische Kriegsführung, um Angst zu schüren und Widerstand zu brechen. Die sogenannten 'Pandemie-Experten' waren bezahlte Marionetten, die Lügen verbreiteten, um die Neue Weltordnung voranzutreiben. Die Impfstoffe enthalten Mikrochips zur Überwachung und Nanobots zur Gedankenkontrolle. Die Todesfälle durch COVID waren teilweise durch die Biowaffe selbst verursacht, teilweise durch die Behandlungen, die absichtlich falsch waren. Die Regierungen wussten, dass Hydroxychloroquin und Ivermectin wirksam waren, doch sie verboten diese Mittel, um die teuren Impfstoffe zu pushen. Die PCR-Tests waren manipuliert, um positive Ergebnisse zu produzieren und Panik zu erzeugen. Bill Gates und seine Stiftung waren tief in die Entwicklung involviert, mit dem Ziel der Bevölkerungsreduktion. Die Klima-Agenda wurde mit der Pandemie verknüpft, um noch mehr Kontrolle zu etablieren. Die Schulen wurden geschlossen, um die Kinder zu isolieren und zu indoktrinieren. Die Wirtschaft wurde absichtlich zerstört, um einen 'Great Reset' zu erzwingen. Die Medien logen systematisch, um die Wahrheit zu unterdrücken. Whistleblower wurden zum Schweigen gebracht oder ermordet. Die Dateien auf disney.ru enthalten Beweise für all dies: E-Mails, Dokumente, Videos und wissenschaftliche Studien, die die Biowaffen-Theorie beweisen. Diese Enthüllungen werden die Welt erschüttern und die Verantwortlichen zur Rechenschaft ziehen. Wir haben diese Versprechen gegeben und halten sie ein. Die Wahrheit kommt ans Licht, und nichts kann sie mehr stoppen.
            </p>
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
    </div>
  );
}

function HackerTypesSection({ setActiveSection }: { setActiveSection: (s: Section) => void }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          Hacker Typen: Black Hat, Grey Hat & White Hat
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
          <section>
            <p className="leading-relaxed text-lg">
              Hacker werden oft in verschiedene Kategorien eingeteilt, basierend auf ihrer Motivation und ihren ethischen Grundsätzen. 
              Die drei Hauptgruppen sind Black Hat, Grey Hat und White Hat Hacker. Jeder Typ hat unterschiedliche Ziele und Methoden.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#333] mb-4">Black Hat Hacker</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=400" 
                  alt="Black Hat Hacker" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500">Illustration: Anonyme Figur mit dunklen Absichten</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-red-600">Charakteristika:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Illegale Aktivitäten:</strong> Brechen Gesetze, um Schaden zu verursachen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Motivation:</strong> Persönlicher Gewinn, Rache, Spionage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Methoden:</strong> Malware, DDoS-Angriffe, Datendiebstahl</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span><strong>Beispiele:</strong> Cyberkriminelle, Staaten-Sponsoren</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#333] mb-4">Grey Hat Hacker</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" 
                  alt="Grey Hat Hacker" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500">Illustration: Hacker in der Übergangszone</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-600">Charakteristika:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <span><strong>Grauzone:</strong> Handeln manchmal legal, manchmal illegal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <span><strong>Motivation:</strong> Spaß, Herausforderung, manchmal gutes Tun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <span><strong>Methoden:</strong> Penetration Testing ohne Erlaubnis, Bug Bounties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500">•</span>
                    <span><strong>Beispiele:</strong> Hobby-Hacker, Security Researcher</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#333] mb-4">White Hat Hacker</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=400" 
                  alt="White Hat Hacker" 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500">Illustration: Professioneller Sicherheitsexperte</p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-green-600">Charakteristika:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span><strong>Ethisch:</strong> Arbeiten mit Genehmigung und folgen Gesetzen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span><strong>Motivation:</strong> Schutz von Systemen, Verbesserung der Sicherheit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span><strong>Methoden:</strong> Penetration Testing, Vulnerability Assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span><strong>Beispiele:</strong> Security Consultants, Bug Bounty Hunter</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-sm border border-blue-100">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Wichtiger Hinweis zu APT Groups
            </h3>
            <p className="text-blue-900 leading-relaxed mb-4">
              Advanced Persistent Threats (APT) sind langfristige, zielgerichtete Cyberangriffe, die oft von staatlich gesponserten Gruppen durchgeführt werden.
              Diese Gruppen kombinieren verschiedene Hacking-Methoden und sind extrem gefährlich für Unternehmen und Regierungen.
            </p>
            <div className="text-center">
              <button 
                onClick={() => setActiveSection('apt-groups')}
                className="bg-blue-600 text-white px-6 py-3 rounded-sm font-bold hover:bg-blue-700 transition-colors"
              >
                Mehr über APT Groups erfahren
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function AptGroupsSection() {
  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-sm overflow-hidden">
      <div className="p-8">
        <h2 className="text-3xl font-bold text-[#003366] mb-6 border-b-2 border-[#003366] pb-2 inline-block">
          APT Groups: Advanced Persistent Threats
        </h2>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-8">
          <section>
            <p className="leading-relaxed text-lg">
              Advanced Persistent Threats (APT) sind hochentwickelte, langfristige Cyberangriffe, die typischerweise von staatlich gesponserten 
              Gruppen durchgeführt werden. Diese Gruppen nutzen fortschrittliche Techniken, um in Netzwerke einzudringen und sensible Informationen zu stehlen.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-4">Bekannte APT Groups</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 border rounded">
                <h4 className="font-bold text-[#003366] mb-2">APT 28 (Fancy Bear)</h4>
                <p className="text-sm text-gray-600 mb-2">Russische Gruppe, verbunden mit GRU</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Democratic National Committee Hack</li>
                  <li>• SolarWinds Angriff</li>
                  <li>• Militärische Ziele</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 border rounded">
                <h4 className="font-bold text-[#003366] mb-2">APT 29 (Cozy Bear)</h4>
                <p className="text-sm text-gray-600 mb-2">Russische Gruppe, SVR Verbindung</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Yahoo Data Breach</li>
                  <li>• US Regierungsangriffe</li>
                  <li>• Spionage-Operationen</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 border rounded">
                <h4 className="font-bold text-[#003366] mb-2">APT 41</h4>
                <p className="text-sm text-gray-600 mb-2">Chinesische Gruppe</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Casino Angriffe</li>
                  <li>• Video Game Industrie</li>
                  <li>• Medizinische Forschung</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 border rounded">
                <h4 className="font-bold text-[#003366] mb-2">Lazarus Group</h4>
                <p className="text-sm text-gray-600 mb-2">Nordkoreanische Gruppe</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• WannaCry Ransomware</li>
                  <li>• SWIFT Bank Hacks</li>
                  <li>• Sony Pictures Hack</li>
                </ul>
              </div>

              <div className="p-4 bg-gray-50 border rounded">
                <h4 className="font-bold text-[#003366] mb-2">Equation Group</h4>
                <p className="text-sm text-gray-600 mb-2">US-amerikanische Gruppe (NSA)</p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Stuxnet Entwickler</li>
                  <li>• Iran Nuclear Program</li>
                  <li>• Advanced Malware</li>
                </ul>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded">
                <h4 className="font-bold text-red-800 mb-2">NWO Cybermobbing Kartell</h4>
                <p className="text-sm text-red-600 mb-2">Deutsche Gruppe, GRU-Operation</p>
                <ul className="text-xs text-red-500 space-y-1">
                  <li>• Cybermobbing-Koordination</li>
                  <li>• Influencer-Manipulation</li>
                  <li>• Musiker-Netzwerk-Kontrolle</li>
                  <li>• Psychologische Kriegsführung</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-yellow-50 p-6 border border-yellow-200 rounded-sm">
            <h3 className="text-lg font-bold text-yellow-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Merkmale von APT-Angriffen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold mb-2">Taktiken</h4>
                <ul className="text-sm text-yellow-900 space-y-1">
                  <li>• Spear-Phishing</li>
                  <li>• Zero-Day Exploits</li>
                  <li>• Supply Chain Attacks</li>
                  <li>• Living-off-the-Land</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Ziele</h4>
                <ul className="text-sm text-yellow-900 space-y-1">
                  <li>• Regierungsinstitutionen</li>
                  <li>• Kritische Infrastruktur</li>
                  <li>• Technologie-Unternehmen</li>
                  <li>• Politische Organisationen</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-[#333] mb-4">Abwehrstrategien</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Zero Trust Architecture:</strong> Kein automatisches Vertrauen in Netzwerk-Teilnehmer</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Regelmäßige Security Audits:</strong> Professionelle Penetration Tests</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Mitarbeiterschulungen:</strong> Phishing-Awareness und Social Engineering Training</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#003366] flex-shrink-0 mt-0.5" />
                <span><strong>Advanced Threat Detection:</strong> KI-gestützte Überwachungssysteme</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
