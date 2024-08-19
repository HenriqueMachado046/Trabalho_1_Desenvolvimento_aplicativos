import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    message: {
        fontSize: 50,
        fontWeight: '500',
        color: '#F5F5F5', 
    },
    containerHeader: {
        flex: 0.2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0055A4', 
    },
    containerForm: {
        flex: 1.0,
        width: '100%',
        paddingHorizontal: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: '-55px'
    },
    label: {
        marginTop: 50,
        fontSize: 20,
        fontWeight: '600',
        color: '#003366', 
    },
    input: {
        fontSize: 20,
        fontWeight: '600',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#003366',
        color: '#003366',
        outline: 'none',
    },
    containerButtons: {
        flex: 0.3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0055A4'
    },
    buttonLogin: {
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginBottom: 30,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
    },
    buttonLoginText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
});
