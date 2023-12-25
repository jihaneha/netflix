
import { NextPageContext } from 'next'
import {getSession, signOut} from 'next-auth/react'



export default function Home() {
  return (
    <>
    <h1 className="text-4xl text-green-500">Netflix</h1>
    <button className='h-10 w-full bg-white' >Logout</button>
    </>
  )
}
