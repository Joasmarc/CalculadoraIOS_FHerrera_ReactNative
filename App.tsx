import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Calculadora } from './src/screens/Calculadora';
import { styles } from './src/screens/Calculadora/style';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Calculadora />
    </SafeAreaView>
  );
};

export default App;
