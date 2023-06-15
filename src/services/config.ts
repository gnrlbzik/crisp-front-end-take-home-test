import { SalesOrdersTableConfig } from '../types';

export const salesOrdersTableConfig:SalesOrdersTableConfig = {
  styling: {
    tableRow: {},
    tableCell: {
      width: '10em',
    },
  },
  tableToDataMapping: {
    groupings: [
      {
        label: 'Products',
        dataKeys: [
          'category',
          'subCategory',
        ],
      },
      {
        label: 'States',
        dataKeys: ['state'],
        flattenKeysDataAndReplace: true,
      },
    ],
  },
};
