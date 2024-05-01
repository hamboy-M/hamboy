const choices=document.querySelector(".choices")
const btn=document.querySelector(".btn")
const enemy=document.querySelector(".enemy")
const result=document.querySelector(".result")
//グーチョキパーの配列
const arry=["グー","チョキ","パー"]
//ボタン要素が押されたらイベントを開始
btn.addEventListener('click',()=>{
    const random=Math.floor(Math.random()*arry.length)
    enemy.value=arry[random]
    enemy.value=arry[Math.floor(Math.random())]

    //プレイヤーの選択肢と敵の選択肢の比較
    if(choices.value==enemy.value){
        result.textContent="あいこ"    
    }else{
        if(choices.value=="グー"){
            if(enemy.value=="チョキ"){
                result.textContent="勝ち"
            }
            if(choices.value=="パー"){
                result.textContent="負け"
            }
        }
        if(choices.value=="チョキ"){
            if(enemy.value=="パー"){
                result.textContent="勝ち"
            }
            if(enemy.value=="グー"){
                result.textContent="負け"
            }
        }   
        if(choices.value=="パー"){
            if(enemy.value=="グー"){
                result.textContent="勝ち"
            }
            if(enemy.value=="チョキ"){
                result.textContent="負け"
            } 
        }   
    }   } )