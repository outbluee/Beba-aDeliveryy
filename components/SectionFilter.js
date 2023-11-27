import React, { useState, useCallback, memo } from "react";
import { StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Carrinho from "./Carrinho";
import { Color } from "../GlobalStyles";

const SectionFilter = memo(() => {
  const navigation = useNavigation();
  const [groupContainer1Visible, setGroupContainer1Visible] = useState(false);

  const openGroupContainer1 = useCallback(() => {
    setGroupContainer1Visible(true);
  }, []);

  const closeGroupContainer1 = useCallback(() => {
    setGroupContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.telaPrincipalInner}>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Image
            style={[styles.image9Icon, styles.image11Position]}
            contentFit="cover"
            source={require("../assets/image-9.png")}
          />
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
            style={[styles.image11, styles.image11Position]}
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
          <Pressable
            style={[styles.ellipseParent, styles.groupItemLayout]}
            onPress={openGroupContainer1}
          >
            <Image
              style={[styles.groupItem, styles.groupItemLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
            <Image
              style={[styles.image13Icon, styles.image12Layout]}
              contentFit="cover"
              source={require("../assets/image-91.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={groupContainer1Visible}>
        <View style={styles.groupContainer1Overlay}>
          <Pressable
            style={styles.groupContainer1Bg}
            onPress={closeGroupContainer1}
          />
          <Carrinho onClose={closeGroupContainer1} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  image11Position: {
    height: 32,
    top: 34,
    position: "absolute",
  },
  image12Layout: {
    height: 36,
    position: "absolute",
  },
  groupItemLayout: {
    height: 72,
    width: 72,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 19,
    backgroundColor: Color.colorGainsboro_100,
    height: 68,
    width: 464,
    left: 0,
    position: "absolute",
  },
  image9Icon: {
    left: 36,
    width: 39,
  },
  icon: {
    width: "100%",
    height: "100%",
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
  groupContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupItem: {
    left: 0,
    width: 72,
  },
  image13Icon: {
    top: 18,
    left: 17,
    width: 38,
  },
  ellipseParent: {
    left: 165,
  },
  rectangleParent: {
    top: 0,
    height: 87,
    width: 464,
    left: 0,
    position: "absolute",
  },
  telaPrincipalInner: {
    top: 839,
    height: 87,
    width: 464,
    left: 0,
    position: "absolute",
  },
});

export default SectionFilter;
