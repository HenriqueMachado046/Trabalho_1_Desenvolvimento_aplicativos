import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/result';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../../contexts/auth';
import { quiz } from '../../utilities/QuizData'

export default function Result() {
    const { contextEmail, userAnswers } = useContext(AuthContext);
    const correctAnswers = quiz.reduce((count, question, index) => {
      const answer = userAnswers[index];
      if (answer && answer === question.correct_option && index in userAnswers) {
        return count + 1;
      }
      return count;
    }, 0);
  
    return (
      <View style={styles.container}>
        <Animatable.View animation={""} delay={0} style={styles.container}>
          <Text style={styles.textResult}>
            Parabéns, {contextEmail}!!
          </Text>
          <Text style={styles.textResult}>
            Você acertou: {correctAnswers} de {quiz.length}.
          </Text>

        </Animatable.View>
      </View>
    );
  }
  