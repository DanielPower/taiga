import * as Concord from "../lib/concord";

interface Circle {
  radius: number;
}

const Circle = Concord.component("circle", (component: Circle, radius: number) => {
  component.radius = radius;
});

export default Circle;
