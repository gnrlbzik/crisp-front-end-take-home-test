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
        columnDataKeys: [
          'category',
          'subCategory',
        ],
      },
      {
        label: 'States',
        columnDataKeys: ['state'],
        flattenColumnKeysDataAndReplace: true,
      },
    ],
  },
};
