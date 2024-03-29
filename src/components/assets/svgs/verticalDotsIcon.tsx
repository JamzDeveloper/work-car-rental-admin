import React from "react";

export const VerticalDotsIcon = (
  props: React.SVGProps<SVGSVGElement>
): JSX.Element => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="34"
    role="presentation"
    viewBox="0 0 24 24"
    width="34"
    {...props}
  >
    <path
      d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill={props.color ? props.color : "currentColor"}
    />
  </svg>
);
