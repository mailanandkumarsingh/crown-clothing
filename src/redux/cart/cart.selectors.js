import { createSelector } from "reselect";

// Input Selector
const selectCart = (state) => state.cart;

//Create an Input selector from a selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

//Pass the previous inputSelector(selectCartItems) as a parameter
// to createSelector to get itemsCount
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
