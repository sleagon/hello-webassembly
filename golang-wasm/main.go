package main

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"strings"
	"syscall/js"
)

const MAX_INT = 1e6

func gmd5(str []js.Value) {
	hasher := md5.New()
	hasher.Write([]byte(str[0].String()))
	md := hex.EncodeToString(hasher.Sum(nil))
	js.Global().Set("_gmd5_r1_", md)
	js.Global().Set("_gmd5_r2_", md)
}

func gdig(str []js.Value) {
	pfx := strings.Repeat("0", str[1].Int())
	r0 := str[0].String()
	var k int
	var md string
	for k = 0; k < MAX_INT; k++ {
		hasher := md5.New()
		hasher.Write([]byte(fmt.Sprintf("%d%s", k, r0)))
		md = hex.EncodeToString(hasher.Sum(nil))
		if strings.HasPrefix(md, pfx) {
			break
		}
	}
	js.Global().Set("_gdig_r0_", r0)
	js.Global().Set("_gdig_r1_", k)
	js.Global().Set("_gdig_r2_", md)
}

func main() {
	c := make(chan bool, 0)
	println("hello webassembly ")
	js.Global().Set("gdig", js.NewCallback(gdig))
	<-c
}
