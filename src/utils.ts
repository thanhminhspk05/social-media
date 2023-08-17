const firstNames = ["John", "Jane", "Mary", "Peter", "David", "Michael", "William", "Elizabeth", "Jennifer", "Jessica"];
const lastNames = ["Doe", "Smith", "Williams", "Brown", "Jones", "Miller", "Wilson", "Taylor", "Jackson", "White"];


export const generateInfo = (number: number) => {
    const randomNames = [];
    for (let i = 0; i < number; i++) {
      const firstNameIndex = Math.floor(Math.random() * firstNames.length);
      const lastNameIndex = Math.floor(Math.random() * lastNames.length);
      const randomName = `${firstNames[firstNameIndex]} ${lastNames[lastNameIndex]}`;
      
      randomNames.push(randomName);
    }
    return randomNames
}

export const generateMassage = (number: number) => {
  const randomMassage = [];
  const massages = ["Hi [name], welcome!", "How are you, [name]?", "Nice to meet you, [name]!", "I hope you're having a great day, [name]!","Why did the scarecrow win an award? Because he was outstanding in his field!", "What do you call a fish with no eyes? Fsh!", "Why did the bicycle fall over? Because it was two tired!"];

  for (let i = 0; i < number; i++) {
    const randomIndex = Math.floor(Math.random() * massages.length);
    randomMassage.push(massages[randomIndex]);
  }
  return randomMassage
}
