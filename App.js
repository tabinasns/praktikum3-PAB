import React, { useRef, useState } from "react";
import { Drawer, DrawerBody, DrawerContent, DrawerOverlay, StatusBar } from "native-base";
import Header from "./components/header";
import List from "./screens/list";
import Article from "./screens/article";
import Button from "./components/button";
import Separator from "./components/separator";
import Modal from "./screens/modal";

const App = () => {
  const [page, setPage] = useState("list");
  const drawer = useRef(null);

  const changePage = (pageName) => {
    drawer.current.close();
    setPage(pageName);
  };

  const navigationView = () => (
    <DrawerContent bg="#222222" p={3}>
      <DrawerBody>
        <Button text="List" onPress={() => changePage("list")} />
        <Separator height={30} />
        <Button text="Article" onPress={() => changePage("article")} />
      </DrawerBody>
      <DrawerBody borderTopWidth={1} borderColor="gray.600" pt={3}>
        <Button text="Close" onPress={() => drawer.current.close()} />
      </DrawerBody>
    </DrawerContent>
  );

  return (
    <Drawer
      isOpen={false}
      placement="left"
      onClose={() => drawer.current.close()}
      finalFocusRef={drawer}
      content={navigationView}
    >
      <DrawerOverlay />
      <StatusBar backgroundColor="#AA0002" barStyle="light-content" />
      <Box flex={1}>
        <Header drawer={drawer} />
        {page == "list" ? <List /> : page == "article" ? <Article /> : page == "modal" ? <Modal /> : null}
      </Box>
    </Drawer>
  );
};

export default App;


// import { useRef, useState } from "react";
// import { DrawerLayoutAndroid, StatusBar, View } from "react-native";
// import Header from "./components/header";
// import List from "./screens/list";
// import Article from "./screens/article";
// import Button from "./components/button";
// import Separator from "./components/separator";
// import Modal from "./screens/modal";

// // functional component
// const App = () => {
//   // state declaration
//   const [page, setPage] = useState("article");

//   // ref declaration
//   const drawer = useRef(null);

//   // arrow function inside functional component
//   const changePage = (drawer, pageName) => {
//     // close drawer
//     drawer.current.closeDrawer();
//     // change state value
//     setPage(pageName);
//   };

//   // arrow function inside functional component
//   const navigationView = () => (
//     <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
//       <Button text="List" onPress={() => changePage(drawer, "list")} />
//       <Separator height={30} />
//       <Button text="Article" onPress={() => changePage(drawer, "article")} />
//       <Separator height={30} />
//       <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
//     </View>
//   );

//   return (
//     <DrawerLayoutAndroid 
//       ref={drawer}
//       drawerWidth={300}
//       drawerPosition="left"
//       renderNavigationView={navigationView}
//     >
//       <StatusBar style="light" backgroundColor="#AA0002" />
//         <View>
//           <Header drawer={drawer}/>
//           {page == "list" ? <List /> : page == "article" ? <Article /> : page =="modal" ? <Modal /> : null}
//         </View>
//     </DrawerLayoutAndroid>
//   );
// };

// export default App;
