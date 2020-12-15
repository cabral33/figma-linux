import * as React from "react";

import { IconProps } from "..";
import "../index.scss";

export const Folder: React.FunctionComponent<IconProps> = props => {
  const size = props.size ? props.size : "16";
  const color = props.color ? props.color : "#333333";

  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1" fill="white">
        <path d="M13.4 13.3333H2.6C2.44096 13.333 2.28851 13.2705 2.17605 13.1594C2.06359 13.0484 2.00028 12.8978 2 12.7407V3.25925C2.00028 3.10217 2.06359 2.9516 2.17605 2.84053C2.28851 2.72946 2.44096 2.66694 2.6 2.66666H7.26773C7.51573 2.66666 7.728 2.8152 7.8192 3.02748L7.8208 3.03117L8.33333 4.2469H13.4C13.559 4.24718 13.7115 4.30971 13.824 4.42078C13.9364 4.53185 13.9997 4.68242 14 4.8395V12.7407C13.9997 12.8978 13.9364 13.0484 13.824 13.1594C13.7115 13.2705 13.559 13.333 13.4 13.3333ZM2.8 12.5432H13.2V5.03703H7.8L7.13333 3.45678H2.8V12.5432Z" />
      </mask>
      <path
        d="M13.4 13.3333V14.3333L13.4018 14.3333L13.4 13.3333ZM2.6 13.3333L2.59825 14.3333H2.6V13.3333ZM2 12.7407H0.999998L1 12.7425L2 12.7407ZM2 3.25925L1 3.25745V3.25925H2ZM2.6 2.66666V1.66665L2.59825 1.66666L2.6 2.66666ZM7.8192 3.02748L6.9004 3.42222L6.90181 3.42547L7.8192 3.02748ZM7.8208 3.03117L8.74231 2.64267L8.73819 2.63318L7.8208 3.03117ZM8.33333 4.2469L7.41187 4.63538L7.66968 5.2469H8.33333V4.2469ZM13.4 4.2469L13.4018 3.2469H13.4V4.2469ZM14 4.8395H15L15 4.8377L14 4.8395ZM14 12.7407L15 12.7425V12.7407H14ZM2.8 12.5432H1.8V13.5432H2.8V12.5432ZM13.2 12.5432V13.5432H14.2V12.5432H13.2ZM13.2 5.03703H14.2V4.03703H13.2V5.03703ZM7.8 5.03703L6.87864 5.42573L7.13653 6.03703H7.8V5.03703ZM7.13333 3.45678L8.0547 3.06808L7.79681 2.45678H7.13333V3.45678ZM2.8 3.45678V2.45678H1.8V3.45678H2.8ZM13.4 12.3333H2.6V14.3333H13.4V12.3333ZM2.60175 12.3333C2.70334 12.3335 2.80318 12.3733 2.87875 12.448L1.47335 13.8709C1.77383 14.1677 2.17857 14.3326 2.59825 14.3333L2.60175 12.3333ZM2.87875 12.448C2.95473 12.523 2.9998 12.6274 3 12.7389L1 12.7425C1.00077 13.1682 1.17244 13.5737 1.47335 13.8709L2.87875 12.448ZM3 12.7407V3.25925H1V12.7407H3ZM3 3.26104C2.9998 3.37259 2.95473 3.47697 2.87875 3.55202L1.47335 2.12905C1.17244 2.42624 1.00077 2.83175 1 3.25745L3 3.26104ZM2.87875 3.55202C2.80318 3.62665 2.70334 3.66648 2.60175 3.66665L2.59825 1.66666C2.17857 1.66739 1.77384 1.83227 1.47335 2.12905L2.87875 3.55202ZM2.6 3.66666H7.26773V1.66666H2.6V3.66666ZM7.26773 3.66666C7.10699 3.66666 6.96338 3.56881 6.9004 3.42221L8.738 2.63275C8.49262 2.06159 7.92448 1.66666 7.26773 1.66666V3.66666ZM6.90181 3.42547L6.90341 3.42916L8.73819 2.63318L8.73659 2.62949L6.90181 3.42547ZM6.89934 3.41964L7.41187 4.63538L9.25479 3.85843L8.74226 2.64269L6.89934 3.41964ZM8.33333 5.2469H13.4V3.2469H8.33333V5.2469ZM13.3982 5.2469C13.2967 5.24672 13.1968 5.2069 13.1213 5.13226L14.5267 3.70929C14.2262 3.41251 13.8214 3.24764 13.4018 3.2469L13.3982 5.2469ZM13.1213 5.13226C13.0453 5.05722 13.0002 4.95284 13 4.84129L15 4.8377C14.9992 4.41199 14.8276 4.00648 14.5267 3.70929L13.1213 5.13226ZM13 4.8395V12.7407H15V4.8395H13ZM13 12.7389C13.0002 12.6274 13.0453 12.523 13.1213 12.448L14.5267 13.8709C14.8276 13.5737 14.9992 13.1682 15 12.7425L13 12.7389ZM13.1213 12.448C13.1968 12.3733 13.2967 12.3335 13.3982 12.3333L13.4018 14.3333C13.8214 14.3326 14.2262 14.1677 14.5267 13.8709L13.1213 12.448ZM2.8 13.5432H13.2V11.5432H2.8V13.5432ZM14.2 12.5432V5.03703H12.2V12.5432H14.2ZM13.2 4.03703H7.8V6.03703H13.2V4.03703ZM8.72136 4.64833L8.0547 3.06808L6.21197 3.84548L6.87864 5.42573L8.72136 4.64833ZM7.13333 2.45678H2.8V4.45678H7.13333V2.45678ZM1.8 3.45678V12.5432H3.8V3.45678H1.8Z"
        fill={color}
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
};