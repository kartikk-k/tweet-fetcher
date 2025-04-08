"use client"

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useTweet } from 'react-tweet';


function TweetPage() {

    const pathname = usePathname();
    const tweetId = pathname.split('/').pop() as string;
    const tweet = useTweet(tweetId)

    useEffect(() => {
        if (tweet.isLoading) return
        else if (tweet.data?.text) {
            // adding data to kv
            fetch('/api/tweet/add', {
                method: 'POST',
                body: JSON.stringify({ id: tweetId, content: tweet.data?.text })
            })
            console.log(tweet.data?.text)
        } else {
            fetch('/api/tweet/add', {
                method: 'POST',
                body: JSON.stringify({ id: tweetId, content: 'id-error' })
            })
            console.log('error')
        }
    }, [tweet])

    if (tweet.isLoading) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                {tweet.data?.text}
            </div>
        )
    }
}

export default TweetPage