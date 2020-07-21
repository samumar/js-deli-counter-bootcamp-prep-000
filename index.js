function takeANumber(line, numberOfVisits) {
  var numberOfVisits = 20;
  line.push(numberOfVisits);
  return (`Welcome, ${numberOfVisits}. You are number ${line.length} in line.`);
}

function nowServing(line, name) {
  if (line.length === 0) {
    return ("There is nobody waiting to be served!");
  }  else {
    return (`Currently serving ${line.shift()}.`);
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return ("The line is currently empty.");
  } else {
    let finalString = "The line is currently: ";
    for (let i = 0; i < line.length; i++){
      finalString += `${i + 1}. ${line[i]}, ` 
    } 
    return finalString.slice(0, finalString.length - 2);
  }
}