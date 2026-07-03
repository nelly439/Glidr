import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AuthHeader from "../../components/AuthHeader";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import Logo from "../../components/Logo";
import Screen from "../../components/Screen";
import SocialLogin from "../../components/SocialLogin";
import TextField from "../../components/TextField";

import Colors from "../../constants/colors";
import Routes from "../../constants/routes";
import Spacing from "../../constants/spacing";
import Typography from "../../constants/typography";

export default function RegisterScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isRegisterEnabled =
    username.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "";


  return (
    <Screen>
      <View style={styles.container}>
        <Logo width={70} height={70} />

        <AuthHeader active="signup" />

        <View style={styles.header}>
          <Text style={styles.title}>
            Manual Sign Up
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>
            Username
          </Text>

          <TextField
            value={username}
            onChangeText={setUsername}
            placeholder="John Appleseed"

          // rightIcon={Images.success}
          />

          <Text style={styles.label}>
            Password
          </Text>

          <TextField
            value={password}
            secure
            onChangeText={setPassword}
            placeholder="Password"

          />

          <Text style={styles.label}>
            Confirm Password
          </Text>

          <TextField
            value={confirmPassword}
            secure
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            disabled={!isRegisterEnabled}
            onPress={() => router.push(Routes.Terms)}
          />
        </View>

        <Divider />

        <Text style={styles.socialTitle}>
          Connect with Social Media
        </Text>

        <SocialLogin />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: 40,
  },

  header: {
    marginTop: 40,
    marginBottom: 30,
  },

  title: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: 24,
    color: Colors.black,
  },

  buttonContainer: {
    marginTop: 30,
  },

  form: {
    gap: 18,
  },

  label: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: 16,
    color: Colors.gray400,
    marginBottom: -10,
  },

  socialTitle: {
    textAlign: "center",
    fontFamily: Typography.fontFamily.medium,
    fontSize: 20,
    color: Colors.black,
    marginTop: 10,
  },
});

