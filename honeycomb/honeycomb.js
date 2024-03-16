const honeycombStructure = (totalHexagons) => {
  let result = [];
  let rows = 5;
  // let rows = totalHexagons;
  let media = Math.round(totalHexagons / rows);
  let angle = 180 / rows;
  for (let i = 0; i < rows; i++) {
    offset = -1 * Math.round(Math.cos(i * angle));
    result.push(media + offset);
  }
  //  console.log("🚀 ~ file: honeycomb.js:13 ~ honeycombStructure ~  result.slice(2,result.length -1)",  result.slice(2,result.length -1));
  return result;
}
// module.exports = honeycombStructure;
console.log("🚀 ~ file: honeycomb.js:17 ~ honeycombStructure", honeycombStructure(14));
console.log("🚀 ~ file: honeycomb.js:19 ~ honeycombStructure", honeycombStructure(19));

