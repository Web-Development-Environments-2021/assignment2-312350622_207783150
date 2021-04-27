var direct;
var context;
var width_canvas;
var hight_canvas;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var timeGame=60;
var interval;
var interval_manster;
var interval_chery ;
var interval_manster ;
var interval_speacil1 ;
var interval_speacil2 ;
var interval_speacil3 ;
var key_upCode=38;
var key_downCode=40;
var key_rightCode=37;
var key_leftCode=39;
var precent5ball;
var precent15ball;
var precent25ball;
var numberOfBall;
var numberOf5Ball;
var numberOf15Ball;
var numberOf25Ball=10;
var point5color="#33cc33";
var point15color="#F70202";
var point25color="#0702F7";
var numberofManster=1;
var width_rec;
var hight_rec;
var direct;
var food_remain; 
var food_remain_num5;
var food_remain_num15;
var food_remain_num25; 
var img_right;
var img_left;
var img_down;
var img_up;
var img_manster_red;
var img_manster_blue;
var img_manster_orange;
var img_manster_pink;
var img_chery;
var img_wall;
var img_clock;
var number_present;
var img_hamborger;
var img_chips;
var img_drink;
var shape_hamborger=new Object();
var shape_chips=new Object();
var shape_drink=new Object();
var numberLive;
var shapeChery = new Object();
var lastPositionChery=1;
var shape_manster_red=new Object();
var shape_manster_blue=new Object();
var shape_manster_orange=new Object();
var shape_manster_pink=new Object();
var shapeClock=new Object();
var manster_arr;
var sound_play;
var sound_gameOver;

var sound_looseLive;
var sound_winner;
var sound_loose;
var eat_clock;
var eat_chery;
var eat_speacial1;
var eat_speacial2;
var eat_speacial3;
var apperTimeSpeacial1 ;
var apperTimeSpeacial2;
var apperTimeSpeacial3;
var numberBallEat;
var playSoundBoll;
$(window).on('beforeunload', function(){
	$(window).scrollTop(0);
  });
  
  function show(div_show)
  {
	if(div_show=='login')
	  {

		let form = $("form[name='login']");
		form[0].reset();
		
	  }
	$("#"+"gameDiv").hide();
	$("#"+"welcomeDiv").hide();
	$("#"+"register").hide();
	$("#"+"about").hide();
	$("#"+"login").hide();
	$("#"+"setting").hide();
	$('#'+"GameOver").hide();

	//stopSound();	
	if(sound_play != undefined)
		stopSound();
	window.clearInterval(interval);
	window.clearInterval(interval_manster);
	window.clearInterval(interval_chery);
	window.clearInterval(interval_speacil1);
	window.clearInterval(interval_speacil2);
	window.clearInterval(interval_speacil3);
	restartSetting();

	$("#"+div_show).show();
  }

 
  function KeyUpdate(e,direct){

	if(direct=="UP")
	{
		 key_upCode=e.keyCode;
		 if(key_upCode==38)
			 document.getElementById("keyUP").value= "ArrowUp";
		 else
			 document.getElementById("keyUP").value=  getValKey(e);

	}
	if(direct=="DOWN"){
		 key_downCode=e.keyCode;
		 if(key_downCode==40)
		 	document.getElementById("keyDOWN").value= "ArrowDown";
		 else
			 document.getElementById("keyDOWN").value= getValKey(e);

	}
	if(direct=="LEFT"){
		key_rightCode=e.keyCode;
		 if(key_rightCode==37)
			 document.getElementById("keyLEFT").value= "ArrowLeft";
		else
			document.getElementById("keyLEFT").value=  getValKey(e);


		}
	if(direct=="RIGHT"){
		key_leftCode=e.keyCode;
		 if(key_leftCode==39)
			 document.getElementById("keyRIGHT").value= "ArrowRight";
		else
			document.getElementById("keyRIGHT").value= getValKey(e);

	} 
  }
  
  function getValKey(key)
  {
	
		 let key_new=key.keyCode;
		 if(key_new==38)
			 return "ArrowUp";
		
		 if(key_new==40)
		 	 return "ArrowDown";
		
		 if(key_new==37)
			return "ArrowLeft";
	
		 if(key_new==39)
			return "ArrowRight";
		
		return String.fromCharCode(key.keyCode);

	} 


  


  function changeColor(event,number){
	 if(number=='5'){
	   	document.getElementById("colorBall5").value=event.value;
		point5color=event.value;
	}
	
	if(number=='15'){
		document.getElementById("colorBall15").value=event.value;
		point15color=event.value;
	}
	if(number=='25'){
	 	document.getElementById("colorBall25").value=event.value;
		point25color=event.value;
	}
  }

  function randomSetting()
  {
	 key_upCode=38;
	 key_downCode=40;
	 key_rightCode=37;
	 key_leftCode=39;
	 document.getElementById("keyUP").value= "ArrowUp";
	 document.getElementById("keyDOWN").value= "ArrowDown";
	 document.getElementById("keyRIGHT").value="ArrowRight" ;
	 document.getElementById("keyLEFT").value= "ArrowLeft";

	 //set random number of ball
	 setRandomBall();
	//set random color
	setRandomColor();
	setRandomTimeGame();
	setRandomNumberManster();
  }

  function setRandomBall()
  {
	 /*numberOfBall*/
	 numberOfBall=Math.floor(Math.random() * 41) + 50; 
	 //update the element
	 document.getElementById("amountBall").value=numberOfBall;
	 document.getElementById("numBall").value = numberOfBall;
	
	  precent5ball=60;
	  precent15ball=30;
	  precent25ball=10;
    //update the element
	
	//set the nunmer accroding to precent
	numberOf5Ball=Math.round(numberOfBall*(precent5ball/100));
	numberOf15Ball= Math.round(numberOfBall*(precent15ball/100));
	numberOf25Ball= Math.round(numberOfBall*(precent25ball/100));
  }
 
  function setRandomColor()
  {
	 point5color='#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
	 point15color='#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
	 point25color='#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');

	 //set the color
	 document.getElementById("colorBall5").value = point5color;
	 document.getElementById("colorBall15").value = point15color;
	 document.getElementById("colorBall25").value = point25color;
  }
  
  function setRandomTimeGame()
  {
	 timeGame=Math.floor(Math.random()*141)+60; 
	 document.getElementById("timeGame").value = timeGame;
	 document.getElementById("time").value = timeGame; 
  }

  function setRandomNumberManster()
  {
	 numberofManster=Math.floor(Math.random() *4)+1; 
	 document.getElementById("amountManster").value = numberofManster;
	 document.getElementById("numManster").value = numberofManster;
  }

  function setSetting()
  {
  
	if(document.getElementById("keyUP").value==" "){
		document.getElementById("keyUP").value="ArrowUP";}
	if(document.getElementById("keyDOWN").value==" "){
		document.getElementById("keyDOWN").value="ArrowDown";}
	if(document.getElementById("keyRIGHT").value==" "){
		document.getElementById("keyRIGHT").value="ArrowRight";}
	if(document.getElementById("keyLEFT").value==" "){
		document.getElementById("keyLEFT").value="ArrowLeft";}	
	
	//set the input
	numberOfBall=document.getElementById("amountBall").value;
	precent5ball=60;
	precent15ball=30;
	precent25ball=10;
	
	//set the nunmer accroding to precent
	numberOf5Ball=Math.round(numberOfBall*(precent5ball/100));
	numberOf15Ball= Math.round(numberOfBall*(precent15ball/100));
	numberOf25Ball= Math.round(numberOfBall*(precent25ball/100));
	
	//numcer of manster
	numberofManster= document.getElementById("amountManster").value;
	timeGame= document.getElementById("timeGame").value;

	//color
    point5color=document.getElementById("colorBall5").value ;
    point15color=document.getElementById("colorBall15").value ;
    point25color=document.getElementById("colorBall25").value ;
    
	sound_looseLive=new Audio('sound/loosLive.mp3');
	sound_play=new Audio('sound/game_remex.mp3');
	sound_winner=new Audio('sound/winner.mp3');
	sound_gameOver=new Audio('sound/gameOver.mp3')
	
	restartLive()
	
	$(document).ready(function() {
		context = canvas.getContext("2d");
		width_canvas=canvas.width;
		hight_canvas=canvas.height;
		width_rec=width_canvas/22;
		hight_rec=hight_canvas/22;
		updateSetting();
		show('gameDiv');
		Start();
	});
	
  }

function updateSetting()
{
	document.getElementById("ballNumber").value =numberOfBall;
	document.getElementById("globalTime").value =timeGame;
	document.getElementById("setNumberManster").value =numberofManster;
	document.getElementById("setkeyUP").value =document.getElementById("keyUP").value;
	document.getElementById("setkeyDown").value =document.getElementById("keyDOWN").value;
	document.getElementById("setkeyRight").value =document.getElementById("keyRIGHT").value;
	document.getElementById("setkeyLeft").value =document.getElementById("keyLEFT").value;
	document.getElementById("set5pointColor").value =document.getElementById("colorBall5").value;
	document.getElementById("set15pointColor").value =document.getElementById("colorBall15").value;
	document.getElementById("set25pointColor").value =document.getElementById("colorBall25").value;
	document.getElementById("player_name").value =document.getElementsByName("username_login")[0].value;
}

function Start() {
	window.focus();
	playSoundBoll=true;
	playSound();
	numberLive=5;
	number_present=2;
	hero = {speed: 256 }; // movement in pixels per second
	eat_chery=false;
	eat_clock=false;
	eat_speacial1=false;
    eat_speacial2=false;
    eat_speacial3=false;
	direct = 4;
	board = new Array();
	manster_arr=new Array();
	score = 0;
	var cnt = 22*22;
	food_remain =numberOf5Ball+numberOf15Ball+numberOf25Ball;
	food_remain_num5 =numberOf5Ball;
	food_remain_num15 =numberOf15Ball;
	food_remain_num25 =numberOf25Ball;
	numberBallEat=food_remain;
	
    
	var pacman_remain = 1;
	start_time = new Date();
	for (var i = 0; i < 22; i++) {
		board[i] = new Array();
		//put obstacles 
		for (var j = 0; j < 22; j++) {
			if(	numberofManster>=1 && i==1 && j==1 )
				{
					//shape_manster_red.i=i;
					//shape_manster_red.j=j;
					manster_arr[1]=new Object();
					manster_arr[1].i=i;
					manster_arr[1].j=j;		
				}
			//21 type 2 manster blue
			 else if(numberofManster>=2 && i==20 && j==20){
				manster_arr[2]=new Object();
				manster_arr[2].i=i;
				manster_arr[2].j=j;
				}
			//22 type 3 manster orange
			 else if(numberofManster>=3 && i==1 && j==20)
				{
					//shape_manster_orange.i=i;
					//shape_manster_orange.j=j;
					manster_arr[3]=new Object();
					manster_arr[3].i=i;
					manster_arr[3].j=j;
				}
			//23 type 3 manster pink
			 else if(numberofManster>=4 && i==20 && j==1)
				{
					manster_arr[4]=new Object();
					manster_arr[4].i=i;
					manster_arr[4].j=j;
				}	
			//chery type 50 
			else if(i==10 && j==10)
			{
				shapeChery.i=i;
				shapeChery.j=j;
			}
			//obstacle
			else if(i==0 || i==21)
				board[i][j]=4;
		
			else if( j==0 ||j==21)
				board[i][j]=4;
			else if(j==4 && i==2 || j==3&& i==2 || j==2&& i==2|| j==2&& i==3 || j==2&& i==4 
			  || j==3 && i==4  || j==4 && i==4  || j==5 && i==4  || j==6 && i==4)
				board[i][j]=4;
			
			else if(j==8 && i==2 || j==9 && i==2 || j==10&& i==2|| j==11&& i==2 || j==12&& i==2
				|| j==13 && i==2  ||
				j==8 && i==5 || j==9 && i==5 || j==10&& i==5|| j==11&& i==5 || j==12&& i==5
				|| i==3 && j==10 || i==4 && j==10 )
					board[i][j]=4;
			else if(j==17 && i==2 || j==18 && i==2 || j==19 && i==2|| j==19&& i==3 || j==19&& i==4			
				|| j==19 && i==4 || j==18&& i==4|| j==17&& i==4 || j==16&& i==4
				|| i==4 && j==15 )
					board[i][j]=4;
			else if(j==1 && i==6 || j==2 && i==6 || j==3 && i==6|| j==4&& i==6 )
					board[i][j]=4;
			else if(j==17 && i==6 || j==18 && i==6 || j==19 && i==6|| j==20 && i==6 )
				board[i][j]=4;
			else if(j==2 && i==10 || j==3 && i==8 || j==3 && i==9||j==3 && i==10 
				||j==3 && i==11||j==3 && i==12||j==3 && i==13 ||j==4 && i==11  )
					board[i][j]=4;
			else if( j==6 && i==8 || j==6 && i==9||j==6 && i==10 
				||j==6 && i==11||j==6 && i==12||j==6 && i==13 ||j==7 && i==10 )
					board[i][j]=4;
			else if( j==9 && i==8 || j==9 && i==9||j==10 && i==8 
					||j==11 && i==8||j==12 && i==8||j==12 && i==9 )
						board[i][j]=4;
			else if( j==9 && i==12 || j==9 && i==13||j==10 && i==13 
				||j==11 && i==13||j==12 && i==13||j==12 && i==12 )
					board[i][j]=4;	
			else if( j==15 && i==8 || j==15 && i==9||j==15 && i==10 
				||j==15 && i==11||j==15 && i==12||j==15 && i==13 ||j==14 && i==10 )
					board[i][j]=4;
			else if(j==17 && i==11 || j==18 && i==8 || j==18 && i==9||j==18 && i==10 
				||j==18 && i==11||j==18 && i==12||j==18 && i==13 ||j==19 && i==10  )
					board[i][j]=4;		
			else if(j==1 && i==15 || j==2 && i==15 || j==3 && i==15|| j==4&& i==15 )
					board[i][j]=4;
			else if(j==17 && i==15 || j==18 && i==15 || j==19 && i==15|| j==20 && i==15 )
				board[i][j]=4;
			else if(j==4 && i==19 || j==3&& i==19 || j==2&& i==19|| j==2&& i==18 || j==2&& i==17 
				|| j==3 && i==17  || j==4 && i==17  || j==5 && i==17  || j==6 && i==17)
					board[i][j]=4;	
			else if(j==8 && i==16 || j==9 && i==16 || j==10&& i==16|| j==11&& i==16 || j==12&& i==16
					|| j==13 && i==16  ||
					j==8 && i==19 || j==9 && i==19 || j==10 && i==19|| j==11&& i==19 || j==12&& i==19
					|| i==17 && j==10 || i==18 && j==10 )
						board[i][j]=4;
			else if(j==17 && i==19 || j==18 && i==19 || j==19 && i==19|| j==19&& i==18 || j==19&& i==17
				|| j==19 && i==17 || j==18&& i==17|| j==17&& i==17 || j==16&& i==17
				|| i==4 && j==17 )
					board[i][j]=4;
			else {
				//put food
				var randomNum = Math.random();
				//if will food in arr[i][j]
				if (randomNum <= (1.0 * food_remain) / cnt ) { 
					if(typeof board[i][j] == "undefined"){
						food_remain--;
						var type_food= randomTypefood(board);
						board[i][j] = type_food;
				} 
			}
				else{

					board[i][j] = 0;

				}
				cnt--;
			}
			
		}
	}
	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		var type_food= randomTypefood(board);
		board[emptyCell[0]][emptyCell[1]] = type_food;
		food_remain--;
	}
	restartSpaicalShape();
	
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	creat_image();
	interval = setInterval(UpdatePosition, 150);
	interval_chery = setInterval(updatePositionChery, 600);
	interval_manster = setInterval(UpdatePositionManster, 550);//500
	interval_speacil1 = setInterval(updatePositionSpeacial1, 15000);
	interval_speacil2 = setInterval(updatePositionSpeacial2, 20000);
	interval_speacil3 = setInterval(updatePositionSpeacial3, 25000);
	
	
	

}

function restartSpaicalShape(){
	
	let emptyCell = findRandomEmptyCell(board);
    shape.i = emptyCell[0];;
	shape.j = emptyCell[1];
	board[emptyCell[0]][emptyCell[1]] = 2;
	
	emptyCell = findRandomEmptyCell(board);
	shapeClock.i=emptyCell[0];
	shapeClock.j=emptyCell[1];
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 19 + 1);
	var j = Math.floor(Math.random() * 19+ 1);
	while (board[i][j] !=0) {
		i = Math.floor(Math.random() * 19 + 1);
		j = Math.floor(Math.random() * 19 + 1);
	}
	return [i, j];
}

function randomTypefood(board) {
	
	if(food_remain_num5>0 && food_remain_num15>0 && food_remain_num25>0)
	{
		let random_number=Math.floor(Math.random() * 3) + 1;

		if(random_number==1){
			food_remain_num5--;
			return 5;
		}
		else if(random_number==2){
			food_remain_num15--;
			return 15;
		}
		if(random_number==3){
			food_remain_num25--;
			return 25;
		}
	}

	else if(food_remain_num5>0 && food_remain_num15>0 && food_remain_num25==0)
	{
		let random_number=Math.floor(Math.random() * 2) + 1;

		if(random_number==1){
			food_remain_num5--;
			return 5;
		}
		else if(random_number==2){
			food_remain_num15--;
			return 15;
		}
		
	}
	else if(food_remain_num5 >0 && food_remain_num15==0 && food_remain_num25>0)
	{
		let random_number=Math.floor(Math.random() *2) + 1;

		if(random_number==1){
			food_remain_num5--;
			return 5;
		}
		else if(random_number==2){
			food_remain_num25--;
			return 25;
		}
		
	}
	else if(food_remain_num5==0 && food_remain_num15>0 && food_remain_num25>0)
	{
		let random_number=Math.floor(Math.random() *2) + 1;

		if(random_number==1){
			food_remain_num15--;
			return 15;
		}
		else if(random_number==2){
			food_remain_num25--;
			return 25;
		}
		
	}
	else if(food_remain_num5>0 && food_remain_num15==0 && food_remain_num25==0)
	{
			food_remain_num5--;
			return 5;
		
	}
	else if(food_remain_num5==0 && food_remain_num15>0 && food_remain_num25==0)
	{
			food_remain_num15--;
			return 15;	
	}
	else if(food_remain_num5==0 && food_remain_num15==0 && food_remain_num25>0)
	{
	
			food_remain_num25--;
			return 25;	
	}
	else 
		return 0;
}

function GetKeyPressed() {

	if (keysDown[key_upCode]) {
		return 1;
	}
	if (keysDown[key_downCode]) {
		return 2;
	}
	if (keysDown[key_rightCode]) {
		return 3;
	}
	if (keysDown[key_leftCode]) {
		return 4;
	}
}

function creat_image()
{

	img_right = new Image();
	img_right.src='images/pacmanRight.png';
	
	img_left = new Image();
	img_left.src='images/pacmanLeft.png';

	img_up = new Image();
	img_up.src='images/pacmanUp.png';

	img_down = new Image();
	img_down.src='images/pacmanDown.png';
	
	img_manster_red=new Image();
	img_manster_red.src='images/manster_1.png';

	img_manster_blue=new Image();
	img_manster_blue.src='images/manster_2.png';

	img_manster_orange=new Image();
	img_manster_orange.src='images/manster_3.png';

	img_manster_pink=new Image();
	img_manster_pink.src='images/manster_4.png';

	img_chery=new Image();
	img_chery.src='images/chery2.png';

	
	img_wall=new Image();
	img_wall.src='images/wall2.jpeg';

	img_clock=new Image();
	img_clock.src='images/clock.png';

	img_hamborger=new Image();
	img_hamborger.src='images/eat_hamborger.png';

	img_chips=new Image();
	img_chips.src='images/eat_chips.png';

	img_drink=new Image();
	img_drink.src='images/eat_drink.png';
	
}

function DrawManster()
{
	if(numberofManster>=1)
		context.drawImage(img_manster_red, manster_arr[1].i*width_rec, manster_arr[1].j*hight_rec,width_rec,hight_rec);
	if(numberofManster>=2)
		context.drawImage(img_manster_blue, manster_arr[2].i*width_rec, manster_arr[2].j*hight_rec,width_rec,hight_rec);
	if(numberofManster>=3)	
		context.drawImage(img_manster_orange, manster_arr[3].i*width_rec, manster_arr[3].j*hight_rec,width_rec,hight_rec);
	if(numberofManster>=4)
		context.drawImage(img_manster_pink, manster_arr[4].i*width_rec, manster_arr[4].j*hight_rec,width_rec,hight_rec);
}
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var keyCode = evt.keyCode;
    if (keyCode >= 37 && keyCode <= 40) {
        return false;
    }
};
function Draw(direct) {
	numberBallEat=0;

	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	
		//alert(width_rec)
	for (var i = 0; i < 22; i++) {
		for (var j = 0; j < 22; j++) {
			var center = new Object();
			center.x = i * width_rec+width_rec/2;
			center.y = j * hight_rec+hight_rec/2 ;
			let add=5;
			if (board[i][j] == 2) 
			{
				if(direct==1)
				{	
					context.drawImage(img_up, center.x-width_rec/2, center.y-hight_rec/2,width_rec+add,hight_rec+add);
				}
				if(direct==2)
				{
					context.drawImage(img_down, center.x-width_rec/2, center.y-hight_rec/2,width_rec+add,hight_rec+add);
				}
				if(direct==3)
				{
					context.drawImage(img_left, center.x-width_rec/2, center.y-hight_rec/2,width_rec+add,hight_rec+add);
				}

				if(direct==4)
				{
					context.drawImage(img_right, center.x-width_rec/2, center.y-hight_rec/2,width_rec+add,hight_rec+add);
				}
			} 
					
			else if (board[i][j] == 5) {
				numberBallEat++;
				context.beginPath();
				context.arc(center.x , center.y , 11, 0, 2 * Math.PI); 
				context.fillStyle = point5color; //color 5food
				context.fill();
				context.font = '14pt Calibri';		
				context.fillStyle = 'white';
				context.textAlign = 'center';
				context.fillText("5", center.x  ,center.y+3 );
			}
			else if (board[i][j] == 15) {
				numberBallEat++;
				context.beginPath();
				context.arc(center.x , center.y , 11, 0, 2 * Math.PI); 
				context.fillStyle =point15color ; //color 15food
				context.fill();
				context.font = '14pt Calibri';		
				context.fillStyle = 'white';
				context.textAlign = 'center';
				context.fillText("15", center.x , center.y+3);
			}	
			else if (board[i][j] == 25) {
				numberBallEat++;
				context.beginPath();
				context.arc(center.x , center.y , 11, 0, 2 * Math.PI); 
				context.fillStyle = point25color; //color 25food
				context.fill();
				context.font = '14pt Calibri';		
				context.fillStyle = 'white';
				context.textAlign = 'center';
				context.fillText("25", center.x , center.y+3 );
			}
			else if (board[i][j] == 4) {
				context.drawImage(img_wall, center.x-width_rec/2, center.y-hight_rec/2,width_rec,hight_rec);
			}
			let currentTime1 = new Date();
			let time_elapsed_spicial1 = (currentTime1 - apperTimeSpeacial1)/1000 ;
			 if(board[i][j]==10 )
			 {
				 if(time_elapsed_spicial1<10)
				 	context.drawImage(img_hamborger,  center.x-width_rec/2, center.y-hight_rec/2,width_rec,hight_rec);
				 else{board[i][j]=0}	
			 }		
			let time_elapsed_spicial2 = (currentTime1 - apperTimeSpeacial2)/1000 ;
			if( board[i][j]==11)
				{ 
					if(time_elapsed_spicial2<8)
						context.drawImage(img_chips,  center.x-width_rec/2, center.y-hight_rec/2,width_rec,hight_rec);
					else
						board[i][j]=0;
			
				}
		

		
			var time_elapsed_spicial3 = (currentTime1 - apperTimeSpeacial3)/1000 ;
			if(board[i][j]==12)
			{
				if(time_elapsed_spicial3<6)
					context.drawImage(img_drink,  center.x-width_rec/2, center.y-hight_rec/2,width_rec,hight_rec);
				else
					board[i][j]=0;
		
			}
	

	}
}
	//speacial clock
	if( (time_elapsed)>3 && time_elapsed<20 && !eat_clock)
			{
				context.drawImage(img_clock, shapeClock.i*width_rec, shapeClock.j*hight_rec,width_rec,hight_rec);
			}	
}

function UpdatePosition() {
	//let direct = 4;
	
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	
	if (typeof x != "undefined")
		direct = x
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
			
		}
	}
	if (x == 2) {
		if (shape.j < 21 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
			
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
			
		}
	}
	if (x == 4) {
		if (shape.i < 21 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
			
		}
	}
	

	if (board[shape.i][shape.j] == 5) {
		score=score+5;
		//numberBallEat=numberBallEat-1;
	}	

	else if (board[shape.i][shape.j] == 15) {
		score=score+15;
		//numberBallEat=numberBallEat-1;
	}

	else if (board[shape.i][shape.j] == 25) {
		score=score+25;
		//numberBallEat=numberBallEat-1;
	}

	if(shapeChery.i==shape.i && shapeChery.j==shape.j)
	{
		score=score+50;
		window.clearInterval(interval_chery);
		eat_chery=true;

	}
	
	if(shapeClock.i==shape.i && shapeClock.j==shape.j && !eat_clock )
	{
		eat_clock=true;
		timeGame=Number(timeGame)+Number(20.0);
		document.getElementById("globalTime").value =timeGame;
	}



	//add 100 points hamorger
	if (board[shape.i][shape.j] == 10) {
	
		board[shape.i][shape.j] == 0;

		score=score+100;
		//eat_speacial1=true;

	}
	//add life
	if(board[shape.i][shape.j] == 11 && number_present>0)
	{
		board[shape.i][shape.j] == 0;
		$("#"+'life'+(numberLive+1)).show();
		numberLive++;
        number_present--;
		//eat_speacial2=true;
		if(number_present==0)
			window.clearInterval(interval_speacil2);

	}

	//add points

	if(board[shape.i][shape.j] == 12 )
	{
	let food=3;
	board[shape.i][shape.j] == 0;
	//numberBallEat=numberBallEat+3;
	//alert(numberBallEat)
	while (food > 0) {
		
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] =15;
		food--;
		//eat_speacial3=true;

	}
	}

	if(checkManster())
	{
		if(playSoundBoll)
			sound_looseLive.play();
		updateLive();
		board[shape.i][shape.j]=0;	

	}
	else
	{

		board[shape.i][shape.j] = 2;
	}

	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if ( time_elapsed >=timeGame) {
		if(score<100 && numberLive>0)
		{
		  stopSound(); 
		  sound_gameOver.play();
		  alert("You are better than "+score+" points!");
		}
		else if(numberLive>0 && score>=100){
	      stopSound(); 
		  sound_winner.play();
		  alert("Winner!!!");
		}
	 
		gameOver();
	}
	if(numberBallEat==0)
	{
		    
			stopSound(); 
			sound_winner.play();
			alert("Winner!!!");		
			gameOver();

	}

	else {
		Draw(direct);
		DrawManster();
		if(!eat_chery)
			DrawChery();
	   
	}
	
}


function checkManster(){

	for(let x=1;x<manster_arr.length; x++)
	{

		if(shape.i==manster_arr[x].i && shape.j==manster_arr[x].j)
			return true;
		
	}
	return false;


}


function UpdatePositionManster()
{
	
	for(let x=1;x<manster_arr.length; x++)
	{

		if(shape.i==manster_arr[x].i && shape.j==manster_arr[x].j){
		if(playSoundBoll)
			sound_looseLive.play();
		updateLive()	
		board[shape.i][shape.j] = 0;
		}
	}
	algorithmManster();


}
function algorithmManster()
{
  
  //Find out the direction (angle) the Ghost needs to move towards
  //Using SOH-CAH-TOA trignometic rations
  
	for(var x=1;x<manster_arr.length;x++){
		var opposite=shape.j-manster_arr[x].j;
		var adjacent=shape.i-manster_arr[x].i;
		
		var angle_radians= Math.atan2(opposite,adjacent);
		
	

		let vx = Math.round( Math.cos(angle_radians));
		let vy= Math.round( Math.sin(angle_radians));
		
		if(vx==0 && vy==1  && validMove(manster_arr[x].i,manster_arr[x].j+1))
		{	manster_arr[x].i=manster_arr[x].i;
			manster_arr[x].j=manster_arr[x].j+1;
		}
		

		else if(vx==-1 && vy==-1){
			if(validMove(manster_arr[x].i-1,manster_arr[x].j))
				manster_arr[x].i=manster_arr[x].i-1;
			else if(validMove(manster_arr[x].i,manster_arr[x].j-1))
				manster_arr[x].j=manster_arr[x].j-1;
			
			else
				findRandomCellManster(manster_arr[x]);

				}

		
		else if(vx==1 && vy==1)
		{	
			if(validMove(manster_arr[x].i+1,manster_arr[x].j))
				manster_arr[x].i=manster_arr[x].i+1;
			else if(validMove(manster_arr[x].i,manster_arr[x].j+1))
				manster_arr[x].j=manster_arr[x].j+1;
			else
				findRandomCellManster(manster_arr[x]);	

				

		}
		else if(vx==0 && vy==-1 && validMove(manster_arr[x].i,manster_arr[x].j-1) )
		{	
			manster_arr[x].i=manster_arr[x].i;
			manster_arr[x].j=manster_arr[x].j-1;
		}
		else if(vx==1 && vy==0 && validMove(manster_arr[x].i+1,manster_arr[x].j))
		{	
			manster_arr[x].i=manster_arr[x].i+1;
			manster_arr[x].j=manster_arr[x].j;
		}
		else if(vx==1 && vy==-1)
		{	
			if(validMove(manster_arr[x].i+1,manster_arr[x].j))
				manster_arr[x].i=manster_arr[x].i+1;
			else if(validMove(manster_arr[x].i,manster_arr[x].j-1))
				manster_arr[x].j=manster_arr[x].j-1;
			else
				findRandomCellManster(manster_arr[x]);	

				
		}
		else if(vx==-1 && vy==1)
		{	
			if(validMove(manster_arr[x].i-1,manster_arr[x].j))
				manster_arr[x].i=manster_arr[x].i-1;
			else if(validMove(manster_arr[x].i,manster_arr[x].j+1))
				manster_arr[x].j=manster_arr[x].j+1;
			else
				findRandomCellManster(manster_arr[x]);	

		}
		else if(vx==-1 && vy==0 && validMove(manster_arr[x].i-1,manster_arr[x].j) )
		{	
			manster_arr[x].i=manster_arr[x].i-1;
			manster_arr[x].j=manster_arr[x].j;
		}
		else if(vx==0 && vy==0 )
		{	
			if(shape.i==manster_arr[x].i+1 )
				manster_arr[x].i=manster_arr[x].i+1;
			else if(shape.i==manster_arr[x].i-1 )
				manster_arr[x].i=manster_arr[x].i-1;
			else if(shape.j==manster_arr[x].j+1 )
				manster_arr[x].j=manster_arr[x].j+1;
			else if(shape.j==manster_arr[x].j-1 )
				manster_arr[x].j=manster_arr[x].j-1;
		    else
				findRandomCellManster(manster_arr[x]);	

		}
			
		else
		{
			findRandomCellManster(manster_arr[x]);
		
		}	
}
}

function findRandomCellManster(manster_shape)
{

	let notFound=true;
	let x=1;
	while(notFound)
	{
		x=	Math.floor(Math.random() *4) + 1;

		
		if (x == 1) {
			if (manster_shape.j > 0 && board[manster_shape.i][manster_shape.j - 1] != 4) {
				manster_shape.j--;
				notFound=false;
			}
		}
		else if (x == 2) {
			if (manster_shape.j < 21 && board[manster_shape.i][manster_shape.j + 1] != 4) {
				manster_shape.j++;
				notFound=false;				
			}
		}
		else if (x == 3) {
			if (manster_shape.i > 0 && board[manster_shape.i - 1][manster_shape.j] != 4) {
				manster_shape.i--;
				notFound=false;	
			}
		}
		else if (x == 4) {
			if (manster_shape.i < 21 && board[manster_shape.i + 1][manster_shape.j] != 4) {
				manster_shape.i++;
				notFound=false;
			}
		}
	
}
}

function validMove(x,y){

		if (x< 0 || x>21) {
			return false;
			
		}
		else if(y<0 ||y>21)
		{
			return false;

		}
		
		else if (y<21 &&y>0 && x<21 && x>0){
			if (board[x][y] == 4) 
			
			{

			return false;
			
		}
	}	
		return true;
}



function updatePositionChery()
{
	notFound=true;
	var x=1;
	while(notFound)
	{
		x=	Math.floor(Math.random() *4) + 1;

		
		if (x == 1) {
			if (shapeChery.j > 0 && board[shapeChery.i][shapeChery.j - 1] != 4) {
				shapeChery.j--;
				notFound=false;
			}
		}
		else if (x == 2) {
			if (shapeChery.j < 21 && board[shapeChery.i][shapeChery.j + 1] != 4) {
				shapeChery.j++;
				notFound=false;		
			}
		}
		else if (x == 3) {
			if (shapeChery.i > 0 && board[shapeChery.i - 1][shapeChery.j] != 4) {
				shapeChery.i--;
				notFound=false;				
			}
		}
		else if (x == 4) {
			if (shapeChery.i < 21 && board[shapeChery.i + 1][shapeChery.j] != 4) {
				shapeChery.i++;
				notFound=false;			
			}
		}	
	}

}


function DrawChery()
{
		context.drawImage(img_chery, shapeChery.i*width_rec, shapeChery.j*hight_rec,width_rec-1,hight_rec-1);
}

function updateLive()
{	

	downLive();
	numberLive--;
	score=score-10;

	if(numberLive==0)
	{   
		alert("Looser");
		stopSound();
		sound_gameOver.play();
		gameOver();
	}
	else{
		//sound_looseLive.play();
		startlive();
	}
}


function startlive()
{
	direct=4;
	if(	numberofManster>=1  )
	{
		
		manster_arr[1].i=1;
		manster_arr[1].j=1;
		
	}
	//21 type 2 manster blue
 	 if(numberofManster>=2){
	
	manster_arr[2].i=20;
	manster_arr[2].j=20;
	}
	//22 type 3 manster orange
 	 if(numberofManster>=3 )
	{
		manster_arr[3].i=1;
		manster_arr[3].j=20;
	}

  if(numberofManster>=4 )
	{		
		manster_arr[4].i=20;
		manster_arr[4].j=1;
	}	
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 2;
		shape.i = emptyCell[0];
		shape.j = emptyCell[1];	
}

function downLive()
{
	$("#"+'life'+numberLive).hide();

}

function restartLive()
{

  for(var i=1;i<6;i++)
	$("#"+'life'+i).show();
$("#"+'life6').hide();
$("#"+'life7').hide();



}


function gameOver()
{
	
	window.clearInterval(interval);
	window.clearInterval(interval_manster);
	window.clearInterval(interval_chery);
	window.clearInterval(interval_speacil1);
	window.clearInterval(interval_speacil2);
	window.clearInterval(interval_speacil3);
	restartSetting();
	restartLive();
	show("GameOver");
}

function newGame()
{

	stopSound();	
	window.clearInterval(interval);
	window.clearInterval(interval_manster);
	window.clearInterval(interval_chery);
	window.clearInterval(interval_speacil1);
	window.clearInterval(interval_speacil2);
	window.clearInterval(interval_speacil3);
	restartSetting();
	restartLive();
	show('setting');
	
}
function stopSound(){
	sound_play.pause();
	playSoundBoll=false;
	$("#stopSound").hide();
	$("#playSound").show();


}
function playSound(){
	sound_play.play();
	playSoundBoll=true;

	$("#playSound").hide();
	$("#stopSound").show();

}




function updatePositionSpeacial1()
{
	//special 1=10
	apperTimeSpeacial1=new Date();
	let emptyCell = findRandomEmptyCell(board);
   /// shape_hamborger.i = emptyCell[0];;
	//shzape_hamborger.j = emptyCell[1];
	board[emptyCell[0]][emptyCell[1]]=10;

}

	//special 1=11

function updatePositionSpeacial2()
{
	apperTimeSpeacial2=new Date();
	let emptyCell = findRandomEmptyCell(board);
	board[emptyCell[0]][emptyCell[1]]=11;

	eat_speacial2=false;
	

}

function updatePositionSpeacial3()
{	
	apperTimeSpeacial3=new Date();
	let emptyCell = findRandomEmptyCell(board);
	board[emptyCell[0]][emptyCell[1]]=12;

	eat_speacial3=false;

}


function restartSetting()

{
	document.getElementById("keyUP").value= " ";
	document.getElementById("keyDOWN").value= " ";
	document.getElementById("keyRIGHT").value=" ";
	document.getElementById("keyLEFT").value= " ";
	
	
}