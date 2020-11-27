export const getBoundingBox = ({ x, y }: Vec, { width, height }: Size) => ({
  left: x - width / 2,
  right: x + width / 2,
  top: y - height / 2,
  bottom: y + height / 2,
});

export const intersects = (aPosition: Vec, aSize: Size, bPosition: Vec, bSize: Size) => {
  const a = getBoundingBox(aPosition, aSize);
  const b = getBoundingBox(bPosition, bSize);
  return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
};
