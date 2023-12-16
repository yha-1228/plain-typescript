/**
 * オブジェクトの配列を特定のキーでグルーピングする。
 *
 * @example
 * ```ts
 * const menus = [
 *   { id: 1, type: 'meat', name: '牛丼' },
 *   { id: 2, type: 'fish', name: '海鮮丼' },
 *   { id: 3, type: 'meat', name: '牛皿' },
 *   { id: 4, type: 'fish', name: '刺身' },
 * ];
 *
 * const grouped = groupBy(menus, 'type');
 * // output:
 * //
 * // {
 * //   meat: [
 * //     { id: 1, type: 'meat', name: '牛丼' },
 * //     { id: 3, type: 'meat', name: '牛皿' }
 * //   ],
 * //   fish: [
 * //     { id: 2, type: 'fish', name: '海鮮丼' },
 * //     { id: 4, type: 'fish', name: '刺身' }
 * //   ]
 * // }
 * ```
 */
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
