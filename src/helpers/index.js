export const getCategoryNames = (categories) => {
  return categories.map((category) => category.name)
}

export const findSelectedPrice = (selectedCurrency, prices) => {
  return (
    prices &&
    prices.filter((price) => {
      return (
        price.currency.label.toLowerCase() === selectedCurrency.toLowerCase()
      )
    })
  )
}

export const handleQuantityIncrease = (product, setUpdatedCartToState) => {
  let cart = []
  let cartInStorage = window.sessionStorage.getItem('cart')

  if (cartInStorage) {
    cart = JSON.parse(cartInStorage)
  }

  const updatedCart = cart.map((cartItem, i) => {
    if (cartItem.idOfProductInCart === product.idOfProductInCart) {
      cart[i].count = parseInt(cart[i].count) + 1
    }
    return cartItem
  })
  window.sessionStorage.setItem('cart', JSON.stringify(updatedCart))
  setUpdatedCartToState(updatedCart)
}

export const handleQuantityDecrease = (
  product,
  setUpdatedCartToState,
  showDeleteModal,
) => {
  let cart = []
  let cartInStorage = window.sessionStorage.getItem('cart')

  if (cartInStorage) {
    cart = JSON.parse(cartInStorage)
  }

  const updatedCart = cart.map((cartItem, i) => {
    if (cartItem.idOfProductInCart === product.idOfProductInCart) {
      cart[i].count > 1 ? (cart[i].count -= 1) : showDeleteModal(true)
    }
    return cartItem
  })

  window.sessionStorage.setItem('cart', JSON.stringify(updatedCart))
  setUpdatedCartToState(updatedCart)
}

export const handleRemoveFromCart = (
  productId,
  setUpdatedCartToState,
  showDeleteModal,
) => {
  let cart = []
  let cartInStorage = window.sessionStorage.getItem('cart')

  if (cartInStorage) {
    cart = JSON.parse(cartInStorage)
  }

  const updatedCart = cart.filter((cartItem) => {
    return cartItem.idOfProductInCart !== productId
  })

  window.sessionStorage.setItem('cart', JSON.stringify(updatedCart))
  setUpdatedCartToState(updatedCart)
  showDeleteModal(false)
}
