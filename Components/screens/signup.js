import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [pwcheck, setpwcheck] = useState("");
  
  return (
    <View style={Styles.container}>      
      <Text style={Styles.HomeText}>회원가입 화면</Text>
      
      <TextInput
        style={Styles.Input}
        value={username}
        placeholder="이름"
        onChangeText={setUsername}
      >
      </TextInput>
      <TextInput
        onChangeText={setUseremail}
        value={useremail}
        placeholder="이메일"
        style={Styles.Input}
      >
      </TextInput>
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder="비밀번호"
        style={Styles.Input}
      >
      </TextInput>
      <TextInput
        onChangeText={setpwcheck}
        value={pwcheck}
        placeholder="비밀번호 확인"
        style={Styles.Input}
      >
      </TextInput>
      
      <TouchableOpacity
          onPress={() => navigation.navigate("Home", { screen: 'Home' })}     
          style={Styles.Inputbotton}
        >
          <Text style={Styles.BottomText}>가입하기</Text>
      </TouchableOpacity>

      <TouchableOpacity
          onPress={() => navigation.navigate("Login", { screen: 'Login' })}
          style={Styles.NextBottom}
        >
          <Text style={Styles.BottomText}>돌아가기</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signup;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff',
  },
  HomeText: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: "10%",
  },
  NextBottom: {
    backgroundColor: "purple",
    padding: 10,
    marginTop: "10%",
    width: "50%",
    alignSelf: "center",
    borderRadius: 10,
  },
  BottomText: {
    fontSize: 15,
    color: 'white',
    textAlign: "center",
  },
  Inputbotton: {
    backgroundColor: "purple",
    width: "50%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10
  },
  Input: {
    width: "50%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10
  }
})