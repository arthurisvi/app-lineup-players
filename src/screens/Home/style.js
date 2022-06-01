import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#1C1C1C",
    },
    content: {
        backgroundColor: "#C7662B",
        borderRadius: 12,

        // opacity: 0.5,
        width: "90%",
        height: "30%",
    },
    namesContent: {
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    nameTeam: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
    },
    nameManager: {
        fontSize: 14,
        color: "#fff",
    },
    pointsContainer: {
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
    },
    pointsContent: {
        padding: 10,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    points: {
        fontWeight: "bold",
        fontSize: 40,
        color: "#6BBB85",
    },
    market: {
        paddingTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textMarket: {
        color: "#fff",
    },
});

export default styles;