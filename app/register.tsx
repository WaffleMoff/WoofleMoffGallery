import { Image, View, Text, StyleSheet, Platform, Button } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useCloud } from "freestyle-sh";
import { CounterCS } from "@/cloudstate/counter";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Link, useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    const onPressRegisterButton = () => {
        router.push({
            pathname: "/(tabs)/explore"
        });
    }
    const onPressLoginButton = () => {
        router.push({
            pathname: "/(tabs)/explore"
        });
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPressRegisterButton}>
                <Text style={styles.loginText}>REGISTER</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressRegisterButton}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
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


