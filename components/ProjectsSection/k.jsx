.then(res => {
    console.log(res);
    for (const dataObj of res.data.data) {
      name.push(parseInt(dataObj.name));
      revenue.push(parseInt(dataObj.revenue));
    }
    setChartData({
      labels: empAge,
      datasets: [
        {
          label: "level of thiccness",
          data: empSal,
          backgroundColor: ["rgba(75, 192, 192, 0.6)"],
          borderWidth: 4
        }
      ]
    });
  })
  .catch(err => {
    console.log(err);
  });
console.log(name, revenue);
}