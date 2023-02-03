const midnight = new Date();
midnight.setHours(0, 0, 0);
console.log(midnight);

const now = new Date();
console.log(now);

const dailyChart = document.getElementById('dailyChart');
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let yValue = [0]

let sum = [yValue.reduce((partialSum, a) => partialSum + a, 0)];

let myChart = new Chart(dailyChart, {
    type: "bar",
    data: {
        datasets: [{
          labels: days,
          backgroundColor: "#9BD0F5",
          barThickness: 50,
          borderColor: "#36A2EB",
          borderRadius: 100,
          borderWidth: 3,
          borderSkipped: false,
          data: yValue
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "Daily Water Intake"
        },
        scales: {
          xAxes: {
            grid: {
              display: false
            }
          },
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
    }
});

function updateGoal() {

const setGoal = parseInt(document.getElementById("waterGoal").value)
let myChart = new Chart(dailyChart, {
  type: "bar",
  data: {
      datasets: [{
        labels: days,
        backgroundColor: "#9BD0F5",
        barThickness: 50,
        borderColor: "#36A2EB",
        borderRadius: 100,
        borderWidth: 3,
        borderSkipped: false,
        data: yValue
      }]
  },
  options: {
      legend: { display: false },
      title: {
          display: true,
          text: "Daily Water Intake"
      },
      scales: {
        xAxes: {
          grid: {
            display: false
          }
        },
        yAxes: [{
          ticks: {
            beginAtZero: true,
            max: setGoal
          }
        }]
      }
  }
});
  myChart.update();
};

function updateValue() {

const addWater = parseInt(document.getElementById("waterIntake").value)
  yValue[0]=yValue[0]+addWater;
  myChart.update();
};
