function searchMaterial() {

    const keyword =
        document.getElementById("searchInput").value;

    if (keyword === "") {

        alert("検索する言葉を入力してください。");

        return;
    }

    alert("「" + keyword + "」を検索します。");

}



function selectGrade(grade) {

    if (grade === 3) {

        showScreen("grade3Screen");

    } else {

        alert(
            grade + "年生の画面はこれから作ります！"
        );

    }

}



function showScreen(screenId) {

    // すべての画面を非表示
    document.querySelectorAll(".screen").forEach(function(screen) {

        screen.style.display = "none";

    });


    // 指定した画面を表示
    document.getElementById(screenId).style.display = "block";

}
// ========================================
// 教材データ
// ========================================

const materials = [

    {
        type: "print",
        period: "beginning",
        title: "わり算の導入プリント",
        time: "15分",
        description: "わり算の意味を考えるための導入プリントです。"
    },

    {
        type: "print",
        period: "beginning",
        title: "同じ数ずつ分けよう",
        time: "10分",
        description: "具体物を使って、わり算の意味を考えます。"
    },

    {
        type: "print",
        period: "middle",
        title: "わり算の計算練習",
        time: "15分",
        description: "わり算の計算を練習するプリントです。"
    },

    {
        type: "print",
        period: "middle",
        title: "わり算の文章問題",
        time: "20分",
        description: "文章から式を考える練習です。"
    },

    {
        type: "print",
        period: "end",
        title: "わり算まとめプリント",
        time: "20分",
        description: "単元の学習内容を振り返ります。"
    },


    {
        type: "lesson",
        period: "beginning",
        title: "第1時 授業の流れ",
        time: "45分",
        description: "わり算の意味を考える授業です。"
    },

    {
        type: "lesson",
        period: "beginning",
        title: "第2時 板書例",
        time: "45分",
        description: "わり算の導入で使用した板書です。"
    },

    {
        type: "lesson",
        period: "middle",
        title: "第5時 授業の流れ",
        time: "45分",
        description: "わり算の計算方法を学習します。"
    }

];


// 現在の表示条件

let currentMaterialType = "print";

let currentPeriod = "beginning";



// ========================================
// 教材種類を変更
// ========================================

function changeMaterialType(type) {

    currentMaterialType = type;

    updateTabs();

    displayMaterials();

}



// ========================================
// 単元の時期を変更
// ========================================

function changePeriod(period) {

    currentPeriod = period;

    updateTabs();

    displayMaterials();

}



// ========================================
// タブの見た目を変更
// ========================================

function updateTabs() {

    document
        .querySelectorAll(".main-tab")
        .forEach(function(button) {

            button.classList.remove("active");

        });


    document
        .querySelectorAll(".sub-tab")
        .forEach(function(button) {

            button.classList.remove("active");

        });


    if (currentMaterialType === "print") {

        document
            .querySelectorAll(".main-tab")[0]
            .classList.add("active");

    } else {

        document
            .querySelectorAll(".main-tab")[1]
            .classList.add("active");

    }


    const periodButtons =
        document.querySelectorAll(".sub-tab");


    if (currentPeriod === "beginning") {

        periodButtons[0].classList.add("active");

    }

    if (currentPeriod === "middle") {

        periodButtons[1].classList.add("active");

    }

    if (currentPeriod === "end") {

        periodButtons[2].classList.add("active");

    }

}



// ========================================
// 教材を表示
// ========================================

function displayMaterials() {

    const list =
        document.getElementById("materialList");


    list.innerHTML = "";


    const filteredMaterials =
        materials.filter(function(material) {

            return (
                material.type === currentMaterialType &&
                material.period === currentPeriod
            );

        });


    if (filteredMaterials.length === 0) {

        list.innerHTML = `
            <div class="empty-message">
                <p>📭 まだ教材がありません。</p>
                <p>最初の教材を投稿してみましょう！</p>
            </div>
        `;

        return;

    }


    filteredMaterials.forEach(function(material) {

        const card =
            document.createElement("div");

        card.className = "material-card";


        card.innerHTML = `

            <h3>📄 ${material.title}</h3>

            <p>⏱️ ${material.time}</p>

            <p>${material.description}</p>

            <button
                onclick="alert('教材を開く機能はこれから作ります！')">

                📖 教材を見る

            </button>

        `;


        list.appendChild(card);

    });

}



// ========================================
// 画面を表示したとき
// ========================================

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(function(screen) {

            screen.style.display = "none";

        });


    document
        .getElementById(screenId)
        .style.display = "block";


    // わり算画面を開いたら教材を表示

    if (screenId === "divisionScreen") {

        displayMaterials();

        updateTabs();

    }

}
