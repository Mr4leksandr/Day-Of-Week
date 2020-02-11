const port = 3000;

const express = require("express");
const app = express();
app.set('view engine', "ejs");

function get_day_of_week(date){
    var days_of_week = ["Monday", "Tuesday", "Wendesday","Thursday", "Friday", "Saturday", "Sunday"];

    return days_of_week[date.getDay()];
}

app.get('/today', function(req, res){
    var today = new Date;
    //res.send(get_day_of_week(today));
    res.render('day_of_week', {
        date: today,
        day_of_week: get_day_of_week(today)});
});

app.get('/birthday', function(req, res){
    var birthday = new Date(2001, 11, 9);
    res.render('day_of_week', {
        date: birthday,
        day_of_week: get_day_of_week(birthday)});
});

app.listen(port, function(){
    console.log("Server is running on port "+port)
});