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


// 저장하기 버튼을 클릭했을 때 호출되는 함수
function saveData() {
    // 입력된 데이터를 가져옴
    var data = {
        약력: document.getElementById("약력").value,
        팔굽혀피기기: document.getElementById("팔굽혀피기기").value,
        왕복오래달리기: document.getElementById("왕복오래달리기").value,
        윗몸일으키기: document.getElementById("윗몸일으키기").value,
        오래달리기: document.getElementById("오래달리기").value,
        동의: document.getElementById("checkbox").checked
    };

    data = [95, 69, 21, 90, 31, 78, 11, 66, 74, null, null, null]
    for (let i = 0; i < data.length; i++) {
        if (data[i] === null) {
            data[i] = -1;
        }
    }
    console.log(data)
    // 벡엔드 API로 데이터 전송 (예시 코드)
    fetch("http://0.0.0.0:8000/predict/?input_data=" + encodeURIComponent(JSON.stringify(data)), {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(result => {
            // 처리 결과에 따른 동작 수행
            console.log(result);

            // 팝업 창으로 결과 보여주기
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

