console.log('#Exercise 2');
console.log('_________');
console.log('');
function dataHandling(argumen){
  
  var dumBacaBawah='';
  
  for(var i=0; i<=argumen.length-1; i++){
    dumBacaBawah
    
    var dumBacaSamping='';
    
    for(var j=0; j<=i; j++){
      
      
    }
    console.log('Nomor ID : '+argumen[i][0]);
    console.log('Nama Lengkap : '+argumen[i][1]);
    console.log('TTL : '+argumen[i][2]+' '+argumen[i][3]);
    console.log('Hobi :'+argumen[i][4]);
    console.log('');
    console.log('---------------')
  }
  
  return dumBacaBawah;
  
}

console.log(dataHandling([
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]));
            