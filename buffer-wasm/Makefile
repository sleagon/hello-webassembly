simple:
	emcc hello.c -o hello.js
export:
	emcc -s EXPORTED_FUNCTIONS='["_uuid","_cal"]' hello.c -o hello.js
standalone:
	emcc -s EXPORTED_FUNCTIONS='["_uuid","_cal"]'  -s WASM=1 -s SIDE_MODULE=1 hello.c -o hello.wasm
clean:
	# clean output files
	rm hello.wasm hello.js
