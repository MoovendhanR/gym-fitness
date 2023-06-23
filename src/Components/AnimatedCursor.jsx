import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      bg="grey"
      color="black"
      width="20px"
      height="20px"
      borderRadius="50%"
      position="fixed"
      zIndex="9999"
      pointerEvents="none"
      left={`${position.x}px`}
      top={`${position.y}px`}
      animation="cursorAnimation 1s infinite"
    />
  );
};

export default AnimatedCursor;
