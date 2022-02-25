function Win(i) {
    return i.result === "W";
}

const superbowlWin = arr => {
      const I = arr.find(Win);
      const i = I;
      if (I == undefined) {
          return undefined;
      } 
      else {return i.year;}
}