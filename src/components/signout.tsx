import { Button } from '@nextui-org/button'
import { signOut } from 'next-auth/react'
import React from 'react'

type Props = {}

export default function Signout({}: Props) {
  return (
    <><Button onClick={()=> signOut()}>Sign Out</Button></>
  )
}

