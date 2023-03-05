import React from "react";
import { Today } from "../components/Today";
import { Box } from "../components/Box";
import { Grid, GridItem, Map } from "react-blessed-contrib";

export const Test = () => {
  return (
    <Grid rows={12} cols={12}>
      <Today updateInterval={900000} row={0} col={0} rowSpan={4} colSpan={6} />
      <Box label="Time Log" row={4} col={0} rowSpan={8} colSpan={3} />
      <GridItem
        row={0}
        col={6}
        rowSpan={6}
        colSpan={6}
        component={Map}
        options={{ label: "World Map" }}
      />
      <Box label="Recent commits" row={4} col={3} rowSpan={8} colSpan={3} />
      <Box label="GitHub" row={6} col={6} rowSpan={6} colSpan={6} />
    </Grid>
  );
};
