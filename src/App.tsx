import React, { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import ActivityIndicator from './components/ActivityIndicator';

import './App.scss';
import SALES_ORDERS_DATA from './data/sales-orders.json';

import type { ITableData } from './types';

function App() {
  const [ tableData, setTableData ] = useState<ITableData>([]);

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
        <ActivityIndicator labelText='Retrieving Products Data' />
      )}
    </div>
  );
}

export default App;
