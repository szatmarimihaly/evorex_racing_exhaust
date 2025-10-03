import { create } from 'zustand'

export type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

type CartState = {
  items: CartItem[]
  totalItems: number
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  clearCart: () => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  totalItems: 0,

  addItem: (item) => {
    const existing = get().items.find((i) => i.id === item.id)
    let newItems
    if (existing) {
      newItems = get().items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    } else {
      newItems = [...get().items, { ...item, quantity: 1 }]
    }
    set({
      items: newItems,
      totalItems: newItems.reduce((acc, i) => acc + i.quantity, 0),
    })
  },

  removeItem: (id) => {
    const newItems = get().items.filter((i) => i.id !== id)
    set({
      items: newItems,
      totalItems: newItems.reduce((acc, i) => acc + i.quantity, 0),
    })
  },

  clearCart: () => set({ items: [], totalItems: 0 }),

  increaseQuantity: (id) => {
    const newItems = get().items.map((i) =>
      i.id === id ? { ...i, quantity: i.quantity + 1 } : i
    )
    set({
      items: newItems,
      totalItems: newItems.reduce((acc, i) => acc + i.quantity, 0),
    })
  },

  decreaseQuantity: (id) => {
    const newItems = get().items.map((i) =>
      i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
    )
    set({
      items: newItems,
      totalItems: newItems.reduce((acc, i) => acc + i.quantity, 0),
    })
  },
}))
