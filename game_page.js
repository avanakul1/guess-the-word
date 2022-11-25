player1_name = localStorage.getItem("player1 name");
player2_name = localStorage.getItem("player2 name");
player1_score = 0;
player2_score = 0;
question_turn = "player1";
answer_turn = "player2";
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score + ":";
document.getElementById("player2_score").innerHTML = player2_score + ":";

document.getElementById("player_question").innerHTML =
  "Question turn:" + player1_name;
document.getElementById("player_answer").innerHTML =
  "Answer turn:" + player2_name;

function send() {
  input_word = document.getElementById("word").value;
  input_word = input_word.toLowerCase(); //we are converting the imput word into lowercase
  console.log(input_word);

  charAt1 = input_word.charAt(1);
  mid = Math.floor(input_word.length / 2);
  charAtMid = input_word.charAt(mid);
  last = input_word.length - 1;
  charAtLast = input_word.charAt(last);
  console.log(charAt1, charAtMid, charAtLast);
  remove_charAt1 = input_word.replace(charAt1, "_");
  remove_charAtMid = remove_charAt1.replace(charAtMid, "_");
  remove_charAtLast = remove_charAtMid.replace(charAtLast, "_");
  console.log(remove_charAtLast);
  question_word = "<h4 id='word_display'> Q. " + remove_charAtLast + "</h4>";
  input_box = "<br>Answer : <input type='text' id='input_check_box'>";
  check_button =
    "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
  row = question_word + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("word").value = "";
}

function check() {
  get_answer = document.getElementById("input_check_box").value;
  answer = get_answer.toLowerCase();
  console.log("answer in lower case - " + answer);
  if (answer == input_word) {
    if (answer_turn == "player1") {
      player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score;
    } else {
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score;
    }
  }
  if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML =
      "Question Turn - " + player2_name;
  } else {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML =
      "Question Turn - " + player1_name;
  }
  if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML =
      "Answer Turn - " + player2_name;
  } else {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML =
      "Answer Turn - " + player1_name;
  }
  document.getElementById("output").innerHTML = "";
}
