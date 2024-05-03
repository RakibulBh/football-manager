import React from 'react'
import Team from './team-icon'

export default function MatchSummary() {
  return (
    <div className='lg:max-w-[560px] flex justify-between items-center'>
        <Team imageUrl='/inter.png' />
        <div className='gap-y-3 flex flex-col items-center text-center'>
            <p className='text-sm font-semibold lg:font-bold'>
            last match 07/05/2024
            </p>
            <p className='text-4xl lg:text-6xl font-bold'>1 : 0</p>
        </div>
        <Team imageUrl='/inter.png' />
    </div>
  )
}
