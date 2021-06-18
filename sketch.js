var ball;
var database,pos;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var nodeRef = database.ref("ball/position");
    nodeRef.on("value",readPos);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("ball/position").set({

        x : pos.x + x ,
        y : pos.y + y


    })
}


function readPos (data){
    pos = data.val();

    ball.x = pos.x ;
    ball.y = pos.y ;
}