import * as Concord from "../lib/concord";

interface Position {
  x: number;
  y: number;
}

const Position = Concord.component("position", (component: Position, x: number, y: number) => {
  component.x = x || 0;
  component.y = y || 0;
});

export default Position;
