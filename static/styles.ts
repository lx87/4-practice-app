import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "stretch",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 6,
        marginBottom: 4,
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 12,
    },
    charCount: {
        textAlign: "right",
        marginBottom: 8,
        color: "#666",
    },
    button: {
        padding: 12,
        backgroundColor: "#0a84ff",
        borderRadius: 8,
        alignItems: "center",
        marginTop: 12,
    },
    buttonPressed: {
        opacity: 0.8,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
    },
    error: {
        color: "red",
        marginBottom: 8,
        fontSize: 12,
    },
});
