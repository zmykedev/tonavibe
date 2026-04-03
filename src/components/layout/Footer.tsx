import { Camera, Music2 } from 'lucide-react'
import { useLangStore } from '@/stores/langStore'

export default function Footer() {
  const { t } = useLangStore()

  return (
    <footer className="bg-dark text-dark-foreground mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 text-lg sm:text-xl font-bold mb-2 sm:mb-3 justify-center sm:justify-start">
              <span className="text-xl sm:text-2xl">🍹</span>
              <span>
                Tona<span className="text-primary">Vibe</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-dark-foreground/70 max-w-xs mx-auto sm:mx-0">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Hours */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">{t('footer.hours')}</h3>
            <p className="text-xs sm:text-sm text-dark-foreground/70">{t('footer.hours.weekday')}</p>
            <p className="text-xs sm:text-sm text-dark-foreground/70">{t('footer.hours.weekend')}</p>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-sm sm:text-base mb-2 sm:mb-3">{t('footer.contact')}</h3>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-foreground/10 flex items-center justify-center hover:bg-primary/20 active:scale-90 transition-all"
              >
                <Camera className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-dark-foreground/10 flex items-center justify-center hover:bg-primary/20 active:scale-90 transition-all"
              >
                <Music2 className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-foreground/10 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-dark-foreground/50">
          &copy; {new Date().getFullYear()} TonaVibe. {t('footer.rights')}
        </div>
      </div>
    </footer>
  )
}
