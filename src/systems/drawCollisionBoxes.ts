import * as Concord from "../lib/concord";

interface DrawCollisionSystem extends ConcordSystem {
  pool?: ConcordEntity[];
  draw?: (this: DrawCollisionSystem) => void;
}

const DrawCollisionSystem: DrawCollisionSystem = Concord.system({
  pool: ["position", "collisionBox"],
});

DrawCollisionSystem.draw = function () {
  this.pool.forEach(({ position: { x, y }, collisionBox: { width, height } }: any) => {
    love.graphics.setColor([0, 1, 0, 1]);
    love.graphics.rectangle("line", x - width / 2, y - height / 2, width, height);
  });
};

export default DrawCollisionSystem;
