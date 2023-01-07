import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";
import LoadingQuote from "./LoadingQuote";
import { Quote } from "./Quote";

const MultipleCustomHooks = () => {
     const { counter, setCounter, increment, reset } = useCounter(1);

     const { data, isLoading, hasError } = useFetch(
          `https://www.breakingbadapi.com/api/quotes/${counter}`
     );

     return (
          <>
               <h1>Breaking bads quotes</h1>;
               <hr />
               {isLoading ? (
                    <LoadingQuote />
               ) : (
                    <Quote
                         quote={data[0]?.quote || ""}
                         author={data[0]?.author || ""}
                    />
               )}
               <button
                    className="btn btn-dark p-1"
                    onClick={() => {
                         if (counter == 30) {
                              setCounter(63);
                              return;
                         }

                         if (counter == 102) {
                              reset();
                              return;
                         }

                         increment();
                    }}
                    disabled={isLoading}
               >
                    Next Quote
               </button>
          </>
     );
};

export default MultipleCustomHooks;
