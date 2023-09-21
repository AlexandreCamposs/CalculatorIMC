import Button from './Button.jsx';

import '../styles/components/_form.scss';

const Form = () => {
  return (
    <form>
      <div className="form">
        <label>
          Altura:
          <input type="text" name="altura" placeholder="0,00 m" />
        </label>
        <label>
          Peso:
          <input type="text" name="peso" placeholder="0,0 kg" />
        </label>
      </div>
      <Button>Calcular</Button>
    </form>
  );
};

export default Form;
