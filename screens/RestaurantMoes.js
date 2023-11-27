import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import CervejaArtezanaladd from "../components/CervejaArtezanaladd";
import { useNavigation } from "@react-navigation/native";
import Carrinho from "../components/Carrinho";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const RestaurantMoes = () => {
  const [rectangleImageVisible, setRectangleImageVisible] = useState(false);
  const navigation = useNavigation();
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);

  const openRectangleImage = useCallback(() => {
    setRectangleImageVisible(true);
  }, []);

  const closeRectangleImage = useCallback(() => {
    setRectangleImageVisible(false);
  }, []);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.restaurantmoes}>
        <LinearGradient
          style={[styles.restaurantmoesChild, styles.restaurantmoesBg]}
          locations={[0.03, 0.26, 0.58, 1]}
          colors={["#ffe7ab", "#ffeebf", "#fff5d9", "#fffaee"]}
        />
        <View style={styles.vinhoParent}>
          <Text style={[styles.vinho, styles.vinhoTypo]}>Vinho</Text>
          <Text style={[styles.destaque, styles.textClr]}>Destaque</Text>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <Text style={[styles.promoes, styles.promoesLayout]}>Promoções</Text>
          <Text style={[styles.vinhoTinto, styles.spatenLayout]}>
            Vinho tinto
          </Text>
          <Text style={[styles.adicionarASacola, styles.adicionarLayout]}>
            Adicionar a sacola
          </Text>
          <Text style={[styles.r, styles.rLayout]}>40,00R$</Text>
          <Text style={[styles.produtos, styles.spatenLayout]}>Produtos</Text>
          <View style={[styles.frameInner, styles.frameChildLayout]} />
          <View style={[styles.rectangleView, styles.frameChildLayout]} />
          <View style={[styles.frameChild1, styles.frameLayout]} />
          <Image
            style={[styles.socialMediaSextouHeinekenC, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/social-media-sextou-heineken-cerveja-psd-editvel.png")}
          />
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
          <Text style={[styles.r4000, styles.r4000Typo]}>R$ 40,00</Text>
          <Text style={[styles.r40001, styles.r4000Typo]}>R$ 40,00</Text>
          <Pressable
            style={[styles.wrapper, styles.frameChildLayout]}
            onPress={openRectangleImage}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/rectangle-10.png")}
            />
          </Pressable>
          <Text style={[styles.r40002, styles.r4000Typo]}>R$ 40,00</Text>
          <Image
            style={styles.futureBrandItaipavaPict}
            contentFit="cover"
            source={require("../assets/future-brand---itaipava--pict-estdio-1.png")}
          />
          <Image
            style={[styles.agoraTemosElaSpatenPeaJ, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/agora-temos-ela-spaten-pea-j-a-sua-cerveja-social-media-psd-editvel-zip.png")}
          />
          <Text style={[styles.heineken, styles.heinekenTypo]}>Heineken</Text>
          <Text style={[styles.spaten, styles.r1Typo]}>Spaten</Text>
          <Text style={[styles.itaipava, styles.heinekenTypo]}>Itaipava</Text>
          <Text style={[styles.adicionarASacola1, styles.adicionarLayout]}>
            Adicionar a sacola
          </Text>
          <Text style={[styles.adicionarASacola2, styles.rTypo]}>
            Adicionar a sacola
          </Text>
          <Text style={[styles.adicionarASacola3, styles.adicionarLayout]}>
            Adicionar a sacola
          </Text>
          <Text style={[styles.r1, styles.r1Typo]}>50,00R$</Text>
          <Text style={[styles.r2, styles.r1Typo]}>15,00R$</Text>
          <Text style={[styles.r3, styles.r1Typo]}>4,50R$</Text>
          <Image
            style={[styles.imageAboutTumblrInToGaby, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-about-tumblr-in-to-gaby-by-cami-on-we-heart-it1.png")}
          />
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-26.png")}
          />
          <Image
            style={[styles.frameChild3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-27.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/fanta-laranja.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/fanta-laranja.png")}
          />
          <Image
            style={[styles.fantaLaranjaIcon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/fanta-laranja.png")}
          />
        </View>
        <LinearGradient
          style={[styles.restaurantmoesItem, styles.restaurantmoesBg]}
          locations={[0.03, 0.26, 0.58, 1]}
          colors={["#ffe7ab", "#ffeebf", "#fff5d9", "#fffaee"]}
        />
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
        <Image
          style={styles.restaurantmoesInner}
          contentFit="cover"
          source={require("../assets/rectangle-1.png")}
        />
        <Text style={styles.barDoMoes}>Bar do MOE´S - Rua Walnut</Text>
        <Text style={[styles.entregaDe30, styles.entregaDe30Typo]}>
          entrega de 30 - 40min
        </Text>
        <Image
          style={[styles.ellipseIcon, styles.containerLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Pressable
          style={[styles.container, styles.containerLayout]}
          onPress={() => navigation.navigate("TelaPrincipal")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/ellipse-6.png")}
          />
        </Pressable>
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Image
          style={styles.arrowIcon}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Image
          style={styles.statusBarBattery}
          contentFit="cover"
          source={require("../assets/status-bar--battery.png")}
        />
        <Text style={[styles.text, styles.textClr]}>9:41</Text>
        <View style={[styles.battery, styles.borderPosition]}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={[styles.capacity, styles.borderPosition]} />
        </View>
        <Text style={[styles.aberto24hrs, styles.entregaDe30Typo]}>
          Aberto 24hrs
        </Text>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Pressable
            style={[styles.image9, styles.imageLayout]}
            onPress={() => navigation.navigate("TelaPrincipal")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/image-9.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image10, styles.promoesLayout]}
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
            style={[styles.image12, styles.imageLayout]}
            onPress={() => navigation.navigate("TelaDePesquisa")}
          >
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/image-12.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.ellipseParent, styles.groupItemLayout]}
            onPress={openGroupContainer}
          >
            <Image
              style={[styles.groupItem, styles.groupItemLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-8.png")}
            />
            <Image
              style={styles.image13Icon}
              contentFit="cover"
              source={require("../assets/image-13.png")}
            />
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={rectangleImageVisible}>
        <View style={styles.rectangleImageOverlay}>
          <Pressable
            style={styles.rectangleImageBg}
            onPress={closeRectangleImage}
          />
          <CervejaArtezanaladd onClose={closeRectangleImage} />
        </View>
      </Modal>

      <Modal animationType="fade" transparent visible={groupContainerVisible}>
        <View style={styles.groupContainerOverlay}>
          <Pressable
            style={styles.groupContainerBg}
            onPress={closeGroupContainer}
          />
          <Carrinho onClose={closeGroupContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  restaurantmoesBg: {
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "-90.96deg",
      },
    ],
    position: "absolute",
  },
  vinhoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  textClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  frameChildLayout: {
    height: 102,
    width: 115,
    position: "absolute",
  },
  frameLayout: {
    left: 276,
    height: 102,
    width: 115,
    backgroundColor: Color.colorKhaki_100,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  promoesLayout: {
    height: 28,
    position: "absolute",
  },
  spatenLayout: {
    width: 131,
    height: 28,
    fontSize: FontSize.size_xl,
  },
  adicionarLayout: {
    width: 194,
    fontSize: FontSize.size_5xl,
    height: 28,
  },
  rLayout: {
    height: 18,
    width: 65,
    fontSize: FontSize.size_base,
  },
  iconLayout: {
    height: 110,
    width: 123,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  r4000Typo: {
    top: 161,
    height: 18,
    width: 65,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  heinekenTypo: {
    left: 10,
    width: 131,
    height: 28,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  r1Typo: {
    left: 11,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  rTypo: {
    left: 6,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
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
  entregaDe30Typo: {
    top: 316,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  containerLayout: {
    height: 39,
    width: 38,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  imageLayout: {
    width: 39,
    position: "absolute",
  },
  imagePosition: {
    top: 30,
    height: 32,
  },
  groupItemLayout: {
    width: 69,
    height: 68,
    top: 0,
    position: "absolute",
  },
  restaurantmoesChild: {
    top: 892,
    left: -5,
    width: 564,
    height: 448,
  },
  vinho: {
    top: 33,
    left: 174,
    color: Color.colorGray_500,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  destaque: {
    left: 115,
    fontSize: FontSize.size_13xl,
    width: 161,
    height: 44,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    textAlign: "left",
    top: 0,
  },
  frameChild: {
    left: 137,
    backgroundColor: Color.colorKhaki_100,
    width: 115,
    borderRadius: Border.br_11xl,
    top: 56,
  },
  frameItem: {
    top: 411,
  },
  promoes: {
    top: 211,
    left: 7,
    width: 136,
    fontSize: FontSize.size_xl,
    height: 28,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  vinhoTinto: {
    top: 426,
    left: 5,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  adicionarASacola: {
    top: 468,
    left: 0,
    color: Color.colorBlack,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
  },
  r: {
    top: 446,
    left: 6,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  produtos: {
    top: 361,
    left: 8,
    color: Color.colorBlack,
    position: "absolute",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
  },
  frameInner: {
    top: 251,
    left: 0,
    backgroundColor: Color.colorKhaki_100,
    width: 115,
    borderRadius: Border.br_11xl,
  },
  rectangleView: {
    left: 139,
    top: 251,
    backgroundColor: Color.colorKhaki_100,
    width: 115,
    borderRadius: Border.br_11xl,
  },
  frameChild1: {
    top: 251,
  },
  socialMediaSextouHeinekenC: {
    top: 535,
    left: 272,
    height: 110,
  },
  frameChild2: {
    left: 269,
    backgroundColor: Color.colorKhaki_100,
    width: 115,
    borderRadius: Border.br_11xl,
    top: 56,
  },
  r4000: {
    left: 290,
  },
  r40001: {
    left: 162,
  },
  rectangleImageOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleImageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
    borderRadius: Border.br_11xl,
  },
  wrapper: {
    left: 0,
    top: 56,
  },
  r40002: {
    left: 25,
  },
  futureBrandItaipavaPict: {
    top: 660,
    height: 111,
    width: 123,
    left: 272,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  agoraTemosElaSpatenPeaJ: {
    top: 785,
    left: 272,
    height: 110,
  },
  heineken: {
    top: 557,
  },
  spaten: {
    top: 795,
    width: 131,
    height: 28,
    fontSize: FontSize.size_xl,
  },
  itaipava: {
    top: 668,
  },
  adicionarASacola1: {
    top: 599,
    left: 5,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  adicionarASacola2: {
    top: 836,
    width: 194,
    fontSize: FontSize.size_5xl,
    height: 28,
  },
  adicionarASacola3: {
    top: 710,
    left: 5,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  r1: {
    top: 586,
    height: 18,
    width: 65,
    fontSize: FontSize.size_base,
  },
  r2: {
    top: 820,
    height: 18,
    width: 65,
    fontSize: FontSize.size_base,
  },
  r3: {
    top: 692,
    height: 18,
    width: 65,
    fontSize: FontSize.size_base,
  },
  imageAboutTumblrInToGaby: {
    left: 132,
    top: 56,
  },
  rectangleIcon: {
    left: 265,
    top: 56,
  },
  frameChild3: {
    left: 272,
    height: 110,
    top: 411,
  },
  fantaLaranjaIcon: {
    left: -4,
    top: 251,
  },
  fantaLaranjaIcon1: {
    left: 135,
    top: 251,
  },
  fantaLaranjaIcon2: {
    left: 272,
    height: 110,
    top: 251,
  },
  vinhoParent: {
    top: 369,
    left: 19,
    width: 391,
    height: 492,
    position: "absolute",
  },
  restaurantmoesItem: {
    top: 360,
    left: -1,
    width: 360,
    height: 432,
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
  restaurantmoesInner: {
    top: 82,
    left: 26,
    borderRadius: Border.br_xl,
    width: 379,
    height: 188,
    position: "absolute",
  },
  barDoMoes: {
    top: 274,
    width: 328,
    height: 32,
    left: 50,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  entregaDe30: {
    width: 157,
    height: 31,
    left: 50,
    top: 316,
  },
  ellipseIcon: {
    top: 39,
    left: 24,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  container: {
    left: 17,
    top: 38,
  },
  arrowIcon: {
    top: 47,
    left: 21,
    width: 31,
    height: 30,
    position: "absolute",
  },
  statusBarBattery: {
    height: "2.65%",
    width: "7.71%",
    top: "1.72%",
    right: "-3.2%",
    bottom: "95.64%",
    left: "95.49%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
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
  aberto24hrs: {
    left: 278,
    width: 92,
    height: 19,
  },
  groupChild: {
    top: 15,
    backgroundColor: Color.colorGainsboro_100,
    height: 68,
    width: 464,
    left: 0,
    position: "absolute",
  },
  image9: {
    left: 36,
    top: 30,
    height: 32,
  },
  image10: {
    left: 350,
    top: 34,
    width: 37,
  },
  image11: {
    left: 262,
    width: 49,
    position: "absolute",
  },
  image12: {
    left: 101,
    top: 26,
    height: 36,
  },
  groupContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  groupContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  groupItem: {
    left: 0,
  },
  image13Icon: {
    top: 19,
    left: 16,
    width: 34,
    height: 35,
    position: "absolute",
  },
  ellipseParent: {
    left: 165,
  },
  rectangleParent: {
    top: 848,
    left: -10,
    height: 83,
    width: 464,
    position: "absolute",
  },
  restaurantmoes: {
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
    width: "100%",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_11xl,
  },
});

export default RestaurantMoes;
