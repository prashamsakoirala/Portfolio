// React hook to determine if the user has scrolled past a certain percentage of the viewport height

import { useState, useEffect } from "react";

export default function useScrolled(percent = 0.5) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const thresholdPx = window.innerHeight * percent;

    const onScroll = () => {
      setScrolled(window.scrollY > thresholdPx);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [percent]);

  return scrolled;
}
