import * as Concord from "../lib/concord";

interface CollisionBox {
  width: number;
  height: number;
}

const CollisionBox = Concord.component(
  "collisionBox",
  (component: CollisionBox, width: number, height: number) => {
    component.width = width;
    component.height = height;
  },
);

export default CollisionBox;
