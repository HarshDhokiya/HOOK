import { useEffect, useState } from "react";

function Cats() {
  const [fact, setFact] = useState(null);      // Corrected name
  const [loading, setLoading] = useState(true); // Corrected name

  useEffect(() => {
    fetch('https://catfact.ninja/fact?max_length=100')
      .then((response) => response.json())
      .then((data) => {
        setFact(data.fact);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching fact:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading Cat Fact...</p>;
  }

  return (
    <>
      <h2>Cat Fact</h2>
      <p>{fact}</p>
    </>
  );
}

export default Cats;
