export const calculateItems = (cart) => {
  let totalItems = 0
  for (let item of cart) {
    totalItems += item.count
  }
  return totalItems
}

/**gets nav links from category names*/
export const setCategoryNames = (categories) => {
  return categories.map((category) => {
    return category.name
  })
}

/** returns price related to selected price*/
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

export const findPath = (path, categoriesName) => {
  if (path === '/') {
    return categoriesName
  }
  let pathname = path.split('/')
  return pathname[1]
}

export const setProducts = (categories, selectedCategory) => {
  return (
    categories &&
    categories.filter((category) => {
      return category.name === selectedCategory && category.products
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
      // cart[i].count === 1 ? (cart[i].count = 1) : (cart[i].count -= 1)
      cart[i].count > 1 ? (cart[i].count -= 1) : showDeleteModal(true)
    }
    return cartItem
  })

  window.sessionStorage.setItem('cart', JSON.stringify(updatedCart))
  setUpdatedCartToState(updatedCart)
}

/** remove From cart */
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

/** adding item to cart */

// const createNewCart = (
//   cart,
//   product,
//   setUpdatedCartToState,
//   setShowCartSuccessModal,
//   selectedAttributes,
// ) => {
//   cart.push({ ...product, selectedAttributes, count: 1 })
//   window.sessionStorage.setItem('cart', JSON.stringify(cart))
//   setShowCartSuccessModal()
//   setUpdatedCartToState(cart)
// }

// const findAttribute = (attributes, selectedAttributes) => {
//   const mapAttibutes = attributes.map((item) => {
//     let found = selectedAttributes.find((element) => {
//       return (
//         element.itemName === item.itemName &&
//         element.attributeName === item.attributeName
//       )
//     })
//     return found
//   })
//   return mapAttibutes
// }

// const updateExistingCart = (
//   cart,
//   product,
//   setUpdatedCartToState,
//   setShowCartSuccessModal,
//   selectedAttributes,
// ) => {
//   let updatedCart = false
//   let cartWithAttributes = []
//   cartWithAttributes = cart.map((cartProduct) => {
//     if (cartProduct.id === product.id) {
//       const foundAttr = findAttribute(
//         cartProduct.attributes,
//         selectedAttributes,
//       )

//       if (foundAttr[0] !== undefined) {
//         cartProduct.count = parseInt(cartProduct.count) + 1
//         updatedCart = true
//       }
//       console.log('found attr:', foundAttr[0])
//     }
//     return cartProduct
//   })

//   if (updatedCart === false) {
//     cartWithAttributes.push({ ...product, selectedAttributes, count: 1 })
//   }

//   window.sessionStorage.setItem('cart', JSON.stringify(cartWithAttributes))
//   setShowCartSuccessModal()
//   setUpdatedCartToState(cartWithAttributes)
// }

// export const handleAddToCart = (
//   product,
//   setShowFailModal,
//   setShowCartSuccessModal,
//   setUpdatedCartToState,
//   selectedAttributes,
// ) => {
//   if (!product.inStock) {
//     return setShowFailModal()
//   }

//   let cart = []
//   let cartInStorage = window.sessionStorage.getItem('cart')

//   if (cartInStorage) {
//     cart = JSON.parse(cartInStorage)
//   }

//   if (!cart.length) {
//     createNewCart(
//       cart,
//       product,
//       setUpdatedCartToState,
//       setShowCartSuccessModal,
//       selectedAttributes,
//     )
//   } else {
//     updateExistingCart(
//       cart,
//       product,
//       setUpdatedCartToState,
//       setShowCartSuccessModal,
//       selectedAttributes,
//     )
//   }
// }
