import { cloudstate, useLocal } from "freestyle-sh";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { PasskeyAuthentication } from "freestyle-auth/passkey";

























@cloudstate
export class Restaurant {
    id = crypto.randomUUID()
    email: string;
    restaurant_name: string;
    cuisine: string;
    active_menu: Menu | null = null;
    other_menus: Menu[] | null = null;
    password: string | null = null;
    example: string | null = null;
    //example!: string
    //example: string | null = null;
    
    constructor(email: string, restaurant_name: string, cuisine: string) {
        if (typeof restaurant_name !== 'string' || typeof cuisine !== 'string') {
            throw new Error("All parameters must be strings");
        }
        
        this.email = email
        this.restaurant_name = restaurant_name;
        this.cuisine = cuisine;
        
    }
    set_active_menu(menu: Menu) {
        this.active_menu = menu;
        return this.active_menu;
    }
    get_active_menu() {
        return this.active_menu;
    }
    has_active_menu() {
        return (this.active_menu !== null)
    }
    create_active_menu(menu_name:string) {
        return this.active_menu = new Menu()
    }
    add_item_to_active_menu(name:string, desc:string, price:Float) {
        const the_item = new Item(name, desc, price)
        if (this.has_active_menu()) {
        } else {
            //no active menu
            this.create_active_menu("first menu")
        }
        this.active_menu!.addItem(the_item)
        console.log(this.active_menu)
        return this.active_menu;
    }
}

@cloudstate
export class RestaurantManager {
    static id = "restaurant_manager";
    restaurants = new Map();
    //users: Counter[] = [];
    addRestaurant(email: string, restaurant_name: string, cuisine: string) {
        if (this.restaurants.has(email)) {
            throw new Error("Email is already signed up");
        }
        if (restaurant_name == '') {
            throw new Error("Blank firstName Error");
        }
        if (cuisine == '') {
            throw new Error("Blank lastName Error");
        }
        if (email == '') {
            throw new Error("Blank email Error");
        }

        const restaurant = new Restaurant(email, restaurant_name, cuisine);
        this.restaurants.set(email, restaurant);
        return restaurant;
    }
    getUser(email:string) {
        return this.restaurants.get(email);
    }
    getUserID(email:string) {
        return this.restaurants.get(email).id;
    }

    hasUser(email:string) {
        return this.restaurants.has(email);
    }

    getAllUsersEmails() {
        return Array.from(this.restaurants.keys());
        
    }

    getAllUsers() {
        return Array.from(this.restaurants);
        
    }

    deleteUser(email:string) {
        //console.log(`DELETING: ${email}`)
        //this.restaurants.delete(email);
        console.log(this.restaurants)
        return;
    }

    validateCredentials(email: string, password: string): boolean {
        if (this.restaurants.has(email)) {
        const user_to_verify = this.restaurants.get(email)

        return user_to_verify.password === password;
        } else {
            throw new Error("No restaurant with that email");
        }
    }

    add_menu_to_rest(email:string, item_name:string, item_desc:string, item_price:Float) {
        if (this.restaurants.has(email)) {
            const rest:Restaurant = this.restaurants.get(email)
            const the_item = new Item(item_name, item_desc, item_price)
            if (rest.active_menu === null) {
                const new_menu = new Menu();
                new_menu.menu_name = "first menu";
                rest.active_menu = new_menu;
            }
            rest.active_menu.items.set(the_item.item_name, the_item)
            console.log(rest.active_menu)
            //RETURN HERE ONCE FIGURED OUT
            console.log(typeof rest)
            console.log(typeof rest.add_item_to_active_menu(item_name, item_desc, item_price))
            rest.add_item_to_active_menu(item_name, item_desc, item_price)
        } else {
            throw new Error("No restaurant with that email");
        }
    }

    test() {
        console.log("test started in server")
        const goofy = new Menu
        goofy.addItem(new Item('a','a',3.0))
        

        console.log("test ended in server")
    }

}


//name, description, photo, price, vegetarian, glutenfree
export class Item {
    id = crypto.randomUUID()
    item_name: string;
    description: string;
    photo: any | null=null;
    price: Float;

    constructor(item_name: string, description: string, price: Float) {
        this.item_name = item_name
        this.description = description
        this.price = price

    }
    //functions to edit the item

}

@cloudstate
export class Menu {
    id = crypto.randomUUID()
    menu_name: string | null = null;
    items: Map<string, any>;
    
    constructor() {
        this.items = new Map()
    }

    addItem(item: Item) {
        if (item instanceof Item) {
            this.items.set(item.item_name, item);
        } else {
            throw new Error("Invalid item. Must be an instance of Item.");
        }
    }

    getItem(item_name: string) {
        return this.items.get(item_name);
    }

    removeItem(item_name: string) {
        return this.items.delete(item_name);
    }

    getMenu() {
        let menuStr = `${this.menu_name} Menu:\n`;
        this.items.forEach((item) => {
            menuStr += `${item.getDetails()}\n`;
        });
        return menuStr.trim();
    }
}

