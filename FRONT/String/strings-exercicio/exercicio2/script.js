const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


console.log(minhaString.trim())

//quantidade caracters com os espacos
console.log(minhaString.length)
//quantidade caracters sem os espacos
console.log(minhaString.trim().length)

console.log(minhaString.replaceAll("________", "sticioso"))