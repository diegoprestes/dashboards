import React from "react";
import blessed from "blessed";
import { render } from "react-blessed";
import { AlphaSights } from "./dashboards/as";
// import { Test } from "./dashboards/test";

const App = () => {
  return <AlphaSights />;
  // return <Test />;
};

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: "Dashboard",
});

screen.key(["escape", "q", "C-c"], () => process.exit(0));

render(<App />, screen);
