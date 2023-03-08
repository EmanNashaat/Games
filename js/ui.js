import { gameDetails } from "./details.js";

export class displayGames{
    constructor(){   
        this.fetchApi() ;
        $(".nav-link").click((e)=>{
            let navLI = e.target.innerHTML.toLowerCase()
            this.fetchApi(navLI);
        });
    }
    async fetchApi(apiCode){
        this.spin = document.querySelector("#spinner")
        this.spin.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '73fa706c74mshf212196819c32f4p153e45jsne923dcd35a24',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        if(apiCode != null){
            var apiLink = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${apiCode}`
        }
        else{
            var apiLink = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg`  
        }
        let api = await fetch( apiLink , options)
        let finalApi = await api.json();
        this.display(finalApi);
        this.spin.classList.add("d-none");
    }

    display(finalApi){
        let gameDiv = ""
        for (let i = 0; i < finalApi.length; i++) {
            gameDiv += `
            <div class=" game-cont col-lg-3 col-md-6 py-1 gameHolder " id="game">
                    <div class=" game-cont-in pt-3  position-relative rounded-2 text-white border border-1 border-dark h-100">
                        <div class="game-layer position-absolute top-0 bottom-0 start-0 end-0 " id=${finalApi[i].id}></div>
                        <div class="w-100 rounded-2 overflow-hidden px-3">
                            <img  src="${finalApi[i].thumbnail}" class="w-100" alt="" id="gameImg">
                        </div>
                        <div class=" game-div1 d-flex justify-content-between align-items-center py-2 text-capitalize px-3">
                            <span id="gameTitle">${finalApi[i].title}</span>
                            <span class="first-span rounded-2 px-2 py-1">free</span>
                        </div>
                        <div class="text-center text-secondary-emphasis mb-5 px-3"> 
                            <span id="gameDesc">${finalApi[i].short_description.split(" ").splice(0,10).join(" ")}</span>
                        </div>
                        <div class=" game-smallnav position-absolute bottom-0 w-100 d-flex justify-content-between align-items-end p-2 mt-5 text-capitalize border-top border-1 border-dark">
                            <small id="gameGener" class="bg-dark px-1 rounded-2 ">${finalApi[i].genre}</small>
                            <small id="gamePlatform" class="bg-dark px-1 rounded-2 ">${finalApi[i].platform}</small>
                        </div>
                    </div>
            </div>`
        }
        document.getElementById("GameMainDiv").innerHTML = gameDiv;

        let game = $("#game")
        let det4 = new gameDetails(game)

        
    }
    

}

