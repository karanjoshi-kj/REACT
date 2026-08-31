// !  LEXCIAL SCOPE IN JS MEANS THAT THE SCOPE OF A VARIABLE IS DETERMINED BY WHERE THEY ARE WRITTEN IN THE SOURCE CODE , NOT WHERE THEY ARE CALLED OR EXECUTED .

let country = "INDIA";

function outer(){
    let state = "UTTARAKHAND";

    function inner(){
        let city = "RANIKHET";

        console.log(country);   //? INDIA
        console.log(state);     //? UTTARAKHAND
        console.log(city);      //? RANIKHET 
    }
inner();
}
outer();