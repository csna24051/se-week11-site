// ==========================
// Beauty Diagnosis App
// script.js（前半）
// ==========================

const form = document.getElementById("beautyForm");
const resultCard = document.getElementById("resultCard");

const personalColorText = document.getElementById("personalColor");
const faceTypeText = document.getElementById("faceType");
const hairStyleText = document.getElementById("hairStyle");
const fashionResultText = document.getElementById("fashionResult");
const bestColorText = document.getElementById("bestColor");
const adviceText = document.getElementById("advice");
const cosmeticLinks = document.getElementById("cosmeticLinks");
const fashionLinks = document.getElementById("fashionLinks");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const faceShape = document.getElementById("faceShape").value;
    const skinType = document.getElementById("skinType").value;
    const eyeColor = document.getElementById("eyeColor").value;
    const hairColor = document.getElementById("hairColor").value;
    const hairLength = document.getElementById("hairLength").value;
    const skinTone = document.getElementById("skinTone").value;
    const sunburn = document.getElementById("sunburn").value;
    const eyeSize = document.getElementById("eyeSize").value;
    const fashion = document.getElementById("fashion").value;
    const style = document.getElementById("style").value;

    let personalColor = "";
    let faceType = "";
    let hairStyle = "";
    let fashionResult = "";
    let bestColor = "";
    let advice = "";

    // ==========================
    // パーソナルカラー診断
    // ==========================

    if (
        (skinTone === "fair" && eyeColor === "lightBrown") ||
        (hairColor === "light" && sunburn === "easy")
    ) {

        personalColor = "🌼 イエベ春";
        bestColor = "コーラルピンク・アイボリー・ライトベージュ・ミントグリーン";

    } else if (
        (skinTone === "fair" && eyeColor === "black") ||
        (hairColor === "black" && sunburn === "hard")
    ) {

        personalColor = "❄️ ブルベ冬";
        bestColor = "ロイヤルブルー・ブラック・ワインレッド・ホワイト";

    } else if (
        (skinTone === "dark") ||
        (hairColor === "dark")
    ) {

        personalColor = "🍁 イエベ秋";
        bestColor = "カーキ・マスタード・ブラウン・テラコッタ";

    } else {

        personalColor = "🌸 ブルベ夏";
        bestColor = "ラベンダー・ローズピンク・スカイブルー・グレー";

    }

    // ==========================
    // 顔タイプ診断
    // ==========================

    if (
        faceShape === "round" &&
        eyeSize === "large"
    ) {

        faceType = "キュート";

    } else if (
        faceShape === "oval"
    ) {

        faceType = "フレッシュ";

    } else if (
        faceShape === "long"
    ) {

        faceType = "フェミニン";

    } else {

        faceType = "クール";

    }

    // ==========================
    // 髪型診断
    // ==========================

    if (faceType === "キュート") {

        hairStyle = "丸みショート・ふんわりボブ・シースルーバング";

    } else if (faceType === "フレッシュ") {

        hairStyle = "外ハネボブ・ミディアムレイヤー・ナチュラルヘア";

    } else if (faceType === "フェミニン") {

        hairStyle = "韓国風ロング・ゆる巻き・くびれヘア";

    } else {

        hairStyle = "センターパート・ストレートロング・ハンサムショート";

    }

    // ==========================
    // ファッション診断
    // ==========================

    if (style === "cute") {

        fashionResult = "フレアスカート・パステルカラー・リボンアイテム";

    } else if (style === "elegant") {

        fashionResult = "ブラウス・タイトスカート・ワンピース";

    } else if (style === "cool") {

        fashionResult = "ジャケット・モノトーン・スラックス";

    } else {

        fashionResult = "ニット・デニム・シンプルコーデ";

    }

        // ==========================
    // アドバイス診断
    // ==========================

    if (personalColor.includes("イエベ春")) {

        advice =
            "明るく透明感のある色が魅力を引き立てます。ツヤ感のあるメイクやコーラル系のリップがおすすめです。";

    } else if (personalColor.includes("ブルベ夏")) {

        advice =
            "やわらかく上品なカラーがよく似合います。青みピンクのメイクやラベンダーカラーを取り入れてみましょう。";

    } else if (personalColor.includes("イエベ秋")) {

        advice =
            "深みのあるアースカラーが魅力を引き出します。マットな質感のメイクやブラウン系のアイテムがおすすめです。";

    } else {

        advice =
            "コントラストのあるはっきりした色がよく似合います。ブラックやワインレッドをアクセントにすると印象的です。";

    }

    // ==========================
    // 普段のファッションに応じて追加アドバイス
    // ==========================

    switch (fashion) {

        case "casual":
            advice += " カジュアルコーデには白スニーカーやシンプルなアクセサリーを合わせるとよりおしゃれに見えます。";
            break;

        case "feminine":
            advice += " レースやパールなど上品な小物を取り入れると、女性らしさがさらに引き立ちます。";
            break;

        case "cool":
            advice += " シルバーアクセサリーやモノトーンアイテムを取り入れると洗練された印象になります。";
            break;

        case "natural":
            advice += " ベージュやアイボリーなど自然な色味を選ぶと、やさしい雰囲気を演出できます。";
            break;

    }

    // ==========================
    // 現在の髪の長さに合わせたコメント
    // ==========================

    if (hairLength === "short") {

        hairStyle += "。トップにボリュームを出すとバランスが良く見えます。";

    } else if (hairLength === "bob") {

        hairStyle += "。毛先を軽く巻くと柔らかい印象になります。";

    } else if (hairLength === "medium") {

        hairStyle += "。レイヤーを入れると動きが出て華やかになります。";

    } else {

        hairStyle += "。ゆるく巻くと女性らしい印象がさらにアップします。";

    }

    // ==========================
    // 結果表示
    // ==========================

    // ==========================
// おすすめショップ表示
// ==========================

if (personalColor.includes("イエベ春")) {

    cosmeticLinks.innerHTML = `
        <a class="shop-link" href="https://www.canmake.com/" target="_blank">CANMAKE</a>
        <a class="shop-link" href="https://www.cezanne.co.jp/" target="_blank">CEZANNE</a>
    `;

    fashionLinks.innerHTML = `
        <a class="shop-link" href="https://www.gu-global.com/jp/ja/" target="_blank">GU</a>
        <a class="shop-link" href="https://www.uniqlo.com/jp/ja/" target="_blank">UNIQLO</a>
    `;

} else if (personalColor.includes("ブルベ夏")) {

    cosmeticLinks.innerHTML = `
        <a class="shop-link" href="https://www.canmake.com/" target="_blank">CANMAKE</a>
        <a class="shop-link" href="https://www.cezanne.co.jp/" target="_blank">CEZANNE</a>
        <a class="shop-link" href="https://www.etvos.com/" target="_blank">ETVOS</a>
    `;

    fashionLinks.innerHTML = `
        <a class="shop-link" href="https://zozo.jp/" target="_blank">ZOZOTOWN</a>
        <a class="shop-link" href="https://www.gu-global.com/jp/ja/" target="_blank">GU</a>
    `;

} else if (personalColor.includes("イエベ秋")) {

    cosmeticLinks.innerHTML = `
        <a class="shop-link" href="https://www.nomorerules.net/" target="_blank">KATE</a>
        <a class="shop-link" href="https://www.visee.jp/" target="_blank">Visée</a>
    `;

    fashionLinks.innerHTML = `
        <a class="shop-link" href="https://globalwork.jp/" target="_blank">GLOBAL WORK</a>
        <a class="shop-link" href="https://www.nikoand.jp/" target="_blank">niko and ...</a>
    `;

} else {

    cosmeticLinks.innerHTML = `
        <a class="shop-link" href="https://www.visee.jp/" target="_blank">Visée</a>
        <a class="shop-link" href="https://maquillage.shiseido.co.jp/" target="_blank">MAQuillAGE</a>
    `;

    fashionLinks.innerHTML = `
        <a class="shop-link" href="https://www.zara.com/jp/" target="_blank">ZARA</a>
        <a class="shop-link" href="https://www2.hm.com/ja_jp/" target="_blank">H&M</a>
    `;

}

    personalColorText.textContent = personalColor;
    faceTypeText.textContent = faceType;
    hairStyleText.textContent = hairStyle;
    fashionResultText.textContent = fashionResult;
    bestColorText.textContent = bestColor;
    adviceText.textContent = advice;

    resultCard.classList.remove("hidden");
    resultCard.classList.add("show");

    resultCard.scrollIntoView({
        behavior: "smooth"
    });

});

// ==========================
// リセット
// ==========================

form.addEventListener("reset", function () {

    setTimeout(() => {

        resultCard.classList.remove("show");
        resultCard.classList.add("hidden");

        personalColorText.textContent = "";
        faceTypeText.textContent = "";
        hairStyleText.textContent = "";
        fashionResultText.textContent = "";
        bestColorText.textContent = "";
        adviceText.textContent = "";

    }, 100);

});