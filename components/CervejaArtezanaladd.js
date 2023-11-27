import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const CervejaArtezanaladd = memo(({ onClose }) => {
  return (
    <View style={[styles.cervejaartezanaladd, styles.image14IconLayout]}>
      <View style={styles.cervejaartezanaladdChild} />
      <View style={styles.cervejaartezanaladdItem} />
      <View style={styles.rectangleParent}>
        <Image
          style={styles.groupChild}
          contentFit="cover"
          source={require("../assets/rectangle-31.png")}
        />
        <Text style={[styles.fechar, styles.r4000Typo]}>fechar</Text>
      </View>
      <View style={[styles.r4000Parent, styles.r4000ParentPosition]}>
        <Text style={[styles.r4000, styles.r4000Typo]}>R$ 40,00</Text>
        <Text style={[styles.cervejaArtezanal, styles.r4000Typo]}>
          cerveja artezanal
        </Text>
        <Image
          style={styles.imageAboutTumblrInToGaby}
          contentFit="cover"
          source={require("../assets/image-about-tumblr-in-to-gaby-by-cami-on-we-heart-it.png")}
        />
      </View>
      <Image
        style={[styles.cervejaartezanaladdInner, styles.r4000ParentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-20.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Image
          style={[styles.image14Icon, styles.image14IconLayout]}
          contentFit="cover"
          source={require("../assets/image-14.png")}
        />
      </View>
    </View>
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
  r4000ParentPosition: {
    height: 112,
    top: 536,
    position: "absolute",
  },
  groupLayout: {
    height: 44,
    width: 61,
    position: "absolute",
  },
  cervejaartezanaladdChild: {
    top: 170,
    backgroundColor: Color.colorGray_600,
    height: 542,
    borderRadius: Border.br_11xl,
    left: 0,
    position: "absolute",
    width: 428,
  },
  cervejaartezanaladdItem: {
    left: 1,
    backgroundColor: Color.colorGainsboro_200,
    width: 123,
    height: 60,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 32,
    height: 260,
    borderRadius: Border.br_11xl,
    left: 0,
    position: "absolute",
    width: 428,
  },
  fechar: {
    left: 23,
    fontSize: FontSize.size_8xl,
    width: 77,
    height: 32,
    top: 0,
  },
  rectangleParent: {
    top: 192,
    height: 292,
    left: 0,
    position: "absolute",
    width: 428,
  },
  r4000: {
    top: 48,
    fontSize: FontSize.size_base,
    width: 65,
    height: 18,
    left: 0,
  },
  cervejaArtezanal: {
    top: 18,
    fontSize: FontSize.size_5xl,
    width: 180,
    height: 29,
    left: 0,
  },
  imageAboutTumblrInToGaby: {
    left: 253,
    width: 124,
    height: 120,
    top: 0,
    borderRadius: Border.br_11xl,
    position: "absolute",
  },
  r4000Parent: {
    width: 373,
    left: 31,
  },
  cervejaartezanaladdInner: {
    left: 288,
    width: 116,
    borderRadius: Border.br_11xl,
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
    top: 610,
    left: 31,
  },
  cervejaartezanaladd: {
    height: 920,
    width: 428,
  },
});

export default CervejaArtezanaladd;
