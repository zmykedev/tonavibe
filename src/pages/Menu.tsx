import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/products/ProductCard'
import { products, categories } from '@/data/products'
import { useLangStore } from '@/stores/langStore'

export default function Menu() {
  const { lang, t } = useLangStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    let result = products

    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter(
        (p) =>
          p.name[lang].toLowerCase().includes(q) ||
          p.description[lang].toLowerCase().includes(q)
      )
    }

    return result
  }, [activeCategory, search, lang])

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat)
    if (cat === 'all') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat })
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{t('menu.title')}</h1>

      {/* Search */}
      <div className="relative mb-4 sm:mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder={t('menu.search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10 h-11 sm:h-10"
        />
      </div>

      {/* Category tabs - horizontal scroll on mobile */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4 sm:mb-6 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => handleCategoryChange(cat.id)}
            className="flex-shrink-0 h-9 px-3 sm:px-4 text-xs sm:text-sm active:scale-95 transition-transform"
          >
            <span className="mr-1">{cat.emoji}</span>
            {cat.label[lang]}
          </Button>
        ))}
      </div>

      {/* Product grid - 2 col mobile, 2 col tablet, 3 col desktop */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 sm:py-16">
          <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 block">🔍</span>
          <p className="text-sm sm:text-base text-muted-foreground">
            {lang === 'pt' ? 'Nenhum drink encontrado' : 'Ningún drink encontrado'}
          </p>
        </div>
      )}
    </main>
  )
}
