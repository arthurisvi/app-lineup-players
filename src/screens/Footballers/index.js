import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import styles from "./style";
import { LineupContext } from "../../contexts/lineup";
import { goalkeepers, sides, defenders, forwards, midfielders } from "./list";

export default function Footballers({ route }) {
  let position = route.params?.position;
  // const [positionRoute, setPosition] = useState(position);

  const { addPlayerToLineup, removePlayerToLineup, lineup, setLineup } =
    useContext(LineupContext);
  const [searchPlayer, setSearchPlayer] = useState("");
  const [listPlayers, setListPlayers] = useState(
    goalkeepers.concat(sides, defenders, midfielders, forwards)
  );

  useEffect(() => {
    if (searchPlayer === "") {
      setListPlayers(
        goalkeepers.concat(sides, defenders, midfielders, forwards)
      );
    } else {
      setListPlayers(
        goalkeepers
          .concat(sides, defenders, midfielders, forwards)
          .filter((item) => {
            if (item.name.indexOf(searchPlayer) > -1) {
              return true;
            } else {
              return false;
            }
          })
      );
    }
  }, [searchPlayer]);

  useEffect(() => {
    if (position === "goalkeeper") {
      position = "Goleiros";
      setListPlayers(goalkeepers);
    } else if (position === "side") {
      position = "Laterais";
      setListPlayers(sides);
    } else if (position === "defender") {
      position = "Zagueiros";
      setListPlayers(defenders);
    } else if (position === "midfielder") {
      position = "Meio-campistas";
      setListPlayers(midfielders);
    } else if (position === "forward") {
      position = "Atacantes";
      setListPlayers(forwards);
    } else {
      (position = "Jogadores"),
        setListPlayers(
          goalkeepers.concat(sides, defenders, midfielders, forwards)
        );
    }
  }, [position]);

  // let listPlayers = [];

  // else if (position === "side") {
  //   position = "Laterais";
  //   listPlayers = sides;
  // } else if (position === "defender") {
  //   position = "Zagueiros";
  //   listPlayers = defenders;
  // } else if (position === "midfielder") {
  //   position = "Meio-campistas";
  //   listPlayers = midfielders;
  // } else if (position === "forward") {
  //   position = "Atacantes";
  //   listPlayers = forwards;
  // }
  // else {
  //   position = "Jogadores";
  //   listPlayers = goalkeepers.concat(sides, defenders, midfielders);
  // }

  const goalkeeper = lineup.find((player) => player.position === "goalkeeper");
  const sidesLineup = lineup.filter((player) => player.position === "side");
  const defendersLineup = lineup.filter(
    (player) => player.position === "defender"
  );
  const forwardsLineup = lineup.filter(
    (player) => player.position === "forward"
  );
  const midfieldersLineup = lineup.filter(
    (player) => player.position === "midfielder"
  );

  function playerExistsInLineup(playerId) {
    if (lineup.length > 0) {
      return lineup.some((player) => player.id == playerId);
    }
  }

  return (
    <View>
      <View style={styles.containerPositionName}>
        <Text style={styles.textPosition}>{position}</Text>
        <View
          style={{
            marginTop: 15,
            backgroundColor: "#DCDCDC",
            width: "97%",
            padding: 10,
          }}
        >
          <TextInput
            value={searchPlayer}
            onChangeText={(t) => setSearchPlayer(t)}
            placeholder="Pesquise por um jogador"
          />
        </View>
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
                  <Image
                    style={{ width: 55, height: 55 }}
                    source={{
                      uri: item.item.image,
                    }}
                  ></Image>
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
                        (goalkeeper && item.item.position == "goalkeeper") ||
                        (sidesLineup.length >= 2 &&
                          item.item.position == "side") ||
                        (midfieldersLineup.length >= 3 &&
                          item.item.position == "midfielder") ||
                        (forwardsLineup.length >= 3 &&
                          item.item.position == "forward") ||
                        (defendersLineup.length >= 2 &&
                          item.item.position == "defender")
                          ? styles.disableButton
                          : styles.addButton
                      }
                      onPress={() => {
                        if (
                          (!goalkeeper && item.item.position == "goalkeeper") ||
                          (!(defendersLineup.length >= 2) &&
                            item.item.position == "defender") ||
                          (!(midfieldersLineup.length >= 3) &&
                            item.item.position == "midfielder") ||
                          (!(sidesLineup.length >= 2) &&
                            item.item.position == "side") ||
                          (!(forwardsLineup.length >= 3) &&
                            item.item.position == "forward")
                        ) {
                          addPlayerToLineup(item.item);
                        }
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
