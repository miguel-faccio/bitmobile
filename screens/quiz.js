import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';
import nerd from '../assets/nerd.png';

const questions = [
    { question: 'Qual é a capital do Brasil?', options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'], answer: 2 },
    { question: 'Quantos planetas existem no sistema solar?', options: ['7', '8', '9', '10'], answer: 1 },
    { question: 'Quem descobriu o Brasil?', options: ['Cristóvão Colombo', 'Pedro Álvares Cabral', 'Dom Pedro II', 'Vasco da Gama'], answer: 1 },
    { question: 'Qual é a fórmula da água?', options: ['H2O', 'CO2', 'O2', 'CH4'], answer: 0 },
    { question: 'Em que ano aconteceu a Revolução Francesa?', options: ['1789', '1804', '1776', '1492'], answer: 0 },
    { question: 'Qual o maior país do mundo?', options: ['Brasil', 'Rússia', 'China', 'Canadá'], answer: 1 },
    { question: 'Quem pintou a Mona Lisa?', options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'], answer: 1 },
    { question: 'Qual é o menor osso do corpo humano?', options: ['Fêmur', 'Martelo', 'Estribo', 'Tíbia'], answer: 2 },
    { question: 'Qual é o maior animal terrestre?', options: ['Elefante', 'Girafa', 'Rinoceronte', 'Hipopótamo'], answer: 0 },
    { question: 'Quem é o autor de "Dom Casmurro"?', options: ['Machado de Assis', 'José de Alencar', 'Carlos Drummond', 'Clarice Lispector'], answer: 0 },
    { question: 'Qual é o elemento químico com o símbolo "O"?', options: ['Ouro', 'Oxigênio', 'Osmium', 'Ósmio'], answer: 1 },
    { question: 'Qual é a língua mais falada no mundo?', options: ['Inglês', 'Mandarim', 'Espanhol', 'Árabe'], answer: 1 },
    { question: 'Qual é o país de origem do sushi?', options: ['China', 'Coreia do Sul', 'Japão', 'Tailândia'], answer: 2 },
    { question: 'Qual é o maior oceano do mundo?', options: ['Atlântico', 'Índico', 'Ártico', 'Pacífico'], answer: 3 },
    { question: 'Quem foi o primeiro presidente dos Estados Unidos?', options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'], answer: 1 },
    { question: 'Qual é a fórmula química do sal de cozinha?', options: ['NaCl', 'H2O', 'CO2', 'KCl'], answer: 0 },
    { question: 'Em que continente fica o Egito?', options: ['África', 'Ásia', 'Europa', 'América'], answer: 0 },
    { question: 'Quem escreveu "Cem Anos de Solidão"?', options: ['Mario Vargas Llosa', 'Gabriel García Márquez', 'Jorge Luis Borges', 'Pablo Neruda'], answer: 1 },
    { question: 'Qual é a capital da França?', options: ['Paris', 'Londres', 'Madri', 'Roma'], answer: 0 },
    { question: 'Em que país nasceu o famoso compositor Ludwig van Beethoven?', options: ['Alemanha', 'Áustria', 'França', 'Holanda'], answer: 1 },
    { question: 'Qual é a maior cidade do mundo em população?', options: ['São Paulo', 'Tóquio', 'Pequim', 'Nova Iorque'], answer: 1 },
    { question: 'Qual o símbolo químico do ferro?', options: ['Fe', 'Fi', 'FeO', 'F'], answer: 0 },
    { question: 'O que é o "Big Bang"?', options: ['Teoria sobre a origem do universo', 'Uma estrela supernova', 'O nome de um planeta', 'Uma tempestade solar'], answer: 0 },
    { question: 'Qual é o elemento químico mais abundante no universo?', options: ['Oxigênio', 'Hélio', 'Carbono', 'Hidrogênio'], answer: 3 },
    { question: 'Em que ano foi assinada a Declaração de Independência dos Estados Unidos?', options: ['1776', '1789', '1791', '1804'], answer: 0 },
    { question: 'Quem foi o primeiro imperador da China?', options: ['Qin Shi Huang', 'Liu Bang', 'Wudi', 'Tang Taizong'], answer: 0 },
    { question: 'Qual é o nome do processo de conversão de gás carbônico em oxigênio pelas plantas?', options: ['Respiração', 'Fotossíntese', 'Transpiração', 'Fermentação'], answer: 1 },
    { question: 'Qual filósofo é conhecido por sua teoria do "imperativo categórico"?', options: ['Aristóteles', 'Friedrich Nietzsche', 'Immanuel Kant', 'René Descartes'], answer: 2 },
    { question: 'Quem foi o líder militar responsável pela unificação da Alemanha no século XIX?', options: ['Otto von Bismarck', 'Napoleão Bonaparte', 'Helmuth von Moltke', 'Kaiser Wilhelm I'], answer: 0 },
    { question: 'Em que país foi inventada a imprensa moderna?', options: ['França', 'Inglaterra', 'Alemanha', 'Itália'], answer: 2 },
    { question: 'Qual é a origem do nome "Vikings"?', options: ['Significa "piratas do mar" em nórdico antigo', 'Refere-se a uma tribo germânica', 'É o nome de um deus nórdico', 'É uma abreviação de "viajantes do norte"'], answer: 0 },
    { question: 'Quem descobriu a penicilina?', options: ['Louis Pasteur', 'Robert Koch', 'Marie Curie', 'Alexander Fleming'], answer: 3 },
    { question: 'Qual é a obra literária que introduziu o conceito de "super-homem"?', options: ['A Metamorfose', 'Além do Bem e do Mal', 'O Anticristo', 'Assim Falou Zaratustra'], answer: 3 },
    { question: 'Quem foi o matemático responsável pela criação da teoria dos conjuntos?', options: ['Georg Cantor', 'Carl Friedrich Gauss', 'David Hilbert', 'Leonhard Euler'], answer: 0 },
    { question: 'Qual é o nome da teoria que explica a origem das espécies por seleção natural?', options: ['Lei da Evolução', 'Teoria das Relatividade', 'Teoria da Evolução das Espécies', 'Teoria do Big Bang'], answer: 2 },
    { question: 'Qual é o nome do primeiro computador digital eletrônico do mundo?', options: ['ENIAC', 'UNIVAC', 'Colossus', 'Z3'], answer: 0 },
    { question: 'Em que século foi escrita a "Divina Comédia" de Dante Alighieri?', options: ['XII', 'XIII', 'XIV', 'XV'], answer: 2 },
    { question: 'Quem foi o criador da teoria da relatividade?', options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Max Planck'], answer: 1 },
    { question: 'Qual é o nome do maior deserto quente do mundo?', options: ['Deserto de Atacama', 'Deserto do Saara', 'Deserto de Kalahari', 'Deserto de Gobi'], answer: 1 },
    { question: 'Qual é o nome do fenômeno que ocorre quando a luz branca se separa em várias cores ao passar por um prisma?', options: ['Reflexão', 'Refratação', 'Dispersão', 'Absorção'], answer: 2 },
    { question: 'Quem é conhecido como o "pai da história" na Grécia Antiga?', options: ['Heródoto', 'Sócrates', 'Platão', 'Aristóteles'], answer: 0 },
    { question: 'Em que ano foi fundado o Império Romano?', options: ['753 a.C.', '27 a.C.', '476 d.C.', '510 a.C.'], answer: 0 },
  
];
  

export default function Quiz({ navigation }) {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [remainingQuestions, setRemainingQuestions] = useState([...questions]); // Perguntas que ainda não foram respondidas
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    let timer;
    if (started && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleWrongAnswer(); // Considera como erro se o tempo acabar
    }
    return () => clearInterval(timer);
  }, [started, timeLeft]);

  const startQuiz = () => {
    setStarted(true);
    setRemainingQuestions([...questions]);
    setScore(0);
    setErrors(0);
    setTimeLeft(30);
    loadNextQuestion();
  };

  const loadNextQuestion = () => {
    if (remainingQuestions.length === 0) {
      endQuiz();
      return;
    }
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    setCurrentQuestion(remainingQuestions[randomIndex]);
    setRemainingQuestions((prev) =>
      prev.filter((_, index) => index !== randomIndex)
    );
    setTimeLeft(30);
  };

  const checkAnswer = (index) => {
    if (selectedOption !== null) return; // Evita múltiplos cliques

    setSelectedOption(index);
    if (index === currentQuestion.answer) {
      setScore((prev) => prev + 20);
    } else {
      handleWrongAnswer();
    }
    setTimeout(() => {
      setSelectedOption(null);
      loadNextQuestion();
    }, 1000);
  };

  const handleWrongAnswer = () => {
    setErrors((prev) => {
      const newErrors = prev + 1;
      if (newErrors >= 3) {
        endQuiz();
      }
      return newErrors;
    });
  };

  const endQuiz = () => {
    setStarted(false);
    Alert.alert('Fim do Quiz', `Sua pontuação final: ${score}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Quiz de Trivia</Text>
      </View>

      {!started ? (
        <View style={styles.startScreen}>
          <TouchableOpacity style={styles.startButton} onPress={startQuiz}>
            <Text style={styles.startText}>Iniciar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.quizContainer}>
          
          <View style={styles.info}>
            <Text style={styles.score}>Pontuação: {score}</Text>
            <Text style={styles.errors}>Erros: {errors}/3</Text>
            <Text style={styles.timer}>⏳ {timeLeft}s</Text>
          </View>
          <View style={styles.img}>
            <Image source={nerd} style={styles.nerd} />
        </View>
          <Text style={styles.question}>{currentQuestion?.question}</Text>
          {currentQuestion?.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                selectedOption === index
                  ? index === currentQuestion.answer
                    ? styles.correct
                    : styles.incorrect
                  : null,
              ]}
              onPress={() => checkAnswer(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#333',
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
  startScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  startText: {
    color: '#000',
    fontSize: 18,
  },
  quizContainer: {
    flex: 1,
    padding: 20,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: '#555',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  img: {
    width: 420,
    height: 320,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nerd: {
    width: 280,
    height: 300,
    
  },
  timer: {
    fontSize: 18,
    color: '#fff',
  },
  score: {
    fontSize: 18,
    color: '#fff',
  },
  errors: {
    fontSize: 18,
    color: '#fff',
  },
  question: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
  },
  option: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
  correct: {
    backgroundColor: '#4CAF50',
  },
  incorrect: {
    backgroundColor: '#f44336',
  },
});
