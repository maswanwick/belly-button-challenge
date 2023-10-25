// create the gauge chart for the selected subject
function loadGaugeChart(subject) {
    let washPerWeek = subject[0].wfreq;

    let trace = {
        type: 'indicator',
        title: {
            text: '<b>Belly Button Washing Frequency</b><br>Scrubs per Week<br>'
        },
        mode: 'gauge+number', 
        value: washPerWeek,
        gauge: {
            axis: {
                range: [0, 9],
                showticklabels: false,
                ticks: "inside"
            },
            steps: [
                { range: [0, 1], color: "rgb(251, 251, 242)" },
                { range: [1, 2], color: "rgb(236, 238, 215)" },
                { range: [2, 3], color: "rgb(218, 226, 190)" },
                { range: [3, 4], color: "rgb(198, 215, 166)" },
                { range: [4, 5], color: "rgb(175, 204, 144)" },
                { range: [5, 6], color: "rgb(150, 193, 124)" },
                { range: [6, 7], color: "rgb(123, 183, 105)" },
                { range: [7, 8], color: "rgb(91, 173, 89)" },
                { range: [8, 9], color: "rgb(47, 162, 74)" }
            ]
        }

    };

    Plotly.newPlot('gauge', [trace])
}