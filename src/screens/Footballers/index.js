import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Footballers({ route }) {
  let position = route.params?.position;

  if (!position) {
    position = "Jogadores";
  }

  let listPlayers = [];

  if (position === "goalkeeper") {
    position = "Goleiros";
    listPlayers = [
      {
        name: "Thibaut Courtois",
        position: "goalkeeper",
        club: "BRA",
        id: 1,
      },
      {
        name: "Alisson",
        position: "goalkeeper",
        club: "BRA",
        id: 2,
      },
      {
        name: "Ter Stegen",
        position: "goalkeeper",
        club: "BRA",
        id: 3,
      },
      {
        name: "Donnarumma",
        position: "goalkeeper",
        club: "BRA",
        id: 4,
      },
      {
        name: "Weverton",
        position: "goalkeeper",
        club: "BRA",
        id: 5,
      },
      {
        name: "Jandrei",
        position: "goalkeeper",
        club: "BRA",
        id: 6,
      },
      {
        name: "Kepa",
        position: "goalkeeper",
        club: "BRA",
        id: 7,
      },
      {
        name: "João Paulo",
        position: "goalkeeper",
        club: "BRA",
        id: 8,
      },
      {
        name: "Cássio",
        position: "goalkeeper",
        club: "BRA",
        id: 9,
      },
      {
        name: "Hugo",
        position: "goalkeeper",
        club: "BRA",
        id: 10,
      },
      {
        name: "Ederson",
        position: "goalkeeper",
        club: "BRA",
        id: 11,
      },
      {
        name: "Daniel",
        position: "goalkeeper",
        club: "BRA",
        id: 12,
      },
      {
        name: "Everson",
        position: "goalkeeper",
        club: "BRA",
        id: 13,
      },
    ];
  }

  return (
    <View>
      <View style={styles.containerPositionName}>
        <Text style={styles.textPosition}>{position}</Text>
      </View>
      <View>
        <FlatList
          data={listPlayers}
          renderItem={(item) => {
            return (
              <View style={styles.playerContainer}>
                <View style={styles.playerContent}>
                  {/* <Image
                    source={{
                      uri: "https://i.ibb.co/zPYV0Pw/BRA.png",
                    }}
                  ></Image> */}
                  <Image source={require("../../../assets/BRA.png")}></Image>
                  <Text style={styles.textName}> {item.item.name}</Text>
                  <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.textAddButton}>Escalar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}
