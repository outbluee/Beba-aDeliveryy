import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const PromotionsCard = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.telaPrincipalInner}>
      <View style={styles.promoesParent}>
        <Text style={styles.promoes}>Promoções</Text>
        <Text style={styles.restaurantes}>Restaurantes</Text>
        <Text style={styles.bebidas}>Bebidas</Text>
        <View style={styles.frameChild} />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <Image
          style={[styles.futureBrandItaipavaPict, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/future-brand---itaipava--pict-estdio-11.png")}
        />
        <Image
          style={[styles.fantaLaranjaIcon, styles.fantaLaranjaIconLayout]}
          contentFit="cover"
          source={require("../assets/fanta-laranja1.png")}
        />
        <Image
          style={[styles.imageAboutTumblrInToGaby, styles.frameInnerPosition]}
          contentFit="cover"
          source={require("../assets/image-about-tumblr-in-to-gaby-by-cami-on-we-heart-it2.png")}
        />
        <Image
          style={[styles.cocaColaIcon, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/coca-cola1.png")}
        />
        <Image
          style={[
            styles.barreirinhasRestauranteMar,
            styles.fantaLaranjaIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/barreirinhas--restaurante-marina-tropical--nerds-viajantes-21.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.rectangleIconPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-311.png")}
        />
        <Image
          style={[styles.petraCervejaPuroMalte, styles.rectangleIconPosition]}
          contentFit="cover"
          source={require("../assets/petra---cerveja-puro-malte1.png")}
        />
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame-7.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout1]}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("RestaurantMoes")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-18.png")}
          />
        </Pressable>
        <Image
          style={[styles.fantaLaranjaIcon1, styles.frameChild3Layout]}
          contentFit="cover"
          source={require("../assets/fanta-laranja1.png")}
        />
        <Image
          style={[styles.futureBrandItaipavaPict1, styles.frameChild3Layout]}
          contentFit="cover"
          source={require("../assets/future-brand---itaipava--pict-estdio-12.png")}
        />
        <Image
          style={[styles.frameChild3, styles.frameChild3Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-272.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-28.png")}
        />
        <Image
          style={[styles.frameChild6, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-29.png")}
        />
        <Pressable
          style={[styles.barDeDrinksHettwerIpiranga, styles.wrapperLayout]}
          onPress={() => navigation.navigate("RestauranteBiladen")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/bardedrinkshettweripiranga-21.png")}
          />
        </Pressable>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  frameItemLayout: {
    height: 93,
    width: 94,
    borderRadius: Border.br_xl,
    top: 430,
    position: "absolute",
  },
  fantaLaranjaIconLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameInnerPosition: {
    left: 263,
    width: 86,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameInnerLayout: {
    height: 87,
    top: 665,
  },
  rectangleIconPosition: {
    left: 135,
    width: 86,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 88,
    top: 177,
    width: 90,
    position: "absolute",
  },
  wrapperLayout: {
    width: 91,
    height: 88,
    top: 177,
    position: "absolute",
  },
  frameChild3Layout: {
    height: 94,
    top: 36,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameChildLayout: {
    top: 320,
    height: 94,
    width: 94,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  promoes: {
    width: 131,
    height: 28,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansLightItalic,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    left: 10,
    top: 0,
    position: "absolute",
  },
  restaurantes: {
    top: 142,
    width: 144,
    height: 25,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansLightItalic,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    left: 10,
    position: "absolute",
  },
  bebidas: {
    top: 286,
    width: 90,
    height: 25,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansLightItalic,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_5xl,
    left: 10,
    position: "absolute",
  },
  frameChild: {
    backgroundColor: Color.colorKhaki_100,
    height: 86,
    top: 430,
    width: 86,
    borderRadius: Border.br_xl,
    left: 4,
    position: "absolute",
  },
  frameItem: {
    left: 259,
  },
  futureBrandItaipavaPict: {
    left: 0,
  },
  fantaLaranjaIcon: {
    top: 431,
    left: 131,
    height: 92,
    width: 94,
  },
  imageAboutTumblrInToGaby: {
    top: 548,
    height: 86,
  },
  cocaColaIcon: {
    width: 86,
    top: 665,
    borderRadius: Border.br_xl,
    left: 4,
    position: "absolute",
  },
  barreirinhasRestauranteMar: {
    top: 544,
    width: 88,
    height: 90,
    left: 4,
    borderRadius: Border.br_xl,
  },
  frameInner: {
    left: 263,
    width: 86,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleIcon: {
    top: 548,
    height: 86,
  },
  petraCervejaPuroMalte: {
    height: 87,
    top: 665,
  },
  frameIcon: {
    left: 132,
    top: 36,
    height: 86,
    width: 86,
    position: "absolute",
  },
  ellipseIcon: {
    left: 0,
  },
  frameChild1: {
    left: 132,
  },
  frameChild2: {
    left: 259,
  },
  icon: {
    borderRadius: Border.br_181xl,
    width: "100%",
    height: "100%",
  },
  wrapper: {
    left: 132,
  },
  fantaLaranjaIcon1: {
    left: -4,
    width: 94,
  },
  futureBrandItaipavaPict1: {
    width: 93,
    left: 128,
  },
  frameChild3: {
    left: 255,
    width: 94,
  },
  frameChild4: {
    left: -4,
  },
  frameChild5: {
    left: 128,
  },
  frameChild6: {
    left: 259,
  },
  barDeDrinksHettwerIpiranga: {
    left: -2,
  },
  promoesParent: {
    left: 0,
    top: 0,
    height: 436,
    width: 349,
    position: "absolute",
  },
  telaPrincipalInner: {
    top: 403,
    left: 36,
    height: 436,
    width: 349,
    position: "absolute",
  },
});

export default PromotionsCard;
