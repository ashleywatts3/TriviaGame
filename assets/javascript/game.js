var questionArray = [
		{
			question: "Which character can only use Taijutsu?", 
			answers: ["Sasuke", "Naruto", "Rock Lee", "Kakashi"],
            correctAnswer: "Rock Lee",
            
        },
        	
		{
			question: "What does Chidori Mean?", 
			answers: ["five hundred punches", "one thousand birds", "five thousand swords", "ten thousand stones"],
			correctAnswer: "one thousand birds",
			
		},	
		{
			question: "D-rank missions are usually given to what level of shinobi?", 
			answers: ["Genin", "Jonin", "Chunin", "Hokage"],
			correctAnswer: "Genin",
			
		},	
		{
		
			question: "What summon does Itachi have?", 
			answers: ["Slugs", "Toad", "Snakes", "Crows", "Dogs"],
			correctAnswer: "Crows",
			
		},	
		{
		
			question: "What is Naruto's favorite food?", 
			answers: ["Ramen", "Tomatoes", "Dango", "Beef" ],
			correctAnswer: "Ramen",
			
		},	
		{
		
			question: "The Sharingan is what type of jutsu?", 
			answers: ["Taijutsu", "Ninjutsu", "Doujutsu", "Genjutsu" ],
			correctAnswer: "Genjutsu",
			
		},	
		{
		
			question: "Who isnt a member of Team 7?", 
			answers: ["Kakashi", "Sakura", "Ino", "Sasuke", "Naruto"],
			correctAnswer: "Ino",
			
		},	
		{
		
			question: "Who is not a Sanin?", 
			answers: ["Madara", "Tsunade", "Jariya", "Orochimaru"],
			correctAnswer: "Madara",
			
		},	
		{
		
			question: "Which Uchiha gave Kakashi his Sharingan?", 
			answers: ["Madara", "Sasuke", "Itachi", "Shisui"],
			correctAnswer: "Shisui",
			
		},	
     

	];

    $(document).ready(function() {

        var counter = 60;
    
        
    
        function headerText() {
            $(".header").append("<h1> Naruto Trivia Game </h1>");
            $(".header").append("<h3> Believe it! </h3>");
        }
        
    
        function headingBtn() {
            var startGame = $("<div id='begin'></div>"),
            newButton = $("<button class='btn btn-lg startBtn '>Start</button>");
            $(".header").append(startGame,[newButton]);
                    
            console.log(headingBtn);
        }
        
        
        function timeClock(){
            var timer = $("<div class='clockdiv' id='clockdiv'></div>");
            $(".header").append(timer);		
        }	
        ;
        headerText();
        headingBtn()
        timeClock();
        
        
        $(".startBtn").on("click", function(){
    
            event.preventDefault();
    
            var countDown = setInterval(function() {
                 counter--;
    
                  if (counter >= 0) {
                    document.getElementById("clockdiv").innerHTML =counter + ' seconds'; 
                      }
                  if (counter === 0) {
                    clearInterval(countDown);
                    document.getElementById("clockdiv").innerHTML = "Out Of Time";
                   }
    
             }, 1000);
            hide ="#begin";
        });
    
        console.log(questionArray);
        console.log(questionArray[0].question);
        console.log(questionArray[0].choices);
        console.log(questionArray[0].correctAnswer);
    
    
    var triviaForm = document.getElementById("mainContainer");
    var resultsCon = document.getElementById("results");
    var submitBtn = document.getElementById("submit");
    
    triviaHTML(questionArray, triviaForm, resultsCon, submitBtn);
        
    
        function triviaHTML(questions, triviaForm, resultsCon, submitBtn) {
    
            function showQuestions(questions, triviaForm){
                var output = [];
                var answers;	
                    
                for(var i = 0; i < questions.length; i++) {
                    
                    answers = [];
                
                    for(answer in questions[i].answers){
                        answers.push(
                            '<label>'
                            + '<input type="radio" name="question' + i + '" value="' + answer + '">'  
                            + questions[i].answers[answer]
                            + '</label>'
                        );
                    }
    
                
                    output.push(
                        '<div class="question">' + questions[i].question + '</div>'
                        + '<div class="answers">' + answers.join('') + '</div>'
                    );
                }
                triviaForm.innerHTML = output.join('');				
            }
    
    
            
        function showResults(questions, triviaForm, resultsCon){
    
            var answersCon = triviaForm.querySelectorAll('.answers');
            var userAnswer = '';
            var numCorrect = 0;
    
            for(var i = 0; i < questions.length; i++){
    
                userAnswer = (answersCon[i].querySelector('input[name=question'+i+']:checked') || {}).value;
        
        
                if(userAnswer === questions[i].correctAnswer){
                    numCorrect++;
                    answersCon[i].style.color = 'green';
                    
                } else {
                    answersCon[i].style.color = 'red';
                    
                }
            }	
    
            resultsCon.innerHTML = numCorrect + ' out of ' + questions.length;
    
    
            if(numCorrect===10){
                $('<img/>', {
                    src: 'assets/images/NarutoWin.jpg',
                    length: '600px',
                    width: '326px',
                }).prependTo(resultsCon);
                resultsCon.prepend("You Win!!\n");
            } else {
                $('<img/>', {
                    src: 'assets/images/NarutoLose.jpg',
                    length: '1024px',
                    width: '576px',
                }).prependTo(resultsCon);
                resultsCon.prepend("You Lose! \n");
                
            }
    
            }
    
            showQuestions(questions, triviaForm);
    
            submitBtn.onclick = function(){
            showResults(questions, triviaForm, resultsCon);
            clearInterval(timeClock);
    
            
            }
        }
    });

$(document).ready(function() {
       
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/naruto.mp3");

    $(".theme-button").on("click", function() {
            audioElement.play();
    });
    $(".pause-button").on("click", function() {
            audioElement.pause();

    });

});
