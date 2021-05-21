import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

const Login=()=>{
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };
    const login= (emailInput,passwordInput)=>async (e)=>{
        let user = {
            email : emailInput,
            password: passwordInput
        }
        
        let res = await fetch('https://reqres.in/api/login',{
            method:'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        });
        let resJson = res.json();
        resJson.then((res)=>{
            if (res.token){
                alert('Login succes')
            }else{
                alert('User not found')
            }
        });
        
    }
    return (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor={'gray'}
            autoCorrect={false}
            onChangeText={email => setEmail(email)}
            value={email}
            textContentType="emailAddress"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'gray'}
            autoCorrect={false}
            onChangeText={password=>setPassword(password)}
            value={password}
            textContentType="password"
            secureTextEntry={true}
          />
          <View style={styles.button}>
            <Button title={'LOGIN'} onPress={login(email,password)} />
          </View>
        </View>
      );
      
}
const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      
    },
    button: {
      marginRight: 10,
    },
    input:{
        height:30,
        width:200,
        borderWidth:1,
        borderColor:"white",
        marginTop:10,
        marginBottom:10,
        color:"white"
    }
  });
  
export default Login;