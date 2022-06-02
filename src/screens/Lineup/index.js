import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { LineupContext } from "../../contexts/lineup";

export default function Lineup({ navigation }) {
  const [goalkeeper, setGoalkeeper] = useState(null);
  const { lineup } = useContext(LineupContext);

  function positionDefine(position) {
    navigation.navigate("Footballers", {
      position: position,
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.lineupContainer}>
        <View style={styles.sideLinesContainer}>
          <View style={styles.forwardContainer}>
            <View style={styles.sectionContainer}>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("forward");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("forward");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("forward");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.midfielderContainer}>
            <View style={styles.sectionContainer}>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("midfielder");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("midfielder");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("midfielder");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.defenderContainer}>
            <View style={styles.sectionContainer}>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("side");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("defender");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("defender");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.footballerCircle}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    positionDefine("side");
                  }}
                >
                  <Text style={styles.textAddButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.goalkeeperContainer}>
            <View style={styles.footballerCircle}>
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => {
                  positionDefine("goalkeeper");
                }}
              >
                <Text style={styles.textAddButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
