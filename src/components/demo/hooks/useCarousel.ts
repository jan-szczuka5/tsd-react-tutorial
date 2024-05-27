import { useState } from "react";

export default function useCarousel(element: HTMLElement[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => {
      if (prev === element.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return element.length - 1;
      }
      return prev - 1;
    });
  };

  return {
    currentIndex,
    next,
    prev,
    currentElement: element[currentIndex],
  };
}
