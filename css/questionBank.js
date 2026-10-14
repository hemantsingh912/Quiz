// ========================================
// CodeQuiz - Programming Practice Website
// JavaScript File
// ========================================

// 1. SUBJECT DATA
const subjects = [
    {
        name: "Java",
        icon: "♨",
        color: "#8b5cf6",
        tint: "rgba(139,92,246,.13)",
        description: "Core Java, syntax, OOP and more"
    },
    {
        name: "DSA",
        icon: "⌘",
        color: "#12c997",
        tint: "rgba(18,201,151,.12)",
        description: "Arrays, trees, sorting and logic"
    },
    {
        name: "OOPs",
        icon: "</>",
        color: "#168cff",
        tint: "rgba(22,140,255,.12)",
        description: "Classes, objects and inheritance"
    },
    {
        name: "MySQL",
        icon: "▤",
        color: "#168cff",
        tint: "rgba(22,140,255,.12)",
        description: "Queries, joins and databases"
    },
    {
        name: "HTML",
        icon: "5",
        color: "#ff823d",
        tint: "rgba(255,130,61,.12)",
        description: "Elements, forms and semantic HTML"
    },
    {
        name: "CSS",
        icon: "✦",
        color: "#e34cc7",
        tint: "rgba(227,76,199,.12)",
        description: "Selectors, layout and responsive design"
    },
    {
        name: "JavaScript",
        icon: "JS",
        color: "#f4cf2f",
        tint: "rgba(244,207,47,.12)",
        description: "Functions, arrays and DOM basics"
    }
];


// ========================================
// 2. QUESTION BANK
// answer: 0 = A, 1 = B, 2 = C, 3 = D
// ========================================

const questionBank = {

    // ====================================
    // JAVA
    // ====================================

    Java: {

        Easy: [
            {
                q: "Which of the following is NOT a primitive data type in Java?",
                options: ["int", "char", "String", "boolean"],
                answer: 2,
                explain: "String is a class in Java, not a primitive data type."
            },
            {
                q: "Which keyword is used to create an object?",
                options: ["make", "new", "class", "this"],
                answer: 1,
                explain: "The new keyword creates an object."
            },
            {
                q: "Which method is the entry point of a Java application?",
                options: ["start()", "run()", "main()", "init()"],
                answer: 2,
                explain: "Execution normally begins from the main() method."
            },
            {
                q: "Which symbol ends most Java statements?",
                options: [";", ":", ".", ","],
                answer: 0,
                explain: "A semicolon ends most Java statements."
            },
            {
                q: "Which type stores true or false?",
                options: ["int", "boolean", "char", "float"],
                answer: 1,
                explain: "The boolean type stores true or false."
            }
        ],

        Medium: [
            {
                q: "What is the output? int x = 5; System.out.println(x++);",
                options: ["4", "5", "6", "Compilation error"],
                answer: 1,
                explain: "Post-increment returns the current value before incrementing."
            },
            {
                q: "Which collection does not allow duplicate elements?",
                options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
                answer: 2,
                explain: "A Set stores unique elements."
            },
            {
                q: "Which keyword prevents a method from being overridden?",
                options: ["static", "final", "private", "void"],
                answer: 1,
                explain: "A final method cannot be overridden in a subclass."
            },
            {
                q: "Which of these is a checked exception?",
                options: [
                    "NullPointerException",
                    "ArithmeticException",
                    "IOException",
                    "ArrayIndexOutOfBoundsException"
                ],
                answer: 2,
                explain: "IOException is a checked exception."
            },
            {
                q: "Which interface is the root of the Java collection hierarchy?",
                options: ["List", "Collection", "Iterable", "Map"],
                answer: 2,
                explain: "Iterable is the top interface for iterable objects."
            }
        ],

        Hard: [
            {
                q: "What is the output? int a = 3; System.out.println(a++ + ++a);",
                options: ["6", "7", "8", "Compilation error"],
                answer: 2,
                explain: "The expression evaluates to 3 + 5 = 8."
            },
            {
                q: "Which statement about HashMap is correct?",
                options: [
                    "It allows no null keys",
                    "It maintains insertion order",
                    "It allows one null key",
                    "It sorts keys automatically"
                ],
                answer: 2,
                explain: "HashMap permits one null key and multiple null values."
            },
            {
                q: "Which OOP principle allows different implementations of the same interface?",
                options: [
                    "Encapsulation",
                    "Polymorphism",
                    "Compilation",
                    "Serialization"
                ],
                answer: 1,
                explain: "Polymorphism allows different implementations through a common type."
            },
            {
                q: "What is the average lookup time of HashMap with good hash distribution?",
                options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
                answer: 2,
                explain: "Average-case lookup is O(1), assuming good hash distribution."
            },
            {
                q: "Which statement about an abstract class is correct?",
                options: [
                    "It can be instantiated directly",
                    "It can contain concrete methods",
                    "It cannot have constructors",
                    "It cannot have fields"
                ],
                answer: 1,
                explain: "An abstract class can contain abstract and concrete methods."
            }
        ]
    },


    // ====================================
    // DSA
    // ====================================

    DSA: {

        Easy: [
            {
                q: "Which data structure follows FIFO?",
                options: ["Stack", "Queue", "Tree", "Graph"],
                answer: 1,
                explain: "FIFO means First In, First Out."
            },
            {
                q: "What is the index of the first element in a Java array?",
                options: ["-1", "0", "1", "Depends on size"],
                answer: 1,
                explain: "Java arrays use zero-based indexing."
            },
            {
                q: "Which data structure follows LIFO?",
                options: ["Queue", "Stack", "Heap", "Graph"],
                answer: 1,
                explain: "A stack follows Last In, First Out."
            },
            {
                q: "Which search algorithm works on a sorted array by halving the range?",
                options: [
                    "Linear Search",
                    "Binary Search",
                    "DFS",
                    "BFS"
                ],
                answer: 1,
                explain: "Binary Search repeatedly halves the search range."
            },
            {
                q: "What is the time complexity of accessing arr[i]?",
                options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                answer: 2,
                explain: "Accessing an array element by index takes O(1) time."
            }
        ],

        Medium: [
            {
                q: "What is the worst-case time complexity of Linear Search?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
                answer: 2,
                explain: "Linear Search may check every element."
            },
            {
                q: "Which traversal commonly uses a queue?",
                options: ["DFS", "BFS", "Inorder", "Postorder"],
                answer: 1,
                explain: "Breadth-First Search commonly uses a queue."
            },
            {
                q: "Which sorting algorithm is generally stable?",
                options: ["Heap Sort", "Selection Sort", "Merge Sort", "Quick Sort"],
                answer: 2,
                explain: "Merge Sort is stable in its standard implementation."
            },
            {
                q: "A singly linked-list node stores:",
                options: [
                    "Only data",
                    "Data and next reference",
                    "Data and two links",
                    "Only an index"
                ],
                answer: 1,
                explain: "A singly linked-list node stores data and a next reference."
            },
            {
                q: "What is the time complexity of pushing onto a stack?",
                options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
                answer: 0,
                explain: "A standard stack push operation takes O(1) time."
            }
        ],

        Hard: [
            {
                q: "What is the worst-case time complexity of Quick Sort?",
                options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
                answer: 2,
                explain: "Poor pivot selection can produce O(n²) time."
            },
            {
                q: "Which algorithm finds shortest paths with non-negative edge weights?",
                options: ["Kruskal", "Dijkstra", "Prim", "DFS"],
                answer: 1,
                explain: "Dijkstra's algorithm works with non-negative edge weights."
            },
            {
                q: "Which data structure helps implement Dijkstra efficiently?",
                options: [
                    "Stack",
                    "Priority Queue",
                    "Plain Queue only",
                    "Linked List only"
                ],
                answer: 1,
                explain: "A priority queue efficiently selects the closest vertex."
            },
            {
                q: "What is the auxiliary space complexity of recursive DFS on a graph?",
                options: ["O(1) always", "O(V)", "O(E²)", "O(log V) always"],
                answer: 1,
                explain: "The recursion stack can grow to O(V)."
            },
            {
                q: "Which structure is suitable for repeatedly retrieving the maximum element?",
                options: ["Min-Heap", "Max-Heap", "Queue", "Trie"],
                answer: 1,
                explain: "A max-heap keeps the maximum element at its root."
            }
        ]
    },


    // ====================================
    // OOPS
    // ====================================

    OOPs: {

        Easy: [
            {
                q: "What is a class?",
                options: [
                    "A blueprint for objects",
                    "An object only",
                    "A loop",
                    "A package manager"
                ],
                answer: 0,
                explain: "A class defines the data and behavior of its objects."
            },
            {
                q: "Which OOP concept hides internal implementation details?",
                options: [
                    "Inheritance",
                    "Encapsulation",
                    "Compilation",
                    "Iteration"
                ],
                answer: 1,
                explain: "Encapsulation bundles data and methods and controls access."
            },
            {
                q: "An object is an instance of a:",
                options: ["Method", "Class", "Loop", "Variable only"],
                answer: 1,
                explain: "An object is an instance created from a class."
            },
            {
                q: "Which concept allows a class to acquire properties from another class?",
                options: ["Inheritance", "Abstraction", "Casting", "Overloading"],
                answer: 0,
                explain: "Inheritance allows a child class to reuse parent-class members."
            },
            {
                q: "Which keyword refers to the current object in Java?",
                options: ["super", "this", "self", "current"],
                answer: 1,
                explain: "The this keyword refers to the current object."
            }
        ],

        Medium: [
            {
                q: "Method overloading is usually resolved at:",
                options: [
                    "Runtime",
                    "Compile time",
                    "Database time",
                    "Installation time"
                ],
                answer: 1,
                explain: "Overloaded methods are selected at compile time."
            },
            {
                q: "Method overriding is associated with:",
                options: [
                    "Runtime polymorphism",
                    "Primitive casting",
                    "Loop control",
                    "File handling"
                ],
                answer: 0,
                explain: "Overridden instance methods are dispatched at runtime."
            },
            {
                q: "Which member is accessible only within its declaring class?",
                options: ["public", "private", "protected", "public static"],
                answer: 1,
                explain: "A private member is accessible within its declaring class."
            },
            {
                q: "Abstraction focuses on:",
                options: [
                    "Showing essential features",
                    "Duplicating code",
                    "Making all fields public",
                    "Sorting objects"
                ],
                answer: 0,
                explain: "Abstraction exposes essential behavior and hides unnecessary details."
            },
            {
                q: "Can a Java class implement multiple interfaces?",
                options: ["No", "Yes", "Only two", "Only if abstract"],
                answer: 1,
                explain: "A Java class can implement multiple interfaces."
            }
        ],

        Hard: [
            {
                q: "Which statement about Java constructors is correct?",
                options: [
                    "They have a return type",
                    "They are inherited",
                    "They can be overloaded",
                    "They must be static"
                ],
                answer: 2,
                explain: "Constructors can have different parameter lists."
            },
            {
                q: "Which principle supports substituting a child object where a parent type is expected?",
                options: [
                    "Liskov Substitution Principle",
                    "DRY only",
                    "Normalization",
                    "FIFO"
                ],
                answer: 0,
                explain: "The Liskov Substitution Principle describes safe subtype substitution."
            },
            {
                q: "Can a static method be overridden in Java?",
                options: [
                    "Yes, dynamically",
                    "No, it is hidden rather than overridden",
                    "Only in interfaces",
                    "Only if final"
                ],
                answer: 1,
                explain: "Static methods can be hidden but are not overridden polymorphically."
            },
            {
                q: "What does composition describe?",
                options: [
                    "A has-a relationship",
                    "A type of loop",
                    "A constructor return value",
                    "A sorting method"
                ],
                answer: 0,
                explain: "Composition models a whole that contains or owns its parts."
            },
            {
                q: "What is true about an interface default method in modern Java?",
                options: [
                    "It cannot have an implementation",
                    "It may provide a method body",
                    "It must be final",
                    "It can be instantiated directly"
                ],
                answer: 1,
                explain: "An interface default method can provide an implementation."
            }
        ]
    }

};


// ========================================
// 3. SAMPLE QUESTIONS FOR OTHER SUBJECTS
// NOTE: Replace these with subject-specific
// questions when you add more content.
// ========================================

["MySQL", "HTML", "CSS", "JavaScript"].forEach((name, index) => {
    const templates = [
        questionBank.Java,
        questionBank.DSA,
        questionBank.OOPs
    ];

    questionBank[name] = JSON.parse(
        JSON.stringify(templates[index % templates.length])
    );
});


// ========================================
// 4. QUIZ VARIABLES
// ========================================

let selectedSubject = "Java";
let selectedLevel = "Easy";
let questions = [];
let answers = [];
let currentIndex = 0;


// ========================================
// 5. HTML ELEMENT REFERENCES
// ========================================

const $ = (id) => document.getElementById(id);

const homeScreen = $("homeScreen");
const quizScreen = $("quizScreen");
const resultScreen = $("resultScreen");


// ========================================
// 6. DISPLAY SUBJECT CARDS
// ========================================

function renderSubjects() {

    $("subjectGrid").innerHTML = subjects.map(subject => `
        <article
            class="subject-card"
            style="
                --accent:${subject.color};
                --tint:${subject.tint};
            "
        >

            <div class="subject-icon">
                ${subject.icon}
            </div>

            <div class="subject-content">

                <h3>${subject.name}</h3>

                <p>${subject.description}</p>

                <button
                    type="button"
                    data-subject="${subject.name}"
                >
                    Start Quiz →
                </button>

            </div>

        </article>
    `).join("");


    document.querySelectorAll("[data-subject]").forEach(button => {

        button.addEventListener("click", function () {

            startQuiz(this.dataset.subject);

        });

    });

}


// ========================================
// 7. SELECT DIFFICULTY
// ========================================

document.querySelectorAll(".difficulty").forEach(button => {

    button.addEventListener("click", function () {

        selectedLevel = this.dataset.level;

        document.querySelectorAll(".difficulty").forEach(item => {

            item.classList.toggle(
                "selected",
                item === this
            );

        });

    });

});


// ========================================
// 8. START QUIZ
// ========================================

function startQuiz(subject) {

    selectedSubject = subject;

    const sets = questionBank[subject] || questionBank.Java;

    questions = [...(sets[selectedLevel] || sets.Easy)];

    answers = Array(questions.length).fill(null);

    currentIndex = 0;

    $("reviewPanel").classList.add("hidden");

    homeScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    $("quizSubjectLabel").textContent = subject;

    $("levelBadge").textContent = selectedLevel.toUpperCase();

    $("levelBadge").className =
        "level-badge " + selectedLevel.toLowerCase();

    renderQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// 9. DISPLAY CURRENT QUESTION
// ========================================

function renderQuestion() {

    const question = questions[currentIndex];

    $("questionCounter").textContent =
        `${currentIndex + 1}/${questions.length}`;

    $("questionNumber").textContent =
        `QUESTION ${String(currentIndex + 1).padStart(2, "0")}`;

    $("questionText").textContent = question.q;

    $("progressBar").style.width =
        `${((currentIndex + 1) / questions.length) * 100}%`;


    // Display answer options

    $("optionsList").innerHTML = question.options.map((option, index) => {

        const isSelected = answers[currentIndex] === index;

        return `
            <button
                type="button"
                class="option ${isSelected ? "selected" : ""}"
                data-option="${index}"
            >

                <span class="radio"></span>

                <span>
                    ${String.fromCharCode(65 + index)})
                    ${escapeHTML(option)}
                </span>

            </button>
        `;

    }).join("");


    // Select an answer

    document.querySelectorAll("[data-option]").forEach(button => {

        button.addEventListener("click", function () {

            answers[currentIndex] = Number(this.dataset.option);

            renderQuestion();

        });

    });


    // Previous button

    $("previousBtn").disabled = currentIndex === 0;


    // Next and Finish buttons

    $("nextBtn").classList.toggle(
        "hidden",
        currentIndex === questions.length - 1
    );

    $("submitBtn").classList.toggle(
        "hidden",
        currentIndex !== questions.length - 1
    );


    // Question number navigation

    $("questionNav").innerHTML = questions.map((question, index) => {

        return `
            <button
                type="button"
                class="
                    nav-number
                    ${index === currentIndex ? "active" : ""}
                    ${answers[index] !== null ? "answered" : ""}
                "
                data-jump="${index}"
            >
                ${index + 1}
            </button>
        `;

    }).join("");


    document.querySelectorAll("[data-jump]").forEach(button => {

        button.addEventListener("click", function () {

            currentIndex = Number(this.dataset.jump);

            renderQuestion();

        });

    });

}


// ========================================
// 10. ESCAPE HTML TEXT
// ========================================

function escapeHTML(value) {

    return String(value).replace(/[&<>"']/g, character => {

        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];

    });

}


// ========================================
// 11. PREVIOUS BUTTON
// ========================================

$("previousBtn").addEventListener("click", function () {

    if (currentIndex > 0) {

        currentIndex--;

        renderQuestion();

    }

});


// ========================================
// 12. NEXT BUTTON
// ========================================

$("nextBtn").addEventListener("click", function () {

    if (currentIndex < questions.length - 1) {

        currentIndex++;

        renderQuestion();

    }

});


// ========================================
// 13. FINISH QUIZ BUTTON
// ========================================

$("submitBtn").addEventListener("click", showResults);


// ========================================
// 14. BACK TO SUBJECTS BUTTONS
// ========================================

$("backHome").addEventListener("click", goHome);

$("homeBtn").addEventListener("click", goHome);


// ========================================
// 15. RESTART QUIZ
// ========================================

$("restartBtn").addEventListener("click", function () {

    startQuiz(selectedSubject);

});


// ========================================
// 16. VIEW ANSWERS BUTTON
// ========================================

$("viewAnswersBtn").addEventListener("click", function () {

    $("reviewPanel").classList.toggle("hidden");

    renderReview();

    if (!$("reviewPanel").classList.contains("hidden")) {

        $("reviewPanel").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});


// Close answer review

$("closeReview").addEventListener("click", function () {

    $("reviewPanel").classList.add("hidden");

});


// ========================================
// 17. CALCULATE AND DISPLAY RESULT
// ========================================

function showResults() {

    const correct = questions.reduce((total, question, index) => {

        return total + (
            answers[index] === question.answer ? 1 : 0
        );

    }, 0);


    const wrong = questions.length - correct;

    const score = Math.round(
        (correct / questions.length) * 100
    );


    // Hide quiz screen and show result

    quizScreen.classList.add("hidden");

    resultScreen.classList.remove("hidden");


    // Display result information

    $("resultSubject").textContent =
        `${selectedSubject} • ${selectedLevel}`;

    $("totalResult").textContent = questions.length;

    $("correctResult").textContent = correct;

    $("wrongResult").textContent = wrong;

    $("levelResult").textContent = selectedLevel;

    $("scorePercent").textContent = `${score}%`;


    // Update circular score indicator

    $("scoreRing").style.setProperty(
        "--score",
        `${score}%`
    );


    // Result heading

    if (score >= 80) {

        $("resultTitle").textContent = "Excellent Work!";

    } else if (score >= 50) {

        $("resultTitle").textContent = "Quiz Completed!";

    } else {

        $("resultTitle").textContent = "Keep Practicing!";

    }


    $("resultMessage").textContent =
        `You answered ${correct} out of ${questions.length} questions correctly.`;


    $("reviewPanel").classList.add("hidden");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// 18. DISPLAY ANSWERS AND EXPLANATIONS
// ========================================

function renderReview() {

    $("reviewList").innerHTML = questions.map((question, index) => {

        const isCorrect =
            answers[index] === question.answer;

        const correctAnswer =
            question.options[question.answer];

        const statusClass =
            isCorrect ? "right" : "missed";

        const statusText =
            isCorrect
                ? "✓ Correct"
                : "✕ Incorrect or unanswered";


        return `
            <article class="review-item">

                <h3>
                    ${index + 1}.
                    ${escapeHTML(question.q)}
                </h3>

                <p class="${statusClass}">
                    ${statusText}
                </p>

                <p>
                    <b>Correct answer:</b>
                    ${String.fromCharCode(65 + question.answer)})
                    ${escapeHTML(correctAnswer)}
                </p>

                <p>
                    <b>Explanation:</b>
                    ${escapeHTML(
                        question.explain ||
                        "Review the concept and try again."
                    )}
                </p>

            </article>
        `;

    }).join("");

}


// ========================================
// 19. RETURN TO HOME SCREEN
// ========================================

function goHome() {

    quizScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");

    homeScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// 20. INITIALIZE WEBSITE
// ========================================

renderSubjects();