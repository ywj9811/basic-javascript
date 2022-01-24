var Link = {
    setcolor:function(color){
      var alist = document.querySelectorAll('a');
      var i = 0;
      while (i < alist.length)
      {
        alist[i].style.color= color;
        i = i + 1;
      }
    }
}
var Body = {
    setcolor:function(color){
      document.querySelector('body').style.color = color;
    } ,
    setbackgroundcolor:function (color){
      document.querySelector('body').style.backgroundColor = color;
    }
}

function nightdayhandler(self){var target = document.querySelector('body');
if (self.value === 'night') {
  Body.setbackgroundcolor('black');
  Body.setcolor('white');
  self.value = 'day';
  Link.setcolor('powderblue');
  }

  else {
  Body.setbackgroundcolor('white');
  Body.setcolor('black');
  self.value = 'night';
  Link.setcolor('black');
  }
}