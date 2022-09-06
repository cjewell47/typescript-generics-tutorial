/**
 * How can we refactor these to reduce the duplication
 * in the 'data' declaration?
 */

import { Equal, Expect } from "./helpers/type-utils";

export interface DataObj<TData> {
  data: TData;
}

export type UserData = DataObj<{
  id: string;
  firstName: string;
  lastName: string;
}>;

export type PostData = DataObj<{
  title: string;
}>;

export type CommentData = DataObj<{
  comment: string;
}>;

type tests = [
  Expect<
    Equal<
      UserData,
      {
        data: {
          id: string;
          firstName: string;
          lastName: string;
        };
      }
    >
  >,
  Expect<
    Equal<
      PostData,
      {
        data: {
          title: string;
        };
      }
    >
  >,
  Expect<
    Equal<
      CommentData,
      {
        data: {
          comment: string;
        };
      }
    >
  >,
];
