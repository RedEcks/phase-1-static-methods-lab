class Formatter {
  //add static methods here
  static capitalize(myWord){

    return myWord[0].toUpperCase()+myWord.slice(1)

  }

  static sanitize(word){
    let replaced=word.replace(/[^- ,'A-Za-z0-9]+/g, '')
    return replaced
  }

  static titleize(sentence){
    let exceptions=['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = sentence.split(" ")
    let capitalizeWords=[]
    for(let i=0;i<words.length;i++){
      if(!exceptions.includes(words[i]) || i == 0){
      let word= words[i][0].toUpperCase() + words[i].slice(1)
      capitalizeWords.push(word)
      }else{
        capitalizeWords.push(words[i])
      }
    }
    //This below is another way to capitalize the first word but it's less
    //efficient 
    //capitalizeWords[0] = capitalizeWords[0][0].toUpperCase() + capitalizeWords[0].slice(1)
    return capitalizeWords.join(" ")

    //'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', and 'from'
  }

}
