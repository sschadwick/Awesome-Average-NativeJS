var information = [{
	name: 'Bob',
	occupation: 'programmer',
	awesomeIndex: 7,
},
{	name: 'Alice',
	occupation: 'programmer',
	awesomeIndex: 9,
},
{	name: 'Zaphod',
	occupation: 'President of the Galaxy'
}];

var programmers = 0;
var awesomeTotal = 0;
var awesomeAverage = 0;

for (var i=0; i<information.length; i++){
	if (information[i].occupation === 'programmer'){
		    awesomeTotal += information[i].awesomeIndex;
		    programmers++;
	}
	awesomeAverage = awesomeTotal / programmers;
}
document.getElementById("awesome-index").value = awesomeAverage;