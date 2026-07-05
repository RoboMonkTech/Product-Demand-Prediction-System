function predictDemand() {

    let product = document.getElementById("product").value;
    let category = document.getElementById("category").value;
    let price = Number(document.getElementById("price").value);
    let stock = Number(document.getElementById("stock").value);
    let sales = Number(document.getElementById("sales").value);
    let rating = Number(document.getElementById("rating").value);

    let output = document.getElementById("output");
    let message = document.getElementById("message");
    let confidence = document.getElementById("confidence");
    let demand = document.getElementById("demand");
    let resultBox = document.getElementById("resultBox");
    let icon = document.querySelector(".icon");

    resultBox.classList.remove("high");
    resultBox.classList.remove("low");

    if (
        product == "" ||
        price == 0 ||
        stock == 0 ||
        sales == 0 ||
        rating == 0
    ) {

        output.innerHTML = "Incomplete Details";
        output.style.color = "#2563eb";

        message.innerHTML =
            "Please enter all product details before prediction.";

        confidence.innerHTML = "--";
        demand.innerHTML = "--";

        icon.innerHTML = '<i class="fa-solid fa-circle-info"></i>';
        icon.style.color = "#2563eb";

        return;
    }

    // Product Demand Prediction Logic

    if (
        sales >= 500 &&
        rating >= 4 &&
        stock >= 100 &&
        price <= 5000
    ) {

        resultBox.classList.add("high");

        icon.innerHTML =
            '<i class="fa-solid fa-fire"></i>';

        icon.style.color = "#16a34a";

        output.innerHTML = "HIGH DEMAND PRODUCT";
        output.style.color = "#16a34a";

        message.innerHTML =
            "<b>" + product + "</b> is expected to have high market demand. Inventory should be maintained to meet customer needs.";

        confidence.innerHTML = "94%";
        demand.innerHTML = "Best Selling Product";

    }

    else {

        resultBox.classList.add("low");

        icon.innerHTML =
            '<i class="fa-solid fa-box"></i>';

        icon.style.color = "#dc2626";

        output.innerHTML = "LOW DEMAND PRODUCT";
        output.style.color = "#dc2626";

        message.innerHTML =
            "<b>" + product + "</b> is expected to have lower demand. Consider reviewing inventory levels and promotional strategies.";

        confidence.innerHTML = "89%";
        demand.innerHTML = "Normal Product";

    }

}
