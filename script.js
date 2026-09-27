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
