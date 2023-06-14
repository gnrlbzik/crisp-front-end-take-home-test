import React from 'react';

import type { ReactElement } from 'react';
import type { HeaderColumns } from '../../types';

import './styles.scss';

type DataTableHeaderProps = {
  headerColumns: HeaderColumns,
}

export default function DataTableHeader (props : DataTableHeaderProps): ReactElement {
  return (
    <>
      <tr className="DataTableHeader-row group-heading">
        <th colSpan={2}>cat a</th>
        <th colSpan={5}>cat b</th>
      </tr>
      <tr className="DataTableHeader-row column-heading">
        <th>col a</th>
        <th>col b</th>
        <th>col c</th>
        <th>col d</th>
        <th>col e</th>
        <th>col f</th>
        <th>col g</th>
      </tr>
    </>
  );
}
