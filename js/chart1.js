var canvas = document.getElementById('canvas');
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
    labels: ["Aug-10", "Aug-24", "Sept-7", "Sept-21", "Oct-5", "Oct-19", "Nov-2"],
    datasets: [{ 
        data: [10.25, 10.22, 16.80, 22.17, 29.00, 38.79, 46.14],
        label: "Bitcoin",
        borderColor: "#0000ff",
        fill: false
      }, { 
        data: [10.25, 7.40, 11.64, 17.08, 23.12, 30.60, 37.81],
        label: "Ethereum",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [10.25, 8.81, 15.73, 21.23, 27.93, 35.06, 41.52],
        label: "Litecoin",
        borderColor: "#00ff00",
        fill: false
      }, { 
        data: [67.61, 67.61, 91.61, 109.61, 133.61, 169.61, 196.61],
        label: "Total Cost",
        borderColor: "#000000",
        fill: false
      }, { 
        data: [67.61, 60.50, 86.98, 104.33, 122.76, 145.28, 165.22],
        label: "Total Value",
        borderColor: "#ff0000",
        fill: false
      }, { 
        data: [36.86, 34.07, 42.81, 43.85, 42.71, 40.83, 39.75],
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
                    max: 300,
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
