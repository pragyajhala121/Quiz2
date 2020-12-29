function addUser() {
    player_1 = document.getElementById("player1_name_input");
    player_2 = document.getElementById("player2_name_input");

    localStorage.setItem("player_1", player_1);
    localStorage.setItem("player_2", player_2);

    window.location.replace("game.html");
}