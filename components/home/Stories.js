import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import { USERS } from '../../data/users'

export default function Stories() {
    return (
        <View style={{marginBottom: 30}}>
            <Image  source={{
                        uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
                    }} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View key={index} style={styles.storyContainer}>
                        <Image style={styles.story} source={{
                            uri: story.image
                        }} />
                        <Text style={{ color: 'white' }}>
                            {story.user.length > 11 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user.toLowerCase()}
                        </Text>
                    </View>
                    
                )
                        
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    storyContainer: {
        alignItems: 'center',
    }, 
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    }
})