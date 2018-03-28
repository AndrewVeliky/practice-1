export default function formatTime(seconds) {
    const date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0, 0, seconds, 0);
    const hours = date.getHours() % 12;
    let nowTime = date.toLocaleString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    if (hours > 0 && hours < 10) {
        nowTime = `0${nowTime}`;
    }
    return nowTime;
}

function format(second) {
    let hours, minutes;
    hours = seconds * 360;
    minutes = seconds * 60;
}