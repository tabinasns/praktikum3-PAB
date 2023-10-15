import { useRef, useState } from "react";
import { DrawerLayoutAndroid, StatusBar, View } from "react-native";
import Header from "./components/header";
import List from "./screens/list";
import Article from "./screens/article";
import Button from "./components/button";
import Separator from "./components/separator";
import Modal from "./screens/modal";

// functional component
const App = () => {
  // state declaration
  const [page, setPage] = useState("modal");

  // ref declaration
  const drawer = useRef(null);

  // arrow function inside functional component
  const changePage = (drawer, pageName) => {
    // close drawer
    drawer.current.closeDrawer();
    // change state value
    setPage(pageName);
  };

  // arrow function inside functional component
  const navigationView = () => (
    <View style={{ padding: 30, backgroundColor: "#222222", flex: 1 }}>
      <Button text="List" onPress={() => changePage(drawer, "list")} />
      <Separator height={30} />
      <Button text="Article" onPress={() => changePage(drawer, "article")} />
      <Separator height={30} />
      <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
    </View>
  );

  return (
    <DrawerLayoutAndroid 
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar style="light" backgroundColor="#AA0002" />
        <View>
          <Header drawer={drawer}/>
          {page == "list" ? <List /> : page == "article" ? <Article /> : page =="modal" ? <Modal /> : null}
        </View>
    </DrawerLayoutAndroid>
  );
};

export default App;
