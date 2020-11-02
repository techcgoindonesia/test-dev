import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hey-ho';
  encryptedKey = "cmw_wvevolknvmg_SceC6erslYDmzmX4IiWd0qVjJjrJOvqUtIWmw1v3huwn6p8PDfXBXt15RIlTnXhK";
  decryptedKey = "";

  ngOnInit() { 
  }

  decryptXenditCode(s)  
{  
      debugger
    let new_string = "";  
  
    for(var i = 0; i < s.length; i++) 
    {  
      if (this.encryptedKey.charAt(i) == "a") {
        new_string = new_string + "z"
      } else if (this.encryptedKey.charAt(i) == "b") {
        new_string = new_string + "y"
      } else if (this.encryptedKey.charAt(i) == "c") {
        new_string = new_string + "x"
      } else if (this.encryptedKey.charAt(i) == "d") {
        new_string = new_string + "w"
      } else if (this.encryptedKey.charAt(i) == "e") {
        new_string = new_string + "v"
      } else if (this.encryptedKey.charAt(i) == "f") {
        new_string = new_string + "u"
      } else if (this.encryptedKey.charAt(i) == "g") {
        new_string = new_string + "t"
      } else if (this.encryptedKey.charAt(i) == "h") {
        new_string = new_string + "s"
      } else if (this.encryptedKey.charAt(i) == "i") {
        new_string = new_string + "r"
      } else if (this.encryptedKey.charAt(i) == "j") {
        new_string = new_string + "q"
      } else if (this.encryptedKey.charAt(i) == "k") {
        new_string = new_string + "p"
      } else if (this.encryptedKey.charAt(i) == "l") {
        new_string = new_string + "o"
      } else if (this.encryptedKey.charAt(i) == "m") {
        new_string = new_string + "n"
      } else if (this.encryptedKey.charAt(i) == "n") {
        new_string = new_string + "m"
      } else if (this.encryptedKey.charAt(i) == "o") {
        new_string = new_string + "l"
      } else if (this.encryptedKey.charAt(i) == "p") {
        new_string = new_string + "k"
      } else if (this.encryptedKey.charAt(i) == "q") {
        new_string = new_string + "j"
      } else if (this.encryptedKey.charAt(i) == "r") {
        new_string = new_string + "i"
      } else if (this.encryptedKey.charAt(i) == "s") {
        new_string = new_string + "h"
      } else if (this.encryptedKey.charAt(i) == "t") {
        new_string = new_string + "g"
      } else if (this.encryptedKey.charAt(i) == "u") {
        new_string = new_string + "f"
      } else if (this.encryptedKey.charAt(i) == "v") {
        new_string = new_string + "e"
      } else if (this.encryptedKey.charAt(i) == "w") {
        new_string = new_string + "d"
      } else if (this.encryptedKey.charAt(i) == "x") {
        new_string = new_string + "c"
      } else if (this.encryptedKey.charAt(i) == "y") {
        new_string = new_string + "b"
      } else if (this.encryptedKey.charAt(i) == "z") {
        new_string = new_string + "a"
      } else if (this.encryptedKey.charAt(i) == "A") {
        new_string = new_string + "Z"
      } else if (this.encryptedKey.charAt(i) == "B") {
        new_string = new_string + "Y"
      } else if (this.encryptedKey.charAt(i) == "C") {
        new_string = new_string + "X"
      } else if (this.encryptedKey.charAt(i) == "D") {
        new_string = new_string + "W"
      } else if (this.encryptedKey.charAt(i) == "E") {
        new_string = new_string + "V"
      } else if (this.encryptedKey.charAt(i) == "F") {
        new_string = new_string + "U"
      } else if (this.encryptedKey.charAt(i) == "G") {
        new_string = new_string + "T"
      } else if (this.encryptedKey.charAt(i) == "H") {
        new_string = new_string + "S"
      } else if (this.encryptedKey.charAt(i) == "I") {
        new_string = new_string + "R"
      } else if (this.encryptedKey.charAt(i) == "J") {
        new_string = new_string + "Q"
      } else if (this.encryptedKey.charAt(i) == "K") {
        new_string = new_string + "P"
      } else if (this.encryptedKey.charAt(i) == "L") {
        new_string = new_string + "O"
      } else if (this.encryptedKey.charAt(i) == "M") {
        new_string = new_string + "N"
      } else if (this.encryptedKey.charAt(i) == "N") {
        new_string = new_string + "M"
      } else if (this.encryptedKey.charAt(i) == "O") {
        new_string = new_string + "L"
      } else if (this.encryptedKey.charAt(i) == "P") {
        new_string = new_string + "K"
      } else if (this.encryptedKey.charAt(i) == "Q") {
        new_string = new_string + "J"
      } else if (this.encryptedKey.charAt(i) == "R") {
        new_string = new_string + "I"
      } else if (this.encryptedKey.charAt(i) == "S") {
        new_string = new_string + "H"
      } else if (this.encryptedKey.charAt(i) == "T") {
        new_string = new_string + "G"
      } else if (this.encryptedKey.charAt(i) == "U") {
        new_string = new_string + "F"
      } else if (this.encryptedKey.charAt(i) == "V") {
        new_string = new_string + "E"
      } else if (this.encryptedKey.charAt(i) == "W") {
        new_string = new_string + "D"
      } else if (this.encryptedKey.charAt(i) == "X") {
        new_string = new_string + "C"
      } else if (this.encryptedKey.charAt(i) == "Y") {
        new_string = new_string + "B"
      } else if (this.encryptedKey.charAt(i) == "Z") {
        new_string = new_string + "A"
      } else {
        new_string = new_string + this.encryptedKey.charAt(i)
      }
    }  
    return new_string;  
}  
}