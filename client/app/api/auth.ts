import { createEffect } from 'effector'
import { ISignInFx, ISignUpFx } from '../../types/auth'
import api from '../axiosClient'
import { toast } from 'react-toastify'
import { HTTPStatus } from '@/constans'
import { AxiosError } from 'axios'

export const signUpFx = createEffect(
  async ({ url, username, password, email }: ISignUpFx) => {
    const { data } = await api.post(url, { username, password, email })

    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return
    }

    toast.success('registration completed successfully')
    return data
  }
)

export const signInFx = createEffect(
  async ({ url, username, password }: ISignInFx) => {
    const { data } = await api.post(url, { username, password })

    toast.success('logged in')
    return data
  }
)

export const checkUserAuthFx = createEffect(async (url: string) => {
  try {
    const { data } = await api.get(url)
    return data
  } catch (error) {
    const axiosError = error as AxiosError

    if (axiosError.response) {
      if (axiosError.response.status === HTTPStatus.FORBIDDEN) {
        return false
      }
    }
    toast.error((error as Error).message)
  }
})

export const logoutFx = createEffect(async (url: string) => {
  try {
    await api.get(url)
  } catch (error) {
    toast.error((error as Error).message)
  }
})
