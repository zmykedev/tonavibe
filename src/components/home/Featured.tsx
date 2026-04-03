import { products } from '@/data/products'
import { useLangStore } from '@/stores/langStore'
import ProductCard from '@/components/products/ProductCard'

export default function Featured() {
  const { t } = useLangStore()
  const featured = products.filter((p) => p.popular).slice(0, 6)

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">{t('featured.title')}</h2>
        <p className="text-sm sm:text-base text-muted-foreground">{t('featured.subtitle')}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
