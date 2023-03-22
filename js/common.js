
function onPageLoad()
{
    addDynamicContent();
    faderFadeOut();
}

function addDynamicContent()
{
    addMediaBar();
    addFooter();
    loadProjects();
    addFakes();

}

function calcNumFakes(flexContainer)
{
    /*https://stackoverflow.com/questions/49043684/how-to-calculate-the-amount-of-flexbox-items-in-a-row*/
    const grid = Array.from(flexContainer.children);
    const baseOffset = grid[0].offsetTop;
    const breakIndex = grid.findIndex(item => item.offsetTop > baseOffset);
    const numPerRow = (breakIndex === -1 ? grid.length : breakIndex);
    let nFakes = numPerRow - grid.length % numPerRow;
    if (nFakes == numPerRow) nFakes = 0;
    return nFakes;
}

function addMediaBar()
{
    mediaBar = document.getElementById("dyn-media-bar");
    if (mediaBar == null) return;

    mediaBar.innerHTML=`
    <div class="media-bar main-media-bar py-3">   
        <a href="https://www.linkedin.com/in/marcmde/" target="_blank" class="link-light fa-brands fa-linkedin"></a>
        <a href="https://www.youtube.com/@marcmdeyt" target="_blank" class="link-light fa-brands fa-youtube"></a>
        <a href="https://marcmde.itch.io/" target="_blank" class="link-light fa-brands fa-itch-io"></a>
        <a href="https://github.com/MarcMDE" target="_blank" class="link-light fa-brands fa-github"></a>
        <a href="https://twitter.com/MarcMDE" target="_blank" class="link-light fa-brands fa-twitter"></a>
    </div>`
}

function addFooter()
{
    footer = document.getElementById("dyn-footer");
    if (footer == null) return;

    footer.innerHTML=`
    <p>Contact me: <a href = "mailto: marcmde95@gmail.com">marcmde95@gmail.com</a></p>
    <p class="text-note">Copyright &copy; 2023 Marc Montagut Llauradó</p>`
}

function faderFadeOut()
{
    fader = document.getElementById("fader");
    if (fader == null) return;

    fader.addEventListener('transitionend', () => {
        console.log("t end");
        fader.classList.remove("fadeOut");
        fader.style.display = 'none';
      });
    fader.classList.add("fadeOut");
}

// 
let fakes = []

function addFakes(){
    flexContainer = document.querySelector(".card-container");
    nFakesToAdd = calcNumFakes(flexContainer);

    for(let i=0; i<nFakesToAdd; i++)
    {
        const fake = document.createElement('div');
        fake.classList.add('card-fake');
        flexContainer.appendChild(fake);
        fakes.push(fake);
    }
}

function delFakes(){
    for(let i=0; i<fakes.length; i++)
    {
        fakes[i].remove();
    }

    fakes = [];
}

window.addEventListener('resize', () => {
    delFakes();
    addFakes();
}, true);

projectsData = [
    {
        name: "Root's up",
        img: "roots_up.png",
        desc: `A videogame developed in 48h (by 5 devs) 
        during a Global Game Jam. The whole map consists 
        in 8 procedurally generated interconnected chunks 
        of roots (mesh computed using 
        <a href="https://en.wikipedia.org/wiki/Marching_cubes" target="_blank">marching cubes</a>
        ) that simulate an infinite looping world.`,
        year: "2023",
        tech: ["C#", "Unity"],
        media: {
            itchio: "https://marcmde.itch.io/roots-up",
            youtube: "https://youtu.be/FTOSxM_rJPw",
            github: "https://github.com/MarcMDE/GGJ23",
            webpage: "https://globalgamejam.org/2023/games/rootswalkingsim-7"
        }
    },
    {
        name: "Blobs & Gulps",
        img: "blobs_n_gulps.png",
        desc: `A videogame developed in 48h (by 3 devs) during a 
        Global Game Jam. 2 autonomus factions, agents with 
        variable moods that take different decisions. 
        As the player, you can take control of any agent anytime 
        in order to eradicate one of the factions.`,
        year: "2022",
        tech: ["C#", "Unity"],
        media: {
            /*itchio: "",*/
            youtube: "https://youtu.be/9JeNin2ijTk",
            github: "https://github.com/MarcMDE/Blobs_n_Gulps",
            webpage: "https://globalgamejam.org/2022/games/blobs-gulps-0"
        }
    },
    {
        name: "Leak Point",
        img: "leak_point.png",
        desc: `A videogame developed in 48h (by 4 devs) during a Global Game Jam. 
        Solve a puzzle based on the inverse projection matrix properties while
        jumping throught a cloud of cubes.`,
        year: "2021",
        tech: ["C#", "Unity"],
        media: {
            /*itchio: "",*/
            youtube: "https://youtu.be/az9YMSKyXFs",
            github: "https://github.com/MarcMDE/Leak_Point",
            webpage: "https://globalgamejam.org/2021/games/timeless-9"
        }
    },
    {
        name: "Tap To JAmp",
        img: "tap_to_jamp.png",
        desc: `A <a href="https://impossible.game/1/" target="_blank">"The Impossible Game"</a> 
        or <a href="shorturl.at/emrtA" target="_blank">"Geometry Dash"</a> 
        clone I fully developed long ago. Physics, collisions 
        <a href="shorturl.at/bcsHJ" target="_blank">(Hyperplane separation theorem</a> or SAT), 
        particle system, "level editor" and camera movement coded from scratch.`,
        year: "2016",
        tech: ["C", "raylib", "Adobe Photoshop", "Audacity"],
        media: {
            /*itchio: "",*/
            youtube: "https://youtu.be/z9aRZhvkeH4",
            github: "https://github.com/MarcMDE/TapToJAmp",
            /*webpage: ""*/
        }
    },
    {
        name: "Aethereal Gear",
        img: "aethereal_gear.png",
        desc: `A 2D top-down hack&slash videogame coded and designed by me as the final project for my HNC.
        Multiple enemies and resources, a boss, a cool character with different attacks and a lot of fun.`,
        year: "2015",
        tech: ["C#", "Unity"],
        media: {
            /*itchio: "",*/
            youtube: "https://www.youtube.com/watch?v=VUrKal_jc7M&ab_channel=CoverBloodPixel",
            /*github: "",*/
            /*webpage: ""*/
        }
    },
    {
        name: "MarcMDE's website",
        img: "website.png",
        desc: `My portfolio and presentation
        card. I decided to stick to plain HTML, CSS and JS for simplicity and 
        to improve my skills in these languages instead of relying on popular
        frameworks.`,
        year: "2023",
        tech: ["HTML", "CSS", "JS"],
        media: {
            /*itchio: "",*/
            /*youtube: "",*/
            github: "https://github.com/MarcMDE/MarcMDE.github.io",
            webpage: "https://marcmde.github.io/"
        }
    },
];

function loadProjects(){
    flexContainer = document.querySelector(".card-container");
    if (flexContainer == null) return;
    
    projectsData.forEach(e => {
        card = document.createElement('div');
        card.classList.add('card');

        let projectsHtml = "";
        projectsHtml += `
        <div class="card-img-container">
            <img src="images/${e.img}" alt=""></img>
            <small class="card-year">${e.year}</small>
            <p class="card-title">${e.name}</p>
        </div>
        <div class="card-body-container">
            <div class="card-body">
                <p>${e.desc}</p>

                <div class="media-bar min-media-bar">`

                    projectsHtml += (e.media.itchio ? 
                        `<a href="${e.media.itchio}" target="_blank" 
                        class="fa-brands fa-itch-io"></a>` : "");
                    projectsHtml += (e.media.youtube ? 
                        `<a href="${e.media.youtube}" target="_blank" 
                        class="fa-brands fa-youtube"></a>` : "");
                    projectsHtml += (e.media.github ? 
                        `<a href="${e.media.github}" target="_blank" 
                        class="fa-brands fa-github"></a>` : "");    
                    projectsHtml += (e.media.webpage ?
                        `<a href="${e.media.webpage}" target="_blank" 
                        class="fa-solid fa-globe"></a>` : "");
        
        projectsHtml +=`
                </div>`
        projectsHtml +=`
                <div class="tech-container">`

        e.tech.forEach(t => {
            projectsHtml +=`
                    <div>${t}</div>`;
        });
        projectsHtml +=`
                </div>
            </div>
        </div>`;
        card.innerHTML = projectsHtml;

        flexContainer.appendChild(card);
    });
}