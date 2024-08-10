import { ReactNode } from "react";

export interface ILayout {
  children: ReactNode;
}

export interface ILayoutWithParams<T> {
  children: ReactNode;
  params: T;
}

export interface IPageWithParams<TParams, TSearchParams> {
  params: TParams;
  searchParams: TSearchParams;
}
