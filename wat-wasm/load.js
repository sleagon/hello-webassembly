WebAssembly.instantiateStreaming(fetch('a.wasm')).then(obj => {
  alert(`1 + 2 = ${obj.instance.exports.add(1, 2)}`); // "3"
});
