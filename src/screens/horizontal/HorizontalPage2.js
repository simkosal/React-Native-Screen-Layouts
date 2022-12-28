import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseColors from "../../utils/BaseColors";

const HorizontalPage2 = () => {
  return (
    <View style={styles.viewParent}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

export default HorizontalPage2;

const styles = StyleSheet.create({
  viewParent: {
    height: 70,
    width: "50%",
    flexDirection: "row",
  },
  viewOneStyle: {
    backgroundColor: BaseColors.ColorsOne,
    flex: 1,
  },
  viewTwoStyle: {
    backgroundColor: BaseColors.ColorsTwo,
    flex: 1,
  },
  viewThreeStyle: {
    backgroundColor: BaseColors.ColorsThree,
    flex: 1,
  },
});
