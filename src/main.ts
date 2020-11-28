import "./components/index";

import { Ball, Paddle } from "./assemblages/index";
import * as Concord from "./lib/concord";
import { BounceSystem, DrawSystem, MoveSystem } from "./systems/index";

const world = Concord.world();

world.addSystems(MoveSystem, DrawSystem, BounceSystem);

Concord.entity(world).assemble(Paddle, 30, 200, 20, 60);
Concord.entity(world).assemble(Paddle, 770, 200, 20, 60);
Concord.entity(world).assemble(
  Ball,
  love.graphics.getWidth() / 2,
  love.graphics.getHeight() / 2,
  10,
  300,
  -300,
);

let isRunning = true;

love.keypressed = (key) => {
  if (key === "p") {
    isRunning = !isRunning;
  }
};

love.update = (dt) => {
  if (isRunning) {
    world.emit("update", dt);
  }
};

love.draw = () => {
  love.graphics.setColor([1, 1, 1, 1]);
  world.emit("draw");
};
