import React from 'react';
import Row from './Row';
import i18n from '../../i18n';

import type { ReactElement } from 'react';
import type { TableDataBodyRows } from '../../types';

import './styles.scss';

type DataTableBodyProps = {
  rows: TableDataBodyRows,
  numberOfColumnsForEmptyMessage?: number,
}

export default function DataTableBody (props : DataTableBodyProps): ReactElement {
  const { rows, numberOfColumnsForEmptyMessage } = props;

  return (
    <tbody>
      {rows.length ? (
        rows.map(
          (row, index) => <Row key={`${index}`}/>,
        )
      ) : (
        <tr>
          <td className='DataTableBody-Row no-data-to-display' colSpan={numberOfColumnsForEmptyMessage}>{i18n.get('no_table_data_rows_to_display')}</td>
        </tr>
      )}
      {/* <Row />
      <Row isTotalRow /> */}
    </tbody>
  );
}
