import { CollisionBox, Position, Velocity } from "../components";
import * as Concord from "../lib/concord";
import { intersects } from "../utilities/physics";

interface Bouncer extends ConcordEntity {
  position: Position;
  velocity: Velocity;
  collisionBox: CollisionBox;
}

interface Collidable extends ConcordEntity {
  position: Position;
  collisionBox: CollisionBox;
}

interface BounceSystem extends ConcordSystem {
  bouncers?: ConcordEntity[];
  collidables?: ConcordEntity[];
  update?: (this: BounceSystem, dt: number) => void;
}

const BounceSystem: BounceSystem = Concord.system({
  bouncers: ["position", "velocity", "collisionBox", "bounce"],
  collidables: ["position", "collisionBox"],
});

BounceSystem.update = function (_dt: number) {
  this.bouncers.forEach((bouncer: Bouncer) => {
    if (bouncer.position.y - bouncer.collisionBox.height / 2 < 0) {
      bouncer.position.y = bouncer.collisionBox.height / 2;
      bouncer.velocity.y = Math.abs(bouncer.velocity.y);
    }
    if (bouncer.position.y + bouncer.collisionBox.height / 2 > love.graphics.getHeight()) {
      bouncer.position.y = love.graphics.getHeight() - bouncer.collisionBox.height / 2;
      bouncer.velocity.y = -Math.abs(bouncer.velocity.y);
    }
    this.collidables.forEach((collidable: Collidable) => {
      if (collidable === bouncer) {
        return;
      }
      if (
        intersects(
          bouncer.position,
          bouncer.collisionBox,
          collidable.position,
          collidable.collisionBox,
        )
      ) {
        if (bouncer.velocity.x > 0) {
          bouncer.position.x =
            collidable.position.x -
            (bouncer.collisionBox.width + collidable.collisionBox.width) / 2;
        } else {
          bouncer.position.x =
            collidable.position.x +
            (bouncer.collisionBox.width + collidable.collisionBox.width) / 2;
        }
        bouncer.velocity.x *= -1;
      }
    });
  });
};

export default BounceSystem;
