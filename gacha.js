const gachaPool = require('./gachaPool.json') ;
const random = require('math-random') ;

function getTotalRate(gachaPool) {
    var result = gachaPool.map(data => parseFloat(data.rate.replace('%', ''))).reduce((pre, curr) => pre + curr) ;
    return [Math.round(result * 10000), 10000] ;
}

/**
 * 進行亂數產生
 * @param {Number} times
 * @returns {Array}
 */
function genRandom(max, min, times = 1) {
    let result = [] ;
    for (let i = 0 ; i < times ; i++) {
        result.push(Math.round(random() * (max - min) + min)) ;
    }

    return result ;
}

/**
 * 進行轉蛋
 * @param {Array} gachaPool 轉蛋池
 */
function play(gachaPool, times = 1) {
    const [max, rate] = getTotalRate(gachaPool) ;
    // 產出亂數陣列，用該數字，取得轉蛋池中相對應位置之獎勵
    const randomAry = genRandom(max, 1, times).sort((a, b) => a - b) ;

    var stack = 0 ; // 數字堆疊
    var anchor = 0 ; // 處理到的亂數陣列錨點
    var rewards = [] ; // 轉出獎勵陣列

    gachaPool.forEach(data => {
        if (anchor >= randomAry.length) return ;
        let top = Math.floor(parseFloat(data.rate.replace('%', '') * rate)) ;

        // 介於轉蛋池中的 堆疊數 和 頂點 的亂數 即為抽出內容物
        while(randomAry[anchor] >= stack && randomAry[anchor] <= stack + top && anchor < randomAry.length) {
            rewards.push({...data}) ;
            anchor++ ; // 處理下一錨點
        }

        stack += top ; // 數字往上堆疊
    }) ;

    return rewards ;
}

module.exports = function(times = 1) {
    return play(gachaPool, times) ;
} ;