import React, { useState, useContext } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { LineupContext } from "../../contexts/lineup";
import { goalkeepers, sides, defenders } from "./list";

export default function Footballers({ route }) {
  let position = route.params?.position;

  const { addPlayerToLineup, removePlayerToLineup, lineup } =
    useContext(LineupContext);

  let listPlayers = [];

  if (position === "goalkeeper") {
    position = "Goleiros";
    listPlayers = goalkeepers;
  } else if (position === "side") {
    position = "Laterais";
    listPlayers = sides;
  } else if (position === "defender") {
    position = "Zagueiros";
    listPlayers = defenders;
  } else if (position === "midfielder") {
    position = "Meio-campistas";
  } else if (position === "forward") {
    position = "Atacantes";
  } else {
    position = "Jogadores";
  }

  let goalkeeper = lineup.find((player) => player.position === "goalkeeper");

  function playerExistsInLineup(playerId) {
    if (lineup.length > 0) {
      return lineup.some((player) => player.id == playerId);
    }
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
            {
              playerExistsInLineup(item.item.id);
            }
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
                  {playerExistsInLineup(item.item.id) ? (
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => {
                        removePlayerToLineup(item.item.id);
                      }}
                    >
                      <Text style={styles.textAddButton}>REMOVER</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={
                        position == "Goleiros" && goalkeeper
                          ? styles.disableButton
                          : styles.addButton
                      }
                      onPress={() => {
                        addPlayerToLineup(item.item);
                      }}
                    >
                      <Text style={styles.textAddButton}>ADICIONAR</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
}
