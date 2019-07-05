/*

*/


function start(e) {
  var name =[
  {
    char:'葉',
    big5:'B8AD',
    cns:'1-6634',
    unicode:'8449'
  },
  {
    char:'相',
    big5:'ACDB',
    cns:'1-525E',
    unicode:'76F8'
  },
  {
    char:'佑',
    big5:'A6F6',
    cns:'1-4877',
    unicode:'4F51'
  }
  ];

  var ele = document.getElementById("div1");

  for (var i = 0;i < 3; i++){
    ele.innerHTML += name[i].char;
    ele.innerHTML += ' big5= ';
    ele.innerHTML += name[i].big5;
    ele.innerHTML += ' cns= ';
    ele.innerHTML += name[i].cns;
    ele.innerHTML += ' unicode= ';
    ele.innerHTML += name[i].unicode;
    ele.innerHTML += ' <br> ';
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
