//<![CDATA[
  ZeroClipboard.config({
    swfPath: "//cdn.jsdelivr.net/zeroclipboard/2.2.0/ZeroClipboard.swf"
  });
  var client = new ZeroClipboard(document.getElementById('btnCopy'));
  client.on('ready', function(event) {
    document.getElementById('btnCopy').style.display = 'inline-block';

    client.on('copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.value);
    });

    client.on('aftercopy', function(event) {
      document.getElementById('btnInfo').style.display = 'block';
      document.getElementById('inputURL').value = '';
      document.getElementById('resultLink').value = '';
    });
  });

  client.on('error', function(event) {
    ZeroClipboard.destroy();
  });
  var output = document.getElementById('resultLink'),
    input = document.getElementById('inputURL');
  input.onkeyup = function() {
    if (input.value != "") {
var x=Math.floor((Math.random()*4)+ 1);
var xxx=null;
if(x=="1"){xxx="11/17-manfaat-strawberry-bagi-kesehatan.html"}
if(x=="2"){xxx="11/manfaat-skipping-lompat-tali-bagi.html"}
if(x=="3"){xxx="11/17-manfaat-strawberry-bagi-kesehatan.html"}
if(x=="4"){xxx="11/manfaat-skipping-lompat-tali-bagi.html"}
output.value = "https://gognanan.blogspot.com/2017/"+xxx+"?url=" + Base64.encode(this.value); //change with your link
    } else {
      output.value = "";
    }
  }
//]]>
