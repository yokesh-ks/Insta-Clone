import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import {POSTS} from '../data/posts'
import BottomTab from '../components/home/BottomTab'
import {BottomTabIcons} from '../data/bottomTabIcons'

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index}/>
                ))}    
            </ScrollView>
            <BottomTab icons={BottomTabIcons} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
    }
})
