import pizza from "../images/pizza.png";
import burger from "../images/burger.png";
import coca from "../images/coca.png";
import salad from "../images/salad.png";
import water from "../images/water.png";
import kebab from "../images/kebab.png";
import iceCream from "../images/icecream.png";

export function getData() {
    return [
        { title: "pizza", price: 189, image: pizza },
        { title: "burger", price: 129, image: burger },
        { title: "coca", price: 99, image: coca },
        { title: "salad", price: 79, image: salad },
        { title: "water", price: 49, image: water },
        { title: "kebab", price: 149, image: kebab },
        { title: "ice cream", price: 69, image: iceCream },
    ];
}