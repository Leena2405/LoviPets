import { View, TextInput , Button, StyleSheet} from 'react-native'
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { windowHeight, windowWidth } from '../utilis/Dimentions';

const FormInput = () => {
  return (
      <View style ={styles.inputContainer}>
          <View style={styles.iconStyle}>
              <AntDesign name ={iconType} size={25} color="#666"/>
          </View>
          <TextInput
          value={labelValue}
          style={styles.input}
          numberOfLines={1}
          placeholder={placeholderText}
          placeholderTextColor="#666" {...rest}/>
      </View>
    
  )
}

export default FormInput;

const styles = StyleSheet.create({
   inputContainer: {
       marginTop: 5,
       marginBottom: 10,
       width:'100%',
       height: windowHeight /15,
       borderColor: '#64C3E8',
       borderRadius:5,
       borderWidth: 1,
       flexDirection: 'row',
       alignItems: 'center',
       backgroundColor: '#fff'

   },
   iconStyle: {
       padding:10,
       height:'100%',
       justifyContent: 'center',
       alignItems: 'center',
       borderRightColor: '#3b809C',
       borderRightWidth: 1,
       width:50,
   },
   input:{
       padding: 10,
       flex:1, 
       fontSize:16,
       fontFamily: 'Lato-Reguar',
       color: '#64c3e8',
       justifyContent:'center',
       alignItems:'center',
   },
   inputField: {
       padding:10,
       marginTop: 5,
       marginBottom: 10,
       width: windowWidth / 1.5,
       height: windowHeight / 15,
       fontSize: 16,
       borderRadius: 10,
       borderWidth:1,
   }
});