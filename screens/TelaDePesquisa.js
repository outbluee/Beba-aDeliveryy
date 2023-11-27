import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const TelaDePesquisa = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.teladepesquisa}>
      <Image
        style={styles.teladepesquisaChild}
        contentFit="cover"
        source={require("../assets/ellipse-51.png")}
      />
      <Image
        style={[styles.teladepesquisaItem, styles.teladepesquisaLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-12.png")}
      />
      <Image
        style={[styles.image5Icon, styles.imageLayout]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <Text style={[styles.categorias, styles.verTudo1FlexBox]}>
        Categorias
      </Text>
      <Text style={[styles.aBoaDe, styles.aBoaDeTypo]}>A boa de hoje</Text>
      <Pressable
        style={styles.verTudo}
        onPress={() => navigation.navigate("VerTudo")}
      >
        <Text style={[styles.verTudo1, styles.textTypo]}>Ver Tudo</Text>
      </Pressable>
      <Pressable
        style={[styles.wrapper, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Sucos")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/rectangle-7.png")}
        />
      </Pressable>
      <View style={styles.teladepesquisaInner} />
      <Pressable
        style={[styles.container, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Cervejas")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/rectangle-9.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.container, styles.wrapperLayout1]}
        onPress={() => navigation.navigate("Refrigerantes")}
      >
        <Image
          style={styles.icon2}
          contentFit="cover"
          source={require("../assets/rectangle-102.png")}
        />
      </Pressable>
      <Text style={[styles.soPauloSp, styles.soPauloSpTypo]}>
        São Paulo, SP
      </Text>
      <View style={[styles.localizao, styles.localizaoLayout]} />
      <View style={styles.setaPraBaixo} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={[styles.image11Icon, styles.image11IconPosition]}
        contentFit="cover"
        source={require("../assets/image-111.png")}
      />
      <View style={[styles.teladepesquisaChild1, styles.rectangleViewLayout]} />
      <View style={[styles.iconeHamburguer, styles.image11IconPosition]} />
      <View style={styles.removebgPreview1} />
      <View style={styles.teladepesquisaChild2} />
      <Image
        style={[styles.image10Icon, styles.image2Position]}
        contentFit="cover"
        source={require("../assets/image-12.png")}
      />
      <Text style={[styles.escolhaSuaBebida, styles.telaPesquisaFlexBox]}>
        Escolha sua bebida favorita
      </Text>
      <View style={[styles.image2, styles.image2Position]} />
      <View
        style={[styles.teladepesquisaChild3, styles.teladepesquisaLayout]}
      />
      <View style={styles.oAppSerDsenvolvido1} />
      <Text
        style={[styles.entregasMaisRpidas, styles.soPauloSpTypo]}
      >{`Entregas  mais rápidas 
do que um gole...`}</Text>
      <Text style={[styles.telaPesquisa, styles.telaPesquisaFlexBox]}>
        Tela pesquisa
      </Text>
      <Image
        style={styles.image12Icon}
        contentFit="cover"
        source={require("../assets/image-121.png")}
      />
      <View style={[styles.statusBarService, styles.batteryPosition]}>
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
      <Text style={[styles.text, styles.textTypo]}>9:41</Text>
      <View style={[styles.battery, styles.batteryPosition]}>
        <View style={styles.border} />
        <Image
          style={styles.capIcon}
          contentFit="cover"
          source={require("../assets/cap1.png")}
        />
        <View style={styles.capacity} />
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
          style={[styles.image14, styles.imageLayout]}
          onPress={() => navigation.navigate("Historico")}
        >
          <Image
            style={styles.icon3}
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
          style={styles.image15}
          onPress={() => navigation.navigate("TelaDePesquisa")}
        >
          <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../assets/image-12.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.image16, styles.imageLayout]}
          onPress={() => navigation.navigate("TelaPrincipal")}
        >
          <Image
            style={styles.icon3}
            contentFit="cover"
            source={require("../assets/image-9.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teladepesquisaLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  imageLayout: {
    height: 32,
    position: "absolute",
  },
  verTudo1FlexBox: {
    width: 102,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  aBoaDeTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    textAlign: "center",
  },
  wrapperLayout1: {
    height: 96,
    width: 96,
    left: "50%",
    position: "absolute",
  },
  soPauloSpTypo: {
    fontSize: FontSize.size_xl,
    alignItems: "flex-end",
    display: "flex",
    position: "absolute",
  },
  localizaoLayout: {
    width: 35,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 48,
    top: 89,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  image11IconPosition: {
    height: 41,
    top: 93,
    position: "absolute",
  },
  image2Position: {
    top: 188,
    position: "absolute",
  },
  telaPesquisaFlexBox: {
    fontSize: FontSize.size_base,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "center",
    position: "absolute",
  },
  batteryPosition: {
    top: "1.51%",
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
  groupChildPosition: {
    top: 18,
    position: "absolute",
  },
  wrapperLayout: {
    height: 40,
    width: 54,
    position: "absolute",
  },
  teladepesquisaChild: {
    width: 428,
    height: 840,
    left: 0,
    top: 0,
    position: "absolute",
  },
  teladepesquisaItem: {
    marginLeft: -191,
    top: 626,
    width: 354,
    height: 202,
    left: "50%",
  },
  image5Icon: {
    top: 916,
    left: 705,
    width: 39,
  },
  categorias: {
    top: 439,
    left: 26,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    width: 102,
    color: Color.colorBlack,
    position: "absolute",
  },
  aBoaDe: {
    top: 598,
    left: 20,
    width: 142,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  verTudo1: {
    color: Color.colorRed_100,
    width: 102,
    justifyContent: "center",
    alignItems: "flex-end",
    display: "flex",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  verTudo: {
    left: 299,
    top: 446,
    position: "absolute",
  },
  icon: {
    marginTop: 17,
    marginLeft: -178,
    height: "100%",
    borderRadius: Border.br_base,
    width: "100%",
  },
  wrapper: {
    top: "50%",
  },
  teladepesquisaInner: {
    top: 501,
    left: 59,
    width: 62,
    height: 76,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  icon1: {
    marginLeft: -61,
    height: "100%",
    borderRadius: Border.br_base,
    width: "100%",
  },
  container: {
    top: 481,
  },
  icon2: {
    marginLeft: 60,
    height: "100%",
    borderRadius: Border.br_base,
    width: "100%",
  },
  soPauloSp: {
    top: 101,
    left: 129,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorGray_400,
    width: 150,
    height: 24,
    justifyContent: "center",
    fontSize: FontSize.size_xl,
    textAlign: "center",
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
  rectangleView: {
    left: 38,
    width: 49,
    backgroundColor: Color.colorGainsboro_100,
  },
  image11Icon: {
    width: 58,
    left: 33,
  },
  teladepesquisaChild1: {
    left: 318,
    backgroundColor: Color.colorMidnightblue,
    width: 53,
  },
  iconeHamburguer: {
    left: 45,
    width: 41,
  },
  removebgPreview1: {
    left: 329,
    width: 54,
    height: 48,
    top: 89,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  teladepesquisaChild2: {
    top: 167,
    left: 48,
    borderRadius: 100,
    width: 311,
    height: 77,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  image10Icon: {
    left: 55,
    height: 36,
    width: 39,
  },
  escolhaSuaBebida: {
    top: 197,
    left: 81,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    color: "rgba(0, 0, 0, 0.32)",
    width: 277,
  },
  image2: {
    left: 61,
    width: 27,
    height: 27,
  },
  teladepesquisaChild3: {
    top: 283,
    left: 44,
    backgroundColor: "#f9b403",
    width: 320,
    height: 148,
  },
  oAppSerDsenvolvido1: {
    top: 814,
    width: 127,
    height: 67,
    left: 0,
    position: "absolute",
  },
  entregasMaisRpidas: {
    top: 317,
    left: 64,
    color: "#090808",
    width: 256,
    height: 43,
    textAlign: "left",
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
  },
  telaPesquisa: {
    top: 16,
    width: 338,
    height: 55,
    left: 33,
    color: Color.colorBlack,
    fontFamily: FontFamily.interExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_base,
  },
  image12Icon: {
    top: 338,
    left: 226,
    width: 149,
    height: 103,
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
  },
  text: {
    marginTop: -462,
    width: "8.64%",
    left: "8.88%",
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.interRegular,
    height: 21,
    top: "50%",
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
    left: "50%",
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
    left: "50%",
    position: "absolute",
  },
  capacity: {
    height: "69.72%",
    marginLeft: -10.9,
    top: "15.6%",
    bottom: "14.68%",
    borderRadius: Border.br_10xs_5,
    width: 20,
    backgroundColor: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  battery: {
    height: "1.18%",
    marginLeft: 142,
    bottom: "97.31%",
    width: 26,
    left: "50%",
  },
  groupChild: {
    height: 166,
    width: 458,
    backgroundColor: Color.colorGainsboro_100,
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
  icon3: {
    height: "100%",
    width: "100%",
  },
  image14: {
    left: 283,
    top: 32,
    width: 49,
  },
  image4Icon: {
    top: 6,
    left: 10,
    height: 28,
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
    top: 32,
    height: 36,
    width: 39,
    position: "absolute",
  },
  image16: {
    left: 49,
    top: 32,
    width: 39,
  },
  rectangleParent: {
    top: 834,
    left: -10,
    height: 184,
    width: 458,
    position: "absolute",
  },
  teladepesquisa: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default TelaDePesquisa;
