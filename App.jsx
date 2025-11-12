import { useState } from 'react';
import AnalyzerForm from './components/AnalyzerForm';
import ResultList from './components/ResultList';
import Stats from './components/Stats';

export default function App() {
  const [refresh, setRefresh] = useState(0);

  function handleAnalyzed() {
    setRefresh(r => r + 1);
  }

  return (
    <div style={{ maxWidth:900, margin:'40px auto', padding:'0 16px', display:'grid', gap:16 }}>
      <h1>MERN Sentiment</h1>
      <p style={{ opacity:.8 }}>
        Type text or paste multiple lines; the server scores them with <code>wink-sentiment</code> and stores results in MongoDB.
      </p>

      <AnalyzerForm onAnalyzed={handleAnalyzed} />
      <Stats refresh={refresh} />
      <ResultList refresh={refresh} />

      <footer style={{ opacity:.6, marginTop:16 }}>
        Built with React + Vite • Express • MongoDB
      </footer>
    </div>
  );
}
