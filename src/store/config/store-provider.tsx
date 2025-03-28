'use client'

import {Provider} from 'react-redux'
import {store} from '@/store/config'

export const StoreProvider = ({children}: {children: React.ReactNode}) => {
  return <Provider store={store}>{children}</Provider>
}