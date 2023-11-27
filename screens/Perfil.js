import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Frame from "./Frame";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Perfil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfil}>
      <LinearGradient
        style={styles.perfilChild}
        locations={[0, 0.26, 0.63, 0.78, 0.93]}
        colors={[
          "#fff59d",
          "rgba(255, 246, 160, 0.74)",
          "rgba(251, 244, 183, 0.37)",
          "rgba(253, 249, 210, 0)",
          "rgba(255, 255, 255, 0.07)",
        ]}
      />
      <Text style={[styles.perfil1, styles.ajudaTypo]}>Perfil</Text>
      <Text style={[styles.endereos, styles.ajudaTypo]}>Endereços</Text>
      <Text style={[styles.meusDados, styles.meusDadosTypo]}>Meus dados</Text>
      <Text style={[styles.configuraes, styles.ajudaTypo]}>Configurações</Text>
      <Text style={[styles.sugerirRestaurantes, styles.ajudaTypo]}>
        Sugerir restaurantes
      </Text>
      <Text style={[styles.ajuda, styles.ajudaTypo]}>Ajuda</Text>
      <Text style={[styles.conversas, styles.meusDadosTypo]}>Conversas</Text>
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
      <View style={[styles.battery, styles.batteryPosition]}>
        <View style={styles.border} />
        <Image
          style={[styles.capIcon, styles.batteryPosition]}
          contentFit="cover"
          source={require("../assets/cap1.png")}
        />
        <View style={[styles.capacity, styles.batteryPosition]} />
      </View>
      <View style={[styles.perfilItem, styles.perfilChildLayout1]} />
      <View style={[styles.perfilInner, styles.perfilChildLayout1]} />
      <View style={[styles.lineView, styles.perfilChildLayout1]} />
      <View style={[styles.perfilChild1, styles.perfilChildLayout1]} />
      <View style={[styles.perfilChild2, styles.perfilChildLayout1]} />
      <Image
        style={[styles.lineIcon, styles.perfilChildLayout]}
        contentFit="cover"
        source={require("../assets/line-5.png")}
      />
      <Image
        style={[styles.perfilChild3, styles.perfilChildLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <Image
        style={[styles.perfilChild4, styles.perfilChildLayout]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
      <View style={styles.rectangleView} />
      <Image
        style={[styles.image14Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-10.png")}
      />
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
          onPress={() => navigation.navigate("Frame")}
        >
          <View style={[styles.image4Wrapper, styles.wrapperLayout]}>
            <Image
              style={[styles.image4Icon, styles.iconLayout]}
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
      <Frame />
    </View>
  );
};

const styles = StyleSheet.create({
  ajudaTypo: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  meusDadosTypo: {
    left: 24,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
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
  batteryPosition: {
    left: "50%",
    position: "absolute",
  },
  perfilChildLayout1: {
    height: 1,
    width: 429,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    position: "absolute",
  },
  perfilChildLayout: {
    width: 428,
    left: 2,
    height: 1,
    position: "absolute",
  },
  iconLayout: {
    height: 28,
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
  perfilChild: {
    top: -5,
    left: -7,
    width: 433,
    height: 931,
    backgroundColor: "transparent",
    position: "absolute",
  },
  perfil1: {
    top: 84,
    left: 67,
    width: 86,
  },
  endereos: {
    top: 222,
    left: 17,
    width: 133,
  },
  meusDados: {
    top: 289,
    width: 133,
  },
  configuraes: {
    top: 726,
    left: 11,
    width: 176,
  },
  sugerirRestaurantes: {
    top: 777,
    left: 18,
    width: 218,
    height: 27,
  },
  ajuda: {
    top: 675,
    left: -2,
    width: 133,
  },
  conversas: {
    top: 162,
    width: 118,
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
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    height: 21,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  border: {
    marginLeft: -12.8,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 24,
    opacity: 0.35,
    borderStyle: "solid",
    left: "50%",
    height: "100%",
    position: "absolute",
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
  perfilItem: {
    top: 209,
    left: 0,
  },
  perfilInner: {
    top: 144,
    left: 0,
  },
  lineView: {
    top: 268,
    left: 0,
  },
  perfilChild1: {
    top: 334,
    left: 0,
  },
  perfilChild2: {
    top: 666,
    left: -2,
  },
  lineIcon: {
    top: 712,
  },
  perfilChild3: {
    top: 768,
  },
  perfilChild4: {
    top: 820,
  },
  rectangleView: {
    top: 73,
    left: 15,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMidnightblue,
    width: 53,
    height: 48,
    position: "absolute",
  },
  image14Icon: {
    top: 83,
    left: 23,
    width: 37,
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
    top: 6,
    left: 10,
    width: 35,
  },
  image4Wrapper: {
    top: 0,
    left: 0,
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
    top: 836,
    left: -17,
    height: 184,
    width: 458,
    position: "absolute",
  },
  perfil: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Perfil;
