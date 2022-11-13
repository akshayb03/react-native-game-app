import {View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import {useState} from 'react'

const StartGameScreen = ({pickedNumber}) => {

    const [enteredText, setEnteredText] = useState('')

    const inputTextHandler = (text) => {
        setEnteredText(text)
    }

    const confirmHandler = () => {
        if(isNaN(parseInt(enteredText)) || parseInt(enteredText)<=0 || parseInt(enteredText)>99){
            Alert.alert('Error', 'Number should be a number between 0 and 99', [{text:'Okay', style:'destructive', onPress:resetHandler}])
            return;
        }

        pickedNumber(parseInt(enteredText))
        console.log("Valid Number")
    }

    const resetHandler = () => {
        setEnteredText('')
    }

    return (
        <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={inputTextHandler} value={enteredText} style={styles.inputField} maxLength={2} keyboardType={'number-pad'}></TextInput>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <PrimaryButton onPress={confirmHandler} buttonColor={'#A43232'} buttonTextColor={'white'}>Confirm</PrimaryButton>
                    </View>
                    <View style={styles.btn}>
                        <PrimaryButton onPress={resetHandler} buttonColor={'#A43232'} buttonTextColor={'white'}>Reset</PrimaryButton>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        elevation:10,
        shadowColor:'black',
        shadowOffset:{width:0, height:3},
        shadowRadius:6,
        shadowOpacity:'0.75',
        marginTop:100,
        margin:20,
        boderRadius:8,
        elevation:20,
        backgroundColor:'#9F0B0B',
        justifyContent:'center',
        alignItems:'center'
    },  

    btnContainer: {
        flexDirection:'row',
    },
    
    inputField: {
        width:'20%',
        borderBottomWidth:1,
        marginBottom:20,
        height:50,
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
    },
    btn: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default StartGameScreen