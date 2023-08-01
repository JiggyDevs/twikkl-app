import { View, Text, Pressable, StyleSheet, Image, ImagePropsBase } from "react-native";
import React, { useState } from "react";
// import MoreIcon from "../../assets/svg/More.svg";

const BACKGROUND_COLOR = "#041105";
const WHITE_COLOR = "#fff";
const INACTIVE_COLOR = "#C0CCC1";
const TEXT_COLOR = "#F1FCF2";

const profileImg1 = require("@assets/imgs/avatar1.png") as ImagePropsBase["source"];
const profileImg2 = require("@assets/imgs/avatar2.png") as ImagePropsBase["source"];
const profileImg3 = require("@assets/imgs/avatar3.png") as ImagePropsBase["source"];
const more = require("@assets/imgs/more.png") as ImagePropsBase["source"];


const Share = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.sendToText}>Send To</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Pressable>
                    <Image style={styles.profileImg} source={profileImg1} />
                    <Text style={styles.text}>jordio...jgy</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={profileImg3} />
                    <Text style={styles.text}>lacy.lens</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={profileImg2} />
                    <Text style={styles.text}>glory.jgy</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={more} />
                    <Text style={styles.text}>More</Text>
                </Pressable>
            </View>
            <View style={styles.rowContainer}>
                <Pressable style={styles.pressableContainer}>
                    <Image style={styles.profileImg} source={profileImg1} />
                    <Text style={styles.text}>jordio...jgy</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={profileImg3} />
                    <Text style={styles.text}>lacy.lens</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={profileImg2} />
                    <Text style={styles.text}>glory.jgy</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={more} />
                    <Text style={styles.text}>More</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={profileImg2} />
                    <Text style={styles.text}>glory.jgy</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={more} />
                    <Text style={styles.text}>More</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={more} />
                    <Text style={styles.text}>More</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={profileImg2} />
                    <Text style={styles.text}>glory.jgy</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={more} />
                    <Text style={styles.text}>More</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Share;

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND_COLOR,
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
    },
    header: {
        width: '40%',
        height: 5,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: INACTIVE_COLOR,
        marginBottom: 40,
        borderRadius: 10,
    },
    sendToText: {
        color: WHITE_COLOR,
        fontSize: 16,
        marginBottom: 20,
        alignSelf: 'center',
    },
    profileImg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 5,
        alignSelf: 'center',
    },
    text: {
        color: TEXT_COLOR,
        alignSelf: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',  
        flex: 4,   
    },
    pressableContainer: {
        flex: 1,
    }
})