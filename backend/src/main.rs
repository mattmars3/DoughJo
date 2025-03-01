mod user_routes;
mod application_state;
mod transactions;
mod ideal_budget;

use application_state::{initialize_application_state, ApplicationState};
use axum::{
    Router,
    routing::{get, post}
};
use user_routes::{create_user, hello_route, login_user};

use std::sync::Arc;
use tokio::sync::Mutex;

#[tokio::main]
async fn main() {

    let application_state: Arc<Mutex<ApplicationState>> = initialize_application_state().await;

    let application = Router::new()
        .without_v07_checks()
        .route("/", get(hello_route))
        .route("/user/create", post(create_user))
        .route("/user/login", post(login_user))

        .with_state(application_state);

    // run our app with hyper, listening globally on port 3333
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3333").await.unwrap();
    axum::serve(listener, application).await.unwrap();
}
