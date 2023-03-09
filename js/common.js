
function onPageLoad()
{
    addDynamicContent();
    faderFadeOut();

    addFakes();
}

function addDynamicContent()
{
    addMediaBar();
    addFooter();

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