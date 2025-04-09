"use client"

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useTweet } from "react-tweet";

export default function Home() {
  const searchParams = useSearchParams()
  const tweetId = searchParams.get('id') as string

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
