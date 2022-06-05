import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { LineupContext } from "../../contexts/lineup";

export default function Lineup({ navigation }) {
  const { lineup, removePlayerToLineup } = useContext(LineupContext);

  function positionDefine(position) {
    navigation.navigate("Footballers", {
      position: position,
    });
  }

  let goalkeeper = lineup.find((player) => player.position === "goalkeeper");
  let sides = lineup.filter((player) => player.position === "side");
  let defenders = lineup.filter((player) => player.position === "defender");
  let forwards = lineup.filter((player) => player.position === "forward");
  let midfielders = lineup.filter((player) => player.position === "midfielder");

  return (
    <View style={styles.container}>
      <View style={styles.lineupContainer}>
        <View style={styles.sideLinesContainer}>
          <View style={styles.forwardContainer}>
            <View style={styles.sectionContainer}>
              {forwards.length > 0 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(forwards[0].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: forwards[0].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>
                      {forwards[0].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}
              {forwards.length > 1 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(forwards[1].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: forwards[1].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>
                      {forwards[1].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}

              {forwards.length > 2 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(forwards[2].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: forwards[2].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>
                      {forwards[2].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}
            </View>
          </View>
          <View style={styles.midfielderContainer}>
            <View style={styles.sectionContainer}>
              {midfielders.length > 0 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(midfielders[0].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: midfielders[0].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>
                      {midfielders[0].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}

              {midfielders.length > 1 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(midfielders[1].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: midfielders[1].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>
                      {midfielders[1].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}

              {midfielders.length > 2 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(midfielders[2].id);
                    }}
                  >
                    {/* <View>
                      </View> */}
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: midfielders[2].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>
                      {midfielders[2].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}
            </View>
          </View>
          <View style={styles.defenderContainer}>
            <View style={styles.sectionContainer}>
              {sides.length > 0 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(sides[0].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: sides[0].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>{sides[0].name}</Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}

              {defenders.length > 0 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(defenders[0].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: defenders[0].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>
                      {defenders[0].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}

              {defenders.length > 1 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(defenders[1].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: defenders[1].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>
                      {defenders[1].name}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}

              {sides.length > 1 ? (
                <View style={styles.footballer}>
                  <TouchableOpacity
                    style={styles.playerContainer}
                    onPress={() => {
                      removePlayerToLineup(sides[1].id);
                    }}
                  >
                    <Image
                      style={{ width: 55, height: 55 }}
                      source={{
                        uri: sides[1].image,
                      }}
                    ></Image>
                    <Text style={styles.footballerName}>{sides[1].name}</Text>
                  </TouchableOpacity>
                </View>
              ) : (
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
              )}
            </View>
          </View>
          <View style={styles.goalkeeperContainer}>
            {goalkeeper ? (
              <View style={styles.footballer}>
                <TouchableOpacity
                  style={styles.playerContainer}
                  onPress={() => {
                    removePlayerToLineup(goalkeeper.id);
                  }}
                >
                  <Image
                    style={{ width: 55, height: 55 }}
                    source={{
                      uri: goalkeeper.image,
                    }}
                  ></Image>
                  <Text style={styles.footballerName}>{goalkeeper.name}</Text>
                </TouchableOpacity>
              </View>
            ) : (
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
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
