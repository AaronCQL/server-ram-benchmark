use rocket::tokio::time::{sleep, Duration};

#[macro_use]
extern crate rocket;

#[get("/")]
async fn index() -> &'static str {
    sleep(Duration::from_secs(1)).await;
    "rust-rocket\n"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
