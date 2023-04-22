use std::io::Write;
use std::net::{Shutdown, TcpListener};
use std::thread;
use std::time::Duration;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:3000").unwrap();
    for stream in listener.incoming() {
        thread::spawn(move || {
            thread::sleep(Duration::from_secs(1));
            let response =
                b"HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\n\r\nrust-vanilla\r\n";
            let mut stream = stream.unwrap();
            stream.write(response).unwrap();
            stream.shutdown(Shutdown::Write).unwrap();
        });
    }
}
