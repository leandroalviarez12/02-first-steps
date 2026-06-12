import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: String;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nitendo Switch 2', quantity: 1},
  { productName: 'Pro Controller', quantity: 2},
  { productName: 'Super Smash', quantity: 5},
]

export function FirstStepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>

    {
      itemsInCart
    }







    {/*<ItemCounter name="Nitendo Switch 2" quantity={20} />
      <ItemCounter name="Pro Controller" quantity={10} />
      <ItemCounter name="Super Smash" quantity={3} />
      <ItemCounter name="Super Mario" quantity={7} /> */}
    </> //esto tambien puede ser el modo estricto
  );
}