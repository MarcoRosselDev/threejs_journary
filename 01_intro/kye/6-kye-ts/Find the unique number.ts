export function findUniq(arr: number[]): number {
  // Do the magic
  arr = arr.sort((a, b) => a - b)
  return arr[0] === arr[1]? arr[arr.length - 1]: arr[0]
}

/* assert.strictEqual(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
    assert.strictEqual(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55); */