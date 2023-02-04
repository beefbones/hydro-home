const dataFormatter = async (event) => {
  event.preventDefault();

const midnightThisMorning = new Date();
midnightThisMorning.setHours(0, 0, 0); //To find previous day, subtract 1000*60*60*24*2 from date

const now = new Date();
console.log(now);

const day = now.getDay();
console.log(day);

let dayLabels;

if(day == 0){dayLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];}
else if (day == 1){dayLabels = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];}
else if (day == 2){dayLabels = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];}
else if (day == 3){dayLabels = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];}
else if (day == 4){dayLabels = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];}
else if (day == 5){dayLabels = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];}
else if (day == 6){dayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];}

let weeklyIntake = [0, 0, 0, 0, 0, 0, 0];
let todaysIntake = [0];

const intakeData = []; //need to use weekly Api Call to get data

intakeData.forEach(entry => {
  if (entry.timeStamp >= midnightThisMorning){
    weeklyIntake[6] += entry.amount_water_consumed
  } else if (entry.timeStamp >= midnightThisMorning - (1000*60*60*24)){
    weeklyIntake[5] += entry.amount_water_consumed
  } else if (entry.timeStamp >= midnightThisMorning - (1000*60*60*24*2)){
    weeklyIntake[4] += entry.amount_water_consumed
  } else if (entry.timeStamp >= midnightThisMorning - (1000*60*60*24*3)){
    weeklyIntake[3] += entry.amount_water_consumed
  } else if (entry.timeStamp >= midnightThisMorning - (1000*60*60*24*4)){
    weeklyIntake[2] += entry.amount_water_consumed
  } else if (entry.timeStamp >= midnightThisMorning - (1000*60*60*24*5)){
    weeklyIntake[1] += entry.amount_water_consumed
  } else if (entry.timeStamp >= midnightThisMorning - (1000*60*60*24*6)){
    weeklyIntake[0] += entry.amount_water_consumed
  } 
})


const dailyChartFormatter = async (event) => {
  event.preventDefault();
  
let newDailyChart = new Chart(dailyChart, {
    type: "bar",
    data: {
        datasets: [{
          backgroundColor: "#9BD0F5",
          barThickness: 50,
          borderColor: "#36A2EB",
          borderRadius: 100,
          borderWidth: 3,
          borderSkipped: false,
          data: todaysIntake
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

if (newDailyChart){
  const response = await fetch('/api/waterConsumption', {
    method: 'POST',
    body: JSON.stringify({addWater, setGoal}),
    headers: { 'Content-Type': 'application/json' },
});
if (response.ok) {
  document.location.replace('/');
} else {
  alert('Failed to load graph.');
}

}

}

dailyChartFormatter();

const weeklyChartFormatter = async (event) => {
  event.preventDefault();

let newWeeklyChart = new Chart(weeklyChart, {
  type: "bar",
  data: {
  labels: dayLabels,
      datasets: [{
        backgroundColor: "#9BD0F5",
        barThickness: 50,
        borderColor: "#36A2EB",
        borderRadius: 100,
        borderWidth: 3,
        borderSkipped: false,
        data: weeklyIntake
      }]
  },
  options: {
      legend: { display: false },
      title: {
          display: true,
          text: "This Week's Water Intake"
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

  if (newWeeklyChart){
    const response = await fetch('/api/waterConsumption', {
      method: 'POST',
      body: JSON.stringify({addWater, setGoal}),
      headers: { 'Content-Type': 'application/json' },
});
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to load graph.');
  }

  }
}

weeklyChartFormatter();

const updateValue = async (event) => {
  event.preventDefault();

  const addWater = parseInt(document.getElementById("waterIntake").value);
  const setGoal = parseInt(document.getElementById("waterGoal").value)
//call api POST /api/waterConsumption
  if (addWater || setGoal){
    const response = await fetch('/api/waterConsumption', {
      method: 'POST',
      body: JSON.stringify({addWater, setGoal}),
      headers: { 'Content-Type': 'application/json' },
});
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add data entry.');
  }

  todaysIntake[0]=todaysIntake[0]+addWater;

  let myDailyChart = new Chart(dailyChart, {
    type: "bar",
    data: {
        datasets: [{
          backgroundColor: "#9BD0F5",
          barThickness: 50,
          borderColor: "#36A2EB",
          borderRadius: 100,
          borderWidth: 3,
          borderSkipped: false,
          data: todaysIntake
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

  myDailyChart.update();
  }
};

<<<<<<< HEAD
}

dataFormatter();
=======

dataFormatter();

>>>>>>> 33199066dc57be3a56077daa6875fca07363789d
