// For returning tuples from promises
export const to = async <T>(promise: Promise<T>): Promise<[null, T] | [unknown, null]> => {
  try {
    return [null, await promise]
  } catch (err) {
    return [err, null]
  }
}
