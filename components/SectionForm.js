import React, { memo } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const SectionForm = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.groupChild, styles.groupChildPosition]} />
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.image9Icon, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/image-91.png")}
      />
      <Image
        style={styles.image14Icon}
        contentFit="cover"
        source={require("../assets/image-11.png")}
      />
      <Pressable
        style={[styles.frameWrapper, styles.wrapperLayout]}
        onPress={() => navigation.navigate("Perfil")}
      >
        <View style={[styles.image4Wrapper, styles.wrapperLayout]}>
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
        </View>
      </Pressable>
      <Pressable
        style={[styles.image15, styles.imagePosition]}
        onPress={() => navigation.navigate("TelaDePesquisa")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.image16, styles.imagePosition]}
        onPress={() => navigation.navigate("TelaPrincipal")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-9.png")}
        />
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  groupChildPosition: {
    top: 18,
    position: "absolute",
  },
  wrapperLayout: {
    height: 40,
    width: 54,
    position: "absolute",
  },
  imagePosition: {
    width: 39,
    top: 32,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    height: 166,
    left: 0,
    width: 458,
  },
  groupItem: {
    left: 174,
    width: 72,
    height: 72,
    top: 0,
    position: "absolute",
  },
  image9Icon: {
    left: 191,
    width: 38,
    height: 36,
  },
  image14Icon: {
    left: 283,
    width: 49,
    height: 32,
    top: 32,
    position: "absolute",
  },
  image4Icon: {
    top: 6,
    left: 10,
    width: 35,
    height: 28,
    position: "absolute",
  },
  image4Wrapper: {
    top: 0,
    left: 0,
  },
  frameWrapper: {
    left: 369,
    top: 32,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  image15: {
    left: 114,
    height: 36,
  },
  image16: {
    left: 49,
    height: 32,
  },
  rectangleParent: {
    top: 834,
    left: -11,
    height: 184,
    width: 458,
    position: "absolute",
  },
});

export default SectionForm;
