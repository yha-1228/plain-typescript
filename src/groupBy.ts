/**
 * @example
 * ```ts
 * const frameworks = [
 *   { id: 1, name: 'CakePHP', language: 'PHP' },
 *   { id: 2, name: 'Larabel', language: 'PHP' },
 *   { id: 3, name: 'React', language: 'JavaScript' },
 *   { id: 4, name: 'Angular', language: 'JavaScript' },
 *   { id: 5, name: 'Vue', language: 'JavaScript' },
 *   { id: 6, name: 'Bootstrap', language: 'CSS' },
 * ];
 *
 * groupBy(frameworks, ({ language }) => language);
 *
 * // {
 * //   PHP: [
 * //     { id: 1, name: 'CakePHP', language: 'PHP' },
 * //     { id: 2, name: 'Larabel', language: 'PHP' }
 * //   ],
 * //   JavaScript: [
 * //     { id: 3, name: 'React', language: 'JavaScript' },
 * //     { id: 4, name: 'Angular', language: 'JavaScript' },
 * //     { id: 5, name: 'Vue', language: 'JavaScript' }
 * //   ],
 * //   CSS: [ { id: 6, name: 'Bootstrap', language: 'CSS' } ]
 * // }
 * ```
 */
function groupBy<T extends object, U extends string>(
  array: T[],
  callbackFn: (item: T) => U,
) {
  const result: Partial<Record<U, T[]>> = {};

  const callbackReturns = [...new Set(array.map(callbackFn))];

  for (const callbackReturn of callbackReturns) {
    result[callbackReturn] = array.filter(
      (item) => callbackFn(item) === callbackReturn,
    );
  }

  return result as Record<U, T[]>;
}

export { groupBy };
