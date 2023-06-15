import { salesOrdersTableConfig } from './config';
import i18n from '../i18n';

import type {
  BuildTableDataStructureReturnValue,
  RawTableData,
  TableDataHeaderRows,
  SalesOrdersTableConfig,
} from '../types';

function getEmptyTableDataStructure():BuildTableDataStructureReturnValue {
  return {
    headerRows: {
      columnGroupsLabels: {},
      columns: [],
    },
    bodyRows: [],
  };
}

function buildTableDataHeaderRows( rawTableData: RawTableData, config: SalesOrdersTableConfig ) {
  const { groupings } = config.tableToDataMapping;

  const structuredHeadersData: TableDataHeaderRows = {
    columnGroupsLabels: {},
    columns: [],
  };

  groupings.forEach((group) => {
    const { dataKeys, label, flattenKeysDataAndReplace} = group;

    if (flattenKeysDataAndReplace) {
      dataKeys.length = 0;
      dataKeys.push(...new Set(rawTableData.map((row) => row.state)));
    }

    structuredHeadersData.columnGroupsLabels[label] = dataKeys.length;
    structuredHeadersData.columns.push(...dataKeys.map((key) => i18n.get(key)));
  });

  return structuredHeadersData;
}

function buildTableDataBodyRows( rawTableData: RawTableData, config: SalesOrdersTableConfig ) {
  return [];
}

function buildTableDataStructure(rawTableData: RawTableData):BuildTableDataStructureReturnValue {
  const headerRows = buildTableDataHeaderRows(rawTableData, salesOrdersTableConfig);
  const bodyRows = buildTableDataBodyRows(rawTableData, salesOrdersTableConfig);

  return {
    headerRows,
    bodyRows,
  };
}

const defaultExport = {
  getEmptyTableDataStructure,
  buildTableDataStructure,
};

export default defaultExport;
