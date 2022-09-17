import { FlatList } from 'react-native'
import React from 'react'
import FeedPost from '../components/FeedPost'
import posts from "../../assets/data/posts.json"

const FeedScreen = () => {
  return (
    <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />} />
  )
}

export default FeedScreen