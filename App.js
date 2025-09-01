import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcular = (operacao) => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);
    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Valores inválidos');
      return;
    }
    let res = 0;
    switch (operacao) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;
      case 'x':
        res = num1 * num2;
        break;
      case '/':
        res = num2 !== 0 ? num1 / num2 : 'Divisão por zero';
        break;
      default:
        res = 'Operação inválida';
    }
    setResultado(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro valor"
        keyboardType="numeric"
        value={valor1}
        onChangeText={setValor1}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo valor"
        keyboardType="numeric"
        value={valor2}
        onChangeText={setValor2}
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => calcular('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calcular('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calcular('x')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calcular('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultado}>
        {resultado !== null ? `Resultado: ${resultado}` : ''}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#2fb806ff',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 5,
    minWidth: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 22,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
