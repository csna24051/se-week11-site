function diagnosis() {

    const face = document.getElementById("face").value;
    const skin = document.getElementById("skin").value;
    const eye = document.getElementById("eye").value;
    const hairColor = document.getElementById("hairColor").value;
    const hairLength = document.getElementById("hairLength").value;
    const fashion = document.getElementById("fashion").value;
    const style = document.getElementById("style").value;

    let hair = "";
    let clothes = "";
    let color = "";
    let comment = "";

    // 顔の形
    if(face=="丸顔"){
        hair="センターパート";
    }
    else if(face=="面長"){
        hair="マッシュ";
    }
    else if(face=="卵型"){
        hair="ショートボブ";
    }
    else{
        hair="レイヤーカット";
    }

    // 肌タイプ
    if(skin=="イエベ"){
        color="ベージュ・ブラウン・カーキ";
    }
    else{
        color="ネイビー・グレー・ブラック";
    }

    // ファッション
    if(fashion=="韓国風"){
        clothes="オーバーサイズコーデ";
    }
    else if(fashion=="きれいめ"){
        clothes="ジャケットスタイル";
    }
    else if(fashion=="ストリート"){
        clothes="カーゴパンツコーデ";
    }
    else{
        clothes="デニムカジュアル";
    }

    // 雰囲気
    if(style=="かわいい"){
        comment="やわらかい印象を活かしたコーデがおすすめです🌸";
    }
    else if(style=="かっこいい"){
        comment="モノトーンで大人っぽくまとめると似合います✨";
    }
    else if(style=="大人っぽい"){
        comment="シンプルできれいめなスタイルがおすすめです😊";
    }
    else{
        comment="自然体で優しい雰囲気を活かしましょう🍀";
    }

    document.getElementById("result").innerHTML=`

    <h2>🌸診断結果🌸</h2>

    <p>💇<b>おすすめの髪型</b><br>${hair}</p>

    <p>👕<b>おすすめの服装</b><br>${clothes}</p>

    <p>🎨<b>似合う色</b><br>${color}</p>

    <hr>

    <p><b>あなたの情報</b></p>

    顔の形：${face}<br>
    肌タイプ：${skin}<br>
    目の色：${eye}<br>
    髪の色：${hairColor}<br>
    髪の長さ：${hairLength}<br>
    普段のファッション：${fashion}<br>
    なりたい雰囲気：${style}

    <hr>

    <p>${comment}</p>

    `;
}