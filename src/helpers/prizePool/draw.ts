import { Draw } from "../../../generated/schema";

export const loadOrCreateDraw = (drawId: i32): Draw => {
  const draw = Draw.load(drawId.toString());

  if (!!draw) {
    return draw;
  }

  const newDraw = new Draw(drawId.toString());
  newDraw.save();

  return newDraw;
};
