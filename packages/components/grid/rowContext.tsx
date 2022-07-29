import type { Context } from 'react'
import { createContext } from 'react'
import { Gap } from '@/types/row'

export interface RowContextState {
  gutter?: [Gap, Gap]
}

const RowContext: Context<RowContextState> = createContext({})

export default RowContext
