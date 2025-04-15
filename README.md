# Log File Reader
This program reads a log file, filters log entries based on a time range, and displays the filtered logs.

## Prerequisites
- Node.js installed on your system.

## How to Run

1. Clone or download the project to your local machine.
2. Open project on visual studio code:
3. Ensure you have a `logfile.log` file in the same directory as `index.js`. The log file should contain log entries in the format:
    ```
    YYYY-MM-DDTHH:mm:ss logMessage
    ```
    Example:
    ```
    2025-04-14T10:05:00 Log entry 1
    2025-04-14T10:10:00 Log entry 2
    2025-04-14T10:20:00 Log entry 3
    ```

4. Run the program using Node.js:
    ```bash
    node index.js
    ```

5. The program will output the filtered logs based on the specified time range in the console.
