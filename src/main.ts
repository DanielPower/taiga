const Concord = require("lib.concord");

Concord.component("position", (c: any, x: number, y: number) => {
  c.x = x || 0;
  c.y = y || 0;
});

Concord.component("velocity", (c: any, x: number, y: number) => {
  c.x = x || 0;
  c.y = y || 0;
});

const Drawable = Concord.component("drawable");

const MoveSystem = Concord.system({
  pool: ["position", "velocity"],
});

MoveSystem.update = (self: any, dt: number) => {
  self.pool.forEach((entity: any) => {
    entity.position.x += entity.velocity.x * dt;
    entity.position.y += entity.velocity.y * dt;
  });
};

const DrawSystem = Concord.system({
  pool: ["position", "drawable"],
});

DrawSystem.draw = (self: any) => {
  self.pool.forEach((entity: any) => {
    love.graphics.circle("fill", entity.position.x, entity.position.y, 5);
  });
};

const world = Concord.world();

world.addSystems(world, MoveSystem, DrawSystem);

const entity_1 = Concord.entity(world);
entity_1
  .give(entity_1, "position", 100, 100)
  .give(entity_1, "velocity", 100, 0)
  .give(entity_1, "drawable");

const entity_2 = Concord.entity(world);
entity_2.give(entity_2, "position", 50, 50).give(entity_2, "drawable");

const entity_3 = Concord.entity(world);
entity_3.give(entity_3, "position", 200, 200);

love.update = (dt) => {
  world.emit(world, "update", dt);
};

love.draw = () => {
  world.emit(world, "draw");
};
