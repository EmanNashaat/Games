
export class gameDetails{
    constructor(game){
        this.gameHold = game
        $(".row").click((e)=>{
            this.fetchGame(e.target.id);
        })
    }
    async fetchGame(detailApi){
        this.spin = document.querySelector("#spinner")
        this.spin.classList.remove("d-none");
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '73fa706c74mshf212196819c32f4p153e45jsne923dcd35a24',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let fetchDetails = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${detailApi}`, options)
        let finalFetchDetails = await fetchDetails.json();
        // console.log(finalFetchDetails);
        document.querySelector("#game-info").classList.remove("d-none");
        document.querySelector("#mainDiv").classList.add("d-none")
        this.detailsGame(finalFetchDetails);
        this.spin.classList.add("d-none");
    }

    detailsGame(finalFetchDetails){
            let GameDetailsDiv = document.querySelector("#detailsOfGame");
            GameDetailsDiv.innerHTML = ` 
        <div class="d-flex justify-content-between py-2 ">
            <h2>Details Game</h2>
            <i class="fa-regular fa-circle-xmark fa-2x text-secondary" id="closeIcon"></i>
        </div>
        <div class="row py-4 w-100">
            <div class="col-lg-4">
                <img src="${finalFetchDetails.thumbnail}" alt="" id="gameImg">
            </div>
            <div class="col-lg-8 px-4">
                <h3 class="py-1">Title : <span id="gameTitleSpan"> ${finalFetchDetails.title} </span> </h3>
                <h6 class="py-1">Category : <small id="gameCategorySpan"> ${finalFetchDetails.genre}  </small> </h6>
                <h6 class="py-1">Platform : <small id="gamePlatformSpan"> ${finalFetchDetails.platform} </small> </h6>
                <h6 class="py-1">Status : <small id="gameStatusSpan"> ${finalFetchDetails.status} </small> </h6>
                <p class="py-1" id="gameDescSpan">
                    ${finalFetchDetails.description}
                </p>
                <button class="border border-1 border-warning px-3 py-2 bg-transparent rounded-2 text-white fw-bolder game-btn">
                    <a href="${finalFetchDetails.game_url}" class="text-decoration-none text-white" id="gameLink">
                        Show Game
                    </a> 
                </button>
            </div>
        </div>
        `

        $("#closeIcon").click(()=>{
            document.querySelector("#game-info").classList.add("d-none");
            document.querySelector("#mainDiv").classList.remove("d-none")

        })
    }
}