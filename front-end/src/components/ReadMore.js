import React from 'react';
import "./ReadMore.css";
import * as lodash from "https://cdn.skypack.dev/lodash@4.17.21";

// Component created with help from Siniša Nimčević's article on javascript.plainenglish.io

export default function ReadMoreText ({ text }) {
  const [clamped, setClamped] = React.useState(true);
  const [showButton, setShowButton] = React.useState(true);
  const containerRef = React.useRef(null);
  const handleClick = () => setClamped(!clamped);

  React.useEffect(() => {
    const hasClamping = (el) => {
      const { clientHeight, scrollHeight } = el;
      return clientHeight !== scrollHeight;
    };

    const checkButtonAvailability = () => {
      if (containerRef.current) {
        // Save current state to reapply later if necessary.
        const hadClampClass = containerRef.current.classList.contains("clamp");
        // Make sure that CSS clamping is applied if aplicable.
        if (!hadClampClass) containerRef.current.classList.add("clamp");
        // Check for clamping and show or hide button accordingly.
        setShowButton(hasClamping(containerRef.current));
        // Sync clamping with local state.
        if (!hadClampClass) containerRef.current.classList.remove("clamp");
      }
    };

    const debouncedCheck = lodash.debounce(checkButtonAvailability, 50);

    checkButtonAvailability();
    window.addEventListener("resize", debouncedCheck);

    return () => {
      window.removeEventListener("resize", debouncedCheck);
    };
  }, [containerRef]);

  const classCont = "long-text" + (clamped ? " clamp" : "");

  return (
    <div>
      <div
        ref={containerRef}
        className={classCont}
      >
        {text}
      </div>
      <div>
        {showButton && (
            <div onClick={handleClick}><h4>Read {clamped ? "more" : "less"}</h4></div>
        )}
      </div>
      
    </div>
  );
};
