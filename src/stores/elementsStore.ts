import { makeAutoObservable } from "mobx";

class ElementsStore {
    cart: string[] = ['']
    cartCount: number = 0
    toggleAnimate: boolean = false

    constructor() {
        makeAutoObservable(this);
    }

    addItem(item: string) {
        this.cart.push(item);
    }

    deleteItem(index: number) {
        this.cart = this.cart.filter((_, i) => i !== index);
            this.cartCount -= 1
    }

    clearCart() {
        this.cart = [''];
        this.cartCount = 0
        this.toggleAnimate = false
    }
}

export const cartStore = new ElementsStore();