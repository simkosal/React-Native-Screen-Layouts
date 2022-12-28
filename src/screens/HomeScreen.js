import { StyleSheet, Button, View, ScrollView } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Button
          onPress={() => navigation.navigate("VerticalPage1")}
          title="VerticalPage1"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage2")}
          title="VerticalPage2"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage3")}
          title="VerticalPage3"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage4")}
          title="VerticalPage4"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage5")}
          title="VerticalPage5"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage6")}
          title="VerticalPage6"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage7")}
          title="VerticalPage7"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage8")}
          title="VerticalPage8"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage9")}
          title="VerticalPage9"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage10")}
          title="VerticalPage10"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage11")}
          title="VerticalPage11"
        />
        <Button
          onPress={() => navigation.navigate("VerticalPage12")}
          title="VerticalPage12"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage1")}
          title="HorizontalPage1"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage2")}
          title="HorizontalPage2"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage3")}
          title="HorizontalPage3"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage4")}
          title="HorizontalPage4"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage5")}
          title="HorizontalPage5"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage6")}
          title="HorizontalPage6"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage7")}
          title="HorizontalPage7"
        />

        <Button
          onPress={() => navigation.navigate("HorizontalPage8")}
          title="HorizontalPage8"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage9")}
          title="HorizontalPage9"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage10")}
          title="HorizontalPage10"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage11")}
          title="HorizontalPage11"
        />
        <Button
          onPress={() => navigation.navigate("HorizontalPage12")}
          title="HorizontalPage12"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
