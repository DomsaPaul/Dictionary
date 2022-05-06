<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Dictionary</title>
  </head>
  <body>
    <div class="container">
          <div class="card">
        <div class="card-body">
        <style> h1{text-align: center;}</style>
        <h1>DICTIONARY</h1>
    </div>
  </div>
</div>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <input type="text" placeholder="Enter the word" id="Add">
          <button type="button" class="btn btn-success" onclick="return Add();">Add</button>
      </div>
    </div>
  </div>
    <div class="container">
      <div class="card">
        <div class="card-body">
          <input type="text" placeholder="Enter the word" id="Search">
          <button type="button" class="btn btn-primary" onclick="return Search();">Search</button>
        </div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script>
var Dictionary = [" "];
  function Add(){
    var AddWord = document.getElementById("Add").value;
    Dictionary.push(AddWord);
    alert("The word \"" + AddWord + "\" was added to the dictionary!");
}
  function Search() {
    var SearchWord = document.getElementById("Search").value;
    var exists = 0;
      for (var i = 0; i < Dictionary.length; ++i){
        if (SearchWord.match(Dictionary[i])){
          exists = 1;        
        } 
      }
        if (exists == 1) {
          alert("The word \"" + SearchWord + "\" already exists in the dictionary!");
      }else{
          alert("The word \"" + SearchWord + "\" does not exist in the dictionary!");
      }
      return false;
  }
    </script>
  </body>
</html>
