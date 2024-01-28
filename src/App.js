import './App.css';
import React, {useState,useEffect} from 'react';
import smallDog from './assets/lll.png';
import smallDog2 from './assets/llr.png';
import telegram from './assets/telegram.svg';
import twitter from './assets/twitter.svg';
import Loader from './components/Lodaer';
import solanza from './assets/game.png';

function App() {
  const ticker = "$SOLANZA";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // Adjust the duration as needed

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App">
      <Loader loading={loading}/>
      <div className="main">
        <div className="disclaimer">
          <h2 className="discText">*If we reach 1mil mcap, we will deploy a real casion game based on <br/>
            most popular tokens: Book of PEPE | Harambe HOT | The Gate of Solana | MyroHouse
          </h2>
        </div>
        <div className="section">
          <img className="sweetsolanza" alt="sweetsolanza" src={solanza} />
          <div className="socialBlock">
            <a href="https://t.me/Sweetsolanza"><img alt="telegram" className="telegram social" src={telegram}/></a>
            <a href="https://twitter.com/sweetsolanza"><img alt="twitter" className="twitter social" src={twitter}/></a>
          </div>
          <a href="https://raydium.io/"><button className="button">
            SPIN {ticker}
          </button></a>
        </div>
        </div>
        <div className="runningDog">
        <div className="imgBlock"><img alt="dog33" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog34" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog35" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog36" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog37" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog38" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog39" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog40" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog41" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog42" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog43" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog44" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog45" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog46" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog47" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog48" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog49" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog50" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog51" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog52" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog53" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog54" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog55" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog56" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog57" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog58" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog59" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog60" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog61" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog62" className="smallDog" src={smallDog2}/></div>
        <div className="imgBlock"><img alt="dog63" className="smallDog" src={smallDog}/></div>
        <div className="imgBlock"><img alt="dog64" className="smallDog" src={smallDog2}/></div>
        </div>
    </div>
  );
}

export default App;
