import React, { useEffect, useRef } from "react";
import Spinner from "../../shared/Spinner";

const InfinityScroll = props => {
  const { children, callNext, isNext, loading } = props;
  const targetRef = useRef();

  useEffect(() => {
    if (loading || !isNext) return;
    const observer = new IntersectionObserver(async entries => {
      if (entries[0].isIntersecting) {
        callNext();
      }
    });
    const target = targetRef.current;
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [loading, callNext, isNext]);

  return (
    <>
      {children}
      <div ref={targetRef}>{isNext && <Spinner />}</div>
    </>
  );
};

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  isNext: false,
  loading: false,
};

export default InfinityScroll;
