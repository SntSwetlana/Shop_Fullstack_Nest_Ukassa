import React from 'react'
import { IAuthPageInput } from '@/types/auth'
import styles from '@/styles/auth/index.module.scss'

const NameInput = ({ register, errors }: IAuthPageInput) => (
  <label className={styles.form__label}>
    <input
      {...register('name', {
        required: 'Enter name',
        minLength: 2,
        maxLength: 15,
        pattern: {
          value: /^[a-zA-Zа-яА-Я0-9!@#$%&-_]*$/,
          message: 'incorrect symbols',
        },
      })}
      className={styles.form__input}
      type="text"
      placeholder="Name"
    />
    {errors.name && (
      <span className={styles.error_alert}>{errors.name?.message}</span>
    )}
    {errors.name && errors.name.type === 'minLength' && (
      <span className={styles.error_alert}>2 symbols min!</span>
    )}
    {errors.name && errors.name.type === 'maxLength' && (
      <span className={styles.error_alert}>more than 15 symbols!</span>
    )}
  </label>
)

export default NameInput
