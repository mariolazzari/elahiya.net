import { ReactNode } from "react";

export type Layout = Readonly<{
  children: ReactNode;
  params: {
    locale: string;
  };
}>;
