import type { UseFetchOptions } from "nuxt/app";

export function useAPI<T>(
  url: string | (() => string),
  options?: UseFetchOptions<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watchParams?: any[],
) {
  return useFetch(url, {
    lazy: true,
    ...options,
    $fetch: useNuxtApp().$api,
    watch: watchParams,
  });
}
