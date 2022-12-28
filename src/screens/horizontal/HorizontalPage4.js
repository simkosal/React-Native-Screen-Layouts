import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BaseColors from "../../utils/BaseColors";

const HorizontalPage4 = () => {
  return (
    <View style={styles.viewParent}>
      <View style={styles.viewSubParent}>
        <View style={styles.viewOneStyle}></View>
        <View style={styles.viewTwoStyle}></View>
        <View style={styles.viewThreeStyle}></View>
      </View>
    </View>
  );
};

export default HorizontalPage4;

const styles = StyleSheet.create({
  viewParent: {
    height: 70,
    alignItems: "flex-end",
  },
  viewSubParent: {
    width: "50%",
    height: 70,
    backgroundColor: "green",
    flexDirection: "row",
  },
  viewOneStyle: {
    flex: 1,
    width: "17%",
    height: 70,
    backgroundColor: BaseColors.ColorsOne,
  },
  viewTwoStyle: {
    flex: 1,
    width: "17%",
    height: 70,
    backgroundColor: BaseColors.ColorsTwo,
  },
  viewThreeStyle: {
    width: "17%",
    flex: 1,
    height: 70,
    backgroundColor: BaseColors.ColorsThree,
  },
});
