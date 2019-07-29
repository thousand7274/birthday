// console.log(days);
// let date = new Date();
// console.log(date);
// let today = '' + date.getFullYear() + ('0' + (date.getMonth() + 1 )).slice(-2) + date.getDate();
// console.log(today);
function userBirthday(){
  let week = ['日曜日','月曜日','火曜日','水曜日','木曜日','金曜日','土曜日'];
  let inputYear = document.getElementById('userYear').value;
  let inputMonth = document.getElementById('userMonth').value;
  let inputDate = document.getElementById('userDate').value;
  let userDate = new Date(inputYear, inputMonth - 1,inputDate);
  alert(`指定された「${userDate.getFullYear()}年${(userDate.getMonth()+1)}月${userDate.getDate()}日は` + week[userDate.getDay()] + 'です。');}