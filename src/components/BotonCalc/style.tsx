import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    boton:{
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    botonGrisClaro: {
        backgroundColor: '#333333',
    },
    botonGrisOscuro: {
        backgroundColor: 'gray',
    },
    botonNaranja: {
        backgroundColor: '#FF9427',
    },
    botonNormal: {
        width: 80,
    },
    botonExtendido: {
        width: 180,
    },
});
