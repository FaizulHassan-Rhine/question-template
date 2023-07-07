import React from 'react';
import Plot from 'react-plotly.js';

const PiChart = (props) =>{
    var data = [
      {
        values: [112, 454, 65, 544],
        labels: ["Blue", "Red", "Yellow", "Orange"],
        type: "pie",
      },
    ];
  
      return(
        <Plot
        data={data}
        layout={ {width: 300, height: 300,   paper_bgcolor:'rgba(0,0,0,0)',
        plot_bgcolor:'rgba(0,0,0,0)',
        //  title: 'Favourite Colours In A Class'
        } } />
      )
  }
export default PiChart;

