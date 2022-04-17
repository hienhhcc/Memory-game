import _ from 'lodash/fp';

interface createGridItemsProps {
  theme: string | null;
  gridSize: string | null;
}

export const createGridItems = ({ theme, gridSize }: createGridItemsProps) => {
  let gridItems;
  if (gridSize === '44') {
    gridItems = _.shuffle(
      Array.from({ length: 8 }, (_, i) => i + 1).concat(
        Array.from({ length: 8 }, (_, i) => i + 1)
      )
    );
  } else {
    gridItems = _.shuffle(
      Array.from({ length: 16 }, (_, i) => i + 1).concat(
        Array.from({ length: 16 }, (_, i) => i + 1)
      )
    );
  }
  return gridItems;
};
