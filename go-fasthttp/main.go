package main

import (
	"fmt"
	"time"

	"github.com/valyala/fasthttp"
)

func main() {
	fastHTTPHandler := func(ctx *fasthttp.RequestCtx) {
		time.Sleep(time.Second)
		fmt.Fprintln(ctx, "go-fasthttp")
	}
	fasthttp.ListenAndServe(":3000", fastHTTPHandler)
}
