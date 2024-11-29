import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

// Importando imagens da pasta 'assets'
import background from './assets/background.jpg'; 
import logo from './assets/logo.png';
import button1 from './assets/love.png';
import button2 from './assets/memory.jpg';
import button3 from './assets/quiz.png';
import button4 from './assets/click.png';


export default function App() {
  return (
    <ImageBackground source={background} style={styles.container}>
      {/* Cabeçalho (Nav) */}
      <View style={styles.nav}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>BitTales</Text>
      </View>

      {/* Corpo */}
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.card} onPress={() => alert('Navegar para página 1')}>
            <Image source={button1} style={styles.cardImage} />
            <Text style={styles.cardText}>Página 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => alert('Navegar para página 2')}>
            <Image source={button2} style={styles.cardImage} />
            <Text style={styles.cardText}>Página 2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => alert('Navegar para página 3')}>
            <Image source={button3} style={styles.cardImage} />
            <Text style={styles.cardText}>Página 2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => alert('Navegar para página 4')}>
            <Image source={button4} style={styles.cardImage} />
            <Text style={styles.cardText}>Página 2</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>

      {/* Rodapé (Footer) */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 BitTales</Text>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    backgroundColor: '#228B22', // Verde folha
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '90%',
  },
  card: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  footer: {
    backgroundColor: '#228B22', // Verde folha
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});
