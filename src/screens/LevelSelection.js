import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";
import ButtonLevelSelection from "./ButtonLevelSelection";

export default props => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.frame}>
        <View style={styles.container}>
          <Text style={styles.title}>Selecione o Nível</Text>
					<ButtonLevelSelection easy onLevelSelected={props.onLevelSelected}></ButtonLevelSelection>
					<ButtonLevelSelection normal onLevelSelected={props.onLevelSelected}></ButtonLevelSelection>
					<ButtonLevelSelection hard onLevelSelected={props.onLevelSelected}></ButtonLevelSelection>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.6)"
  },
  container: {
    backgroundColor: "#EEE",
    alignItems: "center",
    justifyContent: "center",
    padding: 15
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
