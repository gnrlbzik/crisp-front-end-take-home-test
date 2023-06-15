import React from 'react';
import Row from './Row';

import type { ReactElement } from 'react';

import './styles.scss';

type DataTableBodyProps = {}

export default function DataTableBody ({} : DataTableBodyProps): ReactElement {
  return (
    <>
      <Row />
      <Row />
      <Row />
      <Row isTotalRow />
      <Row />
      <Row />
    </>
  );
}
