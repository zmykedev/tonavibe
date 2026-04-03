import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLangStore } from '@/stores/langStore'

export default function Hero() {
  const { t } = useLangStore()

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/10" />
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-28 lg:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6">
          <span className="text-base sm:text-lg">🍹</span>
          <span className="text-xs sm:text-sm font-medium text-primary">{t('hero.tagline')}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 leading-tight">
          {t('hero.title').split(' ').map((word, i) => (
            <span key={i}>
              {i === 0 ? (
                <span className="text-primary">{word}</span>
              ) : (
                word
              )}{' '}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
          {t('hero.subtitle')}
        </p>

        {/* CTA */}
        <Link to="/menu">
          <Button
            size="lg"
            className="gradient-tropical text-white text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl active:scale-95 hover:scale-105 transition-all"
          >
            {t('hero.cta')}
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </Link>

        {/* Decorative emojis */}
        <div className="mt-8 sm:mt-12 flex justify-center gap-3 sm:gap-4 text-2xl sm:text-4xl md:text-5xl">
          {['🍋', '🍸', '🍍', '🥥', '🌴'].map((emoji, i) => (
            <span
              key={i}
              className="animate-bounce"
              style={{ animationDelay: `${i * 0.15}s`, animationDuration: '2s' }}
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
