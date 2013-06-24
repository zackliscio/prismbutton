	
	// SHOW POP-OVER
	function showPopOver(divID) {
	// SET THE DIV POSITION
		if (document.getElementById(divID).style.display == "none") {
		// SHOW THE DIV
		document.getElementById(divID).style.display = "block";
		}
		else {
			document.getElementById(divID).style.display = "none";
		}
	}

	// CLOSE POP-OVER
	function closePopOver(divID) {
	// HIDE THE DIV
		document.getElementById(divID).style.display = "none";
	}

	var prism = document.createElement("div");
	prism.setAttribute("id", "prismbutton");
	prism.innerHTML = "<a href=javascript:showPopOver('prismpop');><img src='http://prismbutton.s3-website-us-east-1.amazonaws.com/prismbutton.png'></a>";
	

	var prismpop = document.createElement("div");
	prismpop.setAttribute("id", "prismpop");
	prismpop.style.display = "none";
	prismpop.innerHTML = "The Share on Prism Button is meant to serve as a reminder of the importance of online privacy. Countless groups dedicate their time to fighting for internet users' rights, and it is our responsibility to keep the internet open. Add the icon to your site with one line of code at <a href='http://www.prismbutton.com'>www.prismbutton.com</a> <br><br><a href=javascript:closePopOver('prismpop');><span id='close'>X</span></a>";

	document.body.appendChild(prism); 
	document.body.appendChild(prismpop); 

	var $ = document; // shortcut
	var cssId = 'prismbutton.css';  
	if (!$.getElementById(cssId))
	{
     var head  = $.getElementsByTagName('head')[0];
   	 var link  = $.createElement('link');
  	 link.id   = cssId;
  	 link.rel  = 'stylesheet';
     link.type = 'text/css';
     link.href = 'http://prismbutton.s3-website-us-east-1.amazonaws.com/prismbutton.css';
   	 link.media = 'all';
   	 head.appendChild(link);
	}