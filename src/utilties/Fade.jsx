import React, { useEffect, useRef, useState } from "react";

// Custom IntersectionObserverComponent
function IntersectionObserverComponent({
  children,
  root,
  rootMargin,
  threshold,
  direction,
}) {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);

          // Stop observing when the element intersects
          if (entry.isIntersecting) {
            observer.unobserve(elementRef.current);
            // Remove the reference to the element
            elementRef.current = null;
          }
        });
      },
      {
        root: root,
        rootMargin: rootMargin,
        threshold: threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup function for unobserving when the component unmounts
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [root, rootMargin, threshold]); // Remove dependencies, as it's only called once

  //seting the direction
  let animationValue;
  switch (direction) {
    case "bottom":
      animationValue = "fadeAndTranslateTop 1s forwards";
      break;
    case "left":
      animationValue = "fadeAndTranslateLeft 1s forwards";
      break;
    case "right":
      animationValue = "fadeAndTranslateRight 1s forwards";
      break;
    default:
      animationValue = "fadeAndTranslateTop 1s forwards";
  }

  // Clone the child element and apply the style directly
  const childWithStyle = React.cloneElement(children, {
    style: {
      ...children.props.style,
      opacity: "0",
      animation: isIntersecting ? animationValue : "",
    },
    ref: elementRef,
  });

  return childWithStyle;
}

/*
1- root: A DOM element that is used as the viewport for checking visibility of the target. If not specified, the browser viewport is used by default.

2- rootMargin: A margin around the root element. You can set it to control when the target becomes visible. The margin is specified in pixels or as a percentage of the target's size. The default rootMargin value is "0px", which means that the target element will be considered in the viewport when any part of it enters the viewport.

3- threshold: This can be a single number or an array of numbers, which indicate at what ratio of the target's visibility the callback should be executed. For example, [0, 0.25, 0.5, 0.75, 1] would trigger the callback at 0%, 25%, 50%, 75%, and 100% visibility. The default threshold value is [0], which means that the IntersectionObserver callback is triggered when any part of the target element enters or exits the viewport.
*/
export default function Fade({
  children,
  root,
  rootMargin,
  threshold,
  direction,
}) {
  const childElements = React.Children.toArray(children);

  return (
    <>
      {childElements.map((child, index) => (
        <IntersectionObserverComponent
          key={index}
          root={root}
          rootMargin={rootMargin}
          threshold={threshold}
          direction={direction}
        >
          {child}
        </IntersectionObserverComponent>
      ))}
    </>
  );
}
Fade.defaultProps = {
  root: null,
  rootMargin: "0px",
  threshold: [0],
};
