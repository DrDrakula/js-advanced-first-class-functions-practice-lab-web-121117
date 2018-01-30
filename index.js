// Code your solution in this file!


function logDriverNames(drivers, name){
  drivers.forEach(function(driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location){
  drivers.filter(function(driver){
    if(driver.hometown === location){
      console.log(driver.name)
    }
  })
}

const numSorter = function(a,b){
  return a - b;
}

function driversByRevenue(drivers){
  let new_array = [...drivers]
  new_array.sort(function(a,b){
    return a.revenue - b.revenue
  })
  return new_array
}

function driversByName(drivers){
  let new_array = [...drivers];
  new_array.sort(function(a,b){
    return a.name.localeCompare(b.name)
  })
  return new_array
}

const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

function totalRevenue(drivers){
  let nums = drivers.map(function(driver){
    return driver.revenue
  })
  return nums.reduce(function(total,num){
    return total + num
  })
}
console.log(totalRevenue(drivers))

function averageRevenue(drivers){
  let total = totalRevenue(drivers)
  return total / drivers.length
}
