import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Contents from './Contents';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Menu from './components/common/Menu';

function App() {
  const [footerData, setFooterData] = useState({});
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/footer_link')
      .then(res => {
        setFooterData(res.data);
      });
    axios
      .get('https://wonderful-ptolemy-a2705b.netlify.app/.netlify/functions/menu')
      .then(res => {
        setMenuData(res.data);
      })
  }, []);

  return (
    <div id="wrapper">
      <div id="header">
        <Header />
      </div>
      <div id="main">
        <div id="menu_wrapper">
          <div id="menu">
            <Menu data={menuData} />
          </div>
        </div>
        <div id="contents_wrapper">
          <div id="contents">
            <Router>
              <Contents />
            </Router>
          </div>
        </div>
      </div>
      <div id="footer">
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default App;
