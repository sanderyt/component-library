import React, { FC } from "react";

import "./Spinner.scss";

interface Props {}

export const Spinner: FC<Props> = () => {
  return <div className="loader" />;
};
