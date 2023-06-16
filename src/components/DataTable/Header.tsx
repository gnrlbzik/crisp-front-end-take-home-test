import React from 'react';

import type { ReactElement } from 'react';
import type { TableDataHeaderRows } from '../../types';

import './styles.scss';

type DataTableHeaderProps = {
  rows: TableDataHeaderRows,
}

export default function DataTableHeader (props : DataTableHeaderProps): ReactElement {
  const { rows: { columnGroupsLabels, columns } } = props;
  const groupLabels = Object.keys(columnGroupsLabels);

  return (
    <thead>
      <tr className="DataTableHeader-row group-heading">
        {groupLabels.map(
          (label) => <th colSpan={columnGroupsLabels[label]}>{label}</th>,
        )}
      </tr>
      <tr className="DataTableHeader-row column-heading">
        {columns.map(
          (column) => <th>{column}</th>,
        )}
      </tr>
    </thead>
  );
}
