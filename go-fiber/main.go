package main

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	app.Get("/", func(c *fiber.Ctx) error {
		time.Sleep(time.Second)
		return c.SendString("go-fiber\n")
	})
	app.Listen(":3000")
}
