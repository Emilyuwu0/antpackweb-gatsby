import { Link } from 'gatsby'
import React from 'react'
import './button.scss'

interface buttonProps {
  text: string,
  to: string
}

export default function Button({ text, to }: buttonProps) {
  return (
    <Link className='button' to={to}>{text}</Link>
  )
}
