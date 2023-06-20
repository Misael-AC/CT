function generateChart(){
var data = {
    labels: ["Usuario1", "Usuario2", "Usuario3"],
    datasets: [{
      label: "Total",
      backgroundColor: "blue",
      data: [3, 7, 4]
    }, {
      label: "Pendientes",
      backgroundColor: "red",
      data: [4, 3, 5]
    }, {
      label: "Completados",
      backgroundColor: "green",
      data: [7, 2, 6]
    }]
  };
ctx = $("#myChart").get(0).getContext("2d");
new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      barValueSpacing: 20,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
          }
        }]
      }
    }
});}