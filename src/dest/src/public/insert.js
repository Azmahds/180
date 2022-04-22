function insert() {
    myJson = {
      player: $("#datatable").find("#player").val(),
      team_id: $("#datatable").find("#team_id").val(),
      player_id: $("#datatable").find("#player_id").val(),
      season: $("#datatable").find("#season").val(),
    };
    
    console.log("myJson", myJson);
  }

