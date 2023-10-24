import React from "react";
import { Box, NativeBaseProvider } from "native-base";

const Separator = (props) => {
  return (
        <NativeBaseProvider>
            <Box h={props.height}></Box>
        </NativeBaseProvider>    
    );
};

export default Separator;


// import { View } from "react-native";

// // Functional component with props
// const Separator = (props) => {
//     return <View style={{ height: props.height }}></View>;    
// };

// export default Separator;
