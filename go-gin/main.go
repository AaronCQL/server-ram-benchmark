package main

import (
	"time"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	r.GET("/", func(c *gin.Context) {
		time.Sleep(time.Second)
		c.String(200, "go-gin\n")
	})
	r.Run(":3000")
}
