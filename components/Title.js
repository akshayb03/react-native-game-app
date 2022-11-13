import {Text, View, StyleSheet} from 'react-native'

const Title = ({children}) => {
    return(
        <View style={styles.title}>
            <Text style={styles.titleText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        borderWidth:1,
        borderColor:'#DAB03E',
        
    },
    titleText: {
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'#DAB03E',
        padding:10,
    }
})

export default Title