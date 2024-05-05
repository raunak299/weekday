import React, {useRef } from "react"

export default function InfiniteScroll({ fetchMoreProducts, children, loadingMsg , listLength, loading,hasMore }) {

   const observer  = useRef();
   const lastProductElement = (node)=>{
        if(loading) return;
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries=>{
             if(entries[0].isIntersecting && hasMore){
                fetchMoreProducts();
             }
        });
        if(node) observer.current.observe(node);
   };


    return (
        <div className="infinite-scroll">
            {React.Children.map(children,(child,index)=>{
                if(index + 1 === listLength) {
                    return React.cloneElement(child,{
                        ref: lastProductElement
                    })
                }
                return React.cloneElement(child)
            })}
            {loading && hasMore && loadingMsg()}
        </div>
    )
}