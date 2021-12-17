import React from 'react'
import styles from './button.module.css'

export const Button = ({name, classes}) => {
  return (
    <button className={`${styles.BtnPrimary} ${classes}`}>
      <span>{name}</span>
    </button>
  )
}
