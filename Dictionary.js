  let dictionary = [" "];

  function add() {
    let addWord = document.getElementById("add").value;
    dictionary.push(addWord);
    alert("The word \"" + addWord + "\" was added to the dictionary!");
    }

  function search() {
    let searchWord = document.getElementById("search").value;
    let exists = 0;
      for (let i = 0; i < dictionary.length; ++i){
        if (searchWord.match(dictionary[i])){
          exists = 1;        
        } 
      }
    
      if (exists == 1) {
        alert("The word \"" + searchWord + "\" already exists in the dictionary!");
    } else {
        alert("The word \"" + searchWord + "\" does not exist in the dictionary!");
    }
    return false;
  }
