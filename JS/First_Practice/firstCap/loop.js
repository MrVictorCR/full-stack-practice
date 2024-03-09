// Loops

/* Definitions = 
        for in = Provides the position of something 
        for of = Provides the value of something
*/

// At the end we've learned what it is LABELS, Labels is like to provide a name to a specific object or loop. For example

vicLoop:
for (let i = 0; i<6; i++){
    for (let i = 0; i<5; i++){
        if (i == 4){
            continue vicLoop;
        }
    }
}

// So, that continue instead of just working for the fisrt for is going to be for all the loop, 'cuase the label let us do it in that way
