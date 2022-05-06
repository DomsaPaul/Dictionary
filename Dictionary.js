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
