import React, { useState, useCallback, memo } from "react";
import { View, StyleSheet, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const JuiceBurstadd = memo(({ onClose }) => {
  const [rectangleImage1Visible, setRectangleImage1Visible] = useState(false);

  const openRectangleImage1 = useCallback(() => {
    setRectangleImage1Visible(true);
  }, []);

  const closeRectangleImage1 = useCallback(() => {
    setRectangleImage1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.juiceburstadd, styles.image14IconLayout]}>
        <View style={styles.juiceburstaddChild} />
        <Text style={[styles.r4000, styles.r4000Typo]}>R$ 40,00</Text>
        <Text style={[styles.juiceBurst, styles.r4000Typo]}>Juice Burst</Text>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.fechar, styles.r4000Typo]}>fechar</Text>
        </View>
        <Image
          style={styles.juiceburstaddItem}
          contentFit="cover"
          source={require("../assets/rectangle-261.png")}
        />
        <Pressable style={styles.wrapper} onPress={openRectangleImage1}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-273.png")}
          />
        </Pressable>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Image
            style={[styles.image14Icon, styles.image14IconLayout]}
            contentFit="cover"
            source={require("../assets/image-14.png")}
          />
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangleImage1Visible}>
        <View style={styles.rectangleImage1Overlay}>
          <Pressable
            style={styles.rectangleImage1Bg}
            onPress={closeRectangleImage1}
          />
          <JuiceBurstadd onClose={closeRectangleImage1} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  image14IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  r4000Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    height: 59,
    width: 123,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  groupLayout: {
    height: 44,
    width: 61,
    position: "absolute",
  },
  juiceburstaddChild: {
    backgroundColor: Color.colorGray_600,
    height: 540,
    borderRadius: Border.br_11xl,
    left: 0,
    top: 172,
    position: "absolute",
    width: 428,
  },
  r4000: {
    top: 564,
    fontSize: FontSize.size_base,
    width: 65,
    height: 18,
    left: 29,
  },
  juiceBurst: {
    top: 535,
    fontSize: FontSize.size_5xl,
    left: 29,
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_200,
    height: 59,
    width: 123,
    position: "absolute",
  },
  fechar: {
    top: 16,
    left: 20,
    fontSize: FontSize.size_8xl,
  },
  rectangleParent: {
    left: 12,
    top: 172,
    width: 123,
  },
  juiceburstaddItem: {
    top: 517,
    left: 282,
    width: 124,
    height: 119,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  rectangleImage1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleImage1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_11xl,
  },
  wrapper: {
    left: -4,
    top: 231,
    width: 435,
    height: 265,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSandybrown,
    top: 0,
    left: 0,
  },
  image14Icon: {
    height: "79.55%",
    width: "54.1%",
    top: "9.09%",
    right: "26.23%",
    bottom: "11.36%",
    left: "19.67%",
    overflow: "hidden",
    position: "absolute",
  },
  rectangleGroup: {
    top: 591,
    left: 29,
  },
  juiceburstadd: {
    height: 1030,
    width: 428,
    maxWidth: "100%",
  },
});

export default JuiceBurstadd;
