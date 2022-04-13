export interface Wallet {
  id: string;
  name: string;
  amount: number;
  currency: Currency;
}

export type Currency = 'USD' | 'PEN'
