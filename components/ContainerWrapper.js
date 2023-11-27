import React, { useState, useCallback, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Modal } from "react-native";
import DrPepperadd from "./DrPepperadd";
import JuiceBurstadd from "./JuiceBurstadd";
import { Border } from "../GlobalStyles";

const ContainerWrapper = memo(() => {
  const [imageAboutTumblrInToGabyVisible, setImageAboutTumblrInToGabyVisible] =
    useState(false);
  const [rectangleImage4Visible, setRectangleImage4Visible] = useState(false);

  const openImageAboutTumblrInToGaby = useCallback(() => {
    setImageAboutTumblrInToGabyVisible(true);
  }, []);

  const closeImageAboutTumblrInToGaby = useCallback(() => {
    setImageAboutTumblrInToGabyVisible(false);
  }, []);

  const openRectangleImage4 = useCallback(() => {
    setRectangleImage4Visible(true);
  }, []);

  const closeRectangleImage4 = useCallback(() => {
    setRectangleImage4Visible(false);
  }, []);

  return (
    <>
      <View style={styles.rectangleParent}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-32.png")}
        />
        <Image
          style={[styles.futureBrandItaipavaPict, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/future-brand---itaipava--pict-estdio-11.png")}
        />
        <Image
          style={[styles.fantaLaranjaIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/fanta-laranja1.png")}
        />
        <Pressable
          style={[styles.imageAboutTumblrInToGaby, styles.frameInnerPosition]}
          onPress={openImageAboutTumblrInToGaby}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image-about-tumblr-in-to-gaby-by-cami-on-we-heart-it2.png")}
          />
        </Pressable>
        <Image
          style={[styles.cocaColaIcon, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/coca-cola1.png")}
        />
        <Image
          style={styles.barreirinhasRestauranteMar}
          contentFit="cover"
          source={require("../assets/barreirinhas--restaurante-marina-tropical--nerds-viajantes-21.png")}
        />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-30.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameInnerPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-311.png")}
        />
        <Image
          style={[styles.petraCervejaPuroMalte, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/petra---cerveja-puro-malte1.png")}
        />
        <Image
          style={[styles.rectangleIcon, styles.wrapperPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-272.png")}
        />
        <Pressable
          style={[styles.wrapper, styles.wrapperPosition]}
          onPress={openRectangleImage4}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/rectangle-28.png")}
          />
        </Pressable>
        <Image
          style={[styles.frameChild1, styles.wrapperPosition]}
          contentFit="cover"
          source={require("../assets/rectangle-29.png")}
        />
        <Image
          style={styles.carnavalPit}
          contentFit="cover"
          source={require("../assets/carnaval-pit1.png")}
        />
      </View>

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

      <Modal animationType="fade" transparent visible={rectangleImage4Visible}>
        <View style={styles.rectangleImage4Overlay}>
          <Pressable
            style={styles.rectangleImage4Bg}
            onPress={closeRectangleImage4}
          />
          <JuiceBurstadd onClose={closeRectangleImage4} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 94,
    width: 94,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameInnerPosition: {
    top: 228,
    height: 94,
    width: 94,
    position: "absolute",
  },
  frameItemLayout: {
    height: 95,
    top: 345,
    width: 94,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  wrapperPosition: {
    top: 0,
    height: 94,
    width: 94,
    position: "absolute",
  },
  frameChild: {
    left: 259,
    top: 110,
    height: 94,
  },
  futureBrandItaipavaPict: {
    left: 0,
    top: 110,
    height: 94,
  },
  fantaLaranjaIcon: {
    top: 111,
    left: 131,
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
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: Border.br_xl,
  },
  imageAboutTumblrInToGaby: {
    left: 259,
  },
  cocaColaIcon: {
    left: 0,
  },
  barreirinhasRestauranteMar: {
    top: 224,
    width: 96,
    height: 98,
    left: 0,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameItem: {
    left: 259,
  },
  frameInner: {
    left: 131,
    borderRadius: Border.br_xl,
  },
  petraCervejaPuroMalte: {
    left: 131,
  },
  rectangleIcon: {
    left: -4,
    borderRadius: Border.br_xl,
  },
  rectangleImage4Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  rectangleImage4Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  wrapper: {
    left: 128,
  },
  frameChild1: {
    borderRadius: Border.br_xl,
    left: 259,
  },
  carnavalPit: {
    top: 461,
    left: 1,
    height: 88,
    width: 94,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleParent: {
    top: 357,
    left: 45,
    width: 349,
    height: 432,
    position: "absolute",
  },
});

export default ContainerWrapper;
