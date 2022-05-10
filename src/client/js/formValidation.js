function validateInput(city, startDate, endDate) {
  let currentDate = new Date().getTime();

  // checking destination is provided
  if (city == "") {
      alert('Please enter a valid destination');
      return false;
  }
  // checking departure and return dates are not empty
  if (startDate == "" || endDate == "") {
      alert('Please select valid departure and return dates');
      return false;
  }
  // checking departure and return dates are set past current date
  if (Date.parse(startDate) < currentDate || Date.parse(endDate) <= currentDate) {
      alert('Please ensure your departure and return date are set after the current date ');
      return false;
  }
  // checking return date is not prior departure date
  if (startDate >= endDate) {
      alert('Please ensure your return date is set after your departure date');
      return false;
  }
  return true;
}

export { validateInput };