//Write a function that makes a box the length of given num

function makeBox(num) {
    const box = [];
    
    //loop within loop for square, with a length of num:
    for (let i = 0; i < num; i++) {
        const row = [];
        for (let j = 0; j < num; j++) {
            //push '#' for the four edges:
            if ([i, j, i+1 - num, j+1 - num].includes(0)) 
            row.push("#");

            //else push a blank (' '):
            else 
            row.push(" ");
        }

        box.push(row);
    }
    
    return box;
}    

/* Example - makeBox(4) :

    # # # #
    #     #
    #     #
    # # # #
*/
