import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseColors from "../../utils/BaseColors";

const HorizontalPage10 = () => {
  return (
    <View style={styles.viewParent}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

export default HorizontalPage10;

const styles = StyleSheet.create({
  viewParent: {
    height: "50%",
    borderColor: "red",
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  viewOneStyle: {
    flex: 1,
    height: 70,
    backgroundColor: BaseColors.ColorsOne,
  },
  viewTwoStyle: {
    backgroundColor: BaseColors.ColorsTwo,
    height: 70,
    flex: 1,
  },
  viewThreeStyle: {
    flex: 1,
    backgroundColor: BaseColors.ColorsThree,
    height: 70,
  },
});
