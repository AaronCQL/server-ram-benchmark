# Server RAM Usage Benchmark

This benchmark compares RAM usage across different frameworks under a constant (but naive) load.

- Only one single endpoint is exposed at `http://localhost:3000` which returns the framework name
- Endpoint will sleep for 1 second before responding to simulate doing async background tasks

## Results

| Framework | Idle | 500 QPS |
|---|---|---|
| `node-vanilla` | 41 MB | 89 MB |
| `node-uwebsocketjs` | 43 MB | 49 MB |
| `node-hyperexpress` | 48 MB | 56 MB |
| `node-express` | 55 MB | 93 MB |
| `node-fastify` | 53 MB | 97 MB |
| `bun-vanilla` | 35 MB | 120++ MB |
| `bun-elysia` | 53 MB | 120++ MB |
| `go-vanilla` | 4.7 MB | 17 MB |
| `go-fasthttp` | 4.7 MB | 13 MB |
| `go-fiber` | 6.1 MB | 14 MB |
| `go-gin` | 9.7 MB | 25 MB |
| `rust-vanilla` | 1.7 MB | 4.5 MB |
| `rust-actix` | 4.2 MB | 10 MB |
| `rust-rocket` | 5.1 MB | 20 MB |

- `node`: under load, RAM usage rises from idle, but stabilises near the max (+- a few MB)
- `bun`: under load, RAM usage constantly rises from idle, and doesn't seem to stabilise (tests were stopped after ~5 mins)
- `go`: similar behaviour to `node`
- `rust`: RAM usage is stable under load (ie. doesn't fluctuate)

## Replicate

- `node`: run with `node index.js`
- `bun`: run with `bun index.js`
- `go`: run with `go build main.go && ./main`
- `rust`: run with `cargo run --release`

```sh
# Run the following script to start hitting the server at 500 QPS
./query.sh 500

# Run the following to poll the RAM usage of the process
./ram.sh <process name>
```
