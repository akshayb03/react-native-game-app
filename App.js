import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from 'react'

export default function App() {

  const [pickedNumber, setPickedNumber] = useState()

  const pickedNumberHandler = (num) => {
    setPickedNumber(num)
  }

  let screen = <StartGameScreen pickedNumber={pickedNumberHandler}/>

  if(pickedNumber) {
    screen = <GameScreen pickedNumber={pickedNumber}/>
  }

  return (
    <LinearGradient colors={['#A43232', '#ddb52f']} style={styles.rootContainer}>
      <ImageBackground resizeMode='cover' imageStyle={styles.ImageBackground} style={styles.rootContainer} source={require('./assets/images/dice-background-image.png')}>
        <SafeAreaView style={styles.safeAreaContainer}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex:1,
    marginTop:40,
  },
  rootContainer: {
    flex:1
  },
  ImageBackground:{
    opacity:0.15
  },
});
