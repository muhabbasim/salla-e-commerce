import { createContext, ReactNode, useContext } from "react"
import { useLocalStorage } from "../utils/useLocalStorage"

type CartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type CartContextProps = {
  addCartQuantity: (id: number, quantity: number) => void
  increaseCartQuantity: (id: number) => void
  addQuantityCartQuantity: (id: number, quantity: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const CartContext = createContext({} as CartContextProps)

export function useShoppingCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  // increase cart quantity by numbers
  function addCartQuantity(id: number, quantity: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: quantity }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantity }
          } else {
            return item
          }
        })
      }
    })
  }

  // increase cart quantity
  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  
  // increase cart quantity
  function addQuantityCartQuantity(id: number, quantity: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems]
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: quantity }
          } else {
            return item
          }
        })
      }
    })
  }
  
  // decrese cart quantity
  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  // remove item from cart
  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        addCartQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        addQuantityCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}