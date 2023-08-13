const settingContainer = document.getElementById("settingContainer");
settingContainer.addEventListener("click", function (e) {
    window.location.href = "./setting-account.html";
});

const menu02Container = document.getElementById("menu02Container");
menu02Container.addEventListener("click", function (e) {
    window.location.href = "./record.html";
});

const menu03Container = document.getElementById("menu03Container");
menu03Container.addEventListener("click", function (e) {
    window.location.href = "./personal-information.html";
});

const menu04Container = document.getElementById("menu04Container")
menu04Container.addEventListener("click", function (e) {
    window.location.href = "./application-information1.html";
});


// const currentDomain = window.location.origin
const currentDomain = "http://localhost:8080"

async function fetchTotalApplication() {
    const totalApplicationContainer = document.getElementById("total-application")
    const totalRecordsContainer = document.getElementById("total-records")

    let response1 = await fetch(currentDomain + "/api/auth/count");
    if (!response1.ok) {
        throw new Error('Error fetching products.');
    }
    totalApplicationContainer.innerText = (await response1.json()).count

    let response2 = await fetch(currentDomain + "/api/score/count");
    if (!response2.ok) {
        throw new Error('Error fetching products.');
    }
    totalRecordsContainer.innerText = (await response2.json()).count
}

async function fetchMyScore() {
    const currentScoreContainer = document.getElementById("current-score")
    const expectedScoreContainer = document.getElementById("expected-score")

    let response1 = await fetch(currentDomain + "/api/score/me");
    if (!response1.ok) {
        throw new Error('Error fetching products.');
    }
    currentScoreContainer.innerText = (await response1.json()).score
}

async function fetchRank() {
    let response = await fetch(currentDomain + "/api/score/rank?rankCnt=5");
    for (const item of (await response.json())) {
        const rank = item.rank
        const rn = document.getElementById("rank-name-"+rank)
        const rs = document.getElementById("rank-score-"+rank)
        const rat = document.getElementById("rank-application-type-"+rank)
        rn.innerText = item.memberName
        rs.innerText = item.score
        rat.innerText = item.applicationType
    }
}

fetchTotalApplication()
fetchMyScore()
fetchRank()
