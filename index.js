var numberOfVisits = 20;

function takeANumber(line, name) {
  line.push(numberOfVisits + 1);
  return (`Welcome, You are ticket number ${numberOfVisits}.`);
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