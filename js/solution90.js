/* Human Readable Time

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS). The maximum time never exceeds 359999 (99:59:59) */

// The parameters is a non-negative integer that indicates a count of seconds, which are the basic unit on our clock
// We want to return a vaule that contains hours, minutes, seconds with the specific format of HH:MM:SS
// Take in an integer and divide by 60 and assign the appropriate amount of hours, minutes, and seconds
// We need to convert seconds into hours first, then minutes, then we’ll just have seconds left
// We use Math.floor so that we get a whole number, then we’ll have to subtract the number of seconds we’ve accounted for in hours from our original seconds argument

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600)
    seconds = seconds - (hours * 3600)
    hours = hours.toString().padStart(2, '0')
    let minutes = Math.floor(seconds / 60)
    seconds = (seconds - minutes * 60).toString().padStart(2,'0')
    minutes = minutes.toString().padStart(2, '0')
    return `${hours}:${minutes}:${seconds}`
};

/*Test Cases   
humanReadable(60) => Output: '00:01:00'
humanReadable(3600) => Output: '01:00:00'
humanReadable(45296) => Output: '12:34:56'
humanReadable(86399) => Output: '23:59:59'
*/
