import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'
import { Divider } from 'react-native-elements'

export default function post(props) {
    const post = props.post
    return (
        <View style={{marginBottom: 30, flex:1}}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{marginHorizontal: 15}}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comments post={post} />
            </View>
            
        </View>
    )
}

const PostHeader = ({post}) => (
    <View style={styles.header}>
        <View style={styles.headerProfile}>
            <Image 
                source={{uri: post.profile_picture}} 
                style={styles.profile}
            />
            <Text style={{color: 'white'}}>{post.user}</Text>
        </View>
        <Text style={{color: 'white', fontWeight: '900'}}>...</Text>
    </View>
)

const PostImage = ({post}) => (
    <View style={styles.postImage}>
        <Image 
            source={{uri: post.imageUrl}}
            style={{height: '100%', resizeMode: 'cover'}}
        />  
    </View>
)

const PostFooter = () => (
    <View style={styles.footer}>
        <View style={styles.footerLeft}>
            <TouchableOpacity>
                <Image style={styles.icon} source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                }} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.icon} source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                }} />
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity>
                <Image style={styles.icon} source={{
                    uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
                }} />
            </TouchableOpacity>
        </View>
        
    </View>
)

const Likes = ({post}) => (
    <View style={{flexDirection: 'row', marginTop: 4,}}>
        <Text style={{color: 'white', fontWeight: '600'}}>{post.likes.toLocaleString('en')} likes</Text> 
    </View>
)

const Caption = ({post}) => (
    <View style={{marginTop: 5}}>
        <Text style={{color: 'white'}}>
            <Text style={{fontWeight: '600'}}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)

const CommentSection = ({post}) => (
    <View style={{marginTop: 5}}>
        {!!post.comments.length && (
            <Text style={{color: 'gray'}}>
                View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )}
    </View>  
)

const Comments = ({post}) => (
    <View>
        {post.comments.map((comment, index) => (
            <View key={index}>
                <Text style={{color: 'white'}}>
                    <Text style={{ fontWeight: '600'}}>{comment.user}</Text>
                    <Text> {comment.comment}</Text>
                </Text>
            </View>
        ))}
    </View>
)

    

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    },
    headerProfile: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501',
    },
    postImage: {
        width: '100%',
        height: 450,
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    footer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footerLeft: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    }
})
