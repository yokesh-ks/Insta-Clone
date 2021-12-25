import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import FormikPostUploader from './FormikPostUploader'


export default function AddNewPost() {
    return (
        <View style={styles.container}>
            <Header />
            <FormikPostUploader />
        </View>
    )
}

const Header = () => (
    <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }} style={styles.backIcon} />
            </TouchableOpacity>
            
            <Text style={styles.headerText}>+ NEW POST</Text>
            <Text></Text>
        </View>
)

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 10,
    },
    backIcon: {
        width: 30,
        height: 30,
    },
})