import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, ImageBackground, Button  } from 'react-native';

import background from '../assets/background.jpg'; 
import logo from '../assets/logo.png';
import button1 from '../assets/love.png';
import button2 from '../assets/memory.jpg';
import button3 from '../assets/quiz.png';
import button4 from '../assets/velha.jpg';



export default function Home({ navigation }) {
  
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.nav}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>BitTales</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Page1')}>
            <Image source={button1} style={styles.cardImage} />
           
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Page2')}>
            <Image source={button2} style={styles.cardImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Page3')}>
            <Image source={button3} style={styles.cardImage} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Page4')}>
            <Image source={button4} style={styles.cardImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 BitTales</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    backgroundColor: '#228B22', // Verde folha
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
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
    flexWrap: 'wrap', // Permite que os itens "quebrem linha"
    justifyContent: 'center', // Centraliza os cards horizontalmente
    alignItems: 'center', // Centraliza os cards verticalmente
    gap: 20, // Espaçamento entre os cards
    width: '100%', // Ocupa toda a largura disponível
  },
  card: {
    width: '40%', // Largura relativa (ajusta para caber 2 por linha)
    aspectRatio: 1, // Mantém os cards quadrados
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
    width: '100%',
    height: '100%', // Ajusta a proporção da imagem dentro do card
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
