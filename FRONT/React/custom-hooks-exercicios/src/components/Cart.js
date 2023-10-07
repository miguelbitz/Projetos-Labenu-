import { useState } from "react";
import { Item } from "./Item";
import { useCounter } from "../hooks/useCounter";

export const Cart = () => {
  const quantity = useCounter()

  return (
    <div>
      <h1>Meu carrinho</h1>
      <Item
        label="My produto massa"
        quantity={quantity.value}
        onIncrement={() => quantity.increment(1)}
        onDecrement={() => quantity.decrement(1)}
        onReset={quantity.reset}
        onSetValue={() => quantity.set(1)}
      />
    </div>
  );
};
