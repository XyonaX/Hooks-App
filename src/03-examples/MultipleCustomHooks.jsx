import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"


export const MultipleCustomHooks = () => {
    
    const {counter,increment,reset,decrement} = useCounter(1);
    
    const { data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


    
    // console.log(data, isLoading, hasError);

    const {author, quote} = !!data && data[0];
    
    return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
            (isLoading) ? (

                <div className="alert alert-info text-center">
                Loading...
                </div>
            ) 
            : (
                <blockquote className="blockquote text-end">
                    <p className="mb-1.1">{ quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>

            )

        }

        <button onClick={() => increment() } className="btn btn-primary">
            Next Quote
        </button>
        <button onClick={() => reset() } className="btn btn-dark">
            Reset Quote
        </button>
        <button onClick={() => decrement()} className="btn btn-primary">
            Previous Quote
        </button>



    
    </>
  )
}
