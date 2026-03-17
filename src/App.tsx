/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Compass, 
  Scroll, 
  Feather, 
  Github, 
  Linkedin, 
  Twitter, 
  Star,
  Zap,
  Shield,
  Sword,
  Search,
  ChevronRight,
  Info,
  ExternalLink,
  Cpu,
  Layers,
  Globe,
  MapPin,
  Coins,
  BookOpen,
  MessageCircle,
  Database,
  Activity,
  Menu,
  X
} from 'lucide-react';
import { translations, attributesConfig, defaultLang } from './i18n';

// --- Components ---

const TyndallEffect = () => {
  const [motes] = useState(() => 
    Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      x: `${(Math.random() - 0.5) * 150}px`,
      y: `${(Math.random() - 0.5) * 150}px`,
      duration: `${30 + Math.random() * 40}s`,
      delay: `${Math.random() * -40}s`,
    }))
  );

  return (
    <div className="tyndall-container">
      <div className="tyndall-beam" />
      <div className="tyndall-beam" />
      <div className="tyndall-beam" />
      <div className="dust-motes">
        {motes.map((m) => (
          <div 
            key={m.id} 
            className="mote" 
            style={{ 
              top: m.top, 
              left: m.left, 
              '--x': m.x,
              '--y': m.y,
              '--duration': m.duration,
              animationDelay: m.delay 
            } as any} 
          />
        ))}
      </div>
    </div>
  );
};

const Sparkles = () => {
  const [sparkleList] = useState(() => 
    Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: `${2 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
    }))
  );

  return (
    <div className="sparkles">
      {sparkleList.map((s) => (
        <div 
          key={s.id} 
          className="sparkle" 
          style={{ 
            top: s.top, 
            left: s.left, 
            '--duration': s.duration,
            animationDelay: s.delay 
          } as any} 
        />
      ))}
    </div>
  );
};

const StatBar = ({ label, value, max }: { label: string; value: number; max: number }) => (
  <div className="mb-8 group cursor-default">
    <div className="flex justify-between font-display text-[12px] text-[#d4af37] uppercase tracking-[0.3em] mb-1">
      <motion.span 
        whileHover={{ x: 5, color: '#fff' }}
        className="flex items-center gap-2 transition-colors"
      >
        <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
        {label}
      </motion.span>
      <span className="text-white">{value} / {max}</span>
    </div>
    <div className="octo-bar-bg">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${(value / max) * 100}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="octo-bar-fill" 
      />
    </div>
  </div>
);

const TravelerTab = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations];
  const attrs = attributesConfig[lang as keyof typeof attributesConfig];
  
  return (
    <div className="octo-flow space-y-24 py-12">
    <section className="text-center space-y-16 relative">
      <div className="inline-block relative">
        {/* Decorative Frame for Character */}
        <div className="absolute -inset-8 border border-[#d4af37]/20 pointer-events-none" />
        <div className="absolute -top-8 -left-8 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]" />
        <div className="absolute -top-8 -right-8 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]" />
        <div className="absolute -bottom-8 -left-8 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]" />
        <div className="absolute -bottom-8 -right-8 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]" />

        <div className="w-64 h-64 bg-[#3d342a] rounded-full border-2 border-[#d4af37]/30 flex items-center justify-center relative overflow-hidden group shadow-[0_0_60px_rgba(212,175,55,0.3)]">
          <div className="absolute inset-0 bg-radial-gradient from-[#d4af37]/40 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-1000" />
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pixel-sprite w-40 h-40 flex items-center justify-center relative z-10"
          >
            {/* Detailed Octopath Style Pixel Character */}
            <div className="relative w-24 h-28">
              <div className="absolute top-0 left-5 w-14 h-7 bg-[#4a3d2c] shadow-[0_3px_0_#2d241a]" />
              <div className="absolute top-5 left-5 w-14 h-11 bg-[#f1e4d1]" />
              <div className="absolute top-9 left-8 w-2 h-2 bg-[#1a1612] rounded-sm" />
              <div className="absolute top-9 right-8 w-2 h-2 bg-[#1a1612] rounded-sm" />
              <div className="absolute top-14 left-4 w-16 h-4 bg-[#a64d4d]" />
              <div className="absolute top-18 left-3 w-18 h-12 bg-[#6b5a4a] rounded-t-sm" />
              <div className="absolute top-18 left-7 w-10 h-12 bg-[#d4af37]" />
              <div className="absolute top-22 left-0 w-4 h-4 bg-[#f1e4d1]" />
              <div className="absolute top-22 right-0 w-4 h-4 bg-[#f1e4d1]" />
            </div>
          </motion.div>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#3d342a] border-2 border-[#d4af37] px-10 py-4 font-display text-[14px] text-white shadow-[0_10px_30px_rgba(0,0,0,0.6)] tracking-[0.4em]">
          {t.scholar}
        </div>
      </div>

      <div className="space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display tracking-tighter text-white">Winnie</h1>
        <div className="flex justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 font-serif italic-serif text-xl sm:text-2xl md:text-3xl text-[#f1e4d1] flex-wrap px-4">
          <span className="flex items-center gap-2 sm:gap-3 md:gap-4 group cursor-default">
            <MapPin size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#d4af37] group-hover:text-white transition-colors drop-shadow-[0_0_10px_#d4af37]" /> 
            {t.location}
          </span>
          <span className="text-[#d4af37] opacity-50 text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_#d4af37]">◈</span>
          <span className="flex items-center gap-2 sm:gap-3 md:gap-4 group cursor-default">
            <Star size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#d4af37] group-hover:text-white transition-colors drop-shadow-[0_0_10px_#d4af37]" /> 
            {t.level}
          </span>
        </div>
      </div>

      <div className="flex justify-center pt-10">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="octo-btn group"
        >
          <div className="shimmer-sweep" />
          <span className="relative z-10">
            {t.pathAction}
          </span>
        </motion.button>
      </div>
    </section>

    <div className="octo-divider" />

    <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
      <div className="space-y-14">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl whitespace-nowrap tracking-widest">{t.attributes}</h2>
          <div className="h-px w-full bg-gradient-to-r from-[#d4af37]/60 via-[#d4af37]/20 to-transparent" />
        </div>
        <div className="space-y-8">
          <StatBar label={t.knowledge} value={attrs.knowledge.value} max={attrs.knowledge.max} />
          <StatBar label={t.curiosity} value={attrs.curiosity.value} max={attrs.curiosity.max} />
          <StatBar label={t.resilience} value={attrs.resilience.value} max={attrs.resilience.max} />
          <StatBar label={t.social} value={attrs.social.value} max={attrs.social.max} />
          <StatBar label={t.stamina} value={attrs.stamina.value} max={attrs.stamina.max} />
        </div>
      </div>
      <div className="space-y-14">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl whitespace-nowrap tracking-widest">{t.biography}</h2>
          <div className="h-px w-full bg-gradient-to-r from-[#d4af37]/60 via-[#d4af37]/20 to-transparent" />
        </div>
        <div className="relative">
          <div className="absolute -left-4 sm:-left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4af37]/60 via-transparent to-[#d4af37]/60" />
          <p className="font-serif leading-relaxed text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-white pl-4 sm:pl-6 drop-shadow-sm">
            {t.bioText}
          </p>
        </div>
      </div>
    </section>
  </div>
  );
};

const SkillsTab = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations];
  
  return (
  <div className="octo-flow py-12">
    <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-widest">{t.skillsTitle}</h2>
      <div className="flex justify-center">
        <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent" />
      </div>
      <p className="font-serif italic-serif text-base sm:text-lg md:text-xl px-4">{t.skillsDesc}</p>
    </div>

    <div className="space-y-4">
      {[
        { name: t.reactName, type: t.reactType, desc: t.reactDesc, icon: Zap },
        { name: t.goName, type: t.goType, desc: t.goDesc, icon: Activity },
        { name: t.typescriptName, type: t.typescriptType, desc: t.typescriptDesc, icon: Sword },
        { name: t.mysqlName, type: t.mysqlType, desc: t.mysqlDesc, icon: Database },
        { name: t.redisName, type: t.redisType, desc: t.redisDesc, icon: Zap },
        { name: t.websocketName, type: t.websocketType, desc: t.websocketDesc, icon: MessageCircle },
      ].map((skill, idx) => (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          key={skill.name} 
          className="octo-list-item flex gap-4 sm:gap-8 md:gap-12 items-start group px-3 sm:px-4 md:px-0"
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center shrink-0 border border-[#8b7355]/10 group-hover:border-[#8b7355]/40 transition-all duration-500 bg-[#1a1612] relative">
            <div className="absolute inset-0 bg-[#8b7355]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <skill.icon size={24} strokeWidth={1} className="sm:w-7 sm:h-7 md:w-9 md:h-9 text-[#8b7355] group-hover:text-[#f1e4d1] transition-colors" />
          </div>
          <div className="flex-1 space-y-2 sm:space-y-3">
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg sm:text-xl md:text-2xl text-[#f1e4d1] group-hover:text-white transition-colors">{skill.name}</h3>
              <span className="font-display text-[8px] sm:text-[10px] text-[#8b7355] tracking-[0.3em] uppercase">{skill.type}</span>
            </div>
            <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-[#d4c4a8]/70 leading-relaxed group-hover:text-[#d4c4a8] transition-colors">{skill.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

const ProjectsTab = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations];
  
  return (
  <div className="octo-flow py-12">
    <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-widest">{t.projectsTitle}</h2>
      <div className="flex justify-center">
        <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent" />
      </div>
      <p className="font-serif italic-serif text-base sm:text-lg md:text-xl px-4">{t.projectsDesc}</p>
    </div>

    <div className="space-y-20">
      {[
        { id: t.project1Id, title: t.project1Title, date: t.project1Date, desc: t.project1Desc, url: 'http://159.75.178.17/qcard' },
      ].map((project, idx) => (
        <motion.a
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.15, duration: 0.8 }}
          key={project.id} 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="space-y-8 group cursor-pointer relative block no-underline"
        >
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-display text-xl sm:text-2xl md:text-3xl text-[#8b7355]/30 group-hover:text-[#8b7355] transition-all duration-500 group-hover:scale-110">{project.id}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#8b7355]/20 via-[#8b7355]/40 to-transparent group-hover:via-[#8b7355] transition-all duration-700" />
            <span className="font-display text-[8px] sm:text-[10px] text-[#8b7355] tracking-[0.4em] uppercase whitespace-nowrap">{project.date}</span>
          </div>
          <div className="pl-12 sm:pl-14 md:pl-16 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-[#f1e4d1] group-hover:translate-x-4 transition-transform duration-500 inline-block relative">
              {project.title}
              <div className="absolute -bottom-2 left-0 w-0 h-px bg-[#8b7355] group-hover:w-full transition-all duration-700" />
            </h3>
            <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl text-[#d4c4a8]/70 leading-relaxed group-hover:text-[#d4c4a8] transition-colors">{project.desc}</p>
            <div className="flex items-center gap-2 sm:gap-3 text-[#8b7355] font-display text-[8px] sm:text-[10px] tracking-[0.4em] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
              {t.readChronicle} <ChevronRight size={10} className="sm:w-3 sm:h-3 md:w-4 md:h-4 animate-pulse" />
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </div>
  );
};

const ContactTab = ({ lang }: { lang: string }) => {
  const t = translations[lang as keyof typeof translations];
  
  return (
    <div className="octo-flow py-12">
    <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-4 sm:space-y-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-widest">{t.contactTitle}</h2>
      <div className="flex justify-center">
        <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent" />
      </div>
      <p className="font-serif italic-serif text-base sm:text-lg md:text-xl px-4">{t.contactDesc}</p>
    </div>

    <div className="max-w-2xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 px-4 sm:px-0">
      <form className="space-y-8 sm:space-y-10 md:space-y-12" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="space-y-2 sm:space-y-3 group">
            <label className="font-display text-[9px] sm:text-[10px] text-[#8b7355] tracking-[0.4em] uppercase">{t.nameLabel}</label>
            <input 
              type="text" 
              placeholder={t.namePlaceholder}
              className="w-full bg-transparent border-b border-[#8b7355]/20 py-2 sm:py-3 font-serif text-base sm:text-lg md:text-xl text-[#f1e4d1] focus:border-[#f1e4d1] outline-none transition-all duration-500 placeholder:text-[#8b7355]/30" 
            />
          </div>
          <div className="space-y-2 sm:space-y-3 group">
            <label className="font-display text-[9px] sm:text-[10px] text-[#8b7355] tracking-[0.4em] uppercase">{t.addressLabel}</label>
            <input 
              type="email" 
              placeholder={t.addressPlaceholder}
              className="w-full bg-transparent border-b border-[#8b7355]/20 py-2 sm:py-3 font-serif text-base sm:text-lg md:text-xl text-[#f1e4d1] focus:border-[#f1e4d1] outline-none transition-all duration-500 placeholder:text-[#8b7355]/30" 
            />
          </div>
        </div>
        <div className="space-y-2 sm:space-y-3 group">
          <label className="font-display text-[9px] sm:text-[10px] text-[#8b7355] tracking-[0.4em] uppercase">{t.messageLabel}</label>
          <textarea 
            placeholder={t.messagePlaceholder}
            className="w-full bg-transparent border-b border-[#8b7355]/20 py-2 sm:py-3 font-serif text-base sm:text-lg md:text-xl text-[#f1e4d1] focus:border-[#f1e4d1] outline-none h-32 sm:h-40 resize-none transition-all duration-500 placeholder:text-[#8b7355]/30" 
          />
        </div>
        <div className="text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="octo-btn group"
          >
            <div className="shimmer-sweep" />
            <span className="relative z-10">
              {t.sendButton}
            </span>
          </motion.button>
        </div>
      </form>

      <div className="octo-divider" />

      <div className="flex justify-center gap-12 sm:gap-16 md:gap-20 flex-wrap">
        {[
          { Icon: Github, label: 'GITHUB', href: 'https://github.com/cloudsmiles' },
          { Icon: Linkedin, label: 'LINKEDIN', href: '#' },
          { Icon: Twitter, label: 'TWITTER', href: '#' }
        ].map(({ Icon, label, href }, i) => (
          <a 
            key={i} 
            href={href}
            target={href !== '#' ? '_blank' : undefined}
            rel={href !== '#' ? 'noopener noreferrer' : undefined}
            className="group flex flex-col items-center gap-3 sm:gap-4 text-[#8b7355] hover:text-[#f1e4d1] transition-all"
          >
            <Icon size={24} strokeWidth={1} className="sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:scale-125 transition-transform duration-500" />
            <span className="font-display text-[7px] sm:text-[8px] md:text-[10px] tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">{label}</span>
          </a>
        ))}
      </div>
    </div>
  </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('traveler');
  const [lang, setLang] = useState(defaultLang);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang as keyof typeof translations];

  const tabs = [
    { id: 'traveler', label: lang === 'zh' ? translations.zh.traveler : translations.en.traveler, icon: User },
    { id: 'skills', label: lang === 'zh' ? translations.zh.arsenal : translations.en.arsenal, icon: Sword },
    { id: 'projects', label: lang === 'zh' ? translations.zh.chronicles : translations.en.chronicles, icon: Scroll },
    { id: 'contact', label: lang === 'zh' ? translations.zh.message : translations.en.message, icon: Feather },
  ];

  const langLabels = {
    zh: '中文',
    en: 'EN',
  };

  return (
    <div className="octo-container">
      <div className="vignette" />
      <div className="parchment" />
      <div className="refractive-light" />
      <TyndallEffect />
      <Sparkles />
      <div className="noise" />
      <div className="tilt-shift-top" />
      <div className="tilt-shift-bottom" />
      <div className="particles" />

      {/* Corner Ornaments */}
      <div className="corner-ornament corner-tl m-4 sm:m-6 md:m-8 lg:m-10" />
      <div className="corner-ornament corner-tr m-4 sm:m-6 md:m-8 lg:m-10" />
      <div className="corner-ornament corner-bl m-4 sm:m-6 md:m-8 lg:m-10" />
      <div className="corner-ornament corner-br m-4 sm:m-6 md:m-8 lg:m-10" />
      
      {/* Header / Tabs */}
      <header className="relative z-[60] mb-20 md:mb-40">
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col gap-8 px-0">
          {/* Tab Navigation */}
          <div className="flex gap-8 lg:gap-12 justify-center">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ y: -5 }}
                whileTap={{ y: 2, scale: 0.98 }}
                className={`octo-tab group ${activeTab === tab.id ? 'octo-tab-active' : ''}`}
              >
                <span className="relative z-10">{tab.label}</span>
                <div className="absolute inset-0 bg-[#d4af37]/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
              </motion.button>
            ))}
          </div>
          
          {/* Language Switcher */}
          <motion.button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="octo-btn px-8 py-3 flex items-center gap-3 mx-auto"
          >
            <Globe size={18} strokeWidth={1.5} />
            <span>{langLabels[lang as keyof typeof langLabels]}</span>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden relative">
          {/* Top Bar with Hamburger and Language Icon */}
          <div className="flex justify-between items-center px-4">
            {/* Hamburger Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-[#d4af37] hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>

            {/* Language Switcher Icon */}
            <motion.button
              onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-[#d4af37] hover:text-white transition-colors relative"
            >
              <Globe size={24} strokeWidth={1.5} />
              <span className="absolute -bottom-1 -right-1 text-[10px] font-display font-bold text-white bg-[#d4af37] rounded-sm px-1">
                {lang === 'zh' ? '中' : 'E'}
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#2d241a]/95 backdrop-blur-sm border-t border-[#d4af37]/20 overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsMobileMenuOpen(false);
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full text-left px-6 py-4 flex items-center gap-4 transition-all ${
                        activeTab === tab.id
                          ? 'text-white bg-[#d4af37]/10 border-l-4 border-[#d4af37]'
                          : 'text-[#d4c4a8] border-l-4 border-transparent hover:bg-[#d4af37]/5'
                      }`}
                    >
                      <tab.icon 
                        size={20} 
                        strokeWidth={1.5} 
                        className={activeTab === tab.id ? 'text-[#d4af37]' : 'text-[#8b7355]'} 
                      />
                      <span className="font-display text-sm tracking-widest uppercase">{tab.label}</span>
                      {activeTab === tab.id && (
                        <ChevronRight size={16} className="ml-auto text-[#d4af37]" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 80, filter: 'blur(30px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -80, filter: 'blur(30px)' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeTab === 'traveler' && <TravelerTab lang={lang} />}
            {activeTab === 'skills' && <SkillsTab lang={lang} />}
            {activeTab === 'projects' && <ProjectsTab lang={lang} />}
            {activeTab === 'contact' && <ContactTab lang={lang} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Info */}
      <footer className="relative z-10 mt-40 text-center space-y-8 opacity-40 hover:opacity-100 transition-opacity duration-1000">
        <div className="flex justify-center items-center gap-6">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
          <div className="font-display text-[12px] tracking-[0.6em] text-[#d4af37] drop-shadow-[0_0_10px_#d4af37]">
            {t.footer}
          </div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
        </div>
        <div className="flex justify-center gap-4">
          <div className="w-2 h-2 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
          <div className="w-2 h-2 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
          <div className="w-2 h-2 bg-[#d4af37] rotate-45 shadow-[0_0_10px_#d4af37]" />
        </div>
      </footer>
    </div>
  );
}