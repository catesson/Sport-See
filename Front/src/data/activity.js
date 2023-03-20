class activity {
  constructor(date, kilogram, calories) {
    const dateParts = date.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // les mois dans Date vont de 0 à 11
    const day = parseInt(dateParts[2]);
    const finalDate = new Date(year, month, day);
    this.date = finalDate;
    this.kilogram = kilogram;
    this.calories = calories;
  }

  getDate() {
    return this.date;
  }
  getKilogram() {
    return this.kilogram;
  }
  getCalorie() {
    return this.calories;
  }
}
export {activity}