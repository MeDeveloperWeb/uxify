import { useEffect } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 6, stiffness: 40, restDelta: 0.001 };

export function useFollowPointer(ref, boundaryRef, obstructRef) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current || !boundaryRef.current || !obstructRef.current) return;

    // Get the boundary and obstructing elements' bounding boxes
    const boundary = boundaryRef.current.getBoundingClientRect();
    const obstruct = obstructRef.current.getBoundingClientRect();

    const boundaryTop = boundary.top + window.scrollY;
    const boundaryBottom = boundary.bottom + window.scrollY;
    const boundaryLeft = boundary.left + window.scrollX;
    const boundaryRight = boundary.right + window.scrollX;

    const obstructTop = obstruct.top + window.scrollY;
    const obstructBottom = obstruct.bottom + window.scrollY;
    const obstructLeft = obstruct.left + window.scrollX;
    const obstructRight = obstruct.right + window.scrollX;

    // Helper function to clamp a value within a range
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;
      const elementWidth = element.offsetWidth;
      const elementHeight = element.offsetHeight;

      // Calculate new positions for the element
      let newX = clientX - element.offsetLeft - elementWidth / 2;
      let newY =
        clientY - element.offsetTop - elementHeight / 2 + window.scrollY;

      // Clamp within the boundaryRef
      let clampedX = clamp(
        clientX,
        boundaryLeft + elementWidth / 2,
        boundaryRight - elementWidth / 2
      );
      let clampedY = clamp(
        clientY,
        boundaryTop + elementHeight / 2,
        boundaryBottom - elementHeight / 2
      );

      // Adjust position if the element is overlapping with the obstructing element
      if (
        clampedX + elementWidth / 2 > obstructLeft &&
        clampedY + elementWidth / 2 > obstructTop &&
        clampedY < obstructBottom
      ) {
        clampedY = obstructBottom;
      }

      // Update the motion values
      frame.read(() => {
        xPoint.set(clampedX - element.offsetLeft - elementWidth / 2);
        yPoint.set(clampedY - element.offsetTop - elementHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, boundaryRef, obstructRef, xPoint, yPoint]);

  return { x, y };
}
