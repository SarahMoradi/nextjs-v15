import {Size} from './size.type'
import {Varient} from './varient.type'

export type ComponentBase = {
  isDisabled?: boolean
  className?: string
  varient?: Varient
  size?: Size
}
