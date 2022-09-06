export type FetchersObj<T extends string> = {
  [K in T]?: () => any 
}

export interface ConfigObj<T extends string> {
  routes: T[];
  fetchers: FetchersObj<T>;
}

const makeConfigObj = <T extends string>(config: ConfigObj<T>) => config;

export const configObj = makeConfigObj({
  routes: ["/", "/about", "/contact"],
  /**
   * fetchers is an object where you can optionally
   * pass keys that match the route names.
   *
   * BUT - how do we prevent the user from passing
   * fetchers that don't exist in the routes array?
   */
  fetchers: {
    // @ts-expect-error
    "/does-not-exist": () => {
      return {};
    },
  },
});
