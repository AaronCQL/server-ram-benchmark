use actix_web::{get, rt::time::sleep, App, HttpResponse, HttpServer, Responder};
use std::time::Duration;

#[get("/")]
async fn echo() -> impl Responder {
    sleep(Duration::from_secs(1)).await;
    HttpResponse::Ok().body("rust-actix\n")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(echo))
        .bind(("127.0.0.1", 3000))?
        .run()
        .await
}
