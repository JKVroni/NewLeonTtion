// let stage = 0;


// function setup(){
//     createCanvas(600,400);
// }

// function draw() {
//     switch(stage){
//         /////오픈 stage
//         case 0:
//             background(255);
//             rect(100,100,10,10);
//             break;
//         /////만화1
//         case 1:
//             background(5);
//             circle(200,200,10,10);
//             ///img(처음만화1);
//             //시간이 흐를때마다 한칸씩 만화 애니메이션
//             break; 

//         /////적군 stage
//         case 2:
//           //  if(leonHPClass.LeonHP > 0){
//             background(255);
//             rect(300,300,40,40);
            
//             //else if(leonHPClass.LeonHP <= 0){
//               //  stage = 3;
//             //}
//             //else if(onon.ononNum = 3){
    
//             break;

//         ///// you died
//         case 3:
//             background(5);
//             fill(255);
//             rect(400,300,20,20);
//                 //you died 이미지
//             break;

//         /////만화 2
//         case 4:
//             background(255);
//             ///img(중간만화2);
//             //시간이 흐를때마다 한칸씩 만화 애니메이션
//             break;

//         /////스탠 stage
//         case 5:
//           //  if(leonHPClass.LeonHP > 0){
//             background(5);
//             rect(300,300,40,40);
            
//              //   but == false;
//            // }
//             //else if(leonHPClass.LeonHP <= 0){
//               //  stage = 3;
//            // }
//             //else if(Stan.StanHP <= 0){
//               //  stage = 6;
//            // }
//             //break;
            
//             break;

//         /////만화3 엔딩 stage
//         case 6:
//             background(200);
//             ///img(엔딩만화3);
//             //시간이 흐를때마다 한칸씩 만화 애니메이션
//             //retry
    
//             break;

//     }
// }

// function keyPressed(){
//     if (keyCode == ENTER){
//         if (stage == 0){
//             stage = 1;
//           }
//           else if (stage ==1){
//             stage = 2;
//           } else if (stage ==2){
//                 stage = 3;
//           } else if (stage ==3){
//                 stage = 4;
//           } else if (stage ==4){
//             stage = 5;
//           } else if (stage ==5){
//                 stage = 6;
//           } else if (stage ==6){
//             stage = 0;
//     }
// }
// }

