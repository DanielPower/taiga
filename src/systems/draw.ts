import { Circle, Position, Rectangle } from "../components";
import * as Concord from "../lib/concord";

interface RenderableCircle extends ConcordEntity {
  position: Position;
  circle: Circle;
}

interface RenderableRectangle extends ConcordEntity {
  position: Position;
  rectangle: Rectangle;
}

interface DrawSystem extends ConcordSystem {
  circles?: RenderableCircle[];
  rectangles?: RenderableRectangle[];
  draw?: (this: DrawSystem) => void;
}

const DrawSystem: DrawSystem = Concord.system({
  circles: ["position", "circle"],
  rectangles: ["position", "rectangle"],
});

DrawSystem.draw = function () {
  this.rectangles.forEach((entity) => {
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
  this.circles.forEach((entity) => {
    love.graphics.circle("fill", entity.position.x, entity.position.y, entity.circle.radius);
  });
};

export default DrawSystem;
