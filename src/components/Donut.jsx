import React, { Component } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import '../style.css'

const Donut = (props) => {
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
        for (i = 0; i < props.repos.length; i++) {
            repoSize.push(props.repos[i].size);
            repoNames.push(props.repos[i].name);
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

            <div class="donut">
                <h3 class="details-headings">Repository Size Comparison</h3>
                <br></br>
                <Doughnut

                    options={{
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem, data) {
                                    var dataset = data.datasets[tooltipItem.datasetIndex];
                                    var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                    var total = meta.total;
                                    var currentValue = dataset.data[tooltipItem.index];
                                    var percentage = parseFloat((currentValue / total * 100).toFixed(1));
                                    return currentValue + ' (' + percentage + '%)';
                                },
                                title: function (tooltipItem, data) {
                                    return data.labels[tooltipItem[0].index];
                                }
                            }
                        },
                        legend: {
                            display: false
                        }
                    }}

                    data={{

                        labels: repoNames,

                        datasets: [
                            {
                                borderWidth: 0,
                                borderColor: "black",
                                hoverBorderWidth: 1,
                                hoverBorderColor:"white",
                                backgroundColor: colorList,
                                data: repoSize
                            }
                        ]

                    }}
                />

            </div>
        )
    }
    else{return null;}
}
export default Donut;