var canvas = document.getElementById('canvas');
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["Aug-10", "Aug-16"],
    datasets: [{ 
        data: [10, 9.52],
        label: "Bitcoin",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [10, 7.86],
        label: "Ethereum",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [10, 8.80],
        label: "Litecoin",
        borderColor: "#3cba9f",
        fill: false
      }
    ]
  },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]

        }
    }
});