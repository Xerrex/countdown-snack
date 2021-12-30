const apps = [
    {
        name:"Meditation App",
        description: "App to play relaxing music for meditation.",
        link:"/meditation-app/index.html"
    },
    {
        name: "Countdown App",
        description: "App to Countdown to when we eat together. Use the time format dd/mm/yyyy* ie 12/12/2021.",
        link:"/countdown-app/index.html"
    },
    {
        name: "Rock Paper & Scissors",
        description: "This is the rock paper & scissors game.",
        link:"/rps-game/index.html"
    }
]


const js_snacks = ()=>{
    const app_cards = document.querySelector(".apps");
    let app_html = '';

    apps.forEach((app)=>{
        const app_text = `
            <div class="card">
                <div class="card-content">
                    <h4 class="card-title">${app.name}</h4>
                    <p class="card-desc">${app.description}</p>
                    <a class="button" href="${app.link}" 
                        target="_blank" 
                        rel="noreferrer noopener">Open</a>
                </div>
            </div>
            `;
        app_html += app_text;

    });

    app_cards.innerHTML = app_html

}

js_snacks();