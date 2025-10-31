// ======================
// 🌗 DARK MODE TOGGLE
// ======================

const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check saved theme or system preference
const savedTheme = localStorage.getItem("theme");

if (
  savedTheme === "dark" ||
  (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
  themeToggle.textContent = "☀️";
} else {
  html.classList.remove("dark");
  themeToggle.textContent = "🌙";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
});



// ======================
// 📘 LESSON CONTENT DATA
// ======================
const lessons = {
  what: {
  title: "What is CSS?",
  subtitle: "Lesson: Understanding CSS Basics",
  text: `CSS (Cascading Style Sheets) is the language that makes web pages look beautiful.  
It controls colors, fonts, spacing, and layout, turning plain HTML into a stylish design.

🎨 Example:
Without CSS:
<h3>Hello World</h3>

With CSS:
<h3 style="color:#2965f1;text-align:center;">Hello World</h3>

Think of HTML as the structure and CSS as the design that brings it to life!`
},

why: {
  title: "Why Do We Need CSS?",
  subtitle: "Lesson: The Importance of CSS",
  text: `Before CSS, all styling was done inside HTML — messy and hard to manage!  
CSS separates content(HTML) from design, making pages cleaner and easier to update.

✨ Example:
Without CSS:
<p style="color:red;font-size:18px;">Hello!</p>

With CSS:
<p class="greeting">Hello!</p>

.greeting { color: red; font-size: 18px; }

This makes websites consistent, responsive, and much easier to maintain!`
},

 how: {
  title: "How to Add CSS",
  subtitle: "Lesson: Applying Styles to HTML",
  text: `There are three main ways to add CSS to your webpage — inline,internal, and external.  
Let's look at each one quickly:

🟦 Inline CSS  
Add styles directly inside an HTML tag using the style attribute:  
<h1 style="color: blue;">Style me in blue!</h1>  
Great for one-off styling, but not ideal for large projects.

🟥 Internal CSS
Place your styles inside a <style> tag in the HTML file:  
<style>  
h1 { color: red; }  
</style>  
Applies only to that single page.

🟩 External CSS 
Write all your styles in a separate file (e.g., styles.css) and link it in your HTML head:  
<link rel="stylesheet" href="styles.css">  
Best for multi-page sites — clean, reusable, and efficient.
 
Practice tip: Try styling the same <h1> using all three methods to see how they differ!`
},

 selectors: {
  title: "CSS Selectors",
  subtitle: "Lesson: Targeting HTML Elements",
  text: `CSS selectors are like addresses — they tell CSS which HTML elements to style.  
Let's look at the main types:

🟢 Element Selector 
Targets all tags of the same type.  
Example: 
p { color: red; }  
→ All paragraphs turn red!

🔵 Class Selector 
Targets elements with a specific class name.  
HTML: <h2 class="highlight">Hello!</h2>  
CSS: .highlight { color: orange; }  
→ Great for styling multiple elements at once.

🟣 ID Selector  
Targets one unique element.  
HTML: <h1 id="main-title">Welcome</h1>  
CSS: #main-title { color: green; }  
→ Each ID should be unique!

🟡 Attribute Selector 
Targets elements based on attributes.  
Example: input[type="text"] { border: 2px solid blue; }

⚪ Universal Selector 
Applies styles to everything!  
Example: * { text-align: center; }

✨ Remember:
If multiple selectors match an element, CSS picks the most specific one.  
Try mixing selectors and see how they work together!`
},

  "intro-projects": {
    title: "Introduction Projects",
    subtitle: "Practice: Simple Styling Tasks",
    text: "Try creating a simple web page that uses CSS for text color, background, and font styles. Experiment with inline vs. external CSS to see how your design changes. These small projects will help you grasp how styles cascade and combine."
  },
  "intro-quiz": {
    title: "Introduction Quiz",
    subtitle: "Test Your Knowledge",
    text: "Q1. What does CSS stand for? Q2. Name the three ways to apply CSS. Q3. What is a selector? Q4. Why is external CSS recommended? These basic questions will strengthen your understanding before moving to properties."
  },


  colors: {
  title: "CSS Colors",
  subtitle: "Lesson: Adding Life with Colors",
  text: `Colors bring websites to life! In CSS, you can set colors for text, backgrounds, borders, and more using the color and background-color properties.

🟥 Named Colors  
Use simple color names like red, blue, or green.  
Example: body { background-color: red; }  
There are hundreds of named colors — try fun ones like "cornflowerblue" or "olivedrab"!

🟦 Hex Codes
For custom shades, use hex codes — a mix of red, green, and blue values.  
Example: h1 { color: #5d3891; }  
Each pair (like 5d, 38, 91) represents how much of each color is used (0–255 scale).

🟩 RGB/RGBA Colors  
Another way to define colors is with RGB values:  
Example: p { color: rgb(93, 56, 145); }  
You can also use RGBA for transparency — rgba(93, 56, 145, 0.5).

💡 Try This:
Make a simple page with a heading and paragraph —  
use a named color for the background and a hex or RGB color for the text!`
},

  properties: {
    title: "Font Properties",
    subtitle: "Lesson: Make your text look Awesome!",
    text: `Fonts change how your text feels — bold, classy, playful, or minimal.  

🔠 font-size – Changes how big your text is.  
Example:  
h1 { font-size: 30px; }  
p { font-size: 1.5rem; }  
💡 px = fixed size, rem = flexible and scales with screen size.  

💪 font-weight – Controls how thick the letters look.  
Example:  
p { font-weight: bold; }  
h2 { font-weight: 900; }  
💬 Range: 100 (thin) → 900 (extra bold).  

🖋️ font-family – Chooses the font type.  
Example:  
body { font-family: 'Poppins', sans-serif; }  
💡 Always add a backup: 'Roboto', sans-serif.  
If font name has spaces → use quotes like "Times New Roman".  

📏 text-align – Positions your text.  
Example:  
h1 { text-align: center; }  
p { text-align: right; }  

✨ Try This!  
Mix them all:  
h1 {  
  font-family: 'Caveat', cursive;  
  font-size: 2rem;  
  font-weight: 700;  
  text-align: center;  
  color: coral;  
} `
},

 borders: {
  title: "CSS Borders",
  subtitle: "Frame Your Elements with Style ✨",
  text: `Borders help separate or highlight parts of your webpage — like giving boxes, buttons, or images a frame   

🧱 Basic Border
Add a border around an element:
div { border: 2px solid black; }  
💡 Format: border: [width] [style] [color];  

📏 Border Width
Control how thick the border looks:
div { border-width: 5px; }  

🌈 Border Color
Change its color:
h1 { border-color: blue; }  

🧩 Individual Sides
You can style each side separately:
div {  
  border-top: 2px solid red;  
  border-bottom: 2px dashed blue;  
}  

💫 Rounded Corners
Use border-radius for soft edges:
img { border-radius: 50%; } → Perfect for profile photos   
div { border-radius: 10px; } → Nice smooth box corners  

✨ Try This!
button {  
  border: 2px solid coral;  
  border-radius: 8px;  
  background-color: white;  
  color: coral;  
  padding: 10px 20px;  
}  

Hover effect idea 💡  
button:hover {  
  background-color: coral;  
  color: white;  
  cursor: pointer;  
}`
},

  spacing: {
    title: "Margins and Padding",
    subtitle: "Lesson: Managing Space in Layouts",
    text: `In CSS, every element is like a box. Margins and padding help control the space around that box.

✨ Padding
Padding is the space *inside* the element, between the content and its border.  
Example:
div {
  padding: 20px;
  border: 2px solid black;
}
Adds space inside the box, pushing the text away from the border.

🌟 Margin
Margin is the space *outside* the element, between the box and other elements.  
Example:
div {
  margin: 20px;
}
Adds space around the box, separating it from nearby elements.

🎯 Individual Sides
You can control each side:
div {
  margin-top: 10px;
  padding-left: 30px;
}

📏 Shortcut Values
You can set multiple sides at once:
margin: 10px 20px;  /* top & bottom = 10px, left & right = 20px */
padding: 5px 10px 15px 20px;  /* top, right, bottom, left */`
},

  inspection: {
    title: "CSS Inspection",
    subtitle: "Lesson: Exploring websites like a Developer",
    text: `CSS Inspection helps you see how websites are built and styled using Chrome Developer Tools.

💡 What It Is
The Chrome Developer Tools (DevTools) let you look at the HTML and CSS behind any webpage. You can even test changes live — without editing your actual code.

🧭 How to Open It
Press Ctrl + Shift + I(Windows) or Cmd + Option + I(Mac)  
Or right-click any element → Inspect

✨ What You Can Do
See the HTML structure in the Elements tab
View and edit CSS rules in the Styles panel
Click the Selector Tool(arrow icon) to pick elements on the page
Toggle styles on/off or test new colors and fonts instantly

🧱 Computed Tab
Shows the final applied styles even if multiple CSS rules are overlapping.

🎨 CSS Overview
Under “More Tools → CSS Overview,” you can see all colors, fonts, and sizes used on a webpage — perfect for design inspiration.

⚡ Remember
- Changes made in DevTools are temporary
- Great for testing, debugging, and learning from other websites

Try it out! Inspect a webpage, explore its CSS, and experiment with live edits — it’s the best way to learn how styling really works.`
},

  "prop-projects": {
    title: "CSS Properties Projects",
    subtitle: "Practice: Styling Exercises",
    text: "Create a styled card component using borders, padding, and custom fonts. Experiment with colors and backgrounds to design a clean, modern look. These exercises will help reinforce your understanding of property combinations."
  },
  "prop-quiz": {
    title: "CSS Properties Quiz",
    subtitle: "Test Your Knowledge",
    text: "Q1. What property changes text color? Q2. How do you set a background image? Q3. Which property adds space inside an element? Q4. What’s the difference between padding and margin? Try answering without looking at notes!"
  },

   cascade: {
    title: "Cascade - Specificty and Inheritance",
    subtitle: "Lesson: Why CSS is Called 'Cascading' Style Sheets",
    text: `Ever wondered why it's called Cascading Style Sheets?  
The word “cascade” means that when multiple CSS rules target the same element, the browser must decide **which one wins** — like water flowing down steps, the last or strongest rule takes over.

💧 The Cascade
If two or more rules target the same element, CSS follows an order:
1. Later rules in the file override earlier ones.
2. More specific selectors override less specific ones.

Example:  
p { color: blue; }  
p { color: red; }  
→ Text becomes red, since it’s the last rule.

🎯 Specificity
CSS calculates how specific a rule is:  
ID > Class > Element  
Example:  
h1 { color: blue; }  
.title { color: green; }  
#main { color: red; }  
→ The text turns red, because IDs are most specific.

📜 Inline, Internal, External
CSS also checks where the style comes from:
Inline > Internal > External  
Example:  
Inline style wins even over IDs — unless another rule has !important(beats them all).

🚨 The !important Rule
Add !important to make a property override everything else:  
p { color: blue !important; }  
→ Now it stays blue no matter what other styles say.

🧬 Inheritance
Some properties (like color or font) are passed down from parent elements.  
Example:  
body { color: purple; }  
→ All text inside becomes purple unless another rule overrides it.`
},

select: {
  title: "Selectors",
  subtitle: "Lesson: Targeting Elements with Precision",
  text: `CSS Selectors let you choose which elements to style on a webpage.  
You can combine them to target specific parts without changing your HTML.

💡 What They Do  
Selectors tell CSS “which” elements to style — like choosing players for a team before applying uniforms.

🔹 Grouping ( , )
Apply the same style to multiple elements.  
Example: h1, h2 { color: blueviolet; }

🔹 Child ( > )
Targets direct children only.  
Example: .box > p { color: firebrick; }

🔹 Descendant (space) 
Targets all nested elements inside another.  
Example: .box li { color: blue; }

🔹 Chaining (no space)
Selects elements matching multiple conditions.  
Example: li.done { color: seagreen; }

🔹 Combined  
Mixing methods for precise control.  
Example: ul p.done { font-size: 0.5rem; }

⚡ Remember  
No spaces = same element  
Spaces = nested inside  
Commas = multiple targets  
The more specific selector wins`
},

position: {
  title: "Position",
  subtitle: "Lesson: Placing Elements on the Page",
  text: `The position property controls how elements are placed.  

📍 Static (Default)
Elements appear in normal flow.
Example:
<div style="background:lightblue; width:80px; height:80px;">Static</div>

📦 Relative
Moves the element from its normal spot.
Example:
<div style="background:orange; width:80px; height:80px; position:relative; top:20px; left:20px;">Relative</div>

🎯 Absolute
Positions relative to the nearest positioned parent.
Example:
<div style="position:relative; width:120px; height:120px; background:lightgray;">
  <div style="position:absolute; top:30px; left:30px; width:60px; height:60px; background:tomato;">
  Absolute
  </div>
</div>

📌 Fixed
Stays in place even when scrolling.
Example:
<div style="position:fixed; top:10px; right:10px; background:gold; padding:8px;">
Fixed
</div>`
},

"int-projects": {
    title: "CSS Properties Projects",
    subtitle: "Practice: Styling Exercises",
    text: "Create a styled card component using borders, padding, and custom fonts. Experiment with colors and backgrounds to design a clean, modern look. These exercises will help reinforce your understanding of property combinations."
  },

  "int-quiz": {
    title: "CSS Properties Quiz",
    subtitle: "Test Your Knowledge",
    text: "Q1. What property changes text color? Q2. How do you set a background image? Q3. Which property adds space inside an element? Q4. What’s the difference between padding and margin? Try answering without looking at notes!"
  },
};

// ======================
// ▶ RUN BUTTON FUNCTIONALITY
// ======================

const runBtn = document.getElementById("run-btn");
const editor = document.getElementById("code-editor");
const output = document.getElementById("output-frame");

runBtn.addEventListener("click", () => {
  const code = editor.value;
  const doc = output.contentDocument || output.contentWindow.document;
  doc.open();
  doc.write(code);
  doc.close();
});

// ======================
// 📘 LESSON SWITCHING
// ======================

document.querySelectorAll(".lesson-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-target");
    const box = document.getElementById("content-box");
    const title = document.getElementById("content-title");
    const subtitle = document.getElementById("content-subtitle");
    const text = document.getElementById("content-text");

    if (lessons[key]) {
      box.classList.add("opacity-0");
      setTimeout(() => {
        title.innerText = lessons[key].title;
        subtitle.innerText = lessons[key].subtitle;
        text.innerText = lessons[key].text;
        box.classList.remove("opacity-0");
      }, 200);
    }
  });
});
