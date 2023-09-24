import Button from './Button.jsx';
import '../styles/components/_form.scss';
import { useState } from 'react';

const Form = ({ user, valorIMC }) => {
  const [name, setName] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const handleInputChange = (e) => {
    e.preventDefault();

    const userData = { name, altura, peso };
    calculatorIMC(userData.altura, userData.peso);
    user(userData);
    // resetInput();
  };

  const formatAltura = (value) => {
    value = value.replace(/[,\.]/g, '');

    if (value.length >= 2) {
      const formattedValue =
        value.substring(0, 1) + '.' + value.substring(1, 3);
      setAltura(formattedValue);
    } else if (value.length === 1) {
      setAltura(value + '.');
    } else {
      setAltura(value);
    }
  };

  const resetInput = () => {
    setName('');
    setAltura('');
    setPeso('');
  };

  const calculatorIMC = (a, p) => {
    const peso = parseFloat(p);
    const altura = parseFloat(a);

    const resultImc = (peso / (altura * altura)).toFixed(1);
    const pesoMin = (18.6 * altura * altura).toFixed(1);
    const pesoMax = (24.9 * altura * altura).toFixed(1);

    const resultData = { pesoMin, pesoMax, resultImc };

    if (resultImc < 18.5) {
      valorIMC(resultData, 'Abaixo do normal');
    } else if (resultData <= 24.9) {
      valorIMC(resultData, 'Normal');
    } else if (resultData <= 30) {
      valorIMC(resultData, 'Sobrepeso');
    } else {
      valorIMC(resultData, 'Obesidade');
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
            value={altura}
            onChange={(e) => formatAltura(e.target.value)}
          />
        </label>
        <label>
          Peso:
          <input
            type="text"
            placeholder="Kg"
            required
            maxLength={3}
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
      </div>
      <Button>Calcular</Button>
    </form>
  );
};

export default Form;
