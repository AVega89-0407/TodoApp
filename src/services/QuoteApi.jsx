import { useState, useEffect } from 'react'
import { FaCommentDots } from "react-icons/fa";

function QuoteApi() {
const [quote, setQuote] = useState(null);
const [author, setAuthor] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
      setQuote(data.quote);
      setAuthor(data.author);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);


if (loading) {
    return <p>Data laddas...</p>;
  }
if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
    
    <p><FaCommentDots />Dagens citat: <br /> <br /> 
    "{quote}" <br /><br /> - <i>{author}</i></p>
    </>
  )
}

export default QuoteApi