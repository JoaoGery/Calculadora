import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState(null);

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResultado(null);
  };

  const handleResult = () => {
    try {
      // Substitui x por * para multiplicação
      const expressao = input.replace(/x/g, '*');
      // eslint-disable-next-line no-eval
      const res = eval(expressao);
      setResultado(res);
    } catch (e) {
      setResultado('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a expressão"
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        editable={false}
      />
      <View style={styles.numpad}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('x')}><Text style={styles.buttonText}>x</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handleClear}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleResult}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
        </View>
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
  numpad: {
    width: '80%',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
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
