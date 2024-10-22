import './App.css';
import Button from './components/button.jsx'
import Card from './components/card.jsx'
import Cart, { cart } from './components/cart.jsx'
import { useState } from 'react';
const { getData } = require('./DB/db.js');
const foods = getData();

function App() {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);
        if (exist) {
            setCartItems(cartItems.map((x) =>
                x.id === food.id ? {...exist, quantity: exist.quantity + 1 } : x
            ));
        } else {
            setCartItems([...cartItems, {...food, quantity: 1 }]);
        }
    };

    const onRemove = (food) => {
        const exist = cartItems.find((x) => x.id === food.id);

        if (exist.quantity === 1) {
            setCartItems(cartItems.filter(x => x.id !== food.id))
        } else {
            setCartItems(cartItems.map(x =>
                x.id === food.id ? {...exist, quantity: exist.quantity - 1 } : x
            ))
        }
    }
    return ( <
        >
        TG BOT <
        Button title = { 'Add' }
        disable = { false }
        type = { 'add' }
        />  <
        Button title = { 'remove' }
        disable = { false }
        type = { 'remove' }
        />  <
        Button title = { 'checkout' }
        disable = { false }
        type = { 'checkout' }
        />

        <
        h1 className = 'heading' > Order Food < /h1> <
        Cart cartItems = { cartItems }
        onAdd = { onAdd }
        onRemove = { onRemove }
        /> <
        div className = 'cards__container' > {
            foods.map((food) => ( <
                Card food = { food }
                key = { food.id }
                />
            ))
        } <
        /div> <
        />
    );
}

export default App;