import { useRef, useState, useEffect } from "react";

export default function Magnetic({ children }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = node.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x: x * 0.3, y: y * 0.3 }); // adjust multiplier for intensity
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    node.addEventListener("mousemove", handleMouseMove);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mousemove", handleMouseMove);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const { x, y } = position;

  return (
    <div
      ref={ref}
      style={{
        transform: `translate(${x}px, ${y}px)`,
        transition: x === 0 && y === 0 ? "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)" : "none",
        display: "inline-block"
      }}
    >
      {children}
    </div>
  );
}
