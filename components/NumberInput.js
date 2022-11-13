import {View, Text, StyleSheet} from 'react-native'

const NumberInput = ({children}) => {
    return (
        <View style={styles.numContainer}>
            <Text style={styles.numText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    numContainer: {
        margin:50,
        borderWidth:1,
        borderColor:'yellow',
        padding:20,
    },
    numText: {
        fontSize:30,
        color:'yellow',
        textAlign:'center'
    }
})

export default NumberInput