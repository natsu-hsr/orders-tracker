'use client'
import {useRouter} from 'next/navigation'
import {Input} from 'antd'

import s from './search-order-field.module.scss';

const {Search} = Input

export const SearchOrderField = () => {
  const router = useRouter()

  const handleSearch = (orderId: string) => {
    if (!orderId) return
    router.push(`/orders/${orderId}`)
  }

  return (
    <Search
      className={s.search}
      placeholder="Введите номер заказа"
      onSearch={handleSearch}
    />
  )
};
