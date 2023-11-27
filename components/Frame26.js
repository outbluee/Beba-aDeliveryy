import React, { memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Frame = memo(() => {
  return (
    <View style={styles.image13Parent}>
      <Image
        style={styles.image13Icon}
        contentFit="cover"
        source={require("../assets/image-132.png")}
      />
      <View style={styles.frameChild} />
    </View>
  );
});

const styles = StyleSheet.create({
  image13Icon: {
    top: 372,
    left: 56,
    width: 315,
    height: 253,
    position: "absolute",
  },
  frameChild: {
    top: 38,
    left: 241,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  image13Parent: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Frame;
