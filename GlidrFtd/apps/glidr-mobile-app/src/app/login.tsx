import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Screen from "../components/Screen";
import Logo from "../components/Logo";
import AuthHeader from "../components/AuthHeader";
import GreetingCard from "../components/GreetingCard";
import TextField from "../components/TextField";
import Button from "../components/Button";
// import Divider from "../components/Divider";
import FaceIdButton from "../components/FaceIdButton";
import SocialLogin from "../components/SocialLogin";

import Colors from "../constants/colors";
import Typography from "../constants/typography";
import Spacing from "../constants/spacing";
import Routes from "../constants/routes";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <Screen>
      <View style={styles.container}>
        <Logo width={70} height={70} />

        <AuthHeader active="login" />

        <GreetingCard name="Quinnbriar" />

        <View>
          <Text style={styles.label}>
            Password
          </Text>

          <TextField
            secure
            placeholder="Enter password"
          />
        </View>

        <Button
          title="Login"
          onPress={() => router.replace(Routes.Home)}
        />

        <Text
          style={styles.forgot}
          onPress={() =>
            router.push(Routes.ForgotPassword)
          }
        >
          Forgot Password
        </Text>

        {/* <Divider /> */}

        <FaceIdButton />

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

    gap: 24,
  },

  label: {
    marginBottom: 10,

    color: Colors.gray400,

    fontSize: Typography.fontSize.md,

    fontFamily: Typography.fontFamily.medium,
  },

  forgot: {
    color: Colors.primary,

    fontFamily: Typography.fontFamily.medium,

    fontSize: Typography.fontSize.md,
  },
});