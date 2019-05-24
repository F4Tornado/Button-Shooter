function loadJSON() {
  var script = document.createElement("script");
  script.src = "palette.json";

  document.head.appendChild(script);
}

// Follow the example in the JSON file to create you own colors
loadJSON()

const P = {};

// To load the colors, call loadColors(ctx) where ctx is the canvas context
function loadColors(ctx) {
  for (let i = 0; i < data.length; i++) {
    P[data[i].name] = (ret) => {
      if (ret == "fill") {
        ctx.fillStyle = data[i].hex;
      } else if (ret == "stroke") {
        ctx.strokeStyle = data[i].hex;
      }
      return data[i].hex;
    };
  }
}

/*
To get a color, call P.colorName(ret)
If you want to return the hex value, set ret to anything you want. It will always return it.
If you want to set the fill to the color, set ret to "fill"
If you want to set the stroke to the color, set ret to "stroke"
*/
