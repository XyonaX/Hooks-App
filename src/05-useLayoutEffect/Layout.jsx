import { useCounter, useFetch } from "../hooks";
import { LoadingQuote,Quote } from "../03-examples";

export const Layout = () => {
    
    const {counter,increment,reset,decrement} = useCounter(1);
    
    const { data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);


    
    // console.log(data, isLoading, hasError);

    const {author, quote} = !!data && data[0];
    
    return (
    <>
        <h1 className="text-center">BreakingBad Quotes</h1>
        <hr />

        {/* {
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

        } */}

        {
            isLoading ? <LoadingQuote/>
            : <Quote author={author} quote={quote}/>
        }
    
        <div className="col text-center">
            <button onClick={() => increment() } className="btn btn-primary">
                Next Quote
            </button>
            <button onClick={() => reset() } className="btn btn-dark">
                Reset Quote
            </button>
            
        </div>
    
    </>
  )
}
