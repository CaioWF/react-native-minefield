import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default props => {
  const { easy, normal, hard } = props;
  const style = [styles.bgPattern];
  var difficult = 0.1;
  var textButton = "Fácil";
  if (easy) {
    style.push(styles.bgEasy);
  }
  if (normal) {
    style.push(styles.bgNormal);
    difficult = 0.2;
    textButton = "Médio";
  }
  if (hard) {
    style.push(styles.bgHard);
    difficult = 0.3;
    textButton = "Difícil";
  }

  return (
    <TouchableOpacity
      style={style}
      onPress={() => props.onLevelSelected(difficult)}
    >
      <Text style={styles.buttonLabel}>{textButton}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 5
  },
  buttonLabel: {
    fontSize: 20,
    color: "#EEE",
    fontWeight: "bold"
	},
	bgPattern: {
		width: 100,
		alignItems: 'center'
	},
  bgEasy: {
    backgroundColor: "#49b65d"
  },
  bgNormal: {
    backgroundColor: "#2765F7"
  },
  bgHard: {
    backgroundColor: "#F26337"
  }
});
