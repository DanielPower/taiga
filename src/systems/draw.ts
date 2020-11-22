import * as Concord from "../lib/concord";

interface DrawSystem extends ConcordSystem {
  pool?: ConcordEntity[];
  draw?: (this: DrawSystem) => void;
}

const DrawSystem: DrawSystem = Concord.system({
  pool: ["position", "drawable"],
});

DrawSystem.draw = function () {
  this.pool.forEach((entity: any) => {
    love.graphics.circle("fill", entity.position.x, entity.position.y, 5);
  });
};

export default DrawSystem;
