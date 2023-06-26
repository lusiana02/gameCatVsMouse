var xKucing = 0, xTikus = 380, yKucing = 395, yTikus = 440;
var finish = document.getElementById("finish");
finish.style.display="none";
var soundtrack = document.createElement('audio');
soundtrack.src = 'audio/soundtrack.mp3';
var over = document.createElement('audio');
over.src = 'audio/gameover.ogg';
var win = document.createElement('audio');
win.src = 'audio/win.mp3';
var poinTikus = document.createElement('audio');
poinTikus.src = 'audio/poinTikus.wav';
var poinKucing = document.createElement('audio');
poinKucing.src = 'audio/poinKucing.wav';

//setting kucing jalan
window.addEventListener('keydown', function(e){
    var kucing = document.getElementById('kucing'),
    left = parseInt(kucing.style.marginLeft.replace('px',''));
    //arah kiri
    if(e.keyCode == 37 && isMoving==true){
        if(left>0){
            kucing.style.marginLeft = (left-10)+'px';
            xKucing -= 10;
        } 
    //arah kanan 
    }else if(e.keyCode == 39 && isMoving==true){
        if(left<860){
            kucing.style.marginLeft = (left+10)+'px';
            xKucing += 10;
        }  
    }
});
//set kucing lompat
window.addEventListener('keyup', function(e) {
    // 38 => arrowup
    if(e.keyCode == 38 && isMoving==true) {
        // setting kucing loncat 
        document.getElementById('kucing').style.marginTop="250px"; 
        document.getElementById('kucing').setAttribute('class', 'freeze');
        
        // kembalikan ke darat
        setTimeout(function() {
            document.getElementById('kucing').style.marginTop = "390px"; 
            document.getElementById('kucing').setAttribute('class',''); 
            }, 850);
    }
    });

//setting tikus jalan
window.addEventListener('keydown', function(ev){
    var tikus = document.getElementById('tikus'),
    left = parseInt(tikus.style.marginLeft.replace('px','')),
    top = parseInt(tikus.style.marginTop.replace('px',''));
    //arah kiri
    if(ev.keyCode == 65 && isMoving==true){
        if(left>120){
            tikus.style.marginLeft = (left-10)+'px';
            xTikus -= 10;
        } 
    //arah kanan 
    }else if(ev.keyCode == 68 && isMoving==true){
        if(left<860){
            tikus.style.marginLeft = (left+10)+'px';
            xTikus += 10;
        }  
    }
});

window.addEventListener('keyup', function(e) {
    // 87 => w
    if(e.keyCode == 87 && isMoving==true) {
        // setting tikus loncat 
        document.getElementById('tikus').style.marginTop="250px"; 
        document.getElementById('tikus').setAttribute('class', 'freeze');        
        // kembalikan ke darat
        setTimeout(function() {
            document.getElementById('tikus').style.marginTop = "430px"; 
            document.getElementById('tikus').setAttribute('class',''); 
            }, 1000);
    }
    });

//set background dan score
var isMoving = true;
function setBackgroundMoving(){
    if(isMoving == true){
        soundtrack.play();
    setTimeout(function(){
        //background berjalan
        var bg = document.getElementById('board');
        bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px',''))-1)+'px';        
        // //update live score kucing
        // document.getElementById('scoreKcg').innerHTML = parseInt(document.getElementById('scoreKcg').innerHTML)+1;        
        // //update live score tikus
        // document.getElementById('scoreTks').innerHTML = parseInt(document.getElementById('scoreTks').innerHTML)+1;
        //panggil fungsinya terus menerus
        setBackgroundMoving();
    },5); 
}  
}

var 
tikus = document.getElementById('tikus'),
kejumkn = document.getElementById('kejumkn'),
kucing = document.getElementById('kucing'),
ikanmkn = document.getElementById('ikanmkn');

var giliran = 0;

function setkjMoving(){
    // hitung();
    var 
    tikus = document.getElementById('tikus'),
    kejumkn = document.getElementById('kejumkn'),
    kucing = document.getElementById('kucing');

    kejumkn.style.display = "block";
    setTimeout(function(){
        kejumkn.style.display = "block";
        kejumkn.style.marginLeft = (parseInt(kejumkn.style.marginLeft.replace('px',''))-1)+'px';        
        if(parseInt(kejumkn.style.marginLeft.replace('px',''))<-100){
            var randomX = Math.floor(Math.random() * 960);
            kejumkn.style.marginLeft =randomX + 'px';
            giliran=giliran+1;//hitung giliran keju dan ikan hingga finish
            hitunggiliran();            
        }
        if(tikus.offsetTop + 50 >= kejumkn.offsetTop &&
            tikus.offsetLeft + 50 >= kejumkn.offsetLeft &&
            tikus.offsetTop + 50 <= kejumkn.offsetTop + 50 &&
            tikus.offsetLeft <= kejumkn.offsetLeft + 50){       
            kejumkn.style.display = "none";            
            giliran=giliran+1;//hitung giliran keju dan ikan hingga finish
            hitunggiliran();  
            //update score tikus
            document.getElementById('scoreTks').innerHTML = parseInt(document.getElementById('scoreTks').innerHTML)+10;
            //sound poin tikus
            poinTikus.play();
            var randomX = Math.floor(Math.random() * 960);
            kejumkn.style.marginLeft =randomX + 'px';
            // panggilSet();
            panggilSet();
        }else{

            //panggil fungsi terus menerus            
            kejumkn.style.display = "block";
            // panggilSet();
            panggilSet();
            //jika kucing makan keju
            if(kucing.offsetTop + 50 >= kejumkn.offsetTop &&
                kucing.offsetLeft + 50 >= kejumkn.offsetLeft &&
                kucing.offsetTop + 50 <= kejumkn.offsetTop + 50 &&
                kucing.offsetLeft <= kejumkn.offsetLeft + 50){
                gameover();
            }
             
        }
    },5);
}

function setIkMoving(){
    // hitung();
    var 
    tikus = document.getElementById('tikus'),
    kucing = document.getElementById('kucing'),
    ikanmkn = document.getElementById('ikanmkn');
    ikanmkn.style.display = "block";
    setTimeout(function(){
        ikanmkn.style.display = "block";
        ikanmkn.style.marginLeft = (parseInt(ikanmkn.style.marginLeft.replace('px',''))-1)+'px';        
        if(parseInt(ikanmkn.style.marginLeft.replace('px',''))<-100){
            ikanmkn.style.marginLeft ="650px";
            giliran=giliran+1;//hitung giliran keju dan ikan hingga finish
            hitunggiliran(); 
        }
        if(kucing.offsetTop + 70 >= ikanmkn.offsetTop &&
            kucing.offsetLeft + 70 >= ikanmkn.offsetLeft &&
            kucing.offsetTop + 70 <= ikanmkn.offsetTop + 70 &&
            kucing.offsetLeft <= ikanmkn.offsetLeft + 70){
                ikanmkn.style.display = "none";                
                giliran=giliran+1;//hitung giliran keju dan ikan hingga finish
                hitunggiliran(); 
                ikanmkn.style.marginLeft ="650px";

                //update score kucing
                document.getElementById('scoreKcg').innerHTML = parseInt(document.getElementById('scoreKcg').innerHTML)+10;  
                //sound poin kucing
                poinKucing.play(); 
                // panggilSet();
                panggilSet();
        }else{
            // panggilSet();
            panggilSet();
            //jika tikus makan ikan
            if(tikus.offsetTop + 50 >= ikanmkn.offsetTop &&
                tikus.offsetLeft + 50 >= ikanmkn.offsetLeft &&
                tikus.offsetTop + 50 <= ikanmkn.offsetTop + 50 &&
                tikus.offsetLeft <= ikanmkn.offsetLeft + 50){           
                gameover();
            }
             
        }
    },5);
}


function panggilSet(){
    if(isMoving==true){
        if (giliran% 2 === 0){
            setIkMoving();
        }else{
            setkjMoving();
        }
    }
}

var tikusWin = document.getElementById("tikusWin");
tikusWin.style.display="none";
var kucingWin = document.getElementById("kucingWin");
kucingWin.style.display="none";
var seriWin = document.getElementById("seriWin");
seriWin.style.display="none";


function gameover(){
    var scoreKcg = parseInt(document.getElementById('scoreKcg').innerHTML);
    var scoreTks = parseInt(document.getElementById('scoreTks').innerHTML);
    soundtrack.pause();
    over.play();
    tikus.setAttribute('class','freeze');
    kucing.setAttribute('class','freeze');
    isMoving = false;
    if(scoreKcg>scoreTks){        
        kucingWin.style.display="block";
    }else if(scoreTks>scoreKcg){
        tikusWin.style.display="block";
    }else if (scoreKcg==scoreTks){
        seriWin.style.display="block";
    }
}



function setFinish(){
    setTimeout(function(){
        finish.style.display="block";
        finish.style.marginLeft = (parseInt( finish.style.marginLeft.replace('px',''))-1)+'px';        
        if(tikus.offsetTop + 50 >= finish.offsetTop &&
            tikus.offsetLeft + 50 >= finish.offsetLeft &&
            tikus.offsetTop + 50 <= finish.offsetTop + 50 &&
            tikus.offsetLeft <= finish.offsetLeft + 50){   
            //update score tikus
            document.getElementById('scoreTks').innerHTML = parseInt(document.getElementById('scoreTks').innerHTML)+10;
            gameover();
        }else{
            setFinish();
        }
    },5);
}
 
//giliran keju dan ikan muncul
function hitunggiliran(){
    if(giliran==10){
        finish.style.display="block";
        setFinish();
    }
}

setInterval(function() {
    var soundtrack = document.createElement('audio');
    soundtrack.src = 'audio/soundtrack.mp3';
    var gameover = document.createElement('audio');
    gameover.src = 'audio/gameover.ogg';
    var kucingRect = kucing.getBoundingClientRect();
    var tikusRect = tikus.getBoundingClientRect();
    if (!(kucingRect.right < tikusRect.left ||
          kucingRect.left > tikusRect.right || 
          kucingRect.bottom < tikusRect.top ||
          kucingRect.top > tikusRect.bottom)) {   
            soundtrack.pause();
            over.play();
            tikus.setAttribute('class','freeze');
            kucing.setAttribute('class','freeze');
            isMoving = false;
            kucingWin.style.display="block";
    }
}, 5);


//panggil set keju/ikan sesuai giliran
panggilSet();
//inisialisasi fungsi background berjalan
setBackgroundMoving();
//hitung giliran keju dan ikan hingga finish
hitunggiliran(); 