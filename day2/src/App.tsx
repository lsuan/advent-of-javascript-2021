import { useMemo, useState } from "react";
import { menuItems, type MenuItem } from "./menuItems";
import check from "./assets/images/check.svg";
import chevron from "./assets/images/chevron.svg";

const TAX = 0.0975;
const defaultItems = menuItems.map((item) => {
  return { ...item };
});

function App() {
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  useMemo(() => {
    const subtotal = cart.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0);
    setSubtotal(subtotal);
    setTax(subtotal * TAX);
  }, [cart, subtotal]);

  const getDefaultPrice = (name: string) => {
    const found = defaultItems.find((menuItem) => {
      return menuItem.name === name;
    }) as MenuItem;
    return found.price;
  };

  const isInCart = (name: string) => {
    const found = cart.filter((item) => {
      return item.name === name;
    });
    return found.length > 0;
  };

  const addToCart = (item: MenuItem) => {
    item.count++;
    setCart([...cart, item]);
  };

  const updateItem = (item: MenuItem, count: number, operation: string) => {
    const itemIndex = cart.findIndex((cartItem) => {
      return cartItem.name === item.name;
    });
    const prevItems = cart.slice(0, itemIndex);
    const rest = cart.slice(itemIndex + 1);
    const newItem = cart[itemIndex];
    newItem.count = count;

    if (count === 0) {
      setCart([...prevItems, ...rest]);
      return;
    }

    if (operation === "increase")
      newItem.price += getDefaultPrice(newItem.name);
    else if (operation === "decrease")
      newItem.price -= getDefaultPrice(newItem.name);
    setCart([...prevItems, newItem, ...rest]);
  };

  return (
    <div className="wrapper menu">
      <div className="panel">
        <h1>To Go Menu</h1>
        <ul className="menu">
          {menuItems.map((item) => {
            return (
              <li key={item.name}>
                <div className="plate">
                  <img src={item.image} alt={item.alt} className="plate" />
                </div>
                <div className="content">
                  <p className="menu-item">{item.name}</p>
                  <p className="price">item.price</p>
                  {isInCart(item.name) ? (
                    <button className="in-cart">
                      <img src={check} alt="Check" />
                      In Cart
                    </button>
                  ) : (
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="panel cart">
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p className="empty">Your cart is empty.</p>
        ) : (
          <ul className="cart-summary">
            {cart.map((item) => {
              return (
                <li key={item.name}>
                  <div className="plate">
                    <img src={item.image} alt={item.alt} className="plate" />
                    <div className="quantity">{item.count}</div>
                  </div>
                  <div className="content">
                    <p className="menu-item">{item.name}</p>
                    <p className="price">{item.price}</p>
                  </div>
                  <div className="quantity__wrapper">
                    <button
                      className="decrease"
                      onClick={() => {
                        updateItem(item, item.count - 1, "decrease");
                      }}
                    >
                      <img src={chevron} />
                    </button>
                    <div className="quantity">{item.count}</div>
                    <button
                      className="increase"
                      onClick={() =>
                        updateItem(item, item.count + 1, "increase")
                      }
                    >
                      <img src={chevron} />
                    </button>
                  </div>
                  <div className="subtotal">{item.price}</div>
                </li>
              );
            })}
          </ul>
        )}

        <div className="totals">
          <div className="line-item">
            <div className="label">Subtotal:</div>
            <div className="amount price subtotal">{subtotal.toFixed(2)}</div>
          </div>
          <div className="line-item">
            <div className="label">Tax:</div>
            <div className="amount price tax">{tax.toFixed(2)}</div>
          </div>
          <div className="line-item total">
            <div className="label">Total:</div>
            <div className="amount price total">
              {(subtotal + tax).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
