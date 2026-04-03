import { Plus } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatBRL } from '@/lib/utils'
import { useCartStore } from '@/stores/cartStore'
import { useLangStore } from '@/stores/langStore'
import type { Product } from '@/data/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)
  const { lang, t } = useLangStore()

  return (
    <Card className="group hover:shadow-lg hover:border-primary/20 active:scale-[0.98] transition-all overflow-hidden flex flex-col">
      {/* Image placeholder with emoji */}
      <div className="h-28 sm:h-36 md:h-40 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center relative">
        <span className="text-4xl sm:text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </span>
        {product.popular && (
          <Badge variant="accent" className="absolute top-2 right-2 sm:top-3 sm:right-3 text-[10px] sm:text-xs">
            {t('menu.popular')}
          </Badge>
        )}
      </div>

      <CardContent className="p-3 sm:p-4 flex-1">
        <h3 className="font-semibold text-sm sm:text-base mb-0.5 sm:mb-1 leading-tight truncate">
          {product.name[lang]}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2 sm:mb-3 leading-relaxed hidden sm:block">
          {product.description[lang]}
        </p>
        <div className="text-base sm:text-lg font-bold text-primary">{formatBRL(product.price)}</div>
      </CardContent>

      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button
          onClick={() => addItem(product)}
          className="w-full active:scale-95 transition-transform"
          size="sm"
        >
          <Plus className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">{t('menu.add')}</span>
          <span className="sm:hidden">+</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
