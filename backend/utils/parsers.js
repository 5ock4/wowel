class Parser {
  // Returns parsed data afrom XLSX
  static xlsx2map(data) {
    // Getting all words to one single list
    const words = Object.entries(data)
      .filter((x) => x[0] != "!ref") // Probably sth not needed
      .map((x) =>
        Object.entries(x[1])
          .filter((x) => x[0] == "v")
          .map((x) => x[1])
      )
      .filter((x) => x[0])
      .map(x => x[0])

    const chunkArray = (array, size) => {
      if(array.length <= size){
          return [array]
      }
      return [array.slice(0,size), ...chunkArray(array.slice(size), size)]
    }
   
    return chunkArray(words, 2)
  }
}

module.exports = Parser;
