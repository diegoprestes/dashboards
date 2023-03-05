import React from "react";

export const Box = ({
  label = "",
  top = 0,
  left = 0,
  width = 1,
  height = 1,
  isFocused = false,
  children,
}) => {
  const boxProps = { label, top, left, width, height };
  return (
    <box
      {...boxProps}
      border={{ type: "line" }}
      style={{ border: { fg: isFocused ? "green" : "blue" } }}
    >
      {children}
    </box>
  );
};
