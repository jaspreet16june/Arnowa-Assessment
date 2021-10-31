 
        let ctx = document.getElementById('myChart').getContext('2d');
        let labels = ['India', 'Oman','US'];
        let colorHex = ['#ff6e28','#8eb5f6','#ffce16'];

        let myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [246, 596, 185],
                    backgroundColor: colorHex
                }],
                labels: labels
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom'
                },
                plugins: {
                    datalabels: {
                        color: '#fff',
                        anchor: 'end',
                        align: 'start',
                        offset: -10,
                        borderWidth: 2,
                        borderColor: '#fff',
                        borderRadius: 25,
                        backgroundColor: (context) => {
                            return context.dataset.backgroundColor;
                        },
                        font: {
                            weight: 'bold',
                            size: '10'
                        },
                        formatter: (value) => {
                            return value + ' %';
                        }
                    }
                }
            }
        })

let labels2 = ['India', 'Oman', 'US'];
let data2 = [246, 596, 185];
let colors2 = ['#eddfa0', '#bdd4f5', '#f6c3a0'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                }
            }
        },
    }


});
