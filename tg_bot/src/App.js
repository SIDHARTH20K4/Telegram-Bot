import './App.css';
import Button from './components/button.jsx'
import Card from './components/card.jsx'
const { getData } = require('./DB/db.js');
const foods = getData();

function App() {
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

        {
            foods.map((food) => ( <
                Card food = { food }
                key = { food.id }
                />
            ))
        } <
        />
    );
}

export default App;