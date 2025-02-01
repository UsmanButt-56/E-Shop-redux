import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalQuantity : 0,
  totalprice : 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart(state, action) {
         const newItem = action.payload;
         const ItemIndex = state.carts.find((item) => item.id === newItem.id);
         if(ItemIndex)
         {
          ItemIndex.quantity++,
          ItemIndex.totalprice += newItem.price;
         }
         else
         {
           state.carts.push({
            id : newItem.id,
            name : newItem.name,
            title : newItem.title,
            price : newItem.price,
            quantity : 1,
            totalprice : newItem.price,
            image : newItem.image
           });
         }
         state.totalprice += newItem.price;
         state.totalQuantity++;
        },
        removeitem(state , action) {
          const id = action.payload;
          const itemToRemove  = state.carts.find((item) => item.id === id)
          if(itemToRemove )
          {
             state.totalprice -= itemToRemove.totalprice;
             state.totalQuantity -= itemToRemove.quantity;
             state.carts = state.carts.filter((item) => item.id !== id)
          }
        },
        Increase(state , action) {
          const id = action.payload;
          const ItemIndex = state.carts.find((item) => item.id === id)
          if (ItemIndex)
          {
            ItemIndex.quantity++;
            ItemIndex.totalprice += ItemIndex.price;
            state.totalprice += ItemIndex.price;
            state.totalQuantity++;
          }
        },
        Decrease(state , action){
          const id = action.payload;
          const ItemIndex = state.carts.find((item) => item.id === id);
          if(ItemIndex.quantity > 1)
          {
            ItemIndex.quantity--;
            ItemIndex.totalprice -= ItemIndex.price;
            state.totalQuantity--;
            state.totalprice -= ItemIndex.price;
          }
        }
    },
});

export const {addtocart , removeitem , Increase , Decrease } = cartSlice.actions;
export default cartSlice.reducer;