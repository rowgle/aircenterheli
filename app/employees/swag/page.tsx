"use client"

import { HighlightText } from "@/components/highlight-text";
import { useState } from "react"
import Image from "next/image"
import { ShoppingBag, X, Minus, Plus, ChevronRight } from "lucide-react"

type Product = {
  id: number
  name: string
  price: number
  image: string
  category: "Apparel" | "Patches" | "Stickers" | "Gear"
  description?: string
}

type CartItem = Product & { quantity: number; size: string }

const products: Product[] = [
  {
    id: 1,
    name: "Year of the Dragon",
    price: 30,
    image: "/images/swagtest2.png",
    category: "Apparel",
    description: "Next Level tri-blend tee featuring our Crew Recovery, Year of the Dragon design on black.",
  },
  {
    id: 2,
    name: "Africa Program",
    price: 30,
    image: "/images/swagtest3.png",
    category: "Apparel",
    description: "Next Level tri-blend featuring our NEW Africa design on black.",
  },
  {
    id: 3,
    name: "HELIX PTERON",
    price: 10,
    image: "/images/achipatch.jpg",
    category: "Patches",
    description: "PVC Original contract patch design.",
  },
  {
    id: 4,
    name: "SPACE X DRAGON",
    price: 10,
    image: "/images/dragonpatch.jpg",
    category: "Patches",
    description: "PVC for Space X Dragon Mission.",
  },
  {
    id: 5,
    name: "Gear Box Maintainer",
    price: 30,
    image: "/images/swagtest6.png",
    category: "Apparel",
    description: "Next Level tri-blend featuring our maintainer with a 225 main gear box design on black.",
  },
  {
    id: 6,
    name: "Africa Program 2.0",
    price: 30,
    image: "/images/swagtest7.png",
    category: "Apparel",
    description: "Next Level tri-blend featuring our Africa 2.0 design on black.",
  },
  {
    id: 7,
    name: "Raptor Copter",
    price: 30,
    image: "/images/swagtest8.png",
    category: "Apparel",
    description: "Next Level tri-blend featuring our 412 Raptor design on black.",
  },
  {
    id: 8,
    name: "Capsule Ship",
    price: 30,
    image: "/images/swagtest9.png",
    category: "Apparel",
    description: "Next Level tri-blend featuring our SpaceX capsule recovery on black.",
  },
]

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
const categories = ["All", "Apparel", "Patches", "Stickers", "Gear"] as const

export default function SwagPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [shippingMethod, setShippingMethod] = useState<"pickup" | "shipping">("pickup")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState("M")
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All")

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.category === activeCategory)

  const addToCart = (product: Product, size: string = "M") => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.size === size)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1, size }]
    })
    setIsCartOpen(true)
    setSelectedProduct(null)
    setSelectedSize("M")
  }

  const updateQuantity = (id: number, size: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)))
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id && item.size === size ? { ...item, quantity } : item
        )
      )
    }
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logoblack.png"
              alt="Air Center Helicopters"
              width={140}
              height={36}
              className="h-9 w-auto"
            />
            <div className="hidden h-5 w-px bg-black/15 sm:block" />
            <p className="hidden text-sm tracking-wide text-black/50 sm:block">Employee Store</p>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 text-sm font-medium transition hover:text-black/60"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative border-b border-black/10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/achipatch.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/70">Internal Store</p>
          <h1 className="font-heading text-4xl font-black tracking-tight text-white md:text-6xl">
            <HighlightText>COMPANY SWAG</HighlightText>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Official Air Center Helicopters apparel. Made to order for employees and immediate family.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-black text-white"
                  : "bg-black/[0.04] text-black/60 hover:bg-black/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-black/50">{filtered.length} items</p>
          <p className="text-xs uppercase tracking-widest text-black/40">Made to Order</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setSelectedProduct(product)
                setSelectedSize("M")
              }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-black/[0.03]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/5" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40">{product.category}</p>
                  <h3 className="mt-0.5 font-medium">{product.name}</h3>
                  <p className="mt-0.5 text-sm text-black/50">${product.price}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    addToCart(product, "M")
                  }}
                  className="shrink-0 rounded-full border border-black/15 px-3 py-1.5 text-xs font-medium transition hover:bg-black hover:text-white"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Disclaimer */}
      <div className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 md:p-8">
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest">Employee Store Terms</h4>
          <div className="space-y-3 text-sm leading-relaxed text-black/60">
            <p>
              All designs, logos, and branding materials are the exclusive intellectual property of Air Center Helicopters.
            </p>
            <p>
              Access is restricted to current employees and their immediate family members. By placing an order, you confirm you are an authorized user of this internal store.
            </p>
            <p>
              All products are made to order. Production and fulfillment times may vary. Headquarters pickup is free when available. Shipping limited to CONUS only.
            </p>
            <p>
              Air Center Helicopters reserves the right to modify availability, pricing, and access at any time. This store is an internal employee benefit and is not for public or commercial use.
            </p>
            <p>
              For questions or updates on your order, email companystore@achi-tx.com and someone from the team will get back to you within 48 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Signature + Social */}
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 pb-10">
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/aircenterheli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/50 hover:text-black transition-colors"
            aria-label="X"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/aircenterhelicopters/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black/50 hover:text-black transition-colors"
            aria-label="Instagram"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>

        <Image
          src="/images/usa-achi-logo.png"
          alt="Air Center Helicopters"
          width={280}
          height={80}
          className="h-auto w-full max-w-[220px] object-contain"
        />
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedProduct(null)} />
          <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-black/5"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="relative aspect-square bg-black/[0.03]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-xs uppercase tracking-widest text-black/40">{selectedProduct.category}</p>
                <h3 className="mt-2 font-heading text-3xl font-black tracking-tight">{selectedProduct.name}</h3>
                <p className="mt-3 text-2xl font-medium">${selectedProduct.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-black/60">
                  {selectedProduct.description}
                </p>

                <div className="mt-8">
                  <label className="mb-2 block text-sm font-medium">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`h-10 min-w-10 rounded-full border px-3 text-sm transition ${
                          selectedSize === size
                            ? "border-black bg-black text-white"
                            : "border-black/15 hover:border-black/40"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => addToCart(selectedProduct, selectedSize)}
                  className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 text-sm font-medium text-white transition hover:bg-black/90"
                >
                  Add to Cart — {selectedSize}
                  <ChevronRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-black/40">Made to order</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsCartOpen(false)} />
          <div className="relative flex h-full w-full max-w-md flex-col bg-white">
            <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
              <h3 className="text-lg font-semibold">Cart</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-black/50 hover:text-black">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="mb-3 h-8 w-8 text-black/20" />
                  <p className="text-sm text-black/40">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-black/[0.03]">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="text-sm font-medium">{item.name}</h4>
                            <p className="mt-0.5 text-xs text-black/50">Size {item.size}</p>
                          </div>
                          <p className="text-sm">${item.price}</p>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-black/15"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="border-t border-black/10 px-6 py-6 space-y-5">
                <div>
                  <p className="mb-3 text-sm font-medium">Fulfillment</p>
                  <div className="space-y-2">
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 p-3 hover:bg-black/[0.02]">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "pickup"}
                        onChange={() => setShippingMethod("pickup")}
                        className="accent-black"
                      />
                      <div>
                        <p className="text-sm font-medium">Headquarters Pickup</p>
                        <p className="text-xs text-black/50">Free</p>
                      </div>
                    </label>
                    <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-black/10 p-3 hover:bg-black/[0.02]">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "shipping"}
                        onChange={() => setShippingMethod("shipping")}
                        className="accent-black"
                      />
                      <div>
                        <p className="text-sm font-medium">Ship to Address</p>
                        <p className="text-xs text-black/50">Calculated at checkout</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => {
                    localStorage.setItem("swag-cart", JSON.stringify(cart))
                    localStorage.setItem("swag-shipping", shippingMethod)
                    window.location.href = "/employees/checkout"
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 text-sm font-medium text-white transition hover:bg-black/90"
                >
                  Proceed to Checkout
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}