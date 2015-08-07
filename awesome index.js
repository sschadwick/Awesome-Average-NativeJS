var information = [
{
name: 'Trinity',
occupation: 'programmer',
awesomeIndex: 10
},
{
name: 'Mater',
occupation: 'tow truck'
},
{
name: 'Number 5',
occupation: 'programmer',
awesomeIndex: 7
},
{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy'
},
{
name: 'Bob Parr',
occupation: 'programmer',
awesomeIndex: 6
} ];

var programmers = 0;
var awesomeTotal = 0;
var awesomeAverage = 0;

//find the sum and number of people with awesomeIndex
for (var i=0; i<information.length; i++){
	if (information[i].occupation === 'programmer'){
		    awesomeTotal += information[i].awesomeIndex;
		    programmers++;
	}
	awesomeAverage = awesomeTotal / programmers; //find average awesomeIndex
}

document.getElementById('awesome-index').innerHTML =  awesomeAverage;
