// Creating variables
var myX = 400, myY = 280,VRX=Math.random()*-5,VRY=Math.random()*-5,TUG=300,HX=Math.random()*700,HY=1200,P=0,jivoti=3;
window.alert("Welcome to RUN! Run away from the monster with the arrow keys and collect the 5 points before it's too late!!!");
function length (X,Y,x,y){
var a=X-x;
var b=Y-y;
return Math.sqrt(a*a+b*b);
}
function update() {
if(isKeyPressed[80]){
}else{
HY--;
if(myX<0){
myX=0;
}
if(myY<0){
myY=0;
}
if(myX>760){
myX=760;
}
if(myY>560){
myY=560;
}
if(HY<120){
HY=120;
TUG--;
}
if(TUG<=0){
HY=1200;
HX=Math.random()*700;
TUG=300;
}
var l=length(VRX,VRY,myX,myY);
    VRX+=(myX-VRX)/l*1.5;
    VRY+=(myY-VRY)/l*1.5;
if(areColliding(myX, myY, 40, 40,HX,HY,15,15)){
P++;
HX=Math.random()*700;
HY=1200;
}
if(areColliding(VRX,VRY,45,45,myX, myY, 40, 40)){
VRX=Math.random()*-5;
VRY=Math.random()*-5;
jivoti--;
}
if(P==1){
VRX+=(myX-VRX)/l*0.2;
VRY+=(myY-VRY)/l*0.2;
}
if(P==2){
VRX+=(myX-VRX)/l*0.4;
VRY+=(myY-VRY)/l*0.4;
}
if(P==3){
VRX+=(myX-VRX)/l*0.6;
VRY+=(myY-VRY)/l*0.6;
}
if(P==4){
VRX+=(myX-VRX)/l*0.8;
VRY+=(myY-VRY)/l*0.8;
}
}
}
function draw() {
    // This is how you draw a rectangle
    context.fillStyle="#605b5b";
    context.fillRect(0,0,800,600);
    context.fillStyle="#5f47e2";
    context.fillRect(myX, myY, 40, 40);
context.fillStyle="#de6e3c";
context.fillRect(VRX,VRY,45,45);
context.fillStyle="#86d464";
context.fillRect(HX,HY,15,15);
context.fillStyle='lightgreen';
    context.font='30px Title';
    context.fillText("Life:",50,400);
    context.fillText(jivoti,110,432);
    context.font='30px Title';
    context.fillText("Points:",270,280);
    context.fillText(P,450,312);
if(jivoti<=0){
context.fillStyle="black";
context.fillRect(0,0,800,600);
context.fillStyle="red";
context.font='100px Title';
context.fillText("YOU DIED!",130,300);
context.font='30px Title';
context.fillText("Try again(by clicking refresh)!",130,400);
myY=10000;
}
if(P>=5){
context.fillStyle="#266268";
context.fillRect(0,0,800,600);
context.fillStyle="yellow";
context.font='100px Title';
context.fillText("YOU WON!",130,300);
context.font='30px Title';
context.fillText("Play again(by clicking refresh)!",130,400);
myY=1000;
}
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
    if(isKeyPressed[80]){
    }else{
    if(key==37){ //lqvo
     myX=myX-40;
    }
    if(key==39){ //dqsno
       myX=myX+40;
    }
    if(key==38){ //gore
       myY=myY-40;
    }
    if(key==40){ //dolu
       myY=myY+40;
    }
    }
};

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
