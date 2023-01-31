const chartData = {
  Days:["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
  Data: [48, 24, 32, 40, 64, 40, 35]
};

const barColors = "blue";

let barChart = $('#barChart').html();
let barChartScript = Handlebars.compile(barChart);
let barhtml = barChartScript(chartData);
$(document.body).append(barhtml);

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: chartData.Days, 
      datasets: [
        {
          label: "Daily Water Intake",
          backgroundColor: barColors,
          data: [chartData.data] 
        }
      ]
   } 
});