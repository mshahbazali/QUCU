import { View, ScrollView, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Toast from 'react-native-root-toast';
import { api } from '../../../Config/Api'
import axios from 'axios';
export default function ({ navigation }) {
  const [digitOne, setDigitOne] = useState("")
  const [digitTwo, setDigitTwo] = useState("")
  const [digitThree, setDigitThree] = useState("")
  const [digitFour, setDigitFour] = useState("")
  const otp = digitOne + digitTwo + digitThree + digitFour

  const verify = () => {
    axios.post(`${api}/auth/register/verify`, { otp: otp }).then((response) => {
      if (response.data.message === "Your One Time Verification is Invalid") {
        let toast = Toast.show(`${response.data.message}`, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
        setTimeout(function () {
          Toast.hide(toast);
        }, 10000);
      }
      else {
        let toast = Toast.show(`${response.data.message}`, {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          onShown: () => {
            navigation.navigate("Login")
          }
        });
        setTimeout(function () {
          Toast.hide(toast);
        }, 10000);
      }

    })
      .catch((err) => { })
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity>
              <MaterialIcons name="keyboard-backspace" size={34} color='#175271' />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: '#175271', fontSize: 24, fontWeight: '400' }}>OTP Verification</Text>
          </View>
        </View>
        <View style={{ marginVertical: 27 }}>
          <Text style={{ color: '#F2F2F2', fontSize: 30, fontWeight: '400' }}>Please Enter</Text>
          <Text style={{ color: '#F2F2F2', fontSize: 30, fontWeight: '400' }}>OTP Verification</Text>
          <View style={{ marginVertical: 16 }}>
            <Text style={{ color: '#6D7078', fontSize: 17, fontWeight: '300' }}>Code was sent to +92 317 2988830</Text>
            <Text style={{ color: '#6D7078', fontSize: 17, fontWeight: '300' }}>This code will expire in <Text style={{ color: "red" }}>03:00</Text></Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
          <TextInput keyboardType='numeric' onChangeText={(text) => setDigitOne(text)} maxLength={1} style={{ backgroundColor: digitOne == "" ? '#2A2F3B' : "#15374E", width: 70, height: 70, borderRadius: 15, textAlign: 'center', fontSize: 34, color: "white", fontWeight: '600' }} />
          <TextInput keyboardType='numeric' onChangeText={(text) => setDigitTwo(text)} maxLength={1} style={{ backgroundColor: digitTwo == "" ? '#2A2F3B' : "#15374E", width: 70, height: 70, borderRadius: 15, textAlign: 'center', fontSize: 34, color: "white", fontWeight: '600' }} />
          <TextInput keyboardType='numeric' onChangeText={(text) => setDigitThree(text)} maxLength={1} style={{ backgroundColor: digitThree == "" ? '#2A2F3B' : "#15374E", width: 70, height: 70, borderRadius: 15, textAlign: 'center', fontSize: 34, color: "white", fontWeight: '600' }} />
          <TextInput keyboardType='numeric' onChangeText={(text) => setDigitFour(text)} maxLength={1} style={{ backgroundColor: digitFour == "" ? '#2A2F3B' : "#15374E", width: 70, height: 70, borderRadius: 15, textAlign: 'center', fontSize: 34, color: "white", fontWeight: '600' }} />
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 20, justifyContent: 'space-between', }}>
          <View>
            <Text style={{ color: "white", fontSize: 16, letterSpacing: 1, fontWeight: '300' }}>Didn't receive an OTP?</Text>
          </View>
          <View >
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <AntDesign name="reload1" size={15} color='#175271' style={{ marginRight: 5 }} />
              <Text style={{ color: '#175271', fontSize: 15 }}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 180 }}>
          <TouchableOpacity onPress={verify} style={{ backgroundColor: digitOne.length == 0 || digitTwo.length == 0 || digitThree.length == 0 || digitFour.length == 0 ? '#21283F' : '#175271', paddingVertical: 10, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', color: "#fff", fontSize: 22, fontWeight: '400' }}>Verify and Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141927',
    paddingHorizontal: 20,
    paddingTop: 80
  },
});
