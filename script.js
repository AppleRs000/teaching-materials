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

    alert(grade + "年生の教材を表示します。");

}
