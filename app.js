const weekly = document.getElementById('weekly');
const daily = document.getElementById('daily');
const monthly = document.getElementById('monthly');
const workCur = document.getElementById('work-current');
const workPre = document.getElementById('work-previous');
const playCur = document.getElementById('play-current');
const playPre = document.getElementById('play-previous');
const studyCur = document.getElementById('study-current');
const studyPre = document.getElementById('study-previous');
const exerciseCur = document.getElementById('exercise-current');
const exercisePre = document.getElementById('exercise-previous');
const selfcareCur = document.getElementById('selfcare-current');
const selfcarePre = document.getElementById('selfcare-previous');
const socialCur = document.getElementById('social-current');
const socialPre = document.getElementById('social-previous');

let fetchData = null;

fetch('./program.json')
  .then((response) => response.json())
  .then((data) => (fetchData = data))
  .catch((err) => console.log(err));

weekly.addEventListener('click', () => {
  workCur.innerHTML = fetchData['work']['weeklyCurrent'];
  workPre.innerHTML = 'Last Week - ' + fetchData['work']['weeklyPrevious'];

  playCur.innerHTML = fetchData['play']['weeklyCurrent'];
  playPre.innerHTML = 'Last Week - ' + fetchData['play']['weeklyPrevious'];

  studyCur.innerHTML = fetchData['study']['weeklyCurrent'];
  selfcareCur.innerHTML = 'Last Week - ' + fetchData['study']['weeklyPrevious'];

  exerciseCur.innerHTML = fetchData['exercise']['weeklyCurrent'];
  exercisePre.innerHTML = 'Last Week - ' + fetchData['exercise']['weeklyPrevious'];

  selfcareCur.innerHTML = fetchData['selfcare']['weeklyCurrent'];
  selfcarePre.innerHTML = 'Last Week - ' + fetchData['selfcare']['weeklyPrevious'];

  socialCur.innerHTML = fetchData['social']['weeklyCurrent'];
  socialPre.innerHTML = 'Last Week - '.concat(
    fetchData['social']['weeklyPrevious']
  );

  if (daily.classList.contains('color')) {
    daily.classList.remove('color');
  }

  if (monthly.classList.contains('color')) {
    monthly.classList.remove('color');
  }

  if (!weekly.classList.contains('color')) {
    weekly.classList.add('color');
  }
});

daily.addEventListener('click', () => {
  workCur.innerHTML = fetchData['work']['dailyCurrent'];
  workPre.innerHTML = 'Yesterday - ' + fetchData['work']['dailyPrevious'];

  playCur.innerHTML = fetchData['play']['dailyCurrent'];
  playPre.innerHTML = 'Yesterday - ' + fetchData['play']['dailyPrevious'];

  studyCur.innerHTML = fetchData['study']['dailyCurrent'];
  selfcareCur.innerHTML = 'Yesterday - ' + fetchData['study']['dailyPrevious'];

  exerciseCur.innerHTML = fetchData['exercise']['dailyCurrent'];
  exercisePre.innerHTML = 'Yesterday - ' + fetchData['exercise']['dailyPrevious'];

  selfcareCur.innerHTML = fetchData['selfcare']['dailyCurrent'];
  selfcarePre.innerHTML = 'Yesterday - ' + fetchData['selfcare']['dailyPrevious'];

  socialCur.innerHTML = fetchData['social']['dailyCurrent'];
  socialPre.innerHTML = 'Yesterday - '.concat(
    fetchData['social']['dailyPrevious'])


  if (weekly.classList.contains('color')) {
    weekly.classList.remove('color');
  }

  if (monthly.classList.contains('color')) {
    monthly.classList.remove('color');
  }

  if (!daily.classList.contains('color')) {
    daily.classList.add('color');
  }
});

monthly.addEventListener('click', () => {
  workCur.innerHTML = fetchData['work']['monthlyCurrent'];
  workPre.innerHTML = 'Last Month - ' + fetchData['work']['monthlyPrevious'];

  playCur.innerHTML = fetchData['play']['weeklyCurrent'];
  playPre.innerHTML = 'Last Month - ' + fetchData['play']['monthlyPrevious'];

  studyCur.innerHTML = fetchData['study']['monthlyCurrent'];
  selfcareCur.innerHTML = 'Last Month - ' + fetchData['study']['monthlyPrevious'];

  exerciseCur.innerHTML = fetchData['exercise']['monthlyCurrent'];
  exercisePre.innerHTML = 'Last Month - ' + fetchData['exercise']['monthlyPrevious'];

  selfcareCur.innerHTML = fetchData['selfcare']['monthlyCurrent'];
  selfcarePre.innerHTML = 'Last Month - ' + fetchData['selfcare']['monthlyPrevious'];

  socialCur.innerHTML = fetchData['social']["monthlyCurrent"];
  socialPre.innerHTML = 'Last Month - '.concat(
    fetchData['social']['monthlyPrevious']
  );

  if (daily.classList.contains('color')) {
    daily.classList.remove('color');
  }

  if (weekly.classList.contains('color')) {
    weekly.classList.remove('color');
  }

  if (!monthly.classList.contains('color')) {
    monthly.classList.add('color');
  }
});
