
var person = {
    firstName: 'Chandrashekhar',
    lastName: 'Dhamgunde',
    age: 22,
    daughter:{
        name:'Mohini',
        age:25
    },
    myfunc:function(daughterName,fatherName,daughterAge) {
        console.log(par.daughterName + 'is a daughter of' + fatherName + 'and she is' 
        + par.daughterAge + 'years old' )
    }
};
console.log(person);
console.log(person.daughter.Name);
 
person.myfunc(person.daughter.name,person.firstName,person.daughter.age);