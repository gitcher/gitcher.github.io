import React, {Component} from 'react'
import style, {StyleProps} from 'react-html-classes'

import styles from './Input.module.scss'

export interface InputStyles {
  root: any
  input: any
  label: any
}

export interface InputProps extends StyleProps<InputStyles> {
  value: string
  onChange: (value: string) => any
  type?: string
  before?: string
  after?: string
}

@style(styles)
class Input extends Component <InputProps> {
  onChange (value: string) {
    const {onChange} = this.props
    if (onChange) {
      onChange(value)
    }
  }
  get before () {
    const {before} = this.props
    return before ? (
      <span className={styles.before}>
        {before}
      </span>
    ) : null
  }
  get after () {
    const {after} = this.props
    return after ? (
      <span className={styles.after}>
        {after}
      </span>
    ) : null
  }
  get label () {
    const {children} = this.props
    return children ? (
      <span className={styles.label}>
        {children}
      </span>
    ) : null
  }
  render () {
    const {type, value} = this.props

    return (
      <label className={styles.root}>
        <input
          type={type}
          value={value}
          onChange={e => this.onChange(e.target.value)}
          data-value={value}
          className={styles.input}
        />
        {this.label}
        {this.before}
        {this.after}
      </label>
    )
  }
}

export default Input
