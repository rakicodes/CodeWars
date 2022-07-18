const whosOnline = (friends) => {
    let status = {}
    
    for (let i=0; i<friends.length; i++) {
      if (friends[i].status==="online" && friends[i].lastActivity <= 10) {
        if (!status.online) {
          status.online = [];
        } 
        status.online.push(friends[i].username)
        
      } else if (friends[i].status==="online" && friends[i].lastActivity > 10) {
        if (!status.away) {
          status.away = [];
        }
        status.away.push(friends[i].username)
      } else if (friends[i].status==="offline") {
        if (!status.offline) {
          status.offline = [];
        }
        status.offline.push(friends[i].username)
      }
    }
    
    return status;
  }