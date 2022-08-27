import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {styles} from './style';

interface Props {
    texto: string,
    color: 'grisCla' | 'grisOsc' | 'naranja',
    grande?: boolean,
    accion: (numero:string) => void;
}

export const BotonCalc = ({texto, color, grande = false, accion}: Props) => {

    const opBoton = {
        grisCla: styles.botonGrisOscuro,
        grisOsc: styles.botonGrisClaro,
        naranja: styles.botonNaranja,
        extendido: grande ? styles.botonExtendido : styles.botonNormal,
    };

    return (
        <TouchableOpacity onPress={()=> accion(texto)}>
            <View style={[styles.boton, opBoton[color], opBoton.extendido]}>
                <Text style={styles.botonTexto}>{texto}</Text>
            </View>
        </TouchableOpacity>
    );
};
