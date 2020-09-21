const judgeVegetable = function (vegetables, metric) {
  let currScore = 0;
  let currWinner = "";
  for (let vegetable of vegetables) {
            if (vegetable[metric] > currScore) {
        currScore = vegetable[metric]
        currWinner = vegetable.submitter;
    }
  }
  return currWinner;
} 
    
  
  


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))
