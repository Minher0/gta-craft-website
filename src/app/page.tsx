'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { useLanguage } from '@/components/language-provider'

// Feature data - will use translations
const getFeatures = (t: (key: string) => string) => [
  {
    icon: '🚗',
    title: t('vehicles'),
    description: t('vehiclesDesc'),
    color: '#4CAF50',
  },
  {
    icon: '🔫',
    title: t('weapons'),
    description: t('weaponsDesc'),
    color: '#81C784',
  },
  {
    icon: '🏙️',
    title: t('city'),
    description: t('cityDesc'),
    color: '#00E676',
  },
]

// Screenshots data - will use translations
const getScreenshots = (t: (key: string) => string) => [
  { src: '/screenshot_1.jpeg', alt: 'GTA Craft - Screenshot 1', title: t('nightCity') },
  { src: '/screenshot_2.png', alt: 'GTA Craft - Screenshot 2', title: t('vehiclesTitle') },
  { src: '/screenshot_3.jpeg', alt: 'GTA Craft - Screenshot 3', title: t('action') },
  { src: '/screenshot_4.jpeg', alt: 'GTA Craft - Screenshot 4', title: t('exploration') },
  { src: '/screenshot_5.jpeg', alt: 'GTA Craft - Screenshot 5', title: t('race') },
  { src: '/screenshot_6.jpeg', alt: 'GTA Craft - Screenshot 6', title: t('atmosphere') },
  { src: '/screenshot_7.jpeg', alt: 'GTA Craft - Screenshot 7', title: t('landscape') },
  { src: '/screenshot_8.jpeg', alt: 'GTA Craft - Screenshot 8', title: t('urban') },
  { src: '/screenshot_9.jpeg', alt: 'GTA Craft - Screenshot 9', title: t('adventure') },
  { src: '/screenshot_10.jpeg', alt: 'GTA Craft - Screenshot 10', title: t('openWorld') },
]

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const { t } = useLanguage()
  
  const features = getFeatures(t)
  const screenshots = getScreenshots(t)

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Language Toggle */}
      <LanguageToggle />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gta_craft_banner_new.png"
            alt="GTA Craft Banner"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30 z-10" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 animated-gradient opacity-50 z-5" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-6 inline-block float-animation">
            <Image
              src="/gta_craft_icon.png"
              alt="GTA Craft Logo"
              width={120}
              height={120}
              className="mx-auto drop-shadow-[0_0_30px_rgba(76,175,80,0.5)] rounded-xl"
            />
          </div>

          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-wider">
            <span className="gradient-text neon-text-green glitch-hover">
              GTA CRAFT
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-8 font-light tracking-wide">
            <span className="text-[#4CAF50]">GTA V</span> {t('tagline').replace('GTA V ', '')}
          </p>

          {/* Neon Border Box */}
          <div className="inline-block p-8 neon-border-animated rounded-xl bg-[var(--bg-glass)] backdrop-blur-sm mb-10">
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
              {t('description')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://modrinth.com/modpack/gta-craft"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-neon px-8 py-4 rounded-lg text-lg font-bold uppercase tracking-wider download-btn flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t('download')}
            </a>
            <button
              onClick={scrollToFeatures}
              className="btn-neon px-8 py-4 rounded-lg text-lg font-bold uppercase tracking-wider flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              {t('viewFeatures')}
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-[var(--text-muted)] uppercase tracking-widest">{t('scroll')}</span>
            <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Neon Line Separator */}
      <div className="neon-line w-full" />

      {/* Features Section */}
      <section id="features" className="py-24 px-4 animated-gradient">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-underline text-[var(--text-primary)]">{t('features')}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg mt-8">{t('featuresSubtitle')}</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`card-neon rounded-xl p-6 text-center fade-in-up delay-${(index + 1) * 100}`}
                style={{ animationFillMode: 'both' }}
              >
                {/* Icon */}
                <div
                  className="icon-container w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl"
                  style={{ borderColor: `${feature.color}50` }}
                >
                  <span className="icon-glow" style={{ color: feature.color }}>
                    {feature.icon}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-300"
                  style={{ color: feature.color }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div
                  className="w-12 h-0.5 mx-auto mt-4 rounded-full"
                  style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neon Line Separator */}
      <div className="neon-line w-full" />

      {/* Screenshots Section */}
      <section className="py-24 px-4 bg-[var(--bg-main)] relative">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-underline text-[var(--text-primary)]">{t('screenshots')}</span>
            </h2>
            <p className="text-[var(--text-muted)] text-lg mt-8">{t('screenshotsSubtitle')}</p>
          </div>

          {/* Screenshots Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {screenshots.map((screenshot, index) => (
              <div
                key={screenshot.alt}
                className="relative group cursor-pointer"
                onClick={() => setLightboxImage(screenshot.src)}
              >
                {/* Image Container */}
                <div className="image-lightbox rounded-lg overflow-hidden border border-[var(--border-color)] relative aspect-square">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={350}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-xs font-bold text-white text-center">{screenshot.title}</h3>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-3 h-3 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Decorative Border Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4CAF50] via-[#81C784] to-[#00E676] rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neon Line Separator */}
      <div className="neon-line w-full" />

      {/* Download Section */}
      <section className="py-24 px-4 animated-gradient relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4CAF50] rounded-full filter blur-[150px] opacity-20" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#81C784] rounded-full filter blur-[150px] opacity-20" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{t('readyToPlay')}</span>
          </h2>

          <p className="text-[var(--text-muted)] text-lg mb-8 max-w-2xl mx-auto">
            {t('downloadSubtitle')}
          </p>

          {/* Download Button */}
          <a
            href="https://modrinth.com/modpack/gta-craft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] px-12 py-5 rounded-xl text-xl font-bold text-white uppercase tracking-wider download-btn hover:scale-105 transition-transform"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
            {t('downloadOnModrinth')}
          </a>

          {/* Requirements */}
          <div className="mt-12 inline-block p-6 rounded-xl bg-[var(--bg-glass)] backdrop-blur-sm border border-[var(--border-color)]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-[#FF9800]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('requirements')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[#4CAF50]">⬡</span>
                <span className="text-[var(--text-secondary)]">{t('minecraftVersion')}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[#81C784]">⬡</span>
                <span className="text-[var(--text-secondary)]">{t('fabricLoader')}</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-[#00E676]">⬡</span>
                <span className="text-[var(--text-secondary)]">{t('javaVersion')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neon Line Separator */}
      <div className="neon-line w-full" />

      {/* Footer */}
      <footer className="py-12 px-4 bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Credit */}
            <div className="flex items-center gap-4">
              <Image
                src="/gta_craft_icon.png"
                alt="GTA Craft Logo"
                width={40}
                height={40}
                className="opacity-80 rounded-lg"
              />
              <div>
                <h3 className="font-bold text-[var(--text-primary)]">GTA CRAFT</h3>
                <p className="text-sm text-[var(--text-muted)]">{t('createdBy')} <span className="text-[#4CAF50]">Minhero</span></p>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://modrinth.com/modpack/gta-craft"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-[#4CAF50] transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Modrinth
              </a>
              <a
                href="https://buymeacoffee.com/minhero"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium hover:from-amber-400 hover:to-orange-400 transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.504-.904-.075-.39-.46-.646-.806-.606-.345.04-.69.083-1.036.128-1.094.129-2.2.175-3.3.12-.487-.024-.97-.073-1.45-.15-.18-.029-.411-.074-.547-.167-.124-.086-.04-.228.07-.29.137-.078.31-.106.462-.14.29-.064.58-.1.876-.122.69-.052 1.381-.075 2.073-.094 1.08-.017 2.16.025 3.23.154.245.033.49.072.733.12.208.04.447.083.59.236.133.14.163.345.147.532-.03.36-.07.72-.112 1.078-.024.214-.052.428-.082.641-.05.346-.1.691-.152 1.037l-.082.554c-.03.203-.048.42-.136.608-.124.265-.404.39-.673.457-.378.094-.758.174-1.14.246-.76.14-1.527.25-2.297.33-.65.067-1.3.11-1.952.132-.742.024-1.485.033-2.228.018-.542-.01-1.083-.028-1.624-.064-.39-.024-.78-.058-1.168-.103-.27-.03-.577-.065-.796-.227-.185-.136-.282-.36-.27-.584.009-.166.067-.327.167-.462.157-.21.4-.33.644-.387.3-.066.607-.09.912-.123.823-.09 1.65-.163 2.473-.244 1.232-.12 2.464-.265 3.68-.503.24-.048.48-.099.717-.155.213-.05.46-.105.604-.27.126-.14.142-.33.116-.51-.058-.393-.47-.63-.846-.547-.33.07-.66.134-.993.19-1.32.221-2.656.372-3.993.48-.572.047-1.145.084-1.718.113-.39.017-.78.028-1.17.033-.29.004-.59.006-.88-.03-.176-.021-.37-.05-.496-.173-.11-.11-.14-.27-.123-.424.024-.226.137-.437.33-.555.22-.132.478-.18.73-.218.5-.07 1.004-.115 1.51-.152.866-.06 1.734-.1 2.6-.133.846-.023 1.693-.034 2.54-.033.41 0 .822.004 1.233.012.322.007.644.017.965.03.232.01.464.02.695.033.183.01.38.014.527.126.138.106.207.277.226.448.038.34.06.68.086 1.02l.124 1.624c.03.39.055.78.075 1.17.012.23.02.46.025.69.003.19.004.38-.015.57-.04.407-.215.793-.562 1.026-.307.206-.68.283-1.045.325-.5.055-1.002.08-1.504.102-1.164.048-2.33.05-3.494.022-.86-.022-1.718-.065-2.575-.125-.522-.035-1.044-.076-1.564-.126-.39-.038-.78-.08-1.168-.133-.25-.034-.5-.072-.748-.117-.252-.046-.505-.098-.754-.16-.26-.065-.52-.136-.768-.23-.217-.083-.43-.182-.613-.322-.195-.15-.354-.34-.454-.566-.126-.282-.17-.595-.19-.903-.024-.38-.035-.762-.033-1.144.003-.46.016-.92.04-1.38.025-.51.06-1.02.103-1.53.032-.35.066-.7.102-1.05.023-.22.046-.44.07-.66.03-.27.06-.54.087-.81.024-.24.046-.48.065-.72.014-.18.026-.36.035-.54.007-.13.012-.26.014-.39.002-.09.003-.18 0-.27-.003-.1-.01-.2-.023-.3-.027-.2-.084-.4-.202-.564-.166-.23-.43-.358-.694-.43-.37-.098-.752-.13-1.132-.15-.47-.02-.94-.01-1.41.02-.35.023-.7.062-1.04.12-.23.04-.46.09-.68.16-.22.08-.43.18-.61.32-.19.15-.34.34-.44.56-.1.22-.15.46-.17.7-.03.35-.01.7.02 1.05.04.41.1.82.17 1.23.08.41.17.82.27 1.23.08.31.16.62.25.93.06.22.13.44.2.66.07.22.15.43.24.64.08.19.18.38.31.54.16.2.37.36.6.46.26.11.55.16.83.17.38.01.75-.03 1.12-.08l.37-.05c.18-.02.36-.05.54-.08.3-.04.6-.1.9-.15.46-.08.92-.17 1.38-.26.8-.16 1.6-.33 2.39-.52.3-.07.6-.15.9-.23.27-.07.53-.15.79-.24.2-.07.4-.15.58-.26.12-.08.23-.17.32-.28.07-.1.12-.21.14-.33.02-.14 0-.28-.04-.42-.06-.19-.18-.35-.34-.47-.2-.15-.44-.24-.68-.3-.4-.1-.81-.15-1.22-.18-.57-.04-1.14-.04-1.71-.02-.45.02-.9.05-1.35.1-.32.03-.64.07-.95.13-.24.05-.48.11-.7.2-.17.07-.33.16-.46.28-.1.1-.18.21-.23.34-.04.12-.05.25-.04.38.02.19.1.36.22.5.14.17.33.3.53.4.31.15.65.25 1 .32.52.1 1.05.14 1.58.16.73.02 1.47-.01 2.2-.09.4-.04.81-.1 1.21-.18.28-.05.56-.12.83-.2.19-.06.38-.13.56-.22.12-.06.23-.13.33-.22.07-.06.13-.13.17-.21.04-.09.05-.19.02-.29-.05-.16-.18-.28-.32-.37-.22-.13-.47-.2-.72-.26-.43-.1-.87-.16-1.31-.2-.65-.05-1.3-.05-1.95-.02-.42.02-.85.06-1.27.12-.27.04-.54.09-.8.17-.18.05-.36.12-.52.21-.1.06-.2.13-.28.22-.05.06-.1.13-.12.21-.02.09-.01.18.02.26.05.13.16.23.28.3.2.11.42.18.64.23.4.09.81.13 1.22.15.6.02 1.2 0 1.8-.05.36-.03.73-.08 1.09-.15.22-.04.44-.1.65-.17.12-.04.25-.09.36-.15.06-.04.12-.08.17-.13.03-.03.06-.07.08-.12.01-.03.02-.07.01-.11 0-.04-.02-.07-.04-.1-.04-.05-.1-.09-.15-.12-.13-.07-.28-.11-.42-.15-.31-.08-.63-.12-.95-.15-.5-.04-1-.05-1.5-.03-.35.02-.7.05-1.04.11-.2.04-.4.09-.58.17-.1.05-.2.1-.28.18-.04.04-.08.08-.1.13-.01.03-.02.07-.01.11 0 .04.02.07.04.1.05.06.12.1.19.13.14.06.3.1.45.12.32.05.65.06.98.06.45 0 .9-.03 1.35-.08.25-.03.5-.07.74-.13.12-.03.25-.07.36-.12.04-.02.09-.05.12-.08.01-.01.03-.03.03-.05 0-.02 0-.04-.01-.06-.02-.03-.05-.05-.08-.07-.09-.05-.2-.08-.3-.1-.23-.05-.47-.07-.71-.08-.36-.02-.72-.01-1.08.02-.19.01-.38.04-.57.07-.08.01-.16.03-.24.05-.03 0-.06.01-.08.02-.01 0-.02 0-.02.01l.01.02c.02.02.05.03.08.04.1.03.2.05.3.06.24.03.49.04.73.04.27 0 .54-.02.8-.05.11-.01.21-.03.32-.05.03 0 .05-.01.08-.02.01 0 .02 0 .02-.01-.01-.02-.04-.02-.06-.02z"/>
                </svg>
                <span className="hidden sm:inline">Support</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-[var(--text-muted)]">
              © {new Date().getFullYear()} GTA Craft. {t('allRightsReserved')}
            </p>
          </div>

          {/* Decorative Bottom Line */}
          <div className="mt-8 h-0.5 bg-gradient-to-r from-transparent via-[#4CAF50] to-transparent opacity-30" />
        </div>
      </footer>

      {/* Buy Me a Coffee Floating Button */}
      <a
        href="https://buymeacoffee.com/minhero"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold shadow-lg hover:shadow-amber-500/30 transition-all hover:scale-105 group"
      >
        <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.504-.904-.075-.39-.46-.646-.806-.606-.345.04-.69.083-1.036.128-1.094.129-2.2.175-3.3.12-.487-.024-.97-.073-1.45-.15-.18-.029-.411-.074-.547-.167-.124-.086-.04-.228.07-.29.137-.078.31-.106.462-.14.29-.064.58-.1.876-.122.69-.052 1.381-.075 2.073-.094 1.08-.017 2.16.025 3.23.154.245.033.49.072.733.12.208.04.447.083.59.236.133.14.163.345.147.532-.03.36-.07.72-.112 1.078-.024.214-.052.428-.082.641-.05.346-.1.691-.152 1.037l-.082.554c-.03.203-.048.42-.136.608-.124.265-.404.39-.673.457-.378.094-.758.174-1.14.246-.76.14-1.527.25-2.297.33-.65.067-1.3.11-1.952.132-.742.024-1.485.033-2.228.018-.542-.01-1.083-.028-1.624-.064-.39-.024-.78-.058-1.168-.103-.27-.03-.577-.065-.796-.227-.185-.136-.282-.36-.27-.584.009-.166.067-.327.167-.462.157-.21.4-.33.644-.387.3-.066.607-.09.912-.123.823-.09 1.65-.163 2.473-.244 1.232-.12 2.464-.265 3.68-.503.24-.048.48-.099.717-.155.213-.05.46-.105.604-.27.126-.14.142-.33.116-.51-.058-.393-.47-.63-.846-.547-.33.07-.66.134-.993.19-1.32.221-2.656.372-3.993.48-.572.047-1.145.084-1.718.113-.39.017-.78.028-1.17.033-.29.004-.59.006-.88-.03-.176-.021-.37-.05-.496-.173-.11-.11-.14-.27-.123-.424.024-.226.137-.437.33-.555.22-.132.478-.18.73-.218.5-.07 1.004-.115 1.51-.152.866-.06 1.734-.1 2.6-.133.846-.023 1.693-.034 2.54-.033.41 0 .822.004 1.233.012.322.007.644.017.965.03.232.01.464.02.695.033.183.01.38.014.527.126.138.106.207.277.226.448.038.34.06.68.086 1.02l.124 1.624c.03.39.055.78.075 1.17.012.23.02.46.025.69.003.19.004.38-.015.57-.04.407-.215.793-.562 1.026-.307.206-.68.283-1.045.325-.5.055-1.002.08-1.504.102-1.164.048-2.33.05-3.494.022-.86-.022-1.718-.065-2.575-.125-.522-.035-1.044-.076-1.564-.126-.39-.038-.78-.08-1.168-.133-.25-.034-.5-.072-.748-.117-.252-.046-.505-.098-.754-.16-.26-.065-.52-.136-.768-.23-.217-.083-.43-.182-.613-.322-.195-.15-.354-.34-.454-.566-.126-.282-.17-.595-.19-.903-.024-.38-.035-.762-.033-1.144.003-.46.016-.92.04-1.38.025-.51.06-1.02.103-1.53.032-.35.066-.7.102-1.05.023-.22.046-.44.07-.66.03-.27.06-.54.087-.81.024-.24.046-.48.065-.72.014-.18.026-.36.035-.54.007-.13.012-.26.014-.39.002-.09.003-.18 0-.27-.003-.1-.01-.2-.023-.3-.027-.2-.084-.4-.202-.564-.166-.23-.43-.358-.694-.43-.37-.098-.752-.13-1.132-.15-.47-.02-.94-.01-1.41.02-.35.023-.7.062-1.04.12-.23.04-.46.09-.68.16-.22.08-.43.18-.61.32-.19.15-.34.34-.44.56-.1.22-.15.46-.17.7-.03.35-.01.7.02 1.05.04.41.1.82.17 1.23.08.41.17.82.27 1.23.08.31.16.62.25.93.06.22.13.44.2.66.07.22.15.43.24.64.08.19.18.38.31.54.16.2.37.36.6.46.26.11.55.16.83.17.38.01.75-.03 1.12-.08l.37-.05c.18-.02.36-.05.54-.08.3-.04.6-.1.9-.15.46-.08.92-.17 1.38-.26.8-.16 1.6-.33 2.39-.52.3-.07.6-.15.9-.23.27-.07.53-.15.79-.24.2-.07.4-.15.58-.26.12-.08.23-.17.32-.28.07-.1.12-.21.14-.33.02-.14 0-.28-.04-.42-.06-.19-.18-.35-.34-.47-.2-.15-.44-.24-.68-.3-.4-.1-.81-.15-1.22-.18-.57-.04-1.14-.04-1.71-.02-.45.02-.9.05-1.35.1-.32.03-.64.07-.95.13-.24.05-.48.11-.7.2-.17.07-.33.16-.46.28-.1.1-.18.21-.23.34-.04.12-.05.25-.04.38.02.19.1.36.22.5.14.17.33.3.53.4.31.15.65.25 1 .32.52.1 1.05.14 1.58.16.73.02 1.47-.01 2.2-.09.4-.04.81-.1 1.21-.18.28-.05.56-.12.83-.2.19-.06.38-.13.56-.22.12-.06.23-.13.33-.22.07-.06.13-.13.17-.21.04-.09.05-.19.02-.29-.05-.16-.18-.28-.32-.37-.22-.13-.47-.2-.72-.26-.43-.1-.87-.16-1.31-.2-.65-.05-1.3-.05-1.95-.02-.42.02-.85.06-1.27.12-.27.04-.54.09-.8.17-.18.05-.36.12-.52.21-.1.06-.2.13-.28.22-.05.06-.1.13-.12.21-.02.09-.01.18.02.26.05.13.16.23.28.3.2.11.42.18.64.23.4.09.81.13 1.22.15.6.02 1.2 0 1.8-.05.36-.03.73-.08 1.09-.15.22-.04.44-.1.65-.17.12-.04.25-.09.36-.15.06-.04.12-.08.17-.13.03-.03.06-.07.08-.12.01-.03.02-.07.01-.11 0-.04-.02-.07-.04-.1-.04-.05-.1-.09-.15-.12-.13-.07-.28-.11-.42-.15-.31-.08-.63-.12-.95-.15-.5-.04-1-.05-1.5-.03-.35.02-.7.05-1.04.11-.2.04-.4.09-.58.17-.1.05-.2.1-.28.18-.04.04-.08.08-.1.13-.01.03-.02.07-.01.11 0 .04.02.07.04.1.05.06.12.1.19.13.14.06.3.1.45.12.32.05.65.06.98.06.45 0 .9-.03 1.35-.08.25-.03.5-.07.74-.13.12-.03.25-.07.36-.12.04-.02.09-.05.12-.08.01-.01.03-.03.03-.05 0-.02 0-.04-.01-.06-.02-.03-.05-.05-.08-.07-.09-.05-.2-.08-.3-.1-.23-.05-.47-.07-.71-.08-.36-.02-.72-.01-1.08.02-.19.01-.38.04-.57.07-.08.01-.16.03-.24.05-.03 0-.06.01-.08.02-.01 0-.02 0-.02.01l.01.02c.02.02.05.03.08.04.1.03.2.05.3.06.24.03.49.04.73.04.27 0 .54-.02.8-.05.11-.01.21-.03.32-.05.03 0 .05-.01.08-.02.01 0 .02 0 .02-.01-.01-.02-.04-.02-.06-.02z"/>
        </svg>
        <span className="text-sm">Support</span>
      </a>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 dark:bg-black/90 light:bg-white/90 backdrop-blur-sm p-4 lightbox-modal"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-[var(--text-primary)] hover:text-[#4CAF50] transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <Image
              src={lightboxImage}
              alt="Screenshot"
              width={1200}
              height={675}
              className="w-full h-auto rounded-xl shadow-2xl"
              style={{
                boxShadow: '0 0 60px rgba(76, 175, 80, 0.3), 0 0 100px rgba(129, 199, 132, 0.2)',
              }}
            />
          </div>
        </div>
      )}
    </main>
  )
}
