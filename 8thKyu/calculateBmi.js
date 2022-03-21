function bmi(weight, height) {
    let userBmi = weight / (height**2);
    
    if (userBmi <= 18.5) {
      return "Underweight";
    } else if (userBmi <= 25) {
      return "Normal";
    } else if (userBmi <= 30) {
      return "Overweight";
    } else if (userBmi > 30) {
      return "Obese";
    } else {
      return "Invalid";
    }
  }