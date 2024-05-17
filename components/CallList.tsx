"use client"

import { useGetCalls } from '@/hooks/useGetCalls';
import React from 'react'

const CallList = ({ type }: { type: 'ended' | 'upcoming' | 'recordings' }) => {
  const { endedCalls, upcomingCalls, callRecordings, isLoading} = useGetCalls();

  const router = useRouter

  return (
    <div>CallList</div>
  )
}

export default CallList