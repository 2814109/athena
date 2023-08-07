import { ReactNode } from "react";
import { css } from "styled-system/css";
import { SpacingToken } from "styled-system/tokens";
import { ConditionalValue } from "styled-system/types";
import { Property } from "styled-system/types/csstype";

type Props = {
  children: ReactNode;
  size: ConditionalValue<
    | SpacingToken
    | Property.Padding<String | Number>
    | NonNullable<Property.Padding<String | Number> | undefined>[]
    | undefined
  >;
};

export const MarginContainer = ({ children, size }: Props) => (
  <div
    className={css({
      p: `${size}`,
    })}
  >
    {children}
  </div>
);
