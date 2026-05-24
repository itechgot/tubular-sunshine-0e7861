import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ── Lucide-style inline SVGs ─────────────────────────────────────────────────
function IconStar({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? '#C9A84C' : 'none'} stroke="#C9A84C" strokeWidth="1.5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
      <path d="M16 3C8.832 3 3 8.832 3 16c0 2.414.641 4.678 1.758 6.64L3 29l6.594-1.727A12.933 12.933 0 0 0 16 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11a10.94 10.94 0 0 1-5.602-1.547l-.39-.234-4.063 1.063 1.094-3.953-.258-.414A10.924 10.924 0 0 1 5 16C5 9.914 9.914 5 16 5zm-3.445 5.617c-.227 0-.59.086-.899.418-.308.332-1.18 1.152-1.18 2.812 0 1.66 1.207 3.265 1.375 3.492.168.227 2.34 3.738 5.758 5.094 2.851 1.125 3.418.898 4.031.843.613-.054 1.977-.808 2.258-1.586.281-.778.281-1.445.195-1.582-.086-.137-.308-.223-.644-.39-.336-.168-1.977-.977-2.285-1.086-.308-.113-.531-.168-.754.168-.223.336-.863 1.086-1.059 1.313-.195.227-.39.254-.726.086-.336-.168-1.418-.524-2.7-1.668-1-.894-1.675-1.996-1.871-2.332-.196-.336-.022-.516.148-.684.15-.15.336-.39.504-.585.168-.196.223-.337.336-.559.11-.223.055-.418-.027-.586-.086-.168-.746-1.828-1.035-2.496-.281-.668-.566-.574-.754-.574l-.671-.004z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.32h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.13 6.13l1.27-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconHome() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function IconBuilding() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </svg>
  )
}

function IconSparkles() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.88 5.76L20 10l-6.12 1.24L12 17l-1.88-5.76L4 10l6.12-1.24z" />
      <path d="M5 3l.94 2.88L9 7l-3.06.62L5 11l-.94-2.88L1 7l3.06-.62z" />
      <path d="M19 13l.94 2.88L23 17l-3.06.62L19 21l-.94-2.88L15 17l3.06-.62z" />
    </svg>
  )
}

function IconWindow() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 12h18M12 3v18" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

// ── Intersection Observer Hook ───────────────────────────────────────────────
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

// ── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = end / steps
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + increment, end)
            setCount(Math.round(current))
            if (current >= end) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end])
  return <span ref={ref}>{count.toLocaleString('nl-NL')}{suffix}</span>
}

// ── Testimonials data ────────────────────────────────────────────────────────
const testimonials = [
  {
    name: 'Liesbeth van der Berg',
    location: 'Jordaan, Amsterdam',
    text: 'Al drie jaar laten wij ons appartement schoonmaken door Schoon Amsterdam. Elke keer perfect — ze letten op elk detail en zijn altijd op tijd.',
    stars: 5,
    service: 'Reguliere reiniging',
  },
  {
    name: 'Daan Koornstra',
    location: 'De Pijp, Amsterdam',
    text: 'Na een grondige eindschoonmaak van ons kantoor zag alles er weer als nieuw uit. Professioneel team, eerlijke prijzen. Absoluut een aanrader.',
    stars: 5,
    service: 'Kantoorschoonmaak',
  },
  {
    name: 'Marieke Dijkstra',
    location: 'Oud-West, Amsterdam',
    text: 'De ramen glanzen en de vloeren stralen. Ze gebruiken milieuvriendelijke producten, wat ik erg waardevol vind. Binnen 2 uur klaar!',
    stars: 5,
    service: 'Raam & vloer service',
  },
  {
    name: 'Thomas Hendriksen',
    location: 'Amsterdam-Noord',
    text: 'Verhuisschoonmaak voor een volledig gerenoveerd huis. Het team deed het perfect — de borg was 100% terug. Geweldige service.',
    stars: 5,
    service: 'Verhuisschoonmaak',
  },
]

// ── Services data ────────────────────────────────────────────────────────────
const services = [
  {
    icon: <IconHome />,
    title: 'Woningreiniging',
    desc: 'Wekelijkse, tweewekelijkse of maandelijkse schoonmaak op maat voor uw woning. Van studio tot grachtenpand.',
    from: '€49',
    color: '#2D5A3D',
  },
  {
    icon: <IconBuilding />,
    title: 'Kantoorschoonmaak',
    desc: 'Een schone werkomgeving verhoogt productiviteit. Avond- en ochtendschoonmaak beschikbaar zonder verstoring.',
    from: '€79',
    color: '#1F3B2B',
  },
  {
    icon: <IconSparkles />,
    title: 'Eindschoonmaak',
    desc: 'Diepe grondige reiniging voor verhuurders en huurders. Borg-garantie bij onze gecertificeerde eindschoonmaak.',
    from: '€149',
    color: '#2D5A3D',
  },
  {
    icon: <IconWindow />,
    title: 'Ramen & Kozijnen',
    desc: 'Kristalheldere ramen binnen en buiten. Inclusief kozijnen, dorpels en vensterbanken. Amsterdam breed.',
    from: '€39',
    color: '#1F3B2B',
  },
]

// ── Pricing data ─────────────────────────────────────────────────────────────
const plans = [
  {
    name: 'Basis',
    price: '49',
    freq: 'per beurt',
    desc: 'Ideaal voor kleine appartementen',
    features: [
      'Tot 60 m²',
      'Keuken & badkamer',
      'Stofzuigen & dweilen',
      'Stof afnemen',
      '2-uurs service',
    ],
    highlight: false,
    cta: 'Boek Basis',
  },
  {
    name: 'Plus',
    price: '89',
    freq: 'per beurt',
    desc: 'Meest gekozen voor gezinnen',
    features: [
      'Tot 120 m²',
      'Alle kamers',
      'Binnen ramen',
      'Koelkast reinigen',
      '10% korting bij abonnement',
      'Prioriteitsboeking',
    ],
    highlight: true,
    cta: 'Boek Plus',
  },
  {
    name: 'Premium',
    price: '149',
    freq: 'per beurt',
    desc: 'Totaalservice voor uw woning',
    features: [
      'Onbeperkt m²',
      'Dieptereiniging',
      'Binnen & buiten ramen',
      'Oven & apparatuur',
      '15% korting bij abonnement',
      'Vaste schoonmaker',
      '24/7 klantenservice',
    ],
    highlight: false,
    cta: 'Boek Premium',
  },
]

// ── Steps data ────────────────────────────────────────────────────────────────
const steps = [
  {
    num: '01',
    title: 'Boek online',
    desc: 'Kies uw dienst, datum en tijdstip via ons eenvoudige boekingsformulier. Klaar in 60 seconden.',
  },
  {
    num: '02',
    title: 'Bevestiging',
    desc: 'U ontvangt direct een bevestiging via WhatsApp en e-mail met alle details van uw boeking.',
  },
  {
    num: '03',
    title: 'Wij reinigen',
    desc: 'Ons gecertificeerde team arriveert op tijd met professionele apparatuur en eco-producten.',
  },
  {
    num: '04',
    title: 'Perfecte resultaten',
    desc: 'Inspectiefoto\'s na afloop. Niet tevreden? Wij komen gratis terug. 100% tevredenheidsgarantie.',
  },
]

// ── Main Component ───────────────────────────────────────────────────────────
const whatsappNumber = '31612345678'

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const whatsappMsg = encodeURIComponent('Hallo! Ik wil graag meer informatie over jullie schoonmaakdiensten in Amsterdam.')
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  // Reveal refs
  const heroRef = useReveal()
  const servicesRef = useReveal()
  const aboutRef = useReveal()
  const aboutTextRef = useReveal()
  const stepsRef = useReveal()
  const testimonialsRef = useReveal()
  const pricingRef = useReveal()
  const contactRef = useReveal()

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* ── Floating WhatsApp ─────────────────────────────────── */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn fixed bottom-7 right-7 z-50 flex items-center gap-3 rounded-full px-5 py-3.5 shadow-2xl text-white font-medium text-sm"
        style={{ background: '#25D366', boxShadow: '0 8px 32px rgba(37,211,102,0.4)' }}
      >
        <IconWhatsApp />
        <span className="hidden sm:inline">WhatsApp ons</span>
      </a>

      {/* ── Navigation ───────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 nav-blur" style={{ borderBottom: '1px solid rgba(229,224,216,0.6)', background: 'rgba(247,245,240,0.88)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--forest)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <span className="font-display text-lg font-semibold leading-none" style={{ color: 'var(--forest)' }}>Schoon</span>
              <span className="font-display text-lg font-light leading-none" style={{ color: 'var(--charcoal)' }}> Amsterdam</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Diensten', 'Werkwijze', 'Reviews', 'Prijzen', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--forest)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all"
              style={{ color: 'var(--forest)', border: '1.5px solid var(--forest)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--forest)'; (e.currentTarget as HTMLElement).style.color = 'white' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--forest)' }}
            >
              <IconPhone />
              Bel ons
            </a>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-lg text-white transition-all"
              style={{ background: 'var(--forest)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#153020')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--forest)')}
            >
              Gratis offerte
            </a>
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-5 h-0.5" style={{ background: 'var(--charcoal)' }} />
                <span className="block w-5 h-0.5" style={{ background: 'var(--charcoal)' }} />
                <span className="block w-3.5 h-0.5" style={{ background: 'var(--charcoal)' }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-4 nav-blur" style={{ borderTop: '1px solid var(--border)', background: 'rgba(247,245,240,0.96)' }}>
            {['Diensten', 'Werkwijze', 'Reviews', 'Prijzen', 'Contact'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-1"
                style={{ color: 'var(--charcoal)' }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-16 reveal" style={{ background: 'var(--forest)' }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=80&auto=format&fit=crop"
            alt="Clean modern kitchen"
            className="w-full h-full object-cover"
            style={{ opacity: 0.18 }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(31,59,43,0.97) 0%, rgba(31,59,43,0.85) 50%, rgba(31,59,43,0.6) 100%)' }} />
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 right-[15%] w-64 h-64 rounded-full opacity-10 animate-float" style={{ background: 'var(--sage)', filter: 'blur(60px)' }} />
        <div className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full opacity-8 animate-float delay-400" style={{ background: 'var(--mint)', filter: 'blur(80px)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-medium tracking-wider uppercase"
              style={{ background: 'rgba(126,184,154,0.15)', border: '1px solid rgba(126,184,154,0.3)', color: 'var(--mint)' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: 'var(--sage)' }} />
              Professionele schoonmaak in Amsterdam
            </div>

            <h1 className="font-display animate-fade-up delay-100 mb-6 leading-tight text-white" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)', fontWeight: 300 }}>
              Uw thuis,
              <br />
              <em style={{ color: 'var(--mint)', fontStyle: 'italic' }}>stralend</em> schoon.
            </h1>

            <p className="animate-fade-up delay-200 text-base sm:text-lg leading-relaxed mb-10 max-w-md" style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 300 }}>
              Premium schoonmaakdiensten voor woningen en kantoren in Amsterdam. Gecertificeerde professionals, milieuvriendelijke producten, gegarandeerde tevredenheid.
            </p>

            {/* CTA buttons */}
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all"
                style={{ background: 'var(--mint)', color: 'var(--forest)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#cceedd')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--mint)')}
              >
                Boek nu gratis
                <IconArrow />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)')}
              >
                <IconWhatsApp />
                Direct via WhatsApp
              </a>
            </div>

            {/* Trust badges */}
            <div className="animate-fade-up delay-400 flex flex-wrap gap-6">
              {[
                { icon: <IconShield />, label: '100% Tevredenheidsgarantie' },
                { icon: <IconLeaf />, label: 'Eco-vriendelijk' },
                { icon: <IconClock />, label: 'Zelfde dag beschikbaar' },
              ].map(badge => (
                <div key={badge.label} className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ color: 'var(--sage)' }}>{badge.icon}</span>
                  <span className="text-xs font-medium">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats card */}
          <div className="animate-scale-in delay-300">
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)' }}>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { num: 2400, suf: '+', label: 'Tevreden klanten' },
                  { num: 7, suf: ' jaar', label: 'Ervaring' },
                  { num: 98, suf: '%', label: 'Tevredenheidsscore' },
                  { num: 4800, suf: '+', label: 'Opdrachten voltooid' },
                ].map(stat => (
                  <div key={stat.label} className="text-center">
                    <div className="font-display mb-1 font-light text-white" style={{ fontSize: '2.2rem', color: 'var(--mint)' }}>
                      <Counter end={stat.num} suffix={stat.suf} />
                    </div>
                    <div className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Review snippet */}
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                </div>
                <p className="text-xs leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  "Ongelooflijk professioneel. Mijn appartement was nog nooit zo schoon. Ze letten op elk detail."
                </p>
                <p className="text-xs font-medium" style={{ color: 'var(--sage)' }}>— Anna V., Jordaan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
          <span className="text-xs tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Scroll</span>
          <div className="w-px h-12 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <div className="absolute top-0 left-0 w-full h-1/2 animate-float" style={{ background: 'var(--sage)' }} />
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section id="diensten" className="py-28 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div ref={servicesRef} className="reveal mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>Onze Diensten</p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)' }}>
              Alles voor een <em style={{ fontStyle: 'italic' }}>vlekkeloos</em> resultaat
            </h2>
            <p className="max-w-lg text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              Van reguliere woningreiniging tot gespecialiseerde kantoorschoonmaak — wij leveren kwaliteit die u ziet en voelt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="service-card rounded-2xl p-6 cursor-pointer reveal"
                style={{
                  background: 'white',
                  border: '1.5px solid var(--border)',
                  animationDelay: `${i * 0.1}s`,
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: '#EFF5F1', color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-2 text-base" style={{ color: 'var(--charcoal)' }}>{service.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>{service.desc}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>Vanaf</span>
                    <span className="font-semibold ml-1.5" style={{ color: 'var(--forest)' }}>{service.from}</span>
                  </div>
                  <a
                    href="#contact"
                    className="text-xs font-medium flex items-center gap-1 transition-colors"
                    style={{ color: 'var(--sage)' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--forest)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--sage)')}
                  >
                    Boek <IconArrow />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Image Section ─────────────────────────────── */}
      <section id="about" className="py-20 px-5 sm:px-8 overflow-hidden" style={{ background: 'white' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div ref={aboutRef} className="reveal-left relative">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4] col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80&auto=format&fit=crop"
                  alt="Professional cleaning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 mt-10">
                <div className="img-zoom rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop"
                    alt="Clean home"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="img-zoom rounded-2xl overflow-hidden aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1527515545081-5db817172677?w=600&q=80&auto=format&fit=crop"
                    alt="Cleaning products"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl p-5 shadow-2xl" style={{ background: 'var(--forest)', color: 'white' }}>
              <div className="font-display text-4xl font-light mb-0.5" style={{ color: 'var(--mint)' }}>7+</div>
              <div className="text-xs font-medium opacity-80">Jaar ervaring<br />in Amsterdam</div>
            </div>
          </div>

          {/* Text */}
          <div ref={aboutTextRef} className="reveal-right">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>Over Ons</p>
            <h2 className="font-display mb-6" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--charcoal)' }}>
              Amsterdam's meest vertrouwde schoonmaakbedrijf
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
              Opgericht in 2018 door een team van Amsterdamse professionals, bieden wij persoonlijke schoonmaakdiensten die verder gaan dan de standaard. Elk detail telt.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              Wij werken uitsluitend met gecertificeerde medewerkers, professionele apparatuur en biologisch afbreekbare schoonmaakmiddelen die veilig zijn voor uw gezin en huisdieren.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'VOG-gecertificeerde medewerkers',
                'Volledig verzekerd & gebonden',
                'Milieuvriendelijke producten (Ecolabel)',
                'Vaste schoonmaker naar keuze',
                'Flexibele tijden, ook in het weekend',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#EFF5F1', color: 'var(--forest)' }}>
                    <IconCheck />
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm text-white transition-all"
              style={{ background: 'var(--forest)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#153020')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--forest)')}
            >
              Maak een afspraak
              <IconArrow />
            </a>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────── */}
      <section id="werkwijze" className="py-28 px-5 sm:px-8" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto">
          <div ref={stepsRef} className="reveal text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>Onze Werkwijze</p>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)' }}>
              Schoon huis in <em style={{ fontStyle: 'italic' }}>4 stappen</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connector line — desktop only */}
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--border), var(--border), transparent)' }} />

            {steps.map((step, i) => (
              <div key={step.num} className="reveal relative" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10"
                  style={{ background: i % 2 === 0 ? 'var(--forest)' : 'white', border: '1.5px solid var(--border)', boxShadow: '0 8px 24px rgba(31,59,43,0.12)' }}
                >
                  <span className="font-display font-light text-xl" style={{ color: i % 2 === 0 ? 'var(--mint)' : 'var(--forest)' }}>{step.num}</span>
                </div>
                <h3 className="font-semibold text-center mb-2 text-base" style={{ color: 'var(--charcoal)' }}>{step.title}</h3>
                <p className="text-sm text-center leading-relaxed" style={{ color: 'var(--muted)' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section id="reviews" className="py-28 px-5 sm:px-8 overflow-hidden" style={{ background: 'var(--forest)' }}>
        <div className="max-w-7xl mx-auto">
          <div ref={testimonialsRef} className="reveal mb-14">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>Reviews</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'white' }}>
                Wat onze klanten <em style={{ fontStyle: 'italic', color: 'var(--mint)' }}>zeggen</em>
              </h2>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => <IconStar key={i} />)}
                <span className="text-sm ml-1 font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>4.9 gemiddeld · 847 beoordelingen</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="rounded-2xl p-6 reveal"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => <IconStar key={j} />)}
                </div>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.78)' }}>"{t.text}"</p>
                <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--sage)' }}>{t.location}</p>
                  <span className="inline-block text-xs px-2.5 py-1 rounded-full mt-2" style={{ background: 'rgba(126,184,154,0.15)', color: 'var(--mint)' }}>
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Google / Trustpilot badges */}
          <div className="mt-12 flex flex-wrap gap-5 items-center justify-center">
            {[
              { label: 'Google Reviews', score: '4.9', count: '312' },
              { label: 'Trustpilot', score: '4.8', count: '535' },
            ].map(badge => (
              <div key={badge.label} className="flex items-center gap-3 rounded-xl px-5 py-3" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => <IconStar key={j} />)}
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{badge.label}</p>
                  <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{badge.score} · {badge.count} reviews</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────── */}
      <section id="prijzen" className="py-28 px-5 sm:px-8" style={{ background: 'white' }}>
        <div className="max-w-5xl mx-auto">
          <div ref={pricingRef} className="reveal text-center mb-16">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>Transparante Prijzen</p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)' }}>
              Eerlijk geprijsd, <em style={{ fontStyle: 'italic' }}>geen verrassingen</em>
            </h2>
            <p className="max-w-md mx-auto text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              Maandelijkse abonnementen met 10–15% korting. Altijd inclusief BTW. Geen verborgen kosten.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className="rounded-2xl p-7 reveal relative overflow-hidden"
                style={{
                  background: plan.highlight ? 'var(--forest)' : 'var(--cream)',
                  border: plan.highlight ? 'none' : '1.5px solid var(--border)',
                  transform: plan.highlight ? 'scale(1.04)' : 'scale(1)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl text-xs font-semibold" style={{ background: 'var(--gold)', color: 'var(--forest)' }}>
                    Populairste keuze
                  </div>
                )}
                <p className="font-semibold text-sm mb-1" style={{ color: plan.highlight ? 'var(--mint)' : 'var(--sage)' }}>{plan.name}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display font-light" style={{ fontSize: '3rem', color: plan.highlight ? 'white' : 'var(--charcoal)', lineHeight: 1 }}>€{plan.price}</span>
                  <span className="text-sm mb-2" style={{ color: plan.highlight ? 'rgba(255,255,255,0.5)' : 'var(--muted)' }}>{plan.freq}</span>
                </div>
                <p className="text-xs mb-6" style={{ color: plan.highlight ? 'rgba(255,255,255,0.55)' : 'var(--muted)' }}>{plan.desc}</p>

                <div className="space-y-3 mb-7">
                  {plan.features.map(f => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: plan.highlight ? 'rgba(184,222,202,0.2)' : '#EFF5F1', color: plan.highlight ? 'var(--mint)' : 'var(--forest)' }}>
                        <IconCheck />
                      </span>
                      <span className="text-sm" style={{ color: plan.highlight ? 'rgba(255,255,255,0.8)' : 'var(--charcoal)' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block text-center py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: plan.highlight ? 'var(--mint)' : 'var(--forest)',
                    color: plan.highlight ? 'var(--forest)' : 'white',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-8" style={{ color: 'var(--muted)' }}>
            Maatwerk nodig voor uw kantoor of bedrijf? <a href="#contact" style={{ color: 'var(--forest)', fontWeight: 500 }} className="underline underline-offset-2">Vraag een offerte op maat aan</a>.
          </p>
        </div>
      </section>

      {/* ── Areas Served ─────────────────────────────────────── */}
      <section className="py-16 px-5 sm:px-8" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: 'var(--sage)' }}>Werkgebied</p>
          <h3 className="font-display mb-6" style={{ fontSize: '1.6rem', fontWeight: 300, color: 'var(--charcoal)' }}>
            Actief door heel <em style={{ fontStyle: 'italic' }}>Amsterdam</em>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Centrum', 'Jordaan', 'De Pijp', 'Oud-West', 'Oost', 'Noord', 'Zuid', 'Nieuw-West', 'Watergraafsmeer', 'Buitenveldert', 'IJburg', 'Sloterdijk'].map(area => (
              <span
                key={area}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--charcoal)' }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Booking ────────────────────────────────── */}
      <section id="contact" className="py-28 px-5 sm:px-8" style={{ background: 'white' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div ref={contactRef} className="reveal">
            <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'var(--sage)' }}>Contact</p>
            <h2 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: 'var(--charcoal)' }}>
              Klaar voor een <em style={{ fontStyle: 'italic' }}>stralend huis?</em>
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: 'var(--muted)' }}>
              Vraag een vrijblijvende offerte aan of boek direct. We reageren binnen 2 uur op werkdagen.
            </p>

            <div className="space-y-5">
              {[
                { icon: <IconPhone />, label: '+31 6 12 34 56 78', sub: 'Ma–Za 8:00–20:00' },
                { icon: <IconMail />, label: 'info@schoonamsterdam.nl', sub: 'Reactie binnen 2 uur' },
                { icon: <IconMapPin />, label: 'Amsterdam & omgeving', sub: 'Heel Amsterdam gedekt' },
                { icon: <IconCalendar />, label: 'Directe boeking', sub: 'Zelfde dag beschikbaar' },
              ].map(info => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#EFF5F1', color: 'var(--forest)' }}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--charcoal)' }}>{info.label}</p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{info.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 flex items-center gap-3 rounded-2xl px-6 py-4 font-medium text-sm text-white transition-all"
              style={{ background: '#25D366', boxShadow: '0 8px 24px rgba(37,211,102,0.3)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#1db954')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#25D366')}
            >
              <IconWhatsApp />
              <div>
                <p className="font-semibold">Direct chatten via WhatsApp</p>
                <p className="text-xs opacity-80 font-normal">Gemiddeld antwoord: &lt; 5 minuten</p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-2xl p-10 text-center" style={{ background: 'var(--cream)', border: '1.5px solid var(--border)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: '#EFF5F1' }}>
                  <IconCheck />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: 'var(--charcoal)' }}>Aanvraag verstuurd!</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>We nemen binnen 2 uur contact met u op via e-mail of WhatsApp.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8"
                style={{ background: 'var(--cream)', border: '1.5px solid var(--border)' }}
              >
                <h3 className="font-semibold text-base mb-6" style={{ color: 'var(--charcoal)' }}>Gratis offerte aanvragen</h3>

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>Naam *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jan de Vries"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--charcoal)' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>Telefoon</label>
                      <input
                        type="tel"
                        placeholder="+31 6 ..."
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="form-input w-full px-4 py-3 rounded-xl text-sm"
                        style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--charcoal)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>E-mailadres *</label>
                    <input
                      type="email"
                      required
                      placeholder="jan@voorbeeld.nl"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--charcoal)' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>Gewenste dienst</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl text-sm"
                      style={{ background: 'white', border: '1.5px solid var(--border)', color: formData.service ? 'var(--charcoal)' : 'var(--muted)', appearance: 'none' }}
                    >
                      <option value="" disabled>Kies een dienst...</option>
                      <option>Woningreiniging</option>
                      <option>Kantoorschoonmaak</option>
                      <option>Eindschoonmaak / verhuisschoonmaak</option>
                      <option>Ramen & kozijnen</option>
                      <option>Anders / combinatie</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--charcoal)' }}>Bericht / extra informatie</label>
                    <textarea
                      rows={4}
                      placeholder="Vertel ons over uw woning, gewenste frequentie of bijzonderheden..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                      style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--charcoal)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all flex items-center justify-center gap-2"
                    style={{ background: 'var(--forest)' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#153020')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--forest)')}
                  >
                    Offerte aanvragen
                    <IconArrow />
                  </button>

                  <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                    Geen verplichtingen · Reactie binnen 2 uur op werkdagen
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer style={{ background: '#111a13', color: 'rgba(255,255,255,0.55)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--forest-mid)' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="font-display text-lg text-white">Schoon Amsterdam</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Premium schoonmaakdiensten voor woningen en kantoren in heel Amsterdam.
            </p>
            <div className="flex gap-3">
              {[<IconInstagram />, <IconFacebook />].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.14)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)')}
                >
                  {Icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">Diensten</p>
            <ul className="space-y-2.5 text-sm">
              {['Woningreiniging', 'Kantoorschoonmaak', 'Eindschoonmaak', 'Ramen wassen', 'Vloerreiniging'].map(l => (
                <li key={l}><a href="#diensten" className="transition-colors hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">Bedrijf</p>
            <ul className="space-y-2.5 text-sm">
              {['Over ons', 'Werkwijze', 'Prijzen', 'Reviews', 'Vacatures'].map(l => (
                <li key={l}><a href="#" className="transition-colors hover:text-white">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-white">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><IconPhone /><span>+31 6 12 34 56 78</span></li>
              <li className="flex items-center gap-2"><IconMail /><span>info@schoonamsterdam.nl</span></li>
              <li className="flex items-start gap-2"><IconMapPin /><span>Amsterdam<br />& omgeving</span></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
          <p>© {new Date().getFullYear()} Schoon Amsterdam. Alle rechten voorbehouden.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
            <a href="#" className="hover:text-white transition-colors">Algemene voorwaarden</a>
            <a href="#" className="hover:text-white transition-colors">Cookiebeleid</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
