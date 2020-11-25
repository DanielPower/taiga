import * as Concord from "../lib/concord";

interface Rectangle {
  width: number;
  height: number;
}

const Rectangle = Concord.component(
  "rectangle",
  (component: Rectangle, width: number, height: number) => {
    component.width = width;
    component.height = height;
  },
);

export default Rectangle;
