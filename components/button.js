import { Text, TouchableOpacity, StyleSheet } from "react-native";

// functional component with props
const Button = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>   
    );
};

// styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#dddddd",
        padding: 15,
        alignItems: "center",
        borderRadius: 30,
    },
    text: {
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
});

export default Button;
