function bf(str, input){

var array = str.split("");
var memory = [0];
var pointer = 0;
var result = [];
var open = [];

for(var i = 0; i < array.length; i++){

  if(array[i] == ">"){
  	pointer++;
  	if(memory.length-1 < pointer){
  	  memory.push(0);
  	}

  }else if(array[i] == "<"){
  	if(pointer > 0){
  	  pointer--;
  	}else{
  	  throw "Overflow Error at " + i
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
    if(open.length){
      if(open[open.length-1] != i){
        open.push(i);
      }
    }else{
      open.push(i);
    }
  }else if(array[i] == "]"){
    if(open.length){
      if(memory[pointer]){
        i = open[open.length - 1];
      }else{
        open.pop();
      }
    }
  }
}
return result;
}
