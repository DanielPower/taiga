import * as Concord from "../lib/concord";

interface MoveSystem extends ConcordSystem {
  pool?: ConcordEntity[];
  update?: (this: MoveSystem, dt: number) => void;
}

const MoveSystem: MoveSystem = Concord.system({
  pool: ["position", "velocity"],
});

MoveSystem.update = function (dt: number) {
  this.pool.forEach((entity: any) => {
    entity.position.x += entity.velocity.x * dt;
    entity.position.y += entity.velocity.y * dt;
  });
};

export default MoveSystem;
