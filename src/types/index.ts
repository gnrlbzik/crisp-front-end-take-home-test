import type { CSSProperties } from 'react';

export type RawTableDataRow = {
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

export type RawTableData = Array<RawTableDataRow>

export type I18nLocale = 'en_US' | 'es_MX'

type I18nLocaleStringId = string

type I18nLocaleStringValue = string

export type I18nStringsDefinition = {
  [key in I18nLocale]: {
    [key: I18nLocaleStringId]: I18nLocaleStringValue
  }
}

export type TableDataHeaderRows = {
  columnGroupsLabels: any, // FIXME: add proper typings, bad juju
  columns: Array<string>,
}

export type TableDataBodyRows = Array<{columnName: string, columnGroupName: string,}>

export type BuildTableDataStructureReturnValue = {
  headerRows: TableDataHeaderRows,
  bodyRows: TableDataBodyRows,
}

export type SalesOrdersTableConfig = {
  styling: {
    tableRow: CSSProperties,
    tableCell: CSSProperties,
  },
  tableToDataMapping: {
    groupings: Array<{
      label: string,
      dataKeys: Array<string>,
      flattenKeysDataAndReplace?: boolean,
    }>,
  }
}