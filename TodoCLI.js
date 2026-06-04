import readline from "readline";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const todos=[];

const showmenu = () => {
    console.log("\n 1: Add a task")
    console.log(" 2: View tasks")
    console.log(" 3: Exit ")

    rl.question("choose an option: ",handleInput)
}


const handleInput = (option) => {
    if(option === "1"){
  rl.question("Enter the Task: ", (task) => {
     todos.push(task);
     console.log(" Task added: ",task);
       showmenu();
  })
}
 else if(option === "2"){
 console.log("\n your Todo list")
 todos.forEach((task,index) => {
  console.log(`${index +1}.${task}`)
 })
 showmenu();
}
 else if(option === "3"){
 console.log("Good byee");
 rl.close();
}
else{
    console.log("Invalid Option , Try Again");
    showmenu();
}
}
showmenu();
