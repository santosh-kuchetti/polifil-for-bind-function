// Polifil for bind function

let name = {
    firstname: 'santosh',
    lastname:'kuchetti'
}

let printname = function(hometown,state) {
    console.log(this.firstname+' '+this.lastname + ' '+ hometown+' '+ state)
}

let printmyname = printname.bind(name, 'Santhabommali');
printmyname('Andra Pradesh'); 

Function.prototype.mybind = function (...args) {   //  to get 'name' into here, we extracted from args, from args we will get an array of arguments passed and we can get 'name' by args[0]

    let obj = this;   //  when we call mybind over printname method,  inside mybind this variable points to printname

    params = args.slice(1);  // we are getting the extra params passed in the mybind function from args, args[0] is name and splice(1) gives remaining elements but in form array

    return function(...args2) {   // when we call printname.mybind, it should also return a function
                            //  if we call printname2 then printname sh ould executes, we can get print name here by 'this'  keyword, the reason is in above comment
        
        obj.apply(args[0], [...params, ...args2]);  
                                                            /* 
                                                                we have to call this with reference to 'name' variable  and  we can't use call method here beacuase call method can't have array as the second argument but apply method can have so, we use apply method

                                                                we got the parameters that is passed by 'printmyname2'  and to get that into the object.apply, we have to concate the params array and args2 array. So, we spread both arrays so that we can get large array
                                                            */
        
    }
}


let printmyname2 = printname.mybind(name, 'Santhabommali');
printmyname2('Andra Pradesh');  // thesse arguments ahich are passing here are recieved by 'return function()' in the mybind function