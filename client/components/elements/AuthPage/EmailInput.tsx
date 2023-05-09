import React from 'react'
import { IAuthPageInput } from '@/types/auth'
import styles from '@/styles/auth/index.module.scss'

const EmailInput = ({ register, errors }: IAuthPageInput) => (
  <label className={styles.form__label}>
    <input
      {...register('email', {
        required: 'Enter email',
        pattern: {
          value:
            /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/,
          message: 'incorrect e-mail address',
        },
      })}
      className={styles.form__input}
      type="email"
      placeholder="Email"
    />
    {errors.email && (
      <span className={styles.error_alert}>{errors.name?.message}</span>
    )}
  </label>
)

export default EmailInput
