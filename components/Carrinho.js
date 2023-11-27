import React, { memo } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Carrinho = memo(({ onClose }) => {
  return (
    <View style={[styles.carrinho, styles.carrinhoGroupLayout]}>
      <View style={[styles.carrinhoInner, styles.groupInnerPosition]}>
        <View style={[styles.carrinhoInner, styles.groupInnerPosition]}>
          <View style={[styles.carrinhoInner, styles.groupInnerPosition]}>
            <View style={[styles.carrinhoInner, styles.groupInnerPosition]}>
              <View style={[styles.groupParent, styles.carrinhoGroupLayout]}>
                <View style={[styles.carrinhoInner, styles.groupInnerPosition]}>
                  <LinearGradient
                    style={[styles.groupChild, styles.groupInnerPosition]}
                    locations={[0, 0.36, 0.7, 1]}
                    colors={[
                      "#fffacb",
                      "rgba(255, 252, 223, 0.64)",
                      "rgba(255, 251, 218, 0.3)",
                      "#ffe600",
                    ]}
                  />
                  <View style={styles.groupItem} />
                  <Text style={[styles.pedidos, styles.pedidosTypo]}>
                    Pedidos
                  </Text>
                </View>
                <View style={[styles.rectangleGroup, styles.groupLayout]}>
                  <View style={[styles.groupInner, styles.groupLayout]} />
                  <Text style={[styles.finalizarPedido, styles.pedidosTypo]}>
                    Finalizar Pedido
                  </Text>
                </View>
                <Text style={styles.seuCarrinhoEsta}>
                  Seu carrinho esta vazio
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  carrinhoGroupLayout: {
    height: 875,
    width: 332,
  },
  groupInnerPosition: {
    top: 0,
    left: 0,
  },
  pedidosTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupLayout: {
    height: 50,
    width: 232,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
    height: 875,
    width: 332,
  },
  groupItem: {
    top: 29,
    left: 28,
    backgroundColor: "#fffba6",
    width: 275,
    height: 52,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  pedidos: {
    top: 36,
    left: 109,
    width: 113,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inriaSansBold,
  },
  carrinhoInner: {
    left: 0,
    position: "absolute",
    height: 875,
    width: 332,
  },
  groupInner: {
    backgroundColor: "#ffe600",
    borderRadius: Border.br_xl,
    left: 0,
    top: 0,
  },
  finalizarPedido: {
    top: 8,
    left: 27,
    fontSize: FontSize.size_5xl,
    width: 178,
  },
  rectangleGroup: {
    top: 772,
    left: 50,
  },
  seuCarrinhoEsta: {
    top: 368,
    left: 65,
    fontStyle: "italic",
    fontFamily: FontFamily.inriaSansBoldItalic,
    color: "rgba(0, 0, 0, 0.6)",
    textAlign: "center",
    width: 202,
    height: 76,
    fontWeight: "700",
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  groupParent: {
    top: 10,
    left: 0,
    position: "absolute",
  },
  carrinho: {
    borderRadius: Border.br_11xl,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default Carrinho;
