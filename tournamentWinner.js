const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results = [0, 0, 1];

function tournamentWinner(competitions, results) {
  let ptsObj = {};
  let winnerTeam;
  results.forEach((e, i) => {
    let wonTeam;
    if (e === 0) {
      wonTeam = competitions[i][1];
    } else if (e === 1) {
      wonTeam = competitions[i][0];
    }
    if (wonTeam in ptsObj) {
      ptsObj[wonTeam] += 3;
    } else {
      ptsObj[wonTeam] = 3;
    }
  });
  let score = 0;
  for (const [key, value] of Object.entries(ptsObj)) {
    if (score < value) {
      score = value;
      winnerTeam = key;
    }
  }
  return winnerTeam;
}

const res = tournamentWinner(competitions, results);
console.log("res: ", res);
