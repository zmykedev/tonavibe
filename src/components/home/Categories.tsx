import { Link } from 'react-router-dom'
import { Card } from '@/components/ui/card'
import { categories } from '@/data/products'
import { useLangStore } from '@/stores/langStore'

export default function Categories() {
  const { lang, t } = useLangStore()

  const items = categories.filter((c) => c.id !== 'all')

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">
        {t('categories.title')}
      </h2>

      {/* Mobile: horizontal scroll / Desktop: centered grid */}
      <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
        {items.map((cat) => (
          <Link
            key={cat.id}
            to={`/menu?category=${cat.id}`}
            className="no-underline snap-start"
          >
            <Card className="flex-shrink-0 w-36 sm:w-auto p-4 sm:p-6 text-center hover:shadow-md hover:border-primary/30 active:scale-95 transition-all cursor-pointer">
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{cat.emoji}</div>
              <div className="font-semibold text-xs sm:text-sm whitespace-nowrap">{cat.label[lang]}</div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
