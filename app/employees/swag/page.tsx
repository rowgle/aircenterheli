"use client"

import { useState } from "react"
import { GeistSans } from "geist/font/sans"
import Image from "next/image"

type Product = {
  id: number
  name: string
  price: number
  image: string
  category: string
  description?: string
}

type CartItem = Product & { quantity: number }

const products: Product[] = [
  {
    id: 1,
    name: "Year of the Dragon",
    price: 30,
    image: "/images/swagtest2.png",
    category: "Apparel",
    description: "Next Level tri-blend tee featuring our Crew Recovery, Year of the Dragon design on a black.",
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
    name: "Helix Pteron",
    price: 30,
    image: "/images/swagtest4.png",
    category: "Apparel",
    description: "Next Level tri-blend featuring the HELIX PTERON hawk design on black.",
  },
  {
    id: 4,
    name: "Puppet Master",
    price: 30,
    image: "/images/swagtest5.png",
    category: "Apparel",
    description: "Reserved for our Pilots in Command.",
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
    description: "Next Level tri-blend featuring our 412 Raptor desing on black.",
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

export default function SwagPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [shippingMethod, setShippingMethod] = useState<"pickup" | "shipping">("pickup")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState("M")

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
    setSelectedProduct(null)
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCart((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      )
    }
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className={`${GeistSans.className} min-h-screen bg-white text-black`}>
      {/* Header */}
      <header className="border-b border-black/10 sticky top-0 bg-white/90 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logoblack.png"
              alt="Air Center Helicopters"
              width={140}
              height={36}
              className="h-9 w-auto"
            />
            <div className="hidden sm:block h-5 w-px bg-black/15" />
            <p className="hidden sm:block text-sm text-black/60">Employee Store</p>
          </div>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 text-sm hover:text-black/70 transition"
          >
            <span>Cart</span>
            {cart.length > 0 && (
              <span className="bg-black text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">COMPANY SWAG</h2>
          <p className="text-black/60 max-w-xl">
            Official Air Center Helicopters branded apparel and gear available exclusively for employees.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group border border-black/10 rounded-2xl overflow-hidden bg-black/[0.02] hover:bg-black/[0.04] transition cursor-pointer"
            >
              <div className="aspect-square bg-black/5 relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-black/50 mb-1">{product.category}</p>
                <h3 className="font-medium mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg">${product.price}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(product)
                    }}
                    className="text-sm bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-black/90 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Disclaimer */}
<div className="max-w-7xl mx-auto px-6 pb-16">
  <div className="border border-black/10 rounded-2xl p-6 bg-black/[0.02]">
    <h4 className="font-semibold mb-3">Employee Store Terms & Disclaimer</h4>
    <div className="text-sm text-black/60 space-y-3 leading-relaxed">
      <p>
        All designs, logos, trademarks, and branding materials displayed on this store are the exclusive intellectual property of Air Center Helicopters. No content from this store may be copied, reproduced, distributed, or used for any purpose outside of authorized employee purchases without prior written consent.
      </p>
      <p>
        Access to this store is restricted to current employees of Air Center Helicopters and their immediate family members. By placing an order, you acknowledge that you are an authorized user of this internal store.
      </p>
      <p>
        All products are made to order. Production and fulfillment times may vary. Air Center Helicopters does not guarantee specific delivery or pickup dates. Shipping costs, when applicable, will be calculated at checkout, and Headquarters pickup is offered as a free option when available.
      </p>
      <p>
        Air Center Helicopters reserves the right to modify product availability, pricing, and store access at any time. This store is provided as an internal employee benefit and is not intended for public or commercial use.
      </p>
    </div>
  </div>
</div>

{/* Bottom Signature */}
<div className="max-w-7xl mx-auto px-6 pb-10 flex justify-end">
  <Image
    src="/images/harpsig.png"
    alt="Signature"
    width={40}
    height={40}
    className="opacity-100 hover:opacity-100 transition"
  />
</div>

      {/* Product Detail Modal */}
{selectedProduct && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setSelectedProduct(null)}
    />
    <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl">
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center"
      >
        ✕
      </button>

      <div className="grid md:grid-cols-2">
        {/* Zoomable Image */}
        <div className="relative aspect-square bg-black/5 overflow-hidden group">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-150 origin-center"
          />
          <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition">
            Hover to zoom
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <p className="text-sm text-black/50 mb-2">{selectedProduct.category}</p>
          <h3 className="text-2xl font-bold mb-3">{selectedProduct.name}</h3>
          <p className="text-2xl font-semibold mb-4">${selectedProduct.price}</p>

          <p className="text-black/60 mb-6 leading-relaxed">
            {selectedProduct.description || "Official Air Center Helicopters merchandise."}
          </p>

          {/* Size Selector */}
          <div className="mb-8">
            <label className="block text-sm font-medium mb-2">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 bg-white"
            >
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
          </div>

          <button
            onClick={() => addToCart(selectedProduct)}
            className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-black/90 transition"
          >
            Add to Cart — Size {selectedSize}
          </button>
        </div>
      </div>
    </div>
  </div>
)}

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white border-l border-black/10 h-full flex flex-col">
            <div className="p-6 border-b border-black/10 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <button onClick={() => setIsCartOpen(false)} className="text-black/50 hover:text-black">
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <p className="text-black/40 text-center mt-12">Your cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-black/5 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-black/50 text-sm mt-1">${item.price}</p>
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 border border-black/20 rounded flex items-center justify-center text-sm"
                        >
                          −
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 border border-black/20 rounded flex items-center justify-center text-sm"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-black/10 space-y-5">
                <div>
                  <p className="text-sm font-medium mb-3">Shipping Method</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 border border-black/15 rounded-xl cursor-pointer hover:bg-black/5">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "pickup"}
                        onChange={() => setShippingMethod("pickup")}
                      />
                      <div>
                        <p className="text-sm font-medium">Headquarters Pickup</p>
                        <p className="text-xs text-black/50">Free</p>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-3 border border-black/15 rounded-xl cursor-pointer hover:bg-black/5">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "shipping"}
                        onChange={() => setShippingMethod("shipping")}
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
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <button
  onClick={() => {
    // Save cart and shipping method so the checkout page can read them
    localStorage.setItem("swag-cart", JSON.stringify(cart))
    localStorage.setItem("swag-shipping", shippingMethod)
    window.location.href = "/employees/checkout"
  }}
  className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-black/90 transition"
>
  Proceed to Checkout
</button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}