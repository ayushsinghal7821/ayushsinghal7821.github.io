var names = new Array();
names[0] = "Ayush";
names[1] = "jayant";
names[2] = "Jayesh";
names[3] = "rahul";
names[4] = "rohit";
names[5] = "Mohit";
names[6] = "rohan";
names[7] = "Joker";
names[8] = "Jolly";
names[9] = "harsh";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}