"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useTweet } from "react-tweet";

export default function Home() {
  const searchParams = useSearchParams()
  const tweetId = searchParams.get('id') as string

  if (!tweetId) {
    return <div>error</div>
  }

  const tweet = useTweet(tweetId)

  useEffect(() => {
    if (tweet.isLoading) return
    else if (tweet.data?.text) {
      console.log(tweet.data)
    } else {
      console.log('error')
    }
  }, [tweet])

  if (tweet.isLoading) {
    return <div>Loading...</div>
  } else {
    return (
      <div id='tweet-body'>
        {JSON.stringify(tweet.data) || 'error'}
      </div>
    )
  }
}
