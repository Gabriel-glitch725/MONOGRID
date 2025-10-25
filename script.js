const menu = () => {
    const hamburgerBtn = document.querySelector("#hamburger-button")
    const mobileMenu = document.querySelector("#mobile-menu")



    const toggleMenu = () => {
       mobileMenu.classList.toggle("hidden")
       mobileMenu.classList.toggle("flex")
    }


    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu )
}

document.addEventListener('DOMContentLoaded', menu)


const toggleBtn = document.querySelector("#themeToggle")
const icon = document.querySelector("#themeIcon")
const html = document.documentElement
const UserTheme = localStorage.getItem("theme")

if (html.classList.contains("dark")) {
    html.classList.add("dark")
    icon.classList.replace("fa-moon", "fa-sun")
}  else  {
    html.classList.remove("dark")
    icon.classList.replace("fa-sun", "fa-moon")
}

toggleBtn.addEventListener("click", () => {
    html.classList.toggle("dark")
    const isDark = html.classList.contains("dark")


   if (isDark) {
    icon.classList.replace("fa-moon", "fa-sun")
    localStorage.setItem("theme", "dark")
   } else { 
    icon.classList.replace("fa-sun", "fa-moon")
    localStorage.setItem("theme", "light")
   }
})




const Togglebtn = document.querySelector("#Toggle")
const icons = document.querySelector("#Icon")
const Html = document.documentElement
const Userchange = localStorage.getItem("change")

if (html.classList.contains("dark")) {
    Html.classList.add("dark")
    icons.classList.replace("fa-moon", "fa-sun")
}  else  {
    Html.classList.remove("dark")
    icons.classList.replace("fa-sun", "fa-moon")
}

Togglebtn.addEventListener("click", () => {
    Html.classList.toggle("dark")
    const veryDark = Html.classList.contains("dark")


   if (veryDark) {
    icons.classList.replace("fa-moon", "fa-sun")
    localStorage.setItem("change", "dark")
   } else {
    icons.classList.replace("fa-sun", "fa-moon")
     localStorage.setItem("change", "light")
   }
})


const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const mainContent = document.querySelector("#maincontent")
const altContent = document.querySelector("#altcontent")
const mainContents = document.querySelector("#maincontents")
const altContents = document.querySelector("#altcontents")

function setActive(activeBtn, inactiveBtn) {
    activeBtn.classList.add("bg-purple-900", "text-white", "shadow", "ring-2", "ring-purple-400")
    activeBtn.classList.remove( "text-white","bg-red-600")
    inactiveBtn.classList.remove("bg-purple-900", "text-black", "shadow", "ring-2", "ring-purple-400")
    inactiveBtn.classList.add( "text-black","dark:text-white")
}

function activateMain() {
    mainContent.classList.remove("hidden", "lg:hidden")
    altContent.classList.add("hidden", "lg:hidden")
    setActive(btn1, btn2)
}

function activateAlt() {
    altContent.classList.remove("hidden", "lg:hidden")
    mainContent.classList.add("hidden", "lg:hidden")
    setActive(btn2, btn1)
} 


btn1.addEventListener("click", activateMain)
btn2.addEventListener("click", activateAlt)

window.onload = activateMain

const mainConts = document.querySelector("#maincontents")
const altConts = document.querySelector("#altcontents")


function activateMn() {
    mainConts.classList.remove("hidden", "lg:hidden")
    altConts.classList.add("hidden", "lg:hidden")
    setActive(btn1, btn2)
}

function activateAt() {
    altConts.classList.remove("hidden", "lg:hidden")
    mainConts.classList.add("hidden", "lg:hidden")
    setActive(btn2, btn1)
} 


btn1.addEventListener("click", activateMn)
btn2.addEventListener("click", activateAt)

window.onload = activateMn


const themeToggle = document.getElementById("themeToggle"); 
    const themeIcon = document.getElementById("themeIcon"); 
 
    themeToggle.addEventListener("click", () => { 
      document.body.classList.toggle("dark"); 
      themeIcon.classList.toggle("fa-moon"); 
      themeIcon.classList.toggle("fa-sun"); 
    }); 
 
    // Monthly / Yearly toggle 
    const monthlyLabel = document.getElementById("monthlyLabel"); 
    const yearlyLabel = document.getElementById("yearlyLabel"); 
    const prices = document.querySelectorAll(".price"); 
    let isYearly = false; 
 
    function updatePrices() { 
      prices.forEach(price => { 
        const amount = isYearly ? price.dataset.yearly : price.dataset.monthly; 
        const period = isYearly ? "/yr" : "/mo"; 
        price.innerHTML = `$${amount}<span class="text-base font-normal 
text-gray-500">${period}</span>`; 
      }); 
    } 
 
    monthlyLabel.parentElement.addEventListener("click", () => { 
      isYearly = !isYearly; 
      monthlyLabel.classList.toggle("bg-blue-600"); 
      monthlyLabel.classList.toggle("text-white"); 
      yearlyLabel.classList.toggle("bg-blue-600"); 
      yearlyLabel.classList.toggle("text-white"); 
      updatePrices(); 
    }); 

    