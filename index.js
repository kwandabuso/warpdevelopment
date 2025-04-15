const fs = require("fs");
const path = require("path");

const logFilePath = path.join(__dirname, "logfile.log");

function isTimeBetween(startTime, endTime, checkTime) {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const check = new Date(checkTime);

  return check >= start && check <= end;
}

function readLogFileToArray(filePath, callback) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the log file:", err);
      callback(err, null);
      return;
    }
    const lines = data.split("\n").filter((line) => line.trim() !== "");
    callback(null, lines);
  });
}

readLogFileToArray("./logfile.log", (err, lines) => {
  if (err) {
    console.error("Failed to read log file to array.");
    return;
  }
  console.log("Log file as array:", lines);
});

function getLogsBetweenTimes(startTime, endTime) {
  readLogFileToArray(logFilePath, (err, lines) => {
    if (err) {
      console.error("Error reading log file:", err);
      return;
    }

    let records = [];
    for (let index = 0; index < lines.length; index++) {
      const element = lines[index];
      const [logTime, logRecord] = element.trim().split(" ");
      if (isTimeBetween(startTime, endTime, logTime)) {
        records.push(logRecord);
      }
    }

    console.log("Filtered logs:", records);
  });
}
getLogsBetweenTimes("2025-04-14T10:05:00", "2025-04-14T10:15:00");
