var names_of_people = [];
var names_of_food = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	// use the push function as - names_of_people.push(GuestName);
	names_of_people.push(GuestName);
	console.log(GuestName);    
    console.log(names_of_people);
    var length_of_name = names_of_people.length;
    console.log(length_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
   }

   function submitfood()
{
    var FoodName = document.getElementById("foodname1").value;
	// use the push function as - names_of_people.push(GuestName);
	names_of_food.push(FoodName);
	console.log(FoodName);    
    console.log(names_of_food);
    var length_of_food = names_of_food.length;
    console.log(length_of_food);
	document.getElementById("display_namefood").innerHTML=names_of_food.toString();
   }



function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	
}

function showfood()
{
	var i= names_of_food.join("<br>");
	console.log(names_of_food);
	document.getElementById("p3").innerHTML=i.toString();
	
}


function sorting()
	{
		names_of_people.sort();       // add the sort function here
		// .sort();
		var i= names_of_people.join("<br>");
		console.log(names_of_people);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML=s1.value+" was found "+found+" time(s)";
	console.log(s1.value+" was found "+found+" time(s)");
}

function searchingfood()
{
	var e= document.getElementById("s2").value;
	var found2=0;
	var x;
	for(x=0; x<names_of_food.length; x++)
		{
			if(e==names_of_food[x]){
				found2=found2+1;
			}	
		}
	document.getElementById("p4").innerHTML=s2.value+" was found "+found2+" time(s)";
	console.log(s2.value+" was found "+found2+" time(s)");
}