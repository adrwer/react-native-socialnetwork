import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, FontAwesome5,  MaterialCommunityIcons} from "@expo/vector-icons";
import LikeImage from "../../assets/images/like.png";

const post = {
    id: "p1",
    createdAt: "19 m",
    User: {
      id: "u1",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
      name: "Vadim Savin",
    },
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
    numberOfLikes: 11,
    numberOfShares: 2,
  };


const FeedPost = ({post}) => {
  return (
    <View style={styles.post}>
        <View style={styles.header}>
          <Image source={{uri: post.User.image}} 
          style={styles.profileImage} />
          <View>
            <Text style={styles.name}>{}</Text>
            <Text style={styles.subTitle}></Text>
          </View>
          <Entypo 
            name="dots-three-horizontal"
            size={18}
            color="gray"
            style={styles.icon}
              />
        </View>
        {post.description && (
          <Text style={styles.description}>{post.description}</Text>
        )}

        {post.image && (
          <Image source={{uri: post.image}} style={styles.image} />
        )}
        
        <View style={styles.footer}>
          <View style={styles.statsRow}>
            <Image source={LikeImage} style={styles.likeIcon} />
            <Text style={styles.likedBy}>
              Elon Musk {post.numberOfLikes}
            </Text>
            <Text style={styles.numberOfShares}>
              {post.numberOfShares} shares
            </Text>
          </View>

          <View style={styles.bottomRow}>
            <View style={styles.iconButtoon}>
              <AntDesign name="like2" size={18} color="gray" />
              <Text style={styles.iconButtonText}>Like</Text>
            </View>

            <View style={styles.iconButtoon}>
              <FontAwesome5 name="comment-alt" size={18} color="gray" />
              <Text style={styles.iconButtonText}>Comment</Text>
            </View>

            <View style={styles.iconButtoon}>
              <MaterialCommunityIcons name="share-outline" size={18} color="gray" />
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    post: {
      width: "100%",
      marginVertical: 10,
      backgroundColor: "#fff"
    },
    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      padding: 10
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10
    },
    name: {
      fontWeight: "500"
    },
    subTitle: {
      color: "gray"
    },
    icon: {
      marginLeft: "auto"
    },
     description: {
      padding: 10,
      lineHeight: 20,
      letterSpacing: 0.3
     },
     image: {
      width: "100%",
      aspectRatio: 1,
      marginTop: 10
     },
     footer: {
      paddingHorizontal: 10
     },
     statsRow: {
        flexDirection: "row",
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical: 10,
        borderColor: "lightgray"
     },
     likeIcon: {
      width: 20,
      height: 20,
      marginRight: 5
     },
     likedBy: {
      color: "gray"
     },
     shares: {
      marginLeft: "auto",
      color: "gray"
     },
     bottomRow: {
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-around"
     },
     iconButtoon: {
      flexDirection: "row",
      alignItems: "center"
     },
     iconButtonText: {
      marginLeft: 5,
      color: "gray",
      fontWeight: "500"
     }
  });

export default FeedPost
