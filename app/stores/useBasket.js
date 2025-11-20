import { defineStore } from "pinia";

export const useBasket = defineStore("basket", {
  state: () => ({
    items: [],
  }),

  actions: {

    addItem(item) {
      const existItem = this.items.find((i) => i.id === item.id);
      if (existItem) {
        existItem.quantity++;
      } else {
        const newItem = { ...item, quantity: 1 };
        this.items.push(newItem);
      }
      this.saveToLocalStorage()
    },

    removeItem(id) {
      const itemIndex = this.items.findIndex((i) => i.id === id);
      this.items.splice(itemIndex, 1);
      this.saveToLocalStorage()
    },

    increaseQuantity(id){
      const item = this.items.find((i) => i.id === id)
      item.quantity++
      this.saveToLocalStorage()
    },
    
    decreaseQuantity(id){
      const item = this.items.find((i) => i.id === id)
      if(item.quantity <= 1){
        this.removeItem(item.id)
        return;
      }else{
        item.quantity--
      }
      this.saveToLocalStorage()
    },
    
    clearBasket(){
      this.items = []
      this.saveToLocalStorage()
    },
    setItems(){
      const basket= JSON.parse(localStorage.getItem("basket") || "[]")
      this.items = basket
    },
    saveToLocalStorage(){
      localStorage.setItem("basket", JSON.stringify(this.items));
    }
  },
  getters:{

    totalPrice(){
        let totalPrice = 0 
        this.items.forEach((item)=>{
          const itemTotalPrice = item.quantity *item.price
          totalPrice += itemTotalPrice
        })
        return totalPrice;
    },

    itemTotalPrice(id){
      const item = this.items.find((i) => i.id === id)
      if(item){
        const itemTotalPrice = item.quantity *item.price
        return itemTotalPrice;
      }else{
        return 0;
      }
    }

  }
});
