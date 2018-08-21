var canvas = document.getElementById('canvas');
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["Aug-10", "Aug-16", "Aug-21"],
    datasets: [{ 
        data: [10.25, 9.52, 9.55],
        label: "Bitcoin",
        borderColor: "#0000ff",
        fill: false
      }, { 
        data: [10.25, 7.86, 7.36],
        label: "Ethereum",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [10.25, 8.80, 8.55],
        label: "Litecoin",
        borderColor: "#00ff00",
        fill: false
      }, { 
        data: [67.61, 67.61, 67.61],
        label: "Total Cost",
        borderColor: "#000000",
        fill: false
      }, { 
        data: [67.61, 61.05, 61.20],
        label: "Total Value",
        borderColor: "#ff0000",
        fill: false
      }, { 
        data: [36.86, 34.87, 35.74],
        label: "Monero",
        borderColor: "#ffa500",
        fill: false
      }
    ]    
  },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    max: 100,
                    min: 0,
                    stepSize: 10,
                    callback: function(value, index, values) {
                        return '$' + value;

                }
            }
            }]
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    return "$" + Number(tooltipItem.yLabel).toFixed(2).replace(/./g, function(c, i, a) {
                        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                
            });
        }
    }
    }
      }  
});
