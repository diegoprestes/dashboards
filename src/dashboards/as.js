import React, { useState } from "react";
import { Box } from "../components/Box";
import { Grid } from "react-blessed-contrib";

export const AlphaSights = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isFocused = (x, y) => {
    return position.x === x && position.y === y;
  };

  return (
    <Grid rows={12} cols={12}>
      <Box
        label="Box #1"
        isFocused={isFocused(0, 0)}
        row={0}
        col={0}
        rowSpan={3}
        colSpan={3}
      />
      <Box label="Box #2" row={0} col={3} rowSpan={3} colSpan={3} />
      <Box label="Box #3" row={0} col={6} rowSpan={3} colSpan={3} />
      <Box label="Box #4" row={0} col={9} rowSpan={3} colSpan={3} />

      <Box label="Box #1" row={3} col={0} rowSpan={3} colSpan={3} />
      <Box label="Box #2" row={3} col={3} rowSpan={3} colSpan={3} />
      <Box label="Box #3" row={3} col={6} rowSpan={3} colSpan={3} />
      <Box label="Box #4" row={3} col={9} rowSpan={3} colSpan={3} />

      <Box label="Box #1" row={6} col={0} rowSpan={3} colSpan={3} />
      <Box label="Box #2" row={6} col={3} rowSpan={3} colSpan={3} />
      <Box label="Box #3" row={6} col={6} rowSpan={3} colSpan={3} />
      <Box label="Box #4" row={6} col={9} rowSpan={3} colSpan={3} />

      <Box label="Box #1" row={9} col={0} rowSpan={3} colSpan={3} />
      <Box label="Box #2" row={9} col={3} rowSpan={3} colSpan={3} />
      <Box label="Box #3" row={9} col={6} rowSpan={3} colSpan={3} />
      <Box label="Box #4" row={9} col={9} rowSpan={3} colSpan={3} />
    </Grid>
  );
};
