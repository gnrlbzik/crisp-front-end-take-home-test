import React from 'react';

import type { ReactElement } from 'react';

import './styles.scss';


type ActivityIndicatorProps = {
  labelText?: string,
}

export default function ActivityIndicator ({ labelText } : ActivityIndicatorProps): ReactElement {
  return (
    <div className="ActivityIndicator-container">
      <div className="activity-progress-indicator"><div></div><div></div><div></div><div></div></div>
      <div className="activity-indicator-label">{labelText}</div>
    </div>
  );
}
