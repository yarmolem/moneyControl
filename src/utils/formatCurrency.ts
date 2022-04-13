import { Currency } from '../interfaces'

interface Props {
  currency: Currency
  amount: number
}

export const formatCurrency = ({ currency, amount }: Props) => {
  return new Intl.NumberFormat('en-EN', {style: 'currency', currency}).format(
    amount
  )
}