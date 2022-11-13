import {View, Text, StyleSheet, Pressable} from 'react-native'

const PrimaryButton = ({children, buttonColor, buttonTextColor, onPress}) => {
    return (
        
            <View style={{backgroundColor:buttonColor, borderRadius:8, marginBottom:10, width:140, overflow:'hidden'}}>
                <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressable}>
                    <Text style={{color:buttonTextColor, fontSize:16, textAlign:'center', padding:10}}>{children}</Text>
                </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    pressable: {
        opacity:0.75,
        backgroundColor:'#CE5252',
        overflow:'hidden'
    }
})

export default PrimaryButton