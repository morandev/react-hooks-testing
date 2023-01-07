import { useRef } from "react";
import { useLayoutEffect } from "react";

export const Quote = ({ quote, author }) => {
     const pRef = useRef();
     const [boxSize, setBoxSize] = useState({ width: 0, heigth: 0 });

     useLayoutEffect(() => {
          const { width, height } = pRef.current.getBoundingClientRect();
          setBoxSize(width, height);
     }, []);

     return (
          <>
               <blockquote className="blockquote text-end d-flex">
                    <p className="mb-3" ref={pRef}>
                         {quote}
                    </p>
                    <footer className="blockquote-footer">{author}</footer>
               </blockquote>
               <Code>{JSON.stringify(boxSize)}</Code>
          </>
     );
};
