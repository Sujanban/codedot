const ctxx = document.getElementById('australia-overview-main-grid-first-item-first-line-chart').getContext('2d');

const myChart = new Chart(ctxx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Achieved',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: '#559FE4',
                fill: false,
                tension: 0.4
            },
            {
                label: 'Remaining',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: '#BFBFBF',
                fill: false,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: false,
                    text: 'Month'
                },
                ticks: {
                    display: false
                },
                grid: {
                    display: false // Hides the vertical grid lines
                }
            },
            y: {
                display: true,
                title: {
                    display: false,
                    text: 'Value'
                },
                ticks: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100,
                grid: {
                    display: false // Hides the horizontal grid lines
                }
            }
        }
    }
});
