simple:
	emcc hello.c -o hello.js
export:
	emcc -s EXPORTED_FUNCTIONS='["_minus"]' hello.c -o hello.js
clean:
	# clean output files
	rm hello.wasm hello.js