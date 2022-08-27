import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../../components/BotonCalc';
import { styles } from './style';

enum Operadores {
  sumar, restar, multiplicar, dividir
}

export const Calculadora = () => {

  const [monto, setMonto] = useState('0');
  const [total, setTotal] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const calcular = ()=>{
    const num1 = Number(total);
    const num2 = Number(monto);

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setMonto(`${num1 + num2}`);
        break;

      case Operadores.restar:
        setMonto(`${num1 - num2}`);
        break;

      case Operadores.multiplicar:
        setMonto(`${num1 * num2}`);
        break;

      case Operadores.dividir:
        setMonto(`${num1 / num2}`);
        break;

      default:
        break;
    }

    setTotal('0');
  };

  const btnSumar = ()=>{
    primerNumero();
    ultimaOperacion.current = Operadores.sumar;
  };

  const btnRestar = ()=>{
    primerNumero();
    ultimaOperacion.current = Operadores.restar;
  };

  const btnMultiplicar = ()=>{
    primerNumero();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const btnDividir = ()=>{
    primerNumero();
    ultimaOperacion.current = Operadores.dividir;
  };

  const primerNumero = ()=>{
    if (monto.endsWith('.')) {
      setTotal(monto.slice(0, -1));
    } else {
      setTotal(monto);
    }
    setMonto('0');
  };

  const insertarNumero = (numero: string)=>{

    // no admitir ma de un punto
    if (monto.includes('.') && numero === '.') {return;}

    // admitir decimales
    if (monto.startsWith('0') || monto.startsWith('-0')) {

      if (numero === '.') {
        setMonto(monto + numero);
        // evaluar si hay otro cero y es un monto
      }  else if (numero === '0' && monto.includes('.')){
        setMonto(monto + numero);

        // evaluar si es diferente de 0 y no tiene un punto
      } else if (numero !== '0' && !monto.includes('.')){
        setMonto(numero);

        // evitar 000.000
      } else if (numero === '0' && !monto.includes('.')){
        setMonto(monto);
      } else {
        setMonto(monto + numero);
      }

    } else {
      setMonto(monto + numero);
    }

  };

  const limpiar = ()=>{
    setMonto('0');
    setTotal('0');
  };

  return (
    <View style={styles.ContenerdorCalculadora}>
        <Text style={styles.resultadoPequeno}>{total}</Text>
        <Text style={styles.resultado}>{monto}</Text>

        <View style={styles.fila}>
          <BotonCalc texto="C" color="grisCla" accion={limpiar}/>
          <BotonCalc texto="+/-" color="grisCla" accion={insertarNumero} />
          <BotonCalc texto="%" color="grisCla" accion={insertarNumero} />
          <BotonCalc texto="/" color="naranja" accion={btnDividir} />
        </View>

        <View style={styles.fila}>
          <BotonCalc texto="7" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="8" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="9" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="X" color="naranja" accion={btnMultiplicar} />
        </View>

        <View style={styles.fila}>
          <BotonCalc texto="4" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="5" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="6" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="-" color="naranja" accion={btnRestar} />
        </View>

        <View style={styles.fila}>
          <BotonCalc texto="1" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="2" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="3" color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="+" color="naranja" accion={btnSumar} />
        </View>

        <View style={styles.fila}>
          <BotonCalc texto="0" color="grisOsc" grande accion={insertarNumero} />
          <BotonCalc texto="." color="grisOsc" accion={insertarNumero} />
          <BotonCalc texto="=" color="naranja" accion={calcular} />
        </View>

    </View>
  );
};
