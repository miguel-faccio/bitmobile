import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Ícone de voltar
const velha = ({ navigation}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handlePress = (index) => {
    if (board[index] || winner) return; // Impede sobrescrever ou jogar após vitória
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) {
      setWinner("Empate");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index) => (
    <TouchableOpacity
      style={styles.square}
      onPress={() => handlePress(index)}
    >
      <Text style={[styles.text, board[index] === "X" ? styles.redText : styles.blueText]}>
        {board[index]}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../assets/fundo.jpg")} // Certifique-se de ter a imagem aqui
      style={styles.container}
    >
        {/* Cabeçalho personalizado */}
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Jogo da Velha</Text>
    </View>
    <View style={styles.gamecontainer}>
      {winner ? (
        <Text style={styles.winnerText}>
          {winner === "Empate" ? "Deu Empate!" : `${winner} venceu!`}
        </Text>
      ) : (
        <Text style={[styles.turnIndicator, isXNext ? styles.redText : styles.blueText]}>
          Turno: {isXNext ? "X" : "O"}
        </Text>
      )}
      <View style={styles.board}>
        <View style={styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetText}>Reiniciar</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    
  },
  header: {
    backgroundColor: "#C8E6C9", // Rosa
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  headerTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  gamecontainer:{
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  board: {
    backgroundColor: "#C8E6C9", // Verde pastel
    padding: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: "#A5D6A7", // Verde pastel mais escuro
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
  },
  redText: {
    color: "#E57373", // Vermelho pastel
  },
  blueText: {
    color: "#64B5F6", // Azul pastel
  },
  turnIndicator: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 10,
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#81C784", // Verde pastel
    borderRadius: 5,
  },
  resetText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export default velha;
