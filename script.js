// Created by swarup Mahato

window.onload=()=>{
    
    let start = document.querySelector(`.start`);
    let ruleBox = document.querySelector(`.rule-box`);
    let exit = ruleBox.querySelector(`#exit`);
    let continueButton = ruleBox.querySelector(`#continue`);
    let quizBox = document.querySelector(`.quiz-box`);
    let nextQuestion = quizBox.querySelector(`#next-question`);
    let questionText = quizBox.querySelector(`.question-text`);
    let optionList = quizBox.querySelector(`.option-list`);
    let questionCounter = quizBox.querySelector(`.question-counter`);
    const time = quizBox.querySelector(`#time`);
    const timeDiv = quizBox.querySelector(`#time-div`);
    const congratsBox = document.querySelector(`.congrats-box`);
    let replay = congratsBox.querySelector(`#replay`);
    let congratExit = congratsBox.querySelector(`#exit`);
    let scoreBoard = congratsBox.querySelector(`.score-board`)   
    let crownIcon = congratsBox.querySelector(`.i-box`);
    let moodSlate = document.querySelector(`#mood-slate`);
       
    let audioCorrect= new Audio();      
        audioCorrect.src = `https://cdn.pixabay.com/download/audio/2022/03/10/audio_c8c8a73467.mp3?filename=correct-2-46134.mp3`  ;
 
   let audioError = new Audio();         
       audioError.src=`https://cdn.pixabay.com/download/audio/2022/11/21/audio_136661e554.mp3?filename=error-126627.mp3`;
    
  
   
    
    let timerFunction;// setInterval;
    
    let timeDivWidth = 0; 
    
    let questionNumber = 0;  
  
    let questionPageNumb= 1; 
  
    let timeCount = 15;// A new count for startTimer() since old number would be cleared.
  
    let hasUserClicked = false;
    
    let userScore = 0;
   
    let correctAnswerPicked = 0;
   
    let descriptionText;
   
    let randomQuestion = 0;
   
    let click = true;
   
    let username ;
    
    let shuffleOptions =[]; // Random number between 0 - 3;
    
    let shuffleQuestions = [];// Random number between 0 - 19
    
    let myCounter = 1;
    
    let arr2 = []; // pushes numbers from 0 - 19;
    
    let a =0;
    
    
     shuffleOpt();// This shuffles the answer amd saves in shuffleOptions[]. then its destructured into let [opt1,opt2,opt3 ,opt4]
     
     
   
   let [opt1, opt2, opt3, opt4] = shuffleOptions;
   
  
   
   addUserName();// Ask for User's name;
   
   
   
   
   
   
   
   
   let text = `Hi ${username}, your Buzz starts soon, while you wait, read instructions carefully and answer accurately, Each answer gives 5 marks. Do not allow the time run your over,  Make sure to comment your score point after your first trial,i'm waiting. i wish you Good luck`;
   
   
  
  
     
  
    
 // An array that holds all questions,options,answers and question numbeers;  
   const questions =[
 {
       
       question : `The focal length of a concave lens is 5 m, its power is?`,
       options : [`0.2D`, `-0.2D`,`2.0D`,`5.0D`],
       answer :`-0.2D`
     },
     {
       
       question : `What is the focal length of a plane mirror?`,
       options : [`Zero`,`infinit`,`25 cm`,`-25 `],
       answer :`infinit`
     },
     
    {
       
       question : `Which of the following can be used to make lenses?`,
       options : [`Water`, `glass`,`plastic`,`All these`],
       answer :`plastic`
     },
     
     {
       
       question : `What is the formula of the mirror?`,
       options : [`1/v-1/u=1/f`, `1/u-1/v=1/f`,`1/v+1/u=1/f`,`it all `],
       answer :`1/v+1/u=1/f`
     },
     
    {
       
       question : `What is the refractive index of glass with respect to water?`,
       options : [`3/2`, `4/6`,`9/8`,`12/16`],
       answer :`9/8`
     },
     
     {
       
       question : `The focal length of a convex lens is 20 cm, what is its power?`,
       options : [`20D`, `15D`,`10D`,`5D`],
       answer :`5D`
     },
     
     {
       
       question : `The unit of radius of curvature will be?`,
       options : [`meter`, `centimeter`,`millimeter`,`it all`],
       answer :`it all`
     },
     
     {
       
       question : `In which of the following medium the speed of light is minimum?`,
       options : [`in diamond`, `in the water`,`in the glass`,`in kerosene`],
       answer :`in the glass`
     },
     
     {
       
       question : `What is the formula for calculating the power of a lens?`,
       options : [`P=4f`, `P=2f`,`P=1/2f`,`P=1/f`],
       answer :`P=1/f`
     },
     
     {
     
       question : `Who has the largest field of vision? `,
       options : [`plane mirror `, `convex mirror `,`concave mirror `,`convex lens`],
       answer :`convex mirror`
     },
     
     {
       
       question : ` Can a plane mirror form an image of an object? `,
       options : [`Virtual `, `real`,`Small `,`Big`],
       answer :`Virtual `
     },
     
     {
       
       question : ` In which medium is the velocity of light the highest? `,
       options : [`Air `, `Water `,`glass ${username}`,`Vacuum`],
       answer :`Vacuum`
     },
     
     {
       
       question : `The radius of curvature of a spherical mirror is 20 cm, what will be its focal length? `,
       options : [`-20cm`, `-10cm`,`40cm`,`10cm`],
       answer :`-10cm`
     },
 
    {
       
       question : `What will be the power of a convex lens of focal length 50 cm?`,
       options : [`-2D`, `2D`,`0.02D`,`-0.02D`],
       answer :`2D`
     }, 
   {
       
       question : `The image formed by a concave lens of an object is always? `,
       options : [`virtual, inverted and smaller`, `virtual, upright and large`,`virtual, straight and short`,`virtual, inverted and enlarged`],
       answer :`virtual, straight and short`
     },
     
     {
       
       question : `What is the formula for magnification of a lens? `,
       options : [`v/u`, `-v/u`,`u/v`,`-u/v`],
       answer :`v/u`
     },
     
    {
       
       question : `What is the relation between focal length and radius of curvature?`,
       options : [`R=f/2`, `R=2f`,`R=f`,`R=4f`],
       answer :`R=2f`
     },
     
     {
       
       question : `If the angle of incidence is i and the angle of refraction is R, then the refracted ray will deviate?`,
       options : [`sin i/sin r`, `i-r`,`i+r`,`i/r`],
       answer :`i-r`
     },
     
     {
       
       question : `If a light ray is incident perpendicular to the boundary surface of two mediums, then the angle of refraction will be-`,
       options : [`0°`, `45°`,`60°`,`90°`],
       answer :`0°`
     },
     
     {
       
       question : `If the power of a lens is plus 1 director, then what will be its focal length?`,
       options : [`50cm`, `100cm`,`25cm`,`20cm`],
       answer :`100cm`
     },
   ];
   
 // End of question array;
    
 
 
 
 shuffleQues(); // shuffle's all question and push values to arr2[];
 
 
 
 
   
 
 // Start button;
     
    start.addEventListener(`click`,()=>{
        start.style.display =`none`;
        ruleBox.classList.add(`activate`);
    });
    
   
    
 // Exit button;   
    exit.addEventListener(`click`,()=>{
    
        ruleBox.classList.remove(`activate`);
        
        start.style.display =`block`;
        
        responsiveVoice.cancel();
 
        
    });
 
 
 
 // continue button; calls 3 functions;    
   continueButton.addEventListener(`click`,()=>{
       
       setQuiz();
       
     
       continueButtonDim();
        
       
       
   });
   
   
   
   
   
   
       
 // This ()  is called when user clicks continueButton.  it delays user for 20 seconds to read instructions; 
  
    function setQuiz(){
    
       if(click){
       
           speech(text);
       
       setTimeout(()=>{
       
           ruleBox.classList.remove(`activate`);
            
           quizBox.classList.add(`active`);
           
           getquestions(shuffleQuestions[a]);
           
           questionPageCounter(1);
     
           startTimer(15);
           
       
      },20000);
       
          
           click = false;
       
     }else{
       
       continueButton.removeEventListener(`click`,setQuiz);
     
     };
       
  };
  
  
  // End of setQuiz();
     
     
     
   
   
   
   
   
   
   
   
   
     
     
 // congratExit button;
     congratExit.addEventListener(`click`,()=>{
     
     
           speech(`Thank You for Playing`);
     
          setTimeout(()=>{
              
              window.location.reload();  
              
          },3000)
                
    });
  
 
 
 
  
 // replay button;
      
      replay.addEventListener(`click`,()=>{
      
         congratsBox.classList.remove(`show`);
       
         start.style.display =`block`;
         
         clearInterval(timerFunction);
          
          hasUserClicked = false;
          
          click = true;
   
          userScore = 0;
   
          correctAnswerPicked = 0;
          
          timeDivWidth = 0; 
          
          questionPageNumb = 1; 
          
          timeDivWidth = 0; 
          
          continueButtonBright();
          
          myCounter = 1;
    
           a =0;
           
           questionNumber = 0;
           
           arr2 =[];
           
           shuffleQuestions =[];
           
           shuffleQues();
          
          speech(`holy crab, looks Someone  having fun, lets go again`);
      });
 
 
 
 
 
 
 
 // when User clicks Next question, it calls getquestions() again but this time, it gives a parameter that will increase at each click.  This happens to enable question array loop through to the end.            
      nextQuestion.addEventListener(`click`,()=>{
      
        if(hasUserClicked){
           
            nextQuest();
            
            buttonDim();
                     
       }else{ 
                 
          nextQuestion.removeEventListener(`click`,nextQuest);
                
       };
             
    });
          
          
         
   function nextQuest(){
    
       if(myCounter  < questions.length ){
          
          a++;
       
          myCounter++;
           
          questionPageNumb++;
           
          getquestions(shuffleQuestions[a]);
          
          questionPageCounter(questionPageNumb);
          
          clearInterval(timerFunction);
          
          startTimer(timeCount);
          
          timeDivWidth = 0;
          
               
     }else{
             
           showCongratsBox();
           
         
       };// End of If/ else;
    
     };// End of nextQuest();
         
         
  //End of nextQuestion click Event;
     
     
     
     
     
     
     
     
   
    
    
    
     
   
   
     
     
 // This () is the reason why OPTIONS shuffle;
    function shuffleOpt(){
     
        let arr=[0,1,2,3];
      
     for(let i=arr.length; i--;){   
     
      shuffleOptions.push(arr.splice(Math.floor(Math.random() *(i+1)),1))[0];
  
  };//End of for loop
      
   };
 // End of shuffleOpt();
 
 
 
 
 
 
     
     
 // This () is the reason why QUESTIONS shuffle;
    function shuffleQues(){
     
          for(let j=0; j < questions.length; j++){
          
          arr2.push(j);       
      };
      
      
         for(let i=arr2.length; i--;){   
              shuffleQuestions.push(arr2.splice(Math.floor(Math.random() *(i+1)),1));
      
     };//End of for loop
     
 };
 // End of shuffleQues();
 
 
 
 
 
 
 
 
 
 
 /*This () is called when user clicks Continue button. 
 
     It loads all values in questions array of INDEX 0 first but if user clicks next question button, it calls this () again but this time around, the INDEX increments from 1 and ++ till questions array's length; here is the  ENGINE room of this code.
     
  This () also add click eventLister to each option.  the event handler being selectedOption(this amd also set hasUserClicked = true.   because User has clicked.
    this, means current option/ object.
    
    This () also sets hasUserClicked =false i.e User didnt click at all.  
 */
   function getquestions(index){
   
    questionNumber++
    
    let questionTag = `<h4>${questionNumber}. ${questions[index].question} </h4>`;
    
    let optionTag = ` <div class="option"> <p> ${questions[index].options[opt1]}</p> <span></span></div>
    
    <div class="option"> <p>${questions[index].options[opt2]}</p> <span></span></div>
    
    <div class="option"> <p>${questions[index].options[opt3]}</p> <span></span></div>
    
    <div class="option">${questions[index].options[opt4]}</p><span></span></div> `;
      
         questionText.innerHTML = questionTag;
         
         optionList.innerHTML = optionTag;
   
    let options = optionList.querySelectorAll(`.option`);
    
         options.forEach(option=>{
          
        option.addEventListener(`click`,function(){
              
               selectedOption(this);
                
               clearInterval(timerFunction);
               
               hasUserClicked = true;
               
               buttonBright();
                   
           });
        });  
        
        hasUserClicked = false;
   };
  
 //End of getquestions();
     
     
     
     
     
     
     
     
     
         
 /* selectedOption () is called when user clicks any option div.
  ****function***
  1) it compares textContent in option to answer in question array.   if its equal, show green else red.  amd once its red, loop through the option again and highlight the correct answer to green.
  
  2) it adds the corresponsding icon.   fa-check for green amd fa-times for red.
  
  3) it loops options again and disables all pointer event in all option tag. this is to prevent user from double clicking.   
 
 */
 
 let iconCorrect = `<i class="fa-solid fa-check"></i>`;
 
 let iconInCorrect = `<i class="fa-solid fa-times"></i>`;
     
   function selectedOption (opt){
         
        let optSpan = opt.querySelector(`span`);
 
        let optionTextcontent = opt.textContent.trim();
        
        let correctAnswer = questions[shuffleQuestions[a]].answer;
        
        
     if(optionTextcontent === correctAnswer ){
          
          opt.classList.add(`correct`);
               
          optSpan.innerHTML = iconCorrect;
          
          userScore +=5;
          
          audioCorrect.play();
          
          correctAnswerPicked++;
          
          showMoodSlate(`Correct`,`lime`);
          
          speech(`correct`);
          
          nextButtonAnimate(); 
               
            //console.log("right"); debugging;
               
       }else{
         
           opt.classList.add(`incorrect`);
            
           optSpan.innerHTML = iconInCorrect;    
           
           audioError.play();
           
           showMoodSlate(`Wrong`,`red`);    
           
           speech(`wrong`);  
           
           nextButtonAnimate(); 
  
              //console.log("wrong"); debugging;
      
     for(let i= 0; i < optionList.children.length; i++ ) {
            
         if(optionList.children[i].textContent.trim() === correctAnswer){
         
         optionList.children[i].classList.add(`correct`)
          
      };//End of if;
       
    };// End of ForLoop;    
        
           
  };// End of if/ Else;
  
           
      //disabling.
         
         for(let i =0; i < optionList.children.length; i++){
             
             optionList.children[i].classList.add(`disable`);
        
         };//End of For Loop; 
         
            
 }; 
 
 // End of selectedOption();
 
 
 
 
 
     
     
     
     
     
     
     
 
 /* This () is responsible for the countdown Timer.
  
 **** functions****
 1) when called, setTime() decrements the variable timeValue-- at every 1 second.
 
 2) Once it gets to 0; clearInterval, hasUserClicked = true and loop through the options and add classList of CORRECT to any option that contains our answer automatically.  
 
 3) add 6.97 to the variable timeDivWidth.  100 ÷ 15 = 6.66 plus 0.31(extra width because of animation timing);
 
 */
    
     function startTimer(timeValue){
 
         let setTime=()=>{// function() called every 1sec;
              
             timeValue  = timeValue <= 0 || timeValue < 10 ? "0"+ timeValue : timeValue;
             
             timeValue <= 4 ? getColor(`red`) : getColor(`#fff`);
               
             time.textContent = timeValue;
               
             timeDiv.style.width = `${timeDivWidth}%`; 
             
          
                      
        if(timeValue === "00") {
        
        
             hasUserClicked = true;
             
             buttonBright();
              
             clearInterval(timerFunction);
             
             showMoodSlate(`Time Out`,`red`);  
             
             speech(`oops,Time out`);
             
                  
       for(let i=0; i < optionList.children.length; i++ ){
              
           if(optionList.children[i].textContent.trim() === questions[shuffleQuestions[a]].answer){
                          
            optionList.children[i].classList.add(`correct`);
             
            optionList.children[i].classList.add(`disable`); 
            
                                          
          }else{
                  
             optionList.children[i].classList.add(`disable`);
                  
           };// Inner If
         
        }; //forLoop;
          
     
      };// Outer If;     
      
          timeValue --;   
                
          timeDivWidth += 6.97;
                      
  };// End of setTimer();
  
          timerFunction = setInterval(setTime,1000);
            
 };// End of startTimer();
   
   
   
   
  
  
  
  
  
  
  
  
  //This () is called together with getquestions() when user clicks continueButton.  this () loads the current question Page in the footer.   
  
     function questionPageCounter(index){
    
          let totalQuestionCounterTag = `<p><span>${index}</span> of <span>${questions.length}</span> Questions</p>` 
    
         questionCounter.innerHTML = totalQuestionCounterTag;
               
  };
  
  // End of questionPageCounter();
     
     
     
 
 
 
 
 
 
 
 
 // () that returns color styling to time element
      function getColor(value){
         
          return time.style.color = `${value}`;
          
      };
 
 // End of getColor();
     
  
  
     
    
    
    
      
     
   
 
 // This () is invokee when myCounter  === questions.length(End of Question); it show the congratsBox amd results;
   function showCongratsBox(){
        
        ruleBox.classList.remove(`activate`);
 
        quizBox.classList.remove(`active`);
           
        congratsBox.classList.add(`show`);
        
        showResult(userScore,correctAnswerPicked);
        
        speak();
        
    };// End of showCongratsBox();
    
 
 
    
    
    
    
    
    
    
    
  /* A () called when congratsBox appears
 
  ****Functions*****
  
  1) Get all elements with class .pickColor and assign getColor variable to them.  it picks color based on user's performance.
 */
     function showResult(value1,value2){
     
        let icon = `<i class="fa-solid fa-crown  fa-shake pickColor"</i>`
     
        let col = [`red`,`tomato`,`lime`,`blue`];
     
        let getColor;
        
        let emoji ;
        
        
          // conditions
           if(value2 < questions.length/ 2){
                
               getColor = col[0];
                 
               descriptionText  = `This is terrible,Do better next time`;
               
               replayExitButtonColor(getColor);
             
               emoji = `😌`;
             
          }else if(value2 === Math.round(questions.length/2)){
               
               getColor = col[1];
               
               descriptionText  = `You tried`;
               
               replayExitButtonColor(getColor);
               
               emoji = `👏`;
               
           }else if(value2 === questions.length){
           
               getColor = col[2];
               
               descriptionText  = `Bullseye, A true Idan`;
               
               replayExitButtonColor(getColor);
               
               emoji = `👑`;
       
         }else{
             
               getColor = col[3];
               
               descriptionText  = `Nearly, but nearly can never kill a bird`;
               
               replayExitButtonColor(getColor);
               
               emoji = `🙃`;
         };
         
         // End conditions;
         
         
       
       crownIcon.innerHTML = icon;
        
       let scorePTags = `<p>You have completed the Quiz!</p>
     
       
                         <p>${username}, You've got <span class="pickColor">${value2}</span> out of <span>${questions.length}</span></p>
                         
                         <p class="pickColor"> ${descriptionText} ${emoji}</p>
             
                        <p>Score Point: <span class="pickColor">${value1}</span> / <span style ="color:lime">${questions.length * 5}</span></p>`;
             
       
       scoreBoard.innerHTML = scorePTags;
       
  
           
 // All element with pickColor class;
 
       let pickCol = document.querySelectorAll(`.pickColor`);
       
          pickCol.forEach(span=>{
              
              span.style.color = getColor;
             
          });   
     
  };// End of showResult()
       
     
     
     
     
     
     
     
     
     
   
  // A () that adds respective color to replay and exit button according to user performance.
  
     function replayExitButtonColor(val){
         
         replay.style.color =`${val}`;
         
         replay.style.borderColor = `${val}`;
         
         congratExit.style.color = `${val}`;
         
         congratExit.style.borderColor = `${val}`;
         
     };// End of replayExitButtonColor();
     
     
    
    
    
    
 // () responsible of altering next question button background  color;     
   function buttonBright(){
      nextQuestion.style.background = `#F29559`;
      nextQuestion.style.color =`#fff`;
     };
       
       
    function buttonDim(){
     nextQuestion.style.background =`rgb(82, 55, 37)`;
     nextQuestion.style.color =`#000`;
 
   };// End of background toggle ();
 
 
 
 
 
 
 
 
    
 // ()s that toggles continueButton background color upon user's click.  
    function continueButtonDim(){
    
        continueButton.style.background =`#000`;
    }
    
    
    function continueButtonBright(){
    
        continueButton.style.background =`#283845`;
    }
    
 // End of continueButton background color toggle;
  
 
 
 
 
 
 
 
 
 
 
 // A () that shows the correct, wrong and timeout slate;
 
    function showMoodSlate(text,color){
       
       moodSlate.classList.add(`hightlight`);
       
       moodSlate.innerHTML = text
       
       moodSlate.style.color = color;
       
       setTimeout(()=>{
       
     moodSlate.classList.remove(`hightlight`)
           
       },2000);
             
    };// End of moodSlate();
    
    
    
    
    
 
 
 
 
 
 // A () that animates the nextQuestion button to shake!
   
   function nextButtonAnimate(){
       
      nextQuestion.classList.toggle(`animateButton`);
        
        if(nextQuestion.classList.contains(`animateButton`)){
            
            nextQuestion.style.animation = `shake 0.4s  ease forwards`; 
       
        }else{
            
           nextQuestion.style.animation = `shaker 0.4s  ease forwards`; 
        };
              
   };// End of nextButtonAnimate;
   
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  // A () that request User to input name which is saved to username variable.
    function addUserName(){
        
    let  name =  prompt(`Enter name`);
      
      while(name === `` || name === null){
      
          name =  prompt(`Enter name`);
      };
      
      
      username = name.toUpperCase(); 
        
    };// End of addUserName();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  
  // A ()  that commands a male voice to speak about User's performance at the end of quiz;
    function speak(){
        
        let getVoices = `UK English Male`;
        
        let speechText = `${username}, ${descriptionText}`;
      
      responsiveVoice.speak(speechText, getVoices);
 
    };// Emd of speak();
    
    
   
   
   
   
   
   
 // A () that adds female voices around the entire code;
    function speech(val){
        
        responsiveVoice.speak(val, `UK English Female`);
        
    };// End of speech();
    
    
   
    
 };//End of General()✅