function bf(str, input){

var array = str.split("");
var memory = [0];
var pointer = 0;
var result = [];
var i = 0;

while(i < array.length){

  if(array[i] == ">"){
  	pointer++;
  	if(memory.length-1 < pointer){
  	  memory.push(0);
  	}

  }else if(array[i] == "<"){
  	if(pointer > 0){
  	  pointer--;
  	}else{
  	  throw "Overflow Error at " + i;
  	}
  }else if(array[i] == "+"){
    if(memory[pointer] < 255){
      memory[pointer]++;
    }else{
      memory[pointer] = 0;
    }
  }else if(array[i] == "-"){
    if(memory[pointer] > 0){
      memory[pointer]--;
    }else{
      memory[pointer] = 255;
    }
  }else if(array[i] == "."){
    result.push(String.fromCharCode(memory[pointer]));
  }else if(array[i] == ","){
    memory[pointer] = input.shift().charCodeAt(0);
  }else if(array[i] == "["){
    if(memory[pointer] == 0){
      var open = 0;
      i += 1;
      while(i < array.length){
        if(array[i] == "]" && open == 0){
          break;
        }else if(array[i] == "["){
          open += 1; 
        }else if(array[i] == "]"){
          open -= 1; 
        }
        i += 1;
      }
    }
  }else if(array[i] == "]"){
    if(memory[pointer] > 0){
      var close = 0;
      i -= 1;
      while(i >= 0){
        if(array[i] == "[" && close == 0){
          break;
        }else if(array[i] == "]"){
          close += 1; 
        }else if(array[i] == "["){
          close -= 1;
        }
        i -= 1;
      }
    }
  }
  i+=1;
}
return result;
}
