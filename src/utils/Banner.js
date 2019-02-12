import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export default function Banner({ title, subtitle, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{subtitle}</h1>
      {children}
    </div>
  )
}
