import React, { Component } from "react";

class SearchOp extends Component{
    state = {
        game_details: [],
        games: [],
        players: [],
        ranking: [],
        teams: [],
    };

    render(){
        return(
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}

export default SearchOp;