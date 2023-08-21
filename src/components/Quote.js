import React, { useState, useEffect } from 'react';
import sad from '../assets/sad.jpg';
import loading from '../assets/loading-gif.webp';
import '../styles/Quote.css';

function Quotes() {
  const [data, setData] = useState([{ quote: '', author: '', category: '' }]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=happiness',
          {
            headers: {
              'X-Api-Key': 'ddtxRwCo6iOYlQaeEAp0uQ==ZzbDNPBF576xtidV',
            },
            contentType: 'application/json',
          },
        );
        const json = await res.json();
        setData(json[0]);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (hasError) {
    return (
      <div className="error-page">
        Something went wrong!
        <img src={sad} alt="sad" className="sadImg" />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-page">
        Loading...
        <img src={loading} alt="loading" className="loadingImg" />
      </div>
    );
  }

  return (
    <div className="quoteContainer">
      <div className="double-quotes">&ldquo;</div>
      {data.quote}
      <p>{data.author}</p>
    </div>
  );
}

export default Quotes;
