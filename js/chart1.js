var canvas = document.getElementById('canvas');
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["Aug-10", "Aug-24", "Sept-7", "Sept-14"],
    datasets: [{ 
        data: [10.25, 10.22, 16.80, 22.17],
        label: "Bitcoin",
        borderColor: "#0000ff",
        fill: false
      }, { 
        data: [10.25, 7.40, 11.64, 17.08],
        label: "Ethereum",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [10.25, 8.81, 15.73, 21.23],
        label: "Litecoin",
        borderColor: "#00ff00",
        fill: false
      }, { 
        data: [67.61, 67.61, 91.61, 109.61],
        label: "Total Cost",
        borderColor: "#000000",
        fill: false
      }, { 
        data: [67.61, 60.50, 86.98, 104.33],
        label: "Total Value",
        borderColor: "#ff0000",
        fill: false
      }, { 
        data: [36.86, 34.07, 42.81, 43.85],
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
                    max: 200,
                    min: 0,
                    stepSize: 20,
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
