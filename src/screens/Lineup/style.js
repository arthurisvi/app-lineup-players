import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6eaa5e",
    },
    lineupContainer: {
        margin: 20,
        backgroundColor: "#6eaa5e",
        height: "70%",
    },
    sideLinesContainer: {
        borderColor: "white",
        borderWidth: 5,
        height: "100%",
    },
    areaMidfielder: {},
    addButton: {
        alignItems: "center",
        color: "black",
    },
    textAddButton: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        // textAlign: "center",
    },
    textMidfielder: {
        color: "white",
        fontWeight: "bold",
        fontSize: 60,
    },
    sectionContainer: {
        flexWrap: "wrap",
        alignItems: "flex-start",
        flexDirection: "row",
    },
    footballerCircle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#699f5a",
        margin: 10,
        shadowColor: "#171717",
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        elevation: 11,
    },
    footballer: {
        display: "flex",
        width: "20%",
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    playerContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    footballerName: {
        fontWeight: "bold",
        fontSize: 12,
        color: "#fff",
    },
    forwardContainer: {
        flex: 1,
        marginTop: 60,
        alignItems: "center",
    },
    midfielderContainer: {
        flex: 2,
        marginTop: 60,
        alignItems: "center",
        justifyContent: "center",
    },
    defenderContainer: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    goalkeeperContainer: {
        alignItems: "center",
    },
});

export default styles;