fn give_labels() -> Vec<String> {
    let labels = vec!["Needs", "Wants", "Savings", "Food and Drink", "Rent and Utilities", "Transportation", "Medical", "Entertainment", "Personal Care", "General Merchandise", "Travel", "Loan Payment"].into_iter().map(|item| item.to_string()).collect::<Vec<String>>();
    labels
}

fn give_parents() -> Vec<String> {
    vec!["Needs", "Wants", "Savings", "Needs", "Needs", "Needs", "Needs", "Wants", "Wants", "Wants", "Wants", "Savings"]
        .into_iter()
        .map(|item| item.to_string())
        .collect()
}

fn give_values(income: i32, debt: i32) -> Vec<i32> {
    let values = vec![];
    values
}
