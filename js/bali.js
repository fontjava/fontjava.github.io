//============================BALI VARIABLE============================//
var BALI = new Array();
//penghujung 
BALI['+r'] = 'ᬃ';
BALI['+ng'] = 'ᬂ';
BALI['+nk'] = 'ᬂ';
BALI['+h'] = 'ᬄ';
BALI['+O'] = '᭄';
//fokal mandiri
BALI['A'] = 'ᬅ';
BALI['I'] = 'ᬇ';
BALI['U'] = 'ᬉ';
BALI['É'] = 'ᬏ';
BALI['O'] = 'ᬑ';

BALI['k'] = 'ᬓ';
BALI['kh'] = 'ᬔ';
BALI['g'] = 'ᬕ';
BALI['gh'] = 'ᬖ';
BALI['ng'] = 'ᬗ';
BALI['c'] = 'ᬘ';
BALI['ch'] = 'ᬙ';
BALI['j'] = 'ᬚ';
BALI['jh'] = 'ᬛ';
BALI['ñ'] = 'ᬜ';
BALI['y'] = 'ᬬ';
BALI['ś'] = 'ᬰ';
BALI['ṭ'] = 'ᬝ';
BALI['ṭh'] = 'ᬞ';
BALI['ḍ'] = 'ᬥ';
BALI['ḍh'] = 'ᬠ';
BALI['ṇ'] = 'ᬡ';
BALI['r'] = 'ᬭ';
BALI['ṣ'] = 'ᬱ';
BALI['t'] = 'ᬓ';
BALI['th'] = 'ᬣ';
BALI['d'] = 'ᬤ';
BALI['dh'] = 'ᬟ';
BALI['n'] = 'ᬦ';
BALI['l'] = 'ᬮ';
BALI['s'] = 'ᬲ';
BALI['p'] = 'ᬧ';
BALI['ph'] = 'ᬨ';
BALI['b'] = 'ᬩ';
BALI['bh'] = 'ᬪ';
BALI['m'] = 'ᬫ';
BALI['w'] = 'ᬯ';
BALI['h'] = 'ᬳ';
BALI['f'] = 'ᬧ᬴';
BALI['v'] = 'ᬯ᬴';
BALI['ḥ'] = 'ᬳ᬴';

BALI['a'] = '';
BALI['i'] = 'ᬶ';
BALI['u'] = 'ᬸ';
BALI['é'] = 'ᬾ';
BALI['è'] = 'ᬾ';
BALI['ê'] = 'ᭂ';
BALI['e'] = 'ᭂ';
BALI['o'] = 'ᭀ';
BALI['ai'] = 'ᬿ';
BALI['uu'] = 'ᬹ';
BALI['ii'] = 'ᬷ';
BALI['aa'] = 'ᬵ';

BALI['+ra'] = 'ᬺ';
BALI['+ya'] = 'ᬐ';
//angka
BALI['1'] = '᭑';
BALI['2'] = '᭒';
BALI['3'] = '᭓';
BALI['4'] = '᭔';
BALI['5'] = '᭕';
BALI['6'] = '᭖';
BALI['7'] = '᭗';
BALI['8'] = '᭘';
BALI['9'] = '᭙';
BALI['0'] = '᭜';
BALI['.'] = '᭞';
BALI[','] = '᭟';
BALI[' '] = '';
//Fungsi Aksara Latin -> Aksara Bali ---------------------------------------//
////////////////////////////////////////////////////////////////////////////
function latin2Bali(iStr)
////////////////////////////////////////////////////////////////////////////
{    
    var iStrBali = ''
    
    iStr = iStr.toLowerCase()

    var iLength = iStr.length
    var idx = 0
    var jump = 0

    var tStr = ''
    var oStr = ''
    var r
    var lkj
    var suku
    var polasuku = '0'
    
    // Pola V, VK, K, KV, KVK, KCV, KCVK:
    
    var KONS = 'ṭh|ḍh|ṭ|ḍ|ś|ṣ|ñ|ṇ|ŋ|ḥ|bh|ch|dh|gh|jh|kh|ph|th|[bcdfghjklmnprstvwy]|ng'
    var VOK  = "ai|aa|ii|uu|[aeiuo]|ê|è|é"
    var REP  = '[yr]'
    var SILABA = '^'
    SILABA += '('+KONS+')?'             // group(1), K
    SILABA += '('+REP+')?'              // group(2), R
    SILABA += '('+VOK+')'               // group(3), V
    SILABA += '('+KONS+')?'              // group(4), K
    SILABA += '('+VOK+'|'+REP+')?'       // group(5), V|R
    KONSONAN = '^('+KONS+')'
    var DIGIT = '^([ ,.0-9]+)'
    
    while (idx < iLength) {
        suku = ''
        r = iStr.match(SILABA)
        if (r !== null) {
            // cari pola:
            if (r[1]) { // != undefined) {
                if (r[4]) { // != undefined) {
                    if (r[2]) { // != undefined) {
                        if (r[5]) { // != undefined) {
                            polasuku = PAT_KRV 
                        } else {
                            polasuku = PAT_KRVK 
                        }
                    } else {
                        if (r[5]) { // != undefined) {
                            polasuku = PAT_KV
                        } else {
                            polasuku = PAT_KVK
                        }
                    }
                } else {
                    if (r[2]) { // != undefined) {
                        polasuku = PAT_KRV
                    } else {
                        polasuku = PAT_KV
                    }
                }
            } else {
                if (r[4]) { // != undefined) {
                    if (r[5]) { // != undefined) {
                        polasuku = PAT_V
                    } else {
                        polasuku = PAT_VK
                    }
                } else {
                    polasuku = PAT_V
                }
            }
            
            // bentuk:
            if (polasuku == PAT_KRVK) {
                suku = r[1] + r[2] + r[3] + r[4]
                silaba  = BALI[r[1]]
                silaba += BALI['+' + r[2] + 'a']
                silaba += BALI[r[3]]
                silaba += sigegBali(r[4])
            } else if (polasuku == PAT_KRV) {
                suku = r[1] + r[2] + r[3]
                silaba  = BALI[r[1]]
                silaba += BALI['+' + r[2] + 'a']
                silaba += BALI[r[3]]
            } else if (polasuku == PAT_KVK) {
                suku = r[1] + r[3] + r[4]
                silaba  = BALI[r[1]]
                silaba += BALI[r[3]]
                silaba += sigegBali(r[4])
            } else if (polasuku == PAT_KV) {
                suku = r[1] + r[3]
                silaba  = BALI[r[1]]
                silaba += BALI[r[3]]
            } else if (polasuku == PAT_VK) {
                suku = r[3] + r[4]
                silaba  = BALI[r[3].toUpperCase()]
                silaba += sigegBali(r[4])
            } else {
                suku = r[3]
                silaba = BALI[suku.toUpperCase()]
            } // end if
            oStr += silaba //+ ':'
            tStr += suku + '(' + polasuku + '):'
            polasuku = PAT_SILABA
        } else {
            r = iStr.match(KONSONAN)
            if (r != null) {
                suku   = r[1]
                if (polasuku == PAT_SILABA)
                {
                    silaba = sigegBali(suku)
                } else {
                    silaba = BALI[suku] + BALI['+O']
                }
                oStr += silaba
                tStr += suku + ";"
            } else {
                r = iStr.match(DIGIT)
                if (r != null) {
                    silaba = ''
                    suku = r[1]
                    l = suku.length
                    i = 0
                    while (i<l) {
                        silaba += BALI[suku.substr(i,1)]
                        i += 1
                    } //end while
                    silaba += ''
                    oStr += silaba
                } else {
                    suku = iStr.substr(0,1)
                    silaba = suku
                    oStr += suku
                }
                //end if
                tStr += suku + '(?)'
            } // end if
            polasuku = PAT_LAIN
        }// end if
        iStr = iStr.substr(suku.length)
        idx += suku.length
    
    }// end while

    //return tStr + '&&' + oStr
    return oStr
    //return tStr
}

//end latin2Bali
