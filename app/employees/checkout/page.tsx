"use client"

import { useEffect, useState } from "react"
import { GeistSans } from "geist/font/sans"
import Image from "next/image"
import Link from "next/link"

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  category: string
  quantity: number
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [shippingMethod, setShippingMethod] = useState<"pickup" | "shipping">("pickup")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOrderPlaced, setIsOrderPlaced] = useState(false)

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  notes: "",
  authorizeDeduction: false,
})

  useEffect(() => {
    const savedCart = localStorage.getItem("swag-cart")
    const savedShipping = localStorage.getItem("swag-shipping")

    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
    if (savedShipping === "pickup" || savedShipping === "shipping") {
      setShippingMethod(savedShipping)
    }
  }, [])

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsOrderPlaced(true)

    // Clear cart after order
    localStorage.removeItem("swag-cart")
    localStorage.removeItem("swag-shipping")
  }

  if (isOrderPlaced) {
    return (
      <div className={`${GeistSans.className} min-h-screen bg-white text-black flex items-center justify-center px-6`}>
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
            ✓
          </div>
          <h1 className="text-3xl font-bold mb-3">Order Received</h1>
          <p className="text-black/60 mb-8">
            Thank you. Your employee swag order has been submitted. You will receive further details by email regarding production time and {shippingMethod === "pickup" ? "pickup" : "shipping"}.
          </p>
          <Link
            href="/employees/swag"
            className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black/90 transition"
          >
            Return to Store
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`${GeistSans.className} min-h-screen bg-white text-black`}>
      {/* Header */}
      <header className="border-b border-black/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/employees/swag" className="text-sm text-black/60 hover:text-black transition">
            ← Back to Store
          </Link>
          <p className="text-sm font-medium">Checkout</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-10">Checkout</h1>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
<div className="lg:col-span-3">
  <form onSubmit={handlePlaceOrder} className="space-y-6">
    <div>
      <label className="block text-sm font-medium mb-2">Full Name</label>
      <input
        type="text"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
        placeholder="Your name"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Work Email</label>
      <input
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
        placeholder="you@aircenter.com"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Phone (optional)</label>
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
        placeholder="(555) 555-5555"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">Order Notes (optional)</label>
      <textarea
        value={formData.notes}
        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        rows={3}
        className="w-full border border-black/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
        placeholder="Size requests, special instructions, etc."
      />
    </div>

    {/* Paycheck Deduction Authorization */}
    <div className="border border-black/10 rounded-2xl p-5 bg-black/[0.02]">
      <p className="text-sm font-medium mb-3">Payment Method</p>
      <p className="text-sm text-black/60 mb-4">
        All employee store purchases are paid by payroll deduction.
      </p>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={formData.authorizeDeduction || false}
          onChange={(e) =>
            setFormData({ ...formData, authorizeDeduction: e.target.checked })
          }
          className="mt-1"
        />
        <span className="text-sm text-black/80 leading-relaxed">
          I authorize Air Center Helicopters to deduct the total amount of this order from my next paycheck. I understand this is a voluntary purchase of employee merchandise and that production times may vary.
        </span>
      </label>
    </div>

    <div className="pt-2">
      <button
        type="submit"
        disabled={isSubmitting || cart.length === 0 || !formData.authorizeDeduction}
        className="w-full bg-black text-white font-medium py-3.5 rounded-full hover:bg-black/90 transition disabled:opacity-50"
      >
        {isSubmitting ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  </form>
</div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="border border-black/10 rounded-2xl p-6 sticky top-8">
              <h2 className="font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cart.length === 0 ? (
                  <p className="text-sm text-black/40">Your cart is empty</p>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="w-14 h-14 relative rounded-lg overflow-hidden bg-black/5 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-black/50">Qty {item.quantity}</p>
                      </div>
                      <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t border-black/10 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-black/60">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60">Shipping</span>
                  <span>{shippingMethod === "pickup" ? "Free (Pickup)" : "Calculated later"}</span>
                </div>
                <div className="flex justify-between font-semibold text-base pt-2">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}