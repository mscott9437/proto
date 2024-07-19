
function startTime() {

  let dat4b=document.getElementById('dat4b');

  function checkTime(i) {

    if(i < 10) {

      i = '0' + i;

    }

    return i;

  }

  let day=new Date();
  let hr=day.getHours();
  let min=day.getMinutes();
  let sec=day.getSeconds();

  min=checkTime(min);
  sec=checkTime(sec);

  dat4b.textContent=hr + ':' + min + ':' + sec;
  dat4b.setAttribute('datetime', hr + ':' + min + ':' + sec);

  setTimeout(function() {

    startTime()

  }, 500);

}
