import React, { Component } from "react";

class SearchOp extends Component{
    render(){
        return(
            <React.Fragment>
                {/* <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    {/* <link rel=”stylesheet” href=”https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity=”sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T” crossorigin=”anonymous”>
                    <title>Document</title>
                </head> */}
                <body>
                    <div class="container">
                        <div class="col-md-12">
                            <h1>Find Players</h1>
                            <h2>Enter the name of a Player</h2>
                            <form id="form">
                                <input class="form-control" id="user-input" placeholder="Enter player..." />
                                <button id="button" class="btn btn-secondary">Find NBA Players</button>
                            </form>
                            <table class="table" cellpadding="10">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Player</th>
                                        <th scope="col">Team ID</th>
                                        <th scope="col">Player ID</th> 
                                        <th scope="col">Season</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </body>
            </React.Fragment>
        );
    }
}

export default SearchOp;