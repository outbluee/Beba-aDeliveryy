import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import ContainerWrapper from "../components/ContainerWrapper";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const VerTudo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verTudo}>
      <ContainerWrapper />
      <LinearGradient
        style={styles.verTudoChild}
        locations={[0, 0.31, 1]}
        colors={["#fffcc2", "rgba(255, 252, 185, 0.59)", "#fffaed"]}
      />
      <View style={[styles.localizao, styles.localizaoLayout]} />
      <View style={styles.setaPraBaixo} />
      <View style={styles.iconeHamburguer} />
      <View style={styles.removebgPreview1} />
      <View style={styles.image2} />
      <View style={styles.oAppSerDsenvolvido1} />
      <View style={styles.statusBarService}>
        <View style={[styles.signal, styles.signalLayout]}>
          <View style={[styles.bar, styles.barLayout]} />
          <View style={[styles.bar1, styles.barLayout]} />
          <View style={[styles.bar2, styles.barLayout]} />
          <View style={[styles.bar3, styles.barLayout]} />
        </View>
      </View>
      <Image
        style={styles.signalLayout}
        contentFit="cover"
        source={require("../assets/wifi1.png")}
      />
      <Text style={styles.text}>9:41</Text>
      <View style={[styles.battery, styles.borderPosition]}>
        <View style={[styles.border, styles.borderPosition]} />
        <Image
          style={[styles.capIcon, styles.borderPosition]}
          contentFit="cover"
          source={require("../assets/cap1.png")}
        />
        <View style={[styles.capacity, styles.borderPosition]} />
      </View>
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
        <Pressable
          style={styles.image14}
          onPress={() => navigation.navigate("Historico")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-11.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.frameWrapper, styles.wrapperLayout]}
          onPress={() => navigation.navigate("Perfil")}
        >
          <View style={[styles.image4Wrapper, styles.wrapperLayout]}>
            <Image
              style={[styles.image4Icon, styles.localizaoLayout]}
              contentFit="cover"
              source={require("../assets/image-4.png")}
            />
          </View>
        </Pressable>
        <Pressable
          style={[styles.image15, styles.imagePosition]}
          onPress={() => navigation.navigate("VerTudo")}
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
      <View style={[styles.verTudoItem, styles.groupInnerBg]} />
      <Text style={[styles.todasAsBebidas, styles.bebidasTypo]}>
        Todas as bebidas
      </Text>
      <View style={styles.rectangleGroup}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <Image
          style={[styles.fantaLaranjaIcon, styles.fantaLaranjaIconPosition]}
          contentFit="cover"
          source={require("../assets/fanta-laranja1.png")}
        />
        <Image
          style={[
            styles.futureBrandItaipavaPict,
            styles.fantaLaranjaIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/future-brand---itaipava--pict-estdio-12.png")}
        />
        <Image
          style={[styles.pepsiCocaCola, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/----pepsi--coca-cola---100.png")}
        />
      </View>
      <Text style={[styles.promoes, styles.bebidasTypo]}>Promoções</Text>
      <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.bebidas, styles.bebidasTypo]}>Bebidas</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  localizaoLayout: {
    width: 35,
    position: "absolute",
  },
  signalLayout: {
    height: 11,
    width: 17,
  },
  barLayout: {
    borderRadius: 1,
    bottom: "-129.63%",
    width: "17.16%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
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
  groupInnerBg: {
    backgroundColor: Color.colorGold_100,
    borderRadius: Border.br_3xs,
  },
  bebidasTypo: {
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 94,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  fantaLaranjaIconPosition: {
    top: 1,
    height: 94,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 37,
    width: 88,
    position: "absolute",
  },
  verTudoChild: {
    width: 428,
    height: 318,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
    position: "absolute",
  },
  localizao: {
    top: 98,
    left: 98,
    height: 31,
  },
  setaPraBaixo: {
    top: 96,
    left: 274,
    width: 33,
    height: 35,
    position: "absolute",
  },
  iconeHamburguer: {
    top: 93,
    width: 41,
    height: 41,
    left: 45,
    position: "absolute",
  },
  removebgPreview1: {
    top: 89,
    left: 329,
    height: 48,
    width: 54,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  image2: {
    top: 188,
    left: 61,
    width: 27,
    height: 27,
    position: "absolute",
  },
  oAppSerDsenvolvido1: {
    top: 814,
    width: 127,
    height: 67,
    left: 0,
    position: "absolute",
  },
  bar: {
    height: "36.11%",
    top: "193.52%",
    right: "-1698.22%",
    left: "1781.07%",
  },
  bar1: {
    height: "54.63%",
    top: "175%",
    right: "-1726.04%",
    left: "1808.88%",
  },
  bar2: {
    height: "78.7%",
    top: "150.93%",
    right: "-1753.25%",
    left: "1836.09%",
  },
  bar3: {
    top: "129.63%",
    right: "-1781.07%",
    left: "1863.91%",
    height: "100%",
  },
  signal: {
    backgroundColor: Color.colorBlack,
  },
  statusBarService: {
    height: "1.17%",
    width: "3.95%",
    right: "25.72%",
    bottom: "97.32%",
    left: "70.33%",
    top: "1.51%",
    position: "absolute",
  },
  text: {
    marginTop: -462,
    width: "8.64%",
    top: "50%",
    left: "8.88%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    height: 21,
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0,
    color: Color.colorBlack,
    position: "absolute",
  },
  border: {
    marginLeft: -12.8,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 24,
    opacity: 0.35,
    height: "100%",
  },
  capIcon: {
    height: "31.19%",
    marginLeft: 11.6,
    top: "36.7%",
    bottom: "32.11%",
    maxHeight: "100%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.72%",
    marginLeft: -10.9,
    top: "15.6%",
    bottom: "14.68%",
    borderRadius: Border.br_10xs_5,
    width: 20,
    backgroundColor: Color.colorBlack,
  },
  battery: {
    height: "1.18%",
    marginLeft: 142,
    bottom: "97.31%",
    width: 26,
    top: "1.51%",
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    height: 166,
    width: 458,
    left: 0,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  image14: {
    left: 283,
    width: 49,
    height: 32,
    top: 32,
    position: "absolute",
  },
  image4Icon: {
    left: 10,
    height: 28,
    top: 6,
  },
  image4Wrapper: {
    left: 0,
    top: 0,
  },
  frameWrapper: {
    left: 369,
    top: 32,
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
    left: -10,
    height: 184,
    width: 458,
    position: "absolute",
  },
  verTudoItem: {
    top: 51,
    width: 183,
    height: 38,
    left: 126,
    position: "absolute",
  },
  todasAsBebidas: {
    top: 58,
    left: 134,
    color: Color.colorBlack,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
  },
  frameChild: {
    top: 3,
    width: 94,
    left: 126,
  },
  fantaLaranjaIcon: {
    left: -4,
    width: 94,
  },
  futureBrandItaipavaPict: {
    left: 254,
    width: 93,
  },
  pepsiCocaCola: {
    left: 373,
    width: 86,
    top: 0,
  },
  rectangleGroup: {
    top: 144,
    width: 377,
    height: 89,
    left: 45,
    position: "absolute",
  },
  promoes: {
    top: 118,
    color: "#ff0000",
    left: 45,
  },
  groupInner: {
    backgroundColor: Color.colorGold_100,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
  },
  bebidas: {
    left: 5,
    top: 6,
    color: Color.colorBlack,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
  },
  rectangleContainer: {
    top: 281,
    left: 45,
  },
  verTudo: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default VerTudo;
