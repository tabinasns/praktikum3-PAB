import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, Image, FlatList, StyleSheet} from "react-native";

const datas = [
    {
        id: 1,
        title: "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
        id: 2,
        title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
        id: 3,
        title: "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
        id: 4,
        title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
        id: 5,
        title: "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
    {
        id: 6,
        title: "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
    {
        id: 7,
        title: "Mhasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
    {
        id: 8,
        title: "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
    {
        id: 9,
        title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
    {
        id: 10,
        title: "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
        image: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
    },
]

const Modals = () => {

    // implementation modal
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {setModalVisible(!modalVisible);
    }

    // arrow function with destructured argument and modal 
    return (
        <View>
            <FlatList 
                data={datas}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.view} onPress={toggleModal}>
                        <View>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <Text style={styles.text}>
                                {item.title}
                            </Text>
                        </View> 
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image 
                        source={require("../assets/update.png")} 
                        style= {{ width: 70, height: 70 }}
                        />
                        <Text style={styles.modalText}>Update</Text>
                        <Text style={{paddingTop:10 }}>This app has been updated. Please update for the latest features and bug fixes </Text>
                        <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={toggleModal}>
                            <Text style={[styles.textStyle, styles.buttonText ]}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );        
};

// styles
const styles = StyleSheet.create({
    view: {
        padding: 15,
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1,
    },
    image: {
        height: 200,
        width: null,
    },
    text: {
        fontSize: 18,
        paddingTop: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        fontWeight:"bold", 
        paddingTop: 10, 
        fontSize:20,
        textAlign: "center"
    },
    button: {
        backgroundColor: "#f194ff",
        borderRadius: 15,
        paddingHorizontal: 20,
        padding: 10,
        elevation: 2,
        margin: 10
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    buttonClose: {
        backgroundColor: "#AA0002",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default Modals;
