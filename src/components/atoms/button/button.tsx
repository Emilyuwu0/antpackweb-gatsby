import { Link } from 'gatsby'
import React from 'react'
import './button.scss'

interface buttonProps {
  text: string,
  to: string,
  color?: string
}

export default function Button({ text, to, color }: buttonProps) {
  return (
    <Link style={{ color: color, borderColor: color }} className='button' to={to}>{text}</Link>
  )
}
