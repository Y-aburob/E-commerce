import { makeAutoObservable } from "mobx";

class ElementsStore {
    cart: string[] = [''];

    constructor() {
        makeAutoObservable(this);
    }

    addItem(item: string) {
        this.cart.push(item);
    }

    deleteItem(index: number) {
        this.cart = this.cart.filter((_, i) => i !== index);
    }

    clearCart() {
        this.cart = [''];
    }
}

export const cartStore = new ElementsStore();
