import * as Concord from "./lib/concord";
import DrawSystem from "./systems/draw";
import MoveSystem from "./systems/move";

const world = Concord.world();

world.addSystems(MoveSystem, DrawSystem);

Concord.entity(world).give("position", 100, 100).give("velocity", 100, 0).give("drawable");
Concord.entity(world).give("position", 50, 50).give("drawable");
Concord.entity(world).give("position", 200, 200);

love.update = (dt) => {
  world.emit("update", dt);
};

love.draw = () => {
  world.emit("draw");
};
