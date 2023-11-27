import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Login = memo(({ onClose }) => {
  return (
    <View style={styles.login}>
      <View style={[styles.rectangleParent, styles.groupChildPosition]}>
        <View style={[styles.groupChild, styles.groupChildBg]} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.email, styles.emailFlexBox]}>Email</Text>
        <Text style={styles.senha}>Senha</Text>
        <Text style={[styles.login1, styles.emailFlexBox]}>Login</Text>
        <View style={[styles.rectangleView, styles.groupChildBg]} />
        <Text style={[styles.cadastrarSe, styles.confirmarTypo]}>
          Cadastrar-se
        </Text>
        <Text style={[styles.confirmar, styles.confirmarTypo]}>Confirmar</Text>
        <Image
          style={styles.image13Icon}
          contentFit="cover"
          source={require("../assets/image-131.png")}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    width: 401,
  },
  groupChildBg: {
    backgroundColor: Color.colorBlanchedalmond,
    position: "absolute",
  },
  groupLayout: {
    height: 30,
    width: 287,
    backgroundColor: Color.colorGold_200,
    borderRadius: Border.br_3xs,
    left: 80,
    position: "absolute",
  },
  emailFlexBox: {
    height: 21,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  confirmarTypo: {
    width: 133,
    color: Color.colorGray_200,
    fontSize: FontSize.size_mini,
    left: 141,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    position: "absolute",
  },
  groupChild: {
    top: 14,
    borderRadius: Border.br_xl,
    height: 374,
    left: 0,
    width: 401,
  },
  groupItem: {
    top: 202,
  },
  groupInner: {
    top: 283,
  },
  email: {
    top: 215,
    left: 25,
    width: 55,
    color: Color.colorGray_100,
    fontSize: FontSize.size_mid,
    height: 21,
  },
  senha: {
    top: 292,
    left: 18,
    width: 62,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorGray_100,
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  login1: {
    top: 166,
    left: 112,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    width: 176,
  },
  rectangleView: {
    top: 341,
    left: 126,
    width: 162,
    height: 31,
  },
  cadastrarSe: {
    top: 347,
  },
  confirmar: {
    top: 318,
  },
  image13Icon: {
    top: 0,
    left: 47,
    width: 306,
    height: 166,
    position: "absolute",
  },
  rectangleParent: {
    top: 27,
    position: "absolute",
    height: 388,
  },
  login: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: 388,
    width: 401,
  },
});

export default Login;
