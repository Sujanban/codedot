const ctxx = document.getElementById('australia-overview-main-grid-first-item-first-line-chart').getContext('2d');

const myChart = new Chart(ctxx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Dataset 1',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.4 // Makes the line smooth
            },
            {
                label: 'Dataset 2',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false,
                tension: 0.4 // Makes the line smooth
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
            backgroundColor: '#559FE4'
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: false,
                    text: 'Month'
                },
                ticks:{
                    display: false
                }
            },
            y: {
                display: true,
                title: {
                    display: false,
                    text: 'Value'
                },
                ticks:{
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});
