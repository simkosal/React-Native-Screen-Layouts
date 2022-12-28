import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseColors from "../../utils/BaseColors";

const VerticalPage11 = () => {
  return (
    <View style={styles.viewParent}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

export default VerticalPage11;

const styles = StyleSheet.create({
  viewParent: {
    borderWidth: 3,
    borderColor: "red",
    height: 300,
    justifyContent: "space-between",
  },
  viewOneStyle: {
    backgroundColor: BaseColors.ColorsOne,
    height: 70,
    padding: 5,
  },
  viewTwoStyle: {
    backgroundColor: BaseColors.ColorsTwo,
    height: 70,
    padding: 5,
  },
  viewThreeStyle: {
    backgroundColor: BaseColors.ColorsThree,
    height: 70,
    padding: 5,
  },
});
