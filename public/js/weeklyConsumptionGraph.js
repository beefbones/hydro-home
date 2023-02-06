const updateWeeklyChart = async () => {
    const consumptionResponse = await fetch(`/api/waterConsumption/weekly/${new Date().setHours(0, 0, 0, 0)}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });
    const weeklyConsumptionData = await consumptionResponse.json();
    const weeklyChart = document.getElementById("weeklyChart");

    const midnightThisMorning = new Date();
    midnightThisMorning.setHours(0, 0, 0); //To find previous day, subtract 1000*60*60*24*2 from date
    console.log(midnightThisMorning);

    const now = new Date();
    const day = now.getDay();

    let dayLabels;
    if (day == 0) {
        dayLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    } else if (day == 1) {
        dayLabels = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];
    } else if (day == 2) {
        dayLabels = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
    } else if (day == 3) {
        dayLabels = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
    } else if (day == 4) {
        dayLabels = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
    } else if (day == 5) {
        dayLabels = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    } else if (day == 6) {
        dayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    }

    let weeklyIntake = [0, 0, 0, 0, 0, 0, 0];

    weeklyConsumptionData.forEach((entry) => {
        if (entry.timestamp >= midnightThisMorning.toISOString()) {
            weeklyIntake[6] += entry.amount_consumed;
        } else if (entry.timestamp >= new Date(midnightThisMorning - 1000 * 60 * 60 * 24).toISOString()) {
            weeklyIntake[5] += entry.amount_consumed;
        } else if (entry.timestamp >= new Date(midnightThisMorning - 1000 * 60 * 60 * 24 * 2).toISOString()) {
            weeklyIntake[4] += entry.amount_consumed;
        } else if (entry.timestamp >= new Date(midnightThisMorning - 1000 * 60 * 60 * 24 * 3).toISOString()) {
            weeklyIntake[3] += entry.amount_consumed;
        } else if (entry.timestamp >= new Date(midnightThisMorning - 1000 * 60 * 60 * 24 * 4).toISOString()) {
            weeklyIntake[2] += entry.amount_consumed;
        } else if (entry.timestamp >= new Date(midnightThisMorning - 1000 * 60 * 60 * 24 * 5).toISOString()) {
            weeklyIntake[1] += entry.amount_consumed;
        } else if (entry.timestamp >= new Date(midnightThisMorning - 1000 * 60 * 60 * 24 * 6).toISOString()) {
            weeklyIntake[0] += entry.amount_consumed;
        }
    });

    let newWeeklyChart = new Chart(weeklyChart, {
        type: "bar",
        data: {
            labels: dayLabels,
            datasets: [
                {
                    backgroundColor: "#9BD0F5",
                    barThickness: 50,
                    borderColor: "#36A2EB",
                    borderRadius: 100,
                    borderWidth: 3,
                    borderSkipped: false,
                    data: weeklyIntake,
                },
            ],
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "This Week's Water Intake",
            },
            scales: {
                xAxes: {
                    grid: {
                        display: false,
                    },
                },
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    });

    newWeeklyChart.update();
};

updateWeeklyChart();
