import { salesOrdersTableConfig } from './config';
import i18n from '../i18n';

import type {
  BuildTableDataStructureReturnValue,
  RawTableData,
  RawTableDataRow,
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
    const { columnDataKeys, label, flattenColumnKeysDataAndReplace} = group;

    if (flattenColumnKeysDataAndReplace) {
      const columnDataKeysCopyToIterate: Array<string> = [...columnDataKeys];

      columnDataKeys.length = 0;
      columnDataKeysCopyToIterate.forEach((key: string) => {
        const matchedKeyDataToFlatten = rawTableData.map((row: RawTableDataRow) => {
          // FIXME: casted row as any to temporary fix ts(7053)
          return (row as any)[key];
        });
        
        columnDataKeys.push(...new Set(matchedKeyDataToFlatten));
      });
    }

    structuredHeadersData.columnGroupsLabels[label] = columnDataKeys.length;
    structuredHeadersData.columns.push(...columnDataKeys.map((key) => i18n.get(key)));
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
