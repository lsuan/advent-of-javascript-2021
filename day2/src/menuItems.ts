import bacon from "./assets/images/plate__bacon-eggs.png";
import chickenSalad from "./assets/images/plate__chicken-salad.png";
import fishSticks from "./assets/images/plate__fish-sticks-fries.png";
import fries from "./assets/images/plate__french-fries.png";
import salmon from "./assets/images/plate__salmon-vegetables.png";
import spaghetti from "./assets/images/plate__spaghetti-meat-sauce.png";

export const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 223,
    image: fries,
    alt: "French Fries",
    count: 0,
  },
  {
    name: "Salmon and Vegetables",
    price: 512,
    image: salmon,
    alt: "Salmon and Vegetables",
    count: 0,
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 782,
    image: spaghetti,
    alt: "Spaghetti with Meat Sauce",
    count: 0,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 599,
    image: bacon,
    alt: "Bacon, Eggs, and Toast",
    count: 0,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 698,
    image: chickenSalad,
    alt: "Chicken Salad with Parmesan",
    count: 0,
  },
  {
    name: "Fish Sticks and Fries",
    price: 634,
    image: fishSticks,
    alt: "Fish Sticks and Fries",
    count: 0,
  },
];

export type MenuItem = {
  name: string;
  price: number;
  image: string;
  alt: string;
  count: number;
};
