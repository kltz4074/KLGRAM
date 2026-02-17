import { useRef, useLayoutEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

function AnimatedPage({ children }: Props) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useLayoutEffect(() => {
    if (!innerRef.current) return;

    const resize = () => {
      setHeight(innerRef.current!.scrollHeight);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(innerRef.current);

    return () => observer.disconnect();
  }, [children]);

  return (
    <div
      className="page"
      style={{
        height: height,
        transition: "height 300ms ease"
      }}
    >
      <div ref={innerRef}>
        {children}
      </div>
    </div>
  );
}

export default AnimatedPage;
