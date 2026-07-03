function diagnosis() {

    // ===== 入力値の取得 =====
    const face = document.getElementById("face").value;
    const skin = document.getElementById("skin").value;
    const eye = document.getElementById("eye").value;
    const hairColor = document.getElementById("hairColor").value;
    const hairLength = document.getElementById("hairLength").value;
    const skinTone = document.getElementById("skinTone").value;
    const sunburn = document.getElementById("sunburn").value;
    const eyeSize = document.getElementById("eyeSize").value;
    const fashion = document.getElementById("fashion").value;
    const style = document.getElementById("style").value;

    // ===== 診断結果を入れる変数 =====
    let personalColor = "";
    let faceType = "";
    let hair = "";
    let clothes = "";
    let color = "";
    let advice = "";

    // ==========================
    // パーソナルカラー診断
    // ==========================

    if (
        (skin === "イエベ" || skin === "分からない") &&
        skinTone === "明るい" &&
        sunburn === "赤くなる"
    ) {

        personalColor = "イエベ春";
        color = "アイボリー・コーラルピンク・ベージュ・ライトグリーン";

    }
    else if (
        (skin === "ブルベ" || skin === "分からない") &&
        skinTone === "明るい"
    ) {

        personalColor = "ブルベ夏";
        color = "ラベンダー・ライトグレー・ネイビー・ローズピンク";

    }
    else if (
        skinTone === "健康的" &&
        sunburn === "黒くなる"
    ) {

        personalColor = "イエベ秋";
        color = "カーキ・ブラウン・マスタード・テラコッタ";

    }
    else {

        personalColor = "ブルベ冬";
        color = "ブラック・ホワイト・ワインレッド・ロイヤルブルー";

    }

    // ==========================
    // 顔タイプ診断
    // ==========================

    if (
        face === "丸顔" &&
        eyeSize === "大きい"
    ) {

        faceType = "キュート";

    }
    else if (
        face === "卵型"
    ) {

        faceType = "フレッシュ";

    }
    else if (
        face === "面長"
    ) {

        faceType = "フェミニン";

    }
    else {

        faceType = "クール";

    }

        // ==========================
    // おすすめの髪型
    // ==========================

    if (faceType === "キュート") {

        hair = "ショートボブ・内巻きボブ・シースルーバング";

    }
    else if (faceType === "フレッシュ") {

        hair = "くびれミディアム・外ハネボブ・レイヤーカット";

    }
    else if (faceType === "フェミニン") {

        hair = "ロングレイヤー・韓国風巻き髪・ゆるふわパーマ";

    }
    else {

        hair = "センターパート・ストレートロング・ハンサムショート";

    }

    // ==========================
    // おすすめの服装
    // ==========================

    if (fashion === "韓国風") {

        clothes = "オーバーサイズジャケット・ワイドパンツ・白スニーカー";

    }
    else if (fashion === "ガーリー") {

        clothes = "ワンピース・カーディガン・プリーツスカート";

    }
    else if (fashion === "きれいめ") {

        clothes = "ブラウス・テーパードパンツ・パンプス";

    }
    else if (fashion === "ストリート") {

        clothes = "カーゴパンツ・パーカー・スニーカー";

    }
    else {

        clothes = "デニム・Tシャツ・スニーカー";

    }

    // ==========================
    // 雰囲気別アドバイス
    // ==========================

    if (style === "かわいい") {

        advice = "ピンク系やパステルカラーを取り入れると、さらに魅力が引き立ちます。";

    }
    else if (style === "かっこいい") {

        advice = "ブラックやネイビーなど、落ち着いた色を使うと大人っぽい印象になります。";

    }
    else if (style === "大人っぽい") {

        advice = "シンプルなデザインと上品なカラーがおすすめです。";

    }
    else {

        advice = "ナチュラルカラーで優しい雰囲気を演出しましょう。";

    }

    // ==========================
    // 診断結果表示
    // ==========================

    document.getElementById("result").innerHTML = `

        <h2>🌸 診断結果 🌸</h2>

        <hr>

        <h3>🎨 パーソナルカラー</h3>
        <p>${personalColor}</p>

        <h3>😊 顔タイプ</h3>
        <p>${faceType}</p>

        <h3>💇 おすすめの髪型</h3>
        <p>${hair}</p>

        <h3>👕 おすすめの服装</h3>
        <p>${clothes}</p>

        <h3>🌈 似合う色</h3>
        <p>${color}</p>

        <h3>💡 ワンポイントアドバイス</h3>
        <p>${advice}</p>

        <hr>

        <h3>📋 あなたの診断内容</h3>

        <p>
        顔の形：${face}<br>
        肌タイプ：${skin}<br>
        目の色：${eye}<br>
        髪の色：${hairColor}<br>
        髪の長さ：${hairLength}<br>
        肌の明るさ：${skinTone}<br>
        日焼け：${sunburn}<br>
        目の大きさ：${eyeSize}<br>
        普段のファッション：${fashion}<br>
        なりたい雰囲気：${style}
        </p>

    `;

}