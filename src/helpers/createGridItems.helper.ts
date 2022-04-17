interface createGridItemsProps {
  theme: string | null;
  gridSize: string | null;
}

export const createGridItems = ({ theme, gridSize }: createGridItemsProps) => {
  let gridItems;
  if (gridSize === '44') {
    gridItems = Array.from(Array(16).keys());
  } else {
    gridItems = Array.from(Array(36).keys());
  }
  return gridItems;
};
