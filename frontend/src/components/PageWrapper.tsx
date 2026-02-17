import React, { useLayoutEffect, useRef } from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function PageWrapper({ className, children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    // ensure we can animate max-height
    el.style.overflow = 'hidden';
    el.style.transition = 'max-height 250ms ease';

    const resize = () => {
      // lock to current height to allow transition from -> to
      const prev = el.getBoundingClientRect().height;
      el.style.maxHeight = `${prev}px`;
      // force reflow
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      el.offsetHeight;
      const next = el.scrollHeight;
      el.style.maxHeight = `${next}px`;
    };

    // run once to initialize
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, [children]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
