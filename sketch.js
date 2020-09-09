var car1, car2, car3, wall, 
car1speed, car2speed, car3speed, 
car1weight, car2weight, car3weight, 
car1deformation, car2deformation, car3deformation, 
car1rating, car2rating, car3rating;

function setup() {
  createCanvas(1600,700);
  
  car1 = createSprite(200,100,50,50);  
  car2 = createSprite(200,300,50,50)
  car3 = createSprite(200,500,50,50);
  
  console.log(car1deformation);
  console.log(car2deformation);
  console.log(car3deformation);

}

function draw() {
  background('black');  

  car1speed = 60;
  car1.velocityX = 70;
  car1weight = 2200;
  car1deformation = 0.5 * car1weight * car1speed * car1speed / 22500;
  
  car2speed = 45;
  car2.velocityX = car2speed;
  car2weight = 1520;
  car2deformation = 0.5 * car2weight * car2speed * car2speed / 22500;
  
  car3speed = 60;
  car3.velocityX = car3speed/2;
  car3weight = 3020;
  car3deformation = 0.5 * car3weight * car3speed * car3speed / 22500;

  var wall = createSprite(1500,300,10,500);
  wall.shapeColor = 'white';

  if((wall.x - car1.x <= wall.width/2 + car1.width/2) && (car1.x - wall.x <= wall.width/2 + car1.width/2)){
    car1.velocityX = 0;
    car1.x = 1475;
    car1test();
  }
  
  if((wall.x - car2.x <= wall.width/2 + car2.width/2) && (car2.x - wall.x <= wall.width/2 + car2.width/2)){
    car2.velocityX = 0;
    car2.x = 1475;
    car2test();
  }
  
  if((wall.x - car3.x <= wall.width/2 + car3.width/2) && (car3.x - wall.x <= wall.width/2 + car3.width/2)){
    car3.velocityX = 0;
    car3.x = 1475;
    car3test();
  }
  
  drawSprites();
 
 if((wall.x - car1.x <= wall.width/2 + car1.width/2) && (car1.x - wall.x <= wall.width/2 + car1.width/2)){
 fill('white');
 text ('Car1 Rating: ' + car1rating, 25,25);
 }

 if((wall.x - car2.x <= wall.width/2 + car2.width/2) && (car2.x - wall.x <= wall.width/2 + car2.width/2)){
 fill('white');
 text ('Car2 Rating: ' + car2rating, 25,50);
 }

 if((wall.x - car3.x <= wall.width/2 + car3.width/2) && (car3.x - wall.x <= wall.width/2 + car3.width/2)){
 fill('white');
 text ('Car3 Rating: ' + car3rating, 25,75);
 }

}

function car1test(){
  if (car1deformation > 180){
    car1rating = 'Lethal'
    car1.shapeColor = 'red'
  }
  if(car1deformation < 180 && ( car1deformation > 100)){
    car1rating = 'Average';
    car1.shapeColor = 'Yellow';
  } 
  if (car1deformation < 80){
    car1rating = 'Good';
    car1.shapeColor = 'green';
  }
}

function car2test(){
 if (car2deformation > 180){
    car2rating = 'Lethal'
    car2.shapeColor = 'red'
   }
   if(car2deformation < 180 && ( car2deformation > 100)){
    car2rating = 'Average';
    car2.shapeColor = 'Yellow';
  }
  if (car2deformation < 80){
    car2rating = 'Good';
    car2.shapeColor = 'green';
  } 
}
function car3test(){
  if (car3deformation > 180){
    car3rating = 'Lethal'
    car3.shapeColor = 'red'
   }
  
   if(car3deformation < 180 && ( car3deformation > 100)){
    car3rating = 'Average';
    car3.shapeColor = 'Yellow';
  }
  
  if (car3deformation < 80){
    car3rating = 'Good';
    car3.shapeColor = 'green';
  } 
}
