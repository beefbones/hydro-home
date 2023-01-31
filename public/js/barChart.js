// const today = new Date("timestamp");
// const weekday = today.getDay();

const dailyChart = document.getElementById('dailyChart');

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const yValues = [64];
const barColor = "blue";

new Chart(dailyChart, {
    type: "bar",
    data: {
        labels: "Today's Intake",
        datasets: [{
            backgroundColor: barColor,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Daily Water Intake"
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
    }
});

const addData = (chart) => {
  console.log("beepboop")
  chart.data.datasets.data.forEach((dataset) => {
    dataset.data.push(document.getElementById("waterIntake"));
  });
  chart.update();
}