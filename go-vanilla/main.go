package main

import (
	"net/http"
	"time"
)

func main() {
	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		time.Sleep(time.Second)
		w.Write([]byte("go-vanilla\n"))
	})
	http.HandleFunc("/", handler)
	http.ListenAndServe(":3000", nil)
}
