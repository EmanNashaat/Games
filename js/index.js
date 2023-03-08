import { displayGames } from "./ui.js";
let game = new displayGames()


$(".nav-link").click((e)=>{
    $(".nav-link").css("color","white");
    $(e.target).css("color" , "rgb(13, 134, 185)");

})


