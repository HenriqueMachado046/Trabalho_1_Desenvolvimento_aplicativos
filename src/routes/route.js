import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome/index.js'
import Signin from '../pages/Signin'
import Questions from '../pages/QuizPage'
import Result from '../pages/Result'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator
            screenOptions = {{
                headerStyle:{
                    backgroundColor:'#F5F5F5',
                    },
                    headerTintColor:'#0055A4',
                    headerTitleStyle:{
                        fontWeight: 'bold',
                        fontSize: 33.33,
                    },
                }}>
                    <Stack.Screen
                        name = "Bem Vindo!"
                        component = {Welcome}
                    />
                    <Stack.Screen
                        name = "Entrar"
                        component = {Signin}
                    />
                    <Stack.Screen
                        name = "Quiz"
                        component = {Questions}
                    />
                    <Stack.Screen
                        name = "Resultado"
                        component = {Result}
                    />
                </Stack.Navigator>

    )

}


