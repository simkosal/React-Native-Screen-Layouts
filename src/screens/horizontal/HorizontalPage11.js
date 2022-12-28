import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseColors from "../../utils/BaseColors";

const HorizontalPage11 = () => {
  return (
    <View style={styles.viewParent}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

export default HorizontalPage11;

const styles = StyleSheet.create({
  viewParent: {
    height: "50%",
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    width: "30%",
    height: 70,
    backgroundColor: BaseColors.ColorsOne,
  },
  viewTwoStyle: {
    width: "30%",
    backgroundColor: BaseColors.ColorsTwo,
    height: 70,
  },
  viewThreeStyle: {
    width: "30%",
    backgroundColor: BaseColors.ColorsThree,
    height: 70,
  },
});
