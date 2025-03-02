use axum::{extract::Query, response::IntoResponse, Json};
use neo4rs::Id;
use serde::{Deserialize, Serialize};
use serde_json::Value;
use tokio::sync::Mutex;
use std::{collections::HashMap, sync::Arc};

use crate::application_state::ApplicationState;

pub fn give_labels() -> Vec<String> {
    vec!["Needs", "Wants", "Savings", "Food and Drink", "Rent and Utilities", "Transportation", "Entertainment", "Personal Care", "General Merchandise", "Travel", "Loan Payment"].into_iter().map(|item| item.to_string()).collect::<Vec<String>>()
}

pub fn give_parents() -> Vec<String> {
    vec!["Needs", "Wants", "Savings", "Needs", "Needs", "Needs", "Wants", "Wants", "Wants", "Wants", "Savings"]
        .into_iter()
        .map(|item| item.to_string())
        .collect()
}

fn give_values(income: i32, debt: i32) -> Vec<f64> {
    let mut n = 0.0;
    let mut w = 0.0;
    let mut s = 0.0;

    let mut h = 0.0;
    let mut f = 0.0;
    let mut tran = 0.0;

    let mut e = 0.0;
    let mut p = 0.0;
    let mut g = 0.0;
    let mut trav = 0.0;

    let mut repay = 0.0;
        
    if income <= 10000 {
        n = 0.7 * income as f64;
    }
    else if income <= 50000 {
        n = (0.5 * (income as f64 - 10000.0)) + 7000.0;
    }
    else if income <= 100000 {
        n = (0.4 * (income as f64 - 50000.0)) + 27000.0;
    }
    else if income <= 250000 {
        n = (0.35 * (income as f64 - 100000.0)) + 47000.0;
    }
    else {
        n = (0.3 * (income as f64 - 250000.0)) + 99500.0;
    }


    if income <= 10000 {
        w = 0.1 * income as f64;
    }
    else if income <= 50000 {
        w = (0.3 * (income as f64 - 10000.0)) + 1000.0;
    }
    else if income <= 100000 {
        w = (0.35 * (income as f64 - 50000.0)) + 13000.0;
    }
    else {
        w = (0.25 * (income as f64 - 100000.0)) + 30500.0;
    }

    if income <= 50000 {
        s = 0.2 * income as f64;
    }
    else if income <= 100000 {
        s = (0.25 * (income as f64 - 50000.0)) + 10000.0;
    }
    else if income <= 250000 {
        s = (0.4 * (income as f64 - 100000.0)) + 22500.0;
    }
    else {
        s = (0.45 * (income as f64 - 250000.0)) + 82500.0;
    }

    if n < 60000.0 {
        h = 0.6 * n;
    }
    else {
        h = (0.4 * n) + 6200.0;
    }

    tran = 0.2 * n;

    f = n - (tran + h);

    if w >= 5000.0 {
        trav = 0.1 * (w - 5000.0);
    }

    g = 0.5 * w;
    e = (1.0/3.0) * (w - (trav + g));
    p = e;


    
    if debt > 0 {
        if (debt as f64) < (0.25 * s) {
            repay = debt as f64;
        }
        else {
            repay = 0.25 * s;
        }
    }

    let values = vec![n, w, s, f, h, tran, e, p, g, trav, repay];
    values
}


#[derive(Serialize, Deserialize, Debug)]
pub struct BudgetParameters {
    income: i32,
    debt: i32
}

#[derive(Serialize, Deserialize, Debug)]
pub struct IdealBudgetResponse {
    pub labels: Vec<String>,
    pub parents: Vec<String>,
    pub values: Vec<f64>,
}

pub async fn ideal_budget(
    Query(budget_params): Query<BudgetParameters>) -> Json<IdealBudgetResponse> {
    let response = IdealBudgetResponse {
        labels: give_labels(),
        parents: give_parents(),
        values: give_values(budget_params.income, budget_params.debt),
    };

    assert!(response.values.len() == response.parents.len() && response.parents.len() == response.values.len());

    Json(response)
    //"".to_string()
} 

pub async fn get_transactions_for_month() -> String {
    tracing::info!("Getting randomized transactions!");

    let categories = give_labels();
    let parents = give_parents();

    let num_transactions = rand::random_range(100..200);

    let mut budget_response = IdealBudgetResponse {
        labels: vec!["Budget".to_string(), "Wants".to_string(), "Needs".to_string(), "Savings".to_string()],
        parents: vec!["".to_string(), "Budget".to_string(), "Budget".to_string(), "Budget".to_string()],
        values: vec![],
    };

    let mut wants = 0.0;
    let mut needs = 0.0;
    let mut savings = 0.0;

    let mut hm: HashMap<String, f64> = HashMap::new();

    for _ in 0..num_transactions {
        let category_chosen_index = rand::random_range(3..categories.len());

        let curr_label = categories[category_chosen_index].clone();
        let curr_parent = parents[category_chosen_index].clone();

        let dollars_spent = rand::random_range(5..300) as f64;

        if hm.contains_key(&curr_label) {
            hm.insert(curr_label.clone(), hm.get(&curr_label).unwrap() + dollars_spent);
        } else {
            hm.insert(curr_label.clone(), dollars_spent);
        }

        if curr_parent == *"Wants" {
            wants += dollars_spent;
        } else if curr_parent == *"Needs" {
            needs += dollars_spent;
        } else {
            savings += dollars_spent;
        }
    }

    //vec!["Needs", "Wants", "Savings", "Food and Drink", "Rent and Utilities", "Transportation", "Entertainment", "Personal Care", "General Merchandise", "Travel", "Loan Payment"]
    //vec!["Needs", "Wants", "Savings", "Needs",            "Needs",            "Needs",            "Wants",        "Wants",        "Wants",                "Wants", "Savings"]
    
    // DISCLAIMER this is absolutely the most disgusting code I have ever written in my life. It
    // works. I have no time. I don't care
    if hm.contains_key("Food and Drink") {
        budget_response.labels.push("Food and Drink".to_string());
        budget_response.parents.push("Needs".to_string());
        budget_response.values.push(*hm.get("Food and Drink").unwrap())
    } 
    if hm.contains_key("Rent and Utilities") {
        budget_response.labels.push("Rent and Utilities".to_string());
        budget_response.parents.push("Needs".to_string());
        budget_response.values.push(*hm.get("Rent and Utilities").unwrap())
    } 
    if hm.contains_key("Transportation") {
        budget_response.labels.push("Transportation".to_string());
        budget_response.parents.push("Needs".to_string());
        budget_response.values.push(*hm.get("Transportation").unwrap())
    } 
    if hm.contains_key("Entertainment") {
        budget_response.labels.push("Entertainment".to_string());
        budget_response.parents.push("Wants".to_string());
        budget_response.values.push(*hm.get("Entertainment").unwrap())
    } 
    if hm.contains_key("Personal Care") {
        budget_response.labels.push("Personal Care".to_string());
        budget_response.parents.push("Wants".to_string());
        budget_response.values.push(*hm.get("Personal Care").unwrap())
    } 
    if hm.contains_key("General Merchandise") {
        budget_response.labels.push("General Merchandise".to_string());
        budget_response.parents.push("Wants".to_string());
        budget_response.values.push(*hm.get("General Merchandise").unwrap())
    } 
    if hm.contains_key("Travel") {
        budget_response.labels.push("Travel".to_string());
        budget_response.parents.push("Wants".to_string());
        budget_response.values.push(*hm.get("Travel").unwrap())
    } 
    if hm.contains_key("Loan Payment") {
        budget_response.labels.push("Loan Payment".to_string());
        budget_response.parents.push("Savings".to_string());
        budget_response.values.push(*hm.get("Loan Payment").unwrap())
    }

    budget_response.values.insert(0, 0.0);
    budget_response.values.insert(1, wants);
    budget_response.values.insert(2, needs);
    budget_response.values.insert(3, savings);

    //Json(budget_response);
    let serialized_response = serde_json::to_string(&budget_response).expect("Unable to serialize transactions");

    println!("{}", &serialized_response);

    serialized_response
}
