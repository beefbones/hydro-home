const updateDisplay = async () => {
    const consumptionDisplay = document.querySelector("#consumption-today");
    const goalDisplay = document.querySelector("#todays-goal");

    const consumptionResponse = await fetch(`/api/waterConsumption/daily/${new Date().setHours(0, 0, 0, 0)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const todaysConsumptionData = await consumptionResponse.json();

    let todaysConsumption = 0;
    todaysConsumptionData.forEach((entry) => {
        todaysConsumption += entry.amount_consumed;
    });
    consumptionDisplay.innerHTML = `${todaysConsumption} ounces`;

    const allResponse = await fetch(`/api/waterConsumption`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const allConsumptionData = await allResponse.json();
    let currentGoal;
    if (allConsumptionData.slice(-1)[0].target_daily_consumption) {
        currentGoal = allConsumptionData.slice(-1)[0].target_daily_consumption;
    } else {
        currentGoal = 0;
    }

    goalDisplay.innerHTML = `${currentGoal} ounces`;
};
updateDisplay();
