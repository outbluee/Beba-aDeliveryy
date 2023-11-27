import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import JuiceBurstadd from "../components/JuiceBurstadd";
import { useNavigation } from "@react-navigation/native";
import Carrinho from "../components/Carrinho";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Sucos = () => {
  const [rectangleImage1Visible, setRectangleImage1Visible] = useState(false);
  const navigation = useNavigation();
  const [ellipseImageVisible, setEllipseImageVisible] = useState(false);

  const openRectangleImage1 = useCallback(() => {
    setRectangleImage1Visible(true);
  }, []);

  const closeRectangleImage1 = useCallback(() => {
    setRectangleImage1Visible(false);
  }, []);

  const openEllipseImage = useCallback(() => {
    setEllipseImageVisible(true);
  }, []);

  const closeEllipseImage = useCallback(() => {
    setEllipseImageVisible(false);
  }, []);

  return (
    <>
      <View style={styles.sucos}>
        <Text
          style={[styles.sucoAuroraUva, styles.sucoTypo1]}
        >{`Suco Aurora Uva 
R$ 4,50`}</Text>
        <Text style={[styles.sucoMaVerde, styles.sucoTypo1]}>{`Suco Maçã Verde
R$15,00`}</Text>
        <View style={styles.statusBarService}>
          <View style={[styles.signal, styles.signalLayout]}>
            <View style={[styles.bar, styles.barLayout]} />
            <View style={[styles.bar1, styles.barPosition]} />
            <View style={[styles.bar2, styles.barLayout]} />
            <View style={[styles.bar3, styles.barPosition]} />
          </View>
        </View>
        <Image
          style={styles.signalLayout}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Text style={[styles.sucos1, styles.sucos1Typo]}>Sucos</Text>
        <Text style={[styles.promoes, styles.sucos1Typo]}>Promoções</Text>
        <Image
          style={[styles.sucosChild, styles.wrapperLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-101.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperLayout]}
          onPress={openRectangleImage1}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-11.png")}
          />
        </Pressable>
        <Image
          style={[styles.sucosItem, styles.sucosLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-23.png")}
        />
        <Image
          style={[styles.sucosInner, styles.sucosInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-24.png")}
        />
        <Text style={[styles.sucoDeMorango, styles.sucoLayout]}>
          Suco de Morango R$40,00
        </Text>
        <Text
          style={[styles.sucoJuiceBurst, styles.sucoTypo]}
        >{`Suco Juice Burst 
R$ 35,00`}</Text>
        <Image
          style={styles.statusBarBattery}
          contentFit="cover"
          source={require("../assets/status-bar--battery.png")}
        />
        <Text style={styles.text}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
        </View>
        <Image
          style={[styles.rectangleIcon, styles.sucosInnerLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-25.png")}
        />
        <Image
          style={[styles.sucosChild1, styles.sucosLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-262.png")}
        />
        <Text style={[styles.sucoMelanciaR, styles.sucoTypo1]}>{`Suco Melancia
R$ 4,50`}</Text>
        <Text
          style={[styles.sucoNaturaisR1500, styles.sucoTypo]}
        >{`Suco Naturais
R$15,00`}</Text>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Pressable
            style={[styles.image9, styles.imagePosition]}
            onPress={() => navigation.navigate("TelaPrincipal")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/image-9.png")}
            />
          </Pressable>
          <Pressable
            style={styles.image10}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/image-10.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image11, styles.imagePosition]}
            onPress={() => navigation.navigate("Historico")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image12, styles.image12Layout]}
            onPress={() => navigation.navigate("TelaDePesquisa")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/image-12.png")}
            />
          </Pressable>
          <Pressable style={styles.container} onPress={openEllipseImage}>
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </Pressable>
          <Image
            style={[styles.image13Icon, styles.image12Layout]}
            contentFit="cover"
            source={require("../assets/image-91.png")}
          />
        </View>
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <View style={styles.fantaLaranjaParent}>
          <Image
            style={[styles.fantaLaranjaIcon, styles.fantaIconLayout1]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon1, styles.fantaIconLayout1]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon2, styles.fantaIconLayout1]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon3, styles.fantaIconLayout1]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon4, styles.fantaIconLayout]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon5, styles.fantaIconLayout]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
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

      <Modal animationType="fade" transparent visible={ellipseImageVisible}>
        <View style={styles.ellipseImageOverlay}>
          <Pressable
            style={styles.ellipseImageBg}
            onPress={closeEllipseImage}
          />
          <Carrinho onClose={closeEllipseImage} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  sucoTypo1: {
    width: 143,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
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
  sucos1Typo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  wrapperLayout: {
    height: 116,
    width: 155,
    top: 276,
    position: "absolute",
  },
  sucosLayout: {
    height: 126,
    width: 159,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sucosInnerLayout: {
    width: 158,
    height: 126,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sucoLayout: {
    height: 18,
    top: 388,
  },
  sucoTypo: {
    left: 220,
    width: 143,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildPosition: {
    width: 464,
    left: 0,
    position: "absolute",
  },
  imagePosition: {
    height: 32,
    top: 34,
    position: "absolute",
  },
  image12Layout: {
    height: 36,
    position: "absolute",
  },
  fantaIconLayout1: {
    width: 87,
    height: 72,
    top: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  fantaIconLayout: {
    width: 79,
    top: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  sucoAuroraUva: {
    left: 43,
    height: 17,
    top: 565,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
  },
  sucoMaVerde: {
    left: 226,
    height: 17,
    top: 565,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
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
  sucos1: {
    top: 223,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 81,
    height: 27,
    left: 26,
    color: Color.colorBlack,
  },
  promoes: {
    top: 91,
    left: 31,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.colorRed_100,
    display: "flex",
    alignItems: "center",
    width: 152,
    height: 51,
  },
  sucosChild: {
    borderRadius: Border.br_3xs,
    left: 36,
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
    borderRadius: Border.br_3xs,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 213,
  },
  sucosItem: {
    left: 216,
    top: 437,
  },
  sucosInner: {
    left: 39,
    top: 437,
  },
  sucoDeMorango: {
    left: 47,
    width: 143,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    position: "absolute",
  },
  sucoJuiceBurst: {
    height: 18,
    top: 388,
  },
  statusBarBattery: {
    height: "2.65%",
    width: "7.71%",
    top: "1.72%",
    right: "-3.2%",
    bottom: "95.64%",
    left: "95.49%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    marginTop: -450,
    top: "50%",
    left: "6.31%",
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
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
    width: 1,
    opacity: 0.4,
    maxHeight: "100%",
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
  rectangleIcon: {
    top: 617,
    left: 216,
  },
  sucosChild1: {
    top: 613,
    left: 36,
  },
  sucoMelanciaR: {
    top: 735,
    left: 40,
    height: 17,
  },
  sucoNaturaisR1500: {
    top: 740,
    height: 17,
  },
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    height: 68,
    top: 19,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  image9: {
    width: 39,
    left: 36,
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
  ellipseImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ellipseImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  container: {
    left: 165,
    width: 72,
    height: 72,
    top: 0,
    position: "absolute",
  },
  image13Icon: {
    left: 182,
    width: 38,
    top: 19,
  },
  rectangleParent: {
    top: 841,
    height: 87,
  },
  groupIcon: {
    top: 56,
    width: 40,
    height: 37,
    left: 26,
    position: "absolute",
  },
  fantaLaranjaIcon: {
    left: -4,
  },
  fantaLaranjaIcon1: {
    left: 98,
  },
  fantaLaranjaIcon2: {
    left: 200,
  },
  fantaLaranjaIcon3: {
    left: 302,
  },
  fantaLaranjaIcon4: {
    left: 404,
    height: 72,
  },
  fantaLaranjaIcon5: {
    left: 510,
    height: 64,
  },
  fantaLaranjaParent: {
    top: 142,
    left: 21,
    width: 393,
    height: 64,
    position: "absolute",
  },
  sucos: {
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
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Sucos;
