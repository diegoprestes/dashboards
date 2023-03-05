import { useCallback, useEffect, useState } from "react";
import useInterval from "@use-it/interval";

export const useRequest = (promise, options, interval = null) => {
  const [state, setState] = useState({
    status: "loading",
    error: null,
    data: null,
  });

  const request = useCallback(async (options) => {
    setState({ status: "loading", error: null, data: null });
    let data;
    try {
      data = await promise(options);
      setState({ status: "complete", error: null, data });
    } catch (error) {
      setState({ status: "error", error, data: null });
    }
  }, [promise]);

  useEffect(() => {
    request(options);
  }, [options, request]);

  useInterval(() => {
    request(options);
  }, [interval]);

  return state;
};
