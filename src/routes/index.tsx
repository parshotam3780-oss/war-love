import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({
  component: WarLoveTournament,
})

/* ── LOGO SVG ─────────────────────────────────────────────────── */
function WLLogo({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="60" cy="60" r="56" stroke="url(#ringGrad)" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="50" stroke="rgba(139,0,0,0.3)" strokeWidth="0.5" />

      {/* Crosshair arms */}
      <line x1="60" y1="8" x2="60" y2="28" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="92" x2="60" y2="112" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="60" x2="28" y2="60" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
      <line x1="92" y1="60" x2="112" y2="60" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />

      {/* Inner shield */}
      <path d="M60 20 L82 32 L82 60 Q82 82 60 94 Q38 82 38 60 L38 32 Z" fill="url(#shieldGrad)" stroke="rgba(139,0,0,0.6)" strokeWidth="1" />

      {/* Flame inside shield */}
      <path d="M60 78 C52 70 48 60 52 50 C54 56 58 56 60 52 C62 56 66 56 68 50 C72 60 68 70 60 78Z" fill="url(#flameGrad)" opacity="0.9" />
      <path d="M60 72 C55 66 54 58 57 53 C58 57 60 57 60 54 C62 57 62 57 63 53 C66 58 65 66 60 72Z" fill="url(#flameCoreGrad)" />

      {/* WL letters */}
      <text x="44" y="47" fontFamily="Bebas Neue, sans-serif" fontSize="14" fill="white" opacity="0.95" letterSpacing="1">WL</text>

      {/* Corner ticks */}
      <path d="M22 22 L30 22 L30 30" stroke="#7b2d8b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M98 22 L90 22 L90 30" stroke="#7b2d8b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M22 98 L30 98 L30 90" stroke="#7b2d8b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M98 98 L90 98 L90 90" stroke="#7b2d8b" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b0000" />
          <stop offset="50%" stopColor="#7b2d8b" />
          <stop offset="100%" stopColor="#c0392b" />
        </linearGradient>
        <linearGradient id="shieldGrad" x1="60" y1="20" x2="60" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a0028" />
          <stop offset="100%" stopColor="#0a0007" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="60" y1="50" x2="60" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff6600" />
          <stop offset="60%" stopColor="#cc1100" />
          <stop offset="100%" stopColor="#8b0000" />
        </linearGradient>
        <linearGradient id="flameCoreGrad" x1="60" y1="53" x2="60" y2="72" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffcc00" />
          <stop offset="100%" stopColor="#ff4400" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── FLAME SVG DECORATION ─────────────────────────────────────── */
function FlameDeco({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="60" height="120" viewBox="0 0 60 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'flame-flicker 2.5s ease-in-out infinite' }}>
      <path d="M30 120 C15 100 8 80 14 60 C18 72 24 72 28 60 C30 80 36 80 40 60 C46 80 48 100 30 120Z" fill="url(#f1)" />
      <path d="M30 105 C20 88 17 72 22 58 C24 66 28 66 30 58 C32 66 36 66 38 58 C43 72 40 88 30 105Z" fill="url(#f2)" />
      <path d="M30 90 C24 78 23 66 27 58 C28 63 30 63 30 58 C32 63 32 63 33 58 C37 66 36 78 30 90Z" fill="url(#f3)" />
      <defs>
        <linearGradient id="f1" x1="30" y1="60" x2="30" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff4400" stopOpacity="0" />
          <stop offset="40%" stopColor="#cc1100" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8b0000" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="f2" x1="30" y1="58" x2="30" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff8800" stopOpacity="0" />
          <stop offset="50%" stopColor="#ff3300" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#cc0000" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="f3" x1="30" y1="58" x2="30" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffcc00" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff4400" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  )
}

/* ── COUNTDOWN TIMER ──────────────────────────────────────────── */
function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })

  useEffect(() => {
    const target = new Date()
    target.setDate(target.getDate() + 18)
    target.setHours(20, 0, 0, 0)

    const tick = () => {
      const diff = target.getTime() - Date.now()
      if (diff <= 0) return
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'DAYS', value: time.days },
    { label: 'HOURS', value: time.hours },
    { label: 'MINS', value: time.mins },
    { label: 'SECS', value: time.secs },
  ]

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {units.map(({ label, value }) => (
        <div key={label} className="countdown-digit" style={{ minWidth: 72 }}>
          <div className="font-orbitron text-2xl font-bold" style={{ color: '#c0392b' }}>
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs font-semibold tracking-widest mt-1" style={{ color: '#9370a8' }}>
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}

/* ── EMBER PARTICLES ──────────────────────────────────────────── */
function EmberField() {
  const embers = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 5.2) % 90}%`,
    delay: `${(i * 0.37) % 3}s`,
    duration: `${1.5 + (i * 0.23) % 1.5}s`,
    drift: `${(i % 2 === 0 ? 1 : -1) * (8 + (i * 3) % 20)}px`,
    size: `${2 + (i % 3)}px`,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {embers.map(e => (
        <div
          key={e.id}
          className="absolute bottom-0 rounded-full"
          style={{
            left: e.left,
            width: e.size,
            height: e.size,
            background: `radial-gradient(circle, #ff6600, #cc1100)`,
            animation: `ember-rise ${e.duration} ${e.delay} ease-out infinite`,
            ['--x-drift' as string]: e.drift,
            boxShadow: `0 0 4px #ff4400`,
          }}
        />
      ))}
    </div>
  )
}

/* ── MAIN COMPONENT ───────────────────────────────────────────── */
export default function WarLoveTournament() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [registered, setRegistered] = useState(false)
  const [formData, setFormData] = useState({ name: '', team: '', uid: '', email: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!formData.name.trim()) errs.name = 'Player name required'
    if (!formData.uid.trim() || !/^\d{8,12}$/.test(formData.uid)) errs.uid = 'Valid UID (8–12 digits) required'
    if (!formData.email.includes('@')) errs.email = 'Valid email required'
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setRegistered(true)
  }

  const teams = [
    { name: 'BLOOD RAVENS', members: 4, region: 'NA', rank: '#1', color: '#8b0000' },
    { name: 'PURPLE WRAITH', members: 4, region: 'EU', rank: '#2', color: '#7b2d8b' },
    { name: 'IRON SKULL', members: 4, region: 'APAC', rank: '#3', color: '#4a0060' },
    { name: 'NEON GHOST', members: 4, region: 'LATAM', rank: '#4', color: '#5c0020' },
    { name: 'DARK VENOM', members: 4, region: 'ME', rank: '#5', color: '#3d0050' },
    { name: 'RED ECLIPSE', members: 4, region: 'NA', rank: '#6', color: '#700000' },
  ]

  const prizes = [
    { place: '1ST PLACE', amount: '$5,000', extras: 'Trophy + Custom Gear', icon: '🥇' },
    { place: '2ND PLACE', amount: '$2,500', extras: 'Medal + In-Game Bundle', icon: '🥈' },
    { place: '3RD PLACE', amount: '$1,000', extras: 'Medal + Premium Pass', icon: '🥉' },
  ]

  const schedule = [
    { date: 'JUN 25', time: '8:00 PM', event: 'QUALIFIERS ROUND 1', status: 'upcoming' },
    { date: 'JUN 27', time: '8:00 PM', event: 'QUALIFIERS ROUND 2', status: 'upcoming' },
    { date: 'JUL 2', time: '7:00 PM', event: 'QUARTERFINALS', status: 'upcoming' },
    { date: 'JUL 5', time: '7:00 PM', event: 'SEMIFINALS', status: 'upcoming' },
    { date: 'JUL 10', time: '8:00 PM', event: 'GRAND FINAL — LIVE', status: 'final' },
  ]

  return (
    <div style={{ background: 'var(--off-black)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* ── NAV ── */}
      <nav className="nav-glass fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 no-underline">
            <WLLogo size={40} />
            <div>
              <div className="font-display text-lg leading-none" style={{ color: '#f0e6ff', letterSpacing: '0.08em' }}>WAR LOVE</div>
              <div className="font-orbitron text-xs" style={{ color: '#c0392b', letterSpacing: '0.15em' }}>TOURNAMENT</div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {['SCHEDULE', 'TEAMS', 'PRIZES', 'REGISTER'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-display text-sm tracking-widest transition-colors no-underline hover:text-red-400"
                style={{ color: 'var(--text-muted)', letterSpacing: '0.12em' }}
              >
                {item}
              </a>
            ))}
            <a href="#download" className="btn-download" style={{ fontSize: '0.9rem', padding: '0.5rem 1.25rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-8 4h16v-2H4v2z" /></svg>
              GET APP
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f0e6ff' }}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {menuOpen
                ? <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                : <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              }
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-4 pb-4" style={{ borderTop: '1px solid rgba(139,0,0,0.2)' }}>
            {['SCHEDULE', 'TEAMS', 'PRIZES', 'REGISTER'].map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-display tracking-widest no-underline"
                style={{ color: 'var(--text-muted)', borderBottom: '1px solid rgba(139,0,0,0.15)', letterSpacing: '0.1em' }}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="hero-bg relative" style={{ minHeight: '100vh', paddingTop: '64px' }}>
        <EmberField />

        {/* Decorative flame columns */}
        <div className="absolute left-0 bottom-0 opacity-40 hidden lg:block" style={{ zIndex: 2 }}>
          <FlameDeco />
        </div>
        <div className="absolute right-0 bottom-0 opacity-40 hidden lg:block" style={{ zIndex: 2, transform: 'scaleX(-1)' }}>
          <FlameDeco />
        </div>

        {/* Scan line effect */}
        <div
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.3), transparent)',
            animation: 'scan-line 8s linear infinite',
            zIndex: 3,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center" style={{ minHeight: 'calc(100vh - 64px)', zIndex: 5 }}>

          {/* Logo */}
          <div className="reveal-1 mb-6" style={{ animationDelay: '0s' }}>
            <WLLogo size={100} />
          </div>

          {/* Season badge */}
          <div className="reveal-2 mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-sm"
            style={{ background: 'rgba(139,0,0,0.2)', border: '1px solid rgba(139,0,0,0.4)', animationDelay: '0.1s' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#c0392b', display: 'inline-block', boxShadow: '0 0 8px #c0392b' }} />
            <span className="font-orbitron text-xs tracking-widest" style={{ color: '#c0392b' }}>SEASON 4 · FREE FIRE CHAMPIONSHIP</span>
          </div>

          {/* Main title */}
          <h1 className="font-display reveal-2 leading-none" style={{
            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            color: '#f0e6ff',
            letterSpacing: '0.04em',
            animationDelay: '0.2s',
          }}>
            <span className="glitch-text text-glow-red" data-text="WAR">WAR</span>
          </h1>
          <h1 className="font-display reveal-3 leading-none" style={{
            fontSize: 'clamp(3.5rem, 12vw, 9rem)',
            background: 'linear-gradient(135deg, #7b2d8b 0%, #a855f7 50%, #7b2d8b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.04em',
            animationDelay: '0.35s',
          }}>
            LOVE
          </h1>

          <div className="reveal-3 font-display text-xl md:text-3xl tracking-widest mt-2 mb-8" style={{ color: '#9370a8', animationDelay: '0.5s' }}>
            TOURNAMENT
          </div>

          <p className="reveal-4 max-w-xl mb-10 text-lg" style={{ color: '#9370a8', lineHeight: 1.6, animationDelay: '0.65s' }}>
            48 squads. One survivor. The most savage Free Fire tournament returns — forged in blood, crowned in fire.
          </p>

          {/* Countdown */}
          <div className="reveal-4 mb-10" style={{ animationDelay: '0.8s' }}>
            <div className="font-orbitron text-xs tracking-widest mb-3" style={{ color: '#7b2d8b' }}>
              GRAND FINAL BEGINS IN
            </div>
            <Countdown />
          </div>

          {/* CTA Buttons */}
          <div className="reveal-4 flex flex-wrap gap-4 justify-center" style={{ animationDelay: '0.95s' }}>
            <a href="#register" className="btn-download">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" /></svg>
              REGISTER NOW
            </a>
            <a href="#schedule" className="btn-secondary">
              VIEW SCHEDULE
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" /></svg>
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2" style={{ transform: 'translateX(-50%)', animation: 'float-up 2s ease-in-out infinite' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(139,0,0,0.5)" strokeWidth="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: 'var(--surface)', padding: '4rem 1rem' }}>
        <div className="section-divider mb-12" />
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'REGISTERED SQUADS', value: '48', suffix: '' },
            { label: 'PRIZE POOL', value: '$8,500', suffix: '' },
            { label: 'TOTAL PLAYERS', value: '192', suffix: '' },
            { label: 'DAYS REMAINING', value: '18', suffix: '' },
          ].map(stat => (
            <div key={stat.label} className="stat-card">
              <div className="font-display text-4xl md:text-5xl text-glow-red mb-1" style={{ color: '#c0392b' }}>
                {stat.value}
              </div>
              <div className="font-orbitron text-xs tracking-widest" style={{ color: '#9370a8' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="section-divider mt-12" />
      </section>

      {/* ── SCHEDULE ── */}
      <section id="schedule" style={{ padding: '5rem 1rem', background: 'linear-gradient(180deg, var(--surface) 0%, var(--off-black) 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="font-orbitron text-xs tracking-widest mb-3" style={{ color: '#7b2d8b' }}>— TOURNAMENT SCHEDULE</div>
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0e6ff' }}>
              BATTLE <span style={{ color: '#c0392b' }}>TIMELINE</span>
            </h2>
          </div>

          <div className="space-y-3">
            {schedule.map((item, i) => (
              <div key={i} className="schedule-card flex flex-wrap items-center gap-4" style={item.status === 'final' ? { borderLeftColor: '#ffd700', background: 'rgba(44,20,0,0.4)' } : {}}>
                <div className="font-orbitron text-sm font-bold" style={{ color: item.status === 'final' ? '#ffd700' : '#c0392b', minWidth: 60 }}>
                  {item.date}
                </div>
                <div className="font-display text-lg" style={{ color: '#9370a8' }}>{item.time}</div>
                <div className="font-display text-lg flex-1" style={{ color: item.status === 'final' ? '#ffd700' : '#f0e6ff', letterSpacing: '0.05em' }}>
                  {item.event}
                </div>
                <div className="text-xs font-orbitron px-3 py-1 rounded-sm"
                  style={{
                    background: item.status === 'final' ? 'rgba(255,215,0,0.1)' : 'rgba(139,0,0,0.2)',
                    border: `1px solid ${item.status === 'final' ? 'rgba(255,215,0,0.4)' : 'rgba(139,0,0,0.4)'}`,
                    color: item.status === 'final' ? '#ffd700' : '#c0392b',
                    letterSpacing: '0.1em',
                  }}>
                  {item.status === 'final' ? 'FINALE' : 'UPCOMING'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAMS ── */}
      <section id="teams" style={{ padding: '5rem 1rem', background: 'var(--surface)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="font-orbitron text-xs tracking-widest mb-3" style={{ color: '#7b2d8b' }}>— COMPETING SQUADS</div>
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0e6ff' }}>
              TOP <span style={{ background: 'linear-gradient(135deg, #7b2d8b, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SQUADS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teams.map((team, i) => (
              <div key={i} className="team-card p-6 rounded-sm">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="font-display text-3xl"
                    style={{ color: '#f0e6ff', letterSpacing: '0.05em', lineHeight: 1 }}
                  >
                    {team.rank}
                  </div>
                  <div
                    className="text-xs font-orbitron px-2 py-1 rounded-sm"
                    style={{ background: `${team.color}33`, border: `1px solid ${team.color}66`, color: '#c8b4d8' }}
                  >
                    {team.region}
                  </div>
                </div>

                <div
                  className="font-display text-xl mb-3"
                  style={{ color: '#f0e6ff', letterSpacing: '0.06em' }}
                >
                  {team.name}
                </div>

                <div className="flex items-center gap-2 text-sm" style={{ color: '#9370a8' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" /></svg>
                  {team.members} members · Active
                </div>

                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }, (_, j) => (
                    <div key={j} style={{ height: 3, flex: 1, borderRadius: 2, background: j < 4 ? team.color : 'rgba(255,255,255,0.1)' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="font-orbitron text-sm" style={{ color: '#9370a8' }}>
              +34 more squads registered · <span style={{ color: '#7b2d8b' }}>48 total</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRIZES ── */}
      <section id="prizes" style={{ padding: '5rem 1rem', background: 'linear-gradient(180deg, var(--surface) 0%, var(--surface-2) 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <div className="font-orbitron text-xs tracking-widest mb-3" style={{ color: '#7b2d8b' }}>— REWARDS</div>
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: '#f0e6ff' }}>
              PRIZE <span style={{ color: '#ffd700', textShadow: '0 0 30px rgba(255,215,0,0.4)' }}>POOL</span>
            </h2>
            <div className="font-display text-2xl mt-2" style={{ color: '#9370a8' }}>
              TOTAL: <span style={{ color: '#ffd700' }}>$8,500</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prizes.map((prize, i) => (
              <div
                key={i}
                className={`prize-card-gold p-8 rounded-sm text-center ${i === 0 ? 'md:-mt-4 md:mb-4' : ''}`}
                style={{
                  transform: i === 0 ? 'scale(1.04)' : 'scale(1)',
                  border: i === 0 ? '1px solid rgba(255,215,0,0.5)' : '1px solid rgba(123,45,139,0.3)',
                }}
              >
                <div className="text-4xl mb-4">{prize.icon}</div>
                <div className="font-orbitron text-xs tracking-widest mb-3" style={{ color: i === 0 ? '#ffd700' : '#9370a8' }}>
                  {prize.place}
                </div>
                <div className="font-display text-5xl mb-2" style={{ color: i === 0 ? '#ffd700' : '#f0e6ff', textShadow: i === 0 ? '0 0 30px rgba(255,215,0,0.4)' : 'none' }}>
                  {prize.amount}
                </div>
                <div className="text-sm" style={{ color: '#9370a8' }}>{prize.extras}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section id="download" style={{ padding: '5rem 1rem', background: 'var(--off-black)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(139,0,0,0.15) 0%, transparent 70%)',
        }} />

        <div className="max-w-4xl mx-auto text-center relative" style={{ zIndex: 2 }}>
          <WLLogo size={72} />
          <h2 className="font-display mt-6 mb-2 leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0e6ff' }}>
            GET THE <span style={{ color: '#c0392b', textShadow: '0 0 30px rgba(192,57,43,0.5)' }}>WAR LOVE</span> APP
          </h2>
          <p className="mb-8 text-lg max-w-lg mx-auto" style={{ color: '#9370a8', lineHeight: 1.6 }}>
            Track live scores, manage your squad, receive match alerts, and stream finals — all in one place.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#download"
              className="btn-download"
              onClick={e => { e.preventDefault(); alert('Download coming soon! The app is in final QA.') }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.29.07 2.18.74 2.94.8 1.13-.23 2.21-.96 3.43-.84 1.46.15 2.56.7 3.28 1.8-3.04 1.82-2.61 5.68.35 7.1-.73 1.85-1.67 3.63-2 4zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              DOWNLOAD FOR IOS
            </a>
            <a
              href="#download"
              className="btn-download"
              style={{ background: 'linear-gradient(135deg, #2d0045 0%, #1a0028 50%, #3d0060 100)', borderColor: 'rgba(168,85,247,0.4)' }}
              onClick={e => { e.preventDefault(); alert('Download coming soon! The app is in final QA.') }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76a1.05 1.05 0 001.06-.04l11.78-6.79-2.82-2.82-10.02 9.65zM20.8 10.49L17.5 8.6 14.35 11.76l3.15 3.15 3.33-1.93a1.55 1.55 0 000-2.49zM2.06.29A1.03 1.03 0 001 1.3v21.4c0 .44.26.82.64 1l12.2-12.2L2.06.29zm9.4 9.4L3.12.38 14.35 6.94 11.46 9.69z" />
              </svg>
              DOWNLOAD FOR ANDROID
            </a>
          </div>

          {/* App features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '⚡', label: 'LIVE SCORES', desc: 'Real-time match updates' },
              { icon: '🎯', label: 'SQUAD HQ', desc: 'Manage your 4-man squad' },
              { icon: '📡', label: 'ALERTS', desc: 'Match reminders & results' },
              { icon: '🏆', label: 'LEADERBOARD', desc: 'Global rank tracking' },
            ].map((f, i) => (
              <div key={i} className="animated-border p-4 rounded-sm text-center" style={{ borderRadius: 4 }}>
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="font-orbitron text-xs tracking-wider mb-1" style={{ color: '#c0392b' }}>{f.label}</div>
                <div className="text-xs" style={{ color: '#9370a8' }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGISTER ── */}
      <section id="register" style={{ padding: '5rem 1rem', background: 'var(--surface-2)' }}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <div className="font-orbitron text-xs tracking-widest mb-3" style={{ color: '#7b2d8b' }}>— JOIN THE BATTLE</div>
            <h2 className="font-display leading-none" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#f0e6ff' }}>
              REGISTER <span style={{ color: '#c0392b' }}>YOUR SQUAD</span>
            </h2>
            <p className="mt-3 text-base" style={{ color: '#9370a8' }}>Limited to 48 squads. 31 spots remaining.</p>
          </div>

          {registered ? (
            <div className="animated-border p-10 rounded-sm text-center" style={{ borderRadius: 4 }}>
              <div className="font-display text-5xl mb-4 text-glow-red" style={{ color: '#c0392b' }}>LOCKED IN</div>
              <WLLogo size={64} />
              <p className="mt-6 text-lg" style={{ color: '#9370a8' }}>
                Your registration is confirmed, soldier. Check your email for match details and squad code.
              </p>
              <div className="mt-4 font-orbitron text-xs tracking-widest" style={{ color: '#7b2d8b' }}>
                REG ID: WL4-{Math.floor(Math.random() * 90000) + 10000}
              </div>
            </div>
          ) : (
            <form onSubmit={handleRegister} className="space-y-5">
              {[
                { id: 'name', label: 'PLAYER NAME', placeholder: 'Your in-game name', type: 'text' },
                { id: 'team', label: 'SQUAD NAME', placeholder: 'Your team name (optional)', type: 'text' },
                { id: 'uid', label: 'FREE FIRE UID', placeholder: '8–12 digit UID', type: 'text' },
                { id: 'email', label: 'EMAIL ADDRESS', placeholder: 'For match confirmations', type: 'email' },
              ].map(field => (
                <div key={field.id}>
                  <label className="block font-orbitron text-xs tracking-widest mb-2" style={{ color: errors[field.id] ? '#ff4444' : '#7b2d8b' }}>
                    {field.label} {field.id !== 'team' && <span style={{ color: '#c0392b' }}>*</span>}
                  </label>
                  <input
                    className="form-input"
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={e => setFormData(p => ({ ...p, [field.id]: e.target.value }))}
                  />
                  {errors[field.id] && (
                    <p className="mt-1 text-xs" style={{ color: '#ff4444' }}>{errors[field.id]}</p>
                  )}
                </div>
              ))}

              <div className="pt-2">
                <button type="submit" className="btn-download w-full justify-center" style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" /></svg>
                  ENTER THE TOURNAMENT
                </button>
              </div>

              <p className="text-xs text-center" style={{ color: '#9370a8' }}>
                By registering you agree to the tournament rules and conduct policy.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: 'var(--off-black)', borderTop: '1px solid rgba(139,0,0,0.2)', padding: '3rem 1rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <WLLogo size={36} />
              <div>
                <div className="font-display" style={{ color: '#f0e6ff', letterSpacing: '0.08em' }}>WAR LOVE TOURNAMENT</div>
                <div className="font-orbitron text-xs" style={{ color: '#7b2d8b' }}>SEASON 4 · FREE FIRE</div>
              </div>
            </div>

            <div className="flex gap-6">
              {['RULES', 'CONTACT', 'DISCORD', 'INSTAGRAM'].map(link => (
                <a key={link} href="#" className="font-orbitron text-xs tracking-widest no-underline transition-colors"
                  style={{ color: '#9370a8' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c0392b')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9370a8')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="section-divider my-6" />

          <div className="text-center font-orbitron text-xs" style={{ color: '#4a0060' }}>
            © 2026 WAR LOVE TOURNAMENT · ALL RIGHTS RESERVED · FREE FIRE IS A TRADEMARK OF GARENA
          </div>
        </div>
      </footer>
    </div>
  )
}
