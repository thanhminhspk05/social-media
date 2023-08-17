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
