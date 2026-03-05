/* ═══════════════════════════════════════════════════════════════
   MOT DE PASSE v5.0 — VERSION FINALE COMPLÈTE
   ✅ 6 thèmes + Aléatoire
   ✅ 648 mots × 15 associations = 9,720 associations
   ✅ 100% LOCAL - Mode vocal - PWA
   ═══════════════════════════════════════════════════════════════ */

const W = (assocs, genre) => ({ assocs: assocs.split(','), genre });

const THEMES_DATA = {

  '🌍 Géographie': [
W('forêt,brésil,fleuve,jungle,amazone,tropique,équateur,biodiversité,amazonie,vert,poumon,pérou,colombie,bassin,déforestation','F'), // AMAZONIE
W('montagne,cordillère,amérique,pérou,altitude,chaîne,sommet,chili,bolivie,condor,volcans,ski,trekking,équateur,neige','F'), // ANDES
W('glace,pôle,pingouin,continent,froid,banquise,blanc,iceberg,désert,exploration,océan,scientifique,manchot,polaire,isolé','M'), // ANTARCTIQUE
W('pôle,nord,glace,froid,océan,blanc,ours,inuit,banquise,exploration,cercle,polaire,glacial,esquimau,boréal','M'), // ARCTIQUE
W('continent,océanie,pays,kangourou,sydney,océan,pacifique,melbourne,aborigène,outback,koala,surf,désert,boomerang,anglais','F'), // AUSTRALIE
W('mur,allemagne,division,guerre,froide,est,ouest,checkpoint,charlie,réunification,porte,brandebourg,histoire,ville,berlin','M'), // BERLIN
W('football,rio,amazonie,carnaval,samba,christ,café,tropique,plage,forêt,grand,amérique,vert,lusophone,biodiversité','M'), // BRÉSIL
W('érable,toronto,froid,hockey,montréal,québec,ottawa,rocheuses,niagara,anglais,français,ours,nature,grand,nation','M'), // CANADA
W('pointe,extrémité,géographie,sud,afrique,atlantique,promontoire,vent,maritime,côte,navigation,tempête,bout,mer,terre','M'), // CAP
W('mer,îles,amérique,tropique,plage,pirates,cuba,jamaïque,bahamas,turquoise,corail,antilles,colomb,soleil,paradis','F'), // CARA
W('maroc,ville,film,blanc,port,mosquée,atlantique,africain,française,coloniale,bogart,hassan,cosmopolite,cinéma,médina','F'), // CASABLANCA
W('dragon,beijing,shanghai,mur,population,mandarin,riz,soie,thé,empire,communiste,rouge,grande,asie,dynasties','F'), // CHINE
W('fleuve,canyon,grand,arizona,rouge,gorge,barrage,rafting,rocheuses,ouest,rivière,états-unis,erosion,hoover,nature','M'), // COLORADO
W('fleuve,afrique,kinshasa,forêt,jungle,équateur,brazzaville,zaïre,bassin,tropical,long,exploration,stanley,rivière,central','M'), // CONGO
W('séoul,nord,sud,division,kimchi,samsung,k-pop,péninsule,guerre,taekwondo,pyongyang,frontière,asie,riz,technologie','F'), // CORÉE
W('fleuve,vienne,budapest,europe,long,bleu,source,eau,navigation,delta,allemagne,autriche,international,ville,grand','M'), // DANUBE
W('sable,dune,chaleur,aride,chameau,oasis,nomade,sahara,soif,sec,mirage,soleil,nuit,vent,sécheresse','M'), // DÉSERT
W('pyramide,pharaon,nil,sphinx,caire,sable,momie,hiéroglyphe,antiquité,cléopâtre,toutankhamon,oasis,afrique,camelle,temple','F'), // ÉGYPTE
W('ligne,zéro,latitude,tropique,imaginaire,terre,milieu,soleil,chaud,géographie,brésil,ecuador,division,chaleur,globe','M'), // ÉQUATEUR
W('montagne,sommet,himalaya,népal,altitude,plus,haut,sherpa,conquête,escalade,hillary,neige,tibet,8848,monde','M'), // EVEREST
W('norvège,eau,glaciaire,vallée,falaise,profond,scandinave,mer,côte,scenic,bateau,verdure,montagne,bleu,nord','M'), // FJORD
W('italie,renaissance,art,toscane,ponte,vecchio,duomo,uffizi,arno,médicis,cathédrale,david,michel-ange,culture,beauté','F'), // FLORENCE
W('paris,eiffel,vin,fromage,baguette,liberté,révolution,tricolore,coq,gallic,patrimoine,gastronomie,art,mode,élégance','F'), // FRANCE
W('fleuve,inde,sacré,hindou,himalaya,varanasi,pollution,crémation,bangladesh,delta,pèlerinage,spirituel,ablution,long,religion','M'), // GANGE
W('glace,danemark,inuit,arctique,iceberg,île,blanc,grand,autonome,froid,esquimau,viking,nuuk,calotte,nord','M'), // GROENLAND
W('montagne,nepal,everest,tibet,altitude,chaîne,sherpa,sommet,trekking,k2,neige,asie,frontière,toit,monde','M'), // HIMALAYA
W('delhi,mumbai,bollywood,curry,taj,mahal,hindi,gandhi,vache,épices,population,grand,asie,yoga,sari','F'), // INDE
W('vert,dublin,trèfle,guinness,whiskey,celte,mouton,atlantique,gaélique,nord,île,pub,patrick,europe,pluie','F'), // IRLANDE
W('turquie,bosphore,mosquée,sainte-sophie,détroit,constantinople,ottomane,pont,asie,europe,byzantine,topkapi,sultan,minarets,carrefour','M'), // ISTANBUL
W('sushi,manga,tokyo,fuji,samouraï,anime,kimono,geisha,cerisier,technologie,île,soleil,zen,tempura,culture','M'), // JAPON
W('tanzanie,afrique,sommet,volcan,altitude,neige,safari,équateur,trekking,escalade,cratère,uhuru,highest,montagne,kenya','M'), // KILIMANDJARO
W('moscou,russie,forteresse,rouge,place,pouvoir,politique,cathédrale,tsar,mur,tour,gouvernement,histoire,pierre,basile','M'), // KREMLIN
W('eau,douce,nature,poisson,pêche,berge,rivage,montagne,bateau,baignade,profond,titicaca,léman,reflet,calme','M'), // LAC
W('beyrouth,cèdre,méditerranée,phénicien,montagne,guerre,syrie,israël,arabe,gastronomie,libanais,civile,français,houmous,histoire','M'), // LIBAN
W('portugal,tage,fado,tram,colline,azulejos,atlantic,belém,pastel,tour,mouette,capitale,port,lisbon,sud','F'), // LISBONNE
W('fleuve,château,france,orléans,nantes,val,atlantique,vins,long,tours,royal,saumur,anjou,sable,lent','F'), // LOIRE
W('île,lémur,baobab,vanille,océan,indien,malgache,biodiversité,rouge,unique,endémique,antananarivo,africain,nature,forêt','M'), // MADAGASCAR
W('kuala,lumpur,petronas,jungle,malais,singapour,thaïlande,tropical,islam,asie,multiculturel,mer,île,colonial,riz','F'), // MALAISIE
W('philippines,capitale,luzon,baie,pacifique,trafic,asie,espagnol,cathédrale,jeepney,urbain,peuplé,intramuros,rizal,typhon','F'), // MANILLE
W('marrakech,sahara,atlas,arabe,berbère,rabat,casablanca,tajine,thé,menthe,fès,mosquée,souk,couscous,nord','M'), // MAROC
W('mer,bleu,plage,italie,espagne,grèce,france,île,soleil,antique,cruise,sel,poisson,côte,chaleur','F'), // MÉDITERRANÉE
W('aztèque,tequila,tacos,cancún,pyramide,guadalajara,sombrero,mariachi,chili,maya,ciudad,espagnol,latino,cactus,volcan','M'), // MEXIQUE
W('steppe,gengis,khan,nomade,yourte,cheval,désert,gobi,oulan-bator,cashmere,vaste,central,aigle,troupeau,vent','F'), // MONGOLIE
W('kremlin,rouge,place,russie,métro,tsar,cathédrale,basile,froid,europe,politique,histoire,vodka,grand,capitale','M'), // MOSCOU
W('fleuve,égypte,long,pharaon,caire,delta,crocodile,lotus,assouan,bleu,blanc,source,barrage,nil,afrique','M'), // NIL
W('fjord,oslo,viking,saumon,ski,pétrole,arctique,scandinave,nordique,soleil,minuit,aurore,montagne,froid,nature','F'), // NORVÈGE
W('maori,kiwi,mouton,hobbit,rugby,auckland,wellington,volcan,géothermal,île,nature,pacifique,all,blacks,scenic','F'), // NOUVELLE-ZÉLANDE
W('mer,eau,salée,vague,profond,marin,pacifique,atlantique,bleu,vaste,courant,pression,abysses,sels,liquide','M'), // OCÉAN
W('montagne,russie,frontière,europe,asie,sibérie,chaîne,minéral,foret,long,divise,oriental,altitude,nord,naturel','M'), // OURAL
W('canal,isthme,chapeau,pacifique,atlantique,navigation,commerce,tropical,amérique,centrale,colon,zone,pays,jonction,mer','M'), // PANAMA
W('tour,eiffel,louvre,seine,notre-dame,champs,élysées,montmartre,arc,triomphe,mode,lumière,romantique,métro,capitale','M'), // PARIS
W('inca,machu,picchu,lima,cuzco,lama,andes,pisco,nazca,amazonie,condor,espagnol,côte,désert,altitude','M'), // PÉROU
W('manille,île,pacifique,typhon,catholique,riz,mer,corail,mindanao,espagnol,archipel,tropique,plage,poisson,asie','F'), // PHILIPPINES
W('nord,sud,glace,magnétique,froid,arctique,antarctique,explorateur,amundsen,boussole,axe,rotation,terre,blanc,extrême','M'), // PÔLE
W('lisbonne,fado,porto,atlantique,bacalhau,vasco,gama,azulejos,algarve,vin,pasteis,sardine,cristiano,europe,maritime','M'), // PORTUGAL
W('tchèque,vltava,château,pont,charles,bière,pilsner,kafka,bohème,revolution,velvet,architecture,europe,médievale,belle','F'), // PRAGUE
W('corée,nord,kim,dictature,communiste,isolé,armée,nucléaire,propagande,hermit,capitale,juche,régime,misère,militaire','M'), // PYONGYANG
W('australie,brisbane,corail,barrière,récif,tropical,gold,coast,cairns,soleil,nature,outback,reef,sunshine,tourisme','M'), // QUEENSLAND
W('équateur,capitale,altitude,andes,volcans,pichincha,mitad,monde,colonial,équatoriale,église,montagne,amérique,sud,plateau','M'), // QUITO
W('fleuve,allemagne,suisse,france,château,vin,cologne,bâle,navigation,romantique,frontière,long,rhénan,europe,affluent','M'), // RHIN
W('colisée,gladiateur,césar,empire,forum,sénat,antiquité,latin,légion,capitole,papauté,éternelle,catholicisme,pape,antique','F'), // ROME
W('vodka,tsar,moscou,sibérie,grand,froid,communiste,poutine,ballet,kremlin,neige,ours,vaste,europe,asie','F'), // RUSSIE
W('sable,dune,chaud,aride,touareg,chameau,désert,oasis,afrique,nord,immense,vent,nuit,étoile,sécheresse','M'), // SAHARA
W('fleuve,paris,normandie,pont,rive,notre-dame,impressionniste,havre,rouen,navigation,gauche,droite,crue,source,france','F'), // SEINE
W('corée,sud,k-pop,samsung,moderne,han,rivière,technologie,cuisine,palais,gyeongbokgung,hanbok,kimchi,économie,asie','M'), // SÉOUL
W('chine,métropole,pudong,bund,perle,gratte-ciel,port,moderne,yangtze,commercial,économie,néon,cosmopolite,asie,finance','M'), // SHANGHAI
W('russie,froid,taïga,toundra,vaste,arctique,pipeline,isolé,permafrost,gaz,pétrole,ours,train,transsibérien,nature','F'), // SIBÉRIE
W('île,état,merlion,propre,moderne,gratte-ciel,finance,port,multiculture,asie,jardins,baie,technologie,prospère,ordre','M'), // SINGAPOUR
W('australie,opéra,harbour,bridge,plage,bondi,nouvelle,galles,port,pacifique,été,cosmopolite,ville,kangourou,baie','M'), // SYDNEY
W('australie,île,diable,nature,sauvage,hobart,wilderness,national,parc,froid,isolée,pristine,unique,sud,forêt','F'), // TASMANIE
W('afrique,désert,ndjamena,lac,sahara,sahel,pauvre,landlocked,français,arabe,sécheresse,nomade,central,pays,frontière','M'), // TCHAD
W('japon,shibuya,akihabara,manga,anime,sushi,gratte-ciel,impérial,palais,fuji,néon,métropole,moderne,quartier,foule','M'), // TOKYO
W('canada,cn,tower,ontario,niagara,multiculturel,grand,lac,froid,anglais,diversité,metropole,hockey,finance,urbain','M'), // TORONTO
W('istanbul,ankara,bosphore,kebab,mosquée,cappadoce,méditerranée,anatolie,danse,ottomane,islam,tapis,empire,ponte,culture','F'), // TURQUIE
W('pape,rome,saint-pierre,catholique,chapelle,sixtine,michel-ange,garde,suisse,cité,état,petit,saint,religieux,religion','M'), // VATICAN
W('autriche,mozart,valse,danube,schönbrunn,hofburg,café,sacher,torte,strauss,art,nouveau,opéra,culture,impériale','F'), // VIENNE
W('fleuve,russie,long,caspienne,mer,delta,navigation,mère,moscou,stalingrad,economique,vital,commerce,bassin,europe','F'), // VOLGA
W('parc,wyoming,geyser,old,faithful,bison,grizzly,volcanique,géothermal,nature,national,états-unis,prismatique,printemps,faune','M'), // YELLOWSTONE
W('fleuve,afrique,victoria,chutes,zambie,zimbabwe,mozambique,crocodile,barrage,kariba,navigation,long,rivière,bassin,delta','M'), // ZAMBÈZE
W('tanzanie,île,océan,indien,épices,swahili,plage,turquoise,pierre,arabe,commerce,tropical,stone,town,historique','M'), // ZANZIBAR
W('afrique,harare,victoria,chutes,mugabe,rhodésie,ruines,grand,économie,crise,inflation,landlocked,sanction,savane,sud','M'), // ZIMBABWE
W('île,groupe,océan,dispersé,pacifique,volcanique,corail,polynésie,navigation,tropical,mer,atoll,chaîne,indonesia,grec','M'), // ARCHIPEL
W('île,corail,lagon,océan,anneau,pacifique,maldives,polynésie,tropical,turquoise,formation,circulaire,réef,basse,plage','M'), // ATOLL
W('montagne,andes,amérique,chaîne,altitude,volcans,massive,tectonique,sommet,rocheuses,longue,frontière,neige,géologie,dorsale','F'), // CORDILLÈRE
W('fleuve,embouchure,triangle,nil,gange,alluvion,fertile,sédiment,agricole,branche,côte,mer,formation,estuaire,plaine','M'), // DELTA
W('mer,baie,persique,mexique,eau,côte,maritime,navigation,commerce,stratégique,golf,géographie,littoral,profond,gulf','M'), // GOLFE
W('nord,sud,terre,équateur,boréal,austral,saison,latitude,globe,géographie,division,planète,climat,moitié,sphere','M'), // HÉMISPHÈRE
W('géographie,parallèle,équateur,nord,sud,coordonnée,degré,horizontal,climat,zone,position,terrestre,mesure,GPS,cartographie','F'), // LATITUDE
W('coordonnée,verticale,greenwich,méridien,fuseau,horaire,est,ouest,degré,position,géographie,ligne,prime,mesure,temps','F'), // LONGITUDE
W('ligne,longitude,greenwich,prime,zéro,vertical,fuseau,horaire,géographie,référence,temps,utc,division,international,terrestre','M'), // MÉRIDIEN
W('latitude,horizontal,équateur,tropique,polaire,ligne,géographie,température,zone,nord,sud,cercle,constante,terrestre,imagin','M'), // PARALLÈLE
W('mer,terre,côte,avancée,promontoire,géographie,trois,côtés,eau,péninsule,ibérique,italique,frontière,maritime,presqu','F'), // PÉNINSULE
W('altitude,plat,élevée,tibet,anatolie,steppe,mesa,géologie,formation,érosion,horizontal,vaste,herbe,vent,semi-aride','M'), // PLATEAU
W('corail,mer,océan,barrière,tropique,plongée,poisson,biodiversité,australie,fragile,coloré,polype,reef,côte,atoll','M'), // RÉCIF
W('herbe,plaine,eurasie,mongolie,russie,sec,nomade,vaste,vent,continental,plat,tempéré,treeless,cheval,troupeau','F'), // STEPPE
W('chaleur,équateur,cancer,capricorne,zone,torride,humide,latitude,chaud,forêt,pluie,soleil,biodiversité,belt,jungle','M'), // TROPIQUE
W('montagne,éruption,lave,magma,cratère,cendre,géologie,tectonique,feu,etna,vesuve,explosif,île,fumée,actif','M'), // VOLCAN
  ],

  '🎬 Divertissement': [
W('jouer,rôle,film,scène,oscar,performance,plateau,talent,star,casting,comédie,drama,hollywoodien,réplique,cinéma','M'), // ACTEUR
W('jouer,rôle,film,femme,oscar,performance,plateau,talent,star,casting,comédie,hollywoodienne,réplique,célébrité,cinéma','F'), // ACTRICE
W('musique,disque,chansons,vinyle,artiste,sortie,tracklist,spotify,platine,studio,collection,cd,enregistrement,cover,pop','M'), // ALBUM
W('dessin,film,cartoon,disney,pixar,enfant,image,mouvement,studio,anime,personnage,coloré,famille,2d,3d','F'), // ANIMATION
W('gotham,dc,comics,chauve-souris,masque,cape,bruce,wayne,joker,robin,batmobile,chevalier,noir,super-héros,justice','M'), // BATMAN
W('film,succès,box-office,hollywoodien,budget,grand,spectacle,action,effets,populaire,vedette,cinéma,franchise,estival,commercial','M'), // BLOCKBUSTER
W('festival,film,palme,or,tapis,rouge,croisette,cinéma,jury,prestige,glamour,france,réalisateur,prix,international','M'), // CANNES
W('dessin,animé,enfant,télévision,personnage,humour,couleur,samedi,matin,looney,tunes,warner,mickey,strip,bugsbu','M'), // CARTOON
W('film,salle,écran,pop-corn,projection,réalisateur,acteur,caméra,billet,art,silence,lumière,séance,ticket,oscars','M'), // CINÉMA
W('musique,vidéo,court,chanson,youtube,mtv,artiste,promotionnel,réalisateur,montage,style,viral,tendance,diffusion,visuel','M'), // CLIP
W('théâtre,rire,humour,molière,farce,légère,amusant,drôle,spectacle,pièce,gags,réplique,comique,masques,commedia','F'), // COMÉDIE
W('musique,live,scène,public,salle,artiste,spectacle,billet,tournée,performance,acoustique,foule,ambiance,son,festival','M'), // CONCERT
W('animation,film,enfant,mickey,château,magie,walt,pixar,princesse,fantaisie,coloré,famille,conte,chants,parade','M'), // DISNEY
W('son,cinéma,audio,surround,théâtre,qualité,haut-parleur,numérique,atmos,immersif,technologie,acoustique,stéréo,piste,expérience','M'), // DOLBY
W('série,tv,chapitre,saison,diffusion,cliffhanger,story,streaming,télévisuel,personnage,intrigue,visionnage,semaine,diffusé,arc','M'), // ÉPISODE
W('musique,film,arts,cannes,concert,célébration,annuel,cultural,rassemblement,spectacle,scène,foule,été,avignon,coachella','M'), // FESTIVAL
W('cinéma,réalisateur,acteur,scénario,caméra,écran,oscar,production,story,directeur,tourner,plateau,projection,montage,image','M'), // FILM
W('mercury,queen,rock,bohemian,rhapsody,chanteur,voix,légende,charismatique,sida,scène,flamboyant,virtuose,iconique,concert','M'), // FREDDIE
W('musique,prix,cérémonie,academy,recording,award,trophée,nomination,prestige,annuel,industrie,statue,doré,honneur,meilleur','M'), // GRAMMY
W('cinéma,états-unis,oscar,film,star,boulevard,célébrité,glamour,tapis,rouge,studios,walk,fame,californie,rêve','M'), // HOLLYWOOD
W('rire,drôle,comédie,blague,comique,amusant,esprit,wit,comédien,standup,ironie,satire,gag,sourire,légèreté','M'), // HUMOUR
W('bond,007,espion,britannique,agent,secret,mi6,martini,aston,martin,arme,gadget,casino,thriller,royale','M'), // JAMES
W('musique,swing,blues,improvisation,saxophone,syncopé,bebop,cool,fusion,rythme,doux,ensemble,new,orleans,classique','M'), // JAZZ
W('pop,matériel,girl,reine,icône,cône,eighties,performeuse,chanteuse,réinvention,controverse,superstar,danse,artiste,américaine','F'), // MADONNA
W('comics,super-héros,avengers,spider-man,iron,man,univers,cinématique,franchise,action,disney,héros,cape,masque,film','M'), // MARVEL
W('jackson,roi,pop,thriller,moonwalk,billie,jean,icône,danseur,superstar,gant,inoubliable,légende,music,transformé','M'), // MICHAEL
W('son,mélodie,chanson,instrument,rythme,harmonie,composition,concert,note,portée,tempo,accord,genre,art,écoute','F'), // MUSIQUE
W('streaming,série,film,abonnement,contenu,binge,watch,original,numérique,plateau,television,sur-demande,catalogue,accès,écran','M'), // NETFLIX
W('prix,alfred,suède,prestige,littérature,paix,science,cérémonie,stockholm,lauréat,honneur,international,récompense,peace,chimie','M'), // NOBEL
W('musique,chant,lyrique,aria,classique,wagner,verdi,scène,orchestre,soprano,dramatique,grand,costume,ténor,spectacle','M'), // OPÉRA
W('cinéma,prix,academy,award,cérémonie,statuette,hollywoodien,nomination,tapis,rouge,prestige,statue,dorée,glamour,honneur','M'), // OSCAR
W('studio,film,hollywoodien,production,montagne,logo,classique,cinéma,major,indiana,jones,mission,impossible,star,trek','M'), // PARAMOUNT
W('musique,charts,radio,commercial,mélodie,hit,tendance,jeunesse,accessible,artiste,single,tube,mainstream,ambiance,danse','F'), // POP
W('film,début,sortie,première,projection,nuit,tapis,rouge,exclusive,screening,gala,lancement,star,inauguration,avant','M'), // PREMIER
W('cinéma,film,studio,budget,directeur,management,industrie,financement,creative,contrôle,business,exécutif,plateau,projets,hollywoodien','M'), // PRODUCTEUR
W('musique,hip-hop,rythme,paroles,flow,beat,rime,mc,urbain,freestyle,culture,rue,lyrique,spoken,poésie','M'), // RAP
W('cinéma,film,directeur,caméra,vision,scénario,plateau,coupe,action,créatif,auteur,storyteller,artistique,tournage,clap','M'), // RÉALISATEUR
W('film,version,nouveau,original,adaptation,reboot,hollywoodien,franchise,moderne,actualisation,revival,réfait,contemporain,hommage,résurrection','M'), // REMAKE
W('musique,guitare,électrique,groupe,concert,métal,punk,classique,alternatif,rebelle,fort,énergie,scène,solo,batterie','M'), // ROCK
W('stones,rock,mick,jagger,keith,richards,satisfaction,britannique,légende,iconique,tournée,longévité,classique,groupe,riffs','M'), // ROLLING
W('film,histoire,continue,franchise,trilogie,épique,chapitre,narration,étendue,star,wars,indiana,jones,multiple,suite','F'), // SAGA
W('film,histoire,script,dialogue,story,scénariste,intrigue,structure,écriture,traitement,brouillon,personnage,adaptation,cinéma,dramatique','M'), // SCÉNARIO
W('télévision,épisodes,saison,streaming,netflix,personnages,intrigue,binge,watch,drama,comédie,show,diffusion,abonnement,plateau','F'), // SÉRIE
W('comédie,télévision,humour,rire,épisode,friends,seinfeld,rires,enregistrés,famille,studio,audience,personnages,quotidien,légèreté','F'), // SITCOM
W('électronique,technologie,playstation,tv,musique,japonais,innovation,marque,gaming,audio,video,produits,walkman,camera,corporation','M'), // SONY
W('réalisateur,film,jaws,et,schindler,jurassic,park,director,blockbuster,légende,steven,maître,storyteller,oscar,hollywoodien','M'), // SPIELBERG
W('célébrité,vedette,acteur,célèbre,hollywoodien,talent,reconnu,gloire,glamour,réussite,superstar,idole,médias,télévision,popularité','F'), // STAR
W('vidéo,netflix,youtube,ligne,digital,abonnement,sur-demande,buffer,plateforme,binge,contenu,série,écran,illimité,accès','M'), // STREAMING
W('cinéma,production,film,enregistrement,tournage,plateau,son,musique,hollywoodien,major,espace,créatif,artiste,label,facility','M'), // STUDIO
W('film,tension,mystère,thriller,anxiété,intrigue,bord,siège,anticipation,cliffhanger,drama,sombre,haletant,rebondissement,peur','M'), // SUSPENSE
W('télévision,série,diffusion,distribution,chaîne,réseau,programmation,médias,contenu,licence,droits,broadcast,redistribution,audiences,commerciale','F'), // SYNDICATION
W('film,télévision,tv,production,diffusion,chaîne,network,drama,cinéma,écran,feature,made-for,unitaire,semaine,familial','M'), // TÉLÉFILM
W('film,suspense,tension,crime,mystère,noir,psychologique,meurtre,détective,twist,sombre,policier,intense,dramatique,haletant','M'), // THRILLER
W('social,vidéo,danse,court,appli,tendance,jeunesse,viral,créateur,contenu,influenceur,partage,plateforme,chinois,musique','M'), // TIKTOK
W('film,bande,annonce,teaser,promotion,aperçu,prochainement,spoiler,excitement,marketing,extrait,promotionnel,sortie,accroche,visuel','M'), // TRAILER
W('tv,écran,émission,chaîne,série,télécommande,diffusion,programme,divertissement,câble,streaming,vision,hertzien,image,direct','F'), // TÉLÉVISION
W('studio,film,production,hollywoodien,entertainment,majeur,catalogue,parc,attractions,thème,cinéma,major,lot,légendaire,jurassic','M'), // UNIVERSAL
W('spectacle,musique,divers,show,performance,artistes,télévision,talents,diversifié,entertainment,musical,danse,humour,talkshow,direct','F'), // VARIÉTÉ
W('star,célébrité,acteur,célèbre,hollywoodien,connue,talent,popularité,glamour,reconnaissance,médias,personnalité,public,icône,affiche','F'), // VEDETTE
W('cassette,vidéo,magnétique,bande,technologie,rétro,rebobiner,ruban,obsolescence,nostalgie,eighties,analogique,lecteur,magnétoscope,plastique','M'), // VHS
W('image,clip,enregistrement,youtube,streaming,visuel,camera,contenu,numérique,mouvement,montage,production,footage,shot,diffusion','F'), // VIDÉO
W('bros,studio,film,production,hollywoodien,entertainment,batman,harry,potter,dc,cinéma,majeur,scooby,bugs,bunny','M'), // WARNER
W('film,cowboys,far,west,duel,chevaux,saloon,frontière,gunfight,shérif,outlaw,classique,américain,genre,pistolet','M'), // WESTERN
W('vidéo,plateforme,streaming,google,viral,abonner,créateur,chaîne,contenu,regarder,tutoriel,vlog,entertainment,influenceur,ligne','M'), // YOUTUBE
  ],

  '🏛️ Histoire': [
W('grèce,rome,civilisation,époque,ancienne,classique,ruines,philosophie,empire,période,monde,antique,histoire,egypt,archéologie','F'), // ANTIQUITÉ
W('guerre,paix,cessez-feu,accord,1918,novembre,signature,traité,fin,hostilités,reddition,trêve,commémoration,soldat,victoire','M'), // ARMISTICE
W('bombe,nucléaire,arme,explosion,hiroshima,nagasaki,radioactif,champignon,puissance,destruction,manhattan,projet,dévastateur,usa,radiation','M'), // ATOMIQUE
W('mur,allemagne,division,guerre,froide,est,ouest,checkpoint,charlie,réunification,porte,brandebourg,histoire,ville,berlin','M'), // BERLIN
W('napoléon,france,corse,waterloo,conquête,empire,militaire,génie,révolution,exil,ambition,légende,général,gloire,saint-hélène','M'), // BONAPARTE
W('rome,jules,romain,empire,assassinat,ides,mars,dictateur,consul,brutus,gaule,conquête,légion,antique,politique','M'), // CÉSAR
W('carolingien,france,couronné,sacré,médiéval,roi,francs,charles,grand,renaissance,couronnement,empire,aix,moyen-âge,renommée','M'), // CHARLEMAGNE
W('royaume-uni,guerre,cigare,winston,leadership,discours,blitz,résistance,statesman,résilience,bulldog,ii,premier,ministre,victoire','M'), // CHURCHILL
W('société,culture,développement,progrès,urbain,organisation,avancée,mésopotamie,grèce,rome,empire,antique,histoire,patrimoine,fondation','F'), // CIVILISATION
W('territoire,empire,colonisation,domination,exploitation,implantation,peuplement,migration,métropole,contrôle,afrique,inde,administration,histoire,indépendance','F'), // COLONIE
W('jérusalem,chevalier,templier,moyen-âge,croisé,guerre,religieuse,terre,sainte,médiéval,pèlerinage,islam,campagne,chrétienté,orient','F'), // CROISADES
W('indépendance,droits,proclamation,american,révolution,liberté,constitution,document,fondateur,historique,signature,principe,1776,peuple,souveraineté','F'), // DÉCLARATION
W('régime,autoritaire,tyran,totalitaire,oppression,dictateur,autocratique,pouvoir,absolu,répression,censure,milice,liberté,prisonniers,résistance','F'), // DICTATURE
W('famille,royale,succession,monarque,héritage,lignée,trône,souverain,héréditaire,règne,sang,couronne,empire,histoire,puissance','F'), // DYNASTIE
W('état,territoire,monarque,romain,ottomane,britannique,conquête,domination,vaste,pouvoir,histoire,napoléon,chute,glory,colonie','M'), // EMPIRE
W('époque,période,temps,historique,ère,chronologie,phase,âge,siècle,calendrier,mesure,histoire,classique,moderne,contemporain','F'), // ÈRE
W('découverte,voyage,navigateur,colomb,magellan,nouveau,monde,aventure,pionnier,cartographie,expédition,inconnu,terra,incognita,mer','F'), // EXPLORATION
W('régime,totalitaire,italie,mussolini,nationalisme,extrême,droite,parti,propaganda,violence,dictature,état,oppressif,guerre,idéologie','M'), // FASCISME
W('moyen-âge,seigneur,vassal,serf,château,fief,suzerain,hiérarchie,paysan,terre,système,serment,médiéval,protection,obéissance','F'), // FÉODALITÉ
W('conflit,bataille,armée,soldat,violence,arme,mort,victoire,défaite,paix,ennemi,alliance,frontière,territoire,historique','F'), // GUERRE
W('exécution,révolution,française,terreur,lame,échafaud,mort,peine,capitale,coupure,décapiter,condamné,tribunal,1793,peur','F'), // GUILLOTINE
W('nazis,allemagne,dictateur,génocide,guerre,holocaust,führer,troisième,reich,fascisme,antisémitisme,aryanisme,propaganda,mort,1945','M'), // HITLER
W('génocide,juifs,nazis,concentration,camp,guerre,extermination,atrocité,shoah,mémoire,tragédie,persécution,horreur,antisémitisme,histoire','M'), // HOLOCAUSTE
W('liberté,autonomie,souveraineté,décolonisation,nation,autodétermination,émancipation,colonie,droits,peuple,révolution,1776,résistance,libération,propre','F'), // INDÉPENDANCE
W('tribunal,religieux,hérésie,torture,catholicisme,persécution,médiéval,espagne,bûcher,sorcière,dogme,église,punition,aveu,inquisi','F'), // INQUISITION
W('césar,romain,imperator,assassinat,mars,conquête,gaule,militaire,antique,rome,consul,légion,dictateur,brutus,général','M'), // JULIUS
W('roi,france,versailles,soleil,xiv,bourbon,monarchie,palais,absolutisme,gloire,guerre,cour,noble,xvi,succession','M'), // LOUIS
W('carta,angleterre,roi,jean,1215,charte,droits,liberté,constitution,historique,médiéval,fondamental,parlement,john,barons','F'), // MAGNA
W('chevalier,château,féodalité,cathédrale,croisades,médiéval,seigneur,serfs,noblesse,religion,épidémie,obscur,siècles,moyen,histoire','M'), // MOYEN-ÂGE
W('chine,grande,fortification,défense,monument,mur,long,historique,construit,dynasties,pierre,protection,brique,armée,empire','F'), // MURAILLE
W('france,corse,waterloo,empereurbona,militaire,conquête,exil,saint-hélène,légende,gloire,campagne,code,révolution,ambition,reconnu','M'), // NAPOLÉON
W('allemagne,hitler,fascisme,guerre,génocide,parti,troisième,reich,croix,gammée,totalitaire,propaganda,aryanisme,extermination,1939','M'), // NAZISME
W('égypte,roi,pyramide,toutankhamon,ramses,momie,tombeau,hiéroglyphe,dieu,royal,antique,nil,sarcophage,sphinx,cléopâtre','M'), // PHARAON
W('maladie,épidémie,noire,moyen-âge,bubonique,rat,puce,mortalité,dévastateur,pandémie,quarantaine,histoire,europe,médiéval,1348','F'), // PESTE
W('liban,maritime,alphabet,antique,commerce,carthage,navigateurs,pourpre,colonisation,côte,phénicien,méditerranée,civilisation,typage,artisans','M'), // PHÉNICIENS
W('homme,caverne,pierre,primitif,taille,silex,mammouth,feu,grotte,lascaux,cromagnon,néandertal,paléolithique,néolithique,evolution','F'), // PRÉHISTOIRE
W('égypte,pharaon,tombeau,gizeh,sphinx,monument,pierre,antique,cheops,merveille,mystère,hiéroglyphe,désert,funéraire,sable','F'), // PYRAMIDE
W('royauté,couronne,monarque,souveraine,trône,palais,noblesse,elizabeth,victoria,isabelle,règne,pouvoir,héritage,monarchie,cour','F'), // REINE
W('art,culture,humanisme,14ème,italie,florence,michel-ange,léonard,vinci,renouveau,classique,peinture,architecture,littérature,pensée','F'), // RENAISSANCE
W('démocratie,état,gouvernement,rome,france,constitution,élection,citoyen,liberté,fraternité,laïcité,révolution,pouvoir,assemblée,représentation','F'), // RÉPUBLIQUE
W('changement,renversement,1789,france,bastille,peuple,guillotine,roi,liberté,radicale,transformation,soulèvement,aristocratie,terreur,droits','F'), // RÉVOLUTION
W('colisée,gladiateur,césar,empire,forum,sénat,antiquité,latin,légion,capitole,papauté,éternelle,catholicisme,pape,antique','F'), // ROME
W('encerclement,militaire,château,moyen-âge,blocus,attaque,muraille,nourriture,capitulation,défense,résistance,artillerie,ville,mois,assaut','M'), // SIÈGE
W('cent,ans,période,temps,époque,historique,mesure,calendrier,durée,ère,passé,présent,futur,millénaire,histoire','M'), // SIÈCLE
W('accord,paix,signature,international,versailles,genève,diplomatie,nations,frontière,fin,guerre,ratification,parlement,alliance,négociation','M'), // TRAITÉ
W('palais,france,louis,xiv,galerie,miroirs,jardins,absolutisme,château,gloire,baroque,cour,grand,noblesse,traité','M'), // VERSAILLES
W('scandinave,guerrier,navire,longship,exploration,amérique,raid,norse,norrois,valhalla,légende,hache,casque,dragon,nordique','M'), // VIKING
W('bataille,napoléon,défaite,belgique,1815,wellington,final,chute,exil,coalition,armée,prussien,histoire,campagne,juin','M'), // WATERLOO
W('monarchie,pouvoir,total,roi,versailles,divine,droit,autocratique,centralisé,noblesse,obéissance,louis,xiv,état,sans','M'), // ABSOLUTISME
W('accord,coalition,traité,militaire,nato,otan,pacte,partenariat,coopération,mutuel,défense,solidarité,ensemble,nations,force','F'), // ALLIANCE
W('noé,bible,déluge,ancien,testament,animaux,couple,salut,bois,gomer,divine,pluies,flottant,covenant,bateau','F'), // ARCHE
W('attaque,militaire,offensive,combat,charge,frappe,invasion,agression,soldats,mouvement,troupe,frontal,fort,siège,tactique','M'), // ASSAUT
W('prison,révolution,française,paris,storming,1789,forteresse,symbole,juillet,14,liberté,peuple,prise,libération,royauté','F'), // BASTILLE
W('combat,guerre,militaire,conflit,armée,fighting,engagement,tactique,victoire,défaite,territoire,historique,mémoire,héros,front','F'), // BATAILLE
W('siège,maritime,naval,embargo,encerclement,isolation,restriction,barrière,stratégique,coupure,commerce,port,Berlin,guerre,pression','M'), // BLOCUS
W('reddition,militaire,défaite,armistice,drapeau,blanc,inconditionnelle,fin,trêve,soumission,paix,hostilités,signature,victoire,guerre','F'), // CAPITULATION
W('rome,soldat,légion,commandant,officier,antique,militaire,centurie,rang,guerrier,cent,légionnaire,bouclier,épée,romain','M'), // CENTURION
W('temps,ordre,historique,frise,dates,suite,calendrier,séquence,période,époque,passé,événements,ordonnés,mesure,histoire','F'), // CHRONOLOGIE
W('union,états,alliance,fédérale,ligue,association,coalition,pacte,nations,ensemble,suisse,américaine,sudiste,guerre,histoire','F'), // CONFÉDÉRATION
W('victoire,militaire,territoire,invasion,domination,occupation,annexion,expansion,armée,gloire,histoire,empire,colonisation,force,triomphe','F'), // CONQUÊTE
W('rome,magistrat,antique,élu,office,gouvernement,exécutif,sénateur,officiel,pair,napoléon,titre,autorité,politique,romain','M'), // CONSUL
W('roi,royauté,pouvoir,symbole,bijoux,couronnement,autorité,monarque,or,cérémonie,trône,dynasties,jewel,doré,régale','F'), // COURONNE
W('loi,ordonnance,officiel,gouvernement,proclamation,ordre,règlement,statut,mandat,directive,royal,publié,imposé,promulgué,autorité','M'), // DÉCRET
W('tyran,pouvoir,absolu,autoritaire,autocrate,despote,totalitaire,oppresseur,dirigeant,régime,force,peur,censuré,histoire,résistance','M'), // DICTATEUR
W('bannissement,expulsion,déportation,étranger,forcé,réfugié,déplacement,isolation,punition,napoléon,proscrit,déraciné,loin,patrie,retour','M'), // EXIL
W('faim,pénurie,sécheresse,disette,souffrance,manque,nourriture,misère,crise,pauvreté,malnutrition,mourir,catastrophe,aide,population','F'), // FAMINE
W('navires,armada,navale,marine,escadre,maritime,bâtiments,puissance,mer,combat,croiseurs,frégates,escadron,historique,bataille','F'), // FLOTTE
W('création,établissement,origine,genèse,début,naissance,initiation,institution,démarrage,formation,lancement,fondateur,base,pierres,historique','F'), // FONDATION
W('château,fort,défense,citadelle,fortification,remparts,muraille,bastion,militaire,pierre,médiéval,assiègé,tour,meurtrières,donjon','F'), // FORTERESSE
W('guerre,ligne,bataille,militaire,combat,zone,trenches,opposition,confrontation,soldats,ennemi,offensive,résistance,froid,politique','M'), // FRONT
W('massacre,extermination,peuple,holocaust,shoah,atrocité,ethnique,nettoyage,crime,humanité,systematic,meurtre,histoire,cambodge,rwanda','M'), // GÉNOCIDE
W('rome,arène,colisée,combat,spectacle,esclave,lutteur,épée,public,sang,antique,spartacus,trident,filet,mourraient','M'), // GLADIATEUR
W('architecture,médiéval,cathédrale,arc,ogive,vitraux,pointu,sombre,mystérieux,ornementé,voûté,église,flèche,spires,moyen-âge','M'), // GOTHIQUE
W('protestation,travail,syndicat,manifestation,arrêt,ouvrière,revendication,salaire,droit,social,industrie,débrayage,piquets,mouvement,colère','F'), // GRÈVE
W('domination,pouvoir,suprématie,influence,supériorité,ascendance,leadership,contrôle,prééminence,mondiale,culturelle,politique,économique,américaine,hégémonie','F'), // HÉGÉMONIE
W('égypte,écriture,symbole,pharaon,antique,scribes,rosette,déchiffrement,champollion,mur,temple,sarcophage,langue,mystère,signe','M'), // HIÉROGLYPHE
W('attaque,militaire,conquête,occupation,incursion,agression,intrusion,territoire,troupe,frontière,ennemi,force,prendre,défendre,historique','F'), // INVASION
W('rome,militaire,soldat,centurion,antique,armée,formation,infanterie,cohorte,aigle,honneur,discipline,marche,frontière,conquête','F'), // LÉGION
W('déclaration,politique,document,programme,parti,idéologie,principes,agenda,texte,publié,proclamation,candidat,intention,plateforme,vision','M'), // MANIFESTE
W('tuerie,génocide,carnage,sang,atrocité,victime,violence,histoire,soldats,civils,extermination,meurtre,masse,horreur,barbare','M'), // MASSACRE
W('moyen-âge,chevalier,château,féodal,croisades,cathédrale,obscur,siècles,noblesse,serfs,religieux,épidémie,médiéval,artisans,histoire','M'), // MÉDIÉVAL
W('roi,royauté,couronne,trône,souverain,héréditaire,palais,noblesse,absolu,dynasties,angleterre,france,constitution,héritage,règne','F'), // MONARCHIE
W('militaire,territoire,contrôle,saisie,présence,garnison,forces,étrangères,annexion,oppression,résistance,collaboration,nazisme,france,guerre','F'), // OCCUPATION
W('vatican,pontife,catholique,saint,père,rome,église,évêque,sainteté,tiare,basilique,piété,bénédiction,succession,apostolique','M'), // PAPE
W('division,séparation,territoire,frontière,coupe,délimitation,géopolitique,politique,historique,pays,décision,paix,inde,palestine,corée','F'), // PARTITION
W('rome,peuple,commun,classe,citoyens,bas,populace,masses,non-patricien,assemblée,droit,antique,tribun,représentation,social','F'), // PLÈBE
W('massacre,juifs,persécution,violence,ethnique,antisémite,meurtre,organisé,mob,russe,communauté,historique,atrocité,riot,pogrome','M'), // POGROM
W('colonie,protection,coloniale,territoire,mandat,influence,contrôle,dépendant,sphère,administration,france,maroc,tunisie,histoire,souveraineté','M'), // PROTECTORAT
W('région,administrative,territoire,état,district,zone,subdivision,local,gouvernance,juridiction,france,empire,antique,département,autonome','F'), // PROVINCE
W('révolte,insurrection,soulèvement,résistance,défi,mutinerie,insurgés,protestation,révolution,désobéissance,civile,combat,oppresseur,mouvement,armé','F'), // RÉBELLION
W('retour,monarchie,rétablissement,réinstallation,renouveau,bourbon,stuart,trône,revenir,après,révolution,histoire,france,régime,rétablir','F'), // RESTAURATION
W('couronnement,cérémonie,roi,onction,inauguration,enthroning,rituel,religieux,couronne,majesté,investiture,pomp,cathédrale,reims,gloire','M'), // SACRE
W('division,religieuse,église,séparation,rupture,catholique,orthodoxe,protestant,conflit,sectaire,1054,réforme,luther,doctrine,foi','M'), // SCHISME
W('égypte,monument,pharaon,énigme,lion,humain,mythique,gizeh,gardien,mystère,antique,pierre,désert,visage,temple','M'), // SPHINX
W('vote,droit,universel,citoyen,électoral,franchise,bulletin,élection,urne,démocratie,femmes,réforme,politique,représentation,choix','M'), // SUFFRAGE
W('religieux,sacré,antique,culte,sanctuaire,lieu,saint,dieu,pierre,histoire,parthenon,angkor,jérusalem,offrande,prêtre','M'), // TEMPLE
W('royauté,siège,pouvoir,roi,souverain,règne,monarchie,couronne,regal,autorité,palais,or,hériter,succession,assis','M'), // TRÔNE
W('dictateur,oppresseur,cruel,despote,absolu,totalitaire,autoritaire,dur,injuste,pouvoir,peur,résistance,régime,force,histoire','M'), // TYRAN
W('féodal,seigneur,fidélité,serment,allégeance,serviteur,médiéval,fief,protection,obédience,moyen-âge,noble,hiérarchie,dépendant,liege','M'), // VASSAL
W('triomphe,gagner,succès,bataille,gloire,récompense,honneur,défaite,adversaire,militaire,sport,conquer,histoire,fierté,mérite','F'), // VICTOIRE
  ],

  '🎨 Arts & Littérature': [
W('art,non-figuratif,moderne,formes,couleurs,kandinsky,expression,cubisme,libre,interprétation,contemporain,peinture,concept,style,innovant','M'), // ABSTRAIT
W('bâtiment,construction,design,plan,architecte,structure,gothique,baroque,moderne,urbanism,espace,blueprints,art,édifice,forme','F'), // ARCHITECTURE
W('écrivain,livre,roman,plume,littérature,publication,signature,création,narration,récit,écriture,styliste,critique,talent,genre','M'), // AUTEUR
W('écrivain,français,comédie,humaine,réalisme,roman,goriot,19ème,père,honoré,prolifique,société,récit,personnages,maîtrise','M'), // BALZAC
W('art,ornementé,17ème,église,versailles,élaboré,décoratif,rococo,classique,extravagant,dorée,grand,opulent,dramatique,forme','M'), // BAROQUE
W('compositeur,allemand,symphonie,classique,sourd,neuvième,génie,piano,ode,joie,ludwig,van,virtuose,maestro,légendaire','M'), // BEETHOVEN
W('danse,classique,tutu,tchaikovsky,casse-noisette,pointes,gracieux,lac,cygnes,choreographie,pirouette,prima,élégance,scène,corps','M'), // BALLET
W('écrivain,français,existentialisme,étranger,peste,philosophe,absurde,albert,résistance,nobel,humaniste,alger,roman,pensée,mérite','M'), // CAMUS
W('dessin,satirique,exagération,humour,politique,critique,cartoon,moquerie,lampoon,ridicule,journalisme,crayon,charge,portrait,esprit','F'), // CARICATURE
W('église,gothique,voûte,vitraux,notre-dame,architecture,religieux,nef,pierre,monument,clocher,rosace,messe,médiéval,majestueux','F'), // CATHÉDRALE
W('argile,poterie,vase,cuisson,four,artisan,porcelaine,faïence,art,émail,glazed,kiln,craft,antique,décoratif','F'), // CÉRAMIQUE
W('art,excellence,perfection,génie,sublime,création,masterwork,sommet,exemplaire,iconique,inégalé,musée,peinture,sculpture,littérature','M'), // CHEF-D-ŒUVRE
W('compositeur,polonais,piano,romantique,nocturne,valse,frédéric,virtuose,romantisme,pianiste,mélodie,délicat,poétique,expressif,brillant','M'), // CHOPIN
W('art,antiquité,grec,romain,intemporel,mozart,beethoven,traditionnel,harmonieux,raffiné,élégant,forme,contrôlé,équilibré,noble','M'), // CLASSIQUE
W('art,papier,coller,composition,assemblage,cubisme,picasso,mixte,découpe,colle,mosaïque,créatif,gestes,fragments,matières','M'), // COLLAGE
W('théâtre,rire,humour,molière,farce,légère,amusant,drôle,spectacle,pièce,gags,réplique,comique,masques,commedia','F'), // COMÉDIE
W('musique,orchestre,soliste,classique,composition,mozart,vivaldi,instrumental,symphonie,performance,seul,virtuose,mouvement,opus,cadence','M'), // CONCERTO
W('art,picasso,géométrique,moderne,abstrait,braque,angulaire,fragmenté,perspective,révolutionnaire,innovant,avant-garde,20ème,radical,formes','M'), // CUBISME
W('artiste,surréalisme,espagnol,moustache,persistance,mémoire,peintre,salvador,excentrique,onirique,bizarre,flamboyant,iconique,horloge,melting','M'), // DALI
W('crayon,esquisse,ligne,papier,croquis,illustration,art,pencil,trait,contour,artistique,brouillon,freehand,créatif,forme','M'), // DESSIN
W('théâtre,tragédie,tension,émotion,shakespeare,serious,intensité,conflit,tragique,acteur,scène,puissant,captivant,mise,jeu','M'), // DRAME
W('fiction,futur,sombre,orwell,1984,totalitaire,oppression,surveillance,cauchemar,avertissement,société,roman,anticipation,pessimiste,science','F'), // DYSTOPIE
W('poème,héros,aventure,homère,odyssée,iliade,mythologie,légende,héroïque,narration,saga,antique,quête,mythique,grandiose','F'), // ÉPOPÉE
W('dessin,rapide,croquis,brouillon,léger,trait,rough,quick,contour,étude,préparatoire,souple,ébauche,spontané,artistique','F'), // ESQUISSE
W('art,émotion,intense,munch,cri,audacieux,émotionnel,vivid,brut,turbulent,psychologique,dramatique,passionné,viscéral,expressif','M'), // EXPRESSIONNISME
W('récit,morale,lafontaine,animaux,leçon,allégorie,didactique,métaphorique,sagesse,enseignement,renard,loup,corbeau,cigale,fourmi','F'), // FABLE
W('imaginaire,rêve,irréel,merveilleux,magique,féerique,whimsical,onirique,enchanteur,surréel,fantastique,éthéré,autre,monde,imaginatif','F'), // FANTAISIE
W('peinture,murale,mur,renaissance,michel-ange,sixtine,large,plâtre,artistique,décoratif,chapelle,grandiose,pigment,monument,antique','F'), // FRESQUE
W('écrivain,allemand,poète,faust,werther,romantisme,johan,wolfgang,poet,dramaturge,littéraire,génie,weimar,classique,influent','M'), // GOETHE
W('architecture,médiéval,cathédrale,arc,ogive,vitraux,pointu,sombre,mystérieux,ornementé,voûté,église,flèche,spires,moyen-âge','M'), // GOTHIQUE
W('art,imprimé,burin,estampe,technique,impression,gravure,incisé,artistique,bois,printmaking,détaillé,reproduction,craft,plaque','F'), // GRAVURE
W('écrivain,français,romantique,misérables,notre-dame,victor,poète,romancier,dramatiste,épique,humanitaire,littéraire,géant,légendaire,résistant','M'), // HUGO
W('art,peinture,lumière,monet,renoir,19ème,plein,air,couleur,touche,impressionniste,outdoor,fugitif,atmosphérique,brume','M'), // IMPRESSIONNISME
W('écrivain,tchèque,métamorphose,procès,absurde,franz,aliénation,surréel,existentiel,moderne,bureaucratie,anxiété,onirique,profond,insecte','M'), // KAFKA
W('fabuliste,français,fables,animaux,morale,jean,moraliste,poète,sagesse,didactique,allégorie,charmant,intemporel,corbeau,renard','M'), // LA-FONTAINE
W('mythe,récit,folklore,héros,histoire,orale,tradition,populaire,légendaire,conte,imaginaire,héroïque,culture,transmission,fantastique','F'), // LÉGENDE
W('vinci,renaissance,génie,peinture,invention,polymath,peintre,inventeur,scientifique,visionnaire,brillant,multitalentueux,mona,lisa,dernier','M'), // LÉONARD
W('pages,lecture,roman,auteur,bibliothèque,écriture,publication,texte,tome,volume,littérature,reliure,couverture,index,chapitre','M'), // LIVRE
W('musée,paris,art,mona,lisa,pyramide,collection,galerie,chef-oeuvre,touriste,culturel,historique,france,palais,peintures','M'), // LOUVRE
W('bande,dessinée,japon,anime,otaku,comics,série,illustrée,populaire,culture,stylisé,personnages,volumes,shonen,shojo','M'), // MANGA
W('artiste,renaissance,sculpteur,david,sixtine,buonarroti,peintre,génie,masterpiece,chapelle,fresque,légendaire,virtuose,michel-ange,marbre','M'), // MICHELANGELO
W('peintre,impressionniste,nymphéas,giverny,français,claude,impressionnisme,nénuphars,jardin,lumière,touche,coloré,paisible,maîtrise,nature','M'), // MONET
W('compositeur,autrichien,génie,enfant,prodige,wolfgang,amadeus,classique,virtuose,opéra,symphonie,piano,prolific,brillant,intemporel','M'), // MOZART
W('collection,art,exposition,galerie,culture,oeuvres,visiteur,conservation,touristique,éducatif,peinture,sculpture,guide,patrimoine,histoire','M'), // MUSÉE
W('légende,récit,héros,dieux,folklore,épique,antique,surnaturel,allégorique,tradition,orale,symbolique,culture,olympe,origine','M'), // MYTHE
W('prix,alfred,suède,prestige,littérature,paix,science,cérémonie,stockholm,lauréat,honneur,international,récompense,peace,chimie','M'), // NOBEL
W('récit,court,fiction,genre,littéraire,prose,bref,écrit,narrative,condensé,histoire,personnage,maupassant,tchekhov,journal','F'), // NOUVELLE
W('musique,chant,lyrique,aria,classique,wagner,verdi,scène,orchestre,soprano,dramatique,grand,costume,ténor,spectacle','M'), // OPÉRA
W('musique,ensemble,instruments,chef,concert,symphonie,classique,harmonieux,cordes,cuivres,bois,direction,baguette,salle,partition','M'), // ORCHESTRE
W('art,craie,tendre,couleur,dessin,doux,pigment,artistique,délicat,mélangé,poudreux,esquisse,portrait,crayon,technique','M'), // PASTEL
W('art,toile,pinceau,couleur,tableau,artiste,huile,aquarelle,acrylique,chef-oeuvre,musée,impressionnisme,technique,pigment,expression','F'), // PEINTURE
W('artiste,cubisme,espagnol,guernica,pablo,peintre,cubiste,révolutionnaire,prolific,génie,moderne,innovant,influent,iconique,20ème','M'), // PICASSO
W('vers,poème,rimes,littérature,lyrisme,beauté,langage,expression,strophe,métaphore,sentiment,art,sonnet,ode,émotion','F'), // POÉSIE
W('vers,rime,poésie,écrivain,lyrisme,bard,romantique,expressif,artistique,créatif,inspiration,muse,plume,langage,sensible','M'), // POÈTE
W('visage,peinture,représentation,sujet,pose,ressemblance,expression,caractère,artiste,modèle,depicted,galerie,photo,identité,figuratif','M'), // PORTRAIT
W('art,après,moderne,contemporain,20ème,expérimental,ironique,éclectique,diversifié,innovant,anti-traditionnel,conceptuel,pluraliste,hybride,déconstruct','M'), // POSTMODERNE
W('écrivain,français,recherche,temps,perdu,marcel,romancier,moderniste,introspectif,littéraire,mémoire,élaboré,sophistiqué,réflexif,monumental','M'), // PROUST
W('musique,ensemble,quatre,cordes,chambre,classique,intime,harmonieux,raffiné,mozartet,beethoven,violon,alto,violoncelle,composition','M'), // QUATUOR
W('art,réaliste,vérité,19ème,naturalisme,précis,objectif,détaillé,life-like,authentique,exact,coubet,balzac,zola,photographie','M'), // RÉALISME
W('peintre,hollandais,lumière,ombre,17ème,baroque,âge,or,portrait,dramatique,clair-obscur,génie,amsterdam,néerlandais,maîtrise','M'), // REMBRANDT
W('art,culture,humanisme,14ème,italie,florence,michel-ange,léonard,vinci,renouveau,classique,peinture,architecture,littérature,pensée','F'), // RENAISSANCE
W('livre,fiction,récit,littérature,auteur,prose,narration,long,genre,personnages,histoire,intrigue,écriture,publication,bestseller','M'), // ROMAN
W('art,19ème,émotion,nature,sentiment,romantique,passionné,idéaliste,individualiste,imaginatif,lyrique,sublimité,génie,révolution,victor','M'), // ROMANTISME
W('critique,humour,moquerie,ironie,caricature,social,politique,lampoon,esprit,sarcasme,mordant,comique,aiguisé,voltaire,journalisme','F'), // SATIRE
W('art,statue,forme,pierre,marbre,ciselé,taillé,modelé,bronze,argile,artistique,trois-dimensions,relief,bas-relief,plastique','F'), // SCULPTURE
W('dramaturge,anglais,hamlet,roméo,juliette,pièce,bard,tragédie,comédie,intemporel,littéraire,génie,élizabéthain,iconique,globe','M'), // SHAKESPEARE
W('musique,piano,classique,composition,solo,mouvement,mélodie,structurée,opus,beethoven,mozart,trois,partie,forme,instrument','F'), // SONATE
W('poème,14,vers,rimes,amour,structuré,romantique,lyrique,strophe,littéraire,shakespeare,pétrarque,petrarchan,quatrain,tercet','M'), // SONNET
W('art,rêve,inconscient,dali,magritte,onirique,subconscient,bizarre,irrationnel,freudien,automatisme,inattendu,imaginatif,révolutionnaire,20ème','M'), // SURRÉALISME
W('musique,orchestre,mouvements,classique,beethoven,grand,harmonieux,opus,composition,élaboré,majestueux,concert,cordes,cuivres,direction','F'), // SYMPHONIE
W('peinture,toile,oeuvre,art,cadre,musée,pendu,galerie,exposé,artistique,huile,chef-oeuvre,couleurs,mur,accrochée','M'), // TABLEAU
W('scène,acteur,pièce,comédie,tragédie,performance,public,rideau,dramaturge,direct,live,mise,jeu,art,applaudissements','M'), // THÉÂTRE
W('bande,dessinée,hergé,aventure,belgique,comics,reporter,belge,milou,série,bien-aimé,iconique,globe,jeunesse,dessin','M'), // TINTIN
W('peinture,tissu,art,lin,surface,cadre,tendue,huile,acrylique,artiste,support,matière,préparée,peinte,stretched','F'), // TOILE
W('théâtre,drame,malheur,fin,triste,destin,catharsis,funeste,protagoniste,mort,fatalité,shakespearien,héros,souffrance,classique','F'), // TRAGÉDIE
W('peintre,hollandais,tournesols,nuit,étoilée,vincent,post-impressionniste,vivid,expressif,torturé,oreille,arles,génie,coloré,intense','M'), // VAN-GOGH
W('compositeur,italien,opéra,aida,traviata,giuseppe,dramatique,mélodique,romantique,grand,aria,légendaire,nabucco,rigoletto,orchestre','M'), // VERDI
W('ligne,poésie,strophe,rime,mètre,syllabe,rythme,littéraire,structuré,alexandrin,iambique,sonnet,poème,versification,cadence','M'), // VERS
W('léonard,renaissance,génie,mona,lisa,cène,polymath,peintre,inventeur,scientifique,visionnaire,maître,italie,homme,universel','M'), // VINCI
W('instrument,cordes,archet,musique,orchestre,melodieux,concert,solo,vibrato,sonore,classique,stradivarius,chant,exécutant,bois','M'), // VIOLON
W('écrivain,philosophe,français,candide,lumières,satiriste,critique,intellectuel,rationaliste,influent,liberté,tolérance,18ème,esprit,humaniste','M'), // VOLTAIRE
W('compositeur,allemand,opéra,ring,nibelungen,richard,dramatique,épique,mythologique,intense,orchestral,révolutionnaire,leitmotiv,tétralogie,grand','M'), // WAGNER
W('peinture,eau,transparent,délicat,pinceau,couleur,fluide,doux,artistique,papier,light,lavis,technique,lumineuse,translucide','F'), // AQUARELLE
W('portrait,artiste,soi-même,peinture,introspectif,reflet,personnel,identité,artistique,expression,van-gogh,rembrandt,frida,kahlo,représentation','M'), // AUTOPORTRAIT
W('livre,succès,vente,populaire,liste,vendu,commercial,hit,lu,chart,nouveau,york,times,classement,largement','M'), // BESTSELLER
W('vie,récit,personne,autobiographie,sujet,account,historique,personnel,chronique,mémoires,narrative,célèbre,personnalité,témoignage,document','F'), // BIOGRAPHIE
W('écriture,belle,art,chinoise,japonaise,plume,encre,tracé,élégant,décoratif,caractère,lettrage,ornementé,pinceau,artistique','F'), // CALLIGRAPHIE
W('musique,règle,composition,classique,forme,fugue,contrepoint,polyphonique,baroque,Bach,stricte,voix,imitation,répétition,entrées','M'), // CANON
W('chant,choeur,ensemble,voix,harmonie,sacré,hymne,choral,liturgique,groupe,polyphonie,concert,religieux,amateur,gospel','F'), // CHORALE
W('musique,création,arrangement,auteur,originel,mélodie,harmonie,structure,opus,créatif,partition,écriture,thème,développement,artistique','F'), // COMPOSITION
W('récit,fable,histoire,court,narrative,folklore,fée,enfant,morale,coucher,imaginatif,merveilleux,perrault,andersen,magie','M'), // CONTE
W('analyse,jugement,évaluation,compte-rendu,commentaire,opinion,appréciation,examen,interprétation,académique,littéraire,art,journal,presse,esprit','F'), // CRITIQUE
W('scène,décoration,théâtre,backdrop,plateau,accessoires,ambiance,design,visuel,fond,reconstitution,réaliste,décorateur,atelier,coulisses','M'), // DÉCORS
W('conversation,échange,paroles,discussion,texte,script,verbal,interaction,théâtral,communication,réplique,personnage,discours,pièce,réponse','M'), // DIALOGUE
W('publication,livre,maison,impression,sortie,version,éditeur,texte,littéraire,presse,reliure,tirage,numéro,collection,parution','F'), // ÉDITION
W('texte,littéraire,réflexion,prose,analytique,argument,philosophique,critique,académique,montaigne,opinion,argumentation,pensée,formel,raisonné','M'), // ESSAI
W('comédie,légère,bouffonnerie,humour,théâtre,comique,ridicule,amusant,pièce,moquerie,trivial,gags,comedia,populaire,rire','F'), // FARCE
W('catégorie,style,type,littéraire,classification,forme,artistique,mode,variété,division,roman,poésie,théâtre,fiction,fantastique','M'), // GENRE
W('peinture,opaque,épaisse,couleur,medium,pigment,mat,corps,couverture,artistique,eau,dessin,illustration,affiche,poster','F'), // GOUACHE
W('art,visuel,design,illustration,typographie,mise,en,page,créatif,communication,numérique,branding,logo,identité,visuelle','M'), // GRAPHISME
W('poème,japonais,court,vers,syllabes,nature,zen,concis,minimaliste,saison,basho,dix-sept,kireji,moment,silence','M'), // HAÏKU
W('image,religieuse,symbole,orthodoxe,sacrée,panneau,dévotionnel,peinte,byzantine,vénérée,saint,art,religieux,russe,culte','F'), // ICÔNE
W('image,dessin,livre,visuel,graphique,oeuvre,enfant,décoratif,artistique,imagery,depicted,rendu,couleur,pinceau,technique','F'), // ILLUSTRATION
W('histoire,mystère,suspense,complot,récit,plot,narrative,fiction,captivant,whodunit,rebondissement,tension,développement,personnages,arc','F'), // INTRIGUE
W('musique,swing,blues,improvisation,saxophone,syncopé,bebop,cool,fusion,rythme,doux,ensemble,new,orleans,classique','M'), // JAZZ
W('opéra,texte,paroles,livret,aria,récitatif,écrit,musical,chanté,opératique,vocal,auteur,adaptation,histoire,librettiste','M'), // LIBRETTO
W('chant,polyphonique,renaissance,vocal,séculier,choral,partie,chanson,mélodieux,ensemble,début,amour,poème,voix,madrigal','M'), // MADRIGAL
W('art,silence,geste,expression,pantomime,théâtral,non-verbal,physique,clown,expressif,corps,muet,mimique,performance,chaplin','M'), // MIME
W('peinture,petite,détail,précis,délicat,ornée,manuscrit,intricate,fine,illuminée,médiéval,enluminure,paysage,portrait,riche','F'), // MINIATURE
W('théâtre,discours,seul,parole,soliloque,solo,dramatique,introspectif,spoken,performance,personnage,intérieur,expression,hamlet,confidentiel','M'), // MONOLOGUE
W('thème,élément,répétition,design,pattern,décoratif,récurrent,artistique,ornamental,visuel,leitmotif,tissu,musical,formes,stylisé','M'), // MOTIF
W('récit,histoire,voix,storytelling,narrateur,point,vue,première,personne,omniscient,fiction,raconter,roman,passage,ton','M'), // NARRATEUR
W('poème,lyrique,classique,strophe,vers,chanson,antique,grec,élevé,choral,célébration,horace,keats,pindar,hommage','F'), // ODE
W('opéra,léger,comique,musical,théâtre,divertissant,mélodie,viennois,playful,dramatique,joyeux,simple,populaire,bouffe,fantaisie','F'), // OPÉRETTE
W('spectacle,art,vivant,public,show,direct,live,théâtral,concert,exposition,présentation,artistique,événement,scène,démonstration','F'), // PERFORMANCE
W('art,profondeur,3d,fuite,horizon,linear,spatial,foreshortening,dimensionnel,Renaissance,ligne,point,technique,peinture,géométrie','F'), // PERSPECTIVE
W('pensée,sagesse,réflexion,socrate,platon,logique,raisonnement,intellectuel,profond,éthique,métaphysique,question,courant,doctrine,épistémologie','F'), // PHILOSOPHIE
W('texte,écrit,littérature,paragraphe,phrases,narration,composition,non,vers,expositoire,roman,essai,article,discours,courant','F'), // PROSE
W('poème,quatre,vers,strophe,rime,structuré,poétique,métrique,littéraire,alexandrin,sonnet,organisation,schéma,forme,distique','M'), // QUATRAIN
W('vers,sonorité,poésie,assonance,finales,mots,pattern,poétique,mélodieux,schéma,couplé,croisé,embrassé,suivi,répétition','F'), // RIME
W('film,histoire,script,dialogue,story,scénariste,intrigue,structure,écriture,traitement,brouillon,personnage,adaptation,cinéma,dramatique','M'), // SCÉNARIO
W('poème,vers,unité,lignes,groupe,division,rime,pattern,structuré,poétique,organisé,refrain,distique,tercet,quatrain','F'), // STROPHE
W('manière,artistique,genre,expression,esthétique,distinctif,caractéristique,approche,signature,mode,originalité,personnel,unique,forme,courant','M'), // STYLE
W('oeuvre,quatre,parties,série,cycle,opéra,wagner,épique,saga,quartet,romans,reliés,étendu,long,monumental','F'), // TÉTRALOGIE
W('oeuvre,trois,parties,série,cycle,trilogie,reliée,séquentielle,épique,connectée,romans,films,suite,narration,ensemble','F'), // TRILOGIE
W('théâtre,comédie,légère,musical,variété,burlesque,humoristique,chanson,danse,populaire,mélodrame,divertissement,farce,18ème,spectacle','M'), // VAUDEVILLE
  ],

  '🔬 Sciences & Nature': [
W('chimie,ph,corrosif,citrique,sulfurique,dissolution,réaction,brûlure,solution,base,laboratoire,vinaigrette,concentration,neutre,proton','M'), // ACIDE
W('génétique,double,hélice,cellule,chromosome,watson,crick,mutation,hérédité,biologie,nucléotide,séquence,génome,information,gène','M'), // ADN
W('magnétique,attraction,fer,boussole,pôle,nord,sud,repousser,métal,force,ferreux,champ,dipôle,magnétisme,attirer','M'), // AIMANT
W('plante,aquatique,verte,photosynthèse,mer,océan,chlorophylle,marine,eau,organisme,kelp,vert,marin,plancton,ressource','F'), // ALGUE
W('électricité,unité,intensité,courant,andré,marie,mesure,circuit,électrique,flux,charge,physicien,ampèremètre,conducteur,sécurité','M'), // AMPÈRE
W('être,vivant,faune,espèce,mammifère,règne,créature,organisme,zoologie,vertébré,invertébré,nature,adaptation,vie,comportement','M'), // ANIMAL
W('particule,élément,noyau,électron,proton,neutron,matière,molécule,chimie,quantique,structure,liaison,masse,invisible,fission','M'), // ATOME
W('microbe,germe,infection,pathogène,cellule,micro-organisme,maladie,prokaryote,colonie,résistance,antibiotique,multiplication,culture,microscope,invisible','F'), // BACTÉRIE
W('univers,explosion,origine,cosmos,cosmologie,expansion,primordial,singularité,astronomique,initial,chaleur,début,espace,temps,énergie','M'), // BIG-BANG
W('science,vivant,cellule,organisme,étude,zoologie,botanique,génétique,écologie,vie,espèce,évolution,anatomie,classification,laboratoire','F'), // BIOLOGIE
W('unité,vie,noyau,membrane,organisme,microscope,tissu,division,mitose,biologie,nucleus,cytoplasme,énergie,base,reproduct','F'), // CELLULE
W('science,élément,réaction,molécule,laboratoire,atome,composé,formule,équation,périodique,substance,expérience,litre,solution,matière','F'), // CHIMIE
W('génétique,ADN,cellule,hérédité,mutation,gène,allèle,trait,noyau,karyotype,X,Y,paire,brin,porteur','M'), // CHROMOSOME
W('automobile,piste,tour,course,formule,boucle,ovale,virage,tracé,asphalte,ligne,droite,chicane,circuit,grand','M'), // CIRCUIT
W('météo,température,atmosphère,réchauffement,précipitation,saisonnier,mondial,changement,zone,biome,tropical,aride,polaire,tempéré,carbone','M'), // CLIMAT
W('organe,sang,battement,cardiaque,pompe,vital,muscle,circulation,rythme,artère,veine,médecine,droit,gauche,contrôle','M'), // CŒUR
W('astre,espace,queue,noyau,glace,halley,céleste,orbite,solaire,périodique,pluie,météores,visible,brillante,nébuleuse','F'), // COMÈTE
W('mathématique,physique,invariable,nombre,pi,gravité,universelle,fixe,fondamentale,équation,valeur,planck,vitesse,lumière,nature','F'), // CONSTANTE
W('physique,matière,humain,anatomie,organe,biologique,charnel,chair,somatique,système,santé,masse,forme,vivant,morphologie','M'), // CORPS
W('minéral,transparent,structure,quartz,diamant,géométrique,réseau,facetté,solide,formation,gemme,neige,sel,régulier,brillant','M'), // CRISTAL
W('évolution,naturaliste,sélection,naturelle,pinsons,galapagos,espèces,origine,théorie,adaptation,scientifique,biologiste,britannique,révolution,charles','M'), // DARWIN
W('son,bruit,intensité,volume,acoustique,mesure,db,audio,seuil,nuisance,oreille,pression,logarithmique,echelle,décibel','M'), // DÉCIBEL
W('pierre,précieuse,carbone,dur,brillant,gemme,taille,bijou,dureté,clarté,carat,fiançailles,mine,optique,rare','M'), // DIAMANT
W('préhistorique,reptile,éteint,jurassique,fossile,t-rex,mésozoïque,paléontologie,géant,antique,tricératops,extinction,os,terrestre,stégosaure','M'), // DINOSAURE
W('courant,énergie,voltage,lumière,foudre,puissance,électron,flux,choc,centrale,réseau,fil,prise,kilowatt,éclairage','F'), // ÉLECTRICITÉ
W('particule,charge,négative,atome,orbite,subatomique,quantique,couche,nuage,spin,léger,métal,conducteur,microscopique,lumière','M'), // ÉLECTRON
W('chimie,périodique,atome,hydrogène,oxygène,substance,pur,basique,constituant,fondamental,tableau,mendeleïev,masse,numéro,atomique','M'), // ÉLÉMENT
W('physique,force,travail,cinétique,potentielle,joule,puissance,capacité,conservation,renouvelable,thermique,lumineuse,nucléaire,solaire,transformation','F'), // ÉNERGIE
W('protéine,catalyseur,biochimie,réaction,biologique,digestif,métabolique,substrat,site,actif,biocatalyseur,naturel,efficacité,cellule,spécifique','F'), // ENZYME
W('biologie,animal,végétal,taxonomie,classification,organisme,genre,biodiversité,faune,flore,évolution,population,adaptation,extinction,variété','F'), // ESPÈCE
W('astre,ciel,lumineuse,constellation,galaxie,briller,scintiller,astronomie,solaire,fusion,nucléaire,masse,naine,géante,supernovae','F'), // ÉTOILE
W('darwin,sélection,naturelle,adaptation,espèce,mutation,survie,fittest,génétique,changement,million,années,théorie,fossile,transformisme','F'), // ÉVOLUTION
W('nucléaire,atome,uranium,énergie,réaction,fission,chaîne,radioactif,puissance,atomique,bombe,centrale,division,neutron,explosif','F'), // FISSION
W('physique,newton,gravité,travail,pression,attraction,vecteur,énergie,mouvement,accélération,masse,poussée,traction,résultante,magnétique','F'), // FORCE
W('ancien,préhistorique,dinosaure,roche,paléontologie,restes,pétrifié,fouille,géologie,éteint,empreinte,os,amber,strate,découverte','M'), // FOSSILE
W('physique,résistance,mouvement,frottement,chaleur,surface,contact,cinétique,traîne,force,statique,coefficient,usure,glissement,énergie','F'), // FRICTION
W('nucléaire,atome,hydrogène,énergie,soleil,thermonucléaire,combiner,réaction,étoile,plasma,deutérium,tritium,température,fusion,puissance','F'), // FUSION
W('espace,étoiles,voie,lactée,univers,spirale,amas,nébuleuse,cosmique,astronomique,millions,années-lumière,noire,trou,hubble','F'), // GALAXIE
W('état,matière,air,oxygène,azote,vapeur,atmosphère,invisible,moléculaire,compressible,expansion,naturel,propane,noble,diffusion','M'), // GAZ
W('biologie,ADN,hérédité,chromosome,mutation,génome,allèle,trait,inheritance,gène,crick,watson,mendel,expression,variation','F'), // GÉNÉTIQUE
W('physique,newton,attraction,terre,masse,poids,force,universelle,accélération,chute,orbite,lune,einstein,courbe,espace','F'), // GRAVITÉ
W('chimie,substance,régulation,endocrine,insuline,glande,sécrétion,biologique,thyroïde,estrogène,adrénaline,sang,corps,équilibre,messager','F'), // HORMONE
W('télescope,espace,NASA,astronomie,observation,orbite,deep,field,cosmique,univers,galaxie,lancement,image,lumière,spatiale','M'), // HUBBLE
W('élément,H,eau,léger,gaz,atome,diatomique,carburant,molécule,combustible,fusion,univers,abondant,énergie,propre','M'), // HYDROGÈNE
W('animal,arthropode,antennes,pattes,métamorphose,six,aile,invertébré,exosquelette,abeille,fourmi,papillon,moustique,scarabée,larve','M'), // INSECTE
W('atome,charge,électrique,positif,négatif,particule,plasma,solution,ionisation,électrolyte,sel,dissolution,cristal,transport,chimie','M'), // ION
W('atome,élément,neutron,radioactif,carbone,variante,masse,nombre,instable,désintégration,uranium,stable,nucléaire,mesure,datation','M'), // ISOTOPE
W('température,zéro,absolu,degré,thermodynamique,froid,celsius,mesure,273,chaleur,thermique,échelle,physique,cryogénie,conversion','M'), // KELVIN
W('lumière,rayon,amplification,rouge,précision,cohérent,focalisé,découpe,chirurgie,optique,intense,artificiel,laser,médical,industriel','M'), // LASER
W('géographie,parallèle,équateur,nord,sud,coordonnée,degré,horizontal,climat,zone,position,terrestre,mesure,GPS,cartographie','F'), // LATITUDE
W('photon,onde,électromagnétique,vitesse,brillant,rayon,vision,spectre,illuminer,photosynthèse,couleur,réfraction,diffraction,source,naturelle','F'), // LUMIÈRE
W('physique,attraction,aimant,fer,champ,pôle,boussole,force,dipôle,terrestre,électromagnétisme,induit,ferromagnétique,maxwell,faraday','M'), // MAGNÉTISME
W('animal,vertébré,lait,poils,vivipare,sang,chaud,placentaire,nourrir,humain,chien,baleine,souris,cerveau,évolution','M'), // MAMMIFÈRE
W('physique,poids,matière,kilogramme,inertie,gravité,volume,densité,mesure,gravitationnelle,énergie,accélération,lourd,léger,centre','F'), // MASSE
W('physique,substance,atome,solide,liquide,gaz,composition,état,molécule,particule,masse,structure,naturelle,invisible,chimie','F'), // MATIÈRE
W('cellule,biologie,sélective,perméable,lipide,barrière,frontière,phospholipide,semi-perméable,osmose,transport,protéine,double,couche,cellulaire','F'), // MEMBRANE
W('élément,fer,or,cuivre,conducteur,alliage,métallique,brillant,malleable,minéral,acier,aluminium,titane,minerai,forge','M'), // MÉTAL
W('espace,étoile,filante,atmosphère,chute,météorite,astéroïde,fragment,traînée,boule,feu,caillou,cratère,extraterrestre,impact','M'), // MÉTÉORE
W('instrument,lentille,grossissement,cellule,biologie,optique,zoom,observer,spécimen,laboratoire,électronique,grossir,bactérie,invisible,chercheur','M'), // MICROSCOPE
W('chimie,atome,liaison,composé,h2o,covalente,structure,formule,moléculaire,liaisons,énergie,réaction,substance,assemblage,chimique','F'), // MOLÉCULE
W('génétique,ADN,changement,évolution,hasard,gène,altération,variation,spontanée,cancer,adaptation,héréditaire,naturelle,radiation,biologie','F'), // MUTATION
W('particule,atome,noyau,charge,neutre,subatomique,proton,masse,nucléaire,stable,instable,fusion,fission,chargé,physique','M'), // NEUTRON
W('physicien,gravité,lois,mouvement,pomme,calcul,mécanique,classique,isaac,scientifique,force,inertie,optique,mathématique,britannique','M'), // NEWTON
W('atome,proton,neutron,centre,nucléaire,coeur,dense,chargé,énergie,liaisons,uranium,fission,plutonium,radioactif,fort','M'), // NOYAU
W('mer,eau,salée,vague,profond,marin,pacifique,atlantique,bleu,vaste,courant,pression,abysses,sels,liquide','M'), // OCÉAN
W('physique,vibration,son,lumière,fréquence,oscillation,électromagnétique,longueur,amplitude,propagation,mer,sonore,radio,invisible,transversale','F'), // ONDE
W('biologie,corps,fonction,coeur,poumon,anatomique,vital,tissu,système,biologique,rein,foie,cerveau,estomac,intestin','M'), // ORGANE
W('élément,O,air,respiration,combustion,gaz,vital,respirer,atmosphère,oxydation,réactif,sang,électronégatif,H2O,essentiel','M'), // OXYGÈNE
W('atmosphère,O3,couche,protection,ultraviolet,stratosphère,trou,déplétion,bouclier,oxygène,solaire,CFC,écologique,fragile,climate','M'), // OZONE
W('science,matière,énergie,newton,einstein,quantique,mécanique,lois,théorique,force,mouvement,espace,temps,relativité,électromagnétisme','F'), // PHYSIQUE
W('astre,orbite,terre,mars,jupiter,solaire,système,sphère,astronomie,rotation,révolution,exoplanète,lune,gazeuse,rocheuse','F'), // PLANÈTE
W('état,matière,ionisé,électrique,étoile,quatrième,soleil,fusion,chargé,haute,température,ionisation,tube,néon,décharge','M'), // PLASMA
W('plante,grain,allergie,reproduction,fleur,printemps,abeille,pollinisation,jaune,poussière,graminée,pistil,transport,atmosphère,végétal','M'), // POLLEN
W('organe,respiration,air,oxygène,thorax,alvéoles,souffle,échanges,sang,diaphragme,gauche,droit,pneumonie,bronche,médecine','M'), // POUMON
W('physique,force,atmosphère,bar,pascal,atmosphérique,compression,mesure,fluide,barométrique,hydrostatique,surface,fond,mer,vapeur','F'), // PRESSION
W('particule,atome,charge,positive,noyau,subatomique,hydrogène,masse,number,nucléaire,élémentaire,positif,accélérateur,hadron,quark','M'), // PROTON
W('physique,quantique,énergie,planck,particule,discrète,photon,mécanique,onde,subatomique,incertitude,superposition,intrication,révolution,moderne','M'), // QUANTUM
W('plante,système,absorption,sol,eau,souterraine,ancrage,végétale,nutriments,réseau,ramification,profondeur,croissance,sève,tubercule','F'), // RACINE
W('lumière,ligne,soleil,laser,faisceau,radiation,électromagnétique,droit,optique,spectre,briller,ultraviolet,infrarouge,visible,source','M'), // RAYON
W('einstein,physique,espace,temps,e=mc²,courbure,générale,spéciale,gravité,lumière,masse,énergie,révolution,moderne,cosmologie','F'), // RELATIVITÉ
W('animal,écaille,serpent,lézard,crocodile,sang,froid,vertébré,ramper,oeuf,dinosaure,tortue,caméléon,gecko,venin','M'), // REPTILE
W('biologie,poumon,air,oxygène,inspiration,expiration,cellulaire,aérobie,vital,processus,sang,CO2,échange,alvéoles,rythme','F'), // RESPIRATION
W('espace,artificiel,orbite,communication,GPS,antenne,transmission,signal,lancement,technologie,ISS,météo,observation,terrestre,télécommunication','M'), // SATELLITE
W('terre,tremblement,magnitude,richter,tectonique,secousse,faille,ondes,sismique,destruction,épicentre,dommages,mesure,plaque,réplique','M'), // SÉISME
W('minéral,nacl,mer,cuisine,cristal,sodium,chlorure,assaisonnement,table,blanc,goût,conservation,soluble,osmose,marin','M'), // SEL
W('astre,étoile,système,solaire,lumière,chaleur,jaune,centre,photosphère,hélium,hydrogène,fusion,planète,vie,énergie','M'), // SOLEIL
W('chimie,liquide,dissoudre,concentration,solvant,mélange,aqueux,diluer,saturé,sel,sucre,ion,transparent,homogène,électrolyte','F'), // SOLUTION
W('lumière,couleur,arc-en-ciel,prisme,visible,électromagnétique,longueur,onde,fréquence,analyse,continu,raie,absorption,optique,spectrographe','M'), // SPECTRE
W('chaleur,degré,celsius,fahrenheit,thermomètre,chaud,froid,mesure,thermique,corps,ambiant,variation,échelle,physique,météo','F'), // TEMPÉRATURE
W('électricité,voltage,circuit,volt,potentiel,électrique,pression,différence,courant,résistance,batterie,transformateur,secteur,haute,mesure','F'), // TENSION
W('planète,monde,globe,géographie,sol,surface,orbite,atmosphère,écologie,vie,croûte,manteau,noyau,biosphère,rotation','F'), // TERRE
W('vague,géant,séisme,océan,destruction,raz-de-marée,côtier,dévastateur,japon,fond,marin,alerte,réfugier,submersion,terrible','M'), // TSUNAMI
W('élément,radioactif,U,nucléaire,enrichi,lourd,atomique,fission,réacteur,désintégration,mine,plutonium,bombe,énergie,centrale','M'), // URANIUM
W('médecine,injection,immunité,prévention,virus,inoculation,dose,immunisation,anticorps,maladie,protection,pasteur,jenner,polio,grippe','M'), // VACCIN
W('état,matière,eau,gaz,évaporation,condensation,brume,fumée,locomotive,pression,thermique,nuage,chaleur,transformation,altitude','F'), // VAPEUR
W('plante,flore,chlorophylle,photosynthèse,vert,botanique,végétation,feuille,organisme,règne,racine,tige,arbre,herbacé,terrestre','M'), // VÉGÉTAL
W('physique,rapidité,mètre,seconde,km,vélocité,rapide,taux,accélération,lumière,son,déplacement,automobile,mesure,distance','F'), // VITESSE
W('micro-organisme,infection,grippe,covid,pathogène,viral,contagieux,particule,maladie,capside,ARN,ADN,mutation,immunité,épidémie','M'), // VIRUS
W('montagne,éruption,lave,magma,cratère,cendre,géologie,tectonique,feu,etna,vesuve,explosif,île,fumée,actif','M'), // VOLCAN
W('électricité,unité,tension,voltage,V,potentiel,mesure,circuit,électrique,différence,Alessandro,volta,batterie,conducteur,ampère','M'), // VOLT
W('électricité,puissance,unité,énergie,consommation,James,watt,moteur,ampoule,turbine,mesure,électrique,joule,kilowatt,rendement','M'), // WATT
W('élément,Xe,gaz,noble,rare,inerte,incolore,inodore,atomique,feux,phares,éclairage,scientifique,lampe,atmosphère','M'), // XÉNON
W('science,animal,faune,étude,biologie,classification,comportement,espèce,vertébré,invertébré,taxonomie,darwin,systématique,morphologie,adaptation','F'), // ZOOLOGIE
W('méthode,calcul,informatique,procédure,programmation,étape,processus,logique,computationnel,tri,recherche,intelligence,artificielle,efficace,résultat','M'), // ALGORITHME
W('géométrie,ligne,rotation,symétrie,coordonnée,pivot,central,référence,dimension,verticale,horizontale,orthogonal,plan,cartésien,repère','M'), // AXE
W('écologie,variété,espèces,écosystème,richesse,conservation,habitat,flore,faune,endémique,extinction,forêt,protection,biologie,vivant','F'), // BIODIVERSITÉ
W('écologie,environnement,climat,écosystème,habitat,communauté,terrestre,aquatique,zone,toundra,forêt,savane,désert,prairie,tropical','M'), // BIOME
W('animal,viande,prédateur,lion,tigre,chasseur,carnivore,dent,croc,régime,apical,chaine,alimentaire,chair,prédation','M'), // CARNIVORE
W('écologie,alimentaire,énergie,prédateur,proie,trophique,niveau,producteur,consommateur,décomposeur,réseau,flux,recyclage,biomasse,écosystème','F'), // CHAÎNE
W('géométrie,forme,circulaire,volcan,pin,conique,pointu,base,apex,surface,solide,triangle,révolution,calcul,glace','M'), // CÔNE
W('biologie,période,vie,eau,carbone,rotation,phase,récurrent,naturel,biogeochimique,azote,nutriment,saison,lunaire,solaire','M'), // CYCLE
W('biologie,bactérie,champignon,pourriture,recyclage,décomposeur,putréfaction,matière,organique,enzymes,microbe,asticot,nutriments,sol,recyclé','F'), // DÉCOMPOSITION
W('écologie,environnement,biome,habitat,interaction,communauté,équilibre,réseau,trophique,biotope,biocénose,sol,eau,faune,flore','M'), // ÉCOSYSTÈME
W('géologie,usure,vent,eau,temps,altération,dégradation,sédiment,naturel,surface,falaise,côte,canyon,fleuve,roche','F'), // ÉROSION
W('animal,plante,herbe,vache,mouton,brouteur,végétarien,dents,digestion,ruminant,lapin,cheval,cerf,régime,prairie','M'), // HERBIVORE
W('biologie,animal,oiseau,déplacement,saison,voyage,instinct,saisonnier,trajectoire,hiver,été,groupe,navigation,distance,retour','F'), // MIGRATION
W('écologie,habitat,rôle,espèce,fonction,position,adaptation,spécialisation,écologique,ressource,unique,concurrence,cohabitation,spécifique,vivant','F'), // NICHE
W('animal,varié,ours,cochon,humain,tout,mange,diversifié,régime,flexible,végétal,opportuniste,dentition,adaptation,généreux','M'), // OMNIVORE
W('plante,lumière,chlorophylle,oxygène,CO2,glucose,énergie,verte,production,feuille,chloroplaste,eau,carbone,assimilation,vie','F'), // PHOTOSYNTHÈSE
W('plante,insecte,abeille,pollen,reproduction,pollinisateur,fécondation,fleur,transfert,nectar,papillon,vent,pistil,étamine,biodiversité','F'), // POLLINISATION
W('animal,chasse,carnivore,lion,aigle,chasseur,apical,sommet,chaîne,proie,dominant,prédation,force,territoire,survie','M'), // PRÉDATEUR
W('animal,chasse,victime,gazelle,lapin,fuir,chassé,prédateur,cible,nourriture,vulnérable,camouflage,alarme,survie,défense','F'), // PROIES
W('environnement,déchet,réutilisation,papier,plastique,circulaire,durabilité,collecte,tri,valorisation,économie,énergie,vert,responsable,transformation','M'), // RECYCLAGE
W('géologie,roche,dépôt,couche,érosion,alluvion,sédimentaire,particule,sol,accumulation,fleuve,delta,stratigraphie,fossile,compaction','M'), // SÉDIMENT
W('terre,terreau,agriculture,humus,fertile,cultivé,minéral,nutriment,micro-organisme,couche,surface,limon,argile,sable,horizon','M'), // SOL
W('écologie,changement,communauté,étapes,évolution,progression,développement,primaire,secondaire,climax,biome,colonisation,végétation,transition,naturel','F'), // SUCCESSION
W('biologie,mutualisme,relation,bénéfice,lichen,champignon,algue,réciprocité,coopération,microbiote,bactérie,santé,association,obligatoire,facultatif','F'), // SYMBIOSE
W('géographie,région,climat,tempéré,tropique,arctique,intertropicale,latitude,délimitation,espace,maritime,côtière,économique,frontière,délimitée','F'), // ZONE
  ],

  '⚽ Sports & Loisirs': [
W('sport,sifflet,règle,match,football,décision,carton,impartial,officiel,justice,contrôle,faute,rouge,jaune,litige','M'), // ARBITRE
W('course,piste,sprint,100m,marathon,olympique,record,médaille,vitesse,sauter,lancer,saut,haies,relais,stade','M'), // ATHLÉTISME
W('raquette,volant,filet,smash,court,asie,rapide,double,shuttle,indoor,rally,tournoi,service,lift,rallye','M'), // BADMINTON
W('rond,football,basket,rugby,gonfler,cuir,kick,sphère,rebond,jeu,lancer,attraper,air,pression,sports','M'), // BALLON
W('batte,base,homerun,mlb,lanceur,terrain,manche,strike,gant,yankees,stade,américain,diamond,inning,balle','M'), // BASEBALL
W('panier,NBA,dribble,jordan,tir,orange,cinq,anneau,terrain,dunk,rebond,basketball,meneur,pivot,aile','M'), // BASKET
W('table,queue,boule,huit,snooker,touche,poche,feutrine,craie,break,rack,visée,billard,carambole,billes','M'), // BILLARD
W('quilles,strike,spare,piste,boule,couloir,chaussures,gouttière,carreau,dix,rouler,toucher,marquage,boulodrome,pinsetter','M'), // BOWLING
W('gants,ring,ko,punch,round,poids,knockout,uppercut,jab,arbitre,coin,boxeur,titre,mondial,combat','F'), // BOXE
W('marquer,goal,score,football,rugby,hockey,filet,gagner,point,tirer,objectif,victoire,vainqueur,décisif,réussi','M'), // BUT
W('sport,eau,pagaie,rivière,kayak,paddle,water,river,boat,rapids,navigate,upstream,expedition,canadian,vessel','M'), // CANO
W('lutte,spectacle,wwe,ring,lutteur,entertainment,show,masqué,combat,prise,slam,championnat,théâtral,smackdown,costumes','M'), // CATCH
W('gagnant,premier,médaille,titre,coupe,vainqueur,meilleur,triomphe,record,victoire,or,défense,couronné,consacré,élu','M'), // CHAMPION
W('temps,course,mesure,précision,stopwatch,secondes,chrono,digital,tour,record,décisif,compétition,bouton,piste,résultat','M'), // CHRONOMÈTRE
W('vélo,tour,france,pédales,roue,route,casque,maillot,sprint,ascension,étape,coureur,équipe,montagne,contre-la-montre','M'), // CYCLISME
W('jeu,plateau,pion,diagonal,damier,saut,noir,blanc,capture,adversaire,dames,stratégie,coin,promotion,reine','F'), // DAME
W('course,cheval,hippodrome,jockey,galop,piste,pari,gazon,classique,équestre,pur-sang,étape,victoire,racing,plat','M'), // DERBY
W('lancer,athlétisme,javelot,poids,champ,olympique,tournoyer,trajectoire,distance,athletics,field,spinning,force,technique,cercle','M'), // DISQUE
W('basket,contrôle,ballon,manœuvre,handle,rebond,crossover,habile,mouvement,feinte,court,football,pied,technique,avancer','M'), // DRIBBLE
W('basket,smash,panier,spectacle,saut,puissant,foule,athletique,highlight,NBA,anneau,aérien,volcanique,plonger,acrobatique','M'), // DUNK
W('jeu,stratégie,roi,dame,échec,mat,tour,fou,cavalier,pion,échiquier,tactique,partie,grand,maître','M'), // ÉCHECS
W('épée,fleuret,sabre,touche,masque,piste,duel,parer,attaque,retraite,riposte,botte,tierce,quarte,position','F'), // ESCRIME
W('texte,littéraire,réflexion,prose,analytique,argument,philosophique,critique,académique,montaigne,opinion,argumentation,pensée,formel,raisonné','M'), // ESSAI
W('exercice,gym,musculation,santé,entraînement,cardio,bodybuilding,aérobie,force,bien-être,routine,nutrition,corps,endurance,style','M'), // FITNESS
W('cible,dard,précision,pub,bullseye,tableau,lancer,flèche,double,triple,180,score,toucher,distance,jeu','F'), // FLÉCHETTES
W('ballon,équipe,goal,coupe,monde,pitch,FIFA,match,stade,joueur,buteur,gardien,pied,règle,club','M'), // FOOTBALL
W('faute,violation,règle,pénalité,arbitre,sifflet,carton,illégal,infraction,basket,contact,joueur,sanctionner,tir,libre','M'), // FOUL
W('club,balle,green,trou,swing,putt,caddy,fairway,birdie,bogey,parcours,handicap,18,bois,fer','M'), // GOLF
W('souplesse,acrobatie,poutre,agrès,flexible,saut,rotation,sol,barre,cheval,artistic,rythme,olympique,note,élégance','F'), // GYMNASTIQUE
W('poids,force,musculation,barre,arracher,épaulé-jeté,olympique,lourd,performance,compétition,soulever,plateau,kilos,bras,épaule','F'), // HALTÉROPHILIE
W('équipe,ballon,but,sept,terrain,lanceur,gardien,européen,rapide,pivot,aile,défense,attaque,tir,rebond','M'), // HANDBALL
W('glace,palet,crosse,NHL,patinoire,équipe,gardien,tir,but,hors-jeu,face-off,rondelle,puissance,dépasser,mise-en-jeu','M'), // HOCKEY
W('martial,japonais,kimono,ceinture,ippon,lancer,projection,tatami,dojo,combat,olympique,grade,souplesse,déséquilibre,kodokan','M'), // JUDO
W('martial,japonais,coup,pied,poing,kata,dojo,ceinture,frapper,blocage,discipline,autodéfense,olympique,kihon,kumite','M'), // KARATÉ
W('eau,pagaie,rivière,eskimo,rapide,bateau,manœuvre,roll,whitewater,pagayer,aviron,embarcation,sportif,navigation,descente','M'), // KAYAK
W('boxe,knockout,combat,victoire,coup,technique,TKO,décisif,finish,arbitre,blessure,soigner,compter,direct,massue','M'), // KO
W('athlétisme,javelot,poids,disque,marteau,champ,distance,olympique,technique,propulser,élan,touche,précision,force,trajectoire','M'), // LANCER
W('course,42km,endurance,olympique,courir,résistance,distance,26,miles,runner,stamina,Athens,finish,bib,ravitaillement','M'), // MARATHON
W('compétition,équipe,jeu,rencontre,adversaire,terrain,résultat,score,victoire,défaite,mi-temps,arbitre,duel,enjeu,fixture','M'), // MATCH
W('or,argent,bronze,podium,cérémonie,olympique,récompense,honneur,classement,gagnant,distinction,performance,fierté,gagner,reconnaissance','F'), // MÉDAILLE
W('piscine,crawl,brasse,papillon,dos,nager,compétition,bassin,temps,couloir,aquatique,plongeon,eau,olympique,chrono','F'), // NATATION
W('basket,américain,ligue,professionnel,championnat,playoffs,superstar,arène,slam,dunk,Jordan,LeBron,draft,franchise,trophée','F'), // NBA
W('jeux,médaille,torche,cinq,anneaux,athlète,international,cérémonie,or,national,compétition,quatre,ans,nations,stade','M'), // OLYMPIQUE
W('football,faute,coup,franc,gardien,tirer,marquer,spot,penalty,duel,stressant,séance,final,panenka,décisif','M'), // PENALTY
W('boules,terrain,cochonnet,provence,métal,lancer,pointeur,tireur,milieu,piste,jeu,français,pelouse,estivale,convivial','F'), // PÉTANQUE
W('table,tennis,raquette,smash,spin,service,rally,forehand,backhand,rapide,balle,légère,rebond,indoor,pongiste','M'), // PING-PONG
W('cartes,mise,bluff,jetons,texas,holdem,main,donneur,coucher,tapis,pair,relance,all-in,stratégie,casino','M'), // POKER
W('cheval,maillet,équestre,cavalier,équipe,terrain,goal,water,sport,noble,manche,arbitre,gallop,luxe,Argentine','M'), // POLO
W('eau,rapides,bateau,aventure,raft,rivière,pagayer,extrême,palpitant,canyon,Colorado,descente,équipe,gilet,casque','M'), // RAFTING
W('course,automobile,voiture,vitesse,navigation,off-road,étape,championnat,pilote,copilote,terrain,boue,compétition,chronométré,spéciale','M'), // RALLYE
W('tennis,badminton,cordage,manche,frappe,cadre,tête,sport,coup,droit,revers,volée,smash,fibre,graphite','F'), // RAQUETTE
W('meilleur,temps,performance,mondial,chrono,battre,établir,certifié,guinness,athlète,history,fastest,holder,marque,dépassé','M'), // RECORD
W('ballon,ovale,essai,mêlée,plaquage,conversion,avants,arrières,ligne,but,touche,hors-jeu,ruck,maul,scrum','M'), // RUGBY
W('bond,hauteur,longueur,perche,tremplin,triple,olympique,plongeon,chute,acrobatie,impulsion,réception,barre,vertical,athlétisme','M'), // SAUT
W('neige,montagne,piste,slalom,descente,remonte-pente,casque,bâtons,station,alpine,combiné,super-G,freestyle,olympique,vitesse','M'), // SKI
W('neige,planche,half-pipe,trick,freestyle,montagne,ride,shred,carving,snowpark,figure,saut,glisse,olympique,style','M'), // SNOWBOARD
W('football,américain,FIFA,ballon,coupe,monde,pitch,attaquant,gardien,ligue,match,règle,tir,passe,club','M'), // SOCCER
W('raquette,court,mur,balle,enclosed,rally,fitness,indoor,rapide,contre,paroi,service,hauteur,drop,boîte','M'), // SQUASH
W('vague,planche,océan,plage,barreling,ride,paddle,swell,compétition,Hawaii,table,longboard,shortboard,tube,glisse','M'), // SURF
W('martial,coréen,pied,combat,ceinture,olympique,formes,sparring,discipline,coups,arts,jambe,dobok,pointe,fédération','M'), // TAEKWONDO
W('raquette,court,service,wimbledon,baseline,forehand,volée,grand,chelem,deuce,avantage,ace,tie-break,fond,relance','M'), // TENNIS
W('cible,précision,arc,tir,archerie,bullseye,fusil,pistolet,arme,plombs,olympique,marksman,distance,viseur,carabine','M'), // TIR
W('compétition,championnat,coupe,tableau,knockout,fixture,tirage,trophée,playoff,tour,bracket,tenant,titre,victoire,récompense','M'), // TOURNOI
W('acrobatie,rebond,saut,gymnaste,flip,tricks,springboard,tumbling,aérien,rebondir,olympique,hauteur,freestyle,figure,indoor','M'), // TRAMPOLINE
W('natation,vélo,course,ironman,endurance,multisport,transition,athlète,stamina,three,sports,distance,sprint,olympique,complet','M'), // TRIATHLON
W('cheval,course,hippique,sulky,attelé,harnais,trotteur,conducteur,piste,allure,rênes,vitesse,hippodrome,parier,vincennes','M'), // TROT
W('volley-ball,équipe,filet,smash,service,spike,set,dig,rotation,court,beach,libero,ace,manchette,position','M'), // VOLLEY
W('tennis,tournoi,anglais,gazon,court,prestigieux,championnat,grand,chelem,britannique,blanc,cravate,fraises,crème,Federer','M'), // WIMBLEDON
W('zen,méditation,posture,souplesse,paix,respiration,asana,relaxation,pleine,conscience,corps,namaste,karma,équilibre,sérénité','M'), // YOGA
W('tennis,service,point,gagnant,irretournable,puissant,direct,scorer,tir,première,seconde,ligne,winner,imprimable,filet','M'), // ACE
W('football,attaque,ailier,latéral,flanc,position,avant,offensif,large,touche,dribble,centrer,course,débordement,côté','F'), // AILE
W('match,double,sens,aller,retour,fixture,domicile,extérieur,premier,second,jambe,résultat,cumul,critère,buts','M'), // ALLER-RETOUR
W('montagne,escalade,sommet,corde,ascension,rocher,grimpe,altitude,crampons,piolet,glacier,cordée,alpiniste,bivouac,voie','M'), // ALPINISME
W('sport,jugement,officiel,décision,impartial,sifflet,carton,règle,litige,concilier,contrôle,assistants,VAR,video,équité','M'), // ARBITRAGE
W('gardien,bloquer,sauver,défense,stop,attraper,déflexion,plongeant,réflexe,gardiennage,parade,dernier,recours,tir,keeper','M'), // ARRÊT
W('offensive,assaut,avant,scorer,agressif,pression,but,pousser,marquage,combinaison,rapide,contre,pressing,stratégie,football','F'), // ATTAQUE
W('football,position,attaquant,striker,offensif,premier,but,avant-centre,gauche,droit,ligne,attaque,marquer,finisseur,tête','M'), // AVANT
W('gymnastics,flip,arrière,acrobatie,culbute,rotation,aérien,tumbling,trick,inversé,sol,trampoline,saut,spectaculaire,gymnaste','M'), // BACKFLIP
W('golf,oiseau,score,sous,par,trou,réussi,performance,bon,résultat,card,marquage,félicitation,green,club','M'), // BIRDIE
W('escalade,rocher,mur,prise,grip,voie,indoor,outdoor,problème,bouldering,main,pied,difficulté,salle,hauteur','M'), // BLOC
W('tennis,jeu,service,pression,rupture,set,tiebreak,avantage,momentum,changer,adversaire,relâche,pause,intervalle,changeover','M'), // BREAK
W('football,attaquant,scorer,marquer,but,avant,tir,finisseur,offensif,classement,bomber,tueur,zone,pied,tête','M'), // BUTEUR
W('sport,milieu,terrain,position,pivot,meneur,playmaker,relais,défensif,offensif,distribution,collecteur,basculer,joueur,créatif','M'), // CENTRE
W('automobile,piste,tour,course,formule,boucle,ovale,virage,tracé,asphalte,ligne,droite,chicane,circuit,grand','M'), // CIRCUIT
W('rang,position,tableau,standings,ligue,ladder,hiérarchie,ordre,placement,points,leader,première,tête,dernière,classé','M'), // CLASSEMENT
W('entraîneur,équipe,tactique,manager,instructeur,guide,stratégie,mentor,directeur,sportif,leader,préparateur,physique,banc,sélection','M'), // COACH
W('football,angle,coup,franc,drapeau,arc,centre,attaque,set,piece,calcio,d'angolo,tirer,envoi,débordement','M'), // CORNER
W('frappe,tir,shoot,coup,direct,swing,impact,puissant,livrer,lancer,frapper,attaque,fort,décisif,exécution','M'), // COUP
W('marathon,compétition,vitesse,piste,running,sprint,track,runner,distance,chasse,finish,départ,arrivée,classement,dossard','F'), // COURSE
W('protection,arrière,défenseur,back,bloquer,couvrir,plaquage,zone,marquage,interception,stop,rempart,barrage,mur,résistance','F'), // DÉFENSE
W('ski,pente,bas,vitesse,alpine,montagne,rapide,slalom,super-G,course,risque,neige,vent,combiné,pointe','F'), // DESCENTE
W('tennis,deux,joueurs,paire,partenariat,équipe,match,mixte,hommes,femmes,servir,smash,coordination,complicité,titre','M'), // DOUBLE
W('golf,coup,distance,long,carry,fairway,driver,puissant,lancer,départ,tee,bois,force,précision,trajectoire','M'), // DRIVE
W('stamina,résistance,longue,marathon,persévérance,fortitude,force,tenir,effort,durée,cardiovasculaire,mental,corps,entraînement,limite','F'), // ENDURANCE
W('groupe,joueurs,ensemble,collectif,squad,sélection,effectif,composition,club,alliance,vestiaire,cohésion,esprit,coopération,uniforme','F'), // ÉQUIPE
W('entraînement,activité,gym,physique,training,drill,routine,pratique,fitness,répétition,série,cardio,musculation,étirement,warm-up','M'), // EXERCICE
W('étirement,souplesse,muscle,allonger,stretch,assouplissement,limber,warm,up,étendre,atteindre,amplitude,range,motion,flexible','F'), // EXTENSION
W('hockey,mise,jeu,palet,drop,départ,centre,glace,confrontation,draw,début,bully,puck,rondelle,adversaire','M'), // FACE-OFF
W('infraction,règle,pénalité,violation,arbitre,sifflet,carton,illégal,déduction,contact,balle,sanction,personnel,technique,sportivité','F'), // FAUTE
W('tennis,volleyball,net,mesh,frontière,volée,passer,point,smash,servir,diviser,central,hauteur,bande,obstacle','M'), // FILET
W('dernière,manche,ultime,championnat,décisive,conclusion,confrontation,climax,gagnant,perdant,titre,trophée,victoire,récompense,showdown','F'), // FINALE
W('tir,coup,kick,shoot,frapper,impact,puissant,balle,diriger,pied,poignet,volée,précis,cadré,spectaculaire','F'), // FRAPPE
W('libre,style,improvisation,acrobatie,trick,créatif,spontané,skateboard,BMX,motoneige,ski,half-pipe,expression,urbain,compétition','M'), // FREESTYLE
W('victoire,gagner,récompense,bénéfice,profit,triomphe,résultat,acquisition,avantage,réussite,succès,point,score,positif,mérite','M'), // GAIN
W('but,protecteur,keeper,goal,filet,sauver,bloquer,plonger,arrêt,défense,dernier,rempart,gants,cage,gardiennage','M'), // GARDIEN
W('but,score,marquer,objectif,filet,football,soccer,hockey,basket,gardien,tirer,tir,réussir,décisif,victoire','M'), // GOAL
W('escalade,montée,ascension,rocher,mur,traction,prise,cordée,hauteur,alpinisme,grimpeur,force,technique,indoor,outdoor','F'), // GRIMPE
W('prise,main,adhérence,raquette,manche,tenir,secure,tennis,club,saisir,ferme,résistance,anti-dérapant,friction,contrôle','M'), // GRIP
W('terrain,sol,baseball,field,fond,surface,pitch,diamond,dirt,grass,toucher,line,ball,jeu,balle','M'), // GROUND
W('hockey,trois,buts,tour,chapeau,feat,successive,match,rare,réalisé,triplicé,foot,cricket,prouesse,marquer','M'), // HAT-TRICK
W('talon,arrière,pied,kick,football,soccer,boot,chaussure,derrière,revers,retourné,inattendu,technique,spectaculaire,retro','M'), // HEEL
W('baseball,circuit,complet,clôture,quatre,bases,grand,chelem,frapper,homerun,batteur,stade,domicile,lanceur,balle','M'), // HOME-RUN
W('football,offside,ligne,position,avancée,arbitre,assistant,drapeau,VAR,attaquant,illégal,défenseur,passe,dernière,règle','M'), // HORS-JEU
W('football,américain,défense,attraper,passe,adversaire,rebondissement,volé,turnover,steal,défensif,pick,corner,retour,touchdown','F'), // INTERCEPTION
W('basketball,dunk,bloquer,panier,slam,stuff,puissant,cerceau,spectacular,anneau,lancer,exploit,sauter,bras,force','M'), // JAM
  ],
};

const ALL_THEME_KEYS = Object.keys(THEMES_DATA);

const THEME_WORDS = {
  "🌍 Géographie": ['AMAZONIE', 'ANDES', 'ANTARCTIQUE', 'ARCTIQUE', 'AUSTRALIE', 'BERLIN', 'BRÉSIL', 'CANADA', 'CAP', 'CARA', 'CASABLANCA', 'CHINE', 'COLORADO', 'CONGO', 'CORÉE', 'DANUBE', 'DÉSERT', 'ÉGYPTE', 'ÉQUATEUR', 'EVEREST', 'FJORD', 'FLORENCE', 'FRANCE', 'GANGE', 'GROENLAND', 'HIMALAYA', 'INDE', 'IRLANDE', 'ISTANBUL', 'JAPON', 'KILIMANDJARO', 'KREMLIN', 'LAC', 'LIBAN', 'LISBONNE', 'LOIRE', 'MADAGASCAR', 'MALAISIE', 'MANILLE', 'MAROC', 'MÉDITERRANÉE', 'MEXIQUE', 'MONGOLIE', 'MOSCOU', 'NIL', 'NORVÈGE', 'NOUVELLE-ZÉLANDE', 'OCÉAN', 'OURAL', 'PANAMA', 'PARIS', 'PÉROU', 'PHILIPPINES', 'PÔLE', 'PORTUGAL', 'PRAGUE', 'PYONGYANG', 'QUEENSLAND', 'QUITO', 'RHIN', 'ROME', 'RUSSIE', 'SAHARA', 'SEINE', 'SÉOUL', 'SHANGHAI', 'SIBÉRIE', 'SINGAPOUR', 'SYDNEY', 'TASMANIE', 'TCHAD', 'TOKYO', 'TORONTO', 'TURQUIE', 'VATICAN', 'VIENNE', 'VOLGA', 'YELLOWSTONE', 'ZAMBÈZE', 'ZANZIBAR', 'ZIMBABWE', 'ARCHIPEL', 'ATOLL', 'CORDILLÈRE', 'DELTA', 'GOLFE', 'HÉMISPHÈRE', 'LATITUDE', 'LONGITUDE', 'MÉRIDIEN', 'PARALLÈLE', 'PÉNINSULE', 'PLATEAU', 'RÉCIF', 'STEPPE', 'TROPIQUE', 'VOLCAN'],
  "🎬 Divertissement": ['ACTEUR', 'ACTRICE', 'ALBUM', 'ANIMATION', 'BATMAN', 'BLOCKBUSTER', 'CANNES', 'CARTOON', 'CINÉMA', 'CLIP', 'COMÉDIE', 'CONCERT', 'DISNEY', 'DOLBY', 'ÉPISODE', 'FESTIVAL', 'FILM', 'FREDDIE', 'GRAMMY', 'HOLLYWOOD', 'HUMOUR', 'JAMES', 'JAZZ', 'MADONNA', 'MARVEL', 'MICHAEL', 'MUSIQUE', 'NETFLIX', 'NOBEL', 'OPÉRA', 'OSCAR', 'PARAMOUNT', 'POP', 'PREMIER', 'PRODUCTEUR', 'RAP', 'RÉALISATEUR', 'REMAKE', 'ROCK', 'ROLLING', 'SAGA', 'SCÉNARIO', 'SÉRIE', 'SITCOM', 'SONY', 'SPIELBERG', 'STAR', 'STREAMING', 'STUDIO', 'SUSPENSE', 'SYNDICATION', 'TÉLÉFILM', 'THRILLER', 'TIKTOK', 'TRAILER', 'TÉLÉVISION', 'UNIVERSAL', 'VARIÉTÉ', 'VEDETTE', 'VHS', 'VIDÉO', 'WARNER', 'WESTERN', 'YOUTUBE'],
  "🏛️ Histoire": ['ANTIQUITÉ', 'ARMISTICE', 'ATOMIQUE', 'BERLIN', 'BONAPARTE', 'CÉSAR', 'CHARLEMAGNE', 'CHURCHILL', 'CIVILISATION', 'COLONIE', 'CROISADES', 'DÉCLARATION', 'DICTATURE', 'DYNASTIE', 'EMPIRE', 'ÈRE', 'EXPLORATION', 'FASCISME', 'FÉODALITÉ', 'GUERRE', 'GUILLOTINE', 'HITLER', 'HOLOCAUSTE', 'INDÉPENDANCE', 'INQUISITION', 'JULIUS', 'LOUIS', 'MAGNA', 'MOYEN-ÂGE', 'MURAILLE', 'NAPOLÉON', 'NAZISME', 'PHARAON', 'PESTE', 'PHÉNICIENS', 'PRÉHISTOIRE', 'PYRAMIDE', 'REINE', 'RENAISSANCE', 'RÉPUBLIQUE', 'RÉVOLUTION', 'ROME', 'SIÈGE', 'SIÈCLE', 'TRAITÉ', 'VERSAILLES', 'VIKING', 'WATERLOO', 'ABSOLUTISME', 'ALLIANCE', 'ARCHE', 'ASSAUT', 'BASTILLE', 'BATAILLE', 'BLOCUS', 'CAPITULATION', 'CENTURION', 'CHRONOLOGIE', 'CONFÉDÉRATION', 'CONQUÊTE', 'CONSUL', 'COURONNE', 'DÉCRET', 'DICTATEUR', 'EXIL', 'FAMINE', 'FLOTTE', 'FONDATION', 'FORTERESSE', 'FRONT', 'GÉNOCIDE', 'GLADIATEUR', 'GOTHIQUE', 'GRÈVE', 'HÉGÉMONIE', 'HIÉROGLYPHE', 'INVASION', 'LÉGION', 'MANIFESTE', 'MASSACRE', 'MÉDIÉVAL', 'MONARCHIE', 'OCCUPATION', 'PAPE', 'PARTITION', 'PLÈBE', 'POGROM', 'PROTECTORAT', 'PROVINCE', 'RÉBELLION', 'RESTAURATION', 'SACRE', 'SCHISME', 'SPHINX', 'SUFFRAGE', 'TEMPLE', 'TRÔNE', 'TYRAN', 'VASSAL', 'VICTOIRE'],
  "🎨 Arts & Littérature": ['ABSTRAIT', 'ARCHITECTURE', 'AUTEUR', 'BALZAC', 'BAROQUE', 'BEETHOVEN', 'BALLET', 'CAMUS', 'CARICATURE', 'CATHÉDRALE', 'CÉRAMIQUE', 'CHEF-D-ŒUVRE', 'CHOPIN', 'CLASSIQUE', 'COLLAGE', 'COMÉDIE', 'CONCERTO', 'CUBISME', 'DALI', 'DESSIN', 'DRAME', 'DYSTOPIE', 'ÉPOPÉE', 'ESQUISSE', 'EXPRESSIONNISME', 'FABLE', 'FANTAISIE', 'FRESQUE', 'GOETHE', 'GOTHIQUE', 'GRAVURE', 'HUGO', 'IMPRESSIONNISME', 'KAFKA', 'LA-FONTAINE', 'LÉGENDE', 'LÉONARD', 'LIVRE', 'LOUVRE', 'MANGA', 'MICHELANGELO', 'MONET', 'MOZART', 'MUSÉE', 'MYTHE', 'NOBEL', 'NOUVELLE', 'OPÉRA', 'ORCHESTRE', 'PASTEL', 'PEINTURE', 'PICASSO', 'POÉSIE', 'POÈTE', 'PORTRAIT', 'POSTMODERNE', 'PROUST', 'QUATUOR', 'RÉALISME', 'REMBRANDT', 'RENAISSANCE', 'ROMAN', 'ROMANTISME', 'SATIRE', 'SCULPTURE', 'SHAKESPEARE', 'SONATE', 'SONNET', 'SURRÉALISME', 'SYMPHONIE', 'TABLEAU', 'THÉÂTRE', 'TINTIN', 'TOILE', 'TRAGÉDIE', 'VAN-GOGH', 'VERDI', 'VERS', 'VINCI', 'VIOLON', 'VOLTAIRE', 'WAGNER', 'AQUARELLE', 'AUTOPORTRAIT', 'BESTSELLER', 'BIOGRAPHIE', 'CALLIGRAPHIE', 'CANON', 'CHORALE', 'COMPOSITION', 'CONTE', 'CRITIQUE', 'DÉCORS', 'DIALOGUE', 'ÉDITION', 'ESSAI', 'FARCE', 'GENRE', 'GOUACHE', 'GRAPHISME', 'HA', 'ICÔNE', 'ILLUSTRATION', 'INTRIGUE', 'JAZZ', 'LIBRETTO', 'MADRIGAL', 'MIME', 'MINIATURE', 'MONOLOGUE', 'MOTIF', 'NARRATEUR', 'ODE', 'OPÉRETTE', 'PERFORMANCE', 'PERSPECTIVE', 'PHILOSOPHIE', 'PROSE', 'QUATRAIN', 'RIME', 'SCÉNARIO', 'STROPHE', 'STYLE', 'TÉTRALOGIE', 'TRILOGIE', 'VAUDEVILLE'],
  "🔬 Sciences & Nature": ['ACIDE', 'ADN', 'AIMANT', 'ALGUE', 'AMPÈRE', 'ANIMAL', 'ATOME', 'BACTÉRIE', 'BIG-BANG', 'BIOLOGIE', 'CELLULE', 'CHIMIE', 'CHROMOSOME', 'CIRCUIT', 'CLIMAT', 'CŒUR', 'COMÈTE', 'CONSTANTE', 'CORPS', 'CRISTAL', 'DARWIN', 'DÉCIBEL', 'DIAMANT', 'DINOSAURE', 'ÉLECTRICITÉ', 'ÉLECTRON', 'ÉLÉMENT', 'ÉNERGIE', 'ENZYME', 'ESPÈCE', 'ÉTOILE', 'ÉVOLUTION', 'FISSION', 'FORCE', 'FOSSILE', 'FRICTION', 'FUSION', 'GALAXIE', 'GAZ', 'GÉNÉTIQUE', 'GRAVITÉ', 'HORMONE', 'HUBBLE', 'HYDROGÈNE', 'INSECTE', 'ION', 'ISOTOPE', 'KELVIN', 'LASER', 'LATITUDE', 'LUMIÈRE', 'MAGNÉTISME', 'MAMMIFÈRE', 'MASSE', 'MATIÈRE', 'MEMBRANE', 'MÉTAL', 'MÉTÉORE', 'MICROSCOPE', 'MOLÉCULE', 'MUTATION', 'NEUTRON', 'NEWTON', 'NOYAU', 'OCÉAN', 'ONDE', 'ORGANE', 'OXYGÈNE', 'OZONE', 'PHYSIQUE', 'PLANÈTE', 'PLASMA', 'POLLEN', 'POUMON', 'PRESSION', 'PROTON', 'QUANTUM', 'RACINE', 'RAYON', 'RELATIVITÉ', 'REPTILE', 'RESPIRATION', 'SATELLITE', 'SÉISME', 'SEL', 'SOLEIL', 'SOLUTION', 'SPECTRE', 'TEMPÉRATURE', 'TENSION', 'TERRE', 'TSUNAMI', 'URANIUM', 'VACCIN', 'VAPEUR', 'VÉGÉTAL', 'VITESSE', 'VIRUS', 'VOLCAN', 'VOLT', 'WATT', 'XÉNON', 'ZOOLOGIE', 'ALGORITHME', 'AXE', 'BIODIVERSITÉ', 'BIOME', 'CARNIVORE', 'CHAÎNE', 'CÔNE', 'CYCLE', 'DÉCOMPOSITION', 'ÉCOSYSTÈME', 'ÉROSION', 'HERBIVORE', 'MIGRATION', 'NICHE', 'OMNIVORE', 'PHOTOSYNTHÈSE', 'POLLINISATION', 'PRÉDATEUR', 'PROIES', 'RECYCLAGE', 'SÉDIMENT', 'SOL', 'SUCCESSION', 'SYMBIOSE', 'ZONE'],
  "⚽ Sports & Loisirs": ['ARBITRE', 'ATHLÉTISME', 'BADMINTON', 'BALLON', 'BASEBALL', 'BASKET', 'BILLARD', 'BOWLING', 'BOXE', 'BUT', 'CANO', 'CATCH', 'CHAMPION', 'CHRONOMÈTRE', 'CYCLISME', 'DAME', 'DERBY', 'DISQUE', 'DRIBBLE', 'DUNK', 'ÉCHECS', 'ESCRIME', 'ESSAI', 'FITNESS', 'FLÉCHETTES', 'FOOTBALL', 'FOUL', 'GOLF', 'GYMNASTIQUE', 'HALTÉROPHILIE', 'HANDBALL', 'HOCKEY', 'JUDO', 'KARATÉ', 'KAYAK', 'KO', 'LANCER', 'MARATHON', 'MATCH', 'MÉDAILLE', 'NATATION', 'NBA', 'OLYMPIQUE', 'PENALTY', 'PÉTANQUE', 'PING-PONG', 'POKER', 'POLO', 'RAFTING', 'RALLYE', 'RAQUETTE', 'RECORD', 'RUGBY', 'SAUT', 'SKI', 'SNOWBOARD', 'SOCCER', 'SQUASH', 'SURF', 'TAEKWONDO', 'TENNIS', 'TIR', 'TOURNOI', 'TRAMPOLINE', 'TRIATHLON', 'TROT', 'VOLLEY', 'WIMBLEDON', 'YOGA', 'ACE', 'AILE', 'ALLER-RETOUR', 'ALPINISME', 'ARBITRAGE', 'ARRÊT', 'ATTAQUE', 'AVANT', 'BACKFLIP', 'BIRDIE', 'BLOC', 'BREAK', 'BUTEUR', 'CENTRE', 'CIRCUIT', 'CLASSEMENT', 'COACH', 'COUP', 'COURSE', 'DÉFENSE', 'DESCENTE', 'DOUBLE', 'DRIVE', 'ENDURANCE', 'ÉQUIPE', 'EXERCICE', 'EXTENSION', 'FACE-OFF', 'FAUTE', 'FILET', 'FINALE', 'FRAPPE', 'FREESTYLE', 'GAIN', 'GARDIEN', 'GOAL', 'GRIMPE', 'GRIP', 'GROUND', 'HAT-TRICK', 'HEEL', 'HOME-RUN', 'HORS-JEU', 'INTERCEPTION', 'JAM'],
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
  const remaining = assocs.filter(a =>
    !STATE.givenClues.includes(a) && !isClueInvalid(a, STATE.currentWordName)
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
  if (!STATE.givenClues) STATE.givenClues = [];
  STATE.givenClues.push(chosenAssoc);
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
  
  // ✅ CORRECTION v4: Marquer explicitement comme NON trouvé
  STATE.mancheResults.push({ 
    word: wordName, 
    found: false,  // ← Important pour le comptage final !
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
