/* eslint no-unused-vars: 0 */
import React, { useState, useEffect } from 'react';
import getQuote from '../logic/getQuote';
import Spinner from './spinner';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);

  const newquote = async () => {
    const data = await getQuote();
    setQuote(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    newquote();
  }, []);

  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        {quote.quote ? (quote.quote.concat('- By ')) : null}
        {quote.author}
      </p>
      {loading ? <Spinner /> : null}
    </div>
  );
};
export default Quote;
