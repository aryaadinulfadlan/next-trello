import { Card, List } from "@prisma/client";
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

export type ListWithCards = List & { cards: Card[] };
export type CardWithLists = Card & { list: List };

export enum ACTION {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}
export enum ENTITY_TYPE {
  BOARD = "BOARD",
  LIST = "LIST",
  CARD = "CARD",
}
