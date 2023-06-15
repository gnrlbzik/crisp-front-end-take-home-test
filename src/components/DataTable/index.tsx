import React, { useEffect, useState } from 'react';
import ActivityIndicator from '../ActivityIndicator';
import Header from './Header';
import Body from './Body';
import i18n from '../../i18n';

import services from '../../services';

import type { ReactElement } from 'react';
import type { BuildTableDataStructureReturnValue, RawTableData } from '../../types';

import './styles.scss';

type DataTableProps = {
  rawTableData: RawTableData,
}

export default function DataTable (props : DataTableProps): ReactElement {
  const { rawTableData } = props;

  const [ tableData, setTableData ] = useState<BuildTableDataStructureReturnValue>(services.getEmptyTableDataStructure());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTableData(services.buildTableDataStructure(rawTableData));
    }, 1000);
    return () => clearTimeout(timer);
  }, [ rawTableData ]);

  return (
    tableData.headerRows.columns.length ? (
      <table className="DataTable-container">
        <Header rows={tableData.headerRows} />
        <Body rows={tableData.bodyRows} />
      </table>
      ) : (
      <ActivityIndicator labelText={i18n.get('prepping_data')} />
    )    
  );
}