function groupBy<T extends Record<string, unknown>, U extends string>(
  array: T[],
  callbackFn: (item: T) => U,
) {
  const result: Partial<Record<U, T[]>> = {};

  const callbackReturns = [...new Set(array.map((item) => callbackFn(item)))];

  for (const callbackReturn of callbackReturns) {
    result[callbackReturn] = array.filter(
      (item) => callbackFn(item) === callbackReturn,
    );
  }

  return result as Record<U, T[]>;
}

export { groupBy };
