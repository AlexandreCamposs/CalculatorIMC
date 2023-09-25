import Button from './Button.jsx';
import '../styles/components/_form.scss';
import { useState } from 'react';

const Form = ({ setUser, updateIMCValue }) => {
  const [userName, setUserName] = useState('');
  const [userHeight, setUserHeight] = useState('');
  const [userWeight, setUserWeight] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();

    const userData = { name: userName, altura: userHeight, peso: userWeight };
    calculatorIMC(userData.altura, userData.peso);
    setUser(userData);
    resetInput();
  };

  const formatHeight = (value) => {
    value = value.replace(/[,\.]/g, '');

    if (value.length >= 2) {
      const formattedValue =
        value.substring(0, 1) + '.' + value.substring(1, 3);
      setUserHeight(formattedValue);
    } else if (value.length === 1) {
      setUserHeight(value + '.');
    } else {
      setUserHeight(value);
    }
  };

  const resetInput = () => {
    setUserName('');
    setUserHeight('');
    setUserWeight('');
  };

  const calculatorIMC = (a, p) => {
    const peso = parseFloat(p);
    const altura = parseFloat(a);

    const resultImc = (peso / (altura * altura)).toFixed(1);
    const pesoMin = (18.6 * altura * altura).toFixed(1);
    const pesoMax = (24.9 * altura * altura).toFixed(1);

    const resultData = { pesoMin, pesoMax, resultImc };

    if (resultImc < 18.5) {
      updateIMCValue(resultData, 'Abaixo do normal');
    } else if (resultImc <= 24.9) {
      updateIMCValue(resultData, 'Normal');
    } else if (resultImc <= 30) {
      updateIMCValue(resultData, 'Sobrepeso');
    } else {
      updateIMCValue(resultData, 'Obesidade');
    }
  };

  return (
    <form onSubmit={handleInputChange}>
      <label>
        Nome:
        <input
          type="text"
          placeholder="ex: Alexandre"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <div className="form">
        <label>
          Altura:
          <input
            type="text"
            placeholder="M"
            required
            maxLength={4}
            value={userHeight}
            onChange={(e) => formatHeight(e.target.value)}
          />
        </label>
        <label>
          Peso:
          <input
            type="text"
            placeholder="Kg"
            required
            maxLength={3}
            value={userWeight}
            onChange={(e) => setUserWeight(e.target.value)}
          />
        </label>
      </div>
      <Button>Calcular</Button>
    </form>
  );
};

export default Form;
