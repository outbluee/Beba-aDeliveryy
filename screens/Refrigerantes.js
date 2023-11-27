import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Carrinho from "../components/Carrinho";
import DrPepperadd from "../components/DrPepperadd";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Refrigerantes = () => {
  const navigation = useNavigation();
  const [ellipseImageVisible, setEllipseImageVisible] = useState(false);
  const [imageAboutTumblrInToGabyVisible, setImageAboutTumblrInToGabyVisible] =
    useState(false);

  const openEllipseImage = useCallback(() => {
    setEllipseImageVisible(true);
  }, []);

  const closeEllipseImage = useCallback(() => {
    setEllipseImageVisible(false);
  }, []);

  const openImageAboutTumblrInToGaby = useCallback(() => {
    setImageAboutTumblrInToGabyVisible(true);
  }, []);

  const closeImageAboutTumblrInToGaby = useCallback(() => {
    setImageAboutTumblrInToGabyVisible(false);
  }, []);

  return (
    <>
      <View style={styles.refrigerantes}>
        <Text style={[styles.spriteR450, styles.spriteR450Typo]}>{`Sprite
R$ 4,50`}</Text>
        <Text style={[styles.drPeperR1500, styles.spriteR450Typo]}>{`Dr Peper
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
        <Text style={[styles.refrigerante, styles.promoesTypo]}>
          Refrigerante
        </Text>
        <Text style={[styles.promoes, styles.promoesTypo]}>Promoções</Text>
        <Text style={[styles.pepsci1, styles.pepsci1Typo]}>
          1 Pepsci + 1 Coca R$40,00
        </Text>
        <Text style={[styles.fantaLaranjaR, styles.pepsci1Typo]}>{`Fanta laranja
R$ 35,00`}</Text>
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
        <Text style={[styles.cocaColaR450, styles.cocaColaR450Typo]}>{`Coca-cola
R$ 4,50`}</Text>
        <Text
          style={[styles.guaranJesusR100000000, styles.cocaColaR450Typo]}
        >{`Guaraná Jesus
R$1.000.000,00`}</Text>
        <View style={[styles.rectangleParent, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.groupChildPosition]} />
          <Pressable
            style={[styles.image9, styles.imagePosition]}
            onPress={() => navigation.navigate("TelaPrincipal")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-9.png")}
            />
          </Pressable>
          <Pressable
            style={styles.image10}
            onPress={() => navigation.navigate("Perfil")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-10.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image11, styles.imagePosition]}
            onPress={() => navigation.navigate("Historico")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-11.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image12, styles.image12Layout]}
            onPress={() => navigation.navigate("TelaDePesquisa")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-12.png")}
            />
          </Pressable>
          <Pressable style={styles.wrapper} onPress={openEllipseImage}>
            <Image
              style={styles.icon}
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
          style={styles.refrigerantesChild}
          contentFit="cover"
          source={require("../assets/group-7.png")}
        />
        <Image
          style={[styles.pepsiCocaCola, styles.pepsiCocaColaLayout]}
          contentFit="cover"
          source={require("../assets/----pepsi--coca-cola---1001.png")}
        />
        <Image
          style={[styles.fantaLaranjaIcon, styles.fantaLaranjaIconPosition]}
          contentFit="cover"
          source={require("../assets/fanta-laranja3.png")}
        />
        <View style={styles.fantaLaranjaParent}>
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
            style={[styles.fantaLaranjaIcon4, styles.fantaIconLayout1]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon5, styles.fantaIconLayout]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon6, styles.fantaIconLayout]}
            contentFit="cover"
            source={require("../assets/fanta-laranja2.png")}
          />
        </View>
        <Image
          style={[
            styles.refrigeranteSpriteLimonSoci,
            styles.pepsiCocaColaLayout1,
          ]}
          contentFit="cover"
          source={require("../assets/refrigerante-sprite-limon-social-media-psd-editvel.png")}
        />
        <Pressable
          style={[
            styles.imageAboutTumblrInToGaby,
            styles.fantaLaranjaIconPosition,
          ]}
          onPress={openImageAboutTumblrInToGaby}
        >
          <Image
            style={styles.icon5}
            contentFit="cover"
            source={require("../assets/image-about-tumblr-in-to-gaby-by-cami-on-we-heart-it5.png")}
          />
        </Pressable>
        <Image
          style={[styles.cocaColaIcon, styles.cocaColaIconPosition]}
          contentFit="cover"
          source={require("../assets/coca-cola2.png")}
        />
        <Image
          style={[
            styles.barreirinhasRestauranteMar,
            styles.cocaColaIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/barreirinhas--restaurante-marina-tropical--nerds-viajantes-1.png")}
        />
      </View>

      <Modal animationType="fade" transparent visible={ellipseImageVisible}>
        <View style={styles.ellipseImageOverlay}>
          <Pressable
            style={styles.ellipseImageBg}
            onPress={closeEllipseImage}
          />
          <Carrinho onClose={closeEllipseImage} />
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent
        visible={imageAboutTumblrInToGabyVisible}
      >
        <View style={styles.imageAboutTumblrInToGabyOverlay}>
          <Pressable
            style={styles.imageAboutTumblrInToGabyBg}
            onPress={closeImageAboutTumblrInToGaby}
          />
          <DrPepperadd onClose={closeImageAboutTumblrInToGaby} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  spriteR450Typo: {
    height: 17,
    width: 143,
    textAlign: "left",
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
    top: 565,
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
  promoesTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    position: "absolute",
  },
  pepsci1Typo: {
    height: 18,
    top: 388,
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
  cocaColaR450Typo: {
    top: 735,
    height: 17,
    width: 143,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interLight,
    fontWeight: "300",
    fontSize: FontSize.size_sm,
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
  pepsiCocaColaLayout: {
    height: 116,
    position: "absolute",
  },
  fantaLaranjaIconPosition: {
    left: 228,
    width: 155,
  },
  fantaIconLayout1: {
    width: 87,
    borderRadius: Border.br_3xs,
    height: 72,
    top: 0,
    position: "absolute",
  },
  fantaIconLayout: {
    width: 79,
    borderRadius: Border.br_3xs,
    top: 0,
    position: "absolute",
  },
  pepsiCocaColaLayout1: {
    width: 155,
    borderRadius: Border.br_3xs,
  },
  cocaColaIconPosition: {
    top: 605,
    height: 116,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  spriteR450: {
    left: 43,
  },
  drPeperR1500: {
    left: 226,
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
  refrigerante: {
    top: 214,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 200,
    height: 27,
    left: 32,
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
  pepsci1: {
    left: 47,
  },
  fantaLaranjaR: {
    left: 220,
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
  cocaColaR450: {
    left: 40,
  },
  guaranJesusR100000000: {
    left: 223,
  },
  groupChild: {
    top: 19,
    backgroundColor: Color.colorGainsboro_100,
    height: 68,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image9: {
    left: 36,
    width: 39,
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
  wrapper: {
    left: 165,
    width: 72,
    height: 72,
    top: 0,
    position: "absolute",
  },
  image13Icon: {
    top: 18,
    left: 182,
    width: 38,
  },
  rectangleParent: {
    top: 841,
    height: 87,
  },
  refrigerantesChild: {
    top: 61,
    width: 40,
    height: 37,
    left: 32,
    position: "absolute",
  },
  pepsiCocaCola: {
    width: 155,
    borderRadius: Border.br_3xs,
    top: 272,
    height: 116,
    left: 32,
  },
  fantaLaranjaIcon: {
    height: 116,
    position: "absolute",
    borderRadius: Border.br_3xs,
    top: 272,
  },
  fantaLaranjaIcon1: {
    left: -4,
  },
  fantaLaranjaIcon2: {
    left: 98,
  },
  fantaLaranjaIcon3: {
    left: 200,
  },
  fantaLaranjaIcon4: {
    left: 302,
  },
  fantaLaranjaIcon5: {
    left: 404,
    height: 72,
  },
  fantaLaranjaIcon6: {
    left: 510,
    height: 64,
  },
  fantaLaranjaParent: {
    top: 140,
    left: 24,
    width: 393,
    height: 64,
    position: "absolute",
  },
  refrigeranteSpriteLimonSoci: {
    top: 445,
    left: 30,
    height: 118,
    position: "absolute",
  },
  imageAboutTumblrInToGabyOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  imageAboutTumblrInToGabyBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon5: {
    borderRadius: Border.br_3xs,
    height: "100%",
    width: "100%",
  },
  imageAboutTumblrInToGaby: {
    top: 447,
    height: 116,
    position: "absolute",
  },
  cocaColaIcon: {
    left: 28,
    width: 156,
  },
  barreirinhasRestauranteMar: {
    left: 228,
    width: 155,
  },
  refrigerantes: {
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

export default Refrigerantes;
