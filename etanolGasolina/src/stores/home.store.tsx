import {action, observable} from 'mobx';

export default class HomeStore {
  @observable numbers = 0;
  @observable etanol = 0;
  @observable gasolina = 0;
  @observable resultado = 0;
  @observable msgRetorno = '';
  @observable percentual = '';

  @action handleForm = input => {
    const key = Object.keys(input)[0];
    const value = input[key];
    this[key] = value;
  };

  @action calcularCusto = () => {
    this.etanol = Number(this.etanol.toString().replace(',', '.'));
    this.gasolina = Number(this.gasolina.toString().replace(',', '.'));

    if (isNaN(Number(this.etanol))) {
      this.etanol = 0;
    }

    if (isNaN(Number(this.gasolina))) {
      this.gasolina = 0;
    }
    this.msgRetorno = '';
    if (this.gasolina <= 0 || this.etanol <= 0) {
      this.resultado = 0;
      this.msgRetorno =
        'Valor da gasolina e do etanol precisam ser maior que zero';
    } else {
      this.resultado = this.etanol / this.gasolina;
      this.percentual = this.resultado.toFixed(2);
      if (this.resultado <= 0.7) {
        this.msgRetorno =
          'Percentual é ' + this.percentual + ' compensa abastercer com etanol';
      } else {
        this.msgRetorno =
          'Percentual é ' +
          this.percentual +
          ' compensa abastercer com gasolina';
      }
    }
  };
}
const homeStore = new HomeStore();
export {homeStore};
