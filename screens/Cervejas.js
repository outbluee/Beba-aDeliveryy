import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import SectionCard from "../components/SectionCard";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Cervejas = () => {
  return (
    <View style={styles.cervejas}>
      <Text style={[styles.itaipavaR450, styles.spatenR1500Typo]}>{`Itaipava
R$ 4,50`}</Text>
      <Text style={[styles.spatenR1500, styles.spatenR1500Typo]}>{`Spaten
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
      <Text style={[styles.cerveja, styles.cervejaTypo]}>Cerveja</Text>
      <Text style={[styles.promoes, styles.promoesPosition]}>Promoções</Text>
      <Text style={[styles.heinekenR4000, styles.heinekenR4000Typo]}>{`Heineken 
R$40,00`}</Text>
      <Text style={[styles.pitR100000000, styles.heinekenR4000Typo]}>{`Pitú
R$ 1.000.000,00`}</Text>
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
      <Text style={[styles.petraR450, styles.petraR450Typo]}>{`Petra
R$ 4,50`}</Text>
      <Text
        style={[styles.heinekenGarrafaR5000, styles.petraR450Typo]}
      >{`Heineken garrafa
R$50,00`}</Text>
      <SectionCard />
      <Image
        style={[styles.cervejasChild, styles.promoesPosition]}
        contentFit="cover"
        source={require("../assets/group-7.png")}
      />
      <Image
        style={[styles.cervejaHeinekenLata250Ml1Icon, styles.carnavalPitLayout]}
        contentFit="cover"
        source={require("../assets/cervejaheinekenlata250ml148f1c1f7210e562b20156769042667796400.png")}
      />
      <Image
        style={[
          styles.agoraTemosElaSpatenPeaJ,
          styles.agoraTemosElaSpatenPeaJLayout,
        ]}
        contentFit="cover"
        source={require("../assets/agora-temos-ela-spaten-pea-j-a-sua-cerveja-social-media-psd-editvel-zip1.png")}
      />
      <Image
        style={[
          styles.petraCervejaPuroMalte,
          styles.petraCervejaPuroMalteLayout,
        ]}
        contentFit="cover"
        source={require("../assets/petra---cerveja-puro-malte2.png")}
      />
      <Image
        style={[
          styles.socialMediaSextouHeinekenC,
          styles.petraCervejaPuroMalteLayout,
        ]}
        contentFit="cover"
        source={require("../assets/social-media-sextou-heineken-cerveja-psd-editvel1.png")}
      />
      <Image
        style={[
          styles.futureBrandItaipavaPict,
          styles.agoraTemosElaSpatenPeaJLayout,
        ]}
        contentFit="cover"
        source={require("../assets/future-brand---itaipava--pict-estdio-13.png")}
      />
      <Image
        style={[styles.carnavalPit, styles.carnavalPitLayout]}
        contentFit="cover"
        source={require("../assets/carnaval-pit2.png")}
      />
      <Image
        style={[styles.carnavalPit, styles.carnavalPitLayout]}
        contentFit="cover"
        source={require("../assets/carnaval-pit2.png")}
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
  );
};

const styles = StyleSheet.create({
  spatenR1500Typo: {
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
  cervejaTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  promoesPosition: {
    left: 31,
    position: "absolute",
  },
  heinekenR4000Typo: {
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
  petraR450Typo: {
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
  carnavalPitLayout: {
    height: 116,
    width: 155,
    borderRadius: Border.br_3xs,
    top: 276,
    position: "absolute",
  },
  agoraTemosElaSpatenPeaJLayout: {
    top: 435,
    height: 116,
    width: 155,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  petraCervejaPuroMalteLayout: {
    top: 617,
    height: 116,
    width: 155,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  fantaIconLayout1: {
    height: 72,
    width: 87,
    top: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  fantaIconLayout: {
    width: 79,
    top: 0,
    height: 64,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  itaipavaR450: {
    left: 43,
  },
  spatenR1500: {
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
  cerveja: {
    top: 223,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    width: 156,
    height: 27,
    left: 26,
    fontSize: FontSize.size_5xl,
    color: Color.colorBlack,
    position: "absolute",
  },
  promoes: {
    top: 91,
    fontWeight: "900",
    fontFamily: FontFamily.interBlack,
    color: Color.colorRed_100,
    display: "flex",
    alignItems: "center",
    width: 152,
    height: 51,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  heinekenR4000: {
    left: 47,
  },
  pitR100000000: {
    left: 220,
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
  petraR450: {
    left: 40,
  },
  heinekenGarrafaR5000: {
    left: 223,
  },
  cervejasChild: {
    top: 56,
    width: 40,
    height: 37,
  },
  cervejaHeinekenLata250Ml1Icon: {
    left: 24,
  },
  agoraTemosElaSpatenPeaJ: {
    left: 214,
  },
  petraCervejaPuroMalte: {
    left: 24,
  },
  socialMediaSextouHeinekenC: {
    left: 216,
  },
  futureBrandItaipavaPict: {
    left: 27,
  },
  carnavalPit: {
    left: 220,
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
    left: 408,
  },
  fantaLaranjaIcon5: {
    left: 510,
  },
  fantaLaranjaParent: {
    top: 142,
    width: 393,
    height: 64,
    left: 26,
    position: "absolute",
  },
  cervejas: {
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

export default Cervejas;
