import React, { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../../styles/signin';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setContextEmail } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleLogin = () =>{
        if(email.trim() === "" || password.trim() === ""){
            alert("É obrigatório cadastrar um e-mail e senha");
            return;
        }

        setContextEmail(email);
        navigation.navigate('Quiz')

    }

    return(
        <View style = {styles.container}>
        <Animatable.View animation={""} delay={0} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo!</Text>
        </Animatable.View>
        <Animatable.View animation={""} delay={0} style={styles.containerForm}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
            />
        </Animatable.View>
        <Animatable.View delay={0} animation='' style={styles.containerButtons}>
            <TouchableOpacity
                style={styles.buttonLogin}
                onPress={handleLogin}
            >
                <Text style={styles.buttonLoginText}>Entrar</Text>
            </TouchableOpacity>
        </Animatable.View>
        </View>
    )
}