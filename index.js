let count=0;

let time=setInterval(showNext,30000);

function showNext()
{
    if(count%4===0)
    {
        edu_div=document.getElementsByClassName("Educationp")[0];
        edu_div.style.visibility="visible";
        edu_div.style.height="auto";
        about=document.getElementsByClassName("aboutspan")[0];
        about.innerHTML='Education';
        aboutp=document.getElementsByClassName("aboutp")[0];
        aboutp.style.visibility="hidden";
        aboutp.style.height="0px";
    }
    else if(count%4===1)
    {
        edu_div=document.getElementsByClassName("Educationp")[0];
        edu_div.style.visibility="hidden";
        edu_div.style.height="0px";
        about=document.getElementsByClassName("aboutspan")[0];
        about.innerHTML='Skills';
        aboutp=document.getElementsByClassName("Skillsp")[0];
        aboutp.style.visibility="visible";
        aboutp.style.height="auto";
    }
    else if(count%4===2)
    {
        edu_div=document.getElementsByClassName("Skillsp")[0];
        edu_div.style.visibility="hidden";
        edu_div.style.height="0px";
        about=document.getElementsByClassName("aboutspan")[0];
        about.innerHTML='Experience';
        aboutp=document.getElementsByClassName("experiencep")[0];
        aboutp.style.visibility="visible";
        aboutp.style.height="auto";
    }
    else if(count%4===3)
    {
        edu_div=document.getElementsByClassName("experiencep")[0];
        edu_div.style.visibility="hidden";
        edu_div.style.height="0px";
        about=document.getElementsByClassName("aboutspan")[0];
        about.innerHTML='About';
        aboutp=document.getElementsByClassName("aboutp")[0];
        aboutp.style.visibility="visible";
        aboutp.style.height="auto";
    }
    count++;
}

// function showBack()
// {
//     if(count%4===1)
//     {
//         edu_div=document.getElementsByClassName("aboutp")[0];
//         edu_div.style.visibility="visible";
//         edu_div.style.height="auto";
//         about=document.getElementsByClassName("aboutspan")[0];
//         about.innerHTML='About';
//         aboutp=document.getElementsByClassName("Educationp")[0];
//         aboutp.style.visibility="hidden";
//         aboutp.style.height="0px";
//         butt1=document.getElementsByClassName("next")[0];
//         butt1.disabled=false;
//     }
//     else if(count%4===2)
//     {
//         edu_div=document.getElementsByClassName("Skillsp")[0];
//         edu_div.style.visibility="hidden";
//         edu_div.style.height="0px";
//         about=document.getElementsByClassName("aboutspan")[0];
//         about.innerHTML='Education';
//         aboutp=document.getElementsByClassName("Educationp")[0];
//         aboutp.style.visibility="visible";
//         aboutp.style.height="auto";
//         butt1=document.getElementsByClassName("next")[0];
//         butt1.disabled=false;
//     }
//     else if(count%4===3)
//     {
//         edu_div=document.getElementsByClassName("experiencep")[0];
//         edu_div.style.visibility="hidden";
//         edu_div.style.height="0px";
//         about=document.getElementsByClassName("aboutspan")[0];
//         about.innerHTML='Skills';
//         aboutp=document.getElementsByClassName("Skillsp")[0];
//         aboutp.style.visibility="visible";
//         aboutp.style.height="auto";
//         butt1=document.getElementsByClassName("next")[0];
//         butt1.disabled=false;
//     }
//     count--;
//     if(count%4===0)
//     {
//         butt=document.getElementsByClassName("before")[0];
//         butt.disabled=true;
//         butt1=document.getElementsByClassName("next")[0];
//         butt1.disabled=false;
//     }
// }

