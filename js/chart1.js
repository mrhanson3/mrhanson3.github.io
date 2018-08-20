var canvas = document.getElementById('canvas');
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["Aug-10", "Aug-16", "Aug-18", "Aug-20"],
    datasets: [{ 
        data: [10.25, 9.52, 9.47, 9.53],
        label: "Bitcoin",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [10.25, 7.86, 7.80, 7.69],
        label: "Ethereum",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [10.25, 8.80, 8.91, 8.59],
        label: "Litecoin",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [30.75, 30.75, 30.75, 30.75],
        label: "Total Cost",
        borderColor: "#000000",
        fill: false
      }, { 
        data: [30.75, 26.18, 26.18, 25.81],
        label: "Total Value",
        borderColor: "#ff0000",
        fill: false
      }
    ]
  },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: 50,
                    min: 0,
                    stepSize: 10                 
                }
            }]
        }
      }  
});