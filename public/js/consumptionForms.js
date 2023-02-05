const updateConsumption = async (event) => {
    event.preventDefault();
    const intakeElement = document.querySelector("#water-input");
    const newGoalElement = document.querySelector("#new-goal");
    const intakeVal = Math.round(intakeElement.value);
    const newGoalVal = Math.round(newGoalElement.value);

    let newWaterData = {};
    if (intakeVal) {
        newWaterData.amount_consumed = intakeVal;
    }
    if (newGoalVal) {
        newWaterData.target_daily_consumption = newGoalVal;
    }
    console.log(newWaterData);
    await fetch("/api/waterConsumption", {
        method: "POST",
        body: JSON.stringify(newWaterData),
        headers: { "Content-Type": "application/json" },
    });

    document.querySelector("#water-consumption-form").reset();
    document.querySelector("#water-goal-form").reset();
};

document.querySelector("#water-consumption-form").addEventListener("submit", updateConsumption);
document.querySelector("#water-goal-form").addEventListener("submit", updateConsumption);
