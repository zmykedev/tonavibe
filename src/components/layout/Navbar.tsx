import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCartStore } from '@/stores/cartStore'
import { useLangStore } from '@/stores/langStore'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const totalItems = useCartStore((s) => s.totalItems)
  const { lang, setLang, t } = useLangStore()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/menu', label: t('nav.menu') },
  ]

  const isActive = (path: string) => location.pathname === path
  const count = totalItems()

  return (
    <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 text-lg sm:text-xl font-bold text-foreground no-underline shrink-0">
          <span className="text-xl sm:text-2xl">🍹</span>
          <span>
            Tona<span className="text-primary">Vibe</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors no-underline relative py-1 ${
                isActive(link.to)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Language toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLang(lang === 'pt' ? 'es' : 'pt')}
            className="text-xs font-bold px-2 sm:px-3 h-9"
          >
            {lang === 'pt' ? '🇧🇷 PT' : '🇪🇸 ES'}
          </Button>

          {/* Cart */}
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative h-9 w-9 sm:h-10 sm:w-10">
              <ShoppingCart className="h-5 w-5" />
              {count > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 min-w-5 flex items-center justify-center px-1 py-0 text-[10px]">
                  {count}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu overlay + drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-14 bg-black/30 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-14 left-0 right-0 z-50 md:hidden border-t bg-card shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center py-3 px-4 rounded-xl text-base font-medium no-underline transition-colors ${
                    isActive(link.to)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground active:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium no-underline transition-colors ${
                  isActive('/cart')
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground active:bg-muted'
                }`}
              >
                {t('nav.cart')}
                {count > 0 && (
                  <Badge className="ml-2">{count} {t('cart.items')}</Badge>
                )}
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
