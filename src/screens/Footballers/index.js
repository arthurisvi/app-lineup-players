import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./style";

export default function Footballers({ route }) {
  const { position } = route.params;

  let listPlayers = [];

  if (position === "Goleiros") {
    listPlayers = [
      {
        name: "Thibaut Courtois",
        position: "goalkeeper",
        id: 1,
      },
      {
        name: "Alisson",
        position: "goalkeeper",
        id: 2,
      },
      {
        name: "Ter Stegen",
        position: "goalkeeper",
        id: 3,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 4,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 5,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 6,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 7,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 8,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 9,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 10,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 11,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 12,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        id: 13,
      },
    ];
  }

  return (
    <View>
      <View style={styles.containerPositionName}>
        <Text>{position}</Text>
      </View>
      <View>
        <FlatList
          data={listPlayers}
          renderItem={(item) => {
            return (
              <View style={styles.playerContainer}>
                <View style={styles.playerContent}>
                  <Text>Clube</Text>
                  <Text> {item.item.name}</Text>
                  <Text>+</Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}
