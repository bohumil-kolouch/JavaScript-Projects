// Project 7 — Scope, Time & Functions


// * 1) GLOBAL vs LOCAL
let globalUser = "Student";
let globalClicks = 0;

function showScope() {
// local variable (exists only inside this function)
  let localGreeting = "Hi. I'm hiding in the function!";
  globalClicks++;

  document.getElementById("scopeGlobal").textContent =
    "Global user: " + globalUser + " | Clicks: " + globalClicks;
  document.getElementById("scopeLocal").textContent = localGreeting;

  console.log("[showScope] localGreeting =", localGreeting);
}

// * 2) Function with IF
function simpleIf() {
  const n = Math.floor(Math.random() * 10);
  let message;
  if (n >= 5) {
    message = "n is " + n + " (>= 5)";
  } else {
    message = "n is " + n + " (< 5)";
  }
  document.getElementById("ifResult").textContent = message;
  console.log("[simpleIf] n =", n);
}

// * 3) Intentional error
// 'heigth' instead of 'height'
function runBuggy() {
  console.log("[runBuggy] Starting buggy calculation...");
  let width = 5;
  let height = 3;
  console.log("[runBuggy] width =", width, "height =", height);

// Intentional error
  let area = width * heigth;
  console.log("[runBuggy] area =", area);
}

// Fixed function
function runFixed() {
  console.log("[runFixed] Starting fixed calculation...");
  let width = 5;
  let height = 3;
  let area = width * height;
  console.log("[runFixed] area =", area);
  document.getElementById("bugResult").textContent = "Fixed area: " + area;
}

// * 4) Time_function()
// Message based on time
function Time_function() {
  const hour = new Date().getHours();
  let reply;

  if (hour < 12) {
    reply = "It is morning.";
  } else if (hour < 18) {
    reply = "It is afternoon.";
  } else {
    reply = "It is evening.";
  }

  document.getElementById("timeResult").textContent =
    reply + " (Current hour: " + hour + ")";
  console.log("[Time_function] hour =", hour, "| reply =", reply);
}