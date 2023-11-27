import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const DrPepperadd = memo(({ onClose }) => {
  return (
    <View style={[styles.drpepperadd, styles.drpepperaddLayout]}>
      <View style={[styles.drpepperaddChild, styles.imageLayout]} />
      <Text style={[styles.r4000, styles.r4000Typo]}>R$ 40,00</Text>
      <Text style={[styles.drpeper, styles.r4000Typo]}>DrPeper</Text>
      <View style={styles.drpepperaddItem} />
      <Text style={[styles.fechar, styles.r4000Typo]}>fechar</Text>
      <Image
        style={[styles.imageAboutTumblrInToGaby, styles.imageLayout]}
        contentFit="cover"
        source={require("../assets/image-about-tumblr-in-to-gaby-by-cami-on-we-heart-it3.png")}
      />
      <Image
        style={[styles.imageAboutTumblrInToGaby1, styles.imageLayout]}
        contentFit="cover"
        source={require("../assets/image-about-tumblr-in-to-gaby-by-cami-on-we-heart-it4.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Image
          style={[styles.image14Icon, styles.drpepperaddLayout]}
          contentFit="cover"
          source={require("../assets/image-14.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  drpepperaddLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  imageLayout: {
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  r4000Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    height: 44,
    width: 61,
    position: "absolute",
  },
  drpepperaddChild: {
    top: 173,
    backgroundColor: Color.colorGray_600,
    height: 537,
    left: 0,
    width: 428,
  },
  r4000: {
    top: 575,
    fontSize: FontSize.size_base,
    width: 65,
    height: 18,
    left: 32,
  },
  drpeper: {
    top: 546,
    fontSize: FontSize.size_5xl,
    left: 32,
  },
  drpepperaddItem: {
    top: 178,
    left: 1,
    backgroundColor: Color.colorGainsboro_200,
    width: 123,
    height: 59,
    position: "absolute",
  },
  fechar: {
    top: 192,
    left: 20,
    fontSize: FontSize.size_8xl,
  },
  imageAboutTumblrInToGaby: {
    top: 528,
    left: 285,
    width: 124,
    height: 119,
  },
  imageAboutTumblrInToGaby1: {
    top: 242,
    left: -3,
    width: 435,
    height: 265,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorSandybrown,
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
  rectangleParent: {
    top: 598,
    left: 32,
  },
  drpepperadd: {
    height: 976,
    width: 428,
  },
});

export default DrPepperadd;
