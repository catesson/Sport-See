

/**
 * represent the activity of the day
 * @class
 */
class activity {
  /**
   * @constructor 
   * @param {string} date date at format aaaa-mm-dd
   * @param {number} kilogram 
   * @param {number} calories 
   */
  constructor(date, kilogram, calories) {
    
    /* the date is convert to the object Date */
     
    const dateParts = date.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; 
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