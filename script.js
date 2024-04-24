function getValue() {
  const userInput = document.getElementById("userInput").value;
  
  const maxProfit = getMaxProfit(userInput);
  const solution = maxProfit.solution;
  alert(`Solution: ${JSON.stringify(solution)},  Earnings: $${maxProfit.Earnings}`);
}

// The function will return max profit. Whether it can be theatre, pub or commercials
const getMaxProfit = (input)=>{
  const theatre = 1500;
  const pub = 1000;
  const park = 3000;

  const theatreTimes = 0;
  const pf = 0;

  if(input<4) return alert('Please enter valid units...')

  //Theatre Data
  const theatreEarnings = calculateTheatre(input, theatreTimes,pf);
  var theatreProfit = theatreEarnings.profit ;
  var theatreCount = theatreEarnings.count;

  //Pub Data
  const pubEarnings = calculatePub(input, theatreTimes,pf);
  var pubProfit = pubEarnings.profit;
  var pubCount = pubEarnings.count;


  //Commercials Data
  if(input>9){
  const commercialEarnings = calculateCommercials(input, theatreTimes,pf);
  var commercialProfit = commercialEarnings.profit ;
  var commercialCount = commercialEarnings.count;
  }

   // We were including commercials because the input is greater than 9
  if (input > 9) {
    if (theatreProfit > pubProfit && theatreProfit > commercialProfit) {
      return {solution: { T: theatreCount, P: 0, C: 0 },  Earnings: theatreProfit };

    } else if (pubProfit > theatreProfit && pubProfit > commercialProfit) {
      return {solution: { T: 0, P: pubCount, C: 0 }, Earnings: pubProfit};

    } else if (
      commercialProfit > theatreProfit &&
      commercialProfit > pubProfit
    ) {
      return {solution: { T: 0, P: 0, C: commercialCount }, Earnings: commercialProfit, };

    }
  } 
//   We were not including commercials because the input is not greater than 9
  else if (input > 3) {
    if (theatreProfit >= pubProfit) {
      return {solution: { T: theatreCount, P: 0, C: 0 }, Earnings: theatreProfit};

    } else if (pubProfit >= theatreProfit) {
      return {solution: { T: 0, P: pubCount, C: 0 }, Earnings: pubProfit};
    } 
  }
};


//Calculating the Theatre earnings and solution to compare with others
const calculateTheatre = (input,time,pf)=>{
    let times = 0 + time;
    if (input < 5) return {count:times, profit:pf};


    const currentUnit = input-5;
    let profit = pf +(currentUnit * 1500)
    times = times+1;

    return calculateTheatre(currentUnit,times,profit);
}


//Calculating the Theatre earnings and solution to compare with others
const calculatePub = (input, time,pf) => {
  let times = 0 + time;
  if (input < 4) return { count: times, profit: pf };

  const currentUnit = input - 4;
  let profit = pf + (currentUnit * 1000);
  times = times + 1;

  return calculatePub(currentUnit, times, profit);
};


//Calculating the Theatre earnings and solution to compare with others
const calculateCommercials = (input, time,pf) => {
  let times = 0 + time;
  if (input < 10) return { count: times, profit: pf };

  const currentUnit = input - 10;
  let profit = pf + (currentUnit * 3000);
  times = times + 1;

  return calculateCommercials(currentUnit, times, profit);
};
