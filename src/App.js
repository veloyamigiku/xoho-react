import './App.css';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [footerData, setFooterData] = useState({});
  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/footer_link')
      .then(res => {
        setFooterData(res.data);
      });
  });
  return (
    <div id="wrapper">
      <div id="header">
        <Header />
      </div>
      <div id="main">
        <div id="menu"></div>
        <div id="contents"></div>
      </div>
      <div id="footer">
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default App;
