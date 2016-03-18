/**
 * Created by kinglan525 on 16/1/15.
 */
//寻找最长公共子串
function lcs(word1, word2) {
    var max = 0;
    var index = 0;
    var lcsarr = new Array(word1.length + 1);
    for (var i = 0; i < word1.length + 1; ++i) {
        lcsarr[i] = new Array(word2.length + 1);
        for (var j = 0; j < word2.length + 1; ++j) {
            lcsarr[i][j] = 0;
        }
    }
    for (var i = 0; i <= word1.length; ++i) {
        for (var j = 0; j <= word2.length; ++j) {
            if (i == 0 || j == 0) {
                lcsarr[i][j] = 0;
            }
            else {
                if (word1[i-1] == word2[j-1]) {
                    lcsarr[i][j] = lcsarr[i-1][j-1] + 1;
                }
                else {
                    lcsarr[i][j] = 0;
                }
            }
            if (max < lcsarr[i][j]) {
                //记录最大的公共长度，以及最大公共长度时word1所处的位置
                max = lcsarr[i][j];
                index = i;
            }
        }
    }
    console.log(lcsarr)
    console.log(max)
    console.log(index)
    var str = "";
    if (max == 0) {
        return "";
    } else {
        //这段书中有错，修改如下
        for (var i = index-max; i < index; ++i) {
            str += word1[i];
        }
        return str;
    }
}

console.log(lcs('fabbcc', 'abbcc'));

