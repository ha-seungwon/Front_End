// const currentDomain = window.location.origin
const currentDomain = "http://localhost:8080"
const scorePattern = /^(?!-)(?!.*[a-zA-Z])(?!.*[!@#$%^&*()])(?!.*\d{5,})(?=.*\d).+$/;

async function fetchEvaluationItem() {
    let response = await fetch(currentDomain + "/api/evaluation/items");
    if (!response.ok) {
        throw new Error('Error fetching.');
    }
    const evaluations = await response.json();
    let itemNum = 1;
    for (const item of evaluations) {
        document.getElementById("item-" + itemNum + "-id").innerText = item.evaluationItemId
        document.getElementById("item-" + itemNum + "-name").innerText = item.evaluationItemName
        itemNum++
    }
}

async function scoreInputEvents() {
    for (let itemNum = 1; itemNum <= 5; itemNum++) {
        const inputBox = document.getElementById('item-' + itemNum + '-score');
        inputBox.addEventListener('change', () => fetchEvaluationItemScore(itemNum))
    }
}

document.getElementById('saveButton').addEventListener(
    "click", ()=>saveData()
)

async function fetchEvaluationItemScore(itemKey) {
    const evaluationScore = document.getElementById('item-' + itemKey + '-evaluation-score')
    let score = document.getElementById('item-' + itemKey + '-score').value;
    if(score === '' || !scorePattern.test(score)) {
        evaluationScore.innerText = '' +"점"
        return
    }
    const response = await fetch(currentDomain + "/api/score?" + new URLSearchParams({
        evaluationItemId: document.getElementById('item-' + itemKey + '-id').innerText,
        score: document.getElementById('item-' + itemKey + '-score').value,
    }))
    if (!response.ok) {
        alert("Invalid score input")
        evaluationScore.innerText = '' +"점"
        throw new Error('Error fetching.');
    }
    evaluationScore.innerText = (await response.json()).score + "점"
}

fetchEvaluationItem()
scoreInputEvents()

function saveData() {
    let item1 = document.getElementById('item-1-score');
    let item2 = document.getElementById('item-2-score');
    let item3 = document.getElementById('item-3-score');
    let item4 = document.getElementById('item-4-score');
    let item5 = document.getElementById('item-5-score');
    let agreeCheckbox = document.getElementById('agreeCheckbox');

    if(item1.value === '' || item2.value === '' || item3.value === '' || item4.value === '' || item5.value === '') {
        alert("모든 점수를 입력해주세요");
        return;
    }

    if(agreeCheckbox.checked !== true) {
        alert("점수 입력에 동의해주세요");
        return;
    }

    var data = [
        {
            evaluationItemId: document.getElementById('item-1-id').innerText,
            score : item1.value,
        },
        {
            evaluationItemId: document.getElementById('item-2-id').innerText,
            score : item2.value,
        },
        {
            evaluationItemId: document.getElementById('item-3-id').innerText,
            score : item3.value,
        }
        ,{
            evaluationItemId: document.getElementById('item-4-id').innerText,
            score : item4.value,
        },
        {
            evaluationItemId: document.getElementById('item-5-id').innerText,
            score : item5.value,
        },
    ]
    fetch(currentDomain + "/api/score/me", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
            if (result.prediction === 1) {
                alert("데이터가 저장되었습니다.\n결과: 합격");
            } else {
                alert("데이터가 저장되었습니다.\n결과: 불합격");
            }
        })
        .catch(error => {
            console.error("에러 발생:", error);
            alert("데이터 저장 중에 오류가 발생했습니다.");
        });
}

async function fetchMyInfo() {
    const responseMemberInfo = await fetch(currentDomain + "/api/member/me");
    if (!responseMemberInfo.ok) {
        alert("Failed to fetch member")
        throw new Error('Error fetching.');
    }

    const responseScoreInfo = await fetch(currentDomain + "/api/score/expect");
    if (!responseScoreInfo.ok) {
        alert("Failed to fetch expected")
        throw new Error('Error fetching.');
    }

    let responseMemberInfoValue = await responseMemberInfo.json();
    let responseScoreInfoValue = await responseScoreInfo.json();

    const applicationType = document.getElementById('applicationType');
    const currentScore = document.getElementById('currentScore');
    const expectedScore = document.getElementById('expectedScore');
    const expectedGrade = document.getElementById('expectedGrade');

    applicationType.innerText = responseMemberInfoValue.applicationTypeName
    currentScore.innerText = responseScoreInfoValue.currentScore
    expectedScore.innerText = responseScoreInfoValue.expectedScore

    if(responseScoreInfoValue.expectedGrade >= 80) {
        expectedGrade.innerText = "합격이 예상됩니다."
    }
    if(responseScoreInfoValue.expectedGrade < 80 && responseScoreInfoValue.expectedGrade >= 60) {
        expectedGrade.innerText = "합격 보류가 예상됩니다."
    }
    if(responseScoreInfoValue.expectedGrade < 60) {
        expectedGrade.innerText = "탈락이 예상됩니다."
    }
}

fetchMyInfo()

const checkbox = document.getElementById('checkbox');

const percentage = 53; // Change this value dynamically

const container = d3.select("#gauge-container");
const width = 256;
const height = 214;
const radius = Math.min(width, height) / 2;
const data = [percentage, 100 - percentage];

const color = d3.scaleOrdinal()
    .domain(data)
    .range(["#DDE1E6", "#878D96"]);

const pie = d3.pie()
    .sort(null)
    .value(d => d);

const arc = d3.arc()
    .innerRadius(radius - 30)
    .outerRadius(radius - 10);

const svg = container.append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

svg.selectAll("path")
    .data(pie(data))
    .enter().append("path")
    .attr("d", arc)
    .attr("fill", d => color(d.data));

svg.append("text")
    .attr("class", "percentage")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .text(percentage + "%");

var months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
var currentScores = [50, null, 30, 20, 10, 0];
var expectedScores = [30, 25, 20, 15, null, 5];

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: '현재 점수',
            data: currentScores,
            borderColor: 'black',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var settingContainer = document.getElementById("settingContainer");
if (settingContainer) {
    settingContainer.addEventListener("click", function (e) {
        window.location.href = "./setting-account.html";
    });
}

const menu01Container = document.getElementById("menu01Container");
if (menu01Container) {
    menu01Container.addEventListener("click", function (e) {
        window.location.href = "./dashboard.html";
    });
}

var menu02 = document.getElementById("menu02");
if (menu02) {
    menu02.addEventListener("click", function (e) {
        window.location.href = "record.html";
    });
}

var menu03Container = document.getElementById("menu03Container");
if (menu03Container) {
    menu03Container.addEventListener("click", function (e) {
        window.location.href = "./personal-information.html";
    });
}

var menu04Container = document.getElementById("menu04Container");
if (menu04Container) {
    menu04Container.addEventListener("click", function (e) {
        window.location.href = "./application-information1.html";
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    // 정규식: 1~3자리 숫자
    // 입력 칸들의 ID와 오류 메시지를 매핑하는 객체
    const inputErrorMapping = {
      'item-1-score': 'item-1-error',
      'item-2-score': 'item-2-error',
      'item-3-score': 'item-3-error',
      'item-4-score': 'item-4-error',
      'item-5-score': 'item-5-error'
    };

    // 입력 칸들의 이벤트 리스너 추가
    Object.keys(inputErrorMapping).forEach(inputId => {
      const inputElement = document.getElementById(inputId);
      const errorElement = document.getElementById(inputErrorMapping[inputId]);

      inputElement.addEventListener('input', () => {
        if (inputElement.value.trim() === '') {
          errorElement.textContent = ''; // 입력 값이 비어있을 때 오류 메시지 지우기
        } else if (!scorePattern.test(inputElement.value)) {
          errorElement.textContent = '유효하지 않은 측정값입니다.';
        } else {
          errorElement.textContent = '';
        }
      });
    });
  });