import { View, Text, Pressable, StyleSheet, Image, ImagePropsBase } from "react-native";
import React, { useState } from "react";
// import MoreIcon from "../../assets/svg/More.svg";

const WHITE_COLOR = "#fff";
const INACTIVE_COLOR = "#C0CCC1";
const TEXT_COLOR = "#F1FCF2";

const profileImg1 = require("@assets/imgs/avatar1.png") as ImagePropsBase["source"];
const profileImg2 = require("@assets/imgs/avatar2.png") as ImagePropsBase["source"];
const profileImg3 = require("@assets/imgs/avatar3.png") as ImagePropsBase["source"];
const more = require("@assets/imgs/more.png") as ImagePropsBase["source"];
const download = require("@assets/imgs/download.png") as ImagePropsBase["source"];
const link = require("@assets/imgs/link.png") as ImagePropsBase["source"];
const notInterested = require("@assets/imgs/not_interested.png") as ImagePropsBase["source"];
const block = require("@assets/imgs/block.png") as ImagePropsBase["source"];
const stitch = require("@assets/imgs/stitch.png") as ImagePropsBase["source"];
const report = require("@assets/imgs/report.png") as ImagePropsBase["source"];
const favourite = require("@assets/imgs/favourite.png") as ImagePropsBase["source"];
const duet = require("@assets/imgs/duet.png") as ImagePropsBase["source"];



const Share = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header} />
            <Text style={styles.sendToText}>Send To</Text>
            <View style={styles.rowContainer}>
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
            <Text style={styles.sendToText}>Share</Text>
            <View style={styles.rowContainer}>
                <Pressable>
                    <Image style={styles.profileImg} source={download} />
                    <Text style={styles.text}>Download</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={stitch} />
                    <Text style={styles.text}>Stitch</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={duet} />
                    <Text style={styles.text}>Duet</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={link} />
                    <Text style={styles.text}>Copy link</Text>
                </Pressable>
            </View>
            <View style={styles.rowContainer}>
                <Pressable>
                    <Image style={styles.profileImg} source={favourite} />
                    <Text style={styles.text}>Favourite</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={report} />
                    <Text style={styles.text}>Report</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={notInterested} />
                    <Text style={styles.text}>Not interested</Text>
                </Pressable>
                <Pressable>
                    <Image style={styles.profileImg} source={block} />
                    <Text style={styles.text}>Block</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Share;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    header: {
        width: '40%',
        height: 5,
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: INACTIVE_COLOR,
        marginBottom: 16,
        borderRadius: 10,
    },
    sendToText: {
        color: WHITE_COLOR,
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 30,
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
        width: 70,
        textAlign: 'center'
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
    },
})