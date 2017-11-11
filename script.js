
	var notedisplay = document.getElementById('notedisplay');
	if(localStorage.getItem('notes'))
	{
		var noteArray = JSON.parse(localStorage.getItem('notes'));
		for(i=0;i<=noteArray.length;i++)
		{
			notedisplay.innerHTML +="<h1>Title:" +noteArray[i].title +"</h1> <p>Note:" +noteArray[i].note +"</p>";

		}
	}
	else
	{
		var noteArray=[]
	}

	function saveNote(event)
	{    event.preventDefault();
		//  var form = document.getElementById('form1');
		//  var formDataArray = form.elements;
		//  console.log(formDataArray);
		//  for(var i=0;i<formDataArray.length;i++)
		//  {
		//  	console.log(formDataArray[i].value);
		//  }
		// console.log(event);

		var title = document.getElementById('title');
		var note = document.getElementById('note');
		noteArray.push({title:title.value,note:note.value})
		console.log(noteArray);
		localStorage.setItem("notes",JSON.stringify(noteArray))
		    	notedisplay.innerHTML +="<h1>Title:" +title.value +"</h1> <p>Note:" +note.value +"</p>";
	}
