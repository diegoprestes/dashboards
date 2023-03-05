import React, { useState, useMemo } from "react";
import figlet from "figlet";
import weather from "weather-js";
import util from "util";
import useInterval from "@use-it/interval";
import { useRequest } from "../hook/useRequest";
import chalk from "chalk";
import gradient from "gradient-string";
import { Box } from "./Box";

const findWeather = util.promisify(weather.find);

const FONTS = [
  "Straight",
  "ANSI Shadow",
  "Shimrod",
  "doom",
  "Big",
  "Ogre",
  "Small",
  "Standard",
  "Bigfig",
  "Mini",
  "Small Script",
  "Small Shadow",
];

const formatWeather = ([results]) => {
  const { location, current, forecast } = results;
  const degreeType = location.degreetype;
  const temperature = `${current.temperature}°${degreeType}`;
  const conditions = current.skytext;
  const low = `${forecast[1].low}°${degreeType}`;
  const high = `${forecast[1].high}°${degreeType}`;

  return `${chalk.yellow(temperature)} and ${chalk.green(
    conditions
  )} (${chalk.blue(low)} -> ${chalk.red(high)})`;
};

export const Today = ({
  updateInterval = 900000,
  search = "Pelotas, RS",
  degreeType = "C",
  top,
  left,
  width,
  height,
}) => {
  const boxProps = { top, left, width, height };
  const [fontIndex, setFontIndex] = useState(0);
  const [now, setNow] = useState(new Date());
  const options = useMemo(() => ({ search, degreeType }), [search, degreeType]);
  const weather = useRequest(findWeather, options, updateInterval);

  useInterval(() => {
    // setFontIndex(fontIndex + 1);
    setNow(new Date());
  }, 60000); // 1 minute

  let date = now.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  let time = figlet.textSync(
    now.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
    {
      font: FONTS[fontIndex % FONTS.length],
    }
  );

  let weatherText = "";
  if (weather.status === "loading") {
    weatherText = "Loading...";
  } else if (weather.status === "error") {
    weatherText = `Error: ${weather.error}`;
  } else {
    weatherText = formatWeather(weather.data);
  }

  return (
    <Box label="Today" {...boxProps}>
      <text right={1}>{`${chalk.blue(date)}`}</text>
      <text top="center" left="center">{`${gradient.rainbow.multiline(
        time
      )}`}</text>
      <text top="100%-3" left={1}>{`${weatherText}`}</text>
    </Box>
  );
};
