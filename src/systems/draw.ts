import * as Concord from "../lib/concord";

interface DrawSystem extends ConcordSystem {
  circles?: ConcordEntity[];
  rectangles?: ConcordEntity[];
  draw?: (this: DrawSystem) => void;
}

const DrawSystem: DrawSystem = Concord.system({
  circles: ["position", "circle"],
  rectangles: ["position", "rectangle"],
});

DrawSystem.draw = function () {
  this.rectangles.forEach((entity: any) => {
    const xOffset = -entity.rectangle.width / 2;
    const yOffset = -entity.rectangle.height / 2;
    love.graphics.rectangle(
      "fill",
      entity.position.x + xOffset,
      entity.position.y + yOffset,
      entity.rectangle.width,
      entity.rectangle.height,
    );
  });
  this.circles.forEach((entity: any) => {
    love.graphics.circle("fill", entity.position.x, entity.position.y, entity.circle.radius);
  });
};

export default DrawSystem;
