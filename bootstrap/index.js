function accum(s){
    counter = 0;
    for(let i=0; i<s.length; i++){
        counter +=1;
        return s[i].toUppercase() + s[i].repeat(counter) + "-";
        
    }
}
accum(abcd)