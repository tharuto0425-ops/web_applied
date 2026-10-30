// データ：敵のオブジェクトの配列
const enemies = [
  { name: "スライム", hp: 5 },
  { name: "ゴブリン", hp: 9 },
  { name: "ドラゴン", hp: 20 }
];

const p = [
  { name: "クリア！"},
  { name: "一体撃破！"},
  { name: "二体撃破！"}
];

// データからリストを作る（３-５・３-６と同じ形）
function showEnemies() {
  const list = document.getElementById("enemyList");
  list.innerHTML = "";

  for (let i = 0; i < enemies.length; i++) {
    const enemy = enemies[i];
    const li = document.createElement("li");
    li.innerText = `${enemy.name}（HP：${enemy.hp}）`;
    list.appendChild(li);
  }
}

// 攻撃：全員の HP を 3 減らして、リストを作り直す
function attack() {
    clear = 0;
    for (let i = 0; i < enemies.length;i++){
        enemies[i].hp -= 3; 
        if (enemies[i].hp <= 0){
            clear += 1;
        } 
        if (clear == 1 ) {
            document.getElementById("result").textContent = p[1].name;
        }else if (clear == 2){
            document.getElementById("result").textContent = p[2].name;
        }else if (clear == 3){
            document.getElementById("result").textContent = p[0].name;
        }
    }

  showEnemies();
}

showEnemies();