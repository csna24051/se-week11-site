function diagnosis() {

    const face = document.getElementById("face").value;
    const skin = document.getElementById("skin").value;

    let hair = "";
    let clothes = "";
    let color = "";

    if (face === "丸顔") {
        hair = "センターパート";
        clothes = "オーバーサイズコーデ";
    } else if (face === "面長") {
        hair = "マッシュ";
        clothes = "ボーダートップス";
    } else if (face === "卵型") {
        hair = "ショートヘア";
        clothes = "ジャケットスタイル";
    } else {
        hair = "ツーブロック";
        clothes = "パーカーコーデ";
    }

    if (skin === "イエベ") {
        color = "ベージュ・カーキ・ブラウン";
    } else {
        color = "ネイビー・グレー・ブラック";
    }

    document.getElementById("result").innerHTML = `
        <h2>診断結果</h2>

        <p>💇 おすすめの髪型<br><strong>${hair}</strong></p>

        <p>👕 おすすめの服装<br><strong>${clothes}</strong></p>

        <p>🎨 似合う色<br><strong>${color}</strong></p>
    `;
}