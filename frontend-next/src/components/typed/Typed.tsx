"use client";

import React from "react";
import Typed from "typed.js";

interface TypeProps {
  sentences: string[];
}

export const Type = ({ sentences }: TypeProps) => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: sentences,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
};
