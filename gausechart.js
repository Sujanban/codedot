var data = [
    {
      number: {
        font: {
          size: 12,
        },
      },

      type: "indicator",
      mode: "gauge+number",
      value: 80,
      title: { text: "Score", font: { size: 24 }, yanchor: "bottom" },
      gauge: {
        axis: {
          range: [0, 160],
          tickwidth: 1,
          tickcolor: "#094394",
          tickmode: "array",
          tickvals: [0, 160],
        },
        bar: { color: "#094394", thickness: 1 },

        bgcolor: "rgba(77, 147, 244, 0.30)",
        borderwidth: 0,
        bordercolor: "white",
      },
    },
  ];

  var layout = {
    width: 200,
    height: 150,
    margin: { t: 25, r: 30, l: 20, b: 25 },
    paper_bgcolor: "white",
    font: { color: "black", family: "Arial" },
  };

  Plotly.newPlot("gause-chart", data, layout);