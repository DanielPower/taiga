const Ball = (
  entity: ConcordEntity,
  x: number,
  y: number,
  radius: number,
  vx: number,
  vy: number,
) => {
  entity
    .give("position", x, y)
    .give("velocity", vx, vy)
    .give("circle", radius)
    .give("collisionBox", radius * 2, radius * 2)
    .give("bounce");
};

export default Ball;
