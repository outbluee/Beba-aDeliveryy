import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import SectionForm from "../components/SectionForm";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Historico = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historico}>
      <Image
        style={[styles.historicoChild, styles.historicoPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={[styles.frameItem, styles.frameChildLayout]} />
        <View style={[styles.frameInner, styles.frameChildLayout]} />
        <View style={[styles.rectangleView, styles.frameChildLayout]} />
        <View style={[styles.frameChild1, styles.frameChildLayout]} />
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
      </View>
      <LinearGradient
        style={[styles.historicoItem, styles.historicoPosition]}
        locations={[0.01, 0.24, 0.64, 0.93, 0.99]}
        colors={[
          "#f7e8c2",
          "#f7edd2",
          "#fffdf9",
          "#fffefb",
          "rgba(255, 254, 251, 0.32)",
        ]}
      />
      <View style={styles.historicoInner} />
      <View style={[styles.historicoChild1, styles.historicoChild1Layout]} />
      <Image
        style={[styles.glassCheersIcon, styles.historicoChild1Layout]}
        contentFit="cover"
        source={require("../assets/glasscheers.png")}
      />
      <Pressable
        style={styles.image7}
        onPress={() => navigation.navigate("TelaDePesquisa")}
      />
      <View style={[styles.historicoChild2, styles.historicoChildBg]} />
      <Text style={[styles.histricoDePedidos, styles.min30minFlexBox]}>
        Histórico de Pedidos
      </Text>
      <Text style={[styles.min30min, styles.min30minFlexBox]}>20min-30min</Text>
      <Text style={[styles.pedidoEmAndamento, styles.min30minFlexBox]}>
        Pedido em andamento...
      </Text>
      <Text style={[styles.soPauloSp, styles.min30minFlexBox]}>
        São Paulo, SP
      </Text>
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
      <Text style={[styles.text, styles.textLayout]}>9:41</Text>
      <View style={[styles.battery, styles.borderPosition]}>
        <View style={[styles.border, styles.borderPosition]} />
        <Image
          style={[styles.capIcon, styles.borderPosition]}
          contentFit="cover"
          source={require("../assets/cap1.png")}
        />
        <View style={[styles.capacity, styles.borderPosition]} />
      </View>
      <SectionForm />
      <Image
        style={[styles.mapMarkerAltIcon, styles.textLayout]}
        contentFit="cover"
        source={require("../assets/mapmarkeralt.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  historicoPosition: {
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameChildLayout: {
    height: 170,
    width: 273,
    backgroundColor: Color.colorKhaki_100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  historicoChild1Layout: {
    height: 30,
    position: "absolute",
  },
  historicoChildBg: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
  },
  min30minFlexBox: {
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
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
  textLayout: {
    height: 21,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  historicoChild: {
    height: 926,
  },
  frameChild: {
    left: 0,
    width: 273,
    top: 0,
  },
  frameItem: {
    top: 196,
    left: 1,
  },
  frameInner: {
    top: 389,
    left: 0,
    width: 273,
  },
  rectangleView: {
    top: 574,
    left: 0,
    width: 273,
  },
  frameChild1: {
    top: 757,
    left: 0,
    width: 273,
  },
  frameChild2: {
    top: 944,
    left: 0,
    width: 273,
  },
  rectangleParent: {
    top: 499,
    left: 4,
    width: 274,
    height: 353,
    position: "absolute",
  },
  historicoItem: {
    height: 481,
    backgroundColor: "transparent",
  },
  historicoInner: {
    top: 169,
    width: 397,
    height: 192,
    left: 16,
    backgroundColor: Color.colorKhaki_100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  historicoChild1: {
    top: 63,
    left: 83,
    width: 232,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
  },
  glassCheersIcon: {
    top: 272,
    left: 194,
    width: 37,
    overflow: "hidden",
  },
  image7: {
    top: 869,
    left: 102,
    width: 39,
    height: 36,
    position: "absolute",
  },
  historicoChild2: {
    top: 440,
    width: 197,
    height: 24,
    left: 16,
    position: "absolute",
  },
  histricoDePedidos: {
    top: 441,
    width: 196,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    alignItems: "flex-end",
    display: "flex",
    left: 16,
  },
  min30min: {
    top: 221,
    left: 141,
    width: 142,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    alignItems: "flex-end",
    display: "flex",
  },
  pedidoEmAndamento: {
    top: 135,
    left: 10,
    width: 227,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_lg,
    alignItems: "flex-end",
    display: "flex",
  },
  soPauloSp: {
    left: 133,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_400,
    width: 150,
    top: 68,
    height: 24,
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
    textAlign: "center",
    height: 21,
    color: Color.colorBlack,
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
  mapMarkerAltIcon: {
    left: 121,
    width: 16,
    top: 68,
    overflow: "hidden",
  },
  historico: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 926,
    backgroundColor: Color.colorWhite,
  },
});

export default Historico;
