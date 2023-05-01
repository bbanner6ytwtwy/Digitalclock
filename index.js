setInterval(() => {
    time();
});
function time() {
    const dateInfo = new Date();
    const hours = dateInfo
        .getHours()
        .toString();
    const minutes = dateInfo
        .getMinutes()
        .toString()
        .padStart(2, "0");
    const seconds = dateInfo
        .getSeconds()
        .toString()
        .padStart(2, "0");
    console.log(hours);
    console.log(time);
    $(".min").text(minutes + ":");
    $(".hrs").text(hours + ":");
    $(".sec").text(seconds);
}