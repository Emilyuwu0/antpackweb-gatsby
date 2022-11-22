import React, { useEffect, useMemo, useState } from 'react'


const options = {
  root: null,
  rootMargin: "200px 0px 200px 0px",
  threshold: 1,
}

// new IntersectionObserver(([entry]) =>
//   setIsIntersecting(entry.isIntersecting), options
// ),
export default function useIsInViewport(ref: any) {
  const customIntersectionObserver = typeof IntersectionObserver !== 'undefined' && IntersectionObserver;
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () => {
      if (customIntersectionObserver) {
        return new customIntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), options)
      }
    },
    [],
  );

  useEffect(() => {
    observer?.observe(ref.current);
    console.log(observer)
    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
