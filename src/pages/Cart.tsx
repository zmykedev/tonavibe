import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowLeft, Trash2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import CartItemRow from '@/components/cart/CartItem'
import { useCartStore } from '@/stores/cartStore'
import { useLangStore } from '@/stores/langStore'
import { formatBRL } from '@/lib/utils'
import { openWhatsApp, getDeliveryFee } from '@/lib/whatsapp'

export default function Cart() {
  const { items, clearCart, totalPrice } = useCartStore()
  const { lang, t } = useLangStore()
  const [address, setAddress] = useState('')

  const subtotal = totalPrice()
  const deliveryFee = getDeliveryFee(subtotal)
  const total = subtotal + deliveryFee

  const handleCheckout = () => {
    if (items.length === 0) return
    openWhatsApp(items, address || '-', lang)
  }

  if (items.length === 0) {
    return (
      <main className="max-w-md mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10 text-muted-foreground/40" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold mb-2">{t('cart.empty')}</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-6">{t('cart.empty.desc')}</p>
        <Link to="/menu">
          <Button size="lg" className="w-full sm:w-auto">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('general.back_to_menu')}
          </Button>
        </Link>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8 pb-48 lg:pb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{t('cart.title')}</h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
            {items.length} {t('cart.items')}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearCart}
          className="text-destructive hover:text-destructive text-xs sm:text-sm"
        >
          <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1" />
          <span className="hidden sm:inline">{t('cart.clear')}</span>
          <span className="sm:hidden">Limpar</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-8">
        {/* Items */}
        <div className="lg:col-span-3">
          <Card className="p-3 sm:p-4">
            {items.map((item) => (
              <CartItemRow key={item.product.id} item={item} />
            ))}
          </Card>

          <Link
            to="/menu"
            className="inline-flex items-center gap-1 text-sm text-primary mt-3 sm:mt-4 no-underline hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('cart.continue')}
          </Link>
        </div>

        {/* Desktop summary - visible on lg+ */}
        <div className="hidden lg:block lg:col-span-2">
          <Card className="p-6 sticky top-24">
            <div className="mb-4">
              <label className="text-sm font-medium mb-1.5 block">{t('cart.address')}</label>
              <Input
                placeholder={t('cart.address.placeholder')}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('cart.subtotal')}</span>
                <span>{formatBRL(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t('cart.delivery')}</span>
                <span>{deliveryFee === 0 ? t('cart.delivery.free') : formatBRL(deliveryFee)}</span>
              </div>
              <div className="border-t pt-2 flex justify-between font-bold text-base">
                <span>{t('cart.total')}</span>
                <span className="text-primary">{formatBRL(total)}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              size="lg"
              className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {t('cart.checkout')}
            </Button>
          </Card>
        </div>
      </div>

      {/* Mobile sticky bottom bar - visible on < lg */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 z-30 lg:hidden safe-bottom">
        {/* Address input */}
        <Input
          placeholder={t('cart.address.placeholder')}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mb-3 h-10 text-sm"
        />

        {/* Total row */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xs text-muted-foreground block">{t('cart.total')}</span>
            <span className="text-lg font-bold text-primary">{formatBRL(total)}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            {deliveryFee === 0 ? t('cart.delivery.free') : `+ ${formatBRL(deliveryFee)} ${t('cart.delivery').toLowerCase()}`}
          </span>
        </div>

        {/* Checkout */}
        <Button
          onClick={handleCheckout}
          size="lg"
          className="w-full bg-[#25D366] hover:bg-[#25D366]/90 active:scale-[0.98] text-white text-base h-12"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          {t('cart.checkout')}
        </Button>
      </div>
    </main>
  )
}
