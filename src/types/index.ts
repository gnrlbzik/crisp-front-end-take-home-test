
type TableDataRow = {
  rowId: number,
  orderId: string,
  orderDate: string,
  shipDate: string,
  shipMode: string,
  customerId: string,
  customerName: string,
  segment: string,
  country: string,
  city: string,
  state: string,
  postalCode: number,
  region: string,
  productId: string,
  category: string,
  subCategory: string,
  productName: string,
  sales: number,
  quantity: number,
  discount: number,
  profit: number,
}

export type TableData = Array<TableDataRow>

export type I18nLocale = 'en_US' | 'es_MX'

type I18nLocaleStringId = string

type I18nLocaleStringValue = string

export type I18nStringsDefinition = {
  [key in I18nLocale]: {
    [key: I18nLocaleStringId]: I18nLocaleStringValue
  }
}
