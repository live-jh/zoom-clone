const xSize = 20;
const ySize = 20;
const R = 7;
let print = "";
for(let x = 0; x < xSize; x ++) {
    for(let y = 0; y < ySize;y ++) {
        if(Math.sqrt(Math.pow(x - xSize / 2, 2) + Math.pow(y - ySize / 2, 2)) <= R)
            print += "**";
        else
            print += "  ";
    }
    print += "\n";
}
print += "            Zoom Clone Project"

console.log(print);