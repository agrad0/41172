let workersNames = document.getElementsByClassName(`pracownik`);
let workTime = document.getElementsByClassName(`czas`);
let wageRate = document.getElementsByClassName(`stawka`);
let wageSum = document.getElementsByClassName(`wyplata`);

let countButton = document.getElementById("oblicz");
countButton.addEventListener("click", countWage);

function countWage () {
    for (let i = 0; i < wageSum.length; i++) {
        if (workTime[i].value > 160) {
            let prize = (workTime[i].value - 160) * (wageRate[i].value * 2);
            let basicWage = workTime[i].value * wageRate[i].value;
            wageSum[i].value = basicWage + prize;
            wageSum[i].innerHTML = `${wageSum[i].value}`;
        }
        else if ((workTime[i].value <= 160) && (workTime[i].value >= 100)) {
            let basicWage = workTime[i].value * wageRate[i].value;
            wageSum[i].value = basicWage;
            wageSum[i].innerHTML = `${wageSum[i].value}`;
        }
        else if (workTime[i].value <= 100) {
            workersNames[i].style.color = "red";
            let basicWage = workTime[i].value * wageRate[i].value;
            wageSum[i].value = basicWage;
            wageSum[i].innerHTML = `${wageSum[i].value}`;
        }
    };
    let arrHoursList = Array.from(workTime);

    let sortedHoursList = arrHoursList.sort((a, b) => b.value - a.value);


    let firstWinner = sortedHoursList[0].parentElement.firstElementChild.textContent;
    let secondWinner = sortedHoursList[1].parentElement.firstElementChild.textContent;
    let thirdWinner = sortedHoursList[2].parentElement.firstElementChild.textContent;

    document.getElementById("najlepsi-pracownicy").innerText = firstWinner + ", " + secondWinner + ", " + thirdWinner;
}





