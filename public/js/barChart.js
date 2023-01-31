const today = new Date("timestamp");
const weekday = today.getDay();



const ctx = document.getElementById('myChart');

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const yValues = [55, 49, 44, 24, 15, 22, 40];
const barColor = "blue";

new Chart(ctx, {
    type: "bar",
    data: {
        labels: days,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Daily Water Intake"
        }
    }
});