import React from 'react';

import type { ReactElement } from 'react';

type DataTableProps = {}

export default function DataTable ({} : DataTableProps): ReactElement {
  const someValue = 'boom';

  return (
    <>
    
      This will be table
 
      <table>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>

      Header | Header
      Category Group | Category Group
    
    </>
  );
}