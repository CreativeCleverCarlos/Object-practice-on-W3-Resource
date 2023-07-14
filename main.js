
 
/**Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
*/
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
//Sample Output: name,sclass,rollno

//key is on the left side
//value is on the right 
//REMEMBER

 

Object.keys(student).forEach((prop) => console.log(prop)) //returns in individual lines

console.log(Object.keys(student)); //returns but in an array

Object.entries(student).forEach((valuePairs) => console.log(valuePairs)); //returns both the key and value pairs on seperate lines in the console.log in an array

/**
 Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
**/

var student2 = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

delete student2['rollno'] //this deletes an property or key value pair from the object student2.

console.log(student2)


/**
 Write a JavaScript program to get the length of a JavaScript object.
Sample object :
**/

var student3 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

let lengthOfStudent3 = Object.keys(student3).length //the .length property shows the length of the object


console.log("the object length of student number 3 is" +" " + lengthOfStudent3)



//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];

    for (let i = 0; i < library.length; i++){
        let book = "'" + library[i].title + "'" + " " + "by" + " " +  library[i].author + ".";
        if (library[i].readingStatus){
            console.log("You've already read " + book);
        } else {
            console.log("You still need to read " + book)
        }
    }

/**
 Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
 Volume of a cylinder : V = πr2h
 where r is the radius and h is the height of the cylinder.

**/

function VolumeOfACylinder(radius, height){
        this.radius = radius;
        this.pie = 3.1415;
        this.radiusSquare = function(){
            return this.radius ** 2};
        this.height = height;
        this.total = function(){ // how do I get the radiusSquare to run first so that the total can run
            return this.pie * this.radiusSquare * this.height
        }
    } 
    

let newVolume = new VolumeOfACylinder(7, 5)
console.log(newVolume.total())

/**
 
 function CreateNewConstructorCircle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
**/