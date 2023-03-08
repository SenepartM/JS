<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Exemple de boutons pour appeler des fonctions</title>
  </head>
  <style>
      body {
        background-color: #F0F0F0;
        font-family: Arial, sans-serif;
      }

      .lesdivs {
        padding: 10px;
        margin-bottom: 10px;
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        border-radius: 5px;
      }

      button {
        background-color: #4CAF50;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        margin-right: 10px;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover {
        background-color: #3E8E41;
      }
    </style>
  <body>
    <div class="lesdivs"name="lesdivs">Div 1</div>
    <div class="lesdivs"name="lesdivs">Div 2</div>
    <div class="lesdivs"name="lesdivs">Div 3</div>
    <br> 
    <button onclick="modifierDivsName()">Modifier avec Name</button>
    <button onclick="modifierDivsTag()">Modifier avec TagName</button>
    <button onclick="modifierDivsClass()">Modifier avec ClassName</button>

    <script src='js9.js'>
    </script>
  </body>
</html>
