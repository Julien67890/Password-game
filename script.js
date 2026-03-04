/* ═══════════════════════════════════════════════════════════════
   MOT DE PASSE v5.0 — VERSION FINALE COMPLÈTE
   ✅ 6 thèmes + Aléatoire
   ✅ 648 mots × 15 associations = 9,720 associations
   ✅ 100% LOCAL - Mode vocal - PWA
   ═══════════════════════════════════════════════════════════════ */

const W = (assocs, genre) => ({ assocs: assocs.split(','), genre });

const THEMES_DATA = {

  '🌍 Géographie': [
W('forêt,fleuve,amérique,sud,jungle,biodiversité,brésil,bassin,tropical,river,vert,poumon,équateur,pérou,colombie','F'), // AMAZONIE
    W('montagne,amérique,sud,chaîne,altitude,pérou,chili,sommet,cordillère,ski,trekking,condor,équateur,bolivie,volcans','F'), // ANDES
    W('continent,glace,pôle,sud,froid,blanc,pingouins,extrême,océan,antarctique,exploration,scientifique,iceberg,désert,banquise','M'), // ANTARCTIQUE
    W('pôle,nord,glace,froid,océan,blanc,ours,inuit,banquise,exploration,cercle,polaire,glacial,esquimau,boréal','M'), // ARCTIQUE
    W('continent,océanie,pays,kangourou,sydney,océan,pacifique,île,melbourne,aborigène,outback,koala,angleterre,désert,surf','F'), // AUSTRALIE
    W('allemagne,capitale,mur,europe,est,ouest,réunification,guerre,froide,checkpoint,brandenburger,porte,division,histoire,ville','M'), // BERLIN
    W('amérique,sud,pays,rio,carnaval,football,amazonie,portugais,samba,christ,rédempteur,tropique,café,plage,grande','M'), // BRÉSIL
    W('amérique,nord,pays,froid,toronto,ottawa,érable,anglais,français,montréal,québec,hockey,rocheuses,niagara,grand','M'), // CANADA
    W('pointe,extrémité,géographie,terre,sud,afrique,océan,atlantique,indien,naviguer,maritime,promontoire,vent,tempête,bout','M'), // CAP
    W('mer,îles,amérique,tropique,plage,pirates,cuba,jamaïque,bahamas,turquoise,corail,antilles,colomb,soleil,paradis','F'), // CARAÏBES
    W('maroc,ville,afrique,nord,film,blanc,bogart,port,hassan,mosquée,océan,atlantique,française,coloniale,cosmopolite','F'), // CASABLANCA
    W('asie,pays,peuple,grand,mur,dragon,beijing,shanghai,mandarin,population,communiste,rouge,soie,dynastie,empire','F'), // CHINE
    W('fleuve,amérique,états-unis,canyon,grand,arizona,rouge,river,montagne,rocheuses,barrage,hoover,ouest,gorge,raft','M'), // COLORADO
    W('fleuve,afrique,central,jungle,kinshasa,forêt,bassin,zaïre,tropique,long,river,équateur,brazzaville,exploration,stanley','M'), // CONGO
    W('asie,pays,péninsule,séoul,nord,sud,division,guerre,kimchi,samsung,pyongyang,dmz,frontière,taekwondo,k-pop','F'), // CORÉE
    W('fleuve,europe,allemagne,autriche,vienne,budapest,source,noir,delta,valse,blue,strauss,international,navigation,long','M'), // DANUBE
    W('sable,aride,sec,sahara,chaud,dune,oasis,chameau,nomade,mirage,soif,gobi,sinai,bedouin,soleil','M'), // DÉSERT
    W('afrique,nord,pays,pyramide,pharaon,nil,caire,sphinx,ancienne,antiquité,hiéroglyphe,cléopâtre,toutankhamon,sable,momie','F'), // ÉGYPTE
    W('ligne,latitude,zéro,tropique,géographie,imaginaire,climat,chaud,terre,milieu,celsius,capricorne,cancer,sud,nord','M'), // ÉQUATEUR
    W('montagne,himalaya,sommet,népal,tibet,altitude,haut,monde,8848,escalade,sherpa,conquête,hillary,tensing,neige','M'), // EVEREST
    W('norvège,géographie,vallée,glaciaire,mer,côte,eau,profond,scandinave,bleu,falaise,cruise,scenic,nord,inlet','M'), // FJORD
    W('italie,toscane,ville,renaissance,art,ponte,vecchio,duomo,uffizi,david,michel-ange,arno,médicis,culture,cathédrale','F'), // FLORENCE
    W('europe,pays,paris,capitale,tour,eiffel,fromage,vin,baguette,liberté,égalité,fraternité,révolution,coq,tricolore','F'), // FRANCE
    W('fleuve,inde,sacré,himalaya,hindou,bénarès,pollution,crémation,bangladesh,delta,religieux,ablution,spirituel,long,mother','M'), // GANGE
    W('île,nord,atlantique,danemark,glace,inuit,blanc,grand,arctique,autonome,iceberg,viking,eskimo,froid,nuuk','M'), // GROENLAND
    W('montagne,asie,chaîne,nepal,tibet,everest,haut,sommet,altitude,trekking,sherpa,k2,kangchenjunga,annapurna,toit','M'), // HIMALAYA
    W('asie,pays,grand,population,delhi,mumbai,bollywood,curry,taj,mahal,hindi,gandhi,sacré,vache,épices','F'), // INDE
    W('europe,île,pays,vert,dublin,trèfle,patrick,celte,guinness,whiskey,mouton,atlantique,anglais,gaélique,nord','F'), // IRLANDE
    W('turquie,ville,bosphore,mosquée,sainte,sophie,constantinople,ottomane,asie,europe,détroit,byzantine,topkapi,sultan,pont','M'), // ISTANBUL
    W('asie,pays,îles,tokyo,manga,sushi,samouraï,mont,fuji,empereur,technologie,anime,kimono,geisha,soleil','M'), // JAPON
    W('montagne,tanzanie,afrique,sommet,altitude,volcan,neige,équateur,safari,uhuru,peak,escalade,crater,machame,marangu','M'), // KILIMANDJARO
    W('moscou,russie,palais,rouge,place,gouvernement,tzar,pierre,mur,fortification,cathédrale,basile,politique,pouvoir,tour','M'), // KREMLIN
    W('eau,douce,géographie,naturel,cratère,glaciaire,grand,profond,michigan,supérieur,titicaca,baïkal,victoria,pêche,shore','M'), // LAC
    W('moyen,orient,pays,beyrouth,cèdre,méditerranée,phénicien,libanais,guerre,civile,syrie,israël,montagne,arabe,français','M'), // LIBAN
    W('portugal,capitale,europe,atlantique,tage,fado,pastel,azulejos,belém,tour,tramway,colline,ouest,estuaire,seafood','F'), // LISBONNE
    W('fleuve,france,château,central,longest,orléans,nantes,tours,val,royal,vins,delta,atlantique,anjou,pays','F'), // LOIRE
    W('île,afrique,océan,indien,pays,malgache,lemur,baobab,vanille,antananarivo,biodiversité,endémique,grand,rouge,unique','M'), // MADAGASCAR
    W('asie,pays,kuala,lumpur,petronas,jungle,malais,multiculture,singapour,thaïlande,îles,tropical,islam,british,colonial','F'), // MALAISIE
    W('philippines,capitale,asie,métropole,bay,luzon,espagnol,intramuros,rizal,park,jeepney,traffic,urbain,pacifique,crowded','F'), // MANILLE
    W('afrique,nord,pays,rabat,casablanca,maghreb,sahara,atlas,arabe,berbère,fès,marrakech,tajine,thé,menthe','M'), // MAROC
    W('mer,europe,afrique,asie,sud,bleu,plage,îles,grèce,italie,espagne,france,cruise,antiquité,salzwater','F'), // MÉDITERRANÉE
    W('amérique,nord,pays,aztèque,maya,tequila,tacos,ciudad,cancún,guadalajara,espagnol,latino,sombrero,mariachi,chili','M'), // MEXIQUE
    W('asie,pays,steppe,genghis,khan,oulan-bator,nomade,yurt,cheval,désert,gobi,cashmere,central,landlocked,vast','F'), // MONGOLIE
    W('russie,capitale,kremlin,rouge,place,métro,froid,tzar,saint,basile,cathédrale,volga,politique,europe,asie','M'), // MOSCOU
    W('fleuve,afrique,égypte,long,caire,delta,assouan,barrage,crocodile,lotus,pharaon,nil,blanc,bleu,source','M'), // NIL
    W('scandinavie,europe,nord,oslo,fjord,viking,pétrole,saumon,arctique,montagne,ski,midnight,sun,aurora,cold','F'), // NORVÈGE
    W('océanie,pays,îles,auckland,wellington,maori,kiwi,mouton,hobbit,seigneur,anneaux,all,blacks,rugby,scenic','F'), // NOUVELLE-ZÉLANDE
    W('eau,salée,mer,vague,plage,bleu,pacifique,atlantique,indien,arctique,antarctique,profond,tsunami,maritime,vast','M'), // OCÉAN
    W('montagne,russie,chaîne,europe,asie,frontière,sibérie,minéral,altitude,forestier,plateau,divide,peak,range,eastern','M'), // OURAL
    W('amérique,centrale,canal,isthme,chapeau,colombie,city,pacifique,atlantique,navigation,commerce,colon,tropical,hat,zone','M'), // PANAMA
    W('france,capitale,tour,eiffel,louvre,seine,arc,triomphe,notre-dame,champs-élysées,montmartre,sacré-cœur,métro,lumière,mode','M'), // PARIS
    W('amérique,sud,pays,inca,machu,picchu,lima,cuzco,lama,andes,pisco,nazca,amazonie,espagnol,condor','M'), // PÉROU
    W('asie,îles,pays,manille,mindanao,visayas,espagnol,catholique,anglais,tropical,rizal,typhon,pacifique,archipel,coral','F'), // PHILIPPINES
    W('extrême,géographie,nord,sud,magnétique,arctique,antarctique,froid,axe,rotation,explorateur,amundsen,scott,glace,terre','M'), // PÔLE
    W('europe,pays,lisbonne,porto,atlantique,fado,bacalhau,cristiano,ronaldo,azulejos,vasco,gama,algarve,vin,ouest','M'), // PORTUGAL
    W('république,tchèque,capitale,europe,vltava,château,pont,charles,bière,pilsner,kafka,velvet,révolution,bohème,architecte','F'), // PRAGUE
    W('corée,nord,capitale,kim,dictature,communiste,isolé,armée,nucléaire,hermit,kingdom,propaganda,dmz,juche,totalitaire','M'), // PYONGYANG
    W('australie,état,nord,brisbane,grand,barrière,corail,gold,coast,cairns,tropical,outback,reef,sunshine,tourism','M'), // QUEENSLAND
    W('équateur,capitale,amérique,sud,altitude,andes,volcan,pichincha,mitad,mundo,ligne,équatoriale,colonial,église,high','M'), // QUITO
    W('fleuve,europe,allemagne,suisse,france,cologne,bâle,romantique,château,vin,navigation,international,affluent,long,rhénan','M'), // RHIN
    W('italie,capitale,antique,colisée,vatican,forum,gladiateur,césar,auguste,fontaine,trevi,panthéon,spaghetti,éternelle,empire','F'), // ROME
    W('europe,asie,pays,moscou,sibérie,vodka,tzar,froid,grand,communiste,poutine,kremlin,rouge,place,ballet','F'), // RUSSIE
    W('désert,afrique,nord,sable,dune,chaud,aride,touareg,oasis,chameau,libya,mali,tchad,mauritanie,grand','M'), // SAHARA
    W('fleuve,france,paris,normandie,source,delta,pont,rive,gauche,droite,navigation,crue,havre,rouen,impressionniste','F'), // SEINE
    W('corée,sud,capitale,moderne,han,river,k-pop,samsung,palais,gyeongbokgung,métropole,technologie,économie,démocratique,asia','M'), // SÉOUL
    W('chine,ville,port,métropole,moderne,gratte-ciel,pudong,bund,oriental,pearl,économie,commercial,yangtze,cosmopolite,neon','M'), // SHANGHAI
    W('russie,région,nord,froid,taïga,toundra,arctique,glace,immense,pipeline,gaz,pétrole,isolé,permafrost,vastness','F'), // SIBÉRIE
    W('asie,ville,état,île,port,moderne,gratte-ciel,merlion,multiculture,finance,commerce,malais,chinois,indien,clean','M'), // SINGAPOUR
    W('australie,ville,port,opéra,harbour,bridge,plage,bondi,new,south,wales,moderne,cosmopolite,pacifique,bay','M'), // SYDNEY
    W('australie,île,état,hobart,devil,nature,sauvage,sud,isolée,pristine,wilderness,national,park,unique,cool','F'), // TASMANIE
    W('afrique,central,pays,ndjamena,sahara,sahel,lac,pauvre,civil,guerre,désert,landlocked,français,arabe,musliman','M'), // TCHAD
    W('japon,capitale,métropole,moderne,gratte-ciel,shibuya,akihabara,manga,anime,sushi,impérial,palais,mont,fuji,neon','M'), // TOKYO
    W('canada,ville,ontario,cn,tower,multiculturel,grand,lac,niagara,anglais,français,métropole,diverse,cold,urban','M'), // TORONTO
    W('europe,asie,pays,istanbul,ankara,bosphore,ottomane,kebab,mosquée,cappadoce,méditerranée,anatolie,turc,islam,bridge','F'), // TURQUIE
    W('rome,cité,état,pape,saint,pierre,basilique,catholique,chapelle,sixtine,michel-ange,garde,suisse,petit,religieux','M'), // VATICAN
    W('autriche,capitale,danube,mozart,schönbrunn,hofburg,valse,strauss,art,nouveau,café,sacher,torte,impériale,musical','F'), // VIENNE
    W('fleuve,russie,europe,longest,moscou,caspienne,mer,delta,navigation,mère,russia,stalingrad,économique,commercial,vital','F'), // VOLGA
    W('états-unis,parc,national,wyoming,geyser,old,faithful,nature,bison,grizzly,volcanique,geothermal,pristine,wilderness,iconic','M'), // YELLOWSTONE
    W('fleuve,afrique,victoria,chutes,zambie,zimbabwe,mozambique,zambezi,delta,kariba,barrage,crocodile,navigation,long,fourth','M'), // ZAMBÈZE
    W('tanzanie,île,océan,indien,zanzibar,archipel,épices,swahili,plage,turquoise,stone,town,arabe,commerce,tropical','M'), // ZANZIBAR
    W('afrique,sud,pays,harare,victoria,chutes,mugabe,rhodésie,ruines,grand,economie,crise,inflation,landlocked,sanctions','M'), // ZIMBABWE
    W('îles,groupe,océan,dispersé,atoll,pacifique,volcanique,corail,polynésie,micronésie,navigation,isolé,tropical,chain,scattered','M'), // ARCHIPEL
    W('île,corail,anneau,lagon,océan,pacifique,maldives,polynésie,tropical,reef,turquoise,formation,circulaire,low,paradis','M'), // ATOLL
    W('montagne,chaîne,andes,amérique,rocheuses,altitude,massive,géologie,plissement,tectonique,sommet,range,fold,orogenèse,spine','F'), // CORDILLÈRE
    W('fleuve,embouchure,triangle,dépôt,alluvion,nil,gange,mississippi,sédiment,fertile,estuaire,branche,formation,agriculture,mouth','M'), // DELTA
    W('mer,baie,océan,persique,mexique,géographie,eau,inlet,côte,navigation,commerce,gulf,strategic,maritime,body','M'), // GOLFE
    W('terre,moitié,nord,sud,équateur,géographie,boréal,austral,climat,saison,latitude,global,division,sphere,planet','M'), // HÉMISPHÈRE
    W('géographie,coordonnée,horizontale,équateur,nord,sud,parallèle,tropique,polaire,climat,degrees,measurement,position,location,angular','F'), // LATITUDE
    W('géographie,coordonnée,verticale,est,ouest,greenwich,prime,méridien,fuseau,horaire,degrees,measurement,position,location,angular','F'), // LONGITUDE
    W('ligne,longitude,greenwich,prime,zéro,géographie,verticale,fuseau,horaire,reference,international,division,temps,utc,standard','M'), // MÉRIDIEN
    W('latitude,ligne,horizontal,équateur,nord,sud,tropic,polar,circle,temperature,zone,climate,geography,constant,matching','M'), // PARALLÈLE
    W('terre,avancée,mer,géographie,côte,promontoire,cap,jut,océan,projection,maritime,navigation,strategic,geography,landform','F'), // PÉNINSULE
    W('terre,élevée,plat,géographie,altitude,montagne,tibét,anatolie,steppe,mesa,tableland,high,erosion,formation,flat','M'), // PLATEAU
    W('corail,mer,océan,barrière,atoll,tropical,poisson,plongée,australie,polyp,ecosystem,biodiversity,fragile,colorful,marine','M'), // RÉCIF
    W('plaine,herbe,eurasie,mongolie,russie,prairie,sec,nomade,vaste,continental,grassland,flat,temperate,climate,treeless','F'), // STEPPE
    W('géographie,ligne,climat,chaud,équateur,cancer,capricorne,humid,latitude,zone,torride,belt,hot,wet,rainforest','M'), // TROPIQUE
    W('montagne,lave,éruption,cratère,magma,feu,cendre,géologie,tectonique,ring,fire,kilauea,etna,vesuve,explosive','M'), // VOLCAN
  ],

  '🎬 Divertissement': [
W('cinéma,jouer,rôle,film,scène,oscar,performance,plateau,réplique,talent,star,casting,drama,leading,protagonist','M'), // ACTEUR
    W('cinéma,jouer,rôle,film,femme,oscar,performance,plateau,talent,star,leading,drama,hollywood,celebrity,protagonist','F'), // ACTRICE
    W('musique,disque,chansons,cd,vinyle,artiste,sortie,cover,tracklist,spotify,platine,recording,studio,release,collection','M'), // ALBUM
    W('dessin,film,cartoon,disney,pixar,enfant,image,mouvement,studio,anime,3d,character,colorful,family,entertainment','F'), // ANIMATION
    W('superhéros,gotham,dc,comics,chauve-souris,masque,cape,bruce,wayne,joker,robin,batmobile,dark,knight,justice','M'), // BATMAN
    W('film,succès,commercial,hollywood,budget,grand,box,office,spectacle,action,effects,popular,hit,revenue,mainstream','M'), // BLOCKBUSTER
    W('festival,film,france,palme,or,tapis,rouge,croisette,cinéma,prix,international,jury,prestige,glamour,competition','M'), // CANNES
    W('dessin,animé,enfant,tv,couleur,personnage,comic,animation,humour,saturday,morning,funny,kids,entertainment,strip','M'), // CARTOON
    W('film,salle,écran,pop-corn,projection,hollywood,réalisateur,acteur,caméra,ticket,theatre,movie,entertainment,art,screen','M'), // CINÉMA
    W('musique,vidéo,court,chanson,youtube,mtv,artiste,visual,promotional,music,director,editing,style,viral,trending','M'), // CLIP
    W('humour,rire,drôle,film,gags,acteur,funny,laugh,entertainment,sitcom,standup,joke,lighthearted,amusing,cheerful','F'), // COMÉDIE
    W('musique,live,scène,public,salle,artiste,spectacle,billet,tournée,performance,acoustic,venue,crowd,stage,show','M'), // CONCERT
    W('animation,film,enfant,mickey,château,magie,walt,pixar,princess,magic,kingdom,family,fantasy,colorful,dream','M'), // DISNEY
    W('son,cinéma,audio,système,surround,theatre,quality,sound,speaker,digital,atmos,immersive,technology,acoustics,experience','M'), // DOLBY
    W('série,tv,chapitre,saison,diffusion,streaming,storyline,cliffhanger,season,broadcast,character,plot,viewing,installment,arc','M'), // ÉPISODE
    W('événement,musique,film,célébration,arts,cannes,concert,exhibition,cultural,gathering,annual,performance,celebration,entertainment,showcase','M'), // FESTIVAL
    W('cinéma,réalisateur,acteur,scénario,caméra,écran,projection,oscar,hollywood,story,director,production,script,motion,picture','M'), // FILM
    W('mercury,queen,chanteur,rock,bohemian,rhapsody,voice,legend,icon,aids,freddie,mercury,charismatic,performer,legendary','M'), // FREDDIE
    W('musique,prix,cérémonie,recording,academy,award,trophy,performance,nomination,prestigious,annual,industry,golden,statue,honor','M'), // GRAMMY
    W('cinéma,états-unis,oscar,film,star,boulevard,walk,fame,studio,celebrity,glamour,red,carpet,industry,entertainment','M'), // HOLLYWOOD
    W('rire,drôle,comédie,blague,comique,joke,funny,laugh,wit,comedian,standup,hilarious,amusing,entertainment,smile','M'), // HUMOUR
    W('bond,007,espion,film,britannique,agent,secret,mi6,martini,aston,martin,spy,thriller,action,iconic','M'), // JAMES
    W('musique,blues,swing,improvisation,saxophone,trompette,bebop,cool,fusion,rhythm,smooth,ensemble,new,orleans,classic','M'), // JAZZ
    W('chanteur,pop,material,girl,queen,icon,cone,eighties,performer,singer,reinvention,controversy,provocative,superstar,legend','F'), // MADONNA
    W('comics,superhéros,avengers,spider-man,iron,man,universe,cinematic,action,franchise,blockbuster,entertainment,disney,heroes,epic','M'), // MARVEL
    W('jackson,king,pop,thriller,moonwalk,billie,jean,music,icon,performer,legend,dancer,superstar,glove,unforgettable','M'), // MICHAEL
    W('son,mélodie,chanson,instrument,rythme,harmonie,composition,concert,audio,rhythm,melody,harmony,song,art,sound','F'), // MUSIQUE
    W('streaming,série,film,abonnement,plateforme,binge,watch,original,content,digital,subscription,entertainment,on-demand,television,online','M'), // NETFLIX
    W('prix,littérature,paix,science,suède,alfred,prestige,award,ceremony,laureate,stockholm,prestigious,international,recognition,honor','M'), // NOBEL
    W('musique,chant,classique,scène,théâtre,aria,soprano,ténor,orchestra,wagner,verdi,puccini,dramatic,performance,grand','M'), // OPÉRA
    W('cinéma,prix,academy,award,cérémonie,statuette,hollywood,nomination,red,carpet,prestige,golden,statue,glamour,honor','M'), // OSCAR
    W('studio,film,hollywood,production,mountain,logo,classic,movies,entertainment,company,pictures,cinema,industry,major,legacy','M'), // PARAMOUNT
    W('musique,populaire,charts,radio,mainstream,catchy,hit,commercial,melody,upbeat,contemporary,youth,trend,accessible,fun','F'), // POP
    W('film,début,sortie,première,projection,opening,night,red,carpet,exclusive,screening,debut,gala,premiere,launch','M'), // PREMIER
    W('cinéma,film,production,studio,budget,director,management,executive,industry,finance,creative,control,business,hollywood,professional','M'), // PRODUCTEUR
    W('musique,hip-hop,rythme,paroles,flow,beat,rhyme,mc,urban,freestyle,culture,street,lyrical,poetry,spoken','M'), // RAP
    W('cinéma,film,director,caméra,vision,scénario,plateau,cut,action,creative,filmmaker,auteur,vision,storyteller,artistic','M'), // RÉALISATEUR
    W('film,nouveau,version,original,adaptation,reboot,reimagine,hollywood,franchise,update,modern,recreation,revival,contemporary,rehash','M'), // REMAKE
    W('musique,guitare,électrique,band,concert,heavy,metal,punk,classic,alternative,rebel,loud,electric,energy,genre','M'), // ROCK
    W('stones,rock,band,mick,jagger,keith,richards,satisfaction,british,legend,iconic,touring,longevity,classic,legendary','M'), // ROLLING
    W('film,série,histoire,continue,franchise,trilogy,epic,sequel,chapter,narrative,extended,story,multi-part,ongoing,chronicle','F'), // SAGA
    W('film,histoire,script,dialogue,écrit,story,screenplay,writer,plot,narrative,structure,creative,writing,treatment,draft','M'), // SCÉNARIO
    W('télévision,épisodes,saison,streaming,netflix,personnages,intrigue,binge,watch,drama,comedy,show,episodic,storyline,characters','F'), // SÉRIE
    W('comédie,télévision,humour,rire,épisode,friends,seinfeld,sitcom,laugh,track,family,comedy,episodic,funny,entertainment','F'), // SITCOM
    W('électronique,technologie,playstation,tv,music,entertainment,corporation,japanese,innovation,brand,electronics,gaming,audio,video,products','M'), // SONY
    W('réalisateur,film,jaws,et,schindler,jurassic,park,hollywood,director,blockbuster,legend,steven,master,storyteller,iconic','M'), // SPIELBERG
    W('célébrité,vedette,hollywood,acteur,famous,celebrity,icon,popularity,talent,recognition,fame,glamour,success,superstar,renowned','F'), // STAR
    W('vidéo,online,internet,netflix,youtube,direct,live,watch,content,digital,subscription,on-demand,buffer,platform,binge','M'), // STREAMING
    W('cinéma,production,film,enregistrement,hollywood,recording,sound,stage,set,facility,production,lot,backlot,filming,workspace','M'), // STUDIO
    W('film,tension,mystère,thriller,suspense,anxiété,intrigue,edge,seat,nail-biting,anticipation,cliffhanger,drama,mystery,intense','M'), // SUSPENSE
    W('télévision,série,distribution,diffusion,broadcast,network,channel,programming,television,production,media,content,licensing,distribution,rights','F'), // SYNDICATION
    W('télévision,film,tv,movie,production,broadcast,made-for-tv,channel,network,drama,cinema,screen,feature,entertainment,production','M'), // TÉLÉFILM
    W('film,suspense,tension,crime,mystère,noir,psychological,murder,detective,twist,dark,mystery,intense,dramatic,gripping','M'), // THRILLER
    W('social,média,vidéo,viral,dance,short,app,trend,youth,entertainment,platform,content,creator,viral,influencer','M'), // TIKTOK
    W('film,bande,annonce,preview,teaser,promotion,coming,soon,spoiler,excitement,marketing,glimpse,promotional,sneak,peek','M'), // TRAILER
    W('tv,écran,émission,chaîne,série,remote,channel,broadcast,screen,entertainment,cable,streaming,program,viewing,set','F'), // TÉLÉVISION
    W('studio,film,production,hollywood,entertainment,company,warner,pictures,cinema,industry,major,studio,lot,movies,legacy','M'), // UNIVERSAL
    W('spectacle,musique,divers,entertainment,show,performance,acts,variety,television,talent,showcase,diverse,entertainment,musical,comedy','F'), // VARIÉTÉ
    W('star,célébrité,acteur,famous,hollywood,celebrity,icon,renowned,talent,popularity,glamour,recognition,fame,superstar,personality','F'), // VEDETTE
    W('cassette,vidéo,magnétique,bande,old,technology,retro,rewind,tape,obsolete,nostalgia,eighties,nineties,analog,recorder','M'), // VHS
    W('film,image,clip,enregistrement,youtube,streaming,visual,recording,camera,footage,content,digital,motion,picture,multimedia','F'), // VIDÉO
    W('bros,studio,film,production,hollywood,entertainment,company,batman,harry,potter,dc,movies,cinema,major,legacy','M'), // WARNER
    W('film,cowboys,far,west,duel,chevaux,saloon,frontier,gunfight,sheriff,outlaws,classic,american,genre,rugged','M'), // WESTERN
    W('vidéo,plateforme,streaming,google,viral,subscribe,creator,channel,content,watch,tutorial,vlog,entertainment,influencer,online','M'), // YOUTUBE
  ],

  '🏛️ Histoire': [
W('ancien,temps,grèce,rome,civilisation,classique,antiquités,ancient,classical,civilization,ruins,philosophy,empire,era,period','F'), // ANTIQUITÉ
    W('guerre,paix,trêve,cessez,feu,accord,signature,1918,november,agreement,treaty,ceasefire,end,peace,settlement','M'), // ARMISTICE
    W('bombe,nucléaire,arme,explosion,hiroshima,nagasaki,radioactif,mushroom,cloud,weapon,power,destruction,manhattan,project,devastating','M'), // ATOMIQUE
    W('allemagne,mur,division,guerre,froide,est,ouest,checkpoint,charlie,reunification,cold,war,divided,wall,historical','M'), // BERLIN
    W('napoléon,empereur,france,corse,révolution,waterloo,conquête,empire,military,genius,french,emperor,ambition,exile,legacy','M'), // BONAPARTE
    W('rome,empereur,julius,assassinat,ides,mars,romain,empire,military,conquest,dictator,brutus,gaul,ancient,legendary','M'), // CÉSAR
    W('empereur,carolingien,france,sacré,holy,roman,empire,medieval,king,franks,charles,great,renaissance,coronation,legacy','M'), // CHARLEMAGNE
    W('royaume-uni,premier,ministre,guerre,mondiale,cigare,winston,leadership,britain,wwii,bulldog,speech,resilience,statesman,iconic','M'), // CHURCHILL
    W('société,culture,ancient,développement,progrès,urbain,social,culture,advancement,society,organized,development,cultural,human,progress','F'), // CIVILISATION
    W('territoire,empire,impérialisme,exploitation,domination,colonial,settlement,empire,territory,occupation,expansion,imperialism,control,subjugation,overseas','F'), // COLONIE
    W('guerre,religieuse,jérusalem,chevalier,templier,moyen-âge,crusader,holy,land,medieval,religious,war,jerusalem,knight,campaign','F'), // CROISADES
    W('indépendance,droits,proclamation,american,révolution,liberty,freedom,rights,independence,document,proclamation,signing,founding,constitutional,historic','F'), // DÉCLARATION
    W('régime,autoritaire,tyran,totalitaire,oppression,dictator,autocratic,regime,authoritarian,tyranny,oppression,control,absolute,power,totalitarian','F'), // DICTATURE
    W('famille,royale,succession,monarch,héritage,succession,royal,family,lineage,monarchy,hereditary,throne,ruling,bloodline,legacy','F'), // DYNASTIE
    W('état,empereur,impérial,romain,ottoman,britannique,colonial,imperial,domain,emperor,vast,power,dominion,territory,reign','M'), // EMPIRE
    W('époque,période,temps,historique,chronologie,epoch,period,age,time,historical,timeline,phase,chapter,span,interval','F'), // ÈRE
    W('découverte,voyage,exploration,navigateur,colomb,magellan,new,world,discovery,voyage,adventure,navigator,expedition,colonial,pioneer','F'), // EXPLORATION
    W('régime,totalitaire,italie,mussolini,autoritaire,nazi,totalitarian,authoritarian,regime,dictatorship,italy,extreme,nationalism,propaganda,oppressive','M'), // FASCISME
    W('moyen-âge,seigneur,vassal,médiéval,serf,château,feudal,medieval,lord,vassal,hierarchy,manor,peasant,system,agrarian','F'), // FÉODALITÉ
    W('conflit,bataille,armée,combat,mondiale,militaire,conflict,battle,military,combat,warfare,army,soldier,violence,hostility','F'), // GUERRE
    W('exécution,révolution,française,terreur,lame,execution,french,revolution,terror,blade,scaffold,death,penalty,beheading,guillotine','F'), // GUILLOTINE
    W('dictateur,nazi,allemagne,wwii,holocaust,führer,evil,war,genocide,dictator,third,reich,fascist,atrocity,infamy','M'), // HITLER
    W('génocide,juifs,nazi,concentration,camp,wwii,genocide,jews,extermination,atrocity,shoah,remembrance,tragedy,persecution,horror','M'), // HOLOCAUSTE
    W('liberté,autonomie,souveraineté,décolonisation,freedom,liberty,sovereignty,autonomy,self-rule,emancipation,liberation,decolonization,national,free,autonomous','F'), // INDÉPENDANCE
    W('tribunal,religieux,hérésie,torture,moyen-âge,catholic,church,heresy,torture,persecution,medieval,religious,tribunal,witch,hunt,dogma','F'), // INQUISITION
    W('césar,romain,imperator,assassinat,ancient,rome,emperor,dictator,assassination,ides,march,conquest,gaul,military,legacy','M'), // JULIUS
    W('roi,france,versailles,soleil,xiv,xv,xvi,king,monarch,bourbon,palace,absolute,monarchy,royal,reign','M'), // LOUIS
    W('carta,angleterre,droits,king,john,1215,charter,england,rights,document,liberty,constitutional,historic,medieval,foundational','F'), // MAGNA
    W('médiéval,chevalier,château,féodalité,croisades,medieval,period,knights,castles,feudalism,crusades,dark,ages,middle,centuries','M'), // MOYEN-ÂGE
    W('chine,fortification,grande,défense,monument,china,wall,fortification,defense,ancient,monument,great,unesco,wonder,massive','F'), // MURAILLE
    W('empereur,bonaparte,france,corse,waterloo,exile,emperor,french,military,conquest,empire,ambition,corsica,legend,historic','M'), // NAPOLÉON
    W('allemagne,hitler,fascisme,wwii,holocaust,parti,germany,fascism,third,reich,swastika,totalitarian,propaganda,war,atrocity','M'), // NAZISME
    W('égypte,roi,pyramide,ancient,tutankhamun,ramses,egypt,king,pyramid,mummy,tomb,hieroglyph,dynasty,ruler,ancient','M'), // PHARAON
    W('maladie,épidémie,noire,moyen-âge,bubonic,plague,disease,epidemic,black,death,medieval,pandemic,rat,flea,devastating','F'), // PESTE
    W('ancient,peuple,liban,maritime,commerce,alphabet,ancient,people,lebanon,maritime,trade,alphabet,seafaring,purple,civilization','M'), // PHÉNICIENS
    W('ancient,temps,homme,caverne,stone,age,ancient,time,primitive,cave,dwelling,tool,hunter,gatherer,evolution','F'), // PRÉHISTOIRE
    W('égypte,pharaon,tombeau,monument,gizeh,sphinx,egypt,pharaoh,tomb,monument,ancient,giza,cheops,wonder,massive','F'), // PYRAMIDE
    W('royauté,monarch,couronne,roi,queen,royalty,monarch,crown,kingdom,throne,sovereign,palace,royal,ruler,majesty','F'), // REINE
    W('art,culture,humanisme,italie,florence,rebirth,art,culture,humanism,italy,florence,michelangelo,leonardo,vinci,enlightenment','F'), // RENAISSANCE
    W('démocratie,état,gouvernement,rome,france,democracy,state,government,rome,france,elected,constitution,res,publica,citizen','F'), // RÉPUBLIQUE
    W('changement,renversement,1789,france,bastille,change,overthrow,1789,france,uprising,rebellion,radical,transformation,conflict,upheaval','F'), // RÉVOLUTION
    W('empire,italie,antique,césar,gladiateur,colisée,empire,italy,ancient,caesar,gladiator,colosseum,forum,eternal,city','F'), // ROME
    W('encerclement,militaire,château,ville,medieval,blockade,military,encirclement,castle,city,medieval,warfare,fortification,assault,prolonged','M'), // SIÈGE
    W('cent,ans,période,temps,époque,century,hundred,years,period,time,era,epoch,span,duration,age','M'), // SIÈCLE
    W('accord,paix,signature,international,versailles,genève,agreement,peace,signature,international,treaty,diplomatic,settlement,pact,accord','M'), // TRAITÉ
    W('palais,france,louis,xiv,château,treaty,palace,france,louis,xiv,castle,treaty,gardens,hall,mirrors','M'), // VERSAILLES
    W('scandinave,guerrier,navire,exploration,norse,warrior,ship,exploration,raider,norse,longship,scandinavia,nordic,seafaring,legendary','M'), // VIKING
    W('bataille,napoléon,défaite,belgique,1815,wellington,battle,napoleon,defeat,belgium,1815,wellington,final,downfall,historic','M'), // WATERLOO
    W('monarchie,absolu,roi,pouvoir,total,versailles,monarchy,absolute,king,power,total,divine,right,autocratic,centralized','M'), // ABSOLUTISME
    W('accord,coalition,traité,militaire,nato,agreement,coalition,treaty,military,alliance,pact,partnership,cooperation,mutual,defense','F'), // ALLIANCE
    W('noé,bible,déluge,ancien,testament,noah,bible,flood,old,testament,ark,animals,pairs,covenant,salvation','F'), // ARCHE
    W('attaque,militaire,offensive,bataille,assault,military,offensive,attack,battle,charge,strike,invasion,offensive,combat,aggression','M'), // ASSAUT
    W('prison,révolution,française,paris,storming,prison,french,revolution,paris,1789,storming,fortress,symbol,july,14','F'), // BASTILLE
    W('combat,guerre,militaire,conflit,battle,war,military,conflict,fighting,combat,engagement,clash,struggle,warfare,encounter','F'), // BATAILLE
    W('blocus,siège,maritime,naval,blockade,siege,maritime,naval,embargo,encirclement,isolation,restriction,barrier,strategic,cutoff','M'), // BLOCUS
    W('reddition,militaire,défaite,surrender,military,defeat,submission,armistice,yielding,truce,white,flag,unconditional,end,hostilities','F'), // CAPITULATION
    W('rome,soldat,légion,centurion,ancient,soldier,legion,officer,ancient,rome,military,rank,commander,warrior,hundred','M'), // CENTURION
    W('temps,ordre,historique,timeline,history,order,historical,sequence,timeline,dating,annals,temporal,record,calendar,succession','F'), // CHRONOLOGIE
    W('union,états,alliance,federal,confederation,union,states,alliance,federal,league,association,coalition,compact,united,federation','F'), // CONFÉDÉRATION
    W('victoire,militaire,territoire,invasion,conquest,military,victory,territory,invasion,subjugation,takeover,occupation,domination,triumph,expansion','F'), // CONQUÊTE
    W('rome,magistrat,république,consul,ancient,magistrate,republic,elected,ancient,rome,office,government,executive,senator,official','M'), // CONSUL
    W('roi,royauté,pouvoir,symbole,king,royalty,power,symbol,monarchy,regalia,jewels,coronation,authority,sovereign,throne','F'), // COURONNE
    W('loi,ordonnance,officiel,government,law,ordinance,official,government,proclamation,edict,order,regulation,statute,mandate,directive','M'), // DÉCRET
    W('tyran,pouvoir,absolu,autoritaire,dictator,power,absolute,authoritarian,tyrant,autocrat,despot,totalitarian,oppressor,ruler,strongman','M'), // DICTATEUR
    W('bannissement,expulsion,déportation,exiled,banishment,expulsion,deportation,ostracism,forced,departure,refugee,displacement,isolation,punishment,outcast','M'), // EXIL
    W('faim,pénurie,famine,hunger,scarcity,starvation,shortage,deprivation,malnutrition,crisis,suffering,poverty,drought,catastrophe,tragedy','F'), // FAMINE
    W('marine,navires,armada,naval,fleet,ships,armada,naval,navy,vessels,squadron,maritime,warships,flotilla,sea,power','F'), // FLOTTE
    W('création,établissement,founding,creation,establishment,inception,origin,genesis,beginning,initiation,birth,start,formation,institution,launch','F'), // FONDATION
    W('château,fort,défense,militaire,fortress,castle,fort,defense,military,stronghold,citadel,fortification,bastion,rampart,medieval,walls','F'), // FORTERESSE
    W('guerre,ligne,bataille,militaire,front,war,line,battle,military,battlefield,combat,zone,frontline,trench,warfare,offensive','M'), // FRONT
    W('massacre,extermination,peuple,holocaust,genocide,massacre,extermination,people,atrocity,ethnic,cleansing,crime,humanity,systematic,killing','M'), // GÉNOCIDE
    W('rome,combattant,arène,colisée,gladiator,rome,fighter,arena,colosseum,ancient,combat,spectacle,warrior,slave,entertainment','M'), // GLADIATEUR
    W('architecture,médiéval,cathédrale,arc,ogive,gothic,architecture,medieval,cathedral,pointed,arch,vaulted,church,style,dark,ornate','M'), // GOTHIQUE
    W('protestation,travail,syndicat,manifestation,strike,protest,labor,union,demonstration,walkout,industrial,action,workers,stoppage,picket','F'), // GRÈVE
    W('domination,pouvoir,supériorité,influence,hegemony,domination,power,superiority,influence,supremacy,leadership,control,preeminence,ascendancy,dominance','F'), // HÉGÉMONIE
    W('égypte,écriture,symbole,pharaon,hieroglyph,egypt,writing,symbol,pharaoh,ancient,script,carved,pictograph,rosetta,stone','M'), // HIÉROGLYPHE
    W('attaque,militaire,conquête,occupation,invasion,attack,military,conquest,occupation,incursion,assault,takeover,aggression,intrusion,raid','F'), // INVASION
    W('rome,militaire,soldat,centurion,legion,rome,military,soldier,centurion,ancient,army,formation,infantry,cohort,eagle','F'), // LÉGION
    W('déclaration,politique,document,manifesto,declaration,political,document,statement,proclamation,platform,principles,ideology,program,agenda,treatise','M'), // MANIFESTE
    W('tuerie,génocide,carnage,slaughter,massacre,genocide,carnage,killing,bloodshed,atrocity,butchery,extermination,mass,murder,violence','M'), // MASSACRE
    W('moyen-âge,chevalier,château,medieval,middle,ages,knight,castle,feudal,period,crusades,dark,ages,knight,chivalry','M'), // MÉDIÉVAL
    W('royauté,roi,kingdom,couronne,monarchy,royalty,king,kingdom,crown,throne,sovereign,royal,hereditary,realm,dynasty','F'), // MONARCHIE
    W('militaire,territoire,contrôle,occupation,military,territory,control,seizure,takeover,possession,garrison,forces,foreign,presence,annexed','F'), // OCCUPATION
    W('vatican,pontife,catholique,saint,père,pope,vatican,pontiff,catholic,holy,father,papal,bishop,rome,church','M'), // PAPE
    W('division,séparation,territoire,partition,division,separation,territory,split,boundary,border,geographic,political,splitting,demarcation,sectioning','F'), // PARTITION
    W('rome,peuple,commun,plébéien,plebeian,rome,people,common,class,ancient,lower,citizen,masses,populace,non-patrician','F'), // PLÈBE
    W('massacre,juifs,persecution,holocaust,pogrom,massacre,jews,persecution,violence,ethnic,attack,riot,organized,mob,russian','M'), // POGROM
    W('colonie,protection,colonial,territory,protectorate,colony,protection,colonial,territory,mandate,supervised,influence,control,dependent,sphere','M'), // PROTECTORAT
    W('région,administrative,territoire,province,region,administrative,territory,state,district,area,subdivision,local,governance,jurisdiction,zone','F'), // PROVINCE
    W('révolte,insurrection,uprising,rebellion,revolt,insurrection,uprising,mutiny,resistance,defiance,insurgency,protest,disobedience,revolution,civil','F'), // RÉBELLION
    W('retour,monarchie,rétablissement,restoration,return,monarchy,reestablishment,reinstatement,revival,renewal,bringing,back,throne,bourbon,stuart','F'), // RESTAURATION
    W('couronne,cérémonie,roi,coronation,crown,ceremony,king,anointing,inauguration,enthronement,ritual,religious,crowning,regal,investiture','M'), // SACRE
    W('division,religieuse,église,séparation,schism,division,religious,church,separation,split,break,sectarian,conflict,catholic,orthodox,protestant','M'), // SCHISME
    W('égypte,monument,pharaon,enigme,sphinx,egypt,monument,pharaoh,enigma,riddle,giza,lion,human,mythical,guardian','M'), // SPHINX
    W('vote,droit,universel,citoyen,suffrage,vote,right,universal,citizen,franchise,ballot,election,voting,enfranchisement,electoral','M'), // SUFFRAGE
    W('religieux,sacré,ancien,culte,temple,religious,sacred,ancient,worship,shrine,sanctuary,holy,place,church,edifice','M'), // TEMPLE
    W('royauté,siège,pouvoir,roi,throne,royalty,seat,power,king,sovereign,reign,monarchy,crown,regal,authority','M'), // TRÔNE
    W('dictateur,oppresseur,cruel,despote,tyrant,dictator,oppressor,cruel,despot,autocrat,absolute,ruler,totalitarian,authoritarian,harsh','M'), // TYRAN
    W('féodal,seigneur,fidélité,serment,vassal,feudal,lord,loyalty,oath,allegiance,servant,liege,medieval,fealty,homage','M'), // VASSAL
    W('triomphe,gagner,succès,bataille,victory,triumph,win,success,battle,conquest,defeat,glory,winning,achievement,success','F'), // VICTOIRE
  ],

  '🎨 Arts & Littérature': [
W('art,non-figuratif,moderne,formes,couleurs,kandinsky,expression,contemporain,conceptuel,peinture,cubisme,interpretation,libre,style,innovant','M'), // ABSTRAIT
    W('bâtiment,construction,design,plan,structure,architecte,gothique,baroque,moderne,édifice,urbanisme,spatial,blueprint,art,form','F'), // ARCHITECTURE
    W('écrivain,livre,roman,créateur,plume,écrire,littérature,publication,signature,œuvre,novelist,writer,storyteller,creator,pen','M'), // AUTEUR
    W('écrivain,français,comédie,humaine,réalisme,roman,19ème,père,goriot,littérature,novelist,honoré,prolific,society,masterpiece','M'), // BALZAC
    W('art,style,ornementé,17ème,église,versailles,elaborate,decorative,ornate,rococo,classical,extravagant,gilded,grand,opulent','M'), // BAROQUE
    W('compositeur,allemand,symphonie,classique,sourd,9ème,génie,piano,ode,joie,ludwig,van,virtuoso,maestro,legendary','M'), // BEETHOVEN
    W('danse,classique,tutu,tchaikovsky,casse-noisette,pointes,gracieux,lac,cygnes,élégant,choreography,performance,pirouette,prima,elegance','M'), // BALLET
    W('écrivain,français,existentialisme,étranger,peste,philosophe,absurde,albert,nobel,résistance,novelist,playwright,intellectual,absurdist,humanist','M'), // CAMUS
    W('dessin,satirique,exagération,humour,politique,critique,cartoon,sketch,comic,mockery,exaggeration,lampoon,ridicule,editorial,parody','F'), // CARICATURE
    W('église,gothique,voûte,vitraux,notre-dame,architecture,religieux,nef,pierre,monument,gothic,medieval,sacred,towering,majestic','F'), // CATHÉDRALE
    W('argile,poterie,vase,cuisson,four,artisan,porcelaine,faïence,pottery,clay,glazed,kiln,craft,ancient,decorative','F'), // CÉRAMIQUE
    W('art,excellence,perfection,génie,sublime,création,masterwork,perfection,masterpiece,magnum,opus,pinnacle,exemplary,iconic,unmatched','M'), // CHEF-D-ŒUVRE
    W('compositeur,polonais,piano,romantique,nocturne,valse,frédéric,virtuose,romantic,pianist,melody,delicate,poetic,expressive,brilliant','M'), // CHOPIN
    W('art,antiquité,grec,romain,traditionnel,beethoven,mozart,intemporel,ancient,greece,rome,timeless,harmonious,refined,enduring','M'), // CLASSIQUE
    W('art,papier,ciseaux,coller,composition,assemblage,cubisme,picasso,mixed,media,cutout,paste,mosaic,creative,artistic','M'), // COLLAGE
    W('théâtre,rire,humour,molière,farce,légère,amusant,funny,laugh,entertainment,playwright,satire,jest,lighthearted,cheerful','F'), // COMÉDIE
    W('musique,orchestre,soliste,classique,composition,mozart,vivaldi,instrumental,symphony,performance,solo,virtuoso,classical,movement,opus','M'), // CONCERTO
    W('art,picasso,géométrique,moderne,abstrait,20ème,braque,angular,fragmented,perspective,revolutionary,innovative,avant-garde,radical,cubist','M'), // CUBISME
    W('artiste,surréalisme,espagnol,moustache,persistence,mémoire,peintre,salvador,eccentric,surrealist,mustache,bizarre,dreamlike,flamboyant,iconic','M'), // DALI
    W('crayon,esquisse,ligne,papier,croquis,illustration,art,sketch,pencil,drawing,outline,artistic,draft,freehand,creative','M'), // DESSIN
    W('théâtre,tragédie,tension,émotion,shakespeare,serious,theatrical,emotional,intense,conflict,tragic,acting,stage,powerful,compelling','M'), // DRAME
    W('fiction,futur,sombre,orwell,1984,totalitaire,oppression,dark,future,authoritarian,bleak,surveillance,hopeless,nightmare,cautionary','F'), // DYSTOPIE
    W('poème,héros,aventure,homère,odyssée,iliade,mythologie,legendary,heroic,narrative,saga,ancient,quest,mythical,grandiose','F'), // ÉPOPÉE
    W('dessin,rapide,croquis,préparatoire,brouillon,léger,sketch,draft,rough,preliminary,quick,outline,study,preparatory,loose','F'), // ESQUISSE
    W('art,émotion,intense,munch,cri,20ème,bold,emotional,vivid,raw,turbulent,psychological,dramatic,passionate,visceral','M'), // EXPRESSIONNISME
    W('récit,court,morale,lafontaine,animaux,leçon,tale,short,story,moral,allegory,fable,lesson,didactic,metaphorical','F'), // FABLE
    W('imaginaire,rêve,irréel,merveilleux,féerique,magical,whimsical,dreamlike,enchanting,surreal,fanciful,ethereal,otherworldly,imaginative,wonder','F'), // FANTAISIE
    W('peinture,murale,mur,renaissance,michel-ange,sixtine,wall,painting,mural,large,plaster,artistic,decorative,chapel,monumental','F'), // FRESQUE
    W('écrivain,allemand,poète,faust,werther,romantisme,johann,wolfgang,poet,playwright,literary,genius,weimar,classical,influential','M'), // GOETHE
    W('architecture,médiéval,cathédrale,arc,ogive,sombre,pointed,arch,medieval,cathedral,dark,mysterious,ornate,vaulted,spires','M'), // GOTHIQUE
    W('art,imprimé,burin,estampe,technique,print,etching,engraving,incised,artistic,woodcut,printmaking,detailed,reproduction,craft','F'), // GRAVURE
    W('écrivain,français,romantique,misérables,notre-dame,victor,poète,novelist,dramatist,romantic,epic,humanitarian,literary,giant,legendary','M'), // HUGO
    W('art,peinture,lumière,monet,renoir,19ème,plein,air,light,color,brushstroke,impressionist,outdoor,fleeting,atmospheric','M'), // IMPRESSIONNISME
    W('écrivain,tchèque,métamorphose,procès,absurde,franz,alienation,surreal,existential,modern,bureaucracy,anxiety,dreamlike,haunting,profound','M'), // KAFKA
    W('fabuliste,français,fables,animaux,morale,jean,storyteller,moralist,poet,tales,didactic,allegory,charming,timeless,wisdom','M'), // LA-FONTAINE
    W('mythe,récit,folklore,mythologie,héros,story,tale,myth,folklore,heroic,传说,传奇,legendary,传统,oral','F'), // LÉGENDE
    W('vinci,renaissance,génie,peinture,invention,leonardo,polymath,genius,renaissance,man,inventor,artist,visionary,brilliant,multitalented','M'), // LÉONARD
    W('ouvrage,pages,lecture,roman,auteur,bibliothèque,reading,pages,text,publication,novel,volume,literature,bound,written','M'), // LIVRE
    W('musée,paris,art,mona,lisa,pyramide,museum,gallery,masterpiece,art,collection,iconic,cultural,tourist,grand','M'), // LOUVRE
    W('bande,dessinée,japon,anime,otaku,comics,cartoon,japanese,graphic,novel,serialized,illustrated,popular,culture,stylized','M'), // MANGA
    W('artiste,renaissance,sculpteur,david,sixtine,buonarroti,sculptor,painter,genius,renaissance,masterpiece,chapel,fresco,legendary,virtuoso','M'), // MICHELANGELO
    W('peintre,impressionniste,nymphéas,giverny,français,claude,impressionism,water,lilies,garden,light,brushwork,colorful,peaceful,masterful','M'), // MONET
    W('compositeur,autrichien,génie,enfant,prodige,wolfgang,amadeus,classical,virtuoso,opera,symphony,prodigy,prolific,brilliant,timeless','M'), // MOZART
    W('collection,art,exposition,galerie,culture,œuvres,gallery,exhibition,collection,cultural,artifacts,curator,display,visit,educational','M'), // MUSÉE
    W('légende,récit,héros,dieux,mythologie,ancient,legend,story,gods,heroes,folklore,epic,传说,supernatural,allegorical','M'), // MYTHE
    W('prix,littérature,alfred,suède,prestige,international,award,literature,peace,prestigious,stockholm,laureate,honor,recognition,ceremony','M'), // NOBEL
    W('récit,court,fiction,genre,littéraire,short,story,fiction,narrative,literary,prose,tale,brief,written,genre','F'), // NOUVELLE
    W('musique,chant,lyrique,aria,classique,wagner,verdi,theatrical,singing,dramatic,orchestra,soprano,grand,operatic,stage','M'), // OPÉRA
    W('musique,symphonie,instruments,chef,concert,ensemble,symphony,instruments,conductor,classical,harmonious,brass,strings,performance,grand','M'), // ORCHESTRE
    W('art,craie,tendre,couleur,dessin,chalk,drawing,soft,color,pigment,artistic,delicate,blended,powdery,sketch','M'), // PASTEL
    W('art,toile,pinceau,couleur,tableau,artiste,canvas,brush,color,painting,artistic,oil,watercolor,acrylic,masterpiece','F'), // PEINTURE
    W('artiste,cubisme,espagnol,guernica,pablo,painter,spanish,cubist,revolutionary,prolific,genius,modern,innovative,influential,iconic','M'), // PICASSO
    W('vers,poème,rimes,littérature,lyrisme,verse,poem,rhyme,lyrical,literary,stanza,poetic,expressive,artistic,meter','F'), // POÉSIE
    W('vers,rime,poésie,écrivain,lyrisme,verse,rhyme,poetry,writer,lyrical,bard,romantic,expressive,artistic,creative','M'), // POÈTE
    W('visage,peinture,représentation,sujet,pose,face,painting,likeness,subject,sitting,artistic,expression,representation,resemblance,depicted','M'), // PORTRAIT
    W('art,après,moderne,contemporain,20ème,experimental,contemporary,avant-garde,ironic,eclectic,diverse,innovative,反传统,conceptual,pluralistic','M'), // POSTMODERNE
    W('écrivain,français,recherche,temps,perdu,marcel,novelist,modernist,introspective,literary,memory,elaborate,sophisticated,reflective,monumental','M'), // PROUST
    W('musique,ensemble,quatre,cordes,chamber,music,strings,ensemble,four,classical,intimate,harmonious,refined,chamber,sophisticated','M'), // QUATUOR
    W('art,réaliste,vérité,19ème,naturalisme,realistic,truthful,depiction,accurate,naturalistic,objective,detailed,lifelike,authentic,precise','M'), // RÉALISME
    W('peintre,hollandais,lumière,ombre,17ème,dutch,painter,baroque,light,shadow,masterful,golden,age,portrait,dramatic','M'), // REMBRANDT
    W('art,culture,humanisme,14ème,italie,rebirth,humanism,art,italy,14th,century,cultural,revival,classical,enlightenment','F'), // RENAISSANCE
    W('livre,fiction,récit,littérature,auteur,novel,fiction,narrative,story,literature,prose,long,genre,written,storytelling','M'), // ROMAN
    W('art,19ème,émotion,nature,sentiment,romantic,emotion,nature,feeling,expressive,passionate,idealistic,individualistic,imaginative,lyrical','M'), // ROMANTISME
    W('critique,humour,moquerie,ironie,caricature,mockery,irony,ridicule,parody,humor,sarcasm,lampoon,witty,comic,biting','F'), // SATIRE
    W('art,statue,forme,pierre,marbre,carving,statue,form,stone,marble,artistic,three-dimensional,chisel,carved,molded','F'), // SCULPTURE
    W('dramaturge,anglais,hamlet,roméo,juliette,playwright,english,bard,tragedy,comedy,timeless,literary,genius,elizabethan,iconic','M'), // SHAKESPEARE
    W('musique,piano,classique,composition,solo,classical,piano,composition,solo,instrumental,movement,melody,structured,performance,opus','F'), // SONATE
    W('poème,14,vers,rimes,amour,poem,14,lines,rhyme,love,structured,romantic,lyrical,verse,literary','M'), // SONNET
    W('art,rêve,inconscient,dali,magritte,dreamlike,subconscious,bizarre,irrational,fantasy,freudian,automatism,unexpected,imaginative,revolutionary','M'), // SURRÉALISME
    W('musique,orchestre,mouvement,classique,beethoven,orchestra,movements,classical,grand,harmonious,opus,composition,elaborate,majestic,concert','F'), // SYMPHONIE
    W('peinture,toile,œuvre,art,frame,painting,canvas,artwork,framed,artistic,oil,masterpiece,hung,gallery,museum','M'), // TABLEAU
    W('scène,acteur,pièce,comédie,tragédie,stage,actor,play,drama,performance,theatrical,audience,curtain,playwright,live','M'), // THÉÂTRE
    W('bande,dessinée,hergé,aventure,belgique,comic,tintin,herge,adventure,reporter,belgian,milou,series,beloved,iconic','M'), // TINTIN
    W('peinture,toile,tissu,art,canvas,painting,fabric,cloth,artistic,stretched,oil,acrylic,surface,frame,linen','F'), // TOILE
    W('théâtre,drame,malheur,fin,triste,theater,drama,misfortune,sad,ending,tragic,downfall,fate,catharsis,sorrowful','F'), // TRAGÉDIE
    W('peintre,hollandais,tournesols,nuit,étoilée,vincent,dutch,painter,sunflowers,starry,night,post-impressionist,vivid,expressive,tortured','M'), // VAN-GOGH
    W('compositeur,italien,opéra,aida,traviata,giuseppe,italian,composer,opera,dramatic,melodic,romantic,grand,aria,legendary','M'), // VERDI
    W('ligne,poésie,strophe,rime,meter,line,poetry,stanza,rhyme,verse,poetic,rhythmic,literary,structured,syllable','M'), // VERS
    W('leonard,renaissance,génie,mona,lisa,cène,leonardo,renaissance,genius,polymath,painter,inventor,scientist,visionary,masterful','M'), // VINCI
    W('instrument,cordes,archet,musique,orchestre,strings,bow,music,orchestra,classical,violin,fiddle,melodious,concert,solo','M'), // VIOLON
    W('écrivain,philosophe,français,candide,lumières,philosopher,french,writer,enlightenment,satirist,wit,critical,intellectual,rationalist,influential','M'), // VOLTAIRE
    W('compositeur,allemand,opéra,ring,nibelungen,richard,german,composer,opera,dramatic,epic,mythological,intense,orchestral,revolutionary','M'), // WAGNER
    W('peinture,eau,transparent,délicat,brush,painting,water,transparent,delicate,color,fluid,soft,artistic,watercolor,light','F'), // AQUARELLE
    W('portrait,artiste,soi-même,peinture,self,portrait,artist,oneself,introspective,reflection,personal,identity,artistic,自画像,expression','M'), // AUTOPORTRAIT
    W('livre,succès,vente,populaire,best,selling,book,popular,successful,widely,read,commercial,hit,top,chart','M'), // BESTSELLER
    W('vie,récit,personne,autobiographie,biography,life,story,person,autobiography,account,historical,personal,chronicle,memoir,narrative','F'), // BIOGRAPHIE
    W('écriture,belle,art,chinoise,japonaise,beautiful,writing,art,script,elegant,chinese,japanese,decorative,artistic,penmanship','F'), // CALLIGRAPHIE
    W('musique,règle,composition,forme,classical,music,rule,composition,form,structure,strict,fugue,counterpoint,polyphonic,baroque','M'), // CANON
    W('chant,chœur,ensemble,voix,singing,choir,ensemble,voices,harmony,sacred,hymn,choral,liturgical,group,melodious','F'), // CHORALE
    W('musique,création,arrangement,composer,music,creation,arrangement,writing,original,melody,harmony,structure,opus,creative,score','F'), // COMPOSITION
    W('récit,court,fable,histoire,story,short,tale,narrative,fiction,folklore,fable,children,moral,bedtime,imaginative','M'), // CONTE
    W('analyse,jugement,évaluation,review,analysis,judgment,evaluation,assessment,commentary,opinion,appraisal,examination,interpretation,scholarly,literary','F'), // CRITIQUE
    W('scène,décoration,théâtre,backdrop,scenery,decoration,theater,set,stage,props,background,theatrical,design,visual,ambiance','M'), // DÉCORS
    W('conversation,échange,paroles,discussion,conversation,exchange,speech,discussion,talk,discourse,script,verbal,interaction,theatrical,communication','M'), // DIALOGUE
    W('publication,livre,maison,edition,publishing,book,house,print,release,version,imprint,publisher,literary,press,issued','F'), // ÉDITION
    W('texte,court,littéraire,réflexion,essay,short,text,literary,reflection,prose,analytical,written,argument,thoughtful,论文','M'), // ESSAI
    W('comédie,légère,bouffonnerie,humour,comedy,light,slapstick,humor,jest,buffoonery,theatrical,ridiculous,amusing,comic,playful','F'), // FARCE
    W('catégorie,style,type,littéraire,category,style,type,literary,classification,form,类型,artistic,mode,variety,division','M'), // GENRE
    W('peinture,opaque,épaisse,couleur,painting,opaque,thick,color,medium,pigment,paint,artistic,matte,body,coverage','F'), // GOUACHE
    W('art,visuel,design,illustration,graphic,visual,design,illustration,typography,layout,creative,artistic,communication,digital,branding','M'), // GRAPHISME
    W('poème,japonais,court,3,vers,poem,japanese,short,3,lines,syllables,nature,zen,concise,minimalist','M'), // HAÏKU
    W('image,religieuse,symbole,orthodoxe,image,religious,symbol,orthodox,sacred,panel,devotional,painted,byzantine,venerated,holy','F'), // ICÔNE
    W('image,dessin,livre,picture,drawing,book,visual,graphic,artwork,children,decorative,artistic,imagery,depicted,rendered','F'), // ILLUSTRATION
    W('histoire,mystère,suspense,complot,story,mystery,suspense,plot,twist,narrative,storyline,whodunit,thriller,captivating,engaging','F'), // INTRIGUE
    W('musique,swing,blues,improvisation,saxophone,music,swing,blues,improvisation,syncopated,bebop,cool,fusion,rhythmic,smooth','M'), // JAZZ
    W('opéra,texte,paroles,lyrics,opera,text,words,script,sung,aria,recitative,written,musical,operatic,vocal','M'), // LIBRETTO
    W('chant,polyphonique,renaissance,vocal,polyphonic,renaissance,vocal,unaccompanied,harmony,secular,choral,part,song,melodious,early','M'), // MADRIGAL
    W('art,silence,geste,expression,pantomime,art,silence,gesture,expression,pantomime,theatrical,nonverbal,physical,clown,expressive','M'), // MIME
    W('peinture,petite,détail,précis,painting,small,detail,precise,delicate,ornate,manuscript,intricate,miniature,fine,illuminated','F'), // MINIATURE
    W('théâtre,discours,seul,parole,theater,speech,alone,soliloquy,solo,dramatic,introspective,spoken,performance,character,self','M'), // MONOLOGUE
    W('thème,élément,répétition,design,theme,element,repetition,design,pattern,decorative,recurring,artistic,ornamental,visual,leitmotif','M'), // MOTIF
    W('récit,histoire,voix,storytelling,narrative,story,voice,narrator,point,of,view,first,person,omniscient,tale','M'), // NARRATEUR
    W('poème,lyrique,classique,strophe,poem,lyrical,classical,stanza,verse,song,ancient,greek,elevated,choral,celebratory','F'), // ODE
    W('opéra,léger,comique,musical,opera,light,comic,musical,humorous,entertaining,viennese,playful,melodic,theatrical,cheerful','F'), // OPÉRETTE
    W('spectacle,art,vivant,public,show,art,live,audience,theatrical,concert,exhibition,presentation,artistic,event,demonstration','F'), // PERFORMANCE
    W('art,profondeur,3d,point,fuite,art,depth,3d,vanishing,point,spatial,horizon,linear,foreshortening,dimensional','F'), // PERSPECTIVE
    W('pensée,sagesse,réflexion,socrate,thought,wisdom,reflection,socrates,plato,metaphysics,ethics,logic,reasoning,intellectual,profound','F'), // PHILOSOPHIE
    W('texte,écrit,littérature,paragraphe,text,written,literature,paragraph,sentences,narrative,composition,non,verse,expository,written','F'), // PROSE
    W('poème,4,vers,strophe,poem,4,lines,stanza,verse,rhyme,quatrain,structured,poetic,metrical,literary','M'), // QUATRAIN
    W('vers,sonorité,poésie,assonance,verse,sound,poetry,assonance,rhyme,scheme,end,words,pattern,poetic,melodious','F'), // RIME
    W('film,histoire,script,dialogue,film,story,script,dialogue,screenplay,plot,narrative,written,cinematic,treatment,dramatization','M'), // SCÉNARIO
    W('poème,vers,unité,stanza,poem,verse,unit,lines,grouped,division,rhyme,pattern,structured,poetic,organized','F'), // STROPHE
    W('manière,artistique,genre,expression,manner,artistic,genre,expression,aesthetic,distinctive,characteristic,approach,artistic,signature,mode','M'), // STYLE
    W('œuvre,quatre,parties,série,work,four,parts,series,cycle,epic,saga,quartet,related,novels,extended','F'), // TÉTRALOGIE
    W('œuvre,trois,parties,série,work,three,parts,series,cycle,trilogy,related,sequential,trilogy,epic,connected','F'), // TRILOGIE
    W('théâtre,comédie,légère,musical,theater,comedy,light,musical,variety,entertainment,burlesque,humorous,song,dance,popular','M'), // VAUDEVILLE
  ],

  '🔬 Sciences & Nature': [
W('chimie,ph,corrosif,liquide,base,citrique,solution,sulfurique,laboratoire,brûler,dangereux,réaction,concentration,chemical,dissolve','M'), // ACIDE
    W('génétique,double,hélice,cellule,chromosome,watson,crick,code,mutation,heredité,biologie,nucleotide,sequence,genome,information','M'), // ADN
    W('magnétique,attraction,fer,boussole,pôle,nord,sud,magnetic,attraction,iron,compass,pole,north,south,magnetism','M'), // AIMANT
    W('plante,aquatique,verte,photosynthèse,mer,océan,seaweed,plant,aquatic,green,photosynthesis,marine,chlorophyll,underwater,organism','F'), // ALGUE
    W('électricité,unité,intensité,courant,andré,marie,electricity,unit,intensity,current,measurement,circuit,electrical,flow,charge','M'), // AMPÈRE
    W('être,vivant,faune,espèce,mammifère,règne,creature,living,being,fauna,species,kingdom,organism,wildlife,zoology','M'), // ANIMAL
    W('particule,élément,noyau,électron,proton,neutron,matière,particle,nucleus,electron,matter,molecular,chemical,quantum,structure','M'), // ATOME
    W('microbe,germe,infection,pathogène,cellule,microorganism,germ,infection,pathogen,cell,microscopic,disease,prokaryote,colony,bacterial','F'), // BACTÉRIE
    W('univers,explosion,origine,cosmos,cosmologie,expansion,universe,explosion,origin,cosmos,cosmology,expansion,primordial,singularity,astronomical','M'), // BIG-BANG
    W('science,vivant,cellule,organisme,étude,zoologie,science,living,cell,organism,study,life,botany,genetics,ecology','F'), // BIOLOGIE
    W('unité,vie,noyau,membrane,organisme,microscope,unit,life,nucleus,membrane,organism,microscopic,tissue,division,mitosis','F'), // CELLULE
    W('science,élément,réaction,molécule,laboratoire,atome,science,element,reaction,molecule,laboratory,compound,formula,equation,periodic','F'), // CHIMIE
    W('génétique,adn,cellule,x,y,heredité,dna,cell,x,y,heredity,gene,genetic,nucleus,karyotype','M'), // CHROMOSOME
    W('électrique,électronique,courant,résistance,câble,electric,electronic,current,resistance,wire,voltage,electrical,path,loop,diagram','M'), // CIRCUIT
    W('météo,température,atmosphère,réchauffement,weather,temperature,atmosphere,warming,environment,meteorology,precipitation,seasonal,global,change,zone','M'), // CLIMAT
    W('organe,sang,battement,cardiaque,pompe,vital,organ,blood,beating,cardiac,pump,vital,muscle,circulation,rhythm','M'), // CŒUR
    W('astre,espace,queue,noyau,glace,halley,celestial,space,tail,nucleus,ice,orbit,solar,system,periodic','F'), // COMÈTE
    W('mathématique,physique,invariable,nombre,pi,gravité,mathematical,physics,invariant,number,universal,fixed,unchanging,fundamental,equation','F'), // CONSTANTE
    W('physique,matière,humain,anatomie,organe,physical,matter,human,anatomy,organ,biological,organism,corporeal,flesh,somatic','M'), // CORPS
    W('minéral,transparent,structure,quartz,diamant,géométrique,mineral,transparent,structure,geometry,lattice,faceted,solid,formation,gemstone','M'), // CRISTAL
    W('évolution,naturaliste,sélection,naturelle,finches,galapagos,evolution,naturalist,selection,natural,species,origin,theory,adaptation,scientific','M'), // DARWIN
    W('son,bruit,intensité,volume,acoustique,mesure,sound,noise,intensity,volume,acoustic,measurement,loudness,db,audio','M'), // DÉCIBEL
    W('pierre,précieuse,carbone,dur,brillant,gemstone,precious,carbon,hard,brilliant,clear,jewelry,engagement,faceted,carat','M'), // DIAMANT
    W('préhistorique,reptile,extinct,jurassic,fossile,t-rex,prehistoric,reptile,extinct,jurassic,fossil,mesozoic,paleontology,giant,ancient','M'), // DINOSAURE
    W('courant,énergie,voltage,lumière,foudre,current,energy,voltage,light,lightning,power,electron,flow,shock,electrical','F'), // ÉLECTRICITÉ
    W('particule,charge,négative,atome,orbite,particle,charge,negative,atom,orbit,subatomic,quantum,electron,shell,cloud','M'), // ÉLECTRON
    W('chimie,périodique,atome,hydrogène,oxygène,chemistry,periodic,atom,hydrogen,oxygen,substance,pure,basic,constituent,fundamental','M'), // ÉLÉMENT
    W('physique,force,travail,cinétique,potentielle,joule,physics,force,work,kinetic,potential,power,capacity,conservation,renewable','F'), // ÉNERGIE
    W('protéine,catalyseur,biochimie,réaction,biologique,protein,catalyst,biochemistry,reaction,biological,digestive,metabolic,substrate,active,site','F'), // ENZYME
    W('biologie,animal,végétal,taxonomie,classification,biology,animal,plant,taxonomy,classification,organism,genus,biodiversity,fauna,flora','F'), // ESPÈCE
    W('astre,ciel,soleil,lumineux,constellation,celestial,sky,sun,luminous,constellation,galaxy,shine,twinkle,astronomy,distant','F'), // ÉTOILE
    W('darwin,sélection,naturelle,adaptation,espèce,darwin,selection,natural,adaptation,species,mutation,survival,fittest,genetic,change','F'), // ÉVOLUTION
    W('nucléaire,atome,uranium,énergie,réaction,nuclear,atom,uranium,energy,reaction,split,chain,radioactive,power,atomic','F'), // FISSION
    W('physique,newton,gravité,travail,pression,physics,newton,gravity,work,pressure,push,pull,energy,motion,vector','F'), // FORCE
    W('ancien,préhistorique,dinosaure,roche,paléontologie,ancient,prehistoric,dinosaur,rock,paleontology,remains,petrified,excavation,geology,extinct','M'), // FOSSILE
    W('physique,résistance,mouvement,frottement,chaleur,physics,resistance,movement,rubbing,heat,surface,contact,kinetic,drag,force','F'), // FRICTION
    W('nucléaire,atome,hydrogène,énergie,soleil,nuclear,atom,hydrogen,energy,sun,combine,merge,reaction,thermonuclear,power','F'), // FUSION
    W('espace,étoiles,voie,lactée,univers,space,stars,milky,way,universe,spiral,cluster,nebula,cosmic,astronomical','F'), // GALAXIE
    W('état,matière,air,oxygène,azote,state,matter,air,oxygen,nitrogen,vapor,atmosphere,invisible,molecule,compress','M'), // GAZ
    W('biologie,adn,hérédité,chromosome,mutation,biology,dna,heredity,chromosome,mutation,genome,allele,trait,inheritance,gene','F'), // GÉNÉTIQUE
    W('physique,newton,attraction,terre,masse,physics,newton,attraction,earth,mass,weight,force,universal,acceleration,pull','F'), // GRAVITÉ
    W('chimie,substance,régulation,endocrine,insuline,chemistry,substance,regulation,endocrine,insulin,gland,secretion,biological,thyroid,estrogen','F'), // HORMONE
    W('télescope,espace,nasa,astronomie,observation,telescope,space,nasa,astronomy,observation,orbit,deep,field,cosmic,universe','M'), // HUBBLE
    W('élément,h,eau,léger,gaz,element,h,water,light,gas,atom,diatomic,fuel,molecule,combustible','M'), // HYDROGÈNE
    W('animal,arthropode,antennes,six,pattes,métamorphose,animal,arthropod,antennae,six,legs,metamorphosis,bug,winged,invertebrate,exoskeleton','M'), // INSECTE
    W('atome,charge,électrique,positif,négatif,atom,charge,electric,positive,negative,particle,plasma,solution,ionization,electrolyte','M'), // ION
    W('atome,élément,neutron,radioactif,carbone,atom,element,neutron,radioactive,carbon,variant,mass,number,decay,unstable','M'), // ISOTOPE
    W('température,zéro,absolu,degré,thermodynamique,temperature,zero,absolute,degree,thermodynamic,273,celsius,coldest,thermal,measurement','M'), // KELVIN
    W('lumière,rayon,amplification,rouge,précision,light,beam,amplification,red,precision,coherent,focused,cutting,surgery,optical','M'), // LASER
    W('géographie,parallèle,équateur,nord,sud,geography,parallel,equator,north,south,coordinate,degree,horizontal,climate,zone','F'), // LATITUDE
    W('physique,photon,onde,électromagnétique,vitesse,physics,photon,wave,electromagnetic,speed,bright,ray,vision,spectrum,illuminate','F'), // LUMIÈRE
    W('physique,attraction,aimant,fer,champ,physics,attraction,magnet,iron,field,magnetic,pole,compass,force,dipole','M'), // MAGNÉTISME
    W('animal,vertébré,lait,poilu,vivipare,animal,vertebrate,milk,hairy,viviparous,warm,blooded,placental,mammal,nurse','M'), // MAMMIFÈRE
    W('physique,poids,matière,kilogramme,inertie,physics,weight,matter,kilogram,inertia,量,density,volume,measurement,gravitational','F'), // MASSE
    W('physique,substance,atome,solide,liquide,gaz,physics,substance,atom,solid,liquid,gas,物质,composition,state,physical','F'), // MATIÈRE
    W('cellule,biologie,sélective,perméable,lipide,cell,biology,selective,permeable,lipid,barrier,boundary,phospholipid,semi,permeable','F'), // MEMBRANE
    W('élément,fer,or,cuivre,conducteur,element,iron,gold,copper,conductor,alloy,metallic,shiny,malleable,mineral','M'), // MÉTAL
    W('espace,étoile,filante,atmosphère,chute,space,shooting,star,atmosphere,fall,meteorite,asteroid,fragment,streak,fireball','M'), // MÉTÉORE
    W('instrument,lentille,grossissement,cellule,biologie,instrument,lens,magnification,cell,biology,optical,zoom,observe,specimen,lab','M'), // MICROSCOPE
    W('chimie,atome,liaison,composé,h2o,chemistry,atom,bond,compound,h2o,covalent,structure,chemical,formula,molecular','F'), // MOLÉCULE
    W('génétique,adn,changement,évolution,hasard,genetics,dna,change,evolution,random,gene,alteration,variation,genetic,spontaneous','F'), // MUTATION
    W('particule,atome,noyau,charge,neutre,particle,atom,nucleus,charge,neutral,subatomic,proton,neutron,mass,nuclear','M'), // NEUTRON
    W('physicien,gravité,lois,mouvement,pomme,physicist,gravity,laws,motion,apple,calculus,classical,mechanics,isaac,scientific','M'), // NEWTON
    W('atome,proton,neutron,centre,nucléaire,atom,proton,neutron,center,nuclear,core,nucleus,central,dense,charged','M'), // NOYAU
    W('mer,eau,salée,vague,profond,sea,water,salty,wave,deep,marine,pacific,atlantic,blue,vast','M'), // OCÉAN
    W('physique,vibration,son,lumière,fréquence,physics,vibration,sound,light,frequency,oscillation,electromagnetic,wavelength,amplitude,propagation','F'), // ONDE
    W('biologie,corps,fonction,cœur,poumon,biology,body,function,heart,lung,anatomical,vital,tissue,system,biological','M'), // ORGANE
    W('élément,o,air,respiration,combustion,element,o,air,respiration,combustion,gas,vital,breathe,atmosphere,oxidation','M'), // OXYGÈNE
    W('atmosphère,o3,couche,protection,ultraviolet,atmosphere,o3,layer,protection,ultraviolet,stratosphere,hole,depletion,shield,oxygen','M'), // OZONE
    W('science,matière,énergie,newton,einstein,science,matter,energy,newton,einstein,quantum,mechanics,laws,theoretical,force','F'), // PHYSIQUE
    W('astre,orbite,terre,mars,jupiter,celestial,orbit,earth,mars,jupiter,solar,system,sphere,astronomy,rotation','F'), // PLANÈTE
    W('état,matière,ionisé,électrique,étoile,state,matter,ionized,electric,star,fourth,glow,sun,fusion,charged','M'), // PLASMA
    W('plante,grain,allergie,reproduction,fleur,plant,grain,allergy,reproduction,flower,spring,bee,pollination,yellow,dust','M'), // POLLEN
    W('organe,respiration,air,oxygène,thorax,organ,respiration,air,oxygen,thorax,breathing,alveoli,lung,chest,vital','M'), // POUMON
    W('physique,force,atmosphère,bar,pascal,physics,force,atmosphere,bar,pascal,atmospheric,气压,compression,measurement,fluid','F'), // PRESSION
    W('particule,atome,charge,positive,noyau,particle,atom,charge,positive,nucleus,subatomic,hydrogen,核子,mass,number','M'), // PROTON
    W('physique,quantique,énergie,planck,particule,physics,quantum,energy,planck,particle,discrete,photon,mechanics,wave,subatomic','M'), // QUANTUM
    W('plante,système,absorption,sol,eau,plant,system,absorption,soil,water,underground,anchor,root,vegetable,network','F'), // RACINE
    W('lumière,ligne,soleil,laser,beam,light,line,sun,laser,radiation,electromagnetic,straight,optical,spectrum,shine','M'), // RAYON
    W('einstein,physique,espace,temps,e=mc²,einstein,physics,space,time,theory,general,special,gravity,spacetime,curvature','F'), // RELATIVITÉ
    W('animal,écaille,serpent,lézard,crocodile,animal,scale,snake,lizard,crocodile,cold,blooded,vertebrate,crawl,egg','M'), // REPTILE
    W('biologie,poumon,air,oxygène,inspiration,biology,lung,air,oxygen,inhalation,breathing,cellular,aerobic,vital,process','F'), // RESPIRATION
    W('espace,artificiel,orbite,communication,gps,space,artificial,orbit,communication,gps,dish,transmission,signal,launch,technology','M'), // SATELLITE
    W('terre,tremblement,magnitude,richter,tectonique,earth,quake,magnitude,richter,tectonic,震,tremor,fault,震级,shake','M'), // SÉISME
    W('minéral,nacl,mer,cuisine,cristal,mineral,nacl,sea,cooking,crystal,sodium,chloride,味,seasoning,table','M'), // SEL
    W('astre,étoile,système,solaire,lumière,star,solar,system,light,heat,yellow,center,photosphere,helium,hydrogen','M'), // SOLEIL
    W('chimie,liquide,dissout,concentration,solvant,chemistry,liquid,dissolves,concentration,solvent,mixture,溶液,aqueous,dilute,saturated','F'), // SOLUTION
    W('lumière,couleur,arc-en-ciel,prisme,visible,light,color,rainbow,prism,visible,electromagnetic,wavelength,频谱,analysis,continuous','M'), // SPECTRE
    W('chaleur,degré,celsius,fahrenheit,thermomètre,heat,degree,celsius,fahrenheit,thermometer,温度,thermal,warm,cold,measurement','F'), // TEMPÉRATURE
    W('électricité,voltage,circuit,volt,potentiel,electricity,voltage,circuit,volt,potential,electric,pressure,电压,difference,current','F'), // TENSION
    W('planète,monde,globe,géographie,sol,planet,world,globe,geography,soil,地球,surface,orbit,地,atmosphere','F'), // TERRE
    W('vague,géant,séisme,océan,destruction,wave,giant,earthquake,ocean,destruction,海啸,tidal,disaster,coastal,devastating','M'), // TSUNAMI
    W('élément,radioactif,u,nucléaire,enrichi,element,radioactive,u,nuclear,enriched,heavy,atomic,fission,reactor,decay','M'), // URANIUM
    W('médecine,injection,immunité,prévention,virus,medicine,injection,immunity,prevention,virus,疫苗,inoculation,dose,immunization,antibody','M'), // VACCIN
    W('état,matière,eau,gaz,évaporation,state,matter,water,gas,evaporation,steam,mist,蒸汽,condensation,atmospheric','F'), // VAPEUR
    W('plante,flore,chlorophylle,photosynthèse,vert,plant,flora,chlorophyll,photosynthesis,green,botanical,vegetation,leaf,organism,kingdom','M'), // VÉGÉTAL
    W('physique,rapidité,mètre,seconde,km,physics,speed,meter,second,km,velocity,速度,fast,rate,acceleration','F'), // VITESSE
    W('micro-organisme,infection,grippe,covid,pathogène,microorganism,infection,flu,covid,pathogen,病毒,viral,contagious,particle,disease','M'), // VIRUS
    W('montagne,éruption,lave,magma,cratère,mountain,eruption,lava,magma,crater,火山,explosive,dormant,active,ash','M'), // VOLCAN
    W('électricité,unité,tension,voltage,v,electricity,unit,tension,voltage,v,伏特,potential,measurement,circuit,electrical','M'), // VOLT
    W('électricité,puissance,unité,énergie,consommation,electricity,power,unit,energy,consumption,瓦特,wattage,measurement,electrical,joule','M'), // WATT
    W('élément,xe,gaz,noble,rare,element,xe,gas,noble,rare,氙,inert,colorless,odorless,atomic','M'), // XÉNON
    W('science,animal,faune,étude,biologie,science,animal,fauna,study,biology,动物学,classification,behavior,species,vertebrate','F'), // ZOOLOGIE
    W('méthode,calcul,informatique,procédure,programmation,method,calculation,computer,procedure,programming,算法,step,process,logic,computational','M'), // ALGORITHME
    W('géométrie,ligne,rotation,symétrie,coordonnée,geometry,line,rotation,symmetry,coordinate,轴,pivot,central,reference,dimension','M'), // AXE
    W('écologie,variété,espèces,écosystème,richesse,ecology,variety,species,ecosystem,richness,生物多样性,conservation,habitat,flora,fauna','F'), // BIODIVERSITÉ
    W('écologie,environnement,climat,écosystème,habitat,ecology,environment,climate,ecosystem,habitat,生物群落,terrestrial,aquatic,community,zone','M'), // BIOME
    W('animal,viande,prédateur,lion,tigre,animal,meat,predator,lion,tiger,肉食动物,hunter,carnivorous,食肉,teeth','M'), // CARNIVORE
    W('écologie,alimentaire,énergie,prédateur,proie,ecology,food,energy,predator,prey,食物链,trophic,level,producer,consumer','F'), // CHAÎNE
    W('géométrie,forme,circulaire,volcan,pin,geometry,shape,circular,volcano,pine,圆锥,conical,pointed,base,apex','M'), // CÔNE
    W('biologie,période,vie,eau,carbone,biology,period,life,water,carbon,循环,rotation,phase,recurring,natural','M'), // CYCLE
    W('biologie,bactérie,champignon,pourriture,recyclage,biology,bacteria,fungus,rot,recycling,分解,decay,breakdown,organic,matter','F'), // DÉCOMPOSITION
    W('écologie,environnement,biome,habitat,interaction,ecology,environment,biome,habitat,interaction,生态系统,community,balance,food,web','M'), // ÉCOSYSTÈME
    W('géologie,usure,vent,eau,temps,geology,wear,wind,water,time,侵蚀,weathering,degradation,sediment,natural','F'), // ÉROSION
    W('animal,plante,herbe,vache,mouton,animal,plant,grass,cow,sheep,草食动物,grazer,herbivorous,食草,vegetation','M'), // HERBIVORE
    W('biologie,animal,oiseau,déplacement,saison,biology,animal,bird,movement,season,迁徙,travel,pattern,instinct,seasonal','F'), // MIGRATION
    W('écologie,habitat,rôle,espèce,fonction,ecology,habitat,role,species,function,生态位,ecological,position,adaptation,specialization','F'), // NICHE
    W('animal,varié,ours,cochon,humain,animal,varied,bear,pig,human,杂食动物,omnivorous,食杂,diet,flexible','M'), // OMNIVORE
    W('plante,lumière,chlorophylle,oxygène,co2,plant,light,chlorophyll,oxygen,co2,光合作用,synthesis,green,glucose,energy','F'), // PHOTOSYNTHÈSE
    W('plante,insecte,abeille,pollen,reproduction,plant,insect,bee,pollen,reproduction,授粉,pollinator,fertilization,flower,transfer','F'), // POLLINISATION
    W('animal,chasse,carnivore,lion,aigle,animal,hunt,carnivore,lion,eagle,捕食者,predator,hunter,top,食肉','M'), // PRÉDATEUR
    W('animal,chasse,victime,gazelle,lapin,animal,hunted,victim,gazelle,rabbit,猎物,prey,target,食物,vulnerable','F'), // PROIES
    W('environnement,déchet,réutilisation,papier,plastique,environment,waste,reuse,paper,plastic,回收,recycle,sustainability,循环,green','M'), // RECYCLAGE
    W('géologie,roche,dépôt,couche,erosion,geology,rock,deposit,layer,erosion,沉积物,sedimentary,particle,soil,accumulation','M'), // SÉDIMENT
    W('terre,terreau,agriculture,humus,fertile,earth,dirt,agriculture,humus,fertile,土壤,ground,cultivate,topsoil,nutrient','M'), // SOL
    W('écologie,changement,communauté,étapes,évolution,ecology,change,community,stages,evolution,演替,progression,ecological,development,primary','F'), // SUCCESSION
    W('biologie,mutualisme,relation,bénéfice,lichen,biology,mutualism,relationship,benefit,lichen,共生,互利,cooperation,互助,partnership','F'), // SYMBIOSE
    W('géographie,région,climat,tempéré,tropique,geography,region,climate,temperate,tropical,区域,area,belt,地带,latitude','F'), // ZONE
  ],

  '⚽ Sports & Loisirs': [

W('autorité,terrain,décision,impartialité,sanction,carton,sifflet,litige,règle,officiel,contrôle,justice,discipline,match,gestion','M'), // ARBITRE

W('piste,sprint,endurance,lancer,saut,olympique,chrono,record,médaille,stade,haies,décathlon,perche,marathon,athlète','M'), // ATHLÉTISME

W('volant,filet,smash,rapide,raquette,asie,double,service,plume,court,échange,réflexe,indoor,tournoi,précision','M'), // BADMINTON

W('rebond,sphère,gonflé,cuir,passe,tirer,marquer,équipe,jeu,terrain,air,contrôle,dribble,match,score','M'), // BALLON

W('batte,base,diamond,lancer,homerun,gant,manche,mlb,strike,receveur,casque,américain,inning,stadium,ligue','M'), // BASEBALL

W('dribble,panier,rebond,dunk,parquet,nba,shoot,raquette,équipe,chrono,américain,5 joueurs,faute,finale,arceau','M'), // BASKET

W('queue,8 noire,poche,table verte,craie,carambole,bandes,snooker,boule,triangle,feutrine,viser,blanche,angle,point','M'), // BILLARD

W('quilles,strike,spare,piste huilée,lancer,boule lourde,chaussures spéciales,frame,score,10,alignement,gouttière,club,loisir,impact','M'), // BOWLING

W('ring,gants,round,uppercut,ko,coin,arbitre,catégorie,punch,combat,poids,lourd,esquive,cordes,direct','F'), // BOXE

W('marquer,filet,score,objectif,point décisif,frappe,équipe,attaque,réussite,célébration,stadium,adversaire,action,victoire,avantage','M'), // BUT

W('rivière,pagaie,eau vive,embarcation,rapide,biplace,descente,parcours,course,courant,équilibre,amont,slalom,exploration,barque','M'), // CANOË

W('spectacle,lutte,ring,masqué,show,wwe,projection,scénarisé,prise,public,ceinture,choc,acrobatique,combat,divertissement','M'), // CATCH

W('premier,titre,podium,gagnant,trophée,meilleur,victoire,or,finale,compétition,élite,succès,leader,exploit,consécration','M'), // CHAMPION

W('mesure,temps,seconde,précision,course,arrivée,départ,compteur,tour,record,digital,pression,performance,intervalle,réaction','M'), // CHRONOMÈTRE

W('pédale,selle,étape,col,maillot jaune,peloton,route,sprint,grimpeur,braquet,échappée,casque,roue,ascension,tour','M'), // CYCLISME

W('plateau,diagonale,pions,prise forcée,stratégie,noir et blanc,alignement,blocage,jeu,damier,adversaire,avancer,obligatoire,tactique,fin','F'), // DAME

W('hippodrome,cheval,jockey,paris,galope,course prestigieuse,printemps,coupe,ville rivale,ligne droite,turf,enjeu,galop,épreuve,public','M'), // DERBY

W('rotation,lancer,cercle,athlète,engin,jet,distance,concours,olympique,champ,force,trajectoire,performance,poids,aire','M'), // DISQUE

W('contrôle,feinte,balle,crochet,main,terrain,manœuvre,attaquer,progresser,adversaire,technique,maîtrise,rapide,coordination,espace','M'), // DRIBBLE

W('saut,puissance,anneau,smash,panier,explosif,contre-attaque,public,highlight,nba,énergie,verticalité,force,contact,acrobatie','M'), // DUNK

W('roi,mat,ouverture,cavalier,tour,stratégie,échiquier,noir et blanc,prise,réflexion,tactique,grand maître,pièce,attaque,jeu','M'), // ÉCHECS

W('piste,masque,sabre,touche,duel,fleuret,priorité,attaque,parade,estoc,blanc,électrique,main,arme,combat','F'), // ESCRIME

W('ovale,en-but,aplati,5 points,mêlée,transformation,ligne,attaque,avancer,contact,ruck,essai collectif,arbitre,stade,action','M'), // ESSAI

W('entraînement,salle,musculation,cardio,forme,santé,abdos,coaching,renforcement,programme,transpiration,effort,corps,exercice,discipline','M'), // FITNESS

W('cible,bullseye,lancer,précision,pub,tableau,main stable,score,fléchette,viser,jeu mural,concentration,loisir,point,compétition','F'), // FLÉCHETTES

W('pelouse,11 joueurs,corner,penalty,ligue,attaquant,mi-temps,dribble,coupe du monde,stade,arbitre,filet,équipe,goal,ballon','M'), // FOOTBALL

W('contact irrégulier,sanction,sifflet,pénalité,jeu arrêté,avertissement,anti-sportif,règle,arbitre,carton,excès,interdiction,action,discipline,erreur','M'), // FOUL

W('green,trou,par,club,birdie,putt,fairway,caddy,drive,18,balle blanche,terrain vallonné,précision,élégance,practice','M'), // GOLF

W('poutre,sol,barres,anneaux,souplesse,acrobatie,agrès,notation,équilibre,rotation,salto,artistique,performance,compétition,maîtrise','F'), // GYMNASTIQUE

W('barre,arraché,épaulé-jeté,charge,lourd,force,plateforme,disques,compétition,record,puissance,prise,explosif,haltère,performance','F'), // HALTÉROPHILIE

W('7 joueurs,petit terrain,jet à 7,gardien,zone,rapide,contre-attaque,dribble à la main,filet,faute,engagement,championnat européen,tir,équipe,but','M'), // HANDBALL

W('glace,patins,palet,crosse,nhl,mise au jeu,charge,slapshot,goalie,patinoire,contact,vitesse,équipe,filet,match','M'), // HOCKEY

W('kimono,ceinture,couleur,projection,tatami,ippon,clé,discipline,japonais,chute,immobilisation,combat,dojo,respect,prise','M'), // JUDO

W('kata,coup de pied,dojo,ceinture noire,frappe,japon,blocage,cri,combat codifié,discipline,maître,technique,attaque,esquive,grade','M'), // KARATÉ

W('mono-place,eau vive,pagaie eskimo,descente,rapide,slalom,courant,équilibre,embarcation étroite,casque,compétition,rivière,manche,parcours,porte','M'), // KAYAK

W('victoire expéditive,combat,compte jusqu’à 10,ring,frappe,décisif,fin immédiate,arbitre,boxe,puissance,chute,impact,adversaire,round,knockout','M'), // KO

W('engin,jet,distance,concours,aire circulaire,rotation,force,performance,athlète,mesure,championnat,explosif,technique,terrain,record','M'), // LANCER

W('42 kilomètres,endurance,départ massif,ravitaillement,temps officiel,arrivée,record,ville,course longue,stamina,préparation,effort,compétition,dossard,ligne finale','M'), // MARATHON

W('rencontre,adversaire,score,mi-temps,terrain,compétition,arbitre,équipe,duel,calendrier,affrontement,public,résultat,retour,aller','M'), // MATCH

W('podium,or,argent,bronze,cérémonie,récompense,athlète,compétition,distinction,honneur,trophée,performance,olympique,classement,remise','F'), // MÉDAILLE

W('piscine,crawl,brasse,papillon,longueur,bassin,plongeon,virage,chrono,ligne d’eau,maillot,lunettes,compétition,épreuve,record','F'), // NATATION

W('ligue américaine,finals,playoffs,franchise,superstar,parquet,draft,conférence,match,panier,championnat,basket professionnel,équipe,titre,show','F'), // NBA

W('cinq anneaux,flamme,jeux mondiaux,athlète,cérémonie,drapeau,compétition internationale,podium,médaille,esprit d’unité,village,épreuve,discipline,été,hiver','M'), // OLYMPIQUE

W('faute dans la surface,point blanc,tir arrêté,gardien,pression,un contre un,réussite,filet,arbitre,stade,décisif,football,match,score,sanction','M'), // PENALTY

W('boules métalliques,cochonnet,terrain sablonneux,provence,pointage,tir,extérieur,loisir estival,mesure,club,compétition locale,précision,équipe,distance,jeu','F'), // PÉTANQUE

W('table,filet,palette,service,échange rapide,spin,balle légère,réflexe,smash,loisir indoor,tournoi,raquette,point,jeu,rebond','M'), // PING-PONG

W('cartes,mise,bluff,jetons,main,river,flop,all-in,croupier,stratégie,casino,pari,combinaison,gain,table','M'), // POKER

W('cheval,maillet,terrain long,équipe équestre,balle blanche,galop,aristocratique,casque,club,but,engagement,extérieur,match,score,équitation','M'), // POLO

W('eau vive,raft collectif,rapide,sensation forte,rivière,équipe,courant,casque,aventure,descente,pagaie,adrénaline,obstacle,plein air,parcours','M'), // RAFTING

W('voiture spéciale,épreuve chronométrée,route fermée,copilote,notes,virage,adhérence,championnat,équipe mécanique,asphalte,terre,spéciale,vitesse,pilote,compétition','M'), // RALLYE

W('cordage,manche,grip,frappe,service,cadre,tension,balle,court,échange,sport de raquette,prise,équipement,contrôle,outil','F'), // RAQUETTE

W('meilleure performance,temps officiel,exploit,limite mondiale,chronométrage,athlète,historique,certifié,progression,statistique,dépassement,compétition,référence,objectif,performance ultime','M'), // RECORD

W('ballon ovale,mêlée,plaquage,essai,transformation,ruck,ligne arrière,stade,contact,équipe,avancée,arbitre,match,territoire,combat','M'), // RUGBY

W('hauteur,longueur,triple,perche,impulsion,réception,sable,barre,performance,élan,concours,record,athlète,mesure,explosivité','M'), // SAUT

W('neige,slalom,descente,piste,montagne,remontée mécanique,carres,bâtons,virage,station,vitesse,compétition,glisse,hiver,discipline','M'), // SKI

W('planche,neige,half-pipe,trick,freestyle,pente,rotation,glisse,saut,montagne,rampe,figure,hiver,ride,compétition','M'), // SNOWBOARD

W('terrain rectangulaire,11 contre 11,ligue mondiale,attaquant,mi-temps,filet,coupe internationale,dribble,arbitre,penalty,stade,équipe,score,goal,football','M'), // SOCCER

W('court fermé,mur,raquette,balle rapide,échange court,fitness indoor,service,rebond,jeu intense,compétition,espace réduit,point,match,effort,club','M'), // SQUASH

W('vague,planche,océan,glisse,barrel,plage,pagaie allongée,combinaison,swell,équilibre,spot,hawaï,ride,compétition,figure','M'), // SURF

W('discipline coréenne,coup de pied,ceinture,kick,combat,forme codifiée,dojo,attaque,esquive,arbitre,olympique,grade,puissance,protection,maître','M'), // TAEKWONDO

W('court,service,échange,grand chelem,raquette,filet,volée,smash,ligne de fond,tournoi,terre battue,gazon,arbitre,point,match','M'), // TENNIS

W('cible,arc,carabine,précision,visée,centre,lancer,concentration,score,impact,discipline,arme,compétition,projectile,adresse','M'), // TIR

W('tableau éliminatoire,coupe,quart,demi,finale,affrontement,bracket,trophée,équipe,compétition,phase,qualification,match,titre,vainqueur','M'), // TOURNOI

W('toile tendue,rebond,saut vertical,acrobatie,rotation,impulsion,équilibre,figure,performance,gymnaste,air,réception,discipline,compétition,explosivité','M'), // TRAMPOLINE

W('natation,cyclisme,course à pied,transition,endurance,épreuve combinée,ironman,dossard,effort,compétition,temps total,discipline multiple,athlète,stamina,arrivée','M'), // TRIATHLON

W('cheval attelé,sulky,hippodrome,allure spécifique,driver,piste,course hippique,ligne droite,compétition,public,enjeu,paris,épreuve,discipline,arrivée','M'), // TROT

W('filet,équipe,rotation,réception,smash,service,plongeon,set,point,court intérieur,échange,bloc,attaque,match,6 joueurs','M'), // VOLLEY

W('tournoi sur gazon,tradition anglaise,grand chelem,court central,tennis,été,titre prestigieux,service,échange,favori,blanc intégral,raquette,match,finale,londres','M'), // WIMBLEDON

W('respiration,posture,zen,souplesse,asana,méditation,relaxation,équilibre intérieur,tapis,étirement,discipline douce,concentration,bien-être,paix,flexibilité','M'), // YOGA

W('service gagnant,tennis,point direct,power,retour impossible,ligne,match,score,avantage,échange court,efficacité,engagement,raquette,terrain,performance','M'), // ACE

W('flanc,largeur,attaque,position excentrée,centre,football,ailier,course rapide,ligne de touche,offensive,passe,équipe,jeu,zone latérale,débordement','F'), // AILE

W('match aller,retour,domicile,extérieur,score cumulé,qualification,phase éliminatoire,duel,tour suivant,rencontre,compétition,équipes,résultat,calendrier,affrontement','M'), // ALLER-RETOUR

W('haute montagne,corde,sommet,ascension,crampons,glacier,altitude,paroi,guide,expédition,rocher,neige,effort,alpiniste,pic','M'), // ALPINISME

W('décision officielle,litige,impartialité,gestion du match,autorité,sanction,règle,terrain,sifflet,discipline,contrôle,justice,compétition,gestionnaire,fonction','M'), // ARBITRAGE

W('gardien,sauvetage,blocage,filet,réflexe,plongeon,défense,protection,équipe,main ferme,action décisive,match,intervention,arrêt décisif,performance','M'), // ARRÊT

W('offensive,pression,assaut,marquer,avancer,équipe,action,territoire,adversaire,initiative,jeu,puissance,phase active,stratégie,mouvement','F'), // ATTAQUE

W('pointe,avant-centre,position offensive,buteur,attaque,équipe,football,zone centrale,marquer,match,ligne d’attaque,jeu,terrain,score,action','M'), // AVANT

W('saut arrière,rotation,acrobatie,impulsion,réception,figure aérienne,gymnaste,trick,équilibre,discipline,performance,air,sol,maîtrise,explosivité','M'), // BACKFLIP

W('score sous le par,golf,un coup d’avance,trou réussi,green,club,balle,parcours,performance,élégance,précision,jeu,compétition,putt,réussite','M'), // BIRDIE

W('escalade sans corde,bloc court,prise,mur,adhérence,problème,force des doigts,salle,extérieur,hauteur limitée,paroi,grimpeur,technique,équilibre,performance','M'), // BLOC

W('interruption stratégique,tennis,jeu décisif,service perdu,échange court,pause psychologique,set,score,retour,match,terrain,point clé,avantage,rythme,action','M'), // BREAK

W('attaquant prolifique,marque régulièrement,filet,football,score,équipe,position offensive,match,réussite,action décisive,terrain,frappe,compétition,avant,goal','M'), // BUTEUR

W('milieu du terrain,distribution,passe,équilibre,jeu collectif,transition,football,position centrale,équipe,création,contrôle,match,organisation,stratégie,zone médiane','M'), // CENTRE

W('piste fermée,tour chronométré,virage,compétition automobile,boucle,asphalte,ligne droite,course,moteur,championnat,pilote,adhérence,vitesse,garage,performance','M'), // CIRCUIT

W('ordre des équipes,points cumulés,rang,tableau,championnat,hiérarchie,saison,statistique,place,évolution,compétition,score,total,position officielle,performance','M'), // CLASSEMENT

W('entraîneur,gestion tactique,équipe,consignes,stratégie,vestiaire,motivation,remplacement,plan de jeu,match,leader,formation,analyse,préparation,direction','M'), // COACH

W('angle du terrain,drapeau,centre aérien,football,zone offensive,coup arrêté,filet,attaquant,stade,arbitre,frappe,action,équipe,match,ballon','M'), // CORNER

W('impact,frappe,tir,contact puissant,action offensive,jeu,technique,adversaire,puissance,exécution,match,discipline,réalisation,engagement,force','M'), // COUP

W('vitesse,endurance,ligne de départ,arrivée,chronométrage,dossard,parcours,compétition,effort,athlète,record,terrain,piste,classement,performance','F'), // COURSE

W('protection,repli,blocage,marquage,équipe,zone arrière,anticipation,contre,organisation,tactique,terrain,match,adversaire,solidité,stratégie','F'), // DÉFENSE

W('pente raide,chronométrée,neige,vitesse maximale,skieur,virage,montagne,compétition,hiver,discipline,glisse,casque,performance,arrivée,record','F'), // DESCENTE

W('paire,équipe de deux,terrain partagé,coordination,match,service,jeu collectif,tennis,partenaire,échange,compétition,score,rotation,stratégie,coopération','M'), // DOUBLE

W('frappe longue,golf,élan puissant,tee,fairway,balle blanche,club long,distance,green,performance,parcours,précision,compétition,jeu,impact','M'), // DRIVE

W('résistance,effort prolongé,stamina,marathon,discipline,préparation,mental,compétition,capacité physique,performance,longue durée,force intérieure,athlète,objectif,exploit','F'), // ENDURANCE

W('collectif,joueurs,maillot,cohésion,stratégie,match,club,formation,compétition,solidarité,terrain,remplaçants,score,objectif,victoire','F'), // ÉQUIPE

W('entraînement répétitif,routine,effort ciblé,progression,préparation physique,salle,coaching,discipline,forme,activité,technique,match,performance,programme,objectif','M'), // EXERCICE

W('étirement,muscle,amplitude,souplesse,échauffement,allongement,préparation,corps,flexibilité,discipline,performance,mouvement,progression,contrôle,respiration','F'), // EXTENSION

W('mise en jeu centrale,palet,hockey,arbitre,engagement,patinoire,équipe,confrontation,départ du jeu,cercle,contact,match,discipline,action,compétition','M'), // FACE-OFF

W('infraction,pénalité,sanction,arbitre,règle enfreinte,jeu arrêté,carton,discipline,contact irrégulier,match,équipe,terrain,compétition,avertissement,erreur','F'), // FAUTE

W('barrière centrale,maillage,division du terrain,tennis,volley,hauteur réglementaire,service,échange,match,structure,cordage,point,discipline,jeu,obstacle','M'), // FILET

W('dernier match,titre en jeu,apogée,stade comble,pression,compétition,équipe,score décisif,coupe,climax,rencontre ultime,performance,public,championnat,victoire','F'), // FINALE

W('tir puissant,contact franc,technique offensive,jeu,précision,discipline,équipe,match,impact,force,réalisation,action décisive,terrain,performance,attaque','F'), // FRAPPE

W('style libre,créativité,figure improvisée,discipline urbaine,rampe,rotation,glisse,compétition,trick,expression personnelle,énergie,performance,public,notation,liberté','M'), // FREESTYLE

W('profit,victoire,récompense,bonus,score positif,avantage,compétition,match,équipe,performance,réussite,objectif atteint,bénéfice,triomphe,acquisition','M'), // GAIN

W('dernier rempart,filet,plongeon,sauvetage,réflexe,équipe,poste clé,match,protection,défense,main ferme,action décisive,football,arrêt,performance','M'), // GARDIEN

W('but marqué,filet,réussite,score,objectif atteint,football,hockey,basket,équipe,match,terrain,frappe,action décisive,point,avantage','M'), // GOAL

W('ascension,prise rocheuse,paroi,progression verticale,force des doigts,hauteur,équilibre,grimpeur,mur,discipline,performance,corde,extérieur,salle,technique','F'), // GRIMPE

W('prise ferme,adhérence,raquette,club,main,contrôle,équipement,tennis,golf,outil sportif,serrage,stabilité,manche,performance,contact','M'), // GRIP

W('terrain naturel,herbe,baseball,zone de jeu,extérieur,équipe,match,ligne,discipline,performance,surface,compétition,aire,action,espace','M'), // GROUND

W('trois buts consécutifs,exploit rare,football,hockey,attaquant,match,performance,public,stade,score,triple réussite,équipe,action,compétition,célébration','M'), // HAT-TRICK

W('talon,pied arrière,frappe surprenante,football,contact inversé,action technique,match,terrain,attaque,équipe,improvisation,performance,contrôle,équilibre,jeu','M'), // HEEL

W('frappe hors du stade,baseball,circuit complet,quatre points,balle au-delà de la clôture,battes,match,score,exploit,public,équipe,performance,ligue,terrain,action','M'), // HOME-RUN

W('position interdite,ligne défensive,anticipation,arbitre,drapeau levé,football,attaque trop avancée,règle,match,terrain,sanction,équipe,action,compétition,faute','M'), // HORS-JEU

W('passe coupée,défense,football américain,anticipation,lecture du jeu,retour offensif,équipe,match,terrain,action décisive,compétition,ballon capté,performance,contre-attaque,point clé','F'), // INTERCEPTION

W('dunk puissant,basket,frappe dans le cercle,action spectaculaire,match,parquet,équipe,public,performance,attaque,contre-attaque,énergie,score,highlight,panier','M'), // JAM


    
  ],
};

const ALL_THEME_KEYS = Object.keys(THEMES_DATA);

const THEME_WORDS = {
  "🌍 Géographie": ['AMAZONIE', 'ANDES', 'ANTARCTIQUE', 'ARCTIQUE', 'AUSTRALIE', 'BERLIN', 'BRÉSIL', 'CANADA', 'CAP', 'CASABLANCA', 'CHINE', 'COLORADO', 'CONGO', 'CORÉE', 'DANUBE', 'DÉSERT', 'ÉGYPTE', 'ÉQUATEUR', 'EVEREST', 'FJORD', 'FLORENCE', 'FRANCE', 'GANGE', 'GROENLAND', 'HIMALAYA', 'INDE', 'IRLANDE', 'ISTANBUL', 'JAPON', 'KILIMANDJARO', 'KREMLIN', 'LAC', 'LIBAN', 'LISBONNE', 'LOIRE', 'MADAGASCAR', 'MALAISIE', 'MANILLE', 'MAROC', 'MÉDITERRANÉE', 'MEXIQUE', 'MONGOLIE', 'MOSCOU', 'NIL', 'NORVÈGE', 'NOUVELLE-ZÉLANDE', 'OCÉAN', 'OURAL', 'PANAMA', 'PARIS', 'PÉROU', 'PHILIPPINES', 'PÔLE', 'PORTUGAL', 'PRAGUE', 'PYONGYANG', 'QUEENSLAND', 'QUITO', 'RHIN', 'ROME', 'RUSSIE', 'SAHARA', 'SEINE', 'SÉOUL', 'SHANGHAI', 'SIBÉRIE', 'SINGAPOUR', 'SYDNEY', 'TASMANIE', 'TCHAD', 'TOKYO', 'TORONTO', 'TURQUIE', 'VATICAN', 'VIENNE', 'VOLGA', 'YELLOWSTONE', 'ZAMBÈZE', 'ZANZIBAR', 'ZIMBABWE', 'ARCHIPEL', 'ATOLL', 'CORDILLÈRE', 'DELTA', 'GOLFE', 'HÉMISPHÈRE', 'LATITUDE', 'LONGITUDE', 'MÉRIDIEN', 'PARALLÈLE', 'PÉNINSULE', 'PLATEAU', 'RÉCIF', 'STEPPE', 'TROPIQUE', 'VOLCAN'],
  "🎬 Divertissement": ['ACTEUR', 'ACTRICE', 'ALBUM', 'ANIMATION', 'BATMAN', 'BLOCKBUSTER', 'CANNES', 'CARTOON', 'CINÉMA', 'CLIP', 'COMÉDIE', 'CONCERT', 'DISNEY', 'DOLBY', 'ÉPISODE', 'FESTIVAL', 'FILM', 'FREDDIE', 'GRAMMY', 'HOLLYWOOD', 'HUMOUR', 'JAMES', 'JAZZ', 'MADONNA', 'MARVEL', 'MICHAEL', 'MUSIQUE', 'NETFLIX', 'NOBEL', 'OPÉRA', 'OSCAR', 'PARAMOUNT', 'POP', 'PREMIER', 'PRODUCTEUR', 'RAP', 'RÉALISATEUR', 'REMAKE', 'ROCK', 'ROLLING', 'SAGA', 'SCÉNARIO', 'SÉRIE', 'SITCOM', 'SONY', 'SPIELBERG', 'STAR', 'STREAMING', 'STUDIO', 'SUSPENSE', 'SYNDICATION', 'TÉLÉFILM', 'THRILLER', 'TIKTOK', 'TRAILER', 'TÉLÉVISION', 'UNIVERSAL', 'VARIÉTÉ', 'VEDETTE', 'VHS', 'VIDÉO', 'WARNER', 'WESTERN', 'YOUTUBE'],
  "🏛️ Histoire": ['ANTIQUITÉ', 'ARMISTICE', 'ATOMIQUE', 'BERLIN', 'BONAPARTE', 'CÉSAR', 'CHARLEMAGNE', 'CHURCHILL', 'CIVILISATION', 'COLONIE', 'CROISADES', 'DÉCLARATION', 'DICTATURE', 'DYNASTIE', 'EMPIRE', 'ÈRE', 'EXPLORATION', 'FASCISME', 'FÉODALITÉ', 'GUERRE', 'GUILLOTINE', 'HITLER', 'HOLOCAUSTE', 'INDÉPENDANCE', 'INQUISITION', 'JULIUS', 'LOUIS', 'MAGNA', 'MOYEN-ÂGE', 'MURAILLE', 'NAPOLÉON', 'NAZISME', 'PHARAON', 'PESTE', 'PHÉNICIENS', 'PRÉHISTOIRE', 'PYRAMIDE', 'REINE', 'RENAISSANCE', 'RÉPUBLIQUE', 'RÉVOLUTION', 'ROME', 'SIÈGE', 'SIÈCLE', 'TRAITÉ', 'VERSAILLES', 'VIKING', 'WATERLOO', 'ABSOLUTISME', 'ALLIANCE', 'ARCHE', 'ASSAUT', 'BASTILLE', 'BATAILLE', 'BLOCUS', 'CAPITULATION', 'CENTURION', 'CHRONOLOGIE', 'CONFÉDÉRATION', 'CONQUÊTE', 'CONSUL', 'COURONNE', 'DÉCRET', 'DICTATEUR', 'EXIL', 'FAMINE', 'FLOTTE', 'FONDATION', 'FORTERESSE', 'FRONT', 'GÉNOCIDE', 'GLADIATEUR', 'GOTHIQUE', 'GRÈVE', 'HÉGÉMONIE', 'HIÉROGLYPHE', 'INVASION', 'LÉGION', 'MANIFESTE', 'MASSACRE', 'MÉDIÉVAL', 'MONARCHIE', 'OCCUPATION', 'PAPE', 'PARTITION', 'PLÈBE', 'POGROM', 'PROTECTORAT', 'PROVINCE', 'RÉBELLION', 'RESTAURATION', 'SACRE', 'SCHISME', 'SPHINX', 'SUFFRAGE', 'TEMPLE', 'TRÔNE', 'TYRAN', 'VASSAL', 'VICTOIRE'],
  "🎨 Arts & Littérature": ['ABSTRAIT', 'ARCHITECTURE', 'AUTEUR', 'BALZAC', 'BAROQUE', 'BEETHOVEN', 'BALLET', 'CAMUS', 'CARICATURE', 'CATHÉDRALE', 'CÉRAMIQUE', 'CHEF-D-ŒUVRE', 'CHOPIN', 'CLASSIQUE', 'COLLAGE', 'COMÉDIE', 'CONCERTO', 'CUBISME', 'DALI', 'DESSIN', 'DRAME', 'DYSTOPIE', 'ÉPOPÉE', 'ESQUISSE', 'EXPRESSIONNISME', 'FABLE', 'FANTAISIE', 'FRESQUE', 'GOETHE', 'GOTHIQUE', 'GRAVURE', 'HUGO', 'IMPRESSIONNISME', 'KAFKA', 'LA-FONTAINE', 'LÉGENDE', 'LÉONARD', 'LIVRE', 'LOUVRE', 'MANGA', 'MICHELANGELO', 'MONET', 'MOZART', 'MUSÉE', 'MYTHE', 'NOBEL', 'NOUVELLE', 'OPÉRA', 'ORCHESTRE', 'PASTEL', 'PEINTURE', 'PICASSO', 'POÉSIE', 'POÈTE', 'PORTRAIT', 'POSTMODERNE', 'PROUST', 'QUATUOR', 'RÉALISME', 'REMBRANDT', 'RENAISSANCE', 'ROMAN', 'ROMANTISME', 'SATIRE', 'SCULPTURE', 'SHAKESPEARE', 'SONATE', 'SONNET', 'SURRÉALISME', 'SYMPHONIE', 'TABLEAU', 'THÉÂTRE', 'TINTIN', 'TOILE', 'TRAGÉDIE', 'VAN-GOGH', 'VERDI', 'VERS', 'VINCI', 'VIOLON', 'VOLTAIRE', 'WAGNER', 'AQUARELLE', 'AUTOPORTRAIT', 'BESTSELLER', 'BIOGRAPHIE', 'CALLIGRAPHIE', 'CANON', 'CHORALE', 'COMPOSITION', 'CONTE', 'CRITIQUE', 'DÉCORS', 'DIALOGUE', 'ÉDITION', 'ESSAI', 'FARCE', 'GENRE', 'GOUACHE', 'GRAPHISME', 'ICÔNE', 'ILLUSTRATION', 'INTRIGUE', 'JAZZ', 'LIBRETTO', 'MADRIGAL', 'MIME', 'MINIATURE', 'MONOLOGUE', 'MOTIF', 'NARRATEUR', 'ODE', 'OPÉRETTE', 'PERFORMANCE', 'PERSPECTIVE', 'PHILOSOPHIE', 'PROSE', 'QUATRAIN', 'RIME', 'SCÉNARIO', 'STROPHE', 'STYLE', 'TÉTRALOGIE', 'TRILOGIE', 'VAUDEVILLE'],
  "🔬 Sciences & Nature": ['ACIDE', 'ADN', 'AIMANT', 'ALGUE', 'AMPÈRE', 'ANIMAL', 'ATOME', 'BACTÉRIE', 'BIG-BANG', 'BIOLOGIE', 'CELLULE', 'CHIMIE', 'CHROMOSOME', 'CIRCUIT', 'CLIMAT', 'CŒUR', 'COMÈTE', 'CONSTANTE', 'CORPS', 'CRISTAL', 'DARWIN', 'DÉCIBEL', 'DIAMANT', 'DINOSAURE', 'ÉLECTRICITÉ', 'ÉLECTRON', 'ÉLÉMENT', 'ÉNERGIE', 'ENZYME', 'ESPÈCE', 'ÉTOILE', 'ÉVOLUTION', 'FISSION', 'FORCE', 'FOSSILE', 'FRICTION', 'FUSION', 'GALAXIE', 'GAZ', 'GÉNÉTIQUE', 'GRAVITÉ', 'HORMONE', 'HUBBLE', 'HYDROGÈNE', 'INSECTE', 'ION', 'ISOTOPE', 'KELVIN', 'LASER', 'LATITUDE', 'LUMIÈRE', 'MAGNÉTISME', 'MAMMIFÈRE', 'MASSE', 'MATIÈRE', 'MEMBRANE', 'MÉTAL', 'MÉTÉORE', 'MICROSCOPE', 'MOLÉCULE', 'MUTATION', 'NEUTRON', 'NEWTON', 'NOYAU', 'OCÉAN', 'ONDE', 'ORGANE', 'OXYGÈNE', 'OZONE', 'PHYSIQUE', 'PLANÈTE', 'PLASMA', 'POLLEN', 'POUMON', 'PRESSION', 'PROTON', 'QUANTUM', 'RACINE', 'RAYON', 'RELATIVITÉ', 'REPTILE', 'RESPIRATION', 'SATELLITE', 'SÉISME', 'SEL', 'SOLEIL', 'SOLUTION', 'SPECTRE', 'TEMPÉRATURE', 'TENSION', 'TERRE', 'TSUNAMI', 'URANIUM', 'VACCIN', 'VAPEUR', 'VÉGÉTAL', 'VITESSE', 'VIRUS', 'VOLCAN', 'VOLT', 'WATT', 'XÉNON', 'ZOOLOGIE', 'ALGORITHME', 'AXE', 'BIODIVERSITÉ', 'BIOME', 'CARNIVORE', 'CHAÎNE', 'CÔNE', 'CYCLE', 'DÉCOMPOSITION', 'ÉCOSYSTÈME', 'ÉROSION', 'HERBIVORE', 'MIGRATION', 'NICHE', 'OMNIVORE', 'PHOTOSYNTHÈSE', 'POLLINISATION', 'PRÉDATEUR', 'PROIES', 'RECYCLAGE', 'SÉDIMENT', 'SOL', 'SUCCESSION', 'SYMBIOSE', 'ZONE'],
  "⚽ Sports & Loisirs": ['ARBITRE', 'ATHLÉTISME', 'BADMINTON', 'BALLON', 'BASEBALL', 'BASKET', 'BILLARD', 'BOWLING', 'BOXE', 'BUT', 'CATCH', 'CHAMPION', 'CHRONOMÈTRE', 'CYCLISME', 'DAME', 'DERBY', 'DISQUE', 'DRIBBLE', 'DUNK', 'ÉCHECS', 'ESCRIME', 'ESSAI', 'FITNESS', 'FLÉCHETTES', 'FOOTBALL', 'FOUL', 'GOLF', 'GYMNASTIQUE', 'HALTÉROPHILIE', 'HANDBALL', 'HOCKEY', 'JUDO', 'KARATÉ', 'KAYAK', 'KO', 'LANCER', 'MARATHON', 'MATCH', 'MÉDAILLE', 'NATATION', 'NBA', 'OLYMPIQUE', 'PENALTY', 'PÉTANQUE', 'PING-PONG', 'POKER', 'POLO', 'RAFTING', 'RALLYE', 'RAQUETTE', 'RECORD', 'RUGBY', 'SAUT', 'SKI', 'SNOWBOARD', 'SOCCER', 'SQUASH', 'SURF', 'TAEKWONDO', 'TENNIS', 'TIR', 'TOURNOI', 'TRAMPOLINE', 'TRIATHLON', 'TROT', 'VOLLEY', 'WIMBLEDON', 'YOGA', 'ACE', 'AILE', 'ALLER-RETOUR', 'ALPINISME', 'ARBITRAGE', 'ARRÊT', 'ATTAQUE', 'AVANT', 'BACKFLIP', 'BIRDIE', 'BLOC', 'BREAK', 'BUTEUR', 'CENTRE', 'CIRCUIT', 'CLASSEMENT', 'COACH', 'CORNER', 'COUP', 'COURSE', 'DÉFENSE', 'DESCENTE', 'DOUBLE', 'DRIVE', 'ENDURANCE', 'ÉQUIPE', 'EXERCICE', 'EXTENSION', 'FACE-OFF', 'FAUTE', 'FILET', 'FINALE', 'FRAPPE', 'FREESTYLE', 'GAIN', 'GARDIEN', 'GOAL', 'GRIMPE', 'GRIP', 'GROUND', 'HAT-TRICK', 'HEEL', 'HOME-RUN', 'HORS-JEU', 'INTERCEPTION', 'JAM'],
};

function getWordData(themeKey, wordName) {
  const idx = THEME_WORDS[themeKey].indexOf(wordName);
  if (idx === -1) return null;
  const raw = THEMES_DATA[themeKey][idx];
  return { assocs: raw.assocs, genre: raw.genre, lettres: wordName.length };
}

// ══════════════════════════════════════════════════════════════════
// 2. FONCTIONS IA
// ══════════════════════════════════════════════════════════════════

function normalize(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .replace(/[^a-z]/g,'');
}

function levenshtein(a, b) {
  const dp = Array.from({length:a.length+1},(_,i)=>
    Array.from({length:b.length+1},(_,j)=>i===0?j:j===0?i:0));
  for(let i=1;i<=a.length;i++)
    for(let j=1;j<=b.length;j++)
      dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
  return dp[a.length][b.length];
}

// Calcule à quel point un indice est proche d'un mot donné (0-15)
function hintScore(hint, wordName, wordData) {
  const h = normalize(hint);
  const s = normalize(wordName);
  const assocs = wordData.assocs.map(normalize);

  let score = 0;

  // 1. Correspondance EXACTE avec une association (le plus fort)
  const idx = assocs.indexOf(h);
  if (idx !== -1) {
    // Pondération progressive : premiers indices valent plus
    if (idx < 3) {
      score += 15 - (idx * 2); // 15, 13, 11 pour les 3 premiers
    } else if (idx < 6) {
      score += 10 - (idx - 3); // 10, 9, 8 pour indices 3-5
    } else {
      score += 6 - Math.min(idx - 6, 3); // 6, 5, 4 pour indices 6+
    }
  }

  // 2. Correspondance PARTIELLE (préfixe/suffixe commun)
  for (let i = 0; i < assocs.length; i++) {
    const a = assocs[i];
    if (a.length >= 3 && h.length >= 3) {
      if (a.startsWith(h) || h.startsWith(a)) {
        score += Math.max(5 - i * 0.3, 1);
      }
      // Bonus si le mot se termine pareil (ex: -tion, -ment)
      if (a.length >= 4 && h.length >= 4) {
        const suffixLen = Math.min(3, a.length, h.length);
        if (a.slice(-suffixLen) === h.slice(-suffixLen)) {
          score += 2;
        }
      }
    }
  }

  // 3. Racine commune significative (4+ lettres)
  if (h.length >= 4) {
    for (let i = 0; i < assocs.length; i++) {
      const a = assocs[i];
      if (a.length >= 4) {
        const rootLen = Math.min(4, h.length, a.length);
        const hRoot = h.slice(0, rootLen);
        const aRoot = a.slice(0, rootLen);
        if (hRoot === aRoot) {
          score += 3 - i * 0.2;
        }
        // Sous-chaîne commune
        if (a.includes(h) || h.includes(a)) {
          score += 2;
        }
      }
    }
  }

  // 4. Proximité avec le mot lui-même (important!)
  const lev = levenshtein(h, s);
  if (lev === 0) {
    score += 20; // Mot exact (ne devrait pas arriver mais au cas où)
  } else if (lev <= 1) {
    score += 8; // Très proche (1 lettre de différence)
  } else if (lev <= 2) {
    score += 5; // Proche (2 lettres)
  } else if (lev <= 3) {
    score += 2; // Assez proche
  }
  
  // Bonus si l'indice est contenu dans le mot ou vice-versa
  if (s.includes(h) && h.length >= 3) score += 4;
  if (h.includes(s) && s.length >= 3) score += 3;

  // 5. Lettres partagées (bonus léger pour proximité globale)
  const sharedLetters = [...new Set(h)].filter(c => s.includes(c)).length;
  const totalLetters = Math.max(new Set(h).size, new Set(s).size);
  const letterRatio = sharedLetters / totalLetters;
  score += letterRatio * 2; // Max 2 points

  // 6. BONUS: Longueur similaire (indique souvent une vraie proximité)
  const lenDiff = Math.abs(h.length - s.length);
  if (lenDiff <= 2) score += 1;

  return Math.max(0, score); // Jamais négatif
}

// Calcule la température d'un indice par rapport au mot secret uniquement (pour affichage)
function computeTemperature(hint, wordData, secretWord) {
  const score = hintScore(hint, secretWord, wordData);
  if (score >= 15)  return 'BRULANT';  // Très proche
  if (score >= 10)  return 'CHAUD';    // Proche
  if (score >= 5)   return 'TIEDE';    // Moyen
  if (score >= 2)   return 'FROID';    // Éloigné
  return 'GLACIAL'; // Très éloigné
}

// ─── Moteur de déduction IA (cumule tous les indices donnés) ─────
// L'IA score CHAQUE mot du thème selon TOUS les indices reçus,
// puis propose le mot avec le meilleur score cumulé.
function iaGuessWord(hint, wordData, secretWord, previousGuesses) {
  const themeWords = THEME_WORDS[STATE.resolvedTheme];

  // Tous les indices donnés jusqu'ici (incluant le nouveau)
  const allHints = [...(STATE.hinterHints || []), normalize(hint)];
  STATE.hinterHints = allHints;

  // Scorer chaque mot du thème en cumulant tous les indices
  const wordScores = themeWords.map(w => {
    const wd = getWordData(STATE.resolvedTheme, w);
    if (!wd) return { w, total: 0 };
    let total = 0;
    for (const h of allHints) {
      total += hintScore(h, w, wd);
    }
    // Bonus : si le mot matche le nombre de lettres du mot secret
    if (w.replace(/-/g,'').length === secretWord.replace(/-/g,'').length) total += 1;
    return { w, total };
  });

  // Trier par score décroissant
  wordScores.sort((a, b) => b.total - a.total);

  // Le mot secret lui-même : quel est son score ?
  const secretScore = wordScores.find(ws => ws.w === secretWord)?.total || 0;
  const bestScore   = wordScores[0]?.total || 0;

  // Calculer la température basée sur le score du mot secret vs le meilleur score
  const temp = computeTemperature(hint, wordData, secretWord);

  // L'IA a trouvé si le mot secret est en tête ET avec un score significatif
  if (wordScores[0]?.w === secretWord && secretScore >= 10) {
    return { guess: secretWord, temp: 'GAGNE' };
  }

  // Sinon proposer le meilleur candidat non encore proposé
  const candidate = wordScores.find(ws =>
    ws.w !== secretWord &&
    ws.total > 0 &&
    !previousGuesses.includes(normalize(ws.w))
  );

  // Debug : afficher les top scores dans la console
  console.log('Top candidats IA:', wordScores.slice(0,5).map(ws=>`${ws.w}(${ws.total.toFixed(1)})`).join(', '));
  console.log('Mot secret score:', secretScore.toFixed(1), '/ Meilleur:', bestScore.toFixed(1));

  return {
    guess: candidate ? candidate.w : (wordScores[1]?.w || '???'),
    temp
  };
}

// ══════════════════════════════════════════════════════════════════
// 3. MESSAGES FUN
// ══════════════════════════════════════════════════════════════════

const MSG = {
  BRULANT:['🔥 BRÛLANT ! L\'IA transpire !','🌋 Brûlant ! Encore un tout petit effort !','🔥 C\'est en FEU !'],
  CHAUD:  ['♨️ Chaud ! Tu es sur la bonne piste.','☀️ Ça chauffe sérieusement !','🌡️ Chaud chaud...'],
  TIEDE:  ['🫖 Tiède... L\'IA hésite.','😐 Tiède. Pas mal mais peut mieux faire.','🤔 Tiède tiède...'],
  FROID:  ['🧊 Froid. L\'IA s\'éloigne.','🌬️ Froid ! Mauvaise direction.','❄️ Froid…'],
  GLACIAL:['🥶 GLACIAL ! On est au pôle Nord !','🧊 Glacial ! Sibérie...','🥶 Glacial mon ami !'],
  GAGNE:  ['✅ L\'IA a trouvé ! Génial !','🏆 Trouvé ! Quelle association !','🎉 L\'IA a cracké le mot !'],
  WRONG:  ['❌ Non... Réfléchis encore !','😅 Raté ! Essaie à nouveau.','🙈 Pas ça... continue !'],
  FOUND:  ['🎉 Trouvé ! Mot suivant !','✨ Bravo ! Continue !','🏆 Excellent ! +1 !'],
  PASSED: ['⏭ Passé ! Il reviendra peut-être…','⏭ On passe… à revoir !','⏭ Skip ! Trop dur ?'],
  TIME:   ['⏰ Temps écoulé !','⏰ La manche est terminée !','⏰ Le chrono a sonné !'],
};
const rand = k => MSG[k][Math.floor(Math.random()*MSG[k].length)];

// ══════════════════════════════════════════════════════════════════
// 4. ÉTAT DU JEU
// ══════════════════════════════════════════════════════════════════

const STATE = {
  // Config
  role: 'guesser',       // 'guesser' | 'hinter'
  themeKey: '',
  wordsPerManche: 5,
  voiceEnabled: true,    // ACTIVÉ PAR DÉFAUT
  autoListen: true,      // réécoute automatique en mode vocal ACTIVÉE
  mancheDuration: 30,    // durée en secondes (30 | 60 | 120)

  // Manche
  mancheNum: 0,
  mancheQueue: [],       // mots à faire dans la manche (ordre courant)
  passedQueue: [],       // mots passés, à retraiter si temps reste
  mancheResults: [],     // {word, found:bool, clues:number}
  currentWordIdx: 0,     // index dans mancheQueue
  currentWordName: '',
  currentWordData: null,
  clueIndex: 0,          // index prochain indice IA (mode guesser)
  wordClueCount: 0,      // nb indices donnés sur le mot courant
  iaGuesses: [],
  hinterHints: [],
  guesserWrongGuesses: [],
  givenClues: [],

  // Score
  score: 0,
  streak: 0,
  bestScore: 0,
  totalGames: 0,

  // Timer (30s par manche fixe)
  timerInterval: null,
  timerLeft: 30,

  // Mot courant
  gameOver: false,       // mot courant terminé (trouvé ou passé)
  mancheOver: false,

  // Word pool (liste mélangée pour le thème)
  wordPool: [],
};

// ══════════════════════════════════════════════════════════════════
// 5. DOM
// ══════════════════════════════════════════════════════════════════

const $ = id => document.getElementById(id);

// Home
const btnGuesserEl   = $('btn-guesser');
const btnHinterEl    = $('btn-hinter');
const themeGridEl    = $('theme-grid');
const wordCountBtns  = document.querySelectorAll('.timer-btn[data-words]');
const voiceToggle    = $('voice-toggle');
const voiceBadge     = $('voice-support-badge');
const btnStartEl     = $('btn-start');
const bestScoreEl    = $('best-score');
const totalGamesEl   = $('total-games');

// Game
const headerThemeEl  = $('header-theme');
const liveScoreEl    = $('live-score');
const mancheLabelEl  = $('manche-label');
const streakBadgeEl  = $('streak-badge');
const wordProgressEl = $('word-progress');
const timerBarEl     = $('timer-bar');
const timerTextEl    = $('timer-text');
const timerWrap      = $('timer-bar-wrap');
const secretWordEl   = $('secret-word');
const secretMetaEl   = $('secret-meta');
const secretHintEl   = $('secret-role-hint');
const queueBarEl     = $('queue-bar');
const historyEl      = $('history');

// Guesser zone
const zoneGuesserEl   = $('zone-guesser');
const iaClueTextEl    = $('ia-clue-text');
const inputGuessEl    = $('input-guess');
const btnGuessEl      = $('btn-guess');
const btnMicGuessEl   = $('btn-mic-guess');
const voiceBarGuess   = $('voice-bar-guess');
const btnNextClueEl   = $('btn-next-clue');
const btnPassGuesserEl= $('btn-pass-guesser');

// Hinter zone
const zoneHinterEl   = $('zone-hinter');
const iaGuessPanelEl = $('ia-guess-panel');
const iaGuessWordEl  = $('ia-guess-word');
const iaGuessTempEl  = $('ia-guess-temp');
const inputHintEl    = $('input-hint');
const btnHintEl      = $('btn-hint');
const btnMicHintEl   = $('btn-mic-hint');
const voiceBarHint   = $('voice-bar-hint');
const btnPassHinterEl= $('btn-pass-hinter');

// Result
const resultEmojiEl  = $('result-emoji');
const resultTitleEl  = $('result-title');
const resultSubtitleEl=$('result-subtitle');
const resultWordsEl  = $('result-words');
const resScoreEl     = $('res-score');
const resFoundEl     = $('res-found');
const resStreakEl    = $('res-streak');
const btnNextMancheEl= $('btn-next-manche');
const btnHomeResultEl= $('btn-home-result');

// Nav
const btnHomeEl      = $('btn-home');
const btnSwapEl      = $('btn-swap');

// Voice overlay supprimé — indicateur dans le bouton mic uniquement

// Toast
const toastEl        = $('toast');

// Screens
const SCREENS = {
  home:   $('screen-home'),
  game:   $('screen-game'),
  result: $('screen-result'),
};

// ══════════════════════════════════════════════════════════════════
// 6. SPEECH — Web Speech API (simple, sans overlay)
// ══════════════════════════════════════════════════════════════════

let recognition   = null;
let voiceCallback = null;
let voiceRunning  = false;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function initVoice() {
  if (!SpeechRecognition) {
    voiceBadge.textContent = '(non supporté)';
    voiceToggle.disabled = true;
    return;
  }
  voiceBadge.textContent = '✓ supporté';
}

// Démarre une écoute unique (s'arrête après 1 résultat final)
function listenOnce(cb) {
  if (!SpeechRecognition || !STATE.voiceEnabled) return;
  if (voiceRunning) { try { recognition.stop(); } catch(_){} }

  recognition = new SpeechRecognition();
  recognition.lang = 'fr-FR';
  recognition.continuous = false;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  voiceCallback = cb;
  voiceRunning  = true;

  // Afficher le mot reconnu en temps réel dans l'input actif
  recognition.onresult = e => {
    let interim = '', final = '';
    for (const r of e.results) {
      if (r.isFinal) final += r[0].transcript;
      else interim += r[0].transcript;
    }
    const current = (final || interim).trim().split(/\s+/)[0];
    // Afficher dans l'input courant
    const activeInput = STATE.role === 'guesser' ? inputGuessEl : inputHintEl;
    if (activeInput) activeInput.value = current;

    if (final) {
      voiceRunning = false;
      setMicUI(false);
      const word = final.trim().split(/\s+/)[0];
      if (word && voiceCallback) {
        voiceCallback = null;
        cb(word);
      }
    }
  };

  recognition.onerror = e => {
    voiceRunning = false;
    setMicUI(false);
    if (e.error !== 'no-speech' && e.error !== 'aborted') {
      showToast('🎙️ ' + e.error, 2000);
    }
  };

  recognition.onend = () => {
    voiceRunning = false;
    setMicUI(false);
  };

  try {
    recognition.start();
    setMicUI(true);
  } catch(e) {
    voiceRunning = false;
    setMicUI(false);
  }
}

function stopListening() {
  voiceRunning = false;
  voiceCallback = null;
  setMicUI(false);
  try { recognition && recognition.stop(); } catch(_){}
}

// Met à jour l'UI du bouton micro actif
function setMicUI(active) {
  const btn = STATE.role === 'guesser' ? btnMicGuessEl : btnMicHintEl;
  if (!btn) return;
  if (active) {
    btn.textContent = '🔴';
    btn.classList.add('mic-on');
    btn.title = 'Écoute… (tap pour annuler)';
  } else {
    btn.textContent = '🎙️';
    btn.classList.remove('mic-on');
    btn.title = 'Parler';
  }
}

// Synthèse vocale
function speak(text) {
  if (!STATE.voiceEnabled || !window.speechSynthesis) return;
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'fr-FR'; utt.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utt);
}

// ══════════════════════════════════════════════════════════════════
// 7. INITIALISATION
// ══════════════════════════════════════════════════════════════════

function init() {
  loadPersistent();
  buildThemeGrid();
  bindEvents();
  initVoice();
  
  // Activer le mode vocal par défaut si supporté
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SR) {
    voiceToggle.checked = true;
    STATE.voiceEnabled = true;
    STATE.autoListen = true;
    btnMicGuessEl.style.display = 'flex';
    btnMicHintEl.style.display = 'flex';
  }
  
  showScreen('home');
}

function loadPersistent() {
  STATE.bestScore  = parseInt(localStorage.getItem('mdp2_best') || '0');
  STATE.totalGames = parseInt(localStorage.getItem('mdp2_total') || '0');
  bestScoreEl.textContent  = STATE.bestScore;
  totalGamesEl.textContent = STATE.totalGames;
}

function savePersistent() {
  if (STATE.score > STATE.bestScore) {
    STATE.bestScore = STATE.score;
    localStorage.setItem('mdp2_best', STATE.bestScore);
  }
  STATE.totalGames++;
  localStorage.setItem('mdp2_total', STATE.totalGames);
}

function buildThemeGrid() {
  themeGridEl.innerHTML = '';
  // Bouton aléatoire en premier
  const allBtn = document.createElement('button');
  allBtn.className = 'theme-btn active';
  allBtn.textContent = '🎲 Aléatoire';
  allBtn.dataset.theme = '🎲 Aléatoire';
  allBtn.addEventListener('click', () => selectTheme('🎲 Aléatoire', allBtn));
  themeGridEl.appendChild(allBtn);
  STATE.themeKey = '🎲 Aléatoire';

  ALL_THEME_KEYS.forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'theme-btn';
    btn.textContent = key;
    btn.dataset.theme = key;
    btn.addEventListener('click', () => selectTheme(key, btn));
    themeGridEl.appendChild(btn);
  });
}

function selectTheme(key, btn) {
  // Cibler uniquement les boutons dans le thème-grid
  themeGridEl.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  STATE.themeKey = key;
}

// ══════════════════════════════════════════════════════════════════
// 8. ÉVÉNEMENTS
// ══════════════════════════════════════════════════════════════════

function bindEvents() {
  btnGuesserEl.addEventListener('click', () => selectRole('guesser'));
  btnHinterEl.addEventListener('click',  () => selectRole('hinter'));

  wordCountBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      wordCountBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.wordsPerManche = parseInt(btn.dataset.words);
    });
  });

  // Durée de la manche
  const durationBtns = document.querySelectorAll('.timer-btn[data-duration]');
  durationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      durationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.mancheDuration = parseInt(btn.dataset.duration);
    });
  });

  voiceToggle.addEventListener('change', () => {
    STATE.voiceEnabled = voiceToggle.checked;
    STATE.autoListen   = voiceToggle.checked;
    // Afficher/cacher les boutons micro
    btnMicGuessEl.style.display = STATE.voiceEnabled ? 'flex' : 'none';
    btnMicHintEl.style.display  = STATE.voiceEnabled ? 'flex' : 'none';
    // Remettre les boutons submit à leur état normal
    btnGuessEl.textContent = '✓';
    btnHintEl.textContent  = '→';
    if (!STATE.voiceEnabled) stopListening();
  });

  btnStartEl.addEventListener('click', startGame);
  btnHomeEl.addEventListener('click', () => { stopListening(); stopTimer(); showScreen('home'); });
  btnSwapEl.addEventListener('click', swapRoles);
  btnHomeResultEl.addEventListener('click', () => { showScreen('home'); loadPersistent(); });
  btnNextMancheEl.addEventListener('click', startNewManche);

  // Guesser
  btnGuessEl.addEventListener('click', handleGuess);
  inputGuessEl.addEventListener('keydown', e => e.key === 'Enter' && handleGuess());
  btnNextClueEl.addEventListener('click', giveNextClue);
  btnPassGuesserEl.addEventListener('click', passWord);
  btnMicGuessEl.addEventListener('click', () => {
    if (voiceRunning) { stopListening(); return; }
    listenOnce(word => { handleGuessWord(word); });
  });

  // Hinter
  btnHintEl.addEventListener('click', handleHint);
  inputHintEl.addEventListener('keydown', e => e.key === 'Enter' && handleHint());
  btnPassHinterEl.addEventListener('click', passWord);
  btnMicHintEl.addEventListener('click', () => {
    if (voiceRunning) { stopListening(); return; }
    listenOnce(word => { handleHintWord(word); });
  });

  // Voice overlay supprimé
}

function selectRole(role) {
  STATE.role = role;
  btnGuesserEl.classList.toggle('active', role==='guesser');
  btnHinterEl.classList.toggle('active', role==='hinter');
}

// ══════════════════════════════════════════════════════════════════
// 9. DÉMARRAGE & MANCHE
// ══════════════════════════════════════════════════════════════════


function resolveTheme() {
  let theme = STATE.themeKey;
  
  if (theme === '🎲 Aléatoire') {
    const themes = Object.keys(THEMES_DATA);
    theme = themes[Math.floor(Math.random() * themes.length)];
    console.log('🎲 Thème aléatoire:', theme);
  }
  
  STATE.resolvedTheme = theme;
}

function startGame() {
  STATE.score   = 0;
  STATE.streak  = 0;
  STATE.mancheNum = 0;

  // Résoudre le thème
  let resolvedTheme = STATE.themeKey;
  if (resolvedTheme === '🎲 Aléatoire') {
    resolvedTheme = ALL_THEME_KEYS[Math.floor(Math.random() * ALL_THEME_KEYS.length)];
  }
  STATE.resolvedTheme = resolvedTheme;

  // Créer le pool de mots mélangés
  STATE.wordPool = shuffle([...THEME_WORDS[resolvedTheme]]);

  showScreen('game');
  headerThemeEl.textContent = resolvedTheme;
  updateScoreUI();
  startNewManche();
}

function startNewManche() {
  STATE.mancheNum++;
  STATE.mancheOver = false;
  STATE.mancheResults = [];
  STATE.passedQueue = [];

  // Si le thème est aléatoire, changer à chaque manche
  if (STATE.themeKey === '🎲 Aléatoire') {
    const newTheme = ALL_THEME_KEYS[Math.floor(Math.random() * ALL_THEME_KEYS.length)];
    STATE.resolvedTheme = newTheme;
    STATE.wordPool = shuffle([...THEME_WORDS[newTheme]]);
    headerThemeEl.textContent = newTheme;
  }

  // Choisir N mots pour la manche (recharger le pool si nécessaire)
  if (STATE.wordPool.length < STATE.wordsPerManche) {
    STATE.wordPool = shuffle([...THEME_WORDS[STATE.resolvedTheme]]);
  }
  STATE.wordPool = shuffle(STATE.wordPool);
  STATE.mancheQueue = STATE.wordPool.splice(0, STATE.wordsPerManche);

  mancheLabelEl.textContent = `Manche ${STATE.mancheNum}`;
  showScreen('game');
  buildWordProgress();
  loadCurrentWord();
  startTimer();
}

function loadCurrentWord() {
  if (STATE.mancheQueue.length === 0 && STATE.passedQueue.length === 0) {
    // Tous les mots traités
    endManche();
    return;
  }

  // Prendre le premier mot de la queue principale, sinon de la passedQueue
  let wordName;
  if (STATE.mancheQueue.length > 0) {
    wordName = STATE.mancheQueue[0];
  } else {
    wordName = STATE.passedQueue.shift();
  }

  STATE.currentWordName = wordName;
  STATE.currentWordData = getWordData(STATE.resolvedTheme, wordName);
  STATE.clueIndex       = 0;
  STATE.wordClueCount   = 0;
  STATE.iaGuesses       = [];
  STATE.hinterHints     = [];
  STATE.guesserWrongGuesses = [];
  STATE.givenClues      = [];
  STATE.gameOver        = false;

  // UI
  historyEl.innerHTML = '';
  iaClueTextEl.textContent = 'En attente d\'indice…';
  iaGuessWordEl.textContent = '—';
  iaGuessWordEl.classList.remove('found');
  iaGuessTempEl.textContent = '';
  inputGuessEl.value = '';
  inputHintEl.value  = '';

  if (STATE.role === 'guesser') {
    secretWordEl.textContent = '???';
    secretWordEl.classList.add('blurred');
    secretMetaEl.textContent = `${STATE.currentWordData.lettres} lettre${STATE.currentWordData.lettres>1?'s':''} · ${STATE.currentWordData.genre==='M'?'Masculin':'Féminin'}`;
    secretHintEl.textContent = '';
    zoneGuesserEl.classList.remove('hidden');
    zoneHinterEl.classList.add('hidden');
    giveNextClue(); // donne le 1er indice, relancera l'écoute auto si vocal activé
  } else {
    secretWordEl.textContent = wordName;
    secretWordEl.classList.remove('blurred');
    secretMetaEl.textContent = `Fais deviner ce mot !`;
    secretHintEl.textContent = '';
    zoneGuesserEl.classList.add('hidden');
    zoneHinterEl.classList.remove('hidden');
    iaGuessWordEl.textContent = '—';
    // Lire le mot à voix haute en mode hinter
    speak(`Le mot à faire deviner est : ${wordName}`);
  }

  updateQueueBar();
  updateWordProgress();
}

// ══════════════════════════════════════════════════════════════════
// 10. MODE GUESSER
// ══════════════════════════════════════════════════════════════════

// Vérifie si un indice est interdit (= mot secret, même famille, trop proche)
function isClueInvalid(clue, secretWord) {
  const c = normalize(clue);
  const s = normalize(secretWord);
  if (c === s) return true;                          // mot exact
  if (c.length >= 4 && s.startsWith(c)) return true; // préfixe commun long
  if (s.length >= 4 && c.startsWith(s)) return true;
  // Même famille : racine de 5 lettres commune
  const rootLen = Math.min(5, Math.min(c.length, s.length));
  if (rootLen >= 4 && c.slice(0, rootLen) === s.slice(0, rootLen)) return true;
  // Trop proche (Levenshtein ≤ 1 sur mots courts)
  if (levenshtein(c, s) <= 1) return true;
  return false;
}

function giveNextClue() {
  if (STATE.gameOver || STATE.mancheOver) return;
  const assocs = STATE.currentWordData.assocs;
  const wrongGuesses = STATE.guesserWrongGuesses || [];

  // Filtrer les indices déjà donnés et invalides
  const remaining = assocs.filter((a, i) =>
    !STATE.givenClues.includes(i) && !isClueInvalid(a, STATE.currentWordName)
  );

  if (remaining.length === 0) {
    iaClueTextEl.innerHTML = `<em style="color:var(--muted)">Plus d'indices… Tentez quand même !</em>`;
    return;
  }

  let chosenAssoc;

  if (wrongGuesses.length === 0) {
    // Premier indice : le plus fort (premier valide)
    chosenAssoc = remaining[0];
  } else {
    // Indice intelligent : chercher un indice qui s'éloigne le plus des mauvaises réponses
    // Scorer chaque indice restant selon sa capacité à discriminer
    const scored = remaining.map(assoc => {
      const na = normalize(assoc);
      let discriminScore = 0;
      // Pénaliser les indices trop proches des mauvaises réponses du joueur
      for (const wrong of wrongGuesses) {
        const nw = normalize(wrong);
        const themeWords = THEME_WORDS[STATE.resolvedTheme];
        // Si cet indice est aussi une assoc du mot mal deviné → moins utile
        const wrongData = getWordData(STATE.resolvedTheme, wrong.toUpperCase());
        if (wrongData) {
          const wrongAssocs = wrongData.assocs.map(normalize);
          if (wrongAssocs.includes(na)) discriminScore -= 3;
        }
        // Bonus si l'indice est clairement différent du mauvais mot
        if (levenshtein(na, nw) > 4) discriminScore += 1;
      }
      // Garder les indices courts (plus percutants)
      discriminScore += Math.max(0, 6 - assoc.length);
      return { assoc, discriminScore };
    });

    scored.sort((a, b) => b.discriminScore - a.discriminScore);
    chosenAssoc = scored[0].assoc;
  }

  // Marquer cet indice comme donné
  const idx = assocs.indexOf(chosenAssoc);
  if (!STATE.givenClues) STATE.givenClues = [];
  STATE.givenClues.push(idx);
  STATE.clueIndex++;
  STATE.wordClueCount++;

  const clue = chosenAssoc.toUpperCase();
  iaClueTextEl.innerHTML = `Indice n°${STATE.clueIndex} : <span class="ia-clue-word">${clue}</span>`;
  addHistory('IA', clue, '', `Indice ${STATE.clueIndex}`);

  // Mode vocal : lancer auto l'écoute après chaque indice
  if (STATE.voiceEnabled && STATE.autoListen) {
    setTimeout(() => listenOnce(word => handleGuessWord(word)), 600);
  }
}

function handleGuessWord(word) {
  if (!word || STATE.gameOver || STATE.mancheOver) return;
  inputGuessEl.value = word;
  setTimeout(() => handleGuess(), 150);
}

function handleHintWord(word) {
  if (!word || STATE.gameOver || STATE.mancheOver) return;
  inputHintEl.value = word;
  setTimeout(() => handleHint(), 150);
}

function handleGuess() {
  if (STATE.gameOver || STATE.mancheOver) return;
  const guess = inputGuessEl.value.trim();
  if (!guess) return;
  if (guess.includes(' ')) { showToast('❌ Un seul mot !', 2000); return; }
  inputGuessEl.value = '';

  if (normalize(guess) === normalize(STATE.currentWordName)) {
    wordFound();
  } else {
    const d = levenshtein(normalize(guess), normalize(STATE.currentWordName));
    const fb = d <= 2 ? '🤏 Presque ! Vérifie l\'orthographe !' : rand('WRONG');
    addHistory('TOI', guess.toUpperCase(), 'FROID', fb);
    showToast(fb, 1500);
    // Mémoriser la mauvaise réponse pour adapter le prochain indice
    if (!STATE.guesserWrongGuesses) STATE.guesserWrongGuesses = [];
    STATE.guesserWrongGuesses.push(guess);
    // Passer automatiquement à l'indice suivant (adapté)
    setTimeout(() => giveNextClue(), 600);
  }
}

// ══════════════════════════════════════════════════════════════════
// 11. MODE HINTER
// ══════════════════════════════════════════════════════════════════

function handleHint() {
  if (STATE.gameOver || STATE.mancheOver) return;
  const hint = inputHintEl.value.trim();
  if (!hint) return;
  if (hint.includes(' ')) { showToast('❌ Un seul mot-indice !', 2000); return; }

  // Vérifier que l'indice n'est pas le mot ou de la même famille
  if (isClueInvalid(hint, STATE.currentWordName)) {
    showToast('🚫 Interdit ! Même mot ou même famille.', 2200);
    inputHintEl.value = '';
    if (STATE.voiceEnabled && STATE.autoListen) {
      setTimeout(() => listenOnce(word => handleHintWord(word)), 600);
    }
    return;
  }

  inputHintEl.value = '';
  STATE.wordClueCount++;

  // IA évalue et propose un mot
  const { guess, temp } = iaGuessWord(hint, STATE.currentWordData, STATE.currentWordName, STATE.iaGuesses);
  STATE.iaGuesses.push(normalize(guess));

  const msg = rand(temp);
  addHistory('TOI', hint.toUpperCase(), temp, msg);

  // Animer la proposition IA
  iaGuessWordEl.textContent = '…';
  iaGuessTempEl.textContent = '';
  setTimeout(() => {
    if (normalize(guess) === normalize(STATE.currentWordName)) {
      iaGuessWordEl.textContent = STATE.currentWordName;
      iaGuessWordEl.classList.add('found');
      iaGuessTempEl.textContent = '✅ TROUVÉ !';
      addHistory('IA', STATE.currentWordName, 'GAGNE', rand('GAGNE'));
      setTimeout(() => wordFound(), 700);
    } else {
      iaGuessWordEl.textContent = guess;
      iaGuessWordEl.classList.remove('found');
      iaGuessTempEl.textContent = `🌡️ ${temp} — ${msg}`;
      // Mode vocal : relancer écoute auto pour l'indice suivant
      if (STATE.voiceEnabled && STATE.autoListen) {
        setTimeout(() => listenOnce(word => handleHintWord(word)), 900);
      }
    }
  }, 600);
}

// ══════════════════════════════════════════════════════════════════
// 12. PASSE / TROUVÉ / FIN DE MANCHE
// ══════════════════════════════════════════════════════════════════

function wordFound() {
  STATE.gameOver = true;
  STATE.streak++;
  const points = Math.max(1, 7 - STATE.wordClueCount);
  STATE.score += points;
  updateScoreUI();
  showToast(`${rand('FOUND')} +${points} pt${points>1?'s':''}`, 2000);

  // Marquer dans les résultats
  const wordName = STATE.currentWordName;
  STATE.mancheResults.push({ word: wordName, found: true, clues: STATE.wordClueCount });

  // Retirer de la queue principale (si encore dedans)
  const idx = STATE.mancheQueue.indexOf(wordName);
  if (idx !== -1) STATE.mancheQueue.splice(idx, 1);
  // Retirer de passedQueue aussi au cas où
  const idx2 = STATE.passedQueue.indexOf(wordName);
  if (idx2 !== -1) STATE.passedQueue.splice(idx2, 1);

  // Révéler le mot
  secretWordEl.textContent = wordName;
  secretWordEl.classList.remove('blurred');
  updateWordProgress();

  setTimeout(() => {
    if (!STATE.mancheOver) loadCurrentWord();
  }, 1200);
}

function passWord() {
  if (STATE.gameOver || STATE.mancheOver) return;
  STATE.gameOver = true;
  stopListening();
  
  const wordName = STATE.currentWordName;
  showToast(rand('PASSED'), 1500);
  
  STATE.mancheResults.push({ 
    word: wordName, 
    found: false,
    clues: STATE.wordClueCount 
  });

  // Déplacer de mancheQueue vers passedQueue
  const idx = STATE.mancheQueue.indexOf(wordName);
  if (idx !== -1) {
    STATE.mancheQueue.splice(idx, 1);
    STATE.passedQueue.push(wordName);
  }

  updateWordProgress();
  updateQueueBar();
  setTimeout(() => { if (!STATE.mancheOver) loadCurrentWord(); }, 800);
}

function endManche() {
  if (STATE.mancheOver) return;
  STATE.mancheOver = true;
  stopTimer();

  // Mots non traités = pas trouvés
  [...STATE.mancheQueue, ...STATE.passedQueue].forEach(w => {
    if (!STATE.mancheResults.find(r => r.word === w)) {
      STATE.mancheResults.push({ word: w, found: false, clues: 0 });
    }
  });

  savePersistent();

  // Flash visuel
  const flash = document.createElement('div');
  flash.className = 'manche-flash';
  document.body.appendChild(flash);
  setTimeout(() => flash.remove(), 600);

  setTimeout(() => showResultScreen(), 500);
}

function showResultScreen() {
  const found = STATE.mancheResults.filter(r => r.found).length;
  const total = STATE.mancheResults.length;

  const emojis = found === total ? '🏆' : found >= Math.ceil(total/2) ? '🎉' : '😅';
  resultEmojiEl.textContent = emojis;
  resultTitleEl.textContent = found === total ? 'Parfait !' : found >= Math.ceil(total/2) ? 'Bonne manche !' : 'Dur dur…';
  resultSubtitleEl.textContent = `${found} mot${found>1?'s':''} trouvé${found>1?'s':''} sur ${total} · Manche ${STATE.mancheNum}`;

  // Récap mots
  resultWordsEl.innerHTML = STATE.mancheResults.map(r => `
    <div class="result-word-item ${r.found?'found':'passed'}">
      <span class="rw-name">${r.word}</span>
      <span class="rw-status">${r.found ? `✅ Trouvé (${r.clues} indice${r.clues>1?'s':''})` : '❌ Manqué'}</span>
    </div>
  `).join('');

  resScoreEl.textContent = STATE.score;
  resFoundEl.textContent = `${found}/${total}`;
  resStreakEl.textContent = STATE.streak;

  showScreen('result');
}

// ══════════════════════════════════════════════════════════════════
// 13. CHRONO (30s par manche)
// ══════════════════════════════════════════════════════════════════

function startTimer() {
  stopTimer();
  STATE.timerLeft = STATE.mancheDuration;
  timerWrap.style.display = 'flex';
  updateTimerUI();
  STATE.timerInterval = setInterval(() => {
    STATE.timerLeft--;
    updateTimerUI();
    if (STATE.timerLeft <= 0) {
      stopTimer();
      if (!STATE.mancheOver) {
        showToast(rand('TIME'), 2000);
        endManche();
      }
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(STATE.timerInterval);
  STATE.timerInterval = null;
}

function updateTimerUI() {
  const pct = (STATE.timerLeft / STATE.mancheDuration) * 100;
  timerBarEl.style.width = pct + '%';
  timerTextEl.textContent = STATE.timerLeft;
  const warn = pct <= 25;
  timerBarEl.classList.toggle('warning', warn);
  timerTextEl.classList.toggle('warning', warn);
}

// ══════════════════════════════════════════════════════════════════
// 14. PROGRÈS ET QUEUE
// ══════════════════════════════════════════════════════════════════

function buildWordProgress() {
  wordProgressEl.innerHTML = '';
  for (let i = 0; i < STATE.wordsPerManche; i++) {
    const dot = document.createElement('div');
    dot.className = 'word-dot';
    dot.dataset.idx = i;
    dot.textContent = i + 1;
    wordProgressEl.appendChild(dot);
  }
}

function updateWordProgress() {
  const dots = wordProgressEl.querySelectorAll('.word-dot');
  let resultIdx = 0;
  dots.forEach((dot, i) => {
    dot.className = 'word-dot';
    if (resultIdx < STATE.mancheResults.length) {
      const r = STATE.mancheResults[resultIdx++];
      dot.classList.add(r.found ? 'found' : 'passed');
      dot.textContent = r.found ? '✓' : '↩';
    } else if (STATE.mancheQueue[0] === STATE.currentWordName && i === resultIdx) {
      dot.classList.add('active');
    }
  });
  // Highlight le mot actif
  const activePos = STATE.mancheResults.length;
  if (activePos < dots.length && !STATE.mancheOver) {
    dots[activePos]?.classList.add('active');
  }
}

function updateQueueBar() {
  queueBarEl.innerHTML = '';
  STATE.passedQueue.forEach(w => {
    const chip = document.createElement('div');
    chip.className = 'queue-chip';
    chip.innerHTML = `↩ ${w}`;
    chip.title = 'Mot passé – reviendra si le temps le permet';
    queueBarEl.appendChild(chip);
  });
}

// ══════════════════════════════════════════════════════════════════
// 15. INVERSER RÔLES
// ══════════════════════════════════════════════════════════════════

function swapRoles() {
  STATE.role = STATE.role === 'guesser' ? 'hinter' : 'guesser';
  showToast(`Rôles inversés ! Tu ${STATE.role==='guesser'?'devines':'fais deviner'} maintenant.`, 2500);
  stopTimer();
  startNewManche();
}

// ══════════════════════════════════════════════════════════════════
// 16. HISTORIQUE DES INDICES (mot courant)
// ══════════════════════════════════════════════════════════════════

function addHistory(role, word, temp, msg) {
  const item = document.createElement('div');
  item.className = 'history-item';
  item.innerHTML = `
    <span class="clue-tag">${role}</span>
    <span class="clue-word">${word}</span>
    ${temp ? `<span class="temp-badge temp-${temp}">${temp}</span>` : ''}
    <span style="font-size:.7rem;color:var(--muted);flex:1;text-align:right;line-height:1.2">${msg}</span>
  `;
  historyEl.appendChild(item);
  historyEl.parentElement.scrollTop = historyEl.parentElement.scrollHeight;
}

// ══════════════════════════════════════════════════════════════════
// 17. UTILS
// ══════════════════════════════════════════════════════════════════

function showScreen(name) {
  Object.values(SCREENS).forEach(s => s.classList.remove('active'));
  SCREENS[name].classList.add('active');
}

function updateScoreUI() {
  liveScoreEl.textContent = STATE.score;
  streakBadgeEl.textContent = STATE.streak >= 2 ? `🔥×${STATE.streak}` : '';
}

function showToast(msg, duration=2500) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastEl._t);
  toastEl._t = setTimeout(() => toastEl.classList.remove('show'), duration);
}

function shuffle(arr) {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// ══════════════════════════════════════════════════════════════════
// 18. GO !
// ══════════════════════════════════════════════════════════════════

init();
