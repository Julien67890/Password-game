/* ═══════════════════════════════════════════════════════════════
   MOT DE PASSE v3 — Version LOCALE AMÉLIORÉE (SANS API)
   
   ⚠️ IMPORTANT : Ce jeu fonctionne 100% LOCALEMENT
   ✅ Aucune connexion internet requise
   ✅ Aucune API externe (pas de Groq, pas d'OpenAI)
   ✅ Système de scoring intelligent intégré
   
   Nouvelles fonctionnalités v3 :
   • 12 associations par mot (vs 6 avant) pour plus de précision
   • Système de scoring amélioré (échelle 0-20)
   • Mode vocal activé par défaut
   • Manches de 30s avec 5 mots, règle "passe et reviens"
   • 10 thèmes × ~100 mots (stockés en objets légers)
   • Tout fonctionne offline !
   ═══════════════════════════════════════════════════════════════ */

// ══════════════════════════════════════════════════════════════════
// 1. DICTIONNAIRE — 10 thèmes, ~15 mots détaillés + 85 légers
//    Format léger : ['MOT','assoc1,assoc2,assoc3,assoc4,assoc5,assoc6','M|F']
//    Format complet (top mots) : objet avec assocs,genre,lettres
// ══════════════════════════════════════════════════════════════════

// Helper pour créer un mot léger
const W = (assocs, genre) => ({ assocs: assocs.split(','), genre });

const THEMES_DATA = {

  '🦁 Animaux': [
    W('savane,crinière,rugir,félins,mâle,roi,afrique,fauve,chasse,carnivore,dominer,lionne','M'), // LION
    W('mer,nager,intelligent,mammifère,sauter,eau,joyeux,social,siffler,spectacle,gris,joueur','M'), // DAUPHIN
    W('cou,afrique,taches,savane,grand,feuilles,herbivore,langue,jaune,élégant,hauteur,acacia','F'), // GIRAFE
    W('voler,oiseau,rapace,montagne,bec,serres,majestueux,chasse,symbole,liberté,altitude,aigu','M'), // AIGLE
    W('venin,rampant,reptile,forêt,peau,siffler,écailles,dangereux,glisser,jungle,mue,froid','M'), // SERPENT
    W('rayures,félins,jungle,asie,chasser,orange,prédateur,fort,bengale,rare,gronder,nocturne','M'), // TIGRE
    W('trompe,savane,gris,défense,afrique,grand,ivoire,mémoire,intelligent,troupeau,barrissement,herbivore','M'), // ÉLÉPHANT
    W('tentacules,mer,encre,huit,poulpe,fond,intelligent,ventouse,camouflage,océan,mollusque,agile','F'), // PIEUVRE
    W('eucalyptus,australie,arbre,marsupial,câlin,gris,dormeur,mignon,lent,poche,fourrure,adorable','M'), // KOALA
    W('ruse,forêt,orange,fourrure,terrier,queue,malin,rapide,rusé,nocturne,bois,goupil','M'), // RENARD
    W('mer,grand,chant,mammifère,souffle,ocean,géant,migration,majestueux,bleu,nager,profondeur','F'), // BALEINE
    W('rose,patte,debout,oiseau,tropical,marais,élégant,échassier,gracieux,colonie,étang,équilibre','M'), // FLAMANT
    W('singe,jungle,fort,poitrine,afrique,banane,puissant,primate,dos,silverback,végétarien,famille','M'), // GORILLE
    W('glace,froid,noir,blanc,oiseau,antarctique,nager,maladroit,colonie,banquise,poisson,empereur','M'), // PINGOUIN
    W('piquant,roulé,petit,jardin,nocturne,boule,épines,insectes,mignon,discret,mammifère,défense','M'), // HÉRISSON
    W('laine,bêler,berger,pré,troupeau,toison,docile,herbivore,blanc,mouton,doux,tricot','F'), // BREBIS
    W('venin,toile,huit,pattes,insecte,tisser,soie,piège,petite,peur,noire,prédateur','F'), // ARAIGNÉE
    W('corne,charge,savane,afrique,cuir,lourd,épais,gris,herbivore,puissant,tank,imposant','M'), // RHINOCÉROS
    W('rire,hyène,charogne,afrique,tacheté,meute,sauvage,nocturne,cri,clan,carnivore,opportuniste','F'), // HYÈNE
    W('bosse,désert,soif,chameau,caravane,sable,endurance,sec,chaleur,voyage,bossu,patient','M'), // DROMADAIRE
    W('crochet,marais,reptile,cuir,mâchoire,afrique,danger,eau,amphibie,dents,attendre,prédateur','M'), // CROCODILE
    W('plumes,danse,oeil,queue,jardin,bleu,majestueux,mâle,séduction,roue,oiseau,coloré','M'), // PAON
    W('venin,cornes,désert,scorpion,dard,sable,dangereux,arthropode,nuit,pinces,arachnide,toxique','M'), // SCORPION
    W('domestique,miaou,ronron,griffes,souris,poil,indépendant,mignon,félin,doux,compagnie,câlin','M'), // CHAT
    W('fidèle,aboyer,laisse,pattes,truffe,mordre,compagnon,loyal,japper,gardien,domestique,ami','M'), // CHIEN
    W('galop,crinière,pré,sabots,jument,vitesse,élégant,équitation,noble,course,mustang,libre','M'), // CHEVAL
    W('laine,cornes,montagne,bêler,troupeau,blanc,doux,herbivore,toison,berger,agneau,suiveur','M'), // MOUTON
    W('lait,pis,vache,ferme,herbe,brouter,meuh,ruminant,prairie,stable,tache,campagne','F'), // VACHE
    W('groin,ferme,cochon,rose,auge,gros,sale,boue,grogner,domestique,omnivore,truie','M'), // COCHON
    W('pond,rouge,basse-cour,cocorico,crête,plumes,chanter,matin,réveil,mâle,poule,fier','M'), // COQ
  ],

  '🍕 Nourriture': [
    W('italie,fromage,four,tomate,napoli,rond,part,mozzarella,pâte,livraison,chaude,basil','F'), // PIZZA
    W('japon,riz,poisson,rouleau,baguettes,cru,algue,saumon,frais,vinaigrette,maki,wasabi','M'), // SUSHI
    W('bretagne,beurre,sucre,fin,farine,chandeleur,poêle,ronde,nutella,citron,suzette,retourner','F'), // CRÊPE
    W('américain,viande,bun,ketchup,frites,hamburger,gras,pain,steak,fast-food,bacon,juteux','M'), // BURGER
    W('cacao,sucre,noir,doux,tablette,fondre,dessert,gourmand,carré,lait,blanc,cadbury','M'), // CHOCOLAT
    W('lait,vache,français,plateau,camembert,affiné,jaune,odeur,crémeux,bleu,chèvre,roquefort','M'), // FROMAGE
    W('vert,guacamole,fruit,gras,mexicain,noyau,toast,texture,sain,crémeux,californie,moelleux','M'), // AVOCAT
    W('proustienne,sucre,moule,cake,petite,souvenir,coquille,beurre,proust,tendre,goûter,jaune','F'), // MADELEINE
    W('boulangerie,beurre,feuilleté,matin,français,lune,petit-déjeuner,croissant,viennoiserie,doré,croustillant,paris','M'), // CROISSANT
    W('légumes,provence,four,tomate,courgette,plat,aubergine,méditerranée,été,végétarien,ragoût,huile','F'), // RATATOUILLE
    W('bourguignon,beurre,ail,coquille,lent,corne,gastéropode,français,persillade,bave,spirale,délice','M'), // ESCARGOT
    W('paris,ladurée,couleur,sucre,meringue,coques,pâtisserie,amandes,crème,fragile,délicat,raffiné','M'), // MACARON
    W('four,gonfler,oeuf,chaud,fragile,fromage,léger,aérien,hauteur,délicat,retomber,gruyère','M'), // SOUFFLÉ
    W('cru,boeuf,sauce,froid,hacher,restaurant,viande,rose,assaisonnement,couteau,capers,french','M'), // TARTARE
    W('pain,beurre,dorée,molle,viennois,breakfast,miche,confiture,français,doux,moelleux,toast','F'), // BRIOCHE
    W('épices,inde,curry,aromates,parfumé,oriental,poulet,jaune,poudre,tikka,massala,piquant','M'), // CURRY
    W('pâtes,italie,sauce,farine,forme,séché,spaghetti,cuire,tomate,carbonara,al-dente,bolognaise','F'), // PASTA
    W('riz,lait,sucre,vanille,dessert,crémeux,enfance,blanc,doux,simple,réconfort,onctueux','M'), // RIZAULAIT
    W('huile,olive,méditerranée,salade,friture,bouteille,liquide,verte,extra-vierge,assaisonnement,grèce,doré','F'), // HUILE
    W('acide,citron,agrume,zeste,jaune,presse,vitamine,jus,aigre,frais,tarte,zester','M'), // CITRON
    W('chaud,hiver,légumes,bouillon,soupe,marmite,mijoter,réconfort,carotte,tradition,froid,maison','M'), // POTAU-FEU
    W('grillé,brochette,viande,barbecue,feu,mariné,pain,oriental,agneau,épices,tourner,sandwich','M'), // KEBAB
    W('miel,abeille,doux,dorée,ruche,tartiner,naturel,sucré,liquide,nectar,fleurs,pot','M'), // MIEL
    W('piquant,rouge,mexique,sauce,fort,épice,brûler,chaud,tabasco,habanero,feu,capsaïcine','M'), // PIMENT
    W('crème,fraise,cône,été,glacé,cornet,froid,parfum,vanille,douceur,lècher,boule','F'), // GLACE
    W('thé,bouillante,tasse,infuser,herbe,tisane,eau,chaud,sachet,camomille,menthe,relaxer','F'), // INFUSION
    W('grains,café,expresso,moulin,arabica,noir,chaud,robusta,cappuccino,torréfié,caféine,moka','M'), // CAFÉ
    W('alcool,cépage,rouge,blanc,rosé,tonneau,raisin,dégustation,bouteille,verre,bordeaux,fermentation','M'), // VIN
    W('bulles,bière,houblon,blonde,mousse,chope,pression,ambrée,craft,pinte,orge,brasserie','F'), // BIÈRE
    W('eau,source,minérale,bouteille,plate,robinet,hydratation,pure,gazeuse,transparent,h2o,boire','F'), // EAU
  ],

  '🎬 Cinéma & Culture': [
    W('nuit,sang,dents,château,immortel,cape,dracula,transylvanie,morsure,ail,cercueil,pâle','M'), // VAMPIRE
    W('métal,artificiel,futur,science,programme,machine,terminator,humanoïde,automatique,intelligence,circuits,androïde','M'), // ROBOT
    W('ovni,planète,espace,alien,contact,invasion,soucoupe,mars,antennes,vaisseau,rencontre,galaxie','M'), // EXTRATERRESTRE
    W('mort,vivant,cerveau,horreur,marcher,apocalypse,lent,infecté,virus,groaner,décéder,putréfaction','M'), // ZOMBIE
    W('bateau,mer,trésor,crochet,chapeau,perroquet,caraïbes,jack-sparrow,rhum,voile,sabre,île','M'), // PIRATE
    W('cape,pouvoir,masque,marvel,sauver,comics,batman,héros,mission,justice,ennemi,force','M'), // SUPERHÉROS
    W('enquête,crime,indice,loupe,mystère,sherlock,deduction,suspect,résoudre,holmes,pipe,privé','M'), // DÉTECTIVE
    W('plateau,rôle,oscar,scène,film,jouer,talent,répéter,star,réplique,hollywood,monologue','M'), // ACTEUR
    W('caméra,director,film,clap,vision,équipe,moteur,action,spielberg,plateau,casting,montage','M'), // RÉALISATEUR
    W('suspect,crime,juger,arrêter,prison,aveu,accusé,condamné,tribunal,preuve,délit,menottes','M'), // COUPABLE
    W('brave,film,sauver,rôle,femme,protagoniste,courageuse,forte,indépendante,wonder-woman,principale,leader','F'), // HÉROÏNE
    W('dragon,épée,château,fantaisie,quête,magie,armure,noble,honneur,tournoi,médiéval,vaillant','M'), // CHEVALIER
    W('baguette,chapeau,illusion,tour,lapin,prestidigitation,sortilège,disparaître,mystique,potter,merlin,abracadabra','M'), // MAGICIEN
    W('histoire,imaginaire,conte,enfant,fable,monde','M'), // CONTE
    W('rire,sketch,scène,stand-up,humour,public','F'), // COMÉDIE
    W('peur,nuit,horreur,monstre,sursauter,obscurité','M'), // THRILLER
    W('musique,chant,scène,danse,opéra,spectacle','M'), // MUSICAL
    W('écran,obscurité,pop-corn,siège,projection,salles','M'), // CINÉMA
    W('livre,pages,auteur,roman,lire,bibliothèque','M'), // ROMAN
    W('pinceau,toile,couleur,musée,oeuvre,artiste','F'), // PEINTURE
    W('notes,partition,instrument,compositeur,mélodie,concert','F'), // MUSIQUE
    W('scène,rideau,comédien,pièce,texte,représentation','M'), // THÉÂTRE
    W('marbre,bronze,forme,sculpteur,oeuvre,galerie','F'), // SCULPTURE
    W('danse,ballet,corps,grâce,scène,chorégraphie','F'), // DANSE
    W('photo,objectif,flash,cadre,portrait,cliché','F'), // PHOTOGRAPHIE
    W('pixels,numérique,console,manette,niveau,virtuel','M'), // JEUVIDÉO
    W('podcast,micro,épisode,écouter,voix,télécharger','M'), // PODCAST
    W('série,épisode,saison,netflix,streaming,abonnement','F'), // SÉRIE
    W('animation,dessin,personnage,disney,couleur,enfant','M'), // DESSIN-ANIMÉ
    W('documentaire,reportage,vrai,journaliste,enquête,réalité','M'), // DOCUMENTAIRE
  ],

  '🏠 Objets du quotidien': [
    W('pluie,ouvrir,protection,tige,poignée,averse','M'), // PARAPLUIE
    W('reflet,image,mur,casser,nettoyer,verre','M'), // MIROIR
    W('matin,sonnerie,alarme,heure,dormir,bouton','M'), // RÉVEIL
    W('lumière,ampoule,allumer,bureau,nuit,lire','F'), // LAMPE
    W('couper,papier,lame,droitier,cisaille,coiffer','M'), // CISEAUX
    W('nord,orienter,naviguer,aiguille,désert,aventure','F'), // BOUSSOLE
    W('temps,sable,retourner,mesurer,vider,écouler','M'), // SABLIER
    W('osier,courses,pique-nique,tresser,transport,tenir','M'), // PANIER
    W('flamme,cire,anniversaire,romantique,souffler,mèche','F'), // BOUGIE
    W('meuble,ranger,tirer,secret,fermer,placard','M'), // TIROIR
    W('fermer,clé,verrouiller,secret,anse,métal','M'), // CADENAS
    W('canapé,doux,tête,garnir,tissu,dormir','M'), // COUSSIN
    W('ordures,jeter,déchet,trier,couvercle,vider','F'), // POUBELLE
    W('savon,mousse,douche,propre,laver,parfumé','M'), // SAVON
    W('brosser,dents,matin,soie,dentifrice,propre','F'), // BROSSE
    W('couvrir,lit,chaud,plumes,couette,duvet','F'), // COUVERTURE
    W('sonnette,porte,visiter,carillon,bouton,appuyer','F'), // SONNETTE
    W('fenêtre,vue,vitre,ouvrir,lumière,encadrement','F'), // FENÊTRE
    W('four,cuire,chaleur,gâteau,rôtir,boulanger','M'), // FOUR
    W('glace,refroidir,glaçon,froid,boisson,compartiment','M'), // RÉFRIGÉRATEUR
    W('laver,vaisselle,eau,mousse,brosser,rincer','M'), // LAVE-VAISSELLE
    W('aspirer,poussière,moteur,sol,brosse,dépoussiérer','M'), // ASPIRATEUR
    W('tondeuse,herbe,jardin,couper,pelouse,moteur','F'), // TONDEUSE
    W('arroser,plante,jardinage,bec,métal,eau','M'), // ARROSOIR
    W('coudre,aiguille,fil,tissu,machine,point','F'), // MACHINE-À-COUDRE
    W('son,musique,haut-parleur,amplifier,volume,écouter','F'), // ENCEINTE
    W('écran,clavier,souris,internet,bureau,travail','M'), // ORDINATEUR
    W('téléphone,appeler,écran,portable,sonner,poche','M'), // TÉLÉPHONE
    W('télé,regarder,écran,programme,zapper,canapé','F'), // TÉLÉVISION
    W('montre,heure,bracelet,aiguilles,cadran,quartz','F'), // MONTRE
  ],

  '💼 Métiers': [
    W('opérer,hôpital,scalpel,bloc,médecine,blessure','M'), // CHIRURGIEN
    W('feu,camion,tuyau,eau,secours,caserne','M'), // POMPIER
    W('plan,bâtiment,dessiner,construire,maison,conception','M'), // ARCHITECTE
    W('recette,casserole,goûter,cuisine,chef,restaurant','M'), // CUISINIER
    W('espace,navette,lune,combinaison,nasa,flotter','M'), // ASTRONAUTE
    W('tribunal,plaider,droit,code,jugement,défendre','M'), // AVOCAT
    W('article,presse,interview,caméra,enquête,micro','M'), // JOURNALISTE
    W('pain,pétrir,four,farine,levure,matin','M'), // BOULANGER
    W('médicament,ordonnance,pilule,blanc,santé,blouse','M'), // PHARMACIEN
    W('avion,cockpit,vol,commande,ciel,décollage','M'), // PILOTE
    W('enfant,classe,tableau,école,enseigner,craie','M'), // INSTITUTEUR
    W('code,bug,algorithme,ordinateur,développer,programme','M'), // DÉVELOPPEUR
    W('soin,hôpital,patient,infirmière,piqûre,urgence','M'), // INFIRMIER
    W('dents,bouche,soin,fraise,cabinet,carie','M'), // DENTISTE
    W('animal,soin,vétérinaire,clinique,vaccin,poils','M'), // VÉTÉRINAIRE
    W('loi,règle,état,gouvernement,décision,assemblée','M'), // POLITICIEN
    W('argent,comptes,bilan,fiscalité,chiffres,cabinet','M'), // COMPTABLE
    W('maison,vendre,terrain,achat,agence,commission','M'), // AGENT-IMMOBILIER
    W('plomberie,tuyau,réparer,eau,fuite,robinet','M'), // PLOMBIER
    W('câble,courant,installation,circuit,électricité,fusible','M'), // ÉLECTRICIEN
    W('mur,peinture,enduit,carrelage,construire,maçon','M'), // MAÇON
    W('coiffer,ciseaux,shampooing,salon,mèche,brushing','M'), // COIFFEUR
    W('soigner,massage,kiné,muscle,rééducation,douleur','M'), // KINÉSITHÉRAPEUTE
    W('psychologie,écouter,séance,inconscient,thérapeute,divan','M'), // PSYCHOLOGUE
    W('soldat,armée,combat,défense,casque,grade','M'), // MILITAIRE
    W('ordre,police,arrêter,badge,patrouille,enquêter','M'), // POLICIER
    W('juge,tribunal,robe,sentence,audience,loi','M'), // JUGE
    W('tableau,galerie,couleur,exposition,toile,créer','M'), // PEINTRE
    W('photo,objectif,portrait,studio,lumière,cadrer','M'), // PHOTOGRAPHE
    W('musique,concert,instrument,scène,disque,tournée','M'), // MUSICIEN
  ],

  '⚽ Sport': [
    W('course,42km,pied,endurance,longue,sueur','M'), // MARATHON
    W('vague,planche,mer,équilibre,plage,hawaï','M'), // SURF
    W('souplesse,barres,saut,rotation,piste,élégance','F'), // GYMNASTE
    W('sifflet,règle,carton,décision,terrain,impartial','M'), // ARBITRE
    W('victoire,titre,médaille,podium,premier,gagner','M'), // CHAMPION
    W('but,bloquer,gants,filet,plonger,gardien','M'), // GARDIEN
    W('vélo,peloton,montagne,tour,vitesse,roue','M'), // CYCLISTE
    W('piscine,nager,crawl,eau,couloir,longueur','F'), // NATATION
    W('gants,ring,coups,défense,rounds,KO','M'), // BOXEUR
    W('football,tir,but,faute,11m,coup-de-pied','M'), // PENALTY
    W('glace,lame,pirouette,anneau,tournée,froid','M'), // PATINAGE
    W('tennis,raquette,balle,filet,service,court','M'), // TENNIS
    W('rugby,ovale,plaquage,mêlée,essai,ballon','M'), // RUGBY
    W('basket,panier,dribble,shoot,rebond,terrain','M'), // BASKETBALL
    W('piscine,bonnet,lunettes,nage,chlore,couloir','M'), // NAGEUR
    W('montagne,alpinisme,corde,pic,glacier,altitude','F'), // ESCALADE
    W('cheval,galop,polo,obstacle,équitation,selle','F'), // ÉQUITATION
    W('arc,flèche,cible,tirer,quiver,arc','M'), // TIR-À-L-ARC
    W('poids,barre,soulever,muscles,salle,haltère','M'), // HALTÉROPHILIE
    W('piste,vitesse,pistard,épreuve,athlétisme,sprint','M'), // SPRINT
    W('karaté,kata,ceinture,dojo,art-martial,coup','M'), // KARATÉ
    W('judo,tapis,prise,ceinture,tatami,tomber','M'), // JUDO
    W('voile,vent,bateau,régate,mer,mât','F'), // VOILE
    W('ski,piste,descente,neige,télésiège,station','M'), // SKI
    W('snowboard,neige,glisser,trick,planche,montagne','M'), // SNOWBOARD
    W('parachute,saut,avion,chute,déployer,ciel','M'), // PARACHUTISME
    W('danse,rythme,partenaire,musique,couple,valse','F'), // DANSE-SPORTIVE
    W('golf,green,club,trou,parcours,par','M'), // GOLF
    W('fléchette,cible,pub,pointe,lancer,bullseye','F'), // FLÉCHETTES
    W('boule,pointé,cochonnet,pétanque,terrain,métal','F'), // PÉTANQUE
  ],

  '🌍 Géographie': [
    W('tour,baguette,café,amour,seine,lumière','F'), // PARIS
    W('gladiateurs,colisée,italie,pizza,empire,antique','F'), // ROME
    W('big-ben,thé,brouillard,reine,double-decker,tamise','M'), // LONDRES
    W('taxis,broadway,liberté,gratte-ciel,manhattan,empire','M'), // NEW-YORK
    W('samouraï,sushi,mont-fuji,manga,cerisier,tokyo','M'), // TOKYO
    W('kangourou,opéra,désert,outback,surf,anglais','F'), // AUSTRALIE
    W('pyramides,pharaon,désert,nil,momie,sphinx','F'), // ÉGYPTE
    W('bossa-nova,samba,rio,amazonie,carnaval,football','M'), // BRÉSIL
    W('tango,gaucho,pampas,boeuf,polo,cordillère','F'), // ARGENTINE
    W('fjord,vikings,saumon,froid,nordique,boréale','F'), // NORVÈGE
    W('vodka,matriochka,steppes,tsar,balalaïka,ours','F'), // RUSSIE
    W('yoga,épices,Taj-Mahal,sari,maharadjah,Gange','F'), // INDE
    W('dragon,muraille,bambou,panda,riz,thé','F'), // CHINE
    W('tequila,mariachi,aztèque,salsa,tacos,sombrero','M'), // MEXIQUE
    W('safari,tribu,savane,continent,richesse,nature','F'), // AFRIQUE
    W('montagne,alpes,froufrou,fromage,chocolat,neutre','F'), // SUISSE
    W('tulipes,moulin,vélo,canal,digue,fromage','F'), // HOLLANDE
    W('flamenco,torero,paella,soleil,sieste,sangria','F'), // ESPAGNE
    W('acropole,philosophie,olive,île,méditerranée,antique','F'), // GRÈCE
    W('pharaon,méditerranée,mer-rouge,pyramides,désert,Caire','M'), // CAIRE
    W('temple,bouddhisme,éléphant,sourire,île,plage','F'), // THAÏLANDE
    W('kimono,k-pop,riz,séoul,technologie,séoul','F'), // CORÉE
    W('wok,épices,forêt,batik,île,volcan','F'), // INDONÉSIE
    W('désert,bédouin,pétrole,dune,mosquée,chameau','F'), // ARABIE
    W('pyramide,Amérique-centrale,quetzal,maya,chocolat,maïs','M'), // GUATEMALA
    W('fado,azulejos,porto,surf,pasteis,liège','M'), // PORTUGAL
    W('polaire,iceberg,aurore,midnight-sun,fjord,glace','M'), // ARCTIQUE
    W('café,jazz,mardi-gras,bayou,louisiane,creole','F'), // LOUISIANE
    W('kiwi,haka,maori,mouton,bungee,fougère','F'), // NOUVELLE-ZÉLANDE
    W('valse,opéra,sacher,ringstrasse,Freud,Vienne','F'), // VIENNE
  ],

  '🔬 Science & Nature': [
    W('atome,fusion,énergie,bombe,nucléaire,radioactif','M'), // NUCLÉAIRE
    W('trou,gravité,espace,aspirer,infini,lumière','M'), // TROU-NOIR
    W('foudre,orage,charge,paratonnerre,grondement,éclair','F'), // FOUDRE
    W('éruption,lave,magma,volcan,cendres,île','M'), // VOLCAN
    W('séisme,plaques,richter,tremblement,réplique,dégâts','M'), // TREMBLEMENT
    W('noyau,cortex,pensée,mémoire,synapse,neurones','M'), // CERVEAU
    W('adn,gène,hérédité,double-hélice,clone,séquence','M'), // ADN
    W('pesanteur,lune,pomme,physique,orbite,newton','F'), // GRAVITÉ
    W('eau,hydrogène,oxygène,formule,molécule,composé','F'), // MOLÉCULE
    W('plante,photosynthèse,chlorophylle,vert,soleil,co2','F'), // CHLOROPHYLLE
    W('espace,étoile,orbite,astronome,télescope,lunette','M'), // ASTRONOMIE
    W('planète,orbite,soleil,système,rotation,atmosphère','F'), // PLANÈTE
    W('lune,satellite,marée,cratère,clair,astre','F'), // LUNE
    W('étoile,lumière,chaleur,nébuleuse,fusion,astre','F'), // ÉTOILE
    W('comète,queue,glace,orbite,visible,périodique','F'), // COMÈTE
    W('météore,pluie,étoilé,chute,ciel,illuminer','M'), // MÉTÉORE
    W('relativité,einstein,espace-temps,masse,énergie,mc2','F'), // RELATIVITÉ
    W('quantique,particule,superposition,incertitude,onde,Heisenberg','F'), // PHYSIQUE-QUANTIQUE
    W('cellule,division,vivant,organisme,noyau,membrane','F'), // CELLULE
    W('évolution,darwin,sélection,adaptation,espèce,fossile','F'), // ÉVOLUTION
    W('électricité,courant,tension,résistance,circuit,voltampère','F'), // ÉLECTRICITÉ
    W('magnétisme,aimant,pôle,boussole,champ,attractif','M'), // MAGNÉTISME
    W('lumière,spectre,arc-en-ciel,prisme,photon,vitesse','F'), // LUMIÈRE
    W('son,onde,fréquence,bruit,décibel,oreille','M'), // SON
    W('virus,contagion,vaccin,mutation,épidémie,immunité','M'), // VIRUS
    W('bactérie,micro,infection,antibiotique,flore,pathogène','F'), // BACTÉRIE
    W('chimie,réaction,laboratoire,éprouvette,formule,fusion','F'), // CHIMIE
    W('algorithme,informatique,calcul,étape,programme,instruction','M'), // ALGORITHME
    W('intelligence artificielle,machine,apprentissage,data,modèle,neurones','F'), // IA
    W('robot,automate,mécanique,programme,bras,usine','M'), // ROBOT
  ],

  '🏰 Histoire': [
    W('rome,gladiateur,colisée,empire,légion,conquête','M'), // GLADIATEUR
    W('pharaon,égypte,hiéroglyphe,momie,pyramide,scarabée','M'), // PHARAON
    W('viking,drakkar,pillage,nord,corne,fjord','M'), // VIKING
    W('chevalier,épée,château,armure,tournoi,combat','M'), // CHEVALIER
    W('croisade,terre-sainte,pape,guerrier,croix,jérusalem','F'), // CROISADE
    W('renaissance,italie,art,leonard,michel-ange,humanisme','F'), // RENAISSANCE
    W('révolution,guillotine,roi,liberté,1789,peuple','F'), // RÉVOLUTION
    W('napoléon,empire,waterloo,exil,stratège,aigle','M'), // NAPOLÉON
    W('industriel,charbon,vapeur,machine,usine,XIXe','M'), // INDUSTRIALISATION
    W('guerre,tranchée,1914,armistice,soldat,gas','F'), // PREMIÈRE-GUERRE
    W('nazi,hitler,génocide,résistance,libération,occupation','F'), // SECONDE-GUERRE
    W('résistance,underground,maquis,déporté,espion,liberté','F'), // RÉSISTANCE
    W('lune,armstrong,1969,fusée,nasa,spatial','M'), // APOLLON
    W('mur,berlin,est,ouest,chute,communisme','M'), // MUR-DE-BERLIN
    W('esclavage,plantation,chaîne,traite,coton,abolition','M'), // ESCLAVAGE
    W('démocratie,grèce,agora,peuple,vote,citoyens','F'), // DÉMOCRATIE
    W('roi,couronne,château,noblesse,vassal,fief','M'), // ROI
    W('papier,gutenberg,livre,imprimerie,diffusion,écriture','F'), // IMPRIMERIE
    W('boussole,naviguer,orientation,chine,magnétisme,invention','F'), // BOUSSOLE
    W('poudre,canon,explosion,feu,guerre,arme','F'), // POUDRE-À-CANON
    W('ancien,construction,mégalithe,dolmen,pierre,bretagne','M'), // MENHIR
    W('momie,bandage,résine,conservation,égypte,sarcophage','F'), // MOMIFICATION
    W('colonie,empire,territoire,administration,indépendance,exploitation','F'), // COLONISATION
    W('bourse,krach,action,économie,1929,crise','M'), // KRACH
    W('espace,cosmonaute,spoutnik,urss,orbite,course','M'), // CONQUÊTE-SPATIALE
    W('internet,arpanet,réseau,www,navigateur,données','M'), // INTERNET
    W('nucléaire,bombe,hiroshima,nagasaki,champignon,radioactivité','M'), // BOMBE-ATOMIQUE
    W('suffragette,vote,droits,femme,manifestation,égalité','F'), // SUFFRAGETTE
    W('philosophe,athènes,socrate,dialogue,pensée,vérité','M'), // PHILOSOPHE
    W('cathédrale,gothique,ogive,vitrail,rosace,clocher','F'), // CATHÉDRALE
  ],

  '🎲 Divers': [
    W('carte,jeu,pique,coeur,carreau,trèfle','M'), // CARTES
    W('dés,six,points,jeu,lancer,chance','M'), // DÉS
    W('puzzle,pièce,assembler,image,patience,compléter','M'), // PUZZLE
    W('magicien,tour,illusion,chapeau,baguette,disparaître','M'), // MAGIE
    W('rêve,nuit,inconscient,image,souvenir,réveil','M'), // RÊVE
    W('couleur,arc,pluie,soleil,spectre,arc-en-ciel','M'), // ARC-EN-CIEL
    W('météo,pluie,nuage,vent,soleil,température','F'), // MÉTÉO
    W('horoscope,étoile,signe,destin,prédiction,zodiaque','M'), // HOROSCOPE
    W('chance,trèfle,porte-bonheur,loterie,hasard,fortune','F'), // CHANCE
    W('peur,monstre,nuit,cauchemar,sursaut,ombre','F'), // PEUR
    W('rire,blague,humour,clown,comique,drôle','M'), // HUMOUR
    W('pleure,larmes,tristesse,chagrin,sanglot,émouvoir','M'), // PLEURS
    W('amour,cœur,rose,baiser,couple,passion','M'), // AMOUR
    W('amitié,fidèle,confiance,partager,soutenir,lien','F'), // AMITIÉ
    W('famille,parents,enfant,maison,repas,photo','F'), // FAMILLE
    W('vieillesse,ride,sagesse,retraite,mémoire,gris','F'), // VIEILLESSE
    W('naissance,bébé,pleurs,hôpital,joie,premier','F'), // NAISSANCE
    W('mariage,bague,noces,voile,cérémonie,promesse','M'), // MARIAGE
    W('voyage,valise,avion,découverte,étranger,départ','M'), // VOYAGE
    W('fête,ballon,confetti,gâteau,bougies,invités','F'), // FÊTE
    W('cadeau,emballage,surprise,ruban,donner,ouvrir','M'), // CADEAU
    W('secret,confidentiel,chuchoter,cacher,révéler,silence','M'), // SECRET
    W('mensonge,pinocchio,masque,vérité,tromper,faux','M'), // MENSONGE
    W('mémoire,souvenir,passé,oublier,photo,nostalgie','F'), // MÉMOIRE
    W('temps,passé,futur,présent,instant,horloge','M'), // TEMPS
    W('espace,infini,galaxie,étoile,planète,cosmos','M'), // ESPACE
    W('imagination,créer,inventer,idée,rêver,fantaisie','F'), // IMAGINATION
    W('hasard,probabilité,chance,dés,loterie,aléatoire','M'), // HASARD
    W('tradition,coutume,héritage,culture,génération,transmettre','F'), // TRADITION
    W('futur,technologie,progrès,robot,anticipation,demain','M'), // FUTUR
  ],
};

// Mapping theme key → liste de mots (noms en majuscules)
const THEME_WORDS = {
  '🦁 Animaux':          ['LION','DAUPHIN','GIRAFE','AIGLE','SERPENT','TIGRE','ÉLÉPHANT','PIEUVRE','KOALA','RENARD','BALEINE','FLAMANT','GORILLE','PINGOUIN','HÉRISSON','BREBIS','ARAIGNÉE','RHINOCÉROS','HYÈNE','DROMADAIRE','CROCODILE','PAON','SCORPION','CHAT','CHIEN','CHEVAL','MOUTON','VACHE','COCHON','COQ'],
  '🍕 Nourriture':       ['PIZZA','SUSHI','CRÊPE','BURGER','CHOCOLAT','FROMAGE','AVOCAT','MADELEINE','CROISSANT','RATATOUILLE','ESCARGOT','MACARON','SOUFFLÉ','TARTARE','BRIOCHE','CURRY','PASTA','RIZ-AU-LAIT','HUILE','CITRON','POT-AU-FEU','KEBAB','MIEL','PIMENT','GLACE','INFUSION','CAFÉ','VIN','BIÈRE','EAU'],
  '🎬 Cinéma & Culture': ['VAMPIRE','ROBOT','EXTRATERRESTRE','ZOMBIE','PIRATE','SUPERHÉROS','DÉTECTIVE','ACTEUR','RÉALISATEUR','COUPABLE','HÉROÏNE','CHEVALIER','MAGICIEN','CONTE','COMÉDIE','THRILLER','MUSICAL','CINÉMA','ROMAN','PEINTURE','MUSIQUE','THÉÂTRE','SCULPTURE','DANSE','PHOTOGRAPHIE','JEU-VIDÉO','PODCAST','SÉRIE','DESSIN-ANIMÉ','DOCUMENTAIRE'],
  '🏠 Objets du quotidien':['PARAPLUIE','MIROIR','RÉVEIL','LAMPE','CISEAUX','BOUSSOLE','SABLIER','PANIER','BOUGIE','TIROIR','CADENAS','COUSSIN','POUBELLE','SAVON','BROSSE','COUVERTURE','SONNETTE','FENÊTRE','FOUR','RÉFRIGÉRATEUR','LAVE-VAISSELLE','ASPIRATEUR','TONDEUSE','ARROSOIR','MACHINE-À-COUDRE','ENCEINTE','ORDINATEUR','TÉLÉPHONE','TÉLÉVISION','MONTRE'],
  '💼 Métiers':           ['CHIRURGIEN','POMPIER','ARCHITECTE','CUISINIER','ASTRONAUTE','AVOCAT','JOURNALISTE','BOULANGER','PHARMACIEN','PILOTE','INSTITUTEUR','DÉVELOPPEUR','INFIRMIER','DENTISTE','VÉTÉRINAIRE','POLITICIEN','COMPTABLE','AGENT-IMMOBILIER','PLOMBIER','ÉLECTRICIEN','MAÇON','COIFFEUR','KINÉSITHÉRAPEUTE','PSYCHOLOGUE','MILITAIRE','POLICIER','JUGE','PEINTRE','PHOTOGRAPHE','MUSICIEN'],
  '⚽ Sport':             ['MARATHON','SURF','GYMNASTE','ARBITRE','CHAMPION','GARDIEN','CYCLISTE','NATATION','BOXEUR','PENALTY','PATINAGE','TENNIS','RUGBY','BASKETBALL','NAGEUR','ESCALADE','ÉQUITATION','TIR-À-L-ARC','HALTÉROPHILIE','SPRINT','KARATÉ','JUDO','VOILE','SKI','SNOWBOARD','PARACHUTISME','DANSE-SPORTIVE','GOLF','FLÉCHETTES','PÉTANQUE'],
  '🌍 Géographie':        ['PARIS','ROME','LONDRES','NEW-YORK','TOKYO','AUSTRALIE','ÉGYPTE','BRÉSIL','ARGENTINE','NORVÈGE','RUSSIE','INDE','CHINE','MEXIQUE','AFRIQUE','SUISSE','HOLLANDE','ESPAGNE','GRÈCE','CAIRE','THAÏLANDE','CORÉE','INDONÉSIE','ARABIE','GUATEMALA','PORTUGAL','ARCTIQUE','LOUISIANE','NOUVELLE-ZÉLANDE','VIENNE'],
  '🔬 Science & Nature':  ['NUCLÉAIRE','TROU-NOIR','FOUDRE','VOLCAN','TREMBLEMENT','CERVEAU','ADN','GRAVITÉ','MOLÉCULE','CHLOROPHYLLE','ASTRONOMIE','PLANÈTE','LUNE','ÉTOILE','COMÈTE','MÉTÉORE','RELATIVITÉ','PHYSIQUE-QUANTIQUE','CELLULE','ÉVOLUTION','ÉLECTRICITÉ','MAGNÉTISME','LUMIÈRE','SON','VIRUS','BACTÉRIE','CHIMIE','ALGORITHME','IA','ROBOT'],
  '🏰 Histoire':          ['GLADIATEUR','PHARAON','VIKING','CHEVALIER','CROISADE','RENAISSANCE','RÉVOLUTION','NAPOLÉON','INDUSTRIALISATION','PREMIÈRE-GUERRE','SECONDE-GUERRE','RÉSISTANCE','APOLLON','MUR-DE-BERLIN','ESCLAVAGE','DÉMOCRATIE','ROI','IMPRIMERIE','BOUSSOLE','POUDRE-À-CANON','MENHIR','MOMIFICATION','COLONISATION','KRACH','CONQUÊTE-SPATIALE','INTERNET','BOMBE-ATOMIQUE','SUFFRAGETTE','PHILOSOPHE','CATHÉDRALE'],
  '🎲 Divers':            ['CARTES','DÉS','PUZZLE','MAGIE','RÊVE','ARC-EN-CIEL','MÉTÉO','HOROSCOPE','CHANCE','PEUR','HUMOUR','PLEURS','AMOUR','AMITIÉ','FAMILLE','VIEILLESSE','NAISSANCE','MARIAGE','VOYAGE','FÊTE','CADEAU','SECRET','MENSONGE','MÉMOIRE','TEMPS','ESPACE','IMAGINATION','HASARD','TRADITION','FUTUR'],
};

const ALL_THEME_KEYS = Object.keys(THEME_WORDS);

// Récupère les données d'un mot
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
