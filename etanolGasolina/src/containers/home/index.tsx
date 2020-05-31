import React, {Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {inject, observer} from 'mobx-react';

import HomeStore from '../../stores/home.store';

interface Props {
  homeStore: HomeStore;
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
  render() {
    const {
      etanol,
      gasolina,
      calcularCusto,
      handleForm,
      msgRetorno,
    } = this.props.homeStore;
    return (
      <>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Valor do Etanol (em R$)</Text>
          <TextInput
            value={etanol.toString()}
            onChangeText={etanol => handleForm({etanol})}
            keyboardType="numeric"
          />
          <Text>Valor da Gasolina (em R$)</Text>
          <TextInput
            value={gasolina.toString()}
            onChangeText={gasolina => handleForm({gasolina})}
            keyboardType="numeric"
          />
          <Button onPress={() => calcularCusto()} title="Calcular" />
          <Text>{msgRetorno}</Text>
        </View>
      </>
    );
  }
}
