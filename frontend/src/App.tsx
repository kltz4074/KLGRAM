import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.text();  // Здесь должно быть .text(), чтобы получить текст
      })
      .then(text => setData(text))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div>
      <h1>From backend:</h1>
      {error ? <p>Error: {error}</p> : <p>{data}</p>}
    </div>
  );
}

export default App;
