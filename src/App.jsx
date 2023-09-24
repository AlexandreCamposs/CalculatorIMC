import './styles/components/_app.scss';

import { BsHouse } from 'react-icons/bs';
import { AiFillInfoCircle } from 'react-icons/ai';
import Form from './components/Form';

import ImageImc from '/IMC.jpg';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  const [dataValue, setDataValue] = useState({});
  const [messageImc, setMessageImc] = useState('');

  console.log(messageImc);

  const userValue = (user) => {
    setUser(user);
  };

  const valueImc = (data, message) => {
    setDataValue(data);
    setMessageImc(message);
  };

  console.log(user);
  console.log(dataValue);
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
          <Form user={userValue} valorIMC={valueImc} />
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
              <p>{user.name} seu índice IMC é :</p>
              <span>{dataValue.resultImc} kg/m²</span>
              <p>Peso ideal:</p>
              <span>
                {dataValue.pesoMin} a kg {dataValue.pesoMax}
              </span>
            </>
          )}
        </div>

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
      </div>
    </div>
  );
}

export default App;
// handleInputChange
