const getQuote = async () => {
  const request = await fetch('https://random-math-quote-api.herokuapp.com/');
  const quote = await request.json();
  return quote;
};
export default getQuote;