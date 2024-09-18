"use client"

import { useAuth } from '@/components/authProvider';
import { useEffect } from 'react';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const WAITLIST_API_URL = "/api/waitlists/"

export default function Page() {
  // GET REQUESTS
  const {data, error, isLoading} = useSWR(WAITLIST_API_URL, fetcher)
  const auth = useAuth()

  useEffect(() => {
    if (error?.status === 401){
      auth.loginRequiredRedirect()
    }
  }, [auth, error])
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        {JSON.stringify(data)}
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </div>
  );
}
