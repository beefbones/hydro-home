// const today = new Date("timestamp");
// const weekday = today.getDay();

const dailyChart = document.getElementById('dailyChart');

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let yValues = [64]
const barColor = "blue";

new Chart(dailyChart, {
    type: "bar",
    data: {
        datasets: [{
          backgroundColor: "#9BD0F5",
          barThickness: 50,
          borderColor: "#36A2EB",
          borderRadius: 100,
          borderWidth: 3,
          borderSkipped: false,
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
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
    }
});

function updateValue() {
  console.log("beepboop")
  chart.dataset.data.forEach((dataset) => {
    dataset.data.push(document.getElementById("waterIntake"));
  });
  chart.update();
}