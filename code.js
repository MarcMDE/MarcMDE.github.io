
function onPageLoad()
{
    addDynamicContent();
    faderFadeOut();
}

function addDynamicContent()
{
    addMediaBar();
    addFooter();
}

function addMediaBar()
{
    mediaBar = document.getElementById("dyn-media-bar");
    mediaBar.innerHTML=`
    <div class="media-bar py-3">   
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
    footer.innerHTML=`
    <div class="container py-3 fixed-footer">
        <p class="mb-1">Contact me: <a href = "mailto: marcmde95@gmail.com">marcmde95@gmail.com</a></p>
        <p class="mb-0 text-secondary">Copyright &copy; 2023 Marc Montagut Llauradó</p>
    </div>`
}

function faderFadeOut()
{
    fader = document.getElementById("fader");
    fader.addEventListener('transitionend', () => {
        console.log("t end");
        fader.classList.remove("fadeOut");
        fader.style.display = 'none';
      });
    fader.classList.add("fadeOut");
}