/** @jsxImportSource @emotion/react */

import { css, useTheme } from "@emotion/react";
import React from "react";

const Loader = ({ loading, children }) => {
  const theme = useTheme();

  return (
    <>
      {loading ? (
        <div
          css={css`
            color: ${theme.color};
            text-align: center;
            padding-top: 20px 0;
          `}
        >
          {children}
        </div>
      ) : null}
    </>
  );
};

export default Loader;
