build:
	# build application
	GOOS=js GOARCH=wasm go build -o main.wasm -ldflags='-s -w' ./main.go
clean:
	# clean output files
	rm main.wasm