import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerPositionName: {
        alignItems: "center",
        margin: 15,
    },
    textPosition: {
        fontSize: 20,
        fontWeight: "bold",
    },
    playerContainer: {
        backgroundColor: "#DCDCDC",
        padding: 30,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    playerContent: {
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    addButton: {
        width: 80,
        height: 40,
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#3CB371",
        alignItems: "center",
        justifyContent: "center",
    },
    textAddButton: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    textName: {
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default styles;