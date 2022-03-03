<!DOCTYPE HTML>
<html>
   <head>
      <title>HTML5 Canvas Tag</title>
   </head>
   <style>
       #newCanvas {
    display: block;
    position: absolute;
    border:1px solid rgb(238, 241, 17);
    background-color: transparent;
  }
   </style>
   <body>
      <canvas id="newCanvas" width="300" height="250"></canvas>
      <script>
         var canvas = document.getElementById('newCanvas');
         var ctx = canvas.getContext('2d');
         ctx.fillStyle = "black";
         ctx.beginPath();
         ctx.moveTo(108, 0.0);
         ctx.lineTo(141, 70);
         ctx.lineTo(218, 78.3);
         ctx.lineTo(162, 131);
         ctx.lineTo(175, 205);
         ctx.lineTo(108, 170);
         ctx.lineTo(41.2, 205);
         ctx.lineTo(55, 131);
         ctx.lineTo(1, 78);
         ctx.lineTo(75, 68);
         ctx.lineTo(108, 0);
         ctx.closePath();
         ctx.fill();
      </script>
   </body>
</html>
