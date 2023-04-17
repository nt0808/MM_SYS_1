const dataset = [12, 32, 22, 55, 2, 1];

//Standardbefehle
d3.select();
d3.selectAll;

d3.select("h1");
d3.selectAll("h1").style("color", "CornflowerBlue");

const svg = d3
  .select("ul")
  .selectAll("li")
  .data(dataset)
  .enter()
  .append("li")
  .text((d) => d + " Euro")
  .style("font-family", "Century")
  .style("font-size", "24px")
  .style("color", (d) => {
    return d > 10 ? "red" : "green";
  });

d3.selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("margin", "2px")
