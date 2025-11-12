import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/api' // <- use your backend port
});

export const analyze = (text) => API.post('/analyze', { text });
export const analyzeBatch = (texts) => API.post('/analyze/batch', { texts });
export const fetchAnalyses = (params = {}) => API.get('/analyses', { params });
export const fetchStats = () => API.get('/stats');
