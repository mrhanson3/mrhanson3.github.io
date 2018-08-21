var canvas = document.getElementById('canvas');
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["Aug-10", "Aug-16", "Aug-18", "Aug-20"],
    datasets: [{ 
        data: [10.25, 9.52, 9.47, 9.53],
        label: "Bitcoin",
        borderColor: "#0000ff",
        fill: false
      }, { 
        data: [10.25, 7.86, 7.80, 7.69],
        label: "Ethereum",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [10.25, 8.80, 8.91, 8.59],
        label: "Litecoin",
        borderColor: "#00ff00",
        fill: false
      }, { 
        data: [67.61, 67.61, 67.61, 67.61],
        label: "Total Cost",
        borderColor: "#000000",
        fill: false
      }, { 
        data: [67.61, 61.05, 62.06, 63.21],
        label: "Total Value",
        borderColor: "#ff0000",
        fill: false
      }, { 
        data: [36.86, 34.87, 36.42, 37.40],
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