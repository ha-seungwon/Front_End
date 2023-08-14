// const currentDomain = window.location.origin
const currentDomain = "http://localhost:8080"

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
    const response = await fetch(currentDomain + "/api/score?" + new URLSearchParams({
        evaluationItemId: document.getElementById('item-' + itemKey + '-id').innerText,
        score: document.getElementById('item-' + itemKey + '-score').value,
    }))
    if (!response.ok) {
        alert("Invalid score input")
        throw new Error('Error fetching.');
    }
    const evaluationScore = document.getElementById('item-' + itemKey + '-evaluation-score')
    evaluationScore.innerText = (await response.json()).score
}

fetchEvaluationItem()
scoreInputEvents()

function saveData() {
    var data = [
        {
            evaluationItemId: document.getElementById('item-1-id').innerText,
            score : document.getElementById('item-1-score').value,
        },
        {
            evaluationItemId: document.getElementById('item-2-id').innerText,
            score : document.getElementById('item-2-score').value,
        },
        {
            evaluationItemId: document.getElementById('item-3-id').innerText,
            score : document.getElementById('item-3-score').value,
        }
        ,{
            evaluationItemId: document.getElementById('item-4-id').innerText,
            score : document.getElementById('item-4-score').value,
        },
        {
            evaluationItemId: document.getElementById('item-5-id').innerText,
            score : document.getElementById('item-5-score').value,
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
    const response = await fetch(currentDomain + "/api/member/me");
    if (!response.ok) {
        alert("Invalid score input")
        throw new Error('Error fetching.');
    }
    const applicationType = document.getElementById('applicationType');
    applicationType.innerText = (await response.json()).applicationTypeName
}

fetchMyInfo()

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('checked');
});

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
