const quizData = {
    Java: {
        Easy: [
            { question: "Which of the following is not a primitive data type in Java?", code: "", options: ["A) int", "B) char", "C) String", "D) boolean"], answer: 2 },
            { question: "Which component is used to compile, debug and execute Java programs?", code: "", options: ["A) JRE", "B) JIT", "C) JDK", "D) JVM"], answer: 2 },
            { question: "What is the extension of Java bytecode file?", code: "", options: ["A) .java", "B) .class", "C) .js", "D) .txt"], answer: 1 },
            { question: "Which of these operators is used to allocate memory for an object?", code: "", options: ["A) malloc", "B) alloc", "C) new", "D) compute"], answer: 2 },
            { question: "Which method is the starting point of any Java program?", code: "", options: ["A) init()", "B) start()", "C) main()", "D) run()"], answer: 2 }
        ],
        Medium: [
            { question: "What is the output of the following code snippet?", code: "public class Test {\n    public static void main(String[] args) {\n        int a = 5;\n        System.out.println(a++ + ++a);\n    }\n}", options: ["A) 10", "B) 11", "C) 12", "D) 13"], answer: 2 },
            { question: "Which of the following principles is NOT a pillar of OOP?", code: "", options: ["A) Encapsulation", "B) Compilation", "C) Polymorphism", "D) Inheritance"], answer: 1 },
            { question: "Which collection class allows you to associate values with keys?", code: "", options: ["A) ArrayList", "B) HashSet", "C) HashMap", "D) TreeSet"], answer: 2 },
            { question: "What exception is thrown when division by zero occurs with integers?", code: "", options: ["A) NullPointerException", "B) ArithmeticException", "C) NumberFormatException", "D) IOException"], answer: 1 },
            { question: "Which keyword is used to prevent method overriding in subclasses?", code: "", options: ["A) static", "B) const", "C) final", "D) secure"], answer: 2 }
        ],
        Hard: [
            { question: "What is the default value of a local variable in Java?", code: "", options: ["A) 0", "B) null", "C) false", "D) None (not assigned default value)"], answer: 3 },
            { question: "Which of these packages contains classes for handling multithreading?", code: "", options: ["A) java.util", "B) java.lang", "C) java.concurrent", "D) java.net"], answer: 1 },
            { question: "What happens when an exception is thrown inside a try block and caught in catch?", code: "", options: ["A) Program crashes", "B) Finally block is skipped", "C) Finally block executes normally", "D) JVM terminates immediately"], answer: 2 },
            { question: "Which garbage collector is default in modern Java versions?", code: "", options: ["A) Serial GC", "B) G1 GC", "C) Parallel GC", "D) CMS GC"], answer: 1 },
            { question: "What is the memory footprint difference between String and StringBuilder?", code: "", options: ["A) String is mutable", "B) StringBuilder is immutable and faster", "C) StringBuilder is mutable and avoids object creation overhead", "D) No difference"], answer: 2 }
        ]
    },
    DSA: {
        Easy: [
            { question: "Which data structure follows the LIFO principle?", code: "", options: ["A) Queue", "B) Stack", "C) Array", "D) Tree"], answer: 1 },
            { question: "What is the time complexity of linear search in an array of size n?", code: "", options: ["A) O(1)", "B) O(log n)", "C) O(n)", "D) O(n^2)"], answer: 2 },
            { question: "Which data structure is best suited for implementing recursion?", code: "", options: ["A) Stack", "B) Queue", "C) Graph", "D) Linked List"], answer: 0 },
            { question: "Which of the following sorting algorithms has the best average-case time complexity?", code: "", options: ["A) Bubble Sort", "B) Selection Sort", "C) Merge Sort", "D) Insertion Sort"], answer: 2 },
            { question: "In a singly linked list, each node contains data and:", code: "", options: ["A) Previous pointer", "B) Next pointer", "C) Parent pointer", "D) Child pointer"], answer: 1 }
        ],
        Medium: [
            { question: "What is the worst-case time complexity of Quick Sort?", code: "", options: ["A) O(n log n)", "B) O(n)", "C) O(n^2)", "D) O(log n)"], answer: 2 },
            { question: "Which tree data structure maintains balanced heights automatically?", code: "", options: ["A) Binary Search Tree", "B) AVL Tree", "C) Min Heap", "D) Expression Tree"], answer: 1 },
            { question: "Which algorithm finds the shortest path in a graph with non-negative edge weights?", code: "", options: ["A) Prim's Algorithm", "B) Kruskal's Algorithm", "C) Dijkstra's Algorithm", "D) Bellman-Ford"], answer: 2 },
            { question: "What data structure is used in Breadth-First Search (BFS) graph traversal?", code: "", options: ["A) Stack", "B) Queue", "C) Priority Queue", "D) Array"], answer: 1 },
            { question: "What is the time complexity of searching an element in a balanced Binary Search Tree?", code: "", options: ["A) O(n)", "B) O(1)", "C) O(log n)", "D) O(n log n)"], answer: 2 }
        ],
        Hard: [
            { question: "Which data structure is most efficient for implementing a priority queue?", code: "", options: ["A) Array", "B) Binary Heap", "C) Singly Linked List", "D) Stack"], answer: 1 },
            { question: "What is the time complexity of building a heap from an unsorted array of size n?", code: "", options: ["A) O(n log n)", "B) O(n)", "C) O(log n)", "D) O(n^2)"], answer: 1 },
            { question: "Which problem can be solved efficiently using Dynamic Programming?", code: "", options: ["A) Binary Search", "B) 0/1 Knapsack Problem", "C) Linear Search", "D) Tree Traversal"], answer: 1 },
            { question: "What is a Trie data structure primarily used for?", code: "", options: ["A) Graph routing", "B) String retrieval / prefix matching", "C) Matrix multiplication", "D) Sorting large files"], answer: 1 },
            { question: "In Tarjan's algorithm, which data structure is used to find Strongly Connected Components?", code: "", options: ["A) Queue", "B) Stack", "C) Hash Map", "D) Disjoint Set"], answer: 1 }
        ]
    },
    OOPs: {
        Easy: [
            { question: "What is an instance of a class called?", code: "", options: ["A) Method", "B) Object", "C) Attribute", "D) Package"], answer: 1 },
            { question: "Which OOP concept deals with hiding internal data and implementation details?", code: "", options: ["A) Inheritance", "B) Polymorphism", "C) Encapsulation", "D) Overloading"], answer: 2 },
            { question: "What is method overloading an example of?", code: "", options: ["A) Run-time polymorphism", "B) Compile-time polymorphism", "C) Inheritance", "D) Abstraction"], answer: 1 },
            { question: "Which keyword allows a class to inherit properties of another class in Java?", code: "", options: ["A) implements", "B) extends", "C) inherits", "D) super"], answer: 1 },
            { question: "Can a constructor have a return type?", code: "", options: ["A) Yes, void", "B) Yes, int", "C) No return type at all", "D) Yes, class type"], answer: 2 }
        ],
        Medium: [
            { question: "Which type of inheritance is not supported directly in Java classes?", code: "", options: ["A) Single", "B) Multilevel", "C) Multiple", "D) Hierarchical"], answer: 2 },
            { question: "What is runtime polymorphism achieved through in OOP?", code: "", options: ["A) Method Overloading", "B) Method Overriding", "C) Constructor Overloading", "D) Static Methods"], answer: 1 },
            { question: "What is an abstract class?", code: "", options: ["A) A class that cannot be instantiated", "B) A class with all public methods", "C) A class without constructors", "D) A final class"], answer: 0 },
            { question: "What is the primary purpose of a copy constructor?", code: "", options: ["A) To delete an object", "B) To initialize an object using another object of the same class", "C) To compare two objects", "D) To clone arrays"], answer: 1 },
            { question: "Which access modifier restricts visibility strictly to within the same class?", code: "", options: ["A) public", "B) protected", "C) private", "D) default"], answer: 2 }
        ],
        Hard: [
            { question: "What is the diamond problem in inheritance?", code: "", options: ["A) Memory leak in objects", "B) Ambiguity when a class inherits two classes with a common ancestor", "C) Multiple constructors execution order", "D) Private member access violation"], answer: 1 },
            { question: "How does virtual function mechanism work in C++/OOP?", code: "", options: ["A) Using VTABLE and VPTR", "B) Using Static linking", "C) Using Macro expansion", "D) Using Global function pointers"], answer: 0 },
            { question: "What is interface segregation principle (SOLID)?", code: "", options: ["A) Classes should have many responsibilities", "B) Clients should not be forced to depend upon interfaces that they do not use", "C) All variables must be private", "D) Inheritance should be avoided entirely"], answer: 1 },
            { question: "What is object slicing in C++?", code: "", options: ["A) Splitting objects across threads", "B) Assigning an object of a derived class to an object of base class, slicing off derived parts", "C) Deleting object pointers safely", "D) Dynamic memory fragmentation"], answer: 1 },
            { question: "What is the difference between composition and aggregation?", code: "", options: ["A) Composition is 'has-a' with lifetime dependency; Aggregation is 'has-a' without lifetime dependency", "B) No difference", "C) Composition is inheritance", "D) Aggregation is strict private ownership"], answer: 0 }
        ]
    },
    MySQL: {
        Easy: [
            { question: "Which SQL clause is used to filter records?", code: "", options: ["A) ORDER BY", "B) GROUP BY", "C) WHERE", "D) HAVING"], answer: 2 },
            { question: "Which statement is used to retrieve data from a database?", code: "", options: ["A) GET", "B) SELECT", "C) EXTRACT", "D) OPEN"], answer: 1 },
            { question: "Which SQL keyword is used to sort the result set?", code: "", options: ["A) SORT BY", "B) ORDER BY", "C) GROUP BY", "D) RANK BY"], answer: 1 },
            { question: "What does SQL stand for?", code: "", options: ["A) Structured Query Language", "B) Strong Question Language", "C) Structured Queue List", "D) Simple Query Logic"], answer: 0 },
            { question: "Which operator is used to search for a specified pattern in a column?", code: "", options: ["A) SEARCH", "B) LIKE", "C) MATCH", "D) FIND"], answer: 1 }
        ],
        Medium: [
            { question: "Which MySQL join returns all records when there is a match in either left or right table?", code: "", options: ["A) INNER JOIN", "B) LEFT JOIN", "C) FULL OUTER JOIN", "D) CROSS JOIN"], answer: 2 },
            { question: "What is the difference between WHERE and HAVING clauses?", code: "", options: ["A) WHERE filters rows before aggregation; HAVING filters groups after aggregation", "B) No difference", "C) HAVING is used before GROUP BY", "D) WHERE is used only with JOINs"], answer: 0 },
            { question: "Which index type is default for InnoDB primary keys in MySQL?", code: "", options: ["A) Hash Index", "B) B-Tree Index", "C) Fulltext Index", "D) Cluster Index (B-Tree)"], answer: 3 },
            { question: "What is a Foreign Key used for?", code: "", options: ["A) To uniquely identify a row", "B) To link two tables together and enforce referential integrity", "C) To encrypt password columns", "D) To speed up string searches"], answer: 1 },
            { question: "Which function is used to count the number of rows in a table?", code: "", options: ["A) TOTAL()", "B) AMOUNT()", "C) COUNT()", "D) SUM()"], answer: 2 }
        ],
        Hard: [
            { question: "What is ACID property 'I' in database transactions?", code: "", options: ["A) Integrity", "B) Isolation", "C) Indexing", "D) Inheritance"], answer: 1 },
            { question: "What is a deadlock in MySQL databases?", code: "", options: ["A) Server crash due to high load", "B) Two or more transactions waiting for locks held by each other", "C) Table corruption during backup", "D) Network timeout"], answer: 1 },
            { question: "Which storage engine in MySQL supports transactions and row-level locking?", code: "", options: ["A) MyISAM", "B) Memory", "C) InnoDB", "D) CSV"], answer: 2 },
            { question: "What is the purpose of an EXPLAIN statement in MySQL?", code: "", options: ["A) To document table schemas", "B) To show how MySQL executes a query (execution plan)", "C) To explain error codes", "D) To export database dumps"], answer: 1 },
            { question: "What are stored procedures primarily used for?", code: "", options: ["A) Storing images", "B) Reusable compiled SQL code blocks executed on database server", "C) Creating UI layouts", "D) Compiling Java code"], answer: 1 }
        ]
    },
    HTML: {
        Easy: [
            { question: "What does HTML stand for?", code: "", options: ["A) Hyper Text Markup Language", "B) High Tech Modern Language", "C) Hyper Transfer Markup Level", "D) Hypertext Makeup Language"], answer: 0 },
            { question: "Which HTML tag is used to create a hyperlink?", code: "", options: ["A) <link>", "B) <a>", "C) <href>", "D) <url>"], answer: 1 },
            { question: "Which tag is used for the largest heading in HTML?", code: "", options: ["A) <h6>", "B) <head>", "C) <h1>", "D) <heading>"], answer: 2 },
            { question: "Which element is used to insert a line break?", code: "", options: ["A) <lb>", "B) <break>", "C) <br>", "D) <hr>"], answer: 2 },
            { question: "Which attribute is used to provide image source path in <img>?", code: "", options: ["A) link", "B) src", "C) href", "D) path"], answer: 1 }
        ],
        Medium: [
            { question: "Which semantic HTML5 tag is best suited for main page content?", code: "", options: ["A) <section>", "B) <main>", "C) <div>", "D) <article>"], answer: 1 },
            { question: "What is the difference between <div> and <span>?", code: "", options: ["A) <div> is inline, <span> is block", "B) <div> is block-level, <span> is inline", "C) No difference", "D) <span> cannot have CSS styles"], answer: 1 },
            { question: "How do you create a checkbox input in HTML?", code: "", options: ["A) <input type='check'>", "B) <input type='checkbox'>", "C) <checkbox>", "D) <box>"], answer: 1 },
            { question: "Which attribute specifies that an input field must be filled out before submitting?", code: "", options: ["A) validate", "B) placeholder", "C) required", "D) mandatory"], answer: 2 },
            { question: "What is the correct tag for inserting audio files in HTML5?", code: "", options: ["A) <sound>", "B) <mp3>", "C) <audio>", "D) <media>"], answer: 2 }
        ],
        Hard: [
            { question: "What is the purpose of the <canvas> element in HTML5?", code: "", options: ["A) To display database records", "B) To draw graphics/animations dynamically via JavaScript", "C) To render SVG vector files", "D) To create tabular data sheets"], answer: 1 },
            { question: "What does the 'defer' attribute in script tags do?", code: "", options: ["A) Downloads script asynchronously and executes after HTML parsing completes", "B) Cancels script execution", "C) Loads script synchronously", "D) Blocks rendering"], answer: 0 },
            { question: "Which meta tag is essential for responsive web design on mobile devices?", code: "", options: ["A) <meta name='keywords'>", "B) <meta name='viewport' content='width=device-width, initial-scale=1.0'>", "C) <meta charset='UTF-8'>", "D) <meta name='mobile'>"], answer: 1 },
            { question: "What is the function of the <picture> element?", code: "", options: ["A) Image slider", "B) Providing multiple source images for different screen sizes/resolutions (responsive images)", "C) Watermarking images", "D) Image compression"], answer: 1 },
            { question: "Which attribute allows drag and drop functionality natively on HTML elements?", code: "", options: ["A) draggable='true'", "B) move='yes'", "C) allow-drop", "D) drag-enabled"], answer: 0 }
        ]
    },
    JavaScript: {
        Easy: [
            { question: "Which keyword is used to declare a variable in modern JavaScript (ES6)?", code: "", options: ["A) variable", "B) v", "C) let / const", "D) dim"], answer: 2 },
            { question: "How do you write a single-line comment in JavaScript?", code: "", options: ["A) <!-- comment -->", "B) /* comment */", "C) // comment", "D) # comment"], answer: 2 },
            { question: "Which built-in method adds one or more elements to the end of an array?", code: "", options: ["A) shift()", "B) push()", "C) pop()", "D) unshift()"], answer: 1 },
            { question: "What will `typeof []` return in JavaScript?", code: "", options: ["A) 'array'", "B) 'object'", "C) 'list'", "D) 'undefined'"], answer: 1 },
            { question: "Which method converts a JSON string into a JavaScript object?", code: "", options: ["A) JSON.stringify()", "B) JSON.parse()", "C) JSON.object()", "D) JSON.convert()"], answer: 1 }
        ],
        Medium: [
            { question: "What is a closure in JavaScript?", code: "", options: ["A) A function bundled with its lexical environment", "B) A method to close browser windows", "C) An error handling block", "D) A loop terminator"], answer: 0 },
            { question: "What is the difference between `==` and `===` operators?", code: "", options: ["A) No difference", "B) `===` checks both value and data type (strict equality)", "C) `==` checks type only", "D) `===` is faster than `==`"], answer: 1 },
            { question: "What does the `async/await` syntax simplify in JavaScript?", code: "", options: ["A) DOM manipulation", "B) Working with Promises and asynchronous code", "C) Array sorting", "D) Math calculations"], answer: 1 },
            { question: "What is Event Bubbling in the DOM?", code: "", options: ["A) Events propagate upwards from target element to ancestors", "B) Events propagate downwards from root to target", "C) Events cancel automatically", "D) Memory leaks in events"], answer: 0 },
            { question: "What will `console.log(1 + '1' - 1)` output in JavaScript?", code: "", options: ["A) 11", "B) 10", "C) 0", "D) NaN"], answer: 1 }
        ],
        Hard: [
            { question: "What is the Prototypal Inheritance model in JavaScript?", code: "", options: ["A) Objects inherit directly from classes like Java", "B) Objects inherit properties and methods directly from other objects via prototype chain", "C) Multiple inheritance is default", "D) Prototype properties are immutable"], answer: 1 },
            { question: "What is the Event Loop responsible for in JavaScript runtime?", code: "", options: ["A) Compiling JS code to machine code", "B) Executing synchronous call stack and coordinating async callbacks from task/microtask queues", "C) Rendering CSS styles", "D) Managing CSS animations"], answer: 1 },
            { question: "What is a JavaScript Proxy used for?", code: "", options: ["A) Network proxy routing", "B) Defining custom behavior for fundamental operations on objects (e.g. property lookup, assignment)", "C) Caching HTTP requests", "D) Compiling modules"], answer: 1 },
            { question: "What is the difference between Microtasks (Promises) and Macrotasks (setTimeout)?", code: "", options: ["A) Microtasks execute with higher priority after current execution stack before rendering", "B) Macrotasks execute first", "C) No execution order difference", "D) Microtasks run on background threads"], answer: 0 },
            { question: "What does currying mean in functional JavaScript?", code: "", options: ["A) Spicy algorithm styling", "B) Transforming a function with multiple arguments into a sequence of nested functions each taking a single argument", "C) Flattening nested arrays", "D) Memoizing return values"], answer: 1 }
        ]
    }
};

let currentSubject = "";
let currentDifficulty = "";
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};

function selectSubject(subject) {
    currentSubject = subject;
    switchView("difficulty-view");
}

function goBackToSubjects() {
    switchView("subject-view");
}

function switchView(viewId) {
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    document.getElementById(viewId).classList.add("active");
    window.scrollTo(0, 0);
}

function startQuiz(difficulty) {
    currentDifficulty = difficulty;
    currentQuestions = quizData[currentSubject][difficulty];
    currentIndex = 0;
    userAnswers = {};

    document.getElementById("quiz-subject-badge").innerText = `${currentSubject} • ${difficulty}`;
    switchView("quiz-view");
    loadQuestion();
}

function loadQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById("question-counter").innerText = `${currentIndex + 1}/${currentQuestions.length}`;
    document.getElementById("question-title").innerText = `Q${currentIndex + 1}. ${q.question}`;

    const codeBox = document.getElementById("code-snippet-box");
    const codeText = document.getElementById("code-text");
    if (q.code && q.code.trim() !== "") {
        codeText.innerText = q.code;
        codeBox.classList.remove("hidden");
    } else {
        codeBox.classList.add("hidden");
    }

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-item";
        if (userAnswers[currentIndex] === idx) {
            optionDiv.classList.add("selected");
        }
        optionDiv.innerHTML = `<span>${opt}</span>`;
        optionDiv.onclick = () => selectOption(idx);
        optionsContainer.appendChild(optionDiv);
    });

    const progressPercent = ((currentIndex + 1) / currentQuestions.length) * 100;
    document.getElementById("progress-fill").style.width = `${progressPercent}%`;

    document.getElementById("prev-btn").style.visibility = currentIndex === 0 ? "hidden" : "visible";
    const nextBtn = document.getElementById("next-btn");
    nextBtn.innerText = currentIndex === currentQuestions.length - 1 ? "Submit Quiz 🏁" : "Next ▶";
}

function selectOption(optionIndex) {
    userAnswers[currentIndex] = optionIndex;
    loadQuestion();
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function finishQuiz() {
    let correctCount = 0;
    currentQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) {
            correctCount++;
        }
    });

    const total = currentQuestions.length;
    const wrongCount = total - correctCount;
    const percentage = Math.round((correctCount / total) * 100);

    document.getElementById("res-total").innerText = total;
    document.getElementById("res-correct").innerText = correctCount;
    document.getElementById("res-wrong").innerText = wrongCount;
    document.getElementById("res-percentage").innerText = `${percentage}%`;

    switchView("result-view");
}