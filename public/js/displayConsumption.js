const updateDisplay = async () => {
    const consumptionDisplay = document.querySelector("#consumption-today");
    const goalDisplay = document.querySelector("#todays-goal");

    const consumptionResponse = await fetch(`/api/waterConsumption/daily/${new Date().setHours(0, 0, 0, 0)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const todaysConsumptionData = await consumptionResponse.json();

    console.log(todaysConsumptionData);
    let todaysConsumption = 0;
    todaysConsumptionData.forEach((entry) => {
        todaysConsumption += entry.amount_consumed;
    });
    consumptionDisplay.innerHTML = `${todaysConsumption} ounces`;
};

updateDisplay();
