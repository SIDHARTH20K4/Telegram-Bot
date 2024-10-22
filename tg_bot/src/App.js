import './App.css';
import Button from './components/button.jsx'
import Card from './components/card.jsx'
import Cart from './components/cart.jsx'
import { useState } from 'react';
const { getData } = require('./DB/db.js');
const foods = getData();

function App() {

    const [cartItems, setCartItems] = useState([]);
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
        Cart / >
        <
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