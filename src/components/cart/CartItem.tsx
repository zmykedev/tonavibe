import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatBRL } from '@/lib/utils'
import { useCartStore, type CartItem as CartItemType } from '@/stores/cartStore'
import { useLangStore } from '@/stores/langStore'

interface CartItemProps {
  item: CartItemType
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQty, removeItem } = useCartStore()
  const { lang } = useLangStore()

  return (
    <div className="flex items-start sm:items-center gap-3 sm:gap-4 py-4 border-b last:border-b-0">
      {/* Emoji */}
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
        <span className="text-2xl sm:text-3xl">{item.product.image}</span>
      </div>

      {/* Info + controls stacked on mobile */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="font-medium text-sm leading-tight">{item.product.name[lang]}</h4>
          <button
            onClick={() => removeItem(item.product.id)}
            className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer flex-shrink-0 p-1"
            aria-label="Remove"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>

        <p className="text-xs text-muted-foreground mb-2">
          {formatBRL(item.product.price)} / un.
        </p>

        {/* Qty + total row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 sm:h-8 sm:w-8"
              onClick={() => updateQty(item.product.id, item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-7 sm:w-8 text-center text-sm font-medium">{item.quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7 sm:h-8 sm:w-8"
              onClick={() => updateQty(item.product.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <span className="font-semibold text-sm text-primary">
            {formatBRL(item.product.price * item.quantity)}
          </span>
        </div>
      </div>
    </div>
  )
}
