import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const emojis = ["🍎", "🍊", "🍇", "🍉", "🍌", "🍒", "🍓", "🍍"]; // Frutas únicas


const GameScreen = () => {
  const navigation = useNavigation();
  const [gameStarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [lives, setLives] = useState(10);
  const [grid, setGrid] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matched, setMatched] = useState([]);

  // Controle do tempo
  useEffect(() => {
    let timer;
    if (gameStarted) {
      timer = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [gameStarted]);

  // Inicia o jogo
  const startGame = () => {
    setGameStarted(true);
    setTime(0);
    setLives(10);
    setMatched([]);
    setSelected([]);
    const shuffledGrid = shuffleGrid([...emojis, ...emojis]);
    setGrid(shuffledGrid);
  };

  // Embaralha a grade de emojis
  const shuffleGrid = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.map((emoji, index) => ({ id: index, emoji, revealed: false }));
  };

  // Lida com o clique nas cartas
  const handleCardPress = (card) => {
    if (selected.length === 2 || selected.some((c) => c.id === card.id)) return;

    setSelected((prev) => [...prev, card]);

    // Revela a carta temporariamente
    setGrid((prev) =>
      prev.map((item) =>
        item.id === card.id ? { ...item, revealed: true } : item
      )
    );

    // Verifica a combinação
    if (selected.length === 1) {
      const [firstCard] = selected;
      if (firstCard.emoji === card.emoji) {
        setMatched((prev) => [...prev, firstCard.id, card.id]);
        setSelected([]);
      } else {
        // Reduz as vidas ao errar
        setTimeout(() => {
          setGrid((prev) =>
            prev.map((item) =>
              item.id === firstCard.id || item.id === card.id
                ? { ...item, revealed: false }
                : item
            )
          );
          setSelected([]);
          setLives((prev) => prev - 1);
        }, 1000);
      }
    }
  };

  // Verifica o fim do jogo
  useEffect(() => {
    if (matched.length === grid.length && grid.length > 0) {
      setGameStarted(false);
      Alert.alert("Parabéns!", `Você completou o jogo em ${time} segundos!`);
    } else if (lives === 0) {
      setGameStarted(false);
      Alert.alert("Fim de Jogo", "Você perdeu todas as vidas!");
    }
  }, [matched, lives]);

  return (
    <View style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.navText}>Little Fruits</Text>
        {gameStarted && <Text style={styles.timerText}>{time}s</Text>}
      </View>

      {!gameStarted ? (
        <View style={styles.center}>
          <TouchableOpacity style={styles.startButton} onPress={startGame}>
            <Text style={styles.startButtonText}>Iniciar Jogo</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
         <Text style={styles.livesText}>Vidas: {lives}</Text>
        <View style={styles.gridContainer}>
          {/* Grade de Cartas */}
          {/* Vidas */}
         
        <View style={styles.grid}>
            {grid.map((card) => (
              <TouchableOpacity
                key={card.id}
                style={[
                  styles.card,
                  matched.includes(card.id) || card.revealed
                    ? styles.revealedCard
                    : styles.hiddenCard,
                ]}
                onPress={() => handleCardPress(card)}
              >
                {matched.includes(card.id) || card.revealed ? (
                  <Text style={styles.cardText}>{card.emoji}</Text>
                ) : null}
              </TouchableOpacity>
            ))}
          </View>
           </View>
           </>
        
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6f9",
    
  },
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#ffd5e5",
    paddingTop: 30,
  },
  navText: {
    color: "#88c9a1",
    fontSize: 18,
    fontWeight: "bold",
  },
  timerText: {
    color: "#88c9a1",
    fontSize: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  startButton: {
    backgroundColor: "#ffd5e5",
    padding: 16,
    borderRadius: 8,
  },
  startButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  gridContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  card: {
    width: Dimensions.get("window").width / 5 - 20,
    height: Dimensions.get("window").width / 5 - 20,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  hiddenCard: {
    backgroundColor: "#ffd5e5",
  },
  revealedCard: {
    backgroundColor: "#fef6f9", // Fundo pastel claro para cartas reveladas
    borderColor: "#88c9a1", // Borda verde pastel
    borderWidth: 2,
  },
  cardText: {
    fontSize: 24,
    color: "#88c9a1",
  },
  livesText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#88c9a1",
    marginTop: 10,
  },
});

export default GameScreen;
