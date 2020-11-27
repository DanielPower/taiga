import * as Concord from "../lib/concord";

interface Velocity extends Vec {}

const Velocity = Concord.component("velocity", (component: Velocity, x: number, y: number) => {
  component.x = x;
  component.y = y;
});

export default Velocity;
