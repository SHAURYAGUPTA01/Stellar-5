import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground
                    source={require('../assets/stars.gif')}
                    style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Image source={require("../assets/main-icon.png")} style={{ width: 150, height: 150 }}></Image>
                        <Text style={styles.titleText}>Stellar</Text>
                        <Text style={styles.titleText}>App</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.routeCard} onPress={() =>
                            this.props.navigation.navigate("SpaceCraft")
                        }>
                        <Text style={styles.routeText}>Spacecrafts</Text>
                        <Image source={require("../assets/space_crafts.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("StarMap")
                    }>
                        <Text style={styles.routeText}>Star Map</Text>
                        <Image source={require("../assets/star_map.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("DailyPic")
                    }>
                        <Text style={styles.routeText}>Daily Pictures</Text>
                        <Image source={require("../assets/daily_pictures.png")} style={styles.routeImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.12,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: "white"
    },
    titleBar: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 35,
        width: 300,
        height: 80,
        fontWeight: "bold",
        fontFamily: "algerian",
        color: "white",
        textAlign: "center"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: 'algerian'
    },
    routeImage: {
        position: "absolute",
        top: -10,
        right: 0,
        height: 80,
        width: 80,
        resizeMode: "contain"
    }
});