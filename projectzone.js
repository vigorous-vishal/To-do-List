const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const section5 = document.querySelector(".section5");
const section6 = document.querySelector(".section6");
const section7 = document.querySelector(".section7");
const section8 = document.querySelector(".section8");
const section9 = document.querySelector(".section9");

const sec2outer = document.querySelector(".sec2outer");
const sec3outer = document.querySelector(".sec3outer");
const sec4outer = document.querySelector(".sec4outer");

const sec2box1 = document.querySelector(".sec2box1");
const sec2box2 = document.querySelector(".sec2box2");

const sec3box1 = document.querySelector(".sec3box1");
const sec3box2 = document.querySelector(".sec3box2");

const sec4box1 = document.querySelector(".sec4box1");
const sec4box2 = document.querySelector(".sec4box2");
const sec4box3 = document.querySelector(".sec4box3");

var sec4box1matter = sec4box1.value;
var sec4box2matter = sec4box2.value;
var sec4box3matter = sec4box3.value;

var sec6box1 = document.querySelector(".sec6box1");
var sec6box1h1tag = document.querySelector(".sec6box1h1tag");
var sec6box1ptag = document.querySelector(".sec6box1ptag");
var sec6box1h2tag = document.querySelector(".sec6box1h2tag");
var sec6box1conbtn = document.querySelector(".sec6box1conbtn");

var sec5box2child = document.querySelector(".sec5box2child");

var sec6box3 = document.querySelector(".sec6box3");
var sec6box3child = document.querySelector(".sec6box3child");
var sec6box3notelist = document.querySelector(".sec6box3notelist");

//main Admin work//
var sec6taskbox = document.querySelector(".sec6taskbox");
var sec6addtaskbtn = document.querySelector(".sec6addtaskbtn");
var sec6addnotelist = document.querySelector(".sec6addnotelist");
var sec6tasklist = document.querySelector(".sec6tasklist");
var sec6searchbox = document.querySelector(".sec6searchbox");

//main Employee work//
var sec5tasklist = document.querySelector(".sec5tasklist");

    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none"; //employee//
    section6.style.display = "none"; //admin//
    section7.style.display = "none";
    section8.style.display = "none";
    section9.style.display = "none";

//main employee notework//
var taskbox = document.querySelector(".taskbox");
var addtaskbtn = document.querySelector(".addtaskbtn");
var tasklist = document.querySelector(".tasklist");
var clrbtn = document.querySelector(".clrbtn");
var delbox = document.querySelector(".delbox");
var inputbox = document.querySelector(".searchbox");






 sec6addtaskbtn.addEventListener("click", (e) =>{
    e.preventDefault()
    if(sec6taskbox.value !== "")

    {
        const sec6taskboxtext = sec6taskbox.value.trim();
        const sec6newnewli = document.createElement("li");
        sec6newnewli.className = "sec6task";

        const sec6taskinput = document.createElement("input");
        sec6taskinput.type = "text";
        sec6taskinput.type = "text";
        sec6taskinput.style.width = "426px";
        sec6taskinput.style.height = "50px";
        sec6taskinput.style.background = "red";
        sec6taskinput.style.color = "black";
        sec6taskinput.style.marginLeft = "15px";
        sec6taskinput.style.marginTop = "4.5px";
        sec6taskinput.style.fontFamily = "Arial, Helvetica, sans-serif";
        sec6taskinput.style.fontWeight = "bolder";
        sec6taskinput.disabled = true;

        sec6taskinput.className = "sec6disabled-task";
        sec6taskinput.value = sec6taskboxtext;
        sec6newnewli.appendChild(sec6taskinput);

        const sec6deletebtn = document.createElement("button")
        sec6deletebtn.innerText = "Delete";
        sec6deletebtn.className = "sec6deletebtn";
        sec6deletebtn.style.width = "70px";
        sec6deletebtn.style.height = "38px";
        sec6deletebtn.style.marginLeft = "5px";
        sec6deletebtn.style.borderRadius = "5px";
        sec6deletebtn.style.fontSize = "17px";
        sec6deletebtn.style.fontWeight = "750";
        sec6newnewli.appendChild(sec6deletebtn);

        const sec6editbtn = document.createElement("button");
        sec6editbtn.innerText = "Edit";
        sec6editbtn.className = "sec6editbtn";
        sec6editbtn.style.width = "70px";
        sec6editbtn.style.height = "38px";
        sec6editbtn.style.marginLeft = "5px";
        sec6editbtn.style.borderRadius = "5px";
        sec6editbtn.style.fontSize = "17px";
        sec6editbtn.style.fontWeight = "750"
        sec6newnewli.appendChild(sec6editbtn);

        sec6tasklist.appendChild(sec6newnewli);
        sec6taskbox.value = "";

        //value for section5//
        
        const sec5newnewli = document.createElement("li");
        sec5newnewli.className = "sec5task";
        const sec5taskinput = document.createElement("div");
        sec5taskinput.type = "text";
        sec5taskinput.style.width = "468px";
        sec5taskinput.style.height = "40px";
        sec5taskinput.style.background = "red";
        sec5taskinput.style.color = "black";
        sec5taskinput.style.marginLeft = "15px";
        sec5taskinput.style.marginTop = "4.5px";
        sec5taskinput.style.fontFamily = "Arial, Helvetica, sans-serif";
        sec5taskinput.style.fontWeight = "bolder";
        sec5taskinput.style.padding = "5px";
        sec5taskinput.style.display = "inline-block";
        sec5taskinput.disabled = true;

        sec5taskinput.className = "sec5disabled-task";
        sec5taskinput.textContent = sec6taskboxtext;

        sec5newnewli.appendChild(sec5taskinput);

        const sec5deletebtn = document.createElement("button")
        sec5deletebtn.innerText = "Delete";
        sec5deletebtn.className = "sec5deletebtn";
        sec5deletebtn.style.width = "100px";
        sec5deletebtn.style.height = "42px";
        sec5deletebtn.style.marginLeft = "6px";
        sec5deletebtn.style.marginBottom = "0px";
        sec5deletebtn.style.borderRadius = "5px";
        sec5deletebtn.style.border = "none";
        sec5deletebtn.style.fontSize = "17px";
        sec5deletebtn.style.fontWeight = "750";

        sec5newnewli.appendChild(sec5deletebtn);

        sec5tasklist.appendChild(sec5newnewli);    

    }

        else{
            alert("Please set a task!");
        }
 });

 sec6searchbox.addEventListener("keyup", (e) => {
    e.preventDefault();
    const vishalsearchtext = sec6searchbox.value.tolowercase();
    const vishaltaskitems = document.querySelectorAll(".sec6task");

    for (let i=0; i < vishaltaskitems.length; i++)
        {
            const vishallitask = vishaltaskitems[i];
            const vishaltasktextitem = vishallitask
            .querySelector(".disabled-task")
            .value.toLowerCase();
        
            if(vishaltasktextitem.indexOf(vishalsearchtext) !== -1)
            {
                vishallitask.style.display = "block";
                
            }
            else{
                vishallitask.style.display = "none";
            }
        }



 })

 sec6tasklist.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("sec6deletebtn"))
    {
        e.target.parentElement.remove();
    }
});

sec5tasklist.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("sec5deletebtn"))
    {
        e.target.parentElement.remove();
    }
});

sec6tasklist.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("sec6editbtn")){
        const input = e.target.parentElement.querySelector(".sec6disabled-task");
        input.disabled = !input.disabled;

        if(!input.disabled)
        {
            input.focus();
        }
    }
});


function emplogin() 
{
    section1.style.display = "none";
    section2.style.display = "grid";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    section9.style.display = "none";

};

function empback()
{
    section1.style.display = "flex";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    section9.style.display = "none";

}

function admlogin() 
{
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "grid";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    section9.style.display = "none";

}

function stopanimation1()
{
    sec2outer.style.animation = "none";
}

function stopanimation2()
{
    sec3outer.style.animation = "none";
}

function stopanimation3()
{
    sec4outer.style.animation = "none";
}

function empsignin()
{
    var sec2box1matter = sec2box1.value;
    var sec2box2matter = sec2box2.value;

    if((sec2box1matter === "vishal" && sec2box2matter === "Lalisa") && sec2box1matter !== "" && sec2box2matter !== "" || (sec2box1matter === sec4box1.value && sec2box2matter === sec4box2.value && sec2box1matter !== "" && sec2box2matter !== ""))
    {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "flex";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";

    }

    else{
        alert("Incorrect Username or Password! Enter valid Username and Password!");
    }
}

function admsignin()
{
    var sec3box1matter = sec3box1.value;
    var sec3box2matter = sec3box2.value;

    if(sec3box1matter === "vishal" && sec3box2matter === "Lalisa")
    {
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "flex";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";

    }

    else{
        alert("Incorrect Username or Password! Enter valid Username and Password!");
    }
}

function empnewlogin()
{
    var sec4box1matter = sec4box1.value;
    var sec4box2matter = sec4box2.value;

    if(sec4box1matter.length !== 0 && sec4box2matter.length !== 0 &&  sec4box2.value === sec4box3.value)
    {
        section1.style.display = "none";
        section2.style.display = "grid";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";

        alert("Enter your new Username and Password in Employee Login");
    }
    else{
        alert("Please enter your correct details!");
    }
}

function empfpassword()
{
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "grid";
        section8.style.display = "none";
        section9.style.display = "none";

}

function admfpassword()
{
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "none";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "grid";
        section9.style.display = "none";

}

function signup(){
        section1.style.display = "none";
        section2.style.display = "none";
        section3.style.display = "none";
        section4.style.display = "grid";
        section5.style.display = "none";
        section6.style.display = "none";
        section7.style.display = "none";
        section8.style.display = "none";
        section9.style.display = "none";

}

function submitempdet()
{
    var sec4box1matter = sec4box1.value;
    var sec4box2matter = sec4box2.value;
    var sec4box3matter = sec4box3.value;

    if(sec4box1matter.length !== 0 && sec4box2matter.length !== 0 && sec4box2matter.length === sec4box3matter.length)
    {
        alert("Your record has been submitted!");
    }
    else{
        alert("Please enter your correct details!");
    }
}

function sec6conbtn()
{
    sec6box1.setAttribute("class","sec6box1conbtnof2");
    sec6box1h1tag.remove();
    sec6box1h2tag.remove();
    sec6box1ptag.remove();
    sec6box1conbtn.remove();
    sec6box3child.remove();
    sec6box3.style.background = "none";
    sec6box3.style.backgroundColor = "black";
}

sec6addnotelist.addEventListener("click", (e) =>{
    e.preventDefault()
    if(sec6taskbox.value !== "")

    {
        const sec6taskboxtext = sec6taskbox.value.trim();
        const sec6newnewli = document.createElement("li");
        sec6newnewli.className = "sec6task";

        const sec6taskdiv = document.createElement("div");
        sec6taskdiv.style.width = "355px";
        sec6taskdiv.style.height = "35px";
        sec6taskdiv.style.background = "red";
        sec6taskdiv.style.color = "black";
        sec6taskdiv.style.marginLeft = "0px";
        sec6taskdiv.style.marginTop = "4.5px";
        sec6taskdiv.style.fontFamily = "Arial, Helvetica, sans-serif";
        sec6taskdiv.style.fontWeight = "bolder";
        sec6taskdiv.style.display = "inline-block";

        sec6taskdiv.className = "sec6disabled-task";
        sec6taskdiv.textContent = sec6taskboxtext;
        sec6newnewli.appendChild(sec6taskdiv);

        const sec6deletebtn = document.createElement("button")
        sec6deletebtn.innerText = "Delete";
        sec6deletebtn.className = "sec6hhhdeletebtn";
        sec6deletebtn.style.width = "70px";
        sec6deletebtn.style.height = "35px";
        sec6deletebtn.style.marginLeft = "5px";
        sec6deletebtn.style.borderRadius = "5px";
        sec6deletebtn.style.fontSize = "17px";
        sec6deletebtn.style.fontWeight = "750";

        sec6newnewli.appendChild(sec6deletebtn);

        

        sec6box3notelist.appendChild(sec6newnewli);
        sec6taskbox.value = "";
    
    
    }

        else{
            alert("Please set a task!");
        }
 });


 sec6box3notelist.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("sec6hhhdeletebtn")){
        e.target.parentElement.remove();
    }
});

function sec6box3logoutbtn()
{
    section1.style.display = "none";
    section2.style.display = "none";
    section3.style.display = "none";
    section4.style.display = "none";
    section5.style.display = "none";
    section6.style.display = "none";
    section7.style.display = "none";
    section8.style.display = "none";
    section9.style.display = "block";
}




addtaskbtn.addEventListener("click", (e) =>{
    e.preventDefault()   
    if(taskbox.value !== "")
    {

    const tasboxtext = taskbox.value.trim();
    const newli = document.createElement("li");
    newli.className = 'task';
    const taskinput = document.createElement('input')
    taskinput.type = "text";
    taskinput.style.width = "685px";
    taskinput.style.height = "45px";
    taskinput.style.background = "black";
    taskinput.style.color = "white";
    taskinput.style.marginLeft = "3%";
    taskinput.style.marginTop = "5px";
    taskinput.disabled = true;

    taskinput.className = "disabled-task";
    taskinput.value = tasboxtext;
    newli.appendChild(taskinput); 

    const deletebtn = document.createElement("button")
    deletebtn.innerText = "Delete";
    deletebtn.className = "deletebtn";
    deletebtn.style.width = "70px";
    deletebtn.style.height = "38px";
    deletebtn.style.marginLeft = "5px";
    deletebtn.style.borderRadius = "5px";
    newli.appendChild(deletebtn);

    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit";
    editbtn.className = "editbtn";
    editbtn.style.width = "70px";
    editbtn.style.height = "38px";
    editbtn.style.marginLeft = "5px";
    editbtn.style.borderRadius = "5px";
    newli.appendChild(editbtn);

    tasklist.appendChild(newli)
    taskbox.value = ""
    }

    else(
        alert("Please set a task!")
    )
});

tasklist.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("deletebtn")){
        e.target.parentElement.remove();
    }
});

tasklist.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("editbtn")){
        const input = e.target.parentElement.querySelector(".disabled-task");
        input.disabled = !input.disabled;

        if(!input.disabled)
        {
            input.focus();
        }
    }
});

function zam()
{
    sec5box2child.remove();
}

