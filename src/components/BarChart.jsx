import React, { Component } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import '../style.css'

const BarChart = (props) => {
    if (props.repos) {
        const elements = [];
        var commits = [];

        var i;
        for (i = 0; i < props.repos.length; i++) {
            elements.push(props.repos[i].name);
            axios.get('https://api.github.com/repos/' + props.formData.username + '/' + props.repos[i].name + '/commits').then(response => {
                commits.push(response.data.length);
            }).catch((err) => { console.log(err); });
        }

        const repoSize = [];
        const repoNames = [];
        const repoLangs= [];
        for (i = 0; i < props.repos.length; i++) {
            repoSize.push(props.repos[i].size);
            repoNames.push(props.repos[i].name);
            repoLangs.push(props.repos[i].language);
        }

        var repoLangsLabels = [];
        var repoLangsCount = [];
        for (i = 0; i < repoLangs.length; i++){
            if (!(repoLangsLabels.includes(repoLangs[i])) && repoLangs[i] != null){
                repoLangsLabels.push(repoLangs[i]);
                repoLangsCount.push(0)
            }
        }

        repoLangsLabels.sort();
        var lang;
        for (i = 0; i < repoLangs.length; i++){
            lang = repoLangsLabels[i];
            for (var j = 0; j < repoLangs.length; j++){
                if (lang == repoLangs[j]){
                    repoLangsCount[i] = repoLangsCount[i] + 1;
                }
            }
        }


        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        var colorList = [];
        for (var i = 0; i < repoNames.length; i++) {
            colorList.push(getRandomColor());
        }
        return (

            <div class="bar-chart">
                <h3 class="details-headings">Repository Languages</h3>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Bar

                    options={{
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                },
                                scaleLabel:{
                                    display: true,
                                    labelString: "Amount of each language used by user"
                                }
                            }]
                        }
                    }}

                    data={{

                        labels: repoLangsLabels,

                        datasets: [
                            {
                                borderColor: "black",
                                borderWidth: 1,
                                hoverBorderColor: "white",
                                backgroundColor: colorList,
                                data: repoLangsCount
                            }
                        ]

                    }}
                />

            </div>
        )
    }
    else{return null;}
}
export default BarChart;