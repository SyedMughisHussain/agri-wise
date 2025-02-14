import { Image, StyleSheet, Platform, Text } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
// import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    // <ParallaxScrollView
    //   headerImage={
    //     <Image
    //       source={require("@/assets/images/partial-react-logo.png")}
    //       style={styles.reactLogo}
    //     />
    //   }
    //   headerBackgroundColor={{
    //     dark: "",
    //     light: "",
    //   }}
    // >
    <>
      <Text style={styles.titleContainer}>
        <Text>Welcome!</Text>
        <HelloWave />
      </Text>
      <Text style={styles.stepContainer}>
        <Text>Step 1: Try it</Text>
        <Text>
          Edit <Text>app/(tabs)/index.tsx</Text> to see changes. Press{" "}
          <Text>
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </Text>{" "}
          to open developer tools.
        </Text>
      </Text>
      <Text style={styles.stepContainer}>
        <Text>Step 2: Explore</Text>
        <Text>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </Text>
      </Text>
      <Text style={styles.stepContainer}>
        <Text>Step 3: Get a fresh start</Text>
        <Text>
          When you're ready, run <Text>npm run reset-project</Text> to get a
          fresh <Text>app</Text> directory. This will move the current{" "}
          <Text>app</Text> to <Text>app-example</Text>.
        </Text>
      </Text>
    </>
  );
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
});
