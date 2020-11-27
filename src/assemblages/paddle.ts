const Cart = (entity: ConcordEntity, x: number, y: number, width: number, height: number) => {
  entity
    .give("position", x, y)
    .give("velocity", 0, 0)
    .give("rectangle", width, height)
    .give("collisionBox", width, height);
};

export default Cart;
