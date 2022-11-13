import {Text, View, StyleSheet} from 'react-native'
import Title from '../components/Title'
import NumberInput from '../components/NumberInput'
import {useState} from 'react'
import PrimaryButton from '../components/PrimaryButton'

const GameScreen = ({pickedNumber}) => {

    const initialGuess = generateRandomBetween(1, 100, pickedNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)


    function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max-min)) + min;

        if(rndNum === exclude){
            return generateRandomBetween(min, max, exclude)
        }
        else{
            return rndNum
        }
    }

    let minBoundary = 1
    let maxBoundary = 100

    const nextGuessHandler = (direction) => {
        if(direction == 'lower') {
            maxBoundary = currentGuess
        }
        if(direction == 'higher') {
            minBoundary = currentGuess+1
        }
        const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNum)
    }

    return(
        <View>
            <Title>Opponent's Guess</Title>
            <NumberInput>{currentGuess}</NumberInput>
            <View style={styles.buttonsContainer}>
                <PrimaryButton buttonTextColor='white' buttonColor='#A43232' onPress={() => nextGuessHandler('higher')}>+</PrimaryButton>
                <PrimaryButton buttonTextColor='white' buttonColor='#A43232' onPress={() => nextGuessHandler('lower')}>-</PrimaryButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        paddingHorizontal:20
    },
})

export default GameScreen