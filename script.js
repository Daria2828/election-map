var makePol = function(polName, RGB) {

	var candidate = {};
	candidate.name = polName;
	candidate.electionResults = null;
	candidate.totalVotes = 0;
	candidate.partyColor = RGB;

	candidate.totalResults = function() {
	this.totalVotes = 0;

	for (var i = 0; i < this.electionResults.length; i++)
		{
			this.totalVotes = this.totalVotes + this.electionResults[i];
		}
	};
	
	return candidate;
};

var candidate1 = makePol("Uncle Jay", [223,159,189]);
var candidate2 = makePol("Auntie Liz", [141,125,212]);

candidate1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11,
0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1,
3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

candidate2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0,
6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6,
1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

candidate1.electionResults[9]=1;
candidate2.electionResults[9]=28;

candidate1.electionResults[4]=17;
candidate2.electionResults[4]=38;

candidate1.electionResults[43]=11;
candidate2.electionResults[43]=27;

var	setStateResults = function(state)
{
	theStates[state].winner = null;

	if (candidate1.electionResults[state] > candidate2.electionResults[state]) 
	{
		theStates[state].winner = candidate1;
	}

	else if (candidate2.electionResults[state] > candidate1.electionResults[state]) 
	{
		theStates[state].winner = candidate2;
	}

	var stateWinner = theStates[state].winner;

	if (stateWinner !== null)
	{
		theStates[state].rgbColor = stateWinner.partyColor;
	}

	else theStates[state].rgbColor = [242,233,105];

	var stateTable = document.getElementById("stateResults");
	var header = stateTable.children[0].children[0];

		var stateName = header.children[0];
		stateName.innerText = theStates[state].nameFull;

		var stateAbbrev = header.children[1];
		stateAbbrev.innerText = "(" + theStates[state].nameAbbrev +")";

	var tbody = stateTable.children[1];

		var name1 = tbody.children[0].children[0];
		name1.innerText = candidate1.name;

		var stateResults1 = tbody.children[0].children[1];
		stateResults1.innerText = candidate1.electionResults[state];

		var name2 = tbody.children[1].children[0];
		name2.innerText = candidate2.name;

		var stateResults2 = tbody.children[1].children[1];
		stateResults2.innerText = candidate2.electionResults[state];

		var winnerState = tbody.children[2].children[1]
		if (theStates[state].winner === null)
		{
			winnerState.innerText = "TIE";
		}
		else 
		{
			winnerState.innerText = stateWinner.name;
		}
};

candidate1.totalResults();
console.log(candidate1.totalVotes);

candidate2.totalResults();
console.log(candidate2.totalVotes);

var winner = "???";
	if (candidate1.totalVotes > candidate2.totalVotes)
	{
		winner = candidate1.name;
	}
	else if (candidate2.totalVotes > candidate1.totalVotes)
	{
		winner = candidate2.name;
	}
	else
	{
		winner = "tie";
	}

console.log(winner);

var countryTable = document.getElementById("countryResults");
var row = countryTable.children[0].children[0];

row.children[0].innerText = candidate1.name;
row.children[1].innerText = candidate1.totalVotes;
row.children[2].innerText = candidate2.name;
row.children[3].innerText = candidate2.totalVotes;
row.children[5].innerText = winner+"!!!";