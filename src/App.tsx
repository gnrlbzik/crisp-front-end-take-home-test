import React, { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import ActivityIndicator from './components/ActivityIndicator';

import i18n from './i18n';
import './App.scss';
import SALES_ORDERS_DATA from './data/sales-orders.json';

import type { TableData } from './types';

function App() {
  const [ tableData, setTableData ] = useState<TableData>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTableData(SALES_ORDERS_DATA);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App-container">
      {tableData.length ? (
        <DataTable />
        ) : (
        <ActivityIndicator labelText={i18n.get('fetching_data')} />
      )}
    </div>
  );
}

export default App;
