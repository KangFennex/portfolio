import { useState, useEffect } from "react";

export default function useWindowSize() {
  // if (typeof window !== "undefined") {
  //  return { width: 1200, height: 800 };
  // }

  //The code above as we have it here will not work.
  // And the reason is because a key rule of hooks is that they cannot be called
  // conditionally. As a result, we cannot have a conditional above our useState
  // or useEffect hook, before they are called. So to fix this, we’ll set the
  // initial value of useState conditionally. We’ll create a variable called isSSR,
  // which will perform the same check to see if the window is not equal to the
  // string undefined.

  // Must fix the issue below as it makes the search bar wonky on loading in mobile

  // const isSSR = typeof window !== "undefined";
  // const [windowSize, setWindowSize] = useState({
  //  width: isSSR ? 1200 : window.innerWidth,
  //  height: isSSR ? 800 : window.innerHeight,
  // });
  //* this was making the mobile wonky on leading because the browser thought it was
  // full screen

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
