import './styles/components/_app.scss';

import { BsHouse } from 'react-icons/bs';
import { AiFillInfoCircle } from 'react-icons/ai';
import Form from './components/Form';

import ImageImc from '../public/IMC.jpg';

function App() {
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
          <Form />
        </div>
      </div>
      <div className="container-result">
        <div>
          <h2>Peso Normal</h2>
        </div>
        <div>
          <p>Seu índice IMC é:</p>
          {}
          Peso ideal:
          {}
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default App;
