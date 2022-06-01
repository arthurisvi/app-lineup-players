import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function Main() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.namesContent}>
          <Text style={styles.nameTeam}>FC Isvi de Munique</Text>
          <Text style={styles.nameManager}>Arthur Isvi</Text>
        </View>
        <View style={styles.pointsContainer}>
          <View style={styles.pointsContent}>
            <Text>Ultima pontuação</Text>
            <Text style={styles.points}>59.7</Text>
          </View>
          <View style={styles.pointsContent}>
            <Text>Total</Text>
            <Text style={styles.points}>670.25</Text>
          </View>
        </View>
        <View style={styles.pointsContainer}></View>
        <View style={styles.market}>
          <Text style={styles.textMarket}>Mercado fecha em: 10/06/2022</Text>
        </View>
      </View>
    </View>
  );
}
