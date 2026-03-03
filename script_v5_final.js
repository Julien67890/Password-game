/* ═══════════════════════════════════════════════════════════════
   MOT DE PASSE v5.0 — PARTIE 1/2
   Thèmes : Géographie, Divertissement, Histoire
   ═══════════════════════════════════════════════════════════════ */

// Helper pour créer un mot avec 15 associations
const W = (assocs, genre) => ({ assocs: assocs.split(','), genre });

const THEMES_DATA_PART1 = {

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
};

// Fonction pour obtenir les données d'un mot
function getWordData(theme, wordName) {
  if (!THEMES_DATA_PART1[theme]) return null;
  const idx = THEME_WORDS_PART1[theme]?.indexOf(wordName.toUpperCase());
  if (idx === undefined || idx === -1) return null;
  return THEMES_DATA_PART1[theme][idx];
}

// Liste des mots par thème (pour sélection)
const THEME_WORDS_PART1 = {};
for (const [theme, words] of Object.entries(THEMES_DATA_PART1)) {
  THEME_WORDS_PART1[theme] = words.map((_, i) => {
    // Extraire le nom du mot depuis le commentaire
    const source = String(words[i]);
    const match = source.match(/\/\/\s*([A-ZÀÂÄÇÈÉÊËÎÏÔÙÛÜ-]+)\s*$/);
    return match ? match[1] : `MOT_${i}`;
  });
}

console.log('✅ Partie 1/2 chargée - 3 thèmes');
console.log('Géographie:', THEME_WORDS_PART1['🌍 Géographie'].length, 'mots');
console.log('Divertissement:', THEME_WORDS_PART1['🎬 Divertissement'].length, 'mots');
console.log('Histoire:', THEME_WORDS_PART1['🏛️ Histoire'].length, 'mots');
