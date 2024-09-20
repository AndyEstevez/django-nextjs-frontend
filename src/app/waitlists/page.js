"use client"

import WaitlistTable from './table';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Page() {
  // GET REQUESTS
 
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <WaitlistTable/>
      
    </div>
  );
}
