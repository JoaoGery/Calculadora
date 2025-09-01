import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState(null);

  const handlePressNumero = (value) => {
    setInput((prev) => prev + value);
  };

  const handlePressSoma = () => {
    setInput((prev) => prev + '+');
  };

  const handlePressSubtracao = () => {
    setInput((prev) => prev + '-');
  };

  const handlePressMultiplicacao = () => {
    setInput((prev) => prev + 'x');
  };

  const handlePressDivisao = () => {
    setInput((prev) => prev + '/');
  };

  const handlePressIgual = () => {
    try {
      const expressao = input.replace(/x/g, '*');
      const res = eval(expressao);
      setResultado(res);
    } catch (e) {
      setResultado('Erro');
    }
  };

  const handlePressClear = () => {
    setInput('');
    setResultado(null);
  };

  const handleClear = () => {
    setInput('');
    setResultado(null);
  };

  const handleResult = () => {
    try {
      
      const expressao = input.replace(/x/g, '*');
      
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
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('7')}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('8')}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('9')}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePressDivisao}><Text style={styles.buttonText}>/</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('4')}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('5')}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('6')}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePressMultiplicacao}><Text style={styles.buttonText}>x</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('1')}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('2')}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('3')}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePressSubtracao}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={handlePressClear}><Text style={styles.buttonText}>C</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePressNumero('0')}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePressIgual}><Text style={styles.buttonText}>=</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePressSoma}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
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
