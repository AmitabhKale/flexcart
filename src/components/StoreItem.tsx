import React from "react";
import { Card, Button } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const quantity: number = 1;
  return (
    <Card className="mb-2">
      <Card.Img src={imgUrl} height="300px" style={{ objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className="d-flex justify-content-between">
          <span>{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100 ">+ Add To Cart</Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button size="sm">-</Button>
                <div className="">
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button size="sm">+</Button>
              </div>
              <Button variant="danger" size="sm">
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
