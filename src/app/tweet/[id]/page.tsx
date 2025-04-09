"use client"

export const runtime = 'edge'

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTweet } from 'react-tweet';


function TweetPage() {

    const pathname = usePathname();
    const tweetId = pathname.split('/').pop() as string;
    const tweet = useTweet(tweetId)

    useEffect(() => {
        if (tweet.isLoading) return
        else if (tweet.data?.text) {
            console.log(tweet.data?.text)
        } else {
            console.log('error')
        }
    }, [tweet])

    if (tweet.isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div id='tweet-body'>
                {tweet.data?.text || 'error'}
            </div>
        )
    }
}

export default TweetPage