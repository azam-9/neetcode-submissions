class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

    let count = {};

    s = s.toLowerCase().replace(/[^a-z]/g, '');
    t = t.toLowerCase().replace(/[^a-z]/g, '');

    if (s.length !== t.length) return false;

    for (let char of s) {
    count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
    if (!count[char]) return false;
    count[char]--;
    }

    return true;

     /*   if(s.length != t.length){
            return false;
        }
        let map = new Map();
        for(let i=0; i<s.length; i++){
            if(map.has[s[i]]){
                map.set(s[i], map.get(s[i]) + 1);
            }else{
                map.set(s[i], 1);
            }
        }


        for(let j=0; j<t.length; j++){
            if(!map.has(t[j])){
                return false;
            }
            map.set(t[j], map.get(t[j]) -1 );

            if(map.get(t[j] < 0)){
                return false;
            }
        }

        return true;
*/

    }
}
