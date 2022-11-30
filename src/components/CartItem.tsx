import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/CartContext";
import items from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "80px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && <span className="text-muted">x {quantity} </span>}
        </div>
        <div className="text-muted">{formatCurrency(item.price)}</div>
      </div>
      <div className="">{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => {
          removeFromCart(item.id);
        }}
      >
        X
      </Button>
    </Stack>
  );
};

export default CartItem;
