var HomeTeam = []
var AwayTeam = []

const file = document.getElementById('uploadfile')
const upload = document.getElementById('uploadconfirm')

upload.addEventListener('click', () => {
    Papaparse(file);
})


function Papaparse(input) {
    let HomeTeam = [];
    PapaParse.parse(
        input.files[0], {
            dowload: true,
            header: true,
            complete: function(results) {
                HomeTeam = results.data['Home Team']
                console.log(HomeTeam)
            }

        }
    )

}

const ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function update(HomeTeam) {
    console.log(HomeTeam)
    myChart.data.datasets[0].data = HomeTeam
}