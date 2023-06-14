
import type { BuildTableDataStructureReturnValue, RawTableData } from '../types';

function getEmptyTableDataStructure():BuildTableDataStructureReturnValue {
  return {
    headerColumns: [],
  };
}

function buildTableDataStructure(rawTableData: RawTableData):BuildTableDataStructureReturnValue {
  return {
    headerColumns: [
      {
        columnName: 'Column A', columnGroupName: 'Group A',
      },
      {
        columnName: 'Column B', columnGroupName: 'Group A',
      },
      {
        columnName: 'Column C', columnGroupName: 'Group B',
      },
      {
        columnName: 'Column D', columnGroupName: 'Group B',
      },
      {
        columnName: 'Column E', columnGroupName: 'Group B',
      },
      {
        columnName: 'Column F', columnGroupName: 'Group B',
      },
    ],
  };
}

const defaultExport = {
  getEmptyTableDataStructure,
  buildTableDataStructure,
};

export default defaultExport;
