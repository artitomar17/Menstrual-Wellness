console.log
let currentQuestionIndex = 0;
let score = 0;

const quizData = [
    {
       question:"1. What is your current energy level ?",
       options: {a: { text:"High", marks: 4},
                b: {text:"Moderate", marks: 3},
                c: {text:"Moderate Low", marks:2},
                d:{text:"Very Low", marks:1}, }
   },
   
   {
    question:"2. Do you have any physical discomfort ?", 
    options:  {a: { text:"No Discomfort", marks: 4},
               b: {text:" Normal cramps and discomfort", marks: 3},
               c: {text:" Breast Tenderness and high cramps", marks:2},
               d:{text:"Unsual body pain alongside cramps", marks:1}, }
},

{
    question:"3. What is your current pain level ?",
    options: {a: { text:"Normal as usual", marks: 4},
    b: {text:"Little higher than usual", marks: 3},
    c: {text:"Higher than usual", marks:2},
    d:{text:"Unbearable pain", marks:1}, }
},

{
    question:"4. What is your current flow rate ?", 
    options: {a: { text:"Normal flow", marks: 4},
              b: {text:" Less than normal flow", marks: 3},
              c: {text:"More than normal flow", marks:2},
              d:{text:"Unsual heavy or light flow", marks:1}, }
},

{
    question:"5. How is your sleep quality ?",
    options:  {a: { text:"Taking proper 6-8 hrs daily", marks: 4},
               b: {text:" Sleeping for only 3-4 hrs", marks: 3},
               c: {text:" Sleeping less than 3-4 hrs ", marks:2},
               d:{text:"Facing Insomnia", marks:1}, }
},
{
    question:"6. How are you feeling right now ?",
    options:  {a: { text:"Happy and Active", marks: 4},
               b: {text:"Normal mood swings including anger,irritation etc", marks: 3},
               c: {text:"Sad and depressed", marks:2},
               d:{text:"Extremely low", marks:1}, }
},
{
    question:"7. Are you feeling confused and overwhelming ?",
    options:  {a: { text:"No, I am normal", marks: 4},
               b: {text:" Little confused but it is manageable", marks: 3},
               c: {text:"Feeling confused about everything", marks:2},
               d:{text:" Not getting what to do", marks:1}, }
},
{
    question:"8. How is your self esteem right now ?",
    options: {a: { text:"High as normal", marks: 4},
              b: {text:"Moderate", marks: 3},
              c: {text:"Moderate Low", marks:2},
              d:{text:"Very Low", marks:1}, }
},
{
    question:"9. What is your level of mood swings ?",
    options : {a: { text:"I am having my normal, hormonal mood swings", marks: 4},
              b: {text:"Sometimes happy and other times sad", marks: 3},
              c: {text:"Constantly in sad, anger and irritating mode", marks:2},
              d:{text:" Mood swings are extreme and I am losing control over myself", marks:1}, }
},
{
    question:"10. How long you remain in happy state ?", 
   options: {a: { text:"Happy as usual", marks: 4},
             b: {text:"Little less happy but it's normal for me", marks: 3},
             c: {text:"Very little", marks:2},
             d:{text:"I am extremely depressed", marks:1},}
},
{
    question:"11. What is your current exercise routine ?",
     options: {a: { text:"Doing my regular workout and yoga", marks: 4},
               b: {text:" Do occasionally", marks: 3},
               c: {text:"Do rarely", marks:2},
               d:{text:"Never do ", marks:1}, }
},
{
    question:"12. How is your diet routine ?",
   options: {a: { text:"Healthy and Balanced Diet", marks: 4},
             b: {text:"Fast food rarely", marks: 3},
             c: {text:"Fast food occasionally", marks:2},
             d:{text:"Unhealthy Diet", marks:1}, }
},
{
    question:"13. What is your daily screen time ?",
   options: {a: { text:"3-4 hrs", marks: 4},
             b: {text:"4-5 hrs", marks: 3},
             c: {text:"5-6 hrs", marks:2},
             d:{text:"More than 6 hrs", marks:1}, }
},
{
    question:"14. How is your productivity in daily activities ?",
    options: {a: { text:"High", marks: 4},
              b: {text:"Moderate", marks: 3},
              c: {text:"Moderate Low", marks:2},
              d:{text:"Very Low", marks:1}, }
},
{
    question:"15. How much support are you getting from family/friends ?",
   options: {a: { text:"High Support", marks: 4},
             b: {text:"Moderate Support", marks: 3},
             c: {text:"Moderate Low Support" , marks:2},
             d:{text:"Very Less Support", marks:1},}
},
{
    question:"16. Are there any significant lifestyle changes happened ?",
   options: {a: { text:"No, eveything is as ususal", marks: 4},
            b: {text:"Little shifts in daily activities", marks: 3},
            c: {text:" Changes are moderate", marks:2},
         d:{text:"Changed immensely ", marks:1}, }
},
{
    question:"17. Have you faced any negative trauma or incident recently ?",
    options: {a: { text:"Nothing happened", marks: 4},
              b: {text:"Normal incidents happened", marks: 3},
              c: {text:" Little more than normal", marks:2},
              d:{text:" Yes, a trauma with huge impact", marks:1}, }
},
{
    question:"18. Are you on any medications or alcoholic consumptions ?",
   options: {a: { text:"No, I ain't ", marks: 4},
             b: {text:"My usual consumption", marks: 3},
            c: {text:"Consuming more than usual", marks:2},
             d:{text:"Significantly increasing from usual", marks:1}, }
},
{
    question:"19. Current menstrual cycle phase ?",
   options: {a: { text:"Normal days", marks: 4},
    b: {text:"Post menstrual phase", marks: 3},
    c: {text:"Luteal phase", marks:2},
    d:{text:"On my menstrual cycle", marks:1}, }
},
{
    question:"20. What is your current menstrual day (if on menstruations) ?",
   options: {a: { text:"Not menstruating", marks: 4},
    b: {text:"5th-7th day", marks: 3},
    c: {text:"3rd-5th day", marks:2},
    d:{text:"1st-3rd day", marks:1}, }
},
{
    question:"21. Are there any changes in your appetite/hunger ?",
   options: {a: { text:"No, its normal as usual", marks: 4},
    b: {text:"Sometimes changes with normal effects", marks: 3},
    c: {text:"Decreased / Increased than before", marks:2},
    d:{text:" Not able to recognize the pattern", marks:1},}
},
{
    question:"22. Do you feel like crying or have been cried recently ?",
    options: {a: { text:"No, I am normal", marks: 4},
    b: {text:"Just little bit sometimes", marks: 3},
    c: {text:"Getting emotional but I know the reason", marks:2},
    d:{text:"Yes, getting extreme emotional without any reason", marks:1},}
},
{
    question:"23. Are your periods regular ?",
   options: {a: { text:"Yes, they are regular", marks: 4},
    b: {text:"Getting 9 times in an year ", marks: 3},
    c: {text:"Getting 6 times in an year", marks:2},
    d:{text:"Very irregular pattern ", marks:1},}
},
{
    question:"24. Do you have any hobby to follow regularly ?",
    options: {a: { text:"Yes, I have and do regularly", marks: 4},
    b: {text:"I have but follow occasionally", marks: 3},
    c: {text:"I follow my hobbies rarely", marks:2},
    d:{text:"I don't have any hobby", marks:1}, }
},
{
    question:"25. Are you feeling more social or withdrawn.",
   options: {a: { text:"More social", marks: 4},
    b: {text:"Feeling social but don't wish to talk a lot", marks: 3},
    c: {text:"More withdrawn", marks:2},
    d:{text:"Just wanna remain lonely", marks:1}, }
},
];

const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const scoreContainer = document.getElementById("score-container");
const recommendationContainer = document.getElementById("recommendation-container");
const recommendationOptionsContainer = document.getElementById("recommendation-options");
const problemOptionsContainer = document.getElementById("problem-options");
const solutionContainer = document.getElementById("solution-container");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.options.a.text;
    b_text.innerText = currentQuizData.options.b.text;
    c_text.innerText = currentQuizData.options.c.text;
    d_text.innerText = currentQuizData.options.d.text;
}

function getSelected() {
    const answerElements = document.querySelectorAll('.answer');
    let selectedOption = undefined;
    answerElements.forEach(answerElement => {
        if (answerElement.checked) {
            selectedOption = answerElement.id;

            

        }
    });
    return selectedOption;
}

function deselectAnswers() {
    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach(answerElement => {
        answerElement.checked = false;
    });
}

loadQuestion();

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        score += quizData[currentQuestionIndex].options[answer].marks;
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
            deselectAnswers();
        } else {
            showScore();
        }
    }
});

function showScore() {
    document.querySelector('.quiz-header').style.display = 'none';
    submitButton.style.display = 'none';
    scoreContainer.innerHTML = ` <h2> Your Final Score Is: ${score} </h2>`;
    scoreContainer.style.display = 'block';
    if (score < 80) {
        showRecommendationOption();
    }
}

function showRecommendationOption() {
    recommendationContainer.innerHTML = `<button onclick="showRecommendationOptions()">Get Recommendations On Your Desired Factors</button> `;
    recommendationContainer.style.display = 'block';
}

function showRecommendationOptions() {
    recommendationContainer.style.display = "none";

    recommendationOptionsContainer.style.display = "block";
    recommendationOptionsContainer.innerHTML = `
        <button onclick="showProblems('Physical')">Physical</button>
        <button onclick="showProblems('Emotional')">Emotional</button>
        <button onclick="showProblems('Lifestyle')">Lifestyle</button>
        <button onclick="showProblems('Physical / Emotional')">Physical / Emotional</button>
        <button onclick="showProblems('Physical / Lifestyle')">Physical / Lifestyle</button>
        <button onclick="showProblems('Emotional / Lifestyle')">Emotional / Lifestyle</button>
        <button onclick="showProblems('Physical / Emotional / Lifestyle')">Physical / Emotional / Lifestyle</button>
    `;
}

function showProblems(category) {
    recommendationOptionsContainer.style.display = "none";
    problemOptionsContainer.style.display = "block";
    let problems = [];

    if (category === "Physical") {
        problems = ["High Cramps", "Body Discomfort"];
    } else if (category === "Emotional") {
        problems = ["Sad Mood", "Anger", "Confusion", "No Support"];
    } else if (category === "Lifestyle") {
        problems = ["Poor Diet", "No Exercise", "More Screentime", "Productivity Status Low", "Poor Sleeping Hours"];
    } else if (category === "Physical / Emotional") {
        problems = ["High Cramps", "Body Discomfort", "Poor Sleeping Hours", "Sad Mood", "Anger", "Confusion", "No Support"];
    } else if (category === "Physical / Lifestyle") {
        problems = ["High Cramps", "Body Discomfort", "Sleep Quality", "Poor Diet", "No Exercise", "More Screentime", "Productivity Status Low","Poor Sleeping Hours"];
    } else if (category === "Emotional / Lifestyle") {
        problems = ["Sad Mood", "Anger", "Confusion", "No Support", "Poor Diet", "No Exercise", "More Screentime", "Productivity Status Low","Poor Sleeping Hours"];
    } else if (category === "Physical / Emotional / Lifestyle") {
        problems = ["High Cramps", "Body Discomfort", "Sad Mood", "Anger", "Confusion", "No Support", "Poor Diet", "No Exercise", "More Screentime", "Productivity Status Low", "Poor Sleeping Hours"];
    }

    problemOptionsContainer.innerHTML = `
        <p>Select the fields in which you want to have recommendations on:</p>
        ${problems.map(problem => `
            <label>
                <input type="checkbox" value="${problem}"> ${problem}
            </label><br>
        `).join("")}
        <br>
        <button onclick="submitSelectedProblems()">Get Solutions
        </button>
    `;
    
}

function submitSelectedProblems() {
    const checkboxes = problemOptionsContainer.querySelectorAll('input[type="checkbox"]:checked');
    const selectedProblems = Array.from(checkboxes).map(cb => cb.value);

    if (selectedProblems.length === 0) {
        alert("Please select at least one problem.");
        return;
    }

    problemOptionsContainer.style.display = "none";
    solutionContainer.style.display = "block";

    let solutionsHtml = "<h3>Your Recommendations:</h3>";

    selectedProblems.forEach(problem => {
        let solutionText = "";

        if (problem === "High Cramps") {
            solutionText = "Drink more water, apply heat, eat cummin seeds (ajwain) with warm water.";
        } else if (problem === "Body Discomfort") {
            solutionText = "Perform light yoga and do rest properly.";
        } else if (problem === "Poor Sleeping Hours") {
            solutionText = "Establish a routine, create a relaxing environment.";
        } else if (problem === "Sad Mood") {
            solutionText = "Talk to someone, engage in enjoyable activities, watch your favorite movie";
        } else if (problem === "Anger") {
            solutionText = "Practice deep breathing, identify triggers.";
        } else if (problem === "Confusion") {
            solutionText = "Write things down, seek clarification.";
        } else if (problem === "No Support") {
            solutionText = "Join support groups, talk to loved ones, express yourself out.";
        } else if (problem === "Poor Diet") {
            solutionText = "Eat balanced meals, reduce processed foods.";
        } else if (problem === "No Exercise") {
            solutionText = "Start with light exercises, find activities you enjoy, dancing, cycling, aerobics..";
        } else if (problem === "More Screentime") {
            solutionText = "Set screen time limits, take breaks.";
        } else if (problem === "Productivity Status Low") {
            solutionText = "Break tasks into smaller steps, prioritize tasks.";
        }

        solutionsHtml += `<p><strong>${problem}:</strong> ${solutionText}</p>`;
    });

    solutionContainer.innerHTML = solutionsHtml;
}

function showSolutions(problem) {
    problemOptionsContainer.style.display = "none";
    solutionContainer.style.display = "block";
    let solutions = "";

    if (problem === "High Cramps") {
        solutions = "Drink more water, apply heat, eat cummin seeds (ajwain) with warm water";
    } else if (problem === "Body Discomfort") {
        solutions = "Perform light yoga and do rest properly.";
    } else if (problem === "Poor Sleeping Hours") {
        solutions = "Establish a routine, create a relaxing environment.";
    } else if (problem === "Sad Mood") {
        solutions = "Talk to someone, engage in enjoyable activities, watch your favorite movie.";
    } else if (problem === "Anger") {
        solutions = "Practice deep breathing, identify triggers.";
    } else if (problem === "Confusion") {
        solutions = "Write things down, seek clarification.";
    } else if (problem === "No Support") {
        solutions = "Join support groups, talk to loved ones, express yourself out";
    } else if (problem === "Poor Diet") {
        solutions = "Eat balanced meals, reduce processed foods.";
    } else if (problem === "No Exercise") {
        solutions = "Start with light exercises, find activities you enjoy, dancing, cycling, aerobics.";
    } else if (problem === "More Screentime") {
        solutions = "Set screen time limits, take breaks.";
    } else if (problem === "Productivity Status Low") {
         solutions = "Break tasks into smaller steps, prioritize tasks."
    }

    solutionContainer.innerHTML = `<p>Your recommendations for ${problem}: ${solutions}</p> `;
}
loadQuestion();
