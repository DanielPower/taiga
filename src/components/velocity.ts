import * as Concord from "../lib/concord";

interface Velocity {
  x: number;
  y: number;
}

const Velocity = Concord.component("velocity", (component: Velocity, x: number, y: number) => {
  component.x = x || 0;
  component.y = y || 0;
});

export default Velocity;
