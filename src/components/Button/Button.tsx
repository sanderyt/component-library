import React, { FC } from "react";

import "./Button.scss";

interface Props {
  children: string;
  clickHandler: () => void;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isDelete?: boolean;
  isLoading?: boolean;
}

export const Button: FC<Props> = ({
  children,
  clickHandler,
  isPrimary,
  isSecondary,
  isDelete,
  isLoading
}) => {
  const primaryClass = isPrimary && "button--primary";
  const secondaryClass = isSecondary && "button--secondary";
  const deleteClass = isDelete && "button--delete";
  const classes = `button ${primaryClass} ${secondaryClass} ${deleteClass}`;

  return (
    <button onClick={clickHandler} className={classes}>
      {children}
    </button>
  );
};
