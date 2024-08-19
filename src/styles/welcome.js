import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0055A4' 
    },
    containerForm: {
        flex: 0.5,
        padding: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: 250
    },
    logoQuiz: {
        width: 250, 
        height: 250
    },
    button: {
        width: '100%',
        backgroundColor: '#003366', 
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#F5F5F5',
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    buttonText: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
