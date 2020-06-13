// Zeyad Ajamy, All rights reserved 2020

var getRGB;
(
	getRGB = function(value){
    if(value.length == "7"){
      if(value[0] == "#"){
        let r_convert = parseInt(value[1] + value[2], 16)
        let g_convert = parseInt(value[3] + value[4], 16)
        let b_convert = parseInt(value[5] + value[6], 16)
        if(isNaN(r_convert) || isNaN(g_convert) || isNaN(b_convert)){
          console.log("Make sure that your color code is in Hexdecimal.")
        } else{
          console.log(`Your Color is: rgb(${r_convert}, ${g_convert}, ${b_convert})`)
          }
      } else{
        console.log("You Must start your Color code With #.")
      }
    } else{
      console.log("Make Sure That Your Input lenght is 7, and You start the color with #.")
    }
  }
)()