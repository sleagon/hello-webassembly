simple:
	emcc hello.c -o hello.js
export:
	emcc -s EXPORTED_FUNCTIONS='["_uuid"]' hello.c -o hello.js
standalone: source
	emcc -s EXPORTED_FUNCTIONS='["_uuid"]'  -s WASM=1 -s SIDE_MODULE=1 hello.c -o hello.wasm
clean:
	# clean output files
	rm hello.wasm hello.js
source:
	source ~sion/workspace/ali/webassembly/emsdk/emsdk_env.sh