import "./components/index";

import Paddle from "./assemblages/paddle";
import * as Concord from "./lib/concord";
import { DrawSystem, MoveSystem } from "./systems/index";

const world = Concord.world();

world.addSystems(MoveSystem, DrawSystem);

Concord.entity(world).assemble(Paddle, 30, 200, 20, 60);
Concord.entity(world).assemble(Paddle, 770, 200, 20, 60);

love.update = (dt) => {
  world.emit("update", dt);
};

love.draw = () => {
  world.emit("draw");
};
