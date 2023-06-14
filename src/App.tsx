import React, { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import ActivityIndicator from './components/ActivityIndicator';

import i18n from './i18n';
import './App.scss';
import SALES_ORDERS_DATA from './data/sales-orders.json';

import type { RawTableData } from './types';

function App() {
  const [ rawTableData, setRawTableData ] = useState<RawTableData>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRawTableData(SALES_ORDERS_DATA);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App-container">
      {rawTableData.length ? (
        <DataTable rawTableData={rawTableData} />
        ) : (
        <ActivityIndicator labelText={i18n.get('fetching_data')} />
      )}
    </div>
  );
}

export default App;
