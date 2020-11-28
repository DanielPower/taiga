import { Position, Velocity } from "../components";
import * as Concord from "../lib/concord";

interface MovePool extends ConcordSystem {
  position: Position;
  velocity: Velocity;
}

interface MoveSystem extends ConcordSystem {
  pool?: MovePool[];
  update?: (this: MoveSystem, dt: number) => void;
}

const MoveSystem: MoveSystem = Concord.system({
  pool: ["position", "velocity"],
});

MoveSystem.update = function (dt: number) {
  this.pool.forEach((entity) => {
    entity.position.x += entity.velocity.x * dt;
    entity.position.y += entity.velocity.y * dt;
  });
};

export default MoveSystem;
