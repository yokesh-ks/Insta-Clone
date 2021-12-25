import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddNewPost from '../components/newpost/AddNewPost'

export default function NewPostScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <AddNewPost />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
    },
})
