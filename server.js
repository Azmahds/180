//mongodb+srv://DataApp:<password>@cluster0.iie7y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/usersdb',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );

// const username = "DataApp";
// const password = "cs180";
// const cluster = "cluster0.iie7y";
// const dbname = "myFirstDatabase";

const username = "gabriellejohn1030";
const password = "ybbag1030";
const cluster = "cluster0.tigoj";
const dbname = "players";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

async function run(){
  try{
    const movies = db.collection("players");
    const query = {name: "Donovan Mitchell"};
    const movie = await movies.findOne(query);
    console.log(movie);
  }
  finally{
    await db.close();
  }

}

async function run2(){
  try{
    const movies = db.collection("players");
    const query = {name:  "Joe Ingles", season_num: 2019};
    const movie = await movies.findOne(query);
    console.log(movie);
  }
  finally{
    await db.close();
  }

}


// async function run3(){
//   try{
//     const movies =  db.collection("players");
//     const query2 = {team_id:  1610612747};
//     const movie2 = await movies.findOne(query2);
//     console.log(movie2);
//   }
//   finally{
//     await db.close();
//   }

// }



run().catch(console.dir);
run2().catch(console.dir);
//run3().catch(console.dir);




app.use(Router);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});






