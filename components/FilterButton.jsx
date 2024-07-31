import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const FilterButton = ({ index, title, activeBtn, onPress }) => {
  const isActive = activeBtn === index;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isActive ? styles.activeButton : styles.inactiveButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          isActive ? styles.activeText : styles.inactiveText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginHorizontal: 4,
    marginBottom: 8,
  },
  activeButton: {
    backgroundColor: "#3b82f6",
    borderColor: "#3b82f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inactiveButton: {
    backgroundColor: "#e5e7eb",
    borderColor: "#d1d5db",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  activeText: {
    color: "#ffffff",
  },
  inactiveText: {
    color: "#9ca3af",
  },
});

export default FilterButton;
