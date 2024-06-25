import { revalidateTag } from 'next/cache'

export const UpdateUserCart = async () => {
  'use server'
  revalidateTag('user-cart')
}
