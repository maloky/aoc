const groups = [
  "rypdeiqkbgacnxwumhtozfjvs\nmhrqdwtxcfjuseknozipayvbg\ngunjdtebovsyihraczkmqxfpw\npqcnduafgkbzjhvirxtwmesoy",
  "wmghxlzctojyspn\njtohwzpvkmycs\ncuvkjoyheztmqswp",
  "detmwhk\nemklvdf\nyemupdxq",
  "hdxektmfycarwpio\nepiamhowxdcktfrvy\noctximeakfhrwdzpy",
  "pxwnzji\njrpoawxiv\nwjiqxmp",
  "ch\nloct\nwxmtjeup\nhfyxktz\nbirvsdq",
  "rluz\nzlwruq\nzlur\nlrzu",
  "omcwsj\nsqkjwruc\ncwpklf\nvtyadxcnwzg",
  "clfnzvjhpiybwoksxm\nsnzxvyfopbmhijl\nnxymlhjvfzspbio",
  "jwevzxdhpyrifcuksqgt\nfglozbuswkmdr",
  "jvhgezpqurxalk\nqhizygwbtfupljcsmo",
  "jge\nr\nl\nrg",
  "icgh\ngihc\nghpvdkic\ngwhcfi",
  "woerv\now\npowf",
  "zhqvdxburfmstkloiypgwj\nbpzcnvwudtkhfomsrqayiegjl",
  "bjhagpqxvnrlsufytz\nyjdnqhosbtuzexgpvar\nqbksyczativhgprnxmj",
  "vdmretq\ntmrevdq\nrdqemgv\njnmqvedrzu\ndmgrqve",
  "namzrqsdlftvyexkopu\nfvtneaqyurozkpmxsdl\nxpznavflsetruykomdq\nsbxdlymekrqanvztfupo",
  "whjs\nhsjw\nshwj",
  "szpqmkodtfgeivxybchnjlr\nyzrpefkjichgmvbodxtns\ninxafhbszovdtmjgycrepk",
  "lnixphrqcuszfbtwyeod\ndoupcibeqshyrfzlx\noprqsdhixfuzyclbe",
  "ojnv\njnv\nvjn\najnv",
  "ymtfzirplknbejwucdaqg\neczmygatkuvwiprqjldnfb\nydqbeflnikwjprmzutagc",
  "gvbithwxzdyfkoep\nixyozwhevbgdftk\nfhpozxydktgbewivc\nwodpgnvektbqhxyfiz\nkrxfwoystdgbizevh",
  "qnp\nnpfq",
  "wylxqpgvuafbtjneid\nlfjamczetspkwvbdqoih",
  "hpbjdyiwsg\ndipwjhybg\npcubgwmridjyh\ndgpyjihwb",
  "gcbxv\nvcbg",
  "pjgsyzteohwaibnc\nohlwfgdvtczsnpejyxaqi\npzmewhojayscbgint",
  "foytjxbhiwc\nnxfigpqyhuckm",
  "ta\nat\nato\ntao\netaf",
  "tyebulroispdqm\ncheqfk\ncxnqejfwag\nqaze",
  "xs\nmexs\nvfxls\nsehx",
  "plvqenkgiwj\neihjplvnwkgq",
  "bcteiamnzljyrvhqxwpuo\nctleshvprmknxibjyozgqwau\nvenmchpqjxzwoultriyba\nmalqychnozbxwtjepirvu",
  "qlvcexgauwkonr\nysrvfxtigcnqmdjab\nnvlpxgzacohrq",
  "r\nr\nr\nr\nr",
  "sth\ntsh\nths\nhts\nhst",
  "j\nj\nc\nj",
  "fptakxrwqzghcid\nhwudjvteyqnmsxbzrl",
  "fj\nfj\nfj",
  "qd\ne",
  "dfqagyzoluemikxhr\nhmfzegoyikalrbu",
  "amz\nzcwma\nzma\nzma\nzam",
  "iavezojwpxgf\nazxqivwsgufjo\nvfwaoguizjx",
  "vdytwaugpmn\nywgtvdaunp\nrdujgtknywpav",
  "hcjobxdagvtzureimn\negouxjizsrpmatncbv\nbovgcisajmzedturxn\nymcauqenrwobtjvxzgk",
  "z\nk\nmt\nb",
  "onxdjc\nkij\njekrlws\npqmtyjvbz",
  "lrekpb\ncs\nf",
  "miukhetbgpcofnywld\nfgypmoutcnewkdlhib\nnmegdpfcbtkhuoyliw\niewbnmufpltydcokhg",
  "fm\nzc",
  "q\ng\nq\nq",
  "d\nqov\nu",
  "vpekhuanwyitdbzq\ntaivnxwfphzkbueyld",
  "ivuq\niuqv\nviqu\niquv\nuviq",
  "w\nx\ng",
  "aqvz\nmsitp",
  "epigzysdnhvjwfl\neiwvzspyfnjdghl\newizvgjnspfdylh\nifpjzlwedysgvhn\nshzlefdvpgiynjw",
  "gfcpvheli\nleuizvgcfhpyw\njrolbshdivfg",
  "nozm\nrzbe\nrzeb",
  "i\ni\ni\ni",
  "l\ni\nw\nxl\ncvd",
  "prezgubljmyq\nhdjgxymcrbqutzk\nugsvrjqybzm\nrqbmwuzygj\nioqzjaufbgrmy",
  "lvkwrpiafgehuj\nbighyasoqfk",
  "zjopywe\nyceowzjp\nqpijoyzew\nhbfgusynojvrezxwpadlk\netzywpoj",
  "lyawqpmirognzstbduc\nluieajxqpzokvygftrbns",
  "xpbjvgmclwyaeui\nbmlxpsueqgciyjv\ntvcnmrlgybjeuipx\nvyeaxbjufomicpltg",
  "scbpelzjd\nqicbopdefs\nbescdp\nspbcejgd",
  "izqc\nzc\nvcz\nzc",
  "zxtpqjousimgwd\nldjvupmykawohsxqf\noupwbjqdexsm",
  "nldjubr\njlrudbn\nldnujrb\nunldbjr",
  "gvrhtzabkpjwin\niylsvcqftb",
  "ieurvztojxs\nutwrozyhsjpv\ndjtouzvr\nufznbqkatjvcol",
  "lauocyjix\noacxleiju\njalucorshi",
  "y\nxyj\nyp\ny",
  "tzdopeirawxqj\nxfjitporuzwhmka\nowkfpxhtiazrj",
  "xabdw\nxcbadw\ndprybzwjxa\nbcxawdv",
  "qhmetwcuiagpv\npvcmhigewqau\nwvqheiacumgp\nunmpjlciwehbgzqav\nhaevgiqumcpw",
  "fndv\ndik\nnmcjhfbs\nlxzquaproeyw\nmsjfgti",
  "rxcq\ncslmqje",
  "vkl\nv\numr",
  "tgflck\ntbmafhgjx\nctgwf\ngwtf",
  "afn\nanf\nfna\nfgan",
  "kbypmroflcgsijqt\nmerbsy\nyuazxsnwrvmb",
  "mbqeotcwa\nwacbtzme",
  "ykgwomscpdr\nudsmiqophxgazc",
  "byhgswqf\nziruakpdxenojt\nmlhyqcbfgv",
  "sjcpmgfnqkbtvh\ntjhaocknsqgvzmfxb\nhvskbjtmfncqg\nsvgmbtkjfchqwn",
  "vxnyazclrhigju\ntzejprxgiuvnhl",
  "kfgrnpwahvuzbtdeosxycjl\ncodeskpxziflhqmtnw\nnzpkocwlfexhdts",
  "amxeu\nxuem\nmuxe\nxmue",
  "nfdekjvaswxhlizumqcr\nahvenfjwmqukxrzslcdi\namzhrqdvknuwfelcjixs\nahzxsfnqcirwdvlejmku\nkmivhzfsdxrwueqcajln",
  "ahutglpcfobw\ninbgfhawctlu\nglxabyjwdersfhut\nglwnbvhtfqua",
  "tkvnhiguafzpbryomqs\nfjuqmyizhtdvrapbgok",
  "lavnu\nanuv\nnuva\nvnua\navnu",
  "dsypquzvk\nyfvpuwkqxzd\nzaqdpkvuhoy",
  "hztcgilumwfjqvdx\nljdzmfxhwnocukva\nwdzxlcphvfmruj\nvwtgemuhljsyfrqdxzbpc",
  "gylhmqsfo\nflhgsmqoy\nyflgmhosq\nyhsomlfqg",
  "njrtykmqhpsbl\nehrqnbmtpkyloz\ntqnydrhcxmbkp\neykmrhnqlpbt",
  "x\nt\nt",
  "xmbzthspyqiwkre\nkmertowqzhy\nwntlghzqvuaym",
  "anzmrgh\nhvbz\nikcqewfo",
  "bmhkpvatlxsqe\nqhlsvmwkaxtbep\nafvyqxopmebkths\nkmaqhpbvxsect\nsmhbqatxvekp",
  "rhlvqfi\nfhqlvir\nvlfqihr\nfrvhqil\nhrfwaiyqvl",
  "kqp\nbkpq\nqknpb\nkfbnqp\ntmqlpk",
  "zamldqftosjchig\nsgoltqfzhcmida\nilchsoqyzdafmteg\nomtzqschailgdf",
  "dqtzj\nqdzjt\nwjqbztd\ntqdzj",
  "f\nf",
  "a\na\ne\na",
  "lthopwunzesadc\nagcpuiqwbezrfm",
  "vecitwkr\nevrwktc\ntwejkvcly\ntvweckr",
  "ivhprtaqxluznd\nczhpmktnbarjuqx\nhntzuxaqfwpr\nztqfxhunpdagrsw",
  "yearmjzfvoglksutx\nytxonejacwgkspvbl",
  "gctxse\ncjgetx\nxocetga",
  "uedfocpwivngk\nprxuiveon\nhpovnuimel\npexivunoj",
  "cdsqhptunrmgjvfiozl\nsrvuhlgimntpjfdoqcz\nhotpzrcfvsgdinqljum\nmtdfnzogrluvhsqjpic\nimshvtfzoprnqcjlgdu",
  "qvitpoadjkfe\nfhtwujgxmyvqp\nfvqtjp",
  "igcu\ncpzkirmaqeuvyjblt\nuwfhcio\nufci",
  "olpayrzujbxigkmtdwfvs\nmnlajiogzfyvxdptbkr\ngxkjabvmdptlfyiozr",
  "ozuitjkyrplmwhx\nwqilxmrjzphk\nzmpflxwkrjhi",
  "xklnmyjz\ntbywrnecm\nqasm",
  "nmqezcib\nbqcine\nbqeiwnc",
  "gfwcuktlovqaxinrmsye\napuxbreclsovh\nlrozacsuevxy",
  "sbirnjalhp\nsjlhabinpr\nspiyalnhjrb\nnlahrzjibspf\nphsinblragj",
  "qshiwtzunymecpkojgf\nycintzem\nmtxbzyneicl\nntmzacvdyie\ninledacymzt",
  "zikd\nwfrtoc\nxd",
  "b\nq",
  "jtgrvpc\nvnpob",
  "mxa\nbgpat\nav",
  "kluxigjtrnsqmbfypw\ngilnxrjwumoykbsfpth",
  "mxufknlzeria\nxraflenbiupmk\ndxlijrknueacmyf",
  "rcnby\nuhmilk",
  "feojnrqsdpwclkaiyt\nkowqnhfclimjztpybd\nxvcptleiwdofqkjnsy",
  "ugkailsnrj\nbanglk\nunsglka\nnlvagkc",
  "dwgqjpsby\nhuskprjxgvow",
  "psd\naspdm\ndps\ndsp\npsd",
  "thnzwocdrfyeagim\nzmfuiecortkbgdyw",
  "twjeozqfdvsbcyiarmkguh\noqtrmfsavdzwbejihyucgk",
  "turasdgcevhmxkp\nkxmcagstlh\ncbhmxkgats",
  "sxiezthakwvqb\nsewmhkiqzfxatvgbu\nvqathkezswxib\nxwthkbvziseqa",
  "ewxibk\ntpf\nrz",
  "nwztryqmofi\nrjyqwhmfzostc\ntlvaurxdpkbzfgmyeo",
  "imzerbtfdn\nteifxzny\nenytifz",
  "rcvuafzdqkxweg\ncgvaqxewzdyrfuk",
  "kbmjndsal\nadjlbisnm\nmdbsklnaj\nnbasdljm",
  "qvolp\nqckuzi\nqritmn",
  "lqcejxk\nwtxeqkcl\njlxqekc",
  "vqregkolsbfdx\nqkvsoeuxrbf\njkaixwvrqbfose",
  "ctogmvsxiauy\nszuhoqagtwcflikyd\nctoyuagsnvi\nutygcranvosi\ncitoygeusa",
  "fuwk\nyewkljpxi",
  "zarpyjehu\nputzh\nptnkze\nzplgbvm\nzhstyqip",
  "hrxfvwopsaymtgc\nxfaywpovkgtcsmzunrjh\nvxgmrhcowsytafpi",
  "cipegfjmxbdzutorshn\nefvnwuaoipbyrjtgd",
  "wjtryvx\nrtxjbyw\nnkrpxjolqeu",
  "wqjmgluhebv\njsgqirvulf",
  "hljupxyodbzrg\nlakmhpqogvucnxf",
  "yjuwmvanoxs\nswvadnujxm\niwvzrutpsfgjxqnm",
  "pzdhvwcjekifnmb\nvnkmzhboiqdjp",
  "hqrpeaktlvsjmdcwufnyzbo\nqdvruncsmtyhoepwixkzgjf\ngqsdzvpmhrjntifcuywkoe",
  "xwszdpuln\notbha\ntjo",
  "waqvmjecpsyhfztlbgodn\ngmaewohbzjnytvcfqp\nofyaizgvhnbtjqmep\nodjygheabpfztnqmvk",
  "ezb\nbuze\nzbe\nebz\nzeb",
  "z\nz\nz",
  "vfcjbpaiut\nfjagupcio",
  "my\nym\nmy\nym",
  "lhqavgbsef\nfvhqbegsla",
  "p\npfojb",
  "gyavhelf\nplefo",
  "mirkdqulwbsctjvgxop\nbwptsyqrckfjgxliovm\nxdswvpuckjlqgibotrm\nqcwixtbvkplsjrgom",
  "lrjt\nltr\ntrl",
  "nzuy\nnoy\njbynz\nbn\nfkctn",
  "uxifynkerjas\nfxykznugtcj\nbfyknzuxchj\nqgkfmdjxynwu\njduxknfyh",
  "rgq\nrg\nyp",
  "inbvhkjzegyau\nshxbcotnuda",
  "xtpyoswvjhueimdafcl\nodmjlhvepatuysxfbwci",
  "gfx\nf\ndfeikvhjqz\nf",
  "nryktcwsaixulom\nwusiydlktonmcxra\nxtikuqroycnsalwm",
  "mp\nm\nztm\nm\nm",
  "lxohyprcwdgfz\nownfhacrlzxydeg\nrhofgywdlxc\nfhcldyrgboxw\nqfhoygdxlcwr",
  "mrigdkbhzuonxvwtsejcp\nxrwnmbzohcteyfdkpisuqgj\nngiobsrhvdzweukmtpxjc\ndrocwhmseuxgkinbztpj",
  "xpuchemftsnyakqoljwrd\ndksrjfheqmcxuotwnglap\ntmjpalxnrswhuekdyocqf",
  "xftzuvoksbai\nndgmechlpjti",
  "ygjwtmhqsierucdlkxfv\nufriqgwdtysjevxhmkcl\ntokicjvdlmwfzxrasphqeg\niyjtgwmcelhksrdxqvf",
  "rvzhcsjgd\ngdsjcvhrz\nhjvdsgczr\nvjhzdgcrs\nrchvjsgztd",
  "trezphilc\nyzfnqrbli",
  "qkofmyptcnwjsxlgaivbuzh\nvbostfpnwuzagmjirlhqck\nvasbchflkwjmngztopuiq\nutjikgmorpnfaqwvzchdbls\nultmzaskwionhvgqpbcfj",
  "aivo\nn\ni\nmqergs\npv",
  "rjgbw\nwjrbg\ngjwrb",
  "hwmxaigndkrvfzslo\nhiamrnksowxdgfzlv\nhkiornfwlmaxgzuvds\nmnvwkdfigshxalorz",
  "pkygn\npygnzk\nkuvynp\nyknpg",
  "itxjom\nmtoreix\nomidqtgsnpc\neukmyioth",
  "vdwjtnrsbcm\nsmjtngvobycrwd\ncjtvdanswrmb\nbdrmcjtvsnw",
  "zoays\nisyzao\nflyzsoh\nsziyo",
  "mth\nmx\nvpwyd",
  "gyoarlze\nuziptwenxl\naroezlv\neclkz",
  "cevajtinmwfoukhsdzpyrx\nsjtrelpfmgxdzwkbch\npcfjrleqxkzthsdmw",
  "siwrzbtkpgcy\nfpsobikx\nxsipkb\npkudsbi\nksbdnmphxi",
  "rt\nit\nptsknv\njt",
  "zcxwh\nrcifke\nchz",
  "jbadzfryviqumgsxcel\nvghfzqrxcmebyid\negyzfbmtqrhdixvc",
  "qundsy\nnyquds\nsnyeduq",
  "dyxm\ny",
  "xczlmdvehwarin\ndmxehrcviazlw",
  "qhzsntxcl\nhewbptlv\ntrwlihs\nkgljmtudha\nhloft",
  "zugp\nplugh",
  "n\nn\nwen\nn",
  "ajnpdutlwqrm\nrkjmqgauwlndotx\numtajnqdlwker",
  "rkfgeadhcoxzwtbqnjusilymp\nfbnrpwixalqzeskytgcmjoud\nnuomgcwzbyjqipfkrdaxtlse\nykjbeigafqodmsxwcztlnpru",
  "sgpxdjumiwhetbl\nwagnkvylcmqrzxf",
  "qpwdnblezgkcas\npzalvqnfebcdgksw\nwclkgspdbqnzae\nsgebqadzwclnpk",
  "hsdvxqrbegzpuak\nzvaprehkgdqbusx",
  "trhxk\nrokh\nuhkr\nrkh\nhtmrkp",
  "ayjmlkhqefvrgiobswpzxut\nkgqdnvslwhpxjmryuaezto",
  "xdnobmsceipwgyqtvkazlu\njzyougkeavxtmslficqpdrh\naieoyslqxgvhzfdtkupcjm",
  "oekdcqtvhfsmwylaziubgjx\ncseyloawjthviqgudfkbz\nagqkrlebidofhtwujzyvscn",
  "ou\noy\noa\nyou",
  "kjrzmptbna\niacpmjzkhulot\npmjanvkzte",
  "rpdqax\napdrnziqb",
  "mochksjz\nchzskmjo\ncmkzhjos\ncjkshzom",
  "braqipxm\npbamxrq\nmaopqrxb",
  "sezkqwtljnoy\nstlnowkejqzy\nkyeljtnaqwdzso\nsleznjotwyqk",
  "a\nr\nc",
  "ymuxdtjlsovq\nkdomytxrqlhsjun\nxoylgbdstzjqmu\nspxqoytmujld\nlxtsmocuyqjd",
  "wktsrjxdlizaefqbo\nzjbxldwsqfoaertik\nlqwktdoesxfijbrza\nfkbshvtexolqrimajwd",
  "rplog\njifvbd\nhus\nzpaymx",
  "dljqhy\nmshry\niahwgyt\nlzhjkebyq\nrykph",
  "o\nl\nl",
  "rcxhypj\njxhrcpy\ncvjwhxyr",
  "k\nk\nk\nk\ntk",
  "nckmsaqbyu\namsqutbkcny\nqvkausncybm\nxkabdomuqyncs\nnbmsuzkyqica",
  "fmykuezs\nymwkzspfrug\nisyfuvmknlz\nmfyknzivslu",
  "zjegqtakx\neztjkxgamq\nkozgqxjiate\naoegxjztqk\nevazknxdgjqpt",
  "vgsxdnkjbfhiaetcprluo\ndtnuvboigfpehkslxrca",
  "cwomixyvlubhk\noaqsvyfhgxzenjdt",
  "zfm\nmz\nhixzmusvwrae\nmz\ncljzomp",
  "aimzewnqpdfy\nhwqfnrpjymatid\npnweyqagxmifsd",
  "jagrtqsikbnm\ntakgijrnmbsq\ntqkasinmgrjb\nkgrajsmtqbni\nnjbtigamsqkr",
  "us\nsu\nsu",
  "oxdmjrcfluiwyz\nzqkmrgditwhocxfj",
  "nmdwq\nuwdqkvn\njrneyiwoxat",
  "o\no\no",
  "thqpmc\ntzlqhbep\nqpeth\nwnjtdqvashgpo",
  "forgjwbimycezkaqsuv\nevsarxjwikbyguqofczm\nkmciyqvrgubsjazefow",
  "dnzjkpraybifesmgt\ngbnpizsfaetdryjmk\ntedmfpsajrznbiygk\nbjypsrntedmkiagfz\nptugzdvlaeynbrimjkfs",
  "ahgfxmszervkt\nkhnfsrdwexgzicm\nuoehlpmxyfrgszb",
  "a\na\nqa",
  "bscjlkuietnfmvhqa\nzpmdysghcukrxwql",
  "ybxngswmtzlv\ntlrnfwbsgzxvm",
  "szdfxgvuiyjkola\nyfkgxdzisjlmau\nfujmxskalzgidy",
  "slgcrih\nrqhgl\nctrylh\nzaholrxk\nldqihr",
  "c\nz\na",
  "l\nol\nl\nl\nl",
  "yijuzlomvp\nmojpuylivz\nozvmpyjliu\nzvjulmpoiy",
  "inxdohsz\nzosindxh\nqxnhsizdo",
  "nwxljyekmazfbh\nakwzqbylxdirjomg",
  "kowimsdrbjcnxtauhpzel\nmucayqfvogjwelnhtr",
  "d\nd\nd",
  "spnrxclg\nkcnprgsl\nlngcvrsp\ngrnelshcp\ngnizpcjsrl",
  "cshdbjovlfnkaezmwqipt\ntkdpzrfiwhcbmveonlaqs\nwsmpkrlhvbieaonzdqtfc",
  "mjlotdgyzucrxnkp\noyxumpbjngrldftkz\nlrtzmxjsguknoypd\nxmqrugyntjkpdzol\nkyojtmrpgudxznl",
  "cwvpnuyjxelgkabi\najliexnugckvpbwy\nxiebpgvnkwlayucmoj\nvlgewuabjkncxpyi",
  "cngbduwxzsa\nvbdjnpaczu\nzkjcandobyu\nboacduknz\njcnuadbmzvp",
  "armxudckhoyjqbtli\nkcynhliroatmuxbqd\nabcroqxklidyhtm\nhlcmaxobrktydeifq\nlkqxichayojdrbmt",
  "slthvjp\ntsvhp\nsjhypgitv\npetvzhs\nsvhipt",
  "xzmcwdjlnqtyboak\ndhwyjfxlqckmtozanb\nbczotlnmdkwaqxyj\nwqtybjxamkzldhcon\nqtnmgwdcyoakrvbzxslj",
  "gyrolihnftx\nywlhbxfoumigr\ndfoihgrapeuxyl",
  "juredoybhpalsxkmztwvgnicqf\nyzuceqoikxgvpaflbrdjmwhstn",
  "mhwkugfvsr\nsyicghpunw\nsnphygwuc\nnusgwh",
  "nxystlabuqzcfwdik\nucyaztnkdm\nzgcrndkatyuh\noadutnkzcy",
  "rftpkiwz\nfwkczpt",
  "kwbpsjlvhrcumifgeaxn\nfbxgslwjmnucrpkeiav\nevikuwganplzrbxfjcms\nmfripxsbvaeckuwlgnj",
  "xlsekqbnoj\nkeqjlxsoib\ngojbxelqsk",
  "tduwp\nudt",
  "fyivbg\nage\nlnpckwdumgoszq",
  "vtdm\ndmtv\nmtdv\nmtvd",
  "sxqcuwzdlpter\nuzpesxlrqdctw\ndcfmszreptwxqolu",
  "mlbezcfirsxnughtpajvwdq\neswufgarhxmdvcybiznljt\numgbwcadfiovrxknhszlejt",
  "hoif\nwrdvuxj\nkgloem\nbmngy",
  "ta\nty\nfsgnmtbq",
  "wzucbvdygxeparqhslomjif\nrulbgvdpsmzihjqcwfyoexa\nglaicvjyhdwmupsebrozqfx\nqloepvwjszdahxbufykmgcri\naqjexmwyuczgdhropibvlsf",
  "lsdikhoarexcmu\nygdjrhzmku\nhkpjdrmub\nbhukrdgm",
  "xyrohb\neg\np\ne",
  "eqnbpzlhmxskrfy\nxtguwjadpciv",
  "k\ntb",
  "ipoyng\nphqfxkeyg",
  "mqfpoj\nmojfqp\njpmofq\njqpfmo\nmojqfp",
  "tsjrguiplcqnwxkdhfo\nlspukzenrgfhtqxdwoj\nofxgqlduwnptrkjhs",
  "a\nx\nu",
  "bfpdkihjuz\nnqvgjyk\nolkjy",
  "zdkwbghexisn\nizwngysbdxhe\ndsebogwihxnz\nzhnxepwgbsdi\nsnzhwdxegbi",
  "koupnhmi\nspkmut\npgutkm",
  "qcytokhmwdarzx\npktnxglqrsz\nrekxjqbuzsti",
  "vluoh\nabhoulv\nvhuodl\nuovlh",
  "xpqhfuimjzstyecvgla\nmfcgetpuhyzvljxqska\nitlyxguqmfahsecpvjzn\nxbgrtoazjulhscypemqf\ntjplsvandfzyemqcghux",
  "oudlrfq\nqofrdulz",
  "cqaxm\nmdyibnoxe",
  "pc\ncqm\nlrovgwjh\nxbzt",
  "r\nr\nr\nr",
  "wenypm\ntvzkqaihjrldusbcof",
  "qsjnkitvmogydzul\nbzqwxkg\nzceakgq\ncqkpfgzx\nkzqrhg",
  "xjk\nkxj\njxk\nxkj\nxkj",
  "rpjwnm\nrpwnm",
  "foixgd\nxdgsi",
  "ldiwcrqgfztuonyespmjh\ncendtkpwuzoyfsgjharqi\nqztuedonysxfcwghjbrip\ncgtijqzbefnpovuhrsydw",
  "hnuojmr\nlmhnuj\nurvhjman\ngnuxpmchjk\nonumtjhy",
  "mksn\nqjsolvyktu",
  "jixlamkwrcotzfvnyup\nuwndpoetkfxzqcvgras",
  "mlurhwbpezjgayoki\ngjwcheubrlpkyozxm\neysbprwjcukldohngmz\noejmghpxkybzurldw\ngoplbuhrymwekjz",
  "gdi\nv\nuao\nh\nj",
  "eotq\nyrfz",
  "xf\nzxfp\nxf",
  "jvcknhizeyopx\nabgfs",
  "xdhnia\ntdhiaxn\nxihnda\nhdnxia\nahxdni",
  "cvfuohwdqmsj\nusjvqohdcmw\nqshwovcumjxd",
  "ewcxpunrfo\nncfxeupowr\nneucwxprfo\nonxewrfcup",
  "h\nh\nh\nh\nh",
  "etqny\ntiuoqws\nvbfyqtzd\nkaqxmthgclp\njrqtu",
  "tkylicfwajbmqz\naqjwctliysokxfb",
  "pohmrbxse\nrspxeimobh",
  "topbkx\nakoxr\noxbk",
  "rfixzuqejpco\norecijpuqfx\nrixqejofucp\nfpurciqoexj\nxpqouicejfr",
  "irvl\nlv",
  "jlbtmhk\ntjahe",
  "fycatxuj\nefmsru\nvgbzwolufn\nfduyp",
  "qpovf\noupvq\npvobkq\nqzoplv",
  "uvbzsmd\nszdrobh",
  "sohcdqkxlb\nkbdoq\nqdbkzo\nqknodb\nqodbk",
  "wlikpav\nplnwzvreak\nklwjovpa\nialpwsfvkj",
  "nzswdxachlvukeyprbqtmo\naulktbvnzwoyehxmfcrqps",
  "cdbrvskoujqzlyxpfi\npkljysocqvdrbueixfm\nibsyupvkfjxoldqrc\nsprcluoxbfkdjqyizv",
  "dulfhtqpnszabcx\nptibcnahdurlsfqx\ndxfaqcpbhstlnru\nbdxtfvmhlqasopnuc\nsatpglqhfbcxudn",
  "fwmnrayciqxujegtlhzsk\ngyakijxmslrzwtqncuef\nrilkmgtxfwjszqanyceu\nhwmnsizfgqltyarjkcuxe\npxutjdwsclbgfrmnaeyqkzi",
  "cdgvmqewjhobyt\ncibsqlxrk",
  "vzncysgojwrfqxi\npgivscjroxnqwfyz\nzrijfowgsyvxnqc\nqygjhbnwfxozlvicsr\noisgwxvnrjycfzq",
  "bzgdqm\nmgdfz\ngzmd\ndmqkzrg\nmstzlidjg",
  "lqfnedzwckxuamrsbhjip\npzilqrxtfswogecdav",
  "s\ns\nz",
  "wm\nwm\nwim\ntwjqm\nwim",
  "lrxagomjwhncfy\nhbfdjsolgymarwcx\namuhoclgvfpzwxjryi\nnlfmwoahdgrjxcy",
  "ux\na\nmwzc",
  "xhsapcqjkum\nvdkquacsxijpmt\nhpajmqklcxsgu",
  "rymaftlzunxocwhgs\nuxtwrncsfzohpgyl\nyohwnrtzfkcgsulx",
  "hzyflavwpnexbgr\nlzvfhgrxpebwa\ngzphbewafvlxr\nevgxhzbrpwlfa",
  "baygtmsorczixvejfh\nzgrjmytxefabishcvo\njyvxgofmarisctwehzb",
  "ozbwxdfakrthqc\nkcxftawdrobqzh\nzqxahfdrtcwobk\nxczwfkaqdhbort\nakxfztqbrohcdw",
  "cklb\nkc",
  "iaymow\nmuwoyi\nmihywo\nyaouikwm",
  "drtlioynkumajzshbpxcvq\nwdovutrflknzbmqchpsygje",
  "aunct\njtasuf",
  "otybmvxqkeianrhpsw\nzkaphbuqxoywtvrei\nhlwkrtifbqyoaevxp\nrvkhasoxpebqwtyi",
  "mqpynkuoteafwcszhdxrg\ntuxkcrypafgbqmnohsew\nuymgxcnqeakwhfptrso",
  "nb\nk\nu",
  "oacmsvdy",
  "tlgeajvodcspqmnrzwixkhyubf\nlqhrinwycugfopbstjkezmxd",
  "bajwthnox\nphbtjna\nkicnbjtfaeh",
  "upcd\nrcuds\ncupnd\ndcpu",
  "usodtpgbxrleizwcnfvhakqy\nfhungotvpyrxdjkqziemcbla\nvlkezrqchjdbagfouityxpn",
  "enlctogvyz\nvczpwdgsoyqljknbrmt\nlcnvyotxgzu\nflgnvtyozc\ntzcyvneolg",
  "z\nt",
  "kzgwrn\nwzrisnk",
  "fcznyxtwa\nwczxnp",
  "modnyjbvgzck\nzncvfomkdbgyj\nmbcgyozvkinjd",
  "lpyvkoawcigmszdhunrtj\noygwlmuhvjptzcrksinda\npudhgtjkwaclsivmnryzfo",
  "av\najh\navt",
  "apondg\nngvef",
  "ipxhv\nwqdivtpxl\nirvx\nxiemubayv\nirxwv",
  "othvi\nvehz\nhvxldcez",
  "gcwksjv\neuxzbwgyfkjc\nksjgwc\nkjgcw",
  "vsmpidclexktgoa\nxpkdcgmsetloa",
  "wmbphlzfisxg\ntovkbqyzsfpl",
  "pegjkcnywbhr\nlzkgjbenxwaqyc",
  "vnfgtzw\nouhvagqycpsdtlwikne\nvwbzgnt\nnwvmbgt",
  "uzvjphxfcqg\npiqjfunmaxvkzes\nufpjzxvq\nvzxfjgpuq\npuhjfvzwdqx",
  "gcn\ncgn\ninegk\nnguc",
  "nrtl\nldthqxi\nthl\ndhltp",
  "lqopsckhyjtw\nkaqxicgdzywevfbu",
  "lpodcxkyjevg\ndvklycxgwpoeq\npxelgdcoykv\ncovedbykglpx\nbrpcyexidgvkol",
  "tapwumcjxbeok\njvaxthlypumkibce\nxipmyuecatk\nectpdamxzquknh\numxarptcgeks",
  "dhabkrtxyepluofsqn\nyfluxizrmepchjndsvak",
  "j\nse",
  "gahmztkwboqelpiu\ntlhqpmugawkoxzif",
  "tsquf\nqstf",
  "qalg\nzcij\nwsgvl",
  "wdbrxt\nwltx\nwlxt\nxwlt",
  "ovfegbwyxdq\nbwxqdmygtevuz\ngqxwdyvbe",
  "ohx\noht\nhrzo\nhto",
  "cxfg\njxf\nifx\nlfx\nxf",
  "yguq\ngqyzu\noqguts\nqgu\nugq",
  "dchajzrwvkptfmsi\nzkrhavifwtcdsjmpx\nvtfpsckaimwrdhzj\nzpmscahjfvkwtrid\ndzawcriphmskvjft",
  "ebmwykdnfpqzlursx\nlcfhzqed\nvlzfqaed\nelfizqd\nofqehzdl",
  "fhyzodpvjg\ndgwjybzov",
  "pfbzsvrw\nvbspwfz\nvanuzbpwfds\nsbzpvfw\nwpvftzbs",
  "sjtvukw\nwscktjuv\nustjkwv\njtwgukvs\nuwtvnskj",
  "ylkne\njetb\nreo\nlpeor",
  "sutbnz\ndnts\ntsn",
  "riyn\nriy\nriy",
  "ygbzxlwfrp\nlxpwyfgzrb\nwrlzbxpgsyf",
  "slbkhm\nlbmschf",
  "u\nu\nu\nu\nqu",
  "lmdnixreobwgkz\nznigbyrdowxmekl\nemolgxwrkidbnz\nedbmlonrigkwzx\nkdbzworeigxmln",
  "wbvohcntuzgkiqle\nkjzvybxedwnpfrtc\nktjwcmyvnsbez",
  "bprfjknlqxszmody\nnlxfmpzadjosrbqye\nfbmsaujxdirztyopwqln\npnxqsmdhgoybzlvjcf\nfomtripxnljbdqzys",
  "kcpygiesudlbvtfzxham\nnrdlbxmgeaczitjuoqhw",
  "dg\nxnkt",
  "bfwdtrizlpheavuyqnjos\nubydfogztjraphnevswilq",
  "w\nw\new\nw\nw",
  "a\nxd\naj",
  "gbdzh\ndglqr",
  "vudclgx\ndkjhwel\nlrtsydb",
  "gxzqm\noin",
  "yzpuwnrosctjgivd\nbgwmfkslpden\npmasgdnewq",
  "nle\nen\nne",
  "hbkdavilf\nbloxksadhvi\nhvjbudailk\nivhjladbky",
  "vdscgflymnxubrjqaptwi\ntmgphwfsnikcruzbvejqyo",
  "zbplsicnrh\nglczrbps",
  "brntwcqvh\nnbqhctpwvr",
  "va\nprbzmhv",
  "l\ng\nq\np",
  "jfu\nqjovgdfmu\nfju\nujf\njuf",
  "nhajypktod\nhjietodnscxfk",
  "rxvemgzo\nwoxmskrgyn",
  "bgra\negrab\nrbga\ngrmvqba\ngabr",
  "oblcizsupdm\ndxuolpbzrmic\nlpbucidzom\nplbzmodicu",
  "suivo\nv\npnvt\nwv",
  "c\nuc\nc\nc\nc",
  "afu\na",
  "ow\nwo\nwo\now\noewu",
  "m\niqm",
  "fatyhbmqngwcepkor\nlpixamknzesdvjo",
  "tgkqb\nmikub\nkb",
  "oad\ndoyafpkh\nmshkdco\nsowd\nqidberovngj",
  "kaqvlfyijdozbt\nrqwsbfhoavzt\natqfszvrnob",
  "svqrgkwuilhzxcmpyjf\nyihumlabkroxzcqswg\nxushykmcqzgtilwr\nukwhlqsgirnxmyzc\nkgdrwxmlzuyicsqh",
  "xgcvbqyzdtn\nbxzvqdytgcn",
  "tejri\njte\netj\netj\njte",
  "ismgw\nwigsm\ngsdmwpi",
  "kdhuyt\nypkhd\nkdhy\nkohdy\nhydk",
  "tseoqvwhuxbr\nldykeurcijnfh",
  "ab\nba",
  "ocm\nomcp\nwzjmfto\nmo",
  "vuzyadlnrgbos\nzojynudrsav\ndctmqfyevrixhpuzkans",
  "kwm\nk\nk\nk\nk",
  "sexvtzkumgnrl\nwxdfeiocglqnhmsb\nmnvaelgxksr",
  "numlhsatpefgdxrwjc\ntpgfejhnrdmlawcxs\nxdwracgsthmlfjpne",
  "jfnlsprcqha\nalzqjcnsrhpf\nhlfjrqcpna\nqacrflhjnp\ntcimfrdnhlqwxyjape",
  "bihwtnofygkmlrasjp\nnkmzwhagborfsjipu",
  "mbh\nhmbo\nqwjkvhziclput\nmrhb\nyxhe",
  "blqgwcin\namxzqdwpbrhonyci\nneqcbiw\nwcnfiukqvb\nciekwbtnqg",
  "ezsxhnrctpayukgfl\nuhfcxpyltzngksre\nxfqcpntyzuglreshk\nyxugczlrstkpeafhn\nnplzeygrhtskfxcu",
  "bhu\nhm\nh\nxh",
  "o\no\no\no\no",
  "zfeyitdlxj\njeiqgo\ngjevqui\neoikrsj",
  "eci\nice\norwbites",
  "linomaq\nmnqagilo\nqimlnoa\nnlgmquio\nlirmnqvho",
  "gvqiyfphlxbwcotrszame\niberhzpovmxwytqlcfsga\nwzsyatgrmilpfbhocqxve",
  "qykaloifucdmsxh\ndilsfxmyurjqab",
  "fljib\nwuseoqk",
  "kryuaec\nhkuap\nivkzwltojugf",
  "emrywzsgpkqtjuav\nkphozgjyrqsmavwt\nvjketymzpawqsgru\nzwrhvjyqakgmspt\nqkztgyrjavdfspwm",
  "cufk\njuck\nwcqkd\nkcosr",
  "wymkfrvugb\nbrgkwvymu\nbrukgswmy\npmykbwugr\nrugnkmbyw",
  "cfzsnlvougeb\nkrhatewdigj",
  "a\njw\nw\nvkml\nw",
  "mbzltykicoxgnqjs\njkbyiqcnmzgoaxstef\nbpghumytxjizcskqno",
  "ckq\nqkc\nckq",
  "crygfszhdx\nxrzopcyhsd",
  "eshnuqkyid\nfvhdutyzec",
  "y\ny\ny\nco",
  "opifqrgwclbka\nugqoibrawck\ncaqufogmbipkrw\ngswcojayirqhbk",
  "kptv\nkprsal\nvslga\nwi\nzfcqhej",
  "mgxrjbkqpycvodwzsiet\nzwqkdbjsmtpeygvc\nqewtzbghpydcmvksj",
  "bnteshjdfwpl\nplcrqhdxn",
  "xezumahpsktiwjylq\nsjytilphzaqeuxm\neulximpazqsyjht",
  "wofatncugil\nprd\np\nshx\nexsj",
  "rbsyhmqilpuz\nhkjaotxcfe",
  "rvpdqnkbyshltegifxja\nvseaxdyqiktjhrbfnlg\nlxbtgqjaesyifvkndrhp\nlaqyivwjmsbnxfdrktzgech",
  "khmoucji\numkiohc",
  "axnjc\nacsjnx\nnxawcj\ncxanj\nnawjxc",
  "qhjtuv\nuqvjt\njqtvu",
  "odbruemawlviy\nvwgery",
  "qnlwkidepuh\nldqnkuefhw\nlthxdewqjkugaons",
  "lctym\nycqthox",
  "moej\nojeuz\njoe\ndjyeo\neoj",
  "fwdeqrzicj\ndcrewjzifqg\nqmcjfiezpwrvd\nncwzqrdijfe",
  "kaczplh\nkhxaplyc\nuhbdnckolaqgjp\nvhlrswcapk",
  "envxjbidtrkq\nbdkyrxntvizqme\npsrkdftwxqbnevli",
  "b\nb\njg",
  "j\nbyt\nhfsw\nt\niy",
  "uexapjs\ncaxdepujs\nsuapejx\npjsaexu\nuseajxp",
  "qiuotlgvewkfbx\neiovbxuwdtkflgq\nuwkiqvbrgpflte\ngfbvweihkqtlu\nkulgiwfqebtv",
  "ekd\ndke\nvkde\nkemdg\ndek",
  "kmhfyos\nfkyhsmo\nyosfmkh",
  "arubwxqszlvmhndtfygpi\ndpfvlgsytzqxnhmwabuir\ngvaiutxnbydzwqprfslmh\nwtgszuandpiyrbfvhmlqx",
  "prkfqibx\nfkrqxbpi\nrpixfbqka",
  "cmthfprlzxvg\nchzgaxjkpwrl\ndhybeprslocun",
  "pdrc\nrpcd\ndcpr",
  "nsi\nvlsig\nins\nsi"
]

const uniqueCounter = groups.reduce((total, group) => {
  const uniqueAnswers = group.replace(/\n/g, '').split('').reduce((acc, curr) => {
      if (!acc.includes(curr)) {
        acc.push(curr);
      }
      return acc;
  }, []);
  return total + uniqueAnswers.length;
}, 0);

console.log("🚀 ~ file: day6.js ~ line 511 ~ counter ~ uniqueCounter", uniqueCounter)

const commonCounter = groups.reduce((total, group) => {
  const [firstGroup, ...otherGroups] = group.split('\n');
  const commonAnswers = firstGroup.split('').reduce((acc, letter) => {
      if (otherGroups.every(group => group.includes(letter))) {
        acc.push(letter);
      };
      return acc;
  }, []);
  return total + commonAnswers.length;
}, 0);
console.log("🚀 ~ file: day6.js ~ line 524 ~ commonCounter ~ commonCounter", commonCounter)
