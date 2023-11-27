import React, { memo } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const SectionCard = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.groupChildPosition]}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Pressable
        style={[styles.image9, styles.imagePosition]}
        onPress={() => navigation.navigate("TelaPrincipal")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image10}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image11, styles.imagePosition]}
        onPress={() => navigation.navigate("Historico")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-11.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image12, styles.image12Layout]}
        onPress={() => navigation.navigate("TelaDePesquisa")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </Pressable>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.image13Icon, styles.image12Layout]}
        contentFit="cover"
        source={require("../assets/image-91.png")}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  groupChildPosition: {
    width: 464,
    left: 0,
    position: "absolute",
  },
  imagePosition: {
    height: 32,
    top: 34,
    position: "absolute",
  },
  image12Layout: {
    height: 36,
    position: "absolute",
  },
  groupChild: {
    top: 19,
    backgroundColor: Color.colorGainsboro_100,
    height: 68,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  image9: {
    left: 36,
    width: 39,
  },
  image10: {
    left: 350,
    top: 38,
    width: 37,
    height: 28,
    position: "absolute",
  },
  image11: {
    left: 262,
    width: 49,
  },
  image12: {
    left: 101,
    top: 30,
    width: 39,
  },
  groupItem: {
    top: 0,
    left: 165,
    width: 72,
    height: 72,
    position: "absolute",
  },
  image13Icon: {
    top: 18,
    left: 182,
    width: 38,
  },
  rectangleParent: {
    top: 841,
    height: 87,
  },
});

export default SectionCard;
