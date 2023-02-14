import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Navin from './Components/Navin';
import apikey from './data/config';
import NewsContent from './NewsContent/NewsContent';

function App() {
  const[category,setCategory] = useState('general');
  const[newsArray,setNewsArray] = useState([]);
  const[newsResult,setNewsResult] = useState();
  const newsApi = async() => {
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`)

      setNewsArray(news.data.articles)
      setNewsResult(news.data.totalResults)
      
    } catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    newsApi();
  }, [newsResult,category])
  console.log(newsArray)  
  
  return (
    <div className="App">
      <Navin setCategory={setCategory}/>
      <NewsContent />
    </div>
  );
}

export default App;
