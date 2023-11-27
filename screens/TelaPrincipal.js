import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import PromotionsCard from "../components/PromotionsCard";
import Login from "../components/Login";
import SectionFilter from "../components/SectionFilter";
import Property1Frame71 from "../components/Property1Frame71";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const TelaPrincipal = () => {
  const [frameContainer1Visible, setFrameContainer1Visible] = useState(false);

  const openFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(true);
  }, []);

  const closeFrameContainer1 = useCallback(() => {
    setFrameContainer1Visible(false);
  }, []);

  return (
    <>
      <View style={styles.telaPrincipal}>
        <PromotionsCard />
        <View style={styles.telaPrincipalChild} />
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
        </View>
        <Text style={styles.text}>9:41</Text>
        <Image
          style={styles.signalLayout}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <View style={styles.statusBarService}>
          <View style={[styles.signal, styles.signalLayout]}>
            <View style={[styles.bar, styles.barLayout]} />
            <View style={[styles.bar1, styles.barPosition]} />
            <View style={[styles.bar2, styles.barLayout]} />
            <View style={[styles.bar3, styles.barPosition]} />
          </View>
        </View>
        <Text style={styles.text}>9:41</Text>
        <Text style={[styles.destaques, styles.destaquesTypo]}>Destaques</Text>
        <Text style={[styles.olCliente, styles.destaquesTypo]}>
          Olá, Cliente
        </Text>
        <Pressable style={styles.loginWrapper} onPress={openFrameContainer1}>
          <Text style={styles.login}>login</Text>
        </Pressable>
        <SectionFilter />
        <Property1Frame71
          property1Frame71Position="absolute"
          property1Frame71Top={175}
          property1Frame71Left={16}
        />
      </View>

      <Modal animationType="fade" transparent visible={frameContainer1Visible}>
        <View style={styles.frameContainer1Overlay}>
          <Pressable
            style={styles.frameContainer1Bg}
            onPress={closeFrameContainer1}
          />
          <Login onClose={closeFrameContainer1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  signalLayout: {
    height: 13,
    width: 18,
  },
  barLayout: {
    borderRadius: 1,
    bottom: "-102.34%",
    width: "17.22%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  barPosition: {
    bottom: "-101.56%",
    borderRadius: 1,
    width: "17.22%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  destaquesTypo: {
    textAlign: "left",
    left: 16,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    position: "absolute",
  },
  telaPrincipalChild: {
    width: 428,
    height: 393,
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: "100%",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    maxHeight: "100%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    width: 21,
    backgroundColor: Color.colorBlack,
  },
  battery: {
    height: "1.4%",
    marginLeft: 150,
    bottom: "97.19%",
    width: 27,
    top: "1.4%",
  },
  text: {
    marginTop: -456,
    top: "50%",
    left: "8.88%",
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  bar: {
    height: "35.94%",
    top: "166.41%",
    right: "-1717.22%",
    left: "1800%",
  },
  bar1: {
    height: "54.69%",
    top: "146.88%",
    right: "-1745%",
    left: "1827.78%",
  },
  bar2: {
    height: "78.91%",
    top: "123.44%",
    right: "-1772.22%",
    left: "1855%",
  },
  bar3: {
    top: "101.56%",
    right: "-1800%",
    left: "1882.78%",
    height: "100%",
  },
  signal: {
    backgroundColor: Color.colorBlack,
  },
  statusBarService: {
    height: "1.38%",
    width: "4.21%",
    right: "20.09%",
    bottom: "97.21%",
    left: "75.7%",
    top: "1.4%",
    position: "absolute",
  },
  destaques: {
    top: 116,
    fontSize: FontSize.size_13xl,
    width: 228,
    height: 63,
  },
  olCliente: {
    top: 64,
    fontSize: FontSize.size_5xl,
  },
  frameContainer1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  login: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "center",
    color: Color.colorBlack,
    left: 0,
    top: 0,
    position: "absolute",
  },
  loginWrapper: {
    top: 69,
    left: 344,
    width: 37,
    height: 18,
    position: "absolute",
  },
  telaPrincipal: {
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default TelaPrincipal;
