import React, { useEffect, useMemo, useState } from 'react'


const options = {
  root: null,
  rootMargin: "200px 0px 200px 0px",
  threshold: 1,
}


export default function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting), options
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);
    console.log(observer)
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
