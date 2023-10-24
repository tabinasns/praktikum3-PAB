import React from "react";
import { NativeBaseProvider, Pressable, Text } from "native-base";

const Button = (props) => {
  return (
    <NativeBaseProvider>
        <Pressable
            bg={'#dddddd'}
            p={'15px'}
            alignItems="center"
            borderRadius={30}
            onPress={props.onPress}>
        <Text
            fontSize={'16px'}
            textTransform="uppercase"
            fontWeight="bold">
            {props.text}
        </Text>
        </Pressable>
    </NativeBaseProvider>
  );
};

export default Button;

// import { Text, TouchableOpacity, StyleSheet } from "react-native";

// // functional component with props
// const Button = (props) => {
//     return (
//         <TouchableOpacity style={styles.container} onPress={props.onPress}>
//             <Text style={styles.text}>{props.text}</Text>
//         </TouchableOpacity>   
//     );
// };

// // styles
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "#dddddd",
//         padding: 15,
//         alignItems: "center",
//         borderRadius: 30,
//     },
//     text: {
//         fontSize: 16,
//         textTransform: "uppercase",
//         fontWeight: "bold",
//     },
// });

// export default Button;
