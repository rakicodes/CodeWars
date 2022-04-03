function meeting(x){
    let index = x.findIndex(room => room==='O')
    return index === -1 ? 'None available!' : index;
  }