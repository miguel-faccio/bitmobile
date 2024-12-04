import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícone de voltar
import background from '../assets/love-bg.png'; // Substitua pelo caminho da sua imagem de fundo

export default function Amor({ navigation }) {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);

  const calculateLove = () => {
    if (name1 && name2) {
      // Simulação de cálculo do amor (geração aleatória de um valor)
      const loveScore = Math.floor(Math.random() * 101);
      setResult(`${loveScore}% de compatibilidade!`);
    } else {
      setResult('Por favor, preencha os dois nomes.');
    }
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      {/* Cabeçalho personalizado */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Teste Love!</Text>
      </View>

      {/* Corpo do jogo */}
      <View style={styles.form}>
        <Text style={styles.label}>Nome 1:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o primeiro nome"
          placeholderTextColor="#aaa"
          value={name1}
          onChangeText={setName1}
        />

        <Text style={styles.label}>Nome 2:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o segundo nome"
          placeholderTextColor="#aaa"
          value={name2}
          onChangeText={setName2}
        />

        <TouchableOpacity style={styles.button} onPress={calculateLove}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        {result && <Text style={styles.result}>{result}</Text>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#FF69B4', // Rosa
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#FF69B4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
