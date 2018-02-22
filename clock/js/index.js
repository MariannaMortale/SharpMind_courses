//These functions help add, remove or toggle css classes

function tog_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) === true) {
    elem.classList.remove(cl);
  } else {
    elem.classList.add(cl);
  }
}

function add_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) !== true) {
    elem.classList.add(cl);
  }
}

function rem_class(id, cl) {
  var elem = document.getElementById(id);
  if (elem.classList.contains(cl) === true) {
    elem.classList.remove(cl);
  }
}

//This function gets the date and does operations using H/M/S

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  var h1 = (h - h % 10) / 10;
  var h2 = h % 10;

  var m1 = (m - m % 10) / 10;
  var m2 = m % 10;

  var s1 = (s - s % 10) / 10;
  var s2 = s % 10;

  set_nix_class("s1", s1);
  set_nix_class("s2", s2);

  set_nix_class("m1", m1);
  set_nix_class("m2", m2);

  set_nix_class("h1", h1);
  set_nix_class("h2", h2);

  var t = setTimeout(startTime, 500);
}

//This function calls the appropriate class changes 

function set_nix_class(target, val) {
  for (i = 0; i < 10; i++) {
    if (i != val) {
      rem_class("nix_" + target + "_" + i, "nix_open");
    }
  }
  add_class("nix_" + target + "_" + val, "nix_open");
}

function TodaysDay() { 
  var now = new Date();
  var dayNames = new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
  var textout;
  var month = now.getMonth();
  var date = now.getDate();
  textout = date;
  if (month==0) textout+=" января";
  if (month==1) textout+=" февраля";
  if (month==2) textout+=" марта";
  if (month==3) textout+=" апреля";
  if (month==4) textout+=" мая";
  if (month==5) textout+=" июня";
  if (month==6) textout+=" июля";
  if (month==7) textout+=" августа";
  if (month==8) textout+=" сентября";
  if (month==9) textout+=" октября";
  if (month==10) textout+=" ноября";
  if (month==11) textout+=" декабря";
  document.getElementById('DayToday').innerHTML =  'Сегодня' + " " + textout + ", " + dayNames[now.getDay()];
}

function declOfNum(titles){
  var cases = [2, 0, 1, 1, 1, 2];
  return function(number){
    number = Math.abs(number);
    return  titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
  }
}

function daysLeftNewYear() {  
    today = new Date();
    nextDate = new Date("December 31, 2018");
    msPerDay = 24*60*60*1000;
    daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
    var days = declOfNum(['день','дня','дней'])(daysLeft);
    document.getElementById('NewYearDayLeft').innerHTML = "До Нового года осталось" + " " + daysLeft + " " + days;
}

window.onload = function() {
  startTime();
  TodaysDay()
  daysLeftNewYear();
};