WebAssembly.instantiateStreaming(fetch('lib/index.wasm')).then(obj => {
  alert(`1 + 2 = ${obj.instance.exports.add(1, 2)}`); // "3"
  const pA = obj.instance.exports.newA(1, 97, 222);
  const offset = pA >> 3;
  console.log(offset, obj.instance.exports);
  var exports = obj.instance.exports;
  var mem = new Float64Array(exports.memory.buffer);
  const a = mem[offset + 1];
  const b = mem[offset + 2]
  const c = mem[offset + 3]
  console.log(a, b ,c);
});
