function groupBy<T extends Record<string, unknown>>(
  array: ArrayLike<T>,
  key: keyof T,
) {
  const result: Partial<Record<string, T[]>> = {};

  const values = [...new Set(Array.from(array).map((item) => item[key]))];

  for (const value of values) {
    result[String(value)] = Array.from(array).filter(
      (item) => item[key] === value,
    );
  }

  return result as Record<string, T[]>;
}

export { groupBy };
