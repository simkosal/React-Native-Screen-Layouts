import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseColors from "../../utils/BaseColors";

const VerticalPage6 = () => {
  return (
    <View>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

export default VerticalPage6;

const styles = StyleSheet.create({
  viewOneStyle: {
    backgroundColor: BaseColors.ColorsOne,
    height: 70,
  },
  viewTwoStyle: {
    backgroundColor: BaseColors.ColorsTwo,
    height: 70,
    alignSelf: "center",
    width: "50%",
  },
  viewThreeStyle: {
    backgroundColor: BaseColors.ColorsThree,
    height: 70,
  },
});
