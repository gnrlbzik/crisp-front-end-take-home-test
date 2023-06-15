import React from 'react';
import Cell from './Cell';

import type { ReactElement } from 'react';

import './styles.scss';

type DataTableRowProps = {
  isTotalRow?: boolean,
  cellsCollection?: Array<string>,
}

export default function DataTableRow ({
  isTotalRow = false,
  cellsCollection = [],
} : DataTableRowProps): ReactElement {

  const cssClasses = ([
    'DataTableBody-Row',
    (isTotalRow ? 'display-as-total-row' : null),
  ]).join(' ');

  return (
    <tr className={cssClasses}>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </tr>
  );
}
