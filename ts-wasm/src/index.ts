// You may need a appropriate memory manager
// take a look at this issue: https://github.com/AssemblyScript/assemblyscript/issues/15

import "allocator/tlsf";
// i32 is supported by assembly
export function add(x: i32, y: i32): i32 {
  return x + y;
}

export function newA(a: f64, b: f64, c: f64): f64[] {
  return [a, b, c];
}
