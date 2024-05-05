import React, { useCallback, useRef } from "react";
import "./InfiniteScroll.css";

export default function InfiniteScroll({
  fetchMore,
  children,
  loadingMsg,
  loading,
  errorMsg,
  error,
  listLength,
  hasMore,
  classes,
}) {
  const observer = useRef();
  const lastItemRef = useCallback(
    (node) => {
      if (loading || error) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const itemsSection = classes ? classes.itemsSection : "";

  return (
    <div className={`infinite-scroll`}>
      <section className={itemsSection}>
        {React.Children.map(children, (child, index) => {
          if (index + 1 === listLength) {
            return React.cloneElement(child, {
              ref: lastItemRef,
            });
          }
          return React.cloneElement(child);
        })}
      </section>
      <section>
        {loading && hasMore && loadingMsg()}
        {error && errorMsg()}
      </section>
    </div>
  );
}
