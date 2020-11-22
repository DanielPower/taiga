import * as Concord from "../lib/concord";

const Velocity = Concord.component("velocity", (c: any, x: number, y: number) => {
  c.x = x || 0;
  c.y = y || 0;
});

export default Velocity;
