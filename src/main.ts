import * as Concord from "lib.concord";

Concord.component("position", (c: any, x: number, y: number) => {
  c.x = x || 0;
  c.y = y || 0;
});

Concord.component("velocity", (c: any, x: number, y: number) => {
  c.x = x || 0;
  c.y = y || 0;
});

Concord.component("drawable");

const MoveSystem = Concord.system({
  pool: ["position", "velocity"],
});

MoveSystem.update = function (dt: number) {
  this.getEntities("pool").forEach((entity: any) => {
    entity.position.x += entity.velocity.x * dt;
    entity.position.y += entity.velocity.y * dt;
  });
};

const DrawSystem = Concord.system({
  pool: ["position", "drawable"],
});

DrawSystem.draw = function () {
  this.getEntities("pool").forEach((entity: any) => {
    love.graphics.circle("fill", entity.position.x, entity.position.y, 5);
  });
};

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
