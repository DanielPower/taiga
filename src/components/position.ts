import * as Concord from "../lib/concord";

interface Position extends Vec {}

const Position = Concord.component("position", (component: Position, x: number, y: number) => {
  component.x = x;
  component.y = y;
});

export default Position;
