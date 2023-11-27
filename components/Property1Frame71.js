import React, { useMemo, memo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Frame71 = memo(
  ({ property1Frame71Position, property1Frame71Top, property1Frame71Left }) => {
    const property1Frame71Style = useMemo(() => {
      return {
        ...getStyleValue("position", property1Frame71Position),
        ...getStyleValue("top", property1Frame71Top),
        ...getStyleValue("left", property1Frame71Left),
      };
    }, [property1Frame71Position, property1Frame71Top, property1Frame71Left]);

    return (
      <View style={[styles.property1frame71, property1Frame71Style]}>
        <View
          style={[
            styles.barDeDrinksHettwerIpirangaParent,
            styles.groupChildPosition,
          ]}
        >
          <Image
            style={styles.barDeDrinksHettwerIpirangaIcon}
            contentFit="cover"
            source={require("../assets/bardedrinkshettweripiranga-2.png")}
          />
          <Image
            style={[styles.groupChild, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-46.png")}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  groupChildPosition: {
    left: 0,
    top: 0,
    position: "absolute",
    height: 218,
  },
  barDeDrinksHettwerIpirangaIcon: {
    left: 470,
    top: 0,
    position: "absolute",
    height: 218,
    width: 398,
    borderRadius: Border.br_3xs,
  },
  groupChild: {
    width: 398,
    borderRadius: Border.br_3xs,
    left: 0,
  },
  barDeDrinksHettwerIpirangaParent: {
    width: 868,
  },
  property1frame71: {
    backgroundColor: Color.colorWhite,
    overflow: "hidden",
    height: 218,
    width: 398,
    borderRadius: Border.br_3xs,
  },
});

export default Property1Frame71;
