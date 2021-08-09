var x = {
    fname : "Rahul",
    lname : "Dubey",
    age   : 25,
    // object under object 
    add   : {
      city : "Kushinagar",
      country : "India",
    },
    // funtion under object 
    fullname : function (){
        return this.fname + " " + this.lname
    },
    // arrays  under object
    favhero : ['Bhagat Singh','Chandrasekhar Ajad','Rajguru']
}


document.write("called by function" + " " + ">" + " " + x.fullname());
document.write("<br/>")
document.write(x.add.city);
document.write("<br/>")
document.write("called by arrays" + " " + ">" + " " + x.favhero);

