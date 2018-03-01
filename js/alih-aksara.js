//Variabel Pola Suku Kata (Wanda)-------------------------------------------// 
PAT_V      = 0x01	//Vokal
PAT_VK     = 0x02	//Vokal + Konsonan
PAT_KV     = 0x03	//Konsonan + Vokal
PAT_KVK    = 0x04	//Konsonan + Vokal + Konsonan
PAT_KRV    = 0x05	//Konsonan + Panjingan + Vokal
PAT_KRVK   = 0x06	//Konsonan + Panjingan + Vokal + Konsonan
PAT_SILABA = 0x07	//Konsonan
PAT_KKV    = 0x08	//Konsonan Ganda + Vokal
PAT_LAIN   = 0x00	//Sanesipun

//Variabel jenis Aksara Lokal -------------------------------------------// 
AK_JAWA          = 0x00
AK_UNISUNDA     = 0x01
AK_KAWI      = 0x02
AK_BALI     = 0x03
AK_LAIN      = 0x04

//============================JAWA VARIABLE============================//
////////////////////////////////////////////////////////////////////////////
var JAWA = new Array();

// penghujung
    JAWA['+ng'] = '\uA981';
    JAWA['+nk'] = '\uA981';
    JAWA['+ basa'] = 'ꦨꦰ'; 
    JAWA['+r'] = 'ꦫ꧀';
    JAWA['+h'] = '\uA983';
    JAWA['+O'] = '\uA9C0';
    // vokal mandiri
    JAWA['A'] = '\uA984';
    JAWA['AÈ'] = '\uA984ꦲꦺ';
    JAWA['AÉ'] = '\uA984ꦲꦺ';
    JAWA['AÊ'] = '\uA984ꦲꦼ';
    JAWA['AE'] = '\uA984ꦲꦼ';
    JAWA['AO'] = '\uA984ꦲꦺꦴ';
    JAWA['AA'] = '\uA984\uA9B4';
    JAWA['AI'] = '\uA98D';
    JAWA['AU'] = '\uA98E\uA9B4';
    JAWA['II'] = '\uA986';
    JAWA['UU'] = '\uA988\uA9B4';
    JAWA['O'] = '\uA98E';
    JAWA['É'] = '\uA98C';
    JAWA['EE'] = '\uA98C';
    JAWA['È'] = '\uA98C';
    JAWA['U'] = '\uA988';
    JAWA['I'] = '\uA985';
    JAWA['E'] = '\uA984\uA9BC';
    JAWA['Ê'] = '\uA984\uA9BC';
    JAWA['IE'] = '\uA987';
    JAWA['IA'] = 'ꦅꦪ';
    JAWA['IO'] = 'ꦅꦪꦺꦴ';
    JAWA['IU'] = 'ꦅꦪꦸ';
    JAWA['IAI'] = 'ꦅꦪꦻ';
    JAWA['IAU'] = 'ꦅꦪꦻꦴ';
    JAWA['IÊO'] = 'ꦅꦪꦼꦴ';
    JAWA['IEO'] = 'ꦅꦪꦼꦴ'; 
    JAWA['OA'] = 'ꦎꦮ'; 
    JAWA['OE'] = 'ꦎꦮꦼ'; 
    JAWA['OÊ'] = 'ꦎꦮꦼ'; 
    JAWA['OÈ'] = 'ꦎꦮꦺ'; 
    JAWA['OÈ'] = 'ꦎꦮꦺ'; 
    JAWA['OAI'] = 'ꦎꦮꦻ';  
    JAWA['OAU'] = 'ꦎꦮꦻꦴ'; 
    JAWA['OAO'] = 'ꦎꦮꦺꦴ'; 
    JAWA['UA'] = 'ꦈꦮ'; 
    JAWA['UE'] = 'ꦈꦮꦼ'; 
    JAWA['UÊ'] = 'ꦈꦮꦼ'; 
    JAWA['UÈ'] = 'ꦈꦮꦺ'; 
    JAWA['UÉ'] = 'ꦈꦮꦺ'; 
    JAWA['UAU'] = 'ꦈꦮꦻꦴ'; 
    JAWA['UAI'] = 'ꦈꦮꦻ'; 
    JAWA['UAO'] = 'ꦈꦮꦺꦴ';
    JAWA['EO'] = '\uA984\uA9BC\uA9B4';
    JAWA['\u000A'] = '\u000A꧋';
    JAWA['UBTI'] = 'ꦈꦧ꧀ꦠꦶ';
    JAWA['UCTI'] = 'ꦈꦕ꧀ꦠꦶ';
    JAWA['UDTI'] = 'ꦈꦢ꧀ꦠꦶ';
    JAWA['UGTI'] = 'ꦈꦒ꧀ꦠꦶ';
    JAWA['UJTI'] = 'ꦈꦗ꧀ꦠꦶ';
    JAWA['UKTI'] = 'ꦈꦏ꧀ꦠꦶ';
    JAWA['ULTI'] = 'ꦈꦭ꧀ꦠꦶ';
    JAWA['UMTI'] = 'ꦈꦩ꧀ꦠꦶ';
    JAWA['UNTI'] = 'ꦈꦤ꧀ꦠꦶ';
    JAWA['UPTI'] = 'ꦈꦥ꧀ꦠꦶ';
    JAWA['URTI'] = 'ꦈꦫ꧀ꦠꦶ';
    JAWA['UTTI'] = 'ꦈꦠ꧀ꦠꦶ';
    JAWA['UWTI'] = 'ꦈꦮ꧀ꦠꦶ';
    JAWA['UNGTI'] = 'ꦈꦔ꧀ꦠꦶ';
    JAWA['Ā'] = 'ꦄꦴ';
    JAWA['Ī'] = 'ꦆ';
    JAWA['Ū'] = 'ꦈꦴ';
    JAWA['X'] = 'ꦰ';
    JAWA['O I'] = 'ꦎꦮꦶ';
    JAWA['O A'] = 'ꦎꦮ';
    JAWA['O U'] = 'ꦎꦮꦸ';
    JAWA['O O'] = 'ꦎꦮꦺꦴ';
    JAWA['O É'] = 'ꦎꦮꦺ';
    JAWA['O E'] = 'ꦎꦮꦼ';
    // konsonan ngalagena
    
    JAWA['k'] = '\uA98f';
    JAWA['q'] = '\uA990';
    JAWA['g'] = '\uA992';
    JAWA['š'] = 'ꦱ꦳';
    JAWA['z'] = 'ꦗ꦳';
    JAWA['dz'] = 'ꦢ꦳';
    JAWA['ḥ'] = 'ꦲ꦳';
    JAWA['\''] = 'ꦔ꦳';
    JAWA['ng'] = '\uA994';
    JAWA['c'] = '\uA995';
    JAWA['j'] = '\uA997';
    JAWA['nnyy'] = '\uA99A';
    JAWA['t'] = '\uA9A0';
    JAWA['d'] = '\uA9A2';
    JAWA['n'] = '\uA9A4';
    JAWA['p'] = '\uA9A5';
    JAWA['f'] = '\uA9A5\uA9B3';
    JAWA['v'] = '\uA9AE\uA9B3';
    JAWA['b'] = '\uA9A7';
    JAWA['m'] = '\uA9A9';
    JAWA['y'] = '\uA9AA';
    JAWA['r'] = '\uA9AB';
    JAWA['l'] = '\uA9AD';
    JAWA['w'] = '\uA9AE';
    JAWA['s'] = '\uA9B1';
    JAWA['bh'] = '\uA9A8'
    JAWA['sb'] = 'ꦰ꧀ꦧ';
    JAWA['sbh'] = 'ꦰ꧀ꦨ'
    JAWA['kh'] = '\uA991';
    JAWA['gh'] = '\uA993';
    JAWA['th'] = '\uA9A1';
    JAWA['ch'] = '\uA996';
    JAWA['h'] = '\uA9B2';
    JAWA['ṣ'] = '\uA9B0'; 
    JAWA['sur'] = 'ꦯꦸꦫ'; 
    JAWA['sir'] = 'ꦯꦶ'; 
    JAWA['sor'] = 'ꦯꦺꦴꦫ'; 
    JAWA['ser'] = 'ꦯꦼꦫ'; 
    JAWA['sair'] = 'ꦯꦻꦫ'; 
    JAWA['saur'] = 'ꦯꦻꦴꦫ'; 
    JAWA['sêr'] = 'ꦯꦼꦫ'; 
    JAWA['sèr'] = 'ꦯꦺꦫ';  
    JAWA['sér'] = 'ꦯꦺꦫ';
    JAWA['syr'] = 'ꦯꦾꦫ';
    JAWA['sr'] = 'ꦯꦿ'; 
    JAWA['sl'] = 'ꦯ꧀ꦭ';  
    JAWA['sw'] = 'ꦯ꧀ꦮ'; 
    JAWA['sk'] = 'ꦰ꧀ꦏ';  
    JAWA['sp'] = 'ꦰ꧀ꦥ'; 
    JAWA['sn'] = 'ꦰ꧀ꦤ';   
    JAWA['ph'] = '\uA9A6';
    JAWA['dh'] = '\uA9A3';
    JAWA['jh'] = '\uA999';
    JAWA['ṭh'] = '\uA99C';
    JAWA['ŕ'] = '\uA9AC';
    JAWA['ṇ'] = '\uA99F';
    JAWA['ṇ'] = '\uA99F';
    JAWA['ç'] = '\uA9AF';
    JAWA['ś'] = '\uA9AF';
    JAWA['jn'] = '\uA998';
    JAWA['sjn'] = '\uA9AF\uA9C0\uA998';
    JAWA['sj'] = '\uA9AF\uA9C0\uA997';
    JAWA['sch'] = '\uA9AF\uA9C0\uA996';
    JAWA['sc'] = '\uA9AF\uA9C0\uA995';
    JAWA['sjh'] = '\uA9AF\uA9C0\uA999';
    JAWA['nc'] = '\uA99A\uA9C0\uA995';
    JAWA['nch'] = '\uA99A\uA9C0\uA996';
    JAWA['nj'] = '\uA99A\uA9C0\uA997';
    JAWA['njn'] = '\uA99A\uA9C0\uA998';
    JAWA['njh'] = '\uA99A\uA9C0\uA999';
    JAWA['n c'] = '\uA9A4\uA9C0\uA995';
    JAWA['n d'] = '\uA9A4\uA9C0\uA996';
    JAWA['s j'] = '\uA9A4\uA9C0\uA997';
    JAWA['n j'] = '\uA9A4\uA9C0\uA999';
    JAWA['k s'] = '\uA98F\uA9C0\uA9B1';    
    JAWA['hb'] = '\uA9B2\uA9C0\uA9A7';    
    JAWA['hc'] = '\uA9B2\uA9C0\uA995';    
    JAWA['hch'] = '\uA9B2\uA9C0\uA996';    
    JAWA['hg'] = '\uA9B2\uA9C0\uA992';    
    JAWA['hgh'] = '\uA9B2\uA9C0\uA993';    
    JAWA['hbh'] = '\uA9B2\uA9C0\uA9A8';    
    JAWA['hj'] = '\uA9B2\uA9C0\uA997';    
    JAWA['hjh'] = '\uA9B2\uA9C0\uA999';    
    JAWA['ht'] = '\uA9B2\uA9C0\uA9A0';    
    JAWA['hth'] = '\uA9B2\uA9C0\uA9A1';    
    JAWA['hdh'] = '\uA9B2\uA9C0\uA9A3';    
    JAWA['hp'] = '\uA9B2\uA9C0\uA9A5';    
    JAWA['hph'] = '\uA9B2\uA9C0\uA9A6';    
    JAWA['hs'] = '\uA9B2\uA9C0ꦰ';    
    JAWA['hṣ'] = '\uA9B2\uA9C0\uA9B0';    
    JAWA['hḍ'] = '\uA9B2\uA9C0\uA99D';    
    JAWA['hḍh'] = '\uA9B2\uA9C0\uA99E';    
    JAWA['hk'] = '\uA9B2\uA9C0\uA98F';    
    JAWA['hkh'] = '\uA9B2\uA9C0\uA991';    
    JAWA['hṭ'] = '\uA9B2\uA9C0\uA99B';    
    JAWA['hṭh'] = '\uA9B2\uA9C0\uA99C';
    JAWA['ks'] = '\uA98F\uA9C0\uA9B0';
    JAWA['hm'] = '\uA9B2\uA9C0\uA9A9';
    JAWA['hl'] = '\uA9B2\uA9C0\uA9AD';
    JAWA['hn'] = '\uA9B2\uA9C0\uA9A4';
    JAWA['hd'] = '\uA9B2\uA9C0\uA9A2';
    JAWA['hq'] = 'ꦲ꧀ꦐ';
    JAWA['hf'] = 'ꦲ꧀ꦥ꦳';
    JAWA['ngf'] = 'ꦔ꧀ꦥ꦳';
    JAWA['ngv'] = 'ꦔ꧀ꦮ꦳';
    JAWA['ngj'] = 'ꦔ꧀ꦗ';
    JAWA['ngbh'] = 'ꦔ꧀ꦨ';
    JAWA['ngh'] = 'ꦔ꧀ꦲ';
    JAWA['ngñy'] = 'ꦔ꧀ꦚ';
    JAWA['ngnny'] = 'ꦔ꧀ꦚ';
    JAWA['ngsh'] = 'ꦔ꧀ꦚ';  
    JAWA['hw'] = '\uA9B2\uA9C0\uA9AE';
    JAWA['ngb'] = '\uA994꧀ꦧ';
    JAWA['ngc'] = '\uA994꧀ꦕ';
    JAWA['ngd'] = '\uA994꧀ꦢ';
    JAWA['ngg'] = '\uA994꧀ꦒ';
    JAWA['ngl'] = '\uA994꧀ꦭ';
    JAWA['ngn'] = 'ꦔ꧀ꦤ';
    JAWA['ngṣ'] = 'ꦔ꧀ꦰ';
    JAWA['ngp'] = 'ꦔ꧀ꦥ';
    JAWA['ngph'] = 'ꦔ꧀ꦦ';
    JAWA['ngdh'] = 'ꦔ꧀ꦣ';
    JAWA['ngḍ'] = 'ꦔ꧀ꦝ';
    JAWA['ngḍh'] = 'ꦔ꧀ꦞ';
    JAWA['ngm'] = 'ꦔ꧀ꦩ';
    JAWA['ngth'] = 'ꦔ꧀ꦡ';
    JAWA['ngṭ'] = 'ꦔ꧀ꦛ';
    JAWA['ngṭh'] = 'ꦔ꧀ꦜ';
    JAWA['ngjh'] = 'ꦔ꧀ꦙ';
    JAWA['nggh'] = 'ꦔ꧀ꦓ';
    JAWA['ngch'] = 'ꦔ꧀ꦖ';
    JAWA['ngkh'] = 'ꦔ꧀ꦑ';
    JAWA['aia'] = 'ꦻꦪ';
    JAWA['ñy'] = 'ꦚ';
    JAWA['nk'] = 'ꦔ';
    JAWA['ngk'] = 'ꦔ꧀ꦏ';
    JAWA['dars'] = 'ꦢꦫ꧀ꦯ'; 
    JAWA['dors'] = 'ꦢꦺꦴꦫ꧀ꦯ'; 
    JAWA['durs'] = 'ꦢꦸꦫ꧀ꦯ'; 
    JAWA['ders'] = 'ꦢꦼꦫ꧀ꦯ'; 
    JAWA['dêrs'] = 'ꦢꦼꦫ꧀ꦯ'; 
    JAWA['dèrs'] = 'ꦢꦺꦫ꧀ꦯ'; 
    JAWA['dérs'] = 'ꦢꦺꦫ꧀ꦯ'; 
    JAWA['dairs'] = 'ꦢꦻꦫ꧀ꦯ'; 
    JAWA['daurs'] = 'ꦢꦻꦴꦫ꧀ꦯ'; 
    JAWA['deors'] = 'ꦢꦼꦴꦫ꧀ꦯ';      

 
    JAWA['rdhjh'] = 'ꦫ꧀ꦣ꧀ꦙ';
    JAWA['rḍhjh'] = 'ꦫ꧀ꦞ꧀ꦙ';  
    JAWA['rdjh'] = 'ꦫ꧀ꦢ꧀ꦙ';
    JAWA['rḍjh'] = 'ꦫ꧀ꦞ꧀ꦙ';  
    JAWA['rdhj'] = 'ꦫ꧀ꦣ꧀ꦗ';
    JAWA['rḍhj'] = 'ꦫ꧀ꦞ꧀ꦗ'; 
    JAWA['rdj'] = 'ꦫ꧀ꦢ꧀ꦗ'; 
    JAWA['rḍj'] = 'ꦫ꧀ꦞ꧀ꦗ'; 
    JAWA['ny'] = 'ꦤꦾ';
    JAWA['ngs'] = '\uA994꧀ꦱ';
    JAWA['ngt'] = '\uA994꧀ꦠ';
    JAWA['ngw'] = '\uA994꧀ꦮ';
    JAWA['ngy'] = 'ꦔꦾ';
    JAWA['ngś'] = 'ꦔ꧀ꦚ';
    JAWA['rt'] = '‌ꦫ꧀ꦠ꧀ꦠ'; 
    JAWA['rth'] = 'ꦫ꧀ꦡ'; 
    JAWA['rd'] =  'ꦫ꧀ꦢ꧀ꦢ'; 
    JAWA['rdh'] = 'ꦫ꧀ꦝ'; 
    JAWA['rk'] = 'ꦫ꧀ꦏ꧀ꦏ';
    JAWA['rḍ'] = 'ꦫ꧀ꦢ꧀ꦝ'; 
    JAWA['rḍh'] = 'ꦫ꧀ꦢ꧀ꦞ'; 
    JAWA['rg'] = 'ꦫ꧀ꦒ꧀ꦒ'; 
    JAWA['rch'] = 'ꦫ꧀ꦕ꧀ꦖ';
 
    JAWA['rṭ'] = 'ꦫ꧀ꦠ꧀ꦛ'; 
    JAWA['rṭh'] = 'ꦫ꧀ꦠ꧀ꦛ';  
 
    JAWA['rc'] = 'ꦫ꧀ꦕ꧀ꦕ'; 
    JAWA['rw'] = 'ꦫ꧀ꦮ꧀ꦮ'; 
    JAWA['ry'] = 'ꦫ꧀ꦪꦾ';
 
    JAWA['rn'] = 'ꦫ꧀ꦟ꧀ꦤ'; 
    JAWA['rp'] = 'ꦫ꧀ꦥ꧀ꦥ'; 
    JAWA['rm'] = 'ꦫ꧀ꦩ꧀ꦩ'; 
    JAWA['rl'] = 'ꦫ꧀ꦭ꧀ꦭ'; 
    JAWA['rj'] = 'ꦫ꧀ꦗ꧀ꦗ'; 
    JAWA['rb'] = 'ꦫ꧀ꦧ꧀ꦧ'; 
    JAWA['rq'] = 'ꦫ꧀ꦏ꧀ꦐ';
    JAWA['dhh'] = 'ꦝ';
    JAWA['thh'] = 'ꦛ'; 
    JAWA['ps'] = 'ꦥ꧀ꦰ';
    JAWA['bs'] = 'ꦧ꧀ꦰ';
 
    JAWA['rbh'] = 'ꦫ꧀ꦨ'; 
    JAWA['rs'] = 'ꦫ꧀ꦰ'; 
    JAWA['rsh'] = 'ꦫ꧀ꦯ'; 
    JAWA['rh'] = 'ꦫ꧀ꦲ';  
    JAWA['rgh'] = 'ꦫ꧀ꦓ'; 
    JAWA['rjh'] = 'ꦫ꧀ꦙ'; 
    JAWA['rkh'] = 'ꦫ꧀ꦑ'; 
    JAWA['rph'] = 'ꦫ꧀ꦦ'; 
    JAWA['rnh'] = 'ꦫ꧀ꦟ'; 
    JAWA['id'] = 'ꦮꦶꦝ';
    JAWA['snh'] = 'ꦰ꧀ꦟ';
    JAWA['s nh'] = 'ꦱ꧀ꦟ';
    JAWA['rf'] = 'ꦫ꧀ꦥ꧀ꦥ꦳';
    JAWA['fv'] = 'ꦫ꧀ꦮ꧀ꦮ꦳'; 

    JAWA['sṭ'] = 'ꦰ꧀ꦛ';
    JAWA['sṭh'] = 'ꦰ꧀ꦜ';
    JAWA['sḍ'] = 'ꦰ꧀ꦝ';
    JAWA['sḍh'] = 'ꦰ꧀ꦞ';
    JAWA['ḍh'] = '\uA99E';
    JAWA['ḍ'] = '\uA99D';
    JAWA['nḍ'] = '\uA99F\uA9C0\uA99D';
    JAWA['nḍh'] = '\uA99F\uA9C0\uA99E';
    JAWA['nṭ'] = '\uA99F\uA9C0\uA99B';
    JAWA['nṭh'] = '\uA99F\uA9C0\uA99C';
    JAWA['nny'] = '\uA99A';
    JAWA['ṭ'] = '\uA99B'; 
    JAWA['ñ'] = 'ꦚ'; 
    JAWA['ḥ'] = '\uA9B2\uA9B3'; 
    
    // konsonan sisip
    JAWA['+ya'] = '\uA9BE';
    JAWA['+ra'] = 'ꦿ';
    JAWA['+re'] = 'ꦽ';
  
    // suara vokal 
    JAWA['a'] = '';
    JAWA['ā'] = 'ꦴ';
    JAWA['ī'] = 'ꦷ';
    JAWA['ū'] = 'ꦹ'; 
    JAWA['ꦺꦴ'] = 'o'; 
    JAWA['ao'] = 'ꦲꦺꦴ';   
    JAWA[' a'] = ''; 
    JAWA[' i'] = 'ꦶ'; 
    JAWA[' u'] = 'ꦸ'; 
    JAWA[' é'] = 'ꦺ'; 
    JAWA[' è'] = 'ꦺ'; 
    JAWA[' ê'] = 'ꦼ'; 
    JAWA[' e'] = 'ꦼ'; 
    JAWA[' o'] = 'ꦺꦴ';
    JAWA['aa'] = '\uA9B4';
    JAWA['a a'] = '\uA9B4';
    JAWA['a u'] = 'ꦮꦸ';
    JAWA['a au'] = 'ꦴꦎꦴ';
    JAWA['a e'] = 'ꦮꦼ';
    JAWA['a è'] = 'ꦮꦺ';
    JAWA['a é'] = 'ꦮꦺ';
    JAWA['a ê'] = 'ꦮꦼ';
    JAWA['a o'] = 'ꦮꦺꦴ';
    JAWA['ii'] = '\uA9B7';
    JAWA['a i'] = 'ꦮꦶ';  
    JAWA['i i'] = '\uA9B7';
    JAWA['uu'] = '\uA9B9';
    JAWA['u u'] = '\uA9B9';
    JAWA['u i'] = '\uA9C0\uA9AE\uA9B6';
    JAWA['u o'] = '\uA9C0\uA9AE\uA9BA\uA9B4';
    JAWA['u a'] = '\uA9C0\uA9AE';
    JAWA['u au'] = 'ꦸꦎꦴ';
    JAWA['ai au'] = 'ꦻꦎꦴ';
    JAWA['i au'] = 'ꦶꦎꦴ';
    JAWA['e au'] = 'ꦼꦎꦴ';
    JAWA['é au'] = 'ꦺꦎꦴ';
    JAWA['o au'] = 'ꦺꦴꦎꦴ';
    JAWA['u è'] = '\uA9C0\uA9AE\uA9BA';
    JAWA['u é'] = '\uA9C0\uA9AE\uA9BA';
    JAWA['u e'] = '\uA9C0\uA9AE\uA9BC';
    JAWA['u ê'] = '\uA9C0\uA9AE\uA9BC'; 
    JAWA['iau'] = 'ꦾꦻꦴ';
    JAWA['iu'] = 'ꦶꦪꦸ'; 
    JAWA['iè'] = 'ꦶꦪꦺ'; 
    JAWA['ié'] = 'ꦶꦪꦺ'; 
    JAWA['io'] = 'ꦶꦪꦺꦴ'; 
    JAWA['iê'] = 'ꦶꦪꦼ'; 
    JAWA['ie'] = 'ꦶꦪꦼ';
    JAWA['i a'] = '\uA9BE';
    JAWA['i u'] = '\uA9BE\uA9B8';
    JAWA['i o'] = '\uA9BE\uA9BA\uA9B4';
    JAWA['i è'] = '\uA9BE\uA9BA';
    JAWA['i é'] = '\uA9BE\uA9BA';
    JAWA['i e'] = '\uA9BE\uA9BC';
    JAWA['i ê'] = '\uA9BE\uA9BC';
    JAWA['i'] = '\uA9B6';
    JAWA['u'] = '\uA9B8';
    //'ï¿½'] = '\u200c';
    JAWA['ei'] = 'ꦏꦶ';
    JAWA['o'] = '\uA9BA\uA9B4';
    JAWA['e'] = '\uA9BC'; 
    JAWA['ea'] = 'ꦏ'; 
    JAWA['êa'] = 'ꦏ';
    JAWA['é'] = '\uA9BA';
    JAWA['è'] = '\uA9BA';
    JAWA['ê'] = '\uA9BC';
    JAWA['ai'] = '\uA9BB';
    JAWA['au'] = '\uA9BB\uA9B4';
    JAWA['au i'] = 'ꦻꦴꦮꦶ';
    JAWA['au au'] = 'ꦻꦴꦎꦴ';
    JAWA['aoa'] = 'ꦲꦺꦴꦮ';
    JAWA['aoi'] = 'ꦲꦺꦴꦮꦶ';
    JAWA['aou'] = 'ꦲꦺꦴꦮꦸ';
    JAWA['aoé'] = 'ꦲꦺꦴꦮꦺ';
    JAWA['aoe'] = 'ꦲꦺꦴꦮꦼ';
    JAWA['aoai'] = 'ꦲꦺꦴꦮꦻ';
    JAWA['au a'] = 'ꦻꦴꦮ';
    JAWA['au u'] = 'ꦻꦴꦮꦸ';
    JAWA['ao a'] = 'ꦲꦺꦴꦄ';
    JAWA['ao i'] = 'ꦲꦺꦴꦅ';
    JAWA['ao u'] = 'ꦲꦺꦴꦈ';
    JAWA['ao o'] = 'ꦲꦺꦴꦎ';
    JAWA['ao é'] = 'ꦲꦺꦴꦌ';
    JAWA['ao e'] = 'ꦲꦺꦴꦄꦼ';
    JAWA['ao ai'] = 'ꦲꦺꦴꦍ';
    JAWA['ao aé'] = 'ꦲꦺꦴꦮꦲꦺ';
    JAWA['ao ae'] = 'ꦲꦺꦴꦮꦲꦼ';
    JAWA['ao au'] = 'ꦲꦺꦴꦎꦴ';
    JAWA['au o'] = 'ꦻꦴꦮꦺꦴ';
    JAWA['au è'] = 'ꦻꦴꦺꦶ';
    JAWA['au é'] = 'ꦻꦴꦮꦺ';
    JAWA['au ê'] = 'ꦻꦴꦮꦼ';
    JAWA['au e'] = 'ꦺꦴꦮꦼ';
    JAWA['ai i'] = 'ꦻꦮꦶ';
    JAWA['ai u'] = 'ꦻꦪꦸ';
    JAWA['ai o'] = 'ꦻꦪꦺꦴ';
    JAWA['ai è'] = 'ꦻꦮꦺ';
    JAWA['ai é'] = 'ꦻꦮꦺ';
    JAWA['ai ê'] = 'ꦻꦮꦼ';
    JAWA['ai e'] = 'ꦻꦮꦼ';
    JAWA['ai a'] = 'ꦻꦪ';
    JAWA['aui'] = 'ꦻꦴꦮꦶ';
    JAWA['aua'] = 'ꦻꦴꦮ';
    JAWA['auu'] = 'ꦻꦴꦮꦸ';
    JAWA['auo'] = 'ꦻꦴꦮꦺꦴ';
    JAWA['auè'] = 'ꦻꦴꦮꦺ';
    JAWA['aué'] = 'ꦻꦴꦮꦺ';
    JAWA['auê'] = 'ꦻꦴꦮꦼ';
    JAWA['aue'] = 'ꦺꦴꦮꦼ';
    JAWA['aii'] = 'ꦻꦮꦶ';
    JAWA['aiu'] = 'ꦻꦪꦸ';
    JAWA['aio'] = 'ꦻꦪꦺꦴ';
    JAWA['aiè'] = 'ꦻꦪꦺ';
    JAWA['aié'] = 'ꦻꦪꦺ';
    JAWA['aiê'] = 'ꦻꦪꦼ';
    JAWA['aie'] = 'ꦻꦪꦼ';
    JAWA['aia'] = 'ꦻꦪ'; 
    JAWA['oi'] = 'ꦺꦴꦲꦶ'; 
    JAWA['oai'] = 'ꦺꦴꦮꦻ'; 
    JAWA['oau'] = 'ꦺꦴꦮꦻꦴ'; 
    JAWA['oêo'] = 'ꦺꦴꦮꦼꦴ'; 
    JAWA['oeo'] = 'ꦺꦴꦮꦼꦴ';
    JAWA['êo'] = 'ꦼꦴ';
    JAWA['eo'] = 'ꦼꦴ';
    JAWA['éo'] = 'ꦺꦪꦺꦴ';
    JAWA['èo'] = 'ꦺꦪꦺꦴ';
    JAWA['èu'] = 'ꦺꦪꦸ';
    JAWA['éu'] = 'ꦺꦪꦸ';
    JAWA['ia'] = 'ꦶꦪ';
    JAWA['ua'] = 'ꦸꦮ';
    JAWA['èa'] = 'ꦺꦪ';
    JAWA['éa'] = 'ꦺꦪ';  
    JAWA['ui'] = 'ꦸꦮꦶ'; 
    JAWA['ei'] = 'ꦼꦮꦶ'; 
    JAWA['êi'] = 'ꦼꦮꦶ'; 
    JAWA['èi'] = 'ꦺꦮꦶ'; 
    JAWA['éi'] = 'ꦺꦮꦶ'; 
    JAWA['uè'] = 'ꦸꦮꦺ'; 
    JAWA['ué'] = 'ꦸꦮꦺ'; 
    JAWA['ue'] = 'ꦸꦮꦼ'; 
    JAWA['uê'] = 'ꦸꦮꦼ';

    JAWA['è a'] = 'ꦺꦮ';

    JAWA['è è'] = 'ꦺꦮꦺ';

    JAWA['é é'] = 'ꦺꦮꦺ';

    JAWA['è i'] = 'ꦺꦮꦶ';

    JAWA['é i'] = 'ꦺꦮꦶ';

    JAWA['é a'] = 'ꦺꦾ';

    JAWA['è o'] = 'ꦺꦮꦺꦴ';

    JAWA['é o'] = 'ꦺꦮꦺꦴ';

    JAWA['è u'] = 'ꦺꦮꦸ';
    JAWA['é u'] = 'ꦺꦮꦸ';
    JAWA['e a'] = 'ꦼꦮ';
    JAWA['e o'] = 'ꦼꦮꦺꦴ';

    JAWA['e é'] = 'ꦼꦮꦺ';
    JAWA['e è'] = 'ꦼꦮꦺ';
    JAWA['ꦺꦴ'] = 'o';
    JAWA['e u'] = 'ꦼꦮꦸ';

    JAWA['e i'] = 'ꦼꦮꦶ';
    JAWA['ee'] = 'ꦺ';

    JAWA['è e'] = 'ꦺꦮꦼ';
    JAWA['è e'] = 'ꦺꦮꦼ'; 
    JAWA['oa'] = 'ꦺꦴꦮ';
    JAWA['ou'] = 'ꦺꦴꦮꦸ'; 
    JAWA['oe'] = 'ꦺꦴꦮꦼ'; 
    JAWA['oè'] = 'ꦺꦴꦮꦺ'; 
    JAWA['oé'] = 'ꦺꦴꦮꦺ'; 
    JAWA['oê'] = 'ꦺꦴꦮꦼ'; 
    JAWA['oo'] = 'ꦺꦴꦮꦺꦴ';  
    JAWA['o a'] = 'ꦺꦴꦮ'; 
    JAWA['o i'] = 'ꦺꦴꦮꦶ'; 
    JAWA['o u'] = 'ꦺꦴꦮꦸ'; 
    JAWA['o e'] = 'ꦺꦴꦮꦼ'; 
    JAWA['o è'] = 'ꦺꦴꦮꦺ'; 
    JAWA['o é'] = 'ꦺꦴꦮꦺ'; 
    JAWA['o ê'] = 'ꦺꦴꦮꦼ'; 
    JAWA['o o'] = 'ꦺꦴꦮꦺꦴ';
    JAWA[' ai'] = 'ꦻ'; 
    JAWA[' au'] = 'ꦻꦴ'; 
    JAWA[' aè'] = 'ꦮꦺ'; 
    JAWA[' aé'] = 'ꦮꦺ'; 
    JAWA[' aê'] = 'ꦮꦼ'; 
    JAWA[' ae'] = 'ꦮꦼ';
    JAWA['aè'] = 'ꦲꦺ';
    JAWA['aé'] = 'ꦲꦺ';
    JAWA['ae'] = 'ꦲꦼ';
    JAWA['aê'] = 'ꦲꦼ'; 
    JAWA['re'] = 'ꦉ'; 
    JAWA[' le'] = '꧀ꦊ'; 
    JAWA[' lê'] = '꧀ꦊ';
    JAWA[' leo'] = 'ꦋ'; 
    JAWA['i le'] = 'ꦶꦊ';
    JAWA['u le'] = 'ꦸꦊ';
    JAWA['o le'] = 'ꦺꦴꦊ';
    JAWA['ai le'] = 'ꦻꦊ';
    JAWA['é le'] = 'ꦺꦊ';
    JAWA['è le'] = 'ꦺꦊ';
    JAWA['i lê'] = 'ꦶꦊ';
    JAWA['u lê'] = 'ꦸꦊ';
    JAWA['o lê'] = 'ꦺꦴꦊ';
    JAWA['a lê'] = 'ꦊ';
    JAWA['a le'] = 'ꦊ';
    JAWA['ai lê'] = 'ꦻꦊ';
    JAWA['au le'] = 'ꦻꦴꦊ';
    JAWA['au lê'] = 'ꦻꦴꦊ';
    JAWA['é lê'] = 'ꦺꦴꦊ';
    JAWA['è lê'] = 'ꦺꦴꦊ';
    JAWA['e le'] = 'ꦺꦴꦊ';
    JAWA['ê le'] = 'ꦺꦴꦊ';
    JAWA['ê lê'] = 'ꦺꦴꦊ';
    JAWA['ê lê'] = 'ꦺꦴꦊ';
    JAWA['rê'] = 'ꦉ';
    JAWA['ubti'] = 'ꦹꦧ꧀ꦠꦶ';
    JAWA['ucti'] = 'ꦹꦕ꧀ꦠꦶ';
    JAWA['udti'] = 'ꦹꦢ꧀ꦠꦶ';
    JAWA['ugti'] = 'ꦹꦒ꧀ꦠꦶ';
    JAWA['ujti'] = 'ꦹꦗ꧀ꦠꦶ';
    JAWA['ukti'] = 'ꦹꦏ꧀ꦠꦶ';
    JAWA['ulti'] = 'ꦹꦭ꧀ꦠꦶ';
    JAWA['umti'] = 'ꦹꦩ꧀ꦠꦶ';
    JAWA['upti'] = 'ꦹꦥ꧀ꦠꦶ';

    JAWA['x'] = 'ꦏ꧀ꦰ';
    JAWA['urti'] = 'ꦹꦫ꧀ꦠ꧀ꦠꦶ';

    JAWA['utti'] = 'ꦹꦠ꧀ꦠ';
    JAWA['uwti'] = 'ꦹꦮ꧀ꦠꦶ';
    JAWA['unti'] = 'ꦹꦤ꧀ꦠꦶ';
    JAWA['ungti'] = 'ꦹꦔ꧀ꦠꦶ';
    JAWA['bukti'] = 'ꦨꦹꦏ꧀ꦠꦶ';
    JAWA['bakti'] = 'ꦨꦏ꧀ꦠꦶ';
    JAWA['sakti'] = 'ꦯꦏ꧀ꦠꦶ';
    JAWA['ungti'] = 'ꦹꦔ꧀ꦠꦶ';
      
    // angka

    JAWA['0'] = '꧐';
    JAWA['1'] = '꧑';
    JAWA['2'] = '꧒';
    JAWA['3'] = '꧓';
    JAWA['4'] = '꧔';
    JAWA['5'] = '꧕';
    JAWA['6'] = '꧖';
    JAWA['7'] = '꧗';
    JAWA['8'] = '꧘';
    JAWA['9'] = '꧙';
    JAWA['.'] = '\uA9C9';
    JAWA[','] = '\uA9C8'; 
    JAWA['\u0020'] = '';
    JAWA['\u200c'] = '\u200c';
    JAWA['\u0028'] = '\uA9CC';
    JAWA['\u0029'] = '\uA9CD';
    JAWA['\u007B'] = '꧁';
    JAWA['\u007C'] = '\uA9CB';
    JAWA['\u007D'] = '꧂';
    JAWA['*'] = '꧃';
    JAWA['**'] = '꧄';
    JAWA['***'] = '꧅';
    JAWA[' '] = '꧋';   

//Fungsi Panyigeg Wanda Jawa-------------------------------------------------//
////////////////////////////////////////////////////////////////////////////
function sigegJawa (aksara)
////////////////////////////////////////////////////////////////////////////
{
    var retval = ''

    if (aksara == 'ng' || aksara == 'nk' || aksara == ' basa' || aksara == ' yasmi' || aksara == 'r' || aksara == ' omahku' || aksara == ' omahmu' || aksara == 'ra' || aksara == 'h') {
        retval = JAWA['+' + aksara]
    } else {
        retval = JAWA[aksara] + JAWA['+O']
    }
    
    return retval
} // end sigegJawa (...)


//Fungsi Panyigeg Wanda Jawa-------------------------------------------------//
function sigegBali (aksara)
////////////////////////////////////////////////////////////////////////////
{
    var retval = ''

    if (aksara == 'ng' || aksara == 'nk' || aksara == ' basa' || aksara == ' yasmi' || aksara == 'r' || aksara == 'h') {
        retval = BALI['+' + aksara]
    } else {
        retval = BALI[aksara] + BALI['+O']
    }
    
    return retval
} // end sigegBali (...)

//Fungsi Panyigeg Wanda Kawi-------------------------------------------------//
function sigegKawi(aksara)
{
    var retval = ''

    if (aksara == 'ng' || aksara == 'nk' || aksara == ' basa' || aksara == ' yasmi' || aksara == 'r' || aksara == ' omahku' || aksara == ' omahmu' || aksara == 'ra' || aksara == 'h') {
        retval = KAWI['+' + aksara]
    } else {
        retval = KAWI[aksara] + KAWI['+O']
    }
    
    return retval
} // end sigegKawi

//Fungsi Aksara Latin -> Aksara Jawa ---------------------------------------//
function sigegSunda (aksara) {
    var retval = ''

    if (aksara == 'h' || aksara == 'r' || aksara == 'ng') {
        retval = UNISUNDA['+' + aksara]
    } else {
        retval = UNISUNDA[aksara] + UNISUNDA['+O']
    }
    
    return retval
}

////////////////////////////////////////////////////////////////////////////
function latin2Jawa(iStr)
////////////////////////////////////////////////////////////////////////////
{    
    var iStrJawa = ''
    
    iStr = iStr.toLowerCase()

    var iLength = iStr.length
    var idx = 0
    var jump = 0

    var tStr = ''
    var oStr = ''
    var r
    var silaba
    var suku
    var polasuku = '0'
    
    // Pola V, VK, K, KV, KVK, KCV, KCVK:
    
    var KONS = 'ngnny|nk| basa|id|snh|s nh|aia|dhh|thh|dars|durs|dors|ders|dêrs|dèrs|dérs|dairs|daurs|deors|rḍhjh|rḍjh|rdhjh|rḍhjh|rḍhj|rḍj|rdhj|rdj|rdh|rjh|rsh|rgh|rbh|rkh|rch|rph|rnh|rth|saur|sair|sur|sbh|sb|sor|ser|sèr|sér|sêr|syr|x|z|sk|sr|sp|bs|ps|rd|rs|rf|rv|rq|rh|rm|rl|rj|rp|rn|ry|rw|rc|rg|rk|rd|rt|ŕ|ngbh|ngkh|ngdh|ngth|ngch|ngjh|nggh|ngph|ngsh|ny|ngk|ngb|ngc|ngd|ngg|ngh|ngn|ngl|ngs|ngm|ngp|ngn|ngt|ngw|ngj|ngy|ngf|ngv|hdh|hch|hbh|sch|hgh|hjh|hkh|hph|hth|nch|nc|dh|hw|hs|hp|ht|hk|hg|hc|hq|hb|dz|kh|ui|bh|ea|êa|th|gh|hd|hl|hm|hn|n c|ch|ks|sc|ś|ph|jn|jh|sjh|sj|sn|sl|sw|[b-dfgj-mpqtv-z]|nny|njh|njn|nj|rḍh|rṭh|nṭh|rṭ|nṭ|nḍh|ngḍh|ngṭh|ngñy|ngḍ|ngṭ|ngṣ|š|ngś|hḍ|hṭ|nḍ|rḍ|hṣ|nṭ|ṇ|hṭ|hḍ|ḍh|ṭh|ḥ|ṇ|ṭ|ḍ|ṣ|j|hḍh|hṭh|sṭh|sḍh|sḍ|sṭ|nnyy|ng|h|ś|hñ|ñy|ñ|s|\'|r|n'
    var VOK  = "bukti|sakti|ungti|bakti|aoai|ao ai|aia|aoa|aoi|aou|aoé|aoe|ao a|ao o|ao i|ao u|ao é|ao e|ao ai|ao au|i au|o au|é au|u au|e au|ai au|a au|ia i|ubti|ucti|udti|ugti|ujti|ukti|ulti|umti|unti|upti|urti|utti|uwti|ao|ia o|ia u|ia è|ia é|ia e|ia ê| leo| lê| le|a le|a lê|i lê|i le|o le|o lê|é le|è le|ai le|ai lê|au le|au lê|u le|u lê|é lê|è lê|ê lê|ê le|e le|ê lê|re|rê| ia|aui|ee|aua|auo|auè|aué|auê|aue|aio|aiu|aiè|aié|aiê|aie|uai|uao|uau|oai|oau|oao|ao|aè|aé|aê|ae|ua|oa|ue|uê|uè|ué|oe|oê|oè|oé|o o|o a|o i|o u|o ê|o e|o è|oé|au i|au a|au o|au è|au é|au ê|au e|ai a|ai o|ai u|ai è|ai é|ai ê|ai e| ao| au| aè| aé| ae aê| ai|\u000A|ui|uè|ué|uê|ue|êi|ei|èi|éi|iu|iè|ié|iê|ie|io|oo|oa|ou|oê|oe|oè|oé|ie|a i|èa|éa|è e|é e|è a|é a|è o|é o|è u|é u|è i|é i|è è|é é|e a|e o|e u|e è|e é|e i| i|a u|a o|a è|a é|a ê|a e| i| u| o| é| è| ê| e| a|ai|au|éi|ei|aa|a a|i i|u u|u i|oai|oau|oeo|oêo|oi|u o|u é|u è|u a|i a|i o|i u|i è|i é|i ê|i e|iau|iao|ieo|iêo|eo|êo|ua|èo|éo|ia|io|iu|ua|eo|ii|uu|[āīūaeiouèêé]|x"
    //VOK  = 'aia|o a|o i|o u|o é|o e|o o|ia i|ao|ia o|ia u|ia è|ia é|ia e|ia ê|re|rê|ungti|ubti|ucti|udti|ugti|ujti|ukti|ulti|umti|unti|upti|urti|utti|uwti|lê|le| aui|aua|auo|auè|aué|auê|aue|aio|aiu|aiè|aié|aiê|aie|o o|o a|o i|o u|o ê|o e|oè|o é|ai a|au i|au a|au o|au è|au é|au ê|au e|ai a|ai o|ai u|ai è|ai é|ai ê|ai e| ao| au| aè| aé| ae aê| ai|aè|aé|ae|aê|ui|uè|ué|uê|ue|êi|ei|èi|éi|iu|iè|ié|iê|ie|io|oo|oa|ou|oê|oè|oé|ie|a i|èa|éa|è e|é e|è a|é a|è o|é o|è u|é u|è i|é i|e a|e i|e u|e o|e è|e é|e i| i| u| o| é| è| ê| e| a|ai|au|éi|ei|aa|a a|i i|u u|u i|u o|u é|u è|u a|i a|i o|i u|i è|i é|i e|i ê|éo|êo|oai|oau|oeo|oêo|oi|au|èo|éo|ia|eo|ua|ii|uu|[aeiouèêé¿½]|x'
    var REP  = '[yr]'
    var SILABA = '^'
    SILABA += '('+KONS+')?'             // group(1), K
    SILABA += '('+REP+')?'              // group(2), R
    SILABA += '('+VOK+')'               // group(3), V
    SILABA += '('+KONS+')?'              // group(4), K
    SILABA += '('+VOK+'|'+REP+')?'       // group(5), V|R
    KONSONAN = '^('+KONS+')'
    var DIGIT = '^([ \u200c()\u007B\u007C\u007D,.0-9 ]+)'
    
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
                silaba  = JAWA[r[1]]
                silaba += JAWA['+' + r[2] + 'a']
                silaba += JAWA[r[3]]
                silaba += sigegJawa(r[4])
            } else if (polasuku == PAT_KRV) {
                suku = r[1] + r[2] + r[3]
                silaba  = JAWA[r[1]]
                silaba += JAWA['+' + r[2] + 'a']
                silaba += JAWA[r[3]]
            } else if (polasuku == PAT_KVK) {
                suku = r[1] + r[3] + r[4]
                silaba  = JAWA[r[1]]
                silaba += JAWA[r[3]]
                silaba += sigegJawa(r[4])
            } else if (polasuku == PAT_KV) {
                suku = r[1] + r[3]
                silaba  = JAWA[r[1]]
                silaba += JAWA[r[3]]
            } else if (polasuku == PAT_VK) {
                suku = r[3] + r[4]
                silaba  = JAWA[r[3].toUpperCase()]
                silaba += sigegJawa(r[4])
            } else {
                suku = r[3]
                silaba = JAWA[suku.toUpperCase()]
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
                    silaba = sigegJawa(suku)
                } else {
                    silaba = JAWA[suku] + JAWA['+O']
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
                        silaba += JAWA[suku.substr(i,1)]
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
}//end latin2Jawa

//Fungsi Aksara Latin -> Aksara Kawi ---------------------------------------//

//Fungsi Untuk Mengeksekusi Fungsi Latin2Jawa ------------------------------//
function btLatin2Aksara()
{
	var latinText = document.getElementById('aksaraLatin').value
	var strAksara =''
	var jenisAksara = document.getElementById("jenisAksara").selectedIndex;
	if (jenisAksara == AK_JAWA){
	document.getElementById('aksaraLokal').setAttribute("style", "font-family: 'ramayana'");
		strAksara = latin2Jawa(latinText);   
	}else if (jenisAksara == AK_UNISUNDA){
		document.getElementById('aksaraLokal').setAttribute("style", "font-family: 'prada'");
		strAksara = latin2Sunda(latinText);   
	}else if (jenisAksara == AK_BALI){

document.getElementById('aksaraLokal').setAttribute("style", "font-family: 'amukti'");
		strAksara = latin2Bali(latinText);   
	}else if (jenisAksara == AK_KAWI){
		document.getElementById('aksaraLokal').setAttribute("style", "font-family: 'prayara'");
		strAksara = latin2Kawi(latinText);   
	}
	document.getElementById('aksaraLokal').value = strAksara;
}


