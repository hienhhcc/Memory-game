import _ from "lodash/fp";

interface createGridItemsProps {
  theme: string | null;
  gridSize: number | null;
}

export const createGridItems = ({ theme, gridSize }: createGridItemsProps) => {
  let gridItems;
  if (gridSize === 16) {
    gridItems = _.shuffle(
      Array.from({ length: 8 }, (_, i) => i + 1).concat(
        Array.from({ length: 8 }, (_, i) => i + 1)
      )
    );
  } else {
    gridItems = _.shuffle(
      Array.from({ length: 18 }, (_, i) => i + 1).concat(
        Array.from({ length: 18 }, (_, i) => i + 1)
      )
    );
  }
  return gridItems;
};
