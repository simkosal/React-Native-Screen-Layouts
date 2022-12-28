import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseColors from "../../utils/BaseColors";

const HorizontalPage1 = () => {
  return (
    <View style={styles.viewParent}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

export default HorizontalPage1;

const styles = StyleSheet.create({
  viewParent: {
    flexDirection: "row",
    height: 70,
  },
  viewOneStyle: {
    flex: 1,
    backgroundColor: BaseColors.ColorsOne,
  },
  viewTwoStyle: {
    flex: 1,
    backgroundColor: BaseColors.ColorsTwo,
  },
  viewThreeStyle: {
    flex: 1,
    backgroundColor: BaseColors.ColorsThree,
  },
});
