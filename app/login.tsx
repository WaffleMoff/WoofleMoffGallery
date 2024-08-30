import { Image, Platform, } from "react-native";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity, FlatList } from 'react-native';
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useCloud } from "freestyle-sh";
import { CounterCS } from "@/cloudstate/counter";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function LoginScreen() {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#217DED',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 30,
      color: '#ffffff',
      marginBottom: 40,
    },
    input: {
      width: '80%',
      backgroundColor: '#B3F2FF',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 20,
      color: '#003f5c',
    },
    loginBtn: {
      width: "80%",
      backgroundColor: "#fb5b5a",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      marginBottom: 10
    },
    inputView: {
      width: "80%",
      backgroundColor: "#3AB4BA",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
    },
    inputText: {
      height: 50,
      color: "white"
    },
    formContainer: {
      width: '100%',
      alignItems: 'center'
    },
    item: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    loginText: {
      color: "white"
    }
  });
