
const totalContainer=document.getElementById('total-container')
const text=document.getElementById('txt')
const profile=document.getElementById('profile')

window.addEventListener('load',()=>{

    totalContainer.scrollIntoView({behavior:'smooth'});
})


// for Skill page
const skillsContainer=document.querySelector('.tot-skill-container')
const SkillsIcon=document.getElementById('skills-icon')

SkillsIcon.addEventListener('click',()=>{
    totalContainer.style.display='none'
    skillsContainer.style.display='inline-block';
    skillsContainer.style.animationPlayState='running'
    skillsContainer.style.animationDuration='1s'
    skillsContainer.style.animationFillMode='forwards'
    skillsContainer.style.animationTimingFunction='lenear';
})

//For Resume page
const resumeIcon=document.getElementById('resume-icon')
const resumeContainer=document.getElementById('tot-resume-container')

resumeIcon.addEventListener('click',()=>{
    resumeContainer.style.display='flex'
    totalContainer.style.display='none'
})


//For Projects Page
const projectIcon=document.getElementById('project-icon')
const projectsContainer=document.getElementById('tot-project-container')

projectIcon.addEventListener('click',()=>{
    projectsContainer.style.display='flex'
    totalContainer.style.display='none'
})


const projectRightIcon=document.getElementById('proj-right-icon')
const projectLeftIcon=document.getElementById('proj-left-icon')
const projectBoxes=document.querySelectorAll('.box')

let currentBox=0;
let previousBox;
let nextBox;

projectRightIcon.addEventListener('click',()=>{
      
      if(currentBox!=projectBoxes.length-1)
      {
         nextBox=currentBox+1
         projectBoxes[nextBox].style.display='inline-block'
         projectBoxes[nextBox].style.animationName='box'
         projectBoxes[nextBox].style.animationDelay='1s';
        moveToLeft()
      }
})

function moveToLeft()
{   
      projectBoxes[currentBox].style.animationName='rbox'
      projectBoxes[currentBox].style.animationDelay='0s'
      projectBoxes[currentBox].style.animationTimingFunction='lenier'
      updateBoxIndex()
     
}

function updateBoxIndex()
{
    currentBox=nextBox
    previousBox=currentBox-1
}

projectLeftIcon.addEventListener('click',()=>
{
    if(previousBox !=-1)
    {   
        projectBoxes[previousBox].style.display='inline-block'
        projectBoxes[previousBox].style.animationName='sbox';
        projectBoxes[previousBox].style.animationDelay='1s'
        projectBoxes[previousBox].style.animationTimingFunction='lenier';
        moveToRight()  
    }  
})

function  moveToRight()   
{   projectBoxes[currentBox].style.animationName='fbox'
    projectBoxes[currentBox].style.animationDelay='0s'
    projectBoxes[currentBox].style.animationTimingFunction='lenier';
    update()
}

function update()
{
     currentBox=previousBox;
     nextBox=currentBox+1;
     previousBox=currentBox-1
}

// For About page
const aboutIcon=document.getElementById('about-icon')
const aboutContainer=document.getElementById('tot-about-container')

aboutIcon.addEventListener('click',()=>{
    aboutContainer.style.display='flex';
    totalContainer.style.display='none';
})



const backIcon=document.getElementsByName('back-icon')

backIcon.forEach(icon=>{
    icon.addEventListener('click',()=>{
        totalContainer.style.display='flex'
        skillsContainer.style.display='none';
        resumeContainer.style.display='none'
        projectsContainer.style.display='none'
        aboutContainer.style.display='none';
       
    })
})


function full() {

    profile.scrollIntoView({behavior:'smooth'});
    // Check if fullscreen mode is available and if not already in fullscreen
    if (document.fullscreenElement == null) {
        // Request fullscreen only if triggered by a user gesture (click event here)
        document.documentElement.requestFullscreen()
            .catch(err => {
                console.error(`Failed to enter fullscreen: ${err.message}`);
            });
    } else {
        // Exit fullscreen mode
        if (document.exitFullscreen) {
            document.exitFullscreen()
                .catch(err => {
                    console.error(`Failed to exit fullscreen: ${err.message}`);
                });
        }
    }
}


  