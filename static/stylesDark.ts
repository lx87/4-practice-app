import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "stretch",
        backgroundColor: "#121212",
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#ffffff",
    },
    input: {
        borderWidth: 1,
        borderColor: "#444",
        padding: 10,
        borderRadius: 6,
        marginBottom: 4,
        color: "#ffffff",
        backgroundColor: "#1e1e1e",
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
        color: "#bbb",
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
        color: "#ff6b6b",
        marginBottom: 8,
        fontSize: 12,
    },

    text: {
        color: "#fff",
        marginBottom: 9,
    },
});
