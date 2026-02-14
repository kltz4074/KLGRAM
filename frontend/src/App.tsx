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
        return res.text();
      })
      .then(text => setData(text))
      .catch(err => setError(err.message));
  }, []);

  return (
    <body>
      <div className="page">
        <div className="glassText">login window</div>
      </div>
    </body>
  );
}

export default App;
