import React, { ReactElement } from 'react';

const PriorityHighRounded = (): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#01459E"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <circle cx="12" cy="19" r="2" />
      <path d="M12 3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2s2-.9 2-2V5c0-1.1-.9-2-2-2z" />
    </svg>
  );
};

export { PriorityHighRounded };
