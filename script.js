

var startDate = new Date(2022, 0, 04)
var now = new Date()
var dDay = new Date(2022, 4, 05);

var absDateDiff = Math.ceil((dDay.getTime()-startDate.getTime())/(1000*3600*24));
var varDateDiff = Math.ceil((dDay.getTime()-now.getTime())/(1000*3600*24));

console.log(absDateDiff)
console.log(varDateDiff)

var progressBar = (((absDateDiff - varDateDiff) / absDateDiff) * 100).toFixed(2)
console.log(progressBar)

document.getElementById("progressBar").innerHTML = progressBar + '%'
document.getElementById("progressBar").style = `width: ${progressBar}`