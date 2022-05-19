import { View, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Text } from 'react-native'
import React, { useState, useRef } from 'react'
import PhoneInput from "react-native-phone-number-input";


export default function index() {
    const [focusInputOne, setFocusInputOne] = useState(false)
    const [focusInputTwo, setsetFocusInputTwoFocus] = useState(false)
    const [focusInputThree, setFocusInputThreeFocus] = useState(false)
    const [focusInputFour, setFocusInputFourFocus] = useState(false)
    const [focusInputFive, setFocusInputFiveFocus] = useState(false)
    const [focusInputSix, setFocusInputSixFocus] = useState(false)
    const [focusInputSeven, setFocusInputSevenFocus] = useState(false)
    const [firstName, setFirstName] = useState(undefined)
    const [lastName, setLastName] = useState(undefined)
    const [userName, setUserName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [phoneNumber, setPhoneNumber] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [confirmPassword, setConfirmPassword] = useState(undefined)
    const [checked, setChecked] = useState()
    // const phoneInput = useRef < PhoneInput > (null);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={require("../../../Assests/Images/logo.png")} style={styles.logo} />
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                        <View style={{ width: "45%" }}>
                            <Text style={{ color: "#fff", marginBottom: 5 }}>First Name</Text>
                            <TextInput onChangeText={(text) => setFirstName(text)} onFocus={() => {
                                setFocusInputOne(true)
                                setsetFocusInputTwoFocus(false)
                                setFocusInputThreeFocus(false)
                                setFocusInputFourFocus(false)
                                setFocusInputFiveFocus(false)
                                setFocusInputSixFocus(false)
                                setFocusInputSevenFocus(false)
                            }} placeholder="Your First Name" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: focusInputOne == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                        </View>
                        <View style={{ width: "45%" }}>
                            <Text style={{ color: "#fff", marginBottom: 5 }}>Last Name</Text>
                            <TextInput onChangeText={(text) => setLastName(text)} onFocus={() => {
                                setFocusInputOne(false)
                                setsetFocusInputTwoFocus(true)
                                setFocusInputThreeFocus(false)
                                setFocusInputFourFocus(false)
                                setFocusInputFiveFocus(false)
                                setFocusInputSixFocus(false)
                                setFocusInputSevenFocus(false)
                            }} placeholder="Your Last Name" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: focusInputTwo == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff", marginBottom: 5 }}>User</Text>
                        <TextInput onChangeText={(text) => setUserName(text)} onFocus={() => {
                            setFocusInputOne(false)
                            setsetFocusInputTwoFocus(false)
                            setFocusInputThreeFocus(true)
                            setFocusInputFourFocus(false)
                            setFocusInputFiveFocus(false)
                            setFocusInputSixFocus(false)
                            setFocusInputSevenFocus(false)
                        }} placeholder="Create a user" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: focusInputThree == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff", marginBottom: 5 }}>Email</Text>
                        <TextInput onChangeText={(text) => setEmail(text)} onFocus={() => {
                            setFocusInputOne(false)
                            setsetFocusInputTwoFocus(false)
                            setFocusInputThreeFocus(false)
                            setFocusInputFourFocus(true)
                            setFocusInputFiveFocus(false)
                            setFocusInputSixFocus(false)
                            setFocusInputSevenFocus(false)
                        }} placeholder="Your email" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: focusInputFour == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff", marginBottom: 5 }}>Phone</Text>
                        <PhoneInput
                            // ref={phoneInput}
                            // defaultValue={value}
                            defaultCode="MX"
                            layout="first"
                            onChangeText={(text) => {
                                // setValue(text);
                            }}
                            onChangeFormattedText={(text) => {
                                // setFormattedValue(text);
                            }}
                            withDarkTheme
                            withShadow
                            textInputProps={{ placeholderTextColor: "#2D344B" }}
                            containerStyle={{ borderBottomColor: focusInputFive == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", width: '100%', fontSize: 15, backgroundColor: "#141927" }}
                            textContainerStyle={{ color: "#fff", fontWeight: "600", fontSize: 15, backgroundColor: "#141927" }}
                            textInputStyle={{ color: "#fff", fontWeight: "600", fontSize: 15, backgroundColor: "#141927" }}
                            codeTextStyle={{ color: "#2D344B", fontWeight: "600", fontSize: 15, backgroundColor: "#141927" }}
                        />
                        {/* <TextInput onChangeText={(text) => setPhoneNumber(text)} onFocus={() => {
                            setFocusInputOne(false)
                            setsetFocusInputTwoFocus(false)
                            setFocusInputThreeFocus(false)
                            setFocusInputFourFocus(false)
                            setFocusInputFiveFocus(true)
                            setFocusInputSixFocus(false)
                            setFocusInputSevenFocus(false)
                        }} placeholder="Phone Number" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: focusInputFive == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} /> */}
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff", marginBottom: 5 }}>Password</Text>
                        <TextInput onChangeText={(text) => setPassword(text)} onFocus={() => {
                            setFocusInputOne(false)
                            setsetFocusInputTwoFocus(false)
                            setFocusInputThreeFocus(false)
                            setFocusInputFourFocus(false)
                            setFocusInputFiveFocus(false)
                            setFocusInputSixFocus(true)
                            setFocusInputSevenFocus(false)
                        }} placeholder="Create a Password" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: focusInputSix == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "#fff", marginBottom: 5 }}>Confirm Password</Text>
                        <TextInput onChangeText={(text) => setConfirmPassword(text)} onFocus={() => {
                            setFocusInputOne(false)
                            setsetFocusInputTwoFocus(false)
                            setFocusInputThreeFocus(false)
                            setFocusInputFourFocus(false)
                            setFocusInputFiveFocus(false)
                            setFocusInputSixFocus(false)
                            setFocusInputSevenFocus(true)
                        }} placeholder="Please Confirm Password" placeholderTextColor={"#2D344B"} style={{ borderBottomColor: focusInputSeven == false ? "#323232" : "#175676", borderBottomWidth: 2, color: "#fff", fontWeight: "600", paddingBottom: 10, fontSize: 15 }} />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <TouchableOpacity onPress={() => { firstName === undefined || lastName === undefined || userName === undefined || email === undefined || phoneNumber === undefined || password == undefined || confirmPassword == undefined ? alert("Please fill complete form") : null }} style={{ backgroundColor: firstName == undefined || lastName === undefined || userName === undefined || email === undefined || phoneNumber === undefined || password === undefined || confirmPassword === undefined ? '#21283F' : "#175676", paddingVertical: 10, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', color: "#fff", fontSize: 22, fontWeight: '400' }}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#141927",
        flex: 1
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    logo: {
        width: 150,
        height: 150
    }
})