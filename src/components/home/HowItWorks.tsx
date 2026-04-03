import { ClipboardList, ShoppingCart, MessageCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useLangStore } from '@/stores/langStore'

const steps = [
  { icon: ClipboardList, titleKey: 'how.step1.title' as const, descKey: 'how.step1.desc' as const, color: 'text-primary', bg: 'bg-primary/10' },
  { icon: ShoppingCart, titleKey: 'how.step2.title' as const, descKey: 'how.step2.desc' as const, color: 'text-accent', bg: 'bg-accent/10' },
  { icon: MessageCircle, titleKey: 'how.step3.title' as const, descKey: 'how.step3.desc' as const, color: 'text-secondary', bg: 'bg-secondary/10' },
]

export default function HowItWorks() {
  const { t } = useLangStore()

  return (
    <section className="bg-muted/50 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10">
          {t('how.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step, i) => (
            <Card key={i} className="p-5 sm:p-6 text-center relative">
              <div className="absolute -top-3 -left-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full gradient-tropical text-white flex items-center justify-center text-xs sm:text-sm font-bold shadow-md">
                {i + 1}
              </div>
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${step.bg} flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                <step.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${step.color}`} />
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{t(step.titleKey)}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
