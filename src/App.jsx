import { useState } from 'react';

import Form from './components/Form';

import { BsHouse } from 'react-icons/bs';
import { AiFillInfoCircle } from 'react-icons/ai';

import ImageImc from '/IMC.jpg';
import './styles/components/_app.scss';

function App() {
  const [userData, setUserData] = useState({});
  const [imcData, setImcData] = useState({});
  const [messageImc, setMessageImc] = useState('');

  const handleUserUpdate = (data) => {
    setUserData(data);
  };

  const handleImcUpdate = (data, message) => {
    setImcData(data);
    setMessageImc(message);
  };

  console.log(messageImc);
  console.log(userData);
  console.log(imcData);
  return (
    <div className="app">
      <div className="container-calculator">
        <div className="container-data">
          <div className="container-logo">
            <div>
              <BsHouse />
              <h1>Calcule seu IMC</h1>
            </div>
            <AiFillInfoCircle />
          </div>
          <img src={ImageImc} alt="" />
          <Form setUser={handleUserUpdate} updateIMCValue={handleImcUpdate} />
        </div>
      </div>
      <div className="container-result">
        <div>
          <h2>{messageImc}</h2>
        </div>
        <div className="data">
          {messageImc && (
            <>
              {' '}
              <p>{userData.name} seu índice IMC é :</p>
              <span>{imcData.resultImc} kg/m²</span>
              <p>Peso ideal:</p>
              <span>
                {imcData.pesoMin} a kg {imcData.pesoMax}
              </span>
            </>
          )}
        </div>
        {messageImc && (
          <div className="container-graus">
            <div class=" degrad">
              <div class="box">
                <span> &lt; 18,5</span>
              </div>
              <div class="box">
                <span> 18,5 a 24,9</span>
              </div>
              <div class="box">
                <span> 25 a 30</span>
              </div>
              <div class="box">
                <span> &gt; 30</span>
              </div>
            </div>
            <div class="data-box ">
              <div class="box ">Magreza</div>
              <div class="box ">Peso ideal</div>
              <div class="box ">Sobrepeso</div>
              <div class="box ">Obesidade</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
// handleInputChange
