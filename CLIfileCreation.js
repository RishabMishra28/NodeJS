import readline from "readline";
import fs from "fs";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const fileCreation = () => {
rl.question("Enter the name of the file ",(filename) => {
 rl.question("Enter the data ",(content)=> {
    fs.writeFile(`${filename}.txt`,content,(err) => {
        if(err){
            console.error(`Error writing the file,: ${err.message}`);
        }
        else {
            console.log(`File ${filename}.txt created successfully! `)
        }
        rl.close();
})
 })
})
}

fileCreation();