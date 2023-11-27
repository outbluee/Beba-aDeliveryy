import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Carrinho from "../components/Carrinho";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const RestauranteBiladen = () => {
  const navigation = useNavigation();
  const [groupContainerVisible, setGroupContainerVisible] = useState(false);

  const openGroupContainer = useCallback(() => {
    setGroupContainerVisible(true);
  }, []);

  const closeGroupContainer = useCallback(() => {
    setGroupContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.restaurantebiladen}>
        <LinearGradient
          style={[styles.restaurantebiladenChild, styles.restaurantebiladenBg]}
          locations={[0.03, 0.26, 0.58, 1]}
          colors={["#ffe7ab", "#ffeebf", "#fff5d9", "#fffaee"]}
        />
        <View style={styles.vinhoParent}>
          <Text style={styles.vinho}>Vinho</Text>
          <Text style={[styles.destaque, styles.textClr]}>Destaque</Text>
          <View style={[styles.frameChild, styles.frameChildLayout]} />
          <View style={[styles.frameItem, styles.frameLayout]} />
          <Text style={[styles.promoes, styles.promoesLayout]}>Promoções</Text>
          <Text style={styles.petra1l}>Petra 1L</Text>
          <Text style={styles.r}>4,50R$</Text>
          <Text style={[styles.produtos, styles.produtosPosition]}>
            Produtos
          </Text>
          <View style={[styles.frameInner, styles.frameChildLayout]} />
          <Image
            style={[styles.cocaColaIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/coca-cola.png")}
          />
          <View style={[styles.rectangleView, styles.frameChildLayout]} />
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-271.png")}
          />
          <View style={[styles.frameChild1, styles.frameLayout]} />
          <View style={[styles.frameChild2, styles.frameChildLayout]} />
          <Text style={[styles.r4000, styles.r4000Typo]}>R$ 40,00</Text>
          <Text style={[styles.r40001, styles.r4000Typo]}>R$ 40,00</Text>
          <Text style={[styles.r100000000, styles.r4000Typo]}>
            R$ 1.000.000,00
          </Text>
          <Image
            style={[styles.barreirinhasRestauranteMar, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/barreirinhas--restaurante-marina-tropical--nerds-viajantes-2.png")}
          />
          <Text style={[styles.cocaCola, styles.cocaColaTypo]}>Coca-Cola</Text>
          <Text style={[styles.guaranJesus, styles.produtosPosition]}>
            Guaraná Jesus
          </Text>
          <Text style={[styles.sucoMaVerde, styles.cocaColaTypo]}>
            Suco Maçã Verde
          </Text>
          <Text style={[styles.adicionarASacola, styles.adicionarTypo]}>
            Adicionar a sacola
          </Text>
          <Text style={[styles.adicionarASacola1, styles.adicionarTypo]}>
            Adicionar a sacola
          </Text>
          <Text style={[styles.adicionarASacola2, styles.adicionarTypo]}>
            Adicionar a sacola
          </Text>
          <Text style={[styles.adicionarASacola3, styles.adicionarTypo]}>
            Adicionar a sacola
          </Text>
          <Text style={[styles.r1, styles.r1Typo]}>4,50R$</Text>
          <Text style={[styles.r2, styles.r1Typo]}>1.000.000,00R$</Text>
          <Text style={[styles.r3, styles.r1Typo]}>15,00R$</Text>
          <Image
            style={[styles.imageAboutTumblrInToGaby, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-about-tumblr-in-to-gaby-by-cami-on-we-heart-it1.png")}
          />
          <Image
            style={[styles.frameChild3, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/rectangle-26.png")}
          />
          <Image
            style={[styles.carnavalPit, styles.carnavalPitLayout]}
            contentFit="cover"
            source={require("../assets/carnaval-pit.png")}
          />
          <Image
            style={[styles.petraCervejaPuroMalte, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/petra---cerveja-puro-malte.png")}
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
          <View style={styles.frameView} />
        </View>
        <LinearGradient
          style={[styles.restaurantebiladenItem, styles.restaurantebiladenBg]}
          locations={[0.03, 0.26, 0.58, 1]}
          colors={["#ffe7ab", "#ffeebf", "#fff5d9", "#fffaee"]}
        />
        <Image
          style={styles.signalLayout}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Text style={styles.barDoBiladen}>
          Bar do Biladen - Rua Três Marias
        </Text>
        <Text style={[styles.entregaDe4, styles.entregaDe4Typo]}>
          entrega de 4 - 10min
        </Text>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("TelaPrincipal")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/ellipse-81.png")}
          />
        </Pressable>
        <Image
          style={styles.restaurantebiladenInner}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
        />
        <Image
          style={styles.restaurantebiladenInner}
          contentFit="cover"
          source={require("../assets/arrow-1.png")}
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
        <Text style={[styles.aberto24hrs, styles.entregaDe4Typo]}>
          Aberto 24hrs
        </Text>
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Pressable
            style={[styles.image9, styles.imageLayout]}
            onPress={() => navigation.navigate("TelaPrincipal")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-9.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image10, styles.promoesLayout]}
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
            style={[styles.image12, styles.imageLayout]}
            onPress={() => navigation.navigate("TelaDePesquisa")}
          >
            <Image
              style={styles.icon}
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
        <Image
          style={[
            styles.barDeDrinksHettwerIpirangaIcon,
            styles.carnavalPitLayout,
          ]}
          contentFit="cover"
          source={require("../assets/bardedrinkshettweripiranga-1.png")}
        />
        <View style={styles.statusBarService}>
          <View style={[styles.signal, styles.signalLayout]}>
            <View style={[styles.bar, styles.barLayout]} />
            <View style={[styles.bar1, styles.barPosition]} />
            <View style={[styles.bar2, styles.barLayout]} />
            <View style={[styles.bar3, styles.barPosition]} />
          </View>
        </View>
      </View>

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
  restaurantebiladenBg: {
    backgroundColor: "transparent",
    transform: [
      {
        rotate: "-90.96deg",
      },
    ],
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    position: "absolute",
  },
  frameChildLayout: {
    height: 102,
    width: 115,
    backgroundColor: Color.colorKhaki_100,
    position: "absolute",
    borderRadius: Border.br_11xl,
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
  produtosPosition: {
    left: 8,
    width: 131,
    height: 28,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 110,
    width: 123,
  },
  r4000Typo: {
    top: 161,
    height: 18,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  cocaColaTypo: {
    left: 10,
    height: 28,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  adicionarTypo: {
    width: 194,
    fontSize: FontSize.size_5xl,
    left: 5,
    height: 28,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  r1Typo: {
    left: 11,
    height: 18,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  carnavalPitLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  entregaDe4Typo: {
    top: 316,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
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
  signalLayout: {
    height: 13,
    width: 18,
  },
  barLayout: {
    borderRadius: 1,
    bottom: "-110.16%",
    width: "17.22%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  barPosition: {
    bottom: "-109.37%",
    borderRadius: 1,
    width: "17.22%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  restaurantebiladenChild: {
    top: 881,
    left: 2,
    width: 880,
    height: 446,
  },
  vinho: {
    top: 33,
    left: 174,
    color: Color.colorGray_500,
    textAlign: "left",
    fontSize: FontSize.size_base,
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
    top: 0,
    color: Color.colorBlack,
    textAlign: "left",
  },
  frameChild: {
    left: 137,
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
  petra1l: {
    top: 426,
    width: 131,
    left: 5,
    height: 28,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  r: {
    top: 446,
    left: 6,
    height: 18,
    width: 65,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  produtos: {
    top: 361,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  frameInner: {
    left: 0,
    top: 251,
  },
  cocaColaIcon: {
    top: 535,
    left: 272,
    width: 123,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  rectangleView: {
    left: 139,
    top: 251,
  },
  rectangleIcon: {
    top: 659,
    left: 272,
    width: 123,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  frameChild1: {
    top: 251,
  },
  frameChild2: {
    left: 269,
    top: 56,
  },
  r4000: {
    left: 290,
    width: 65,
  },
  r40001: {
    left: 162,
    width: 65,
  },
  r100000000: {
    left: 3,
    width: 137,
  },
  barreirinhasRestauranteMar: {
    top: 786,
    left: 272,
    width: 123,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  cocaCola: {
    top: 557,
    width: 131,
  },
  guaranJesus: {
    top: 795,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    left: 8,
  },
  sucoMaVerde: {
    top: 668,
    width: 178,
  },
  adicionarASacola: {
    top: 599,
  },
  adicionarASacola1: {
    top: 464,
  },
  adicionarASacola2: {
    top: 836,
  },
  adicionarASacola3: {
    top: 710,
  },
  r1: {
    top: 577,
    width: 65,
  },
  r2: {
    top: 815,
    width: 130,
  },
  r3: {
    top: 688,
    width: 65,
  },
  imageAboutTumblrInToGaby: {
    left: 132,
    top: 56,
    position: "absolute",
    borderRadius: Border.br_11xl,
    width: 123,
  },
  frameChild3: {
    left: 265,
    top: 56,
    position: "absolute",
    borderRadius: Border.br_11xl,
    width: 123,
  },
  carnavalPit: {
    left: 1,
    height: 110,
    width: 123,
    top: 56,
  },
  petraCervejaPuroMalte: {
    left: 272,
    width: 123,
    position: "absolute",
    borderRadius: Border.br_11xl,
    top: 411,
  },
  fantaLaranjaIcon: {
    left: -4,
    top: 251,
    position: "absolute",
    borderRadius: Border.br_11xl,
    width: 123,
  },
  fantaLaranjaIcon1: {
    left: 272,
    width: 123,
    position: "absolute",
    borderRadius: Border.br_11xl,
    top: 251,
  },
  fantaLaranjaIcon2: {
    top: 251,
    left: 137,
    position: "absolute",
    borderRadius: Border.br_11xl,
    width: 123,
  },
  frameView: {
    top: 4,
    left: -33,
    width: 100,
    height: 100,
    overflow: "hidden",
    position: "absolute",
  },
  vinhoParent: {
    top: 369,
    left: 19,
    width: 391,
    height: 492,
    position: "absolute",
  },
  restaurantebiladenItem: {
    top: 360,
    left: -1,
    width: 360,
    height: 432,
  },
  barDoBiladen: {
    top: 277,
    left: 24,
    width: 381,
    height: 32,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  entregaDe4: {
    left: 50,
    width: 157,
    height: 31,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 17,
    top: 38,
    width: 38,
    height: 39,
    position: "absolute",
  },
  restaurantebiladenInner: {
    top: 47,
    left: 21,
    width: 31,
    height: 30,
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
    top: "1.4%",
    bottom: "97.19%",
    width: 27,
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
  barDeDrinksHettwerIpirangaIcon: {
    top: 82,
    left: 27,
    width: 378,
    height: 188,
  },
  bar: {
    height: "35.94%",
    top: "174.22%",
    right: "-1706.11%",
    left: "1788.89%",
  },
  bar1: {
    height: "54.69%",
    top: "154.69%",
    right: "-1733.89%",
    left: "1816.67%",
  },
  bar2: {
    height: "78.91%",
    top: "131.25%",
    right: "-1761.11%",
    left: "1843.89%",
  },
  bar3: {
    top: "109.38%",
    right: "-1788.89%",
    left: "1871.67%",
    height: "100%",
  },
  signal: {
    backgroundColor: Color.colorBlack,
  },
  statusBarService: {
    height: "1.38%",
    width: "4.21%",
    top: "1.51%",
    right: "20.56%",
    bottom: "97.11%",
    left: "75.23%",
    position: "absolute",
  },
  restaurantebiladen: {
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

export default RestauranteBiladen;
