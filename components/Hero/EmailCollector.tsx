"use client"

import type React from "react"

import { useState } from "react"

export default function EmailCollector() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage("Please enter your email")
      return
    }

    setIsSubmitting(true)
    setMessage("")

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setMessage("Thanks for subscribing!")
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <div className="w-full max-w-md mx-auto px-2">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center rounded-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-l-full bg-transparent px-6 py-4 text-black placeholder:text-gray-400 focus:outline-none"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="m-1 rounded-full bg-black px-8 py-3 font-medium text-white transition-all hover:bg-gray-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Subscribe"}
          </button>
        </div>
      </form>
    </div>
  )
}
