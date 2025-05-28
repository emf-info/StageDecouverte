# 💻 Atelier de découverte : 
Deviens un As de l'informatique avec ton 
Raspberry Pi !

| **Titre** | Atelier de découverte du métier d'informaticien |
| --- | --- |
| **Durée** | ½ journée (environ 3h30) |

**Objectifs :**

Découvrir les bases du métier d'informaticien
   - installation de système
   - programmation
   - mise en réseau avec des Phidgets|
---

## 🚀 Prêts à embarquer dans le monde des informaticiens ?

Bienvenue dans cet atelier où tu apprendras à utiliser un mini-ordinateur, le Raspberry Pi, afin de faire des trucs vraiment cool ! Avec quelques manipulations, tu pourras programmer et mettre en place un jeu vidéo !

---

## 💻 Matériels nécessaires

|Ecran |Clavier / Souris |Raspberry Pi (mini ordinateur) |
|----|----|----|
|![Ecran](consigne_ressources/image.png)  |![Clavier / Souris](consigne_ressources/k400.png) |![Raspberry Pi (mini ordinateur)](consigne_ressources/raspberry_pi.png) |

|Alimentation Raspberry Pi |Switch (pour connecter plusieurs ordinateurs ensemble) |3x Câbles réseaux (blanc, bleu, violet)  |
|----|----|----|
|![Alimentation pour le raspberry Pi](consigne_ressources/alim-rpi5.jpg) |![Switch (pour connecter plusieurs ordinateurs ensemble)](consigne_ressources/gs105_alim_3.jpg) |![Câble réseau](consigne_ressources/63fefe9a-1f0c-409d-9d46-35eeba19c0ec.png) |

|Câble pour Phidget |Phidget Hub (HUB0000_0) |Adaptateur SD vers USB |
|----|----|----|
|![Câble pour Phidget](consigne_ressources/24830951-8292-4d41-8883-dcf487fb5901.png) |![Phidget Hub (HUB0000_0)](consigne_ressources/image%202.png) |![Adaptateur SD vers USB](consigne_ressources/adaptateur_usb.jpg) |

|Câble Phidget HUB |Carte micro SD (stockage) |Câble HDMI (vidéo) |
|----|----|----|
|![Câble Phidget HUB](consigne_ressources/3017_1.jpg) |![Carte micro SD (stockage)](consigne_ressources/e332550d-d71c-480d-9036-51bd7d6e0304.png) |![Câble HDMI (vidéo)](consigne_ressources/hdmi_cable.jpg) |

|Phidget thumbstick (joystick) |Phidget son |Phidget lumière |
|----|----|----|
|![Phidget thumbstick (joystick)](consigne_ressources/b71f1cde-405a-435f-b8e9-455dee8d2491.png) |![Phidget son](consigne_ressources/image%203.png) |![Phidget lumière](consigne_ressources/image%204.png) |

|Phidget slider |Phidget distance |Phidget température |
|----|----|----|
|![Phidget slider](consigne_ressources/image%205.png) |![Phidget distance](consigne_ressources/image%206.png) |![Phidget température](consigne_ressources/image%207.png) |

---

## 🛀 Les étapes de l’aventure

### 1. Préparation de la carte SD

La première étape de votre travail consiste à préparer une carte SD pour accueillir le système d’exploitation Raspberry Pi OS.

Le système d'exploitation est le programme principal qui fait fonctionner un ordinateur. Il gère les composants à l'intérieur, comme les applications, les fichiers et les composants matériels (écran, clavier, etc.), dans le but que tout fonctionne correctement ensemble.

**Objectif :**

- Préparer une carte SD avec un système d’exploitation linux.

**Réalisation :**

- Insère la carte SD dans son adaptateur et branche l’adaptateur sur l’un des ports USB de ton poste de travail.
![sd_usb1.png](consigne_ressources/sd_usb1.png)
![sd_usb2.png](consigne_ressources/sd_usb2.png)
- Dans la barre de recherche Windows, recherche l’application “Raspberry Pi Imager” et démarre-la.

![image.png](consigne_ressources/image%208.png)

- Une fois l’application lancée, tu vas réaliser plusieurs étapes afin de préparer la carte SD qui servira d’espace de stockage principal pour ton Raspberry Pi.
- Premièrement, sélectionne le modèle du Raspberry. Dans notre cas, il s’agit d’un Raspberry Pi 4

![image.png](consigne_ressources/raspberry4.png)

- Puis, sélectionne ensuite le système d’exploitation Raspberry PI OS (64-BIT)

![image.png](consigne_ressources/image%2010.png)

- Sélectionne le support de stockage (carte SD)
- Passe à l’étape suivante, refuse les réglages de personnalisation de l’OS si cela est demandé et accepte de supprimer les données déjà présentes sur la carte.
- L’écriture de la carte commence normalement automatiquement.
- L’écriture peut prendre quelques minutes. En attendant que la carte soit prête, tu peux déjà débuter l’étape suivante.

---

### 2. Préparation et branchement du matériel

Cette seconde étape te permet d’alimenter, connecter et rendre utilisable les différents appareils qui sont mis à ta disposition.

**Objectifs :** 

- Reconnaître les différents appareils et câbles
- Comprendre l'importance du réseau dans l'informatique.

**Préparation du switch :**

- Branche l'alimentation à l’arrière du switch.

![switch_alim.png](consigne_ressources/switch_alim.png)

- Branche l'alimentation dans une prise courant

![switch_courant.png](consigne_ressources/switch_courant.png)

- Branche un câble réseau entre le port n°1 du switch et la prise réseau mise à ta disposition (EMFNet).

![switch_port1.png](consigne_ressources/switch_port1.png)

![cable_emfnet.png](consigne_ressources/cable_emfnet.png)

**Préparation du Raspberry Pi :**

- Branche le périphérique USB (clavier, souris) avec le dongle USB.

![rasp_dongle.jpg](consigne_ressources/rasp_dongle.png)

- Branche-le également à un écran à l’aide du câble HDMI.

![rasp_hdmi.png](consigne_ressources/rasp_hdmi.png)
![rasp_hdmi_ecran.png](consigne_ressources/rasp_hdmi_ecran.png)

- Vérifie que l’écriture et la vérification de la carte SD que tu as préparée soient bien terminées puis, insère la  carte dans le port prévu à cet effet sous l’appareil.

![rasp_sd.png](consigne_ressources/rasp_sd.png)

- Finalement, branche l’alimentation du Raspberry.

![rasp_usbc.png](consigne_ressources/rasp_usbc.png)
![rasp_alim_courant.png](consigne_ressources/rasp_alim_courant.png)

---

### 3. Configuration initiale du Raspberry Pi

Maintenant, découvre comment se déroule la configuration initiale d’un système d’exploitation linux. C’est une étape importante lorsque tu prépares une nouvelle station de travail.

**Objectif :** 

- Apprendre à réaliser la configuration initiale d’un OS.

**Réalisation :**

- Une fois le Raspberry Pi connecté à son alimentation, il démarre automatiquement, il n’y a pas de bouton d’allumage.

![image.png](consigne_ressources/image%2011.png)

- Les premiers paramètres à configurer lors du premier lancement d’un système d’exploitation sont généralement la langue, le clavier et le fuseau horaire. Tu parcours les différentes possibilités et tu sélectionnes les paramètres adéquats suivants  :
    - Country : Switzerland
    - Language : Swiss French
    - Timezone : Zurich
    
    Désélectionne les deux options désignées ci-dessous.
    

![image2.png](consigne_ressources/image2.png)

- Maintenant, tu crées un nouvel utilisateur. Il faut choisir un nom et un mot de passe. Pour cet exercice, tu nommes ton utilisateur `stage` et son mot de passe est `Pa$$w0rd`. Tu saisis le nom dans le premier champ et tu saisis le même mot de passe dans les deux derniers champs de texte.

![user.png](consigne_ressources/user.png)

- L’étape suivante consiste à configurer le réseau sans fil. Pour l’instant, tu l’ignores et tu reviendras plus tard au moyen d’une autre méthode de connexion à internet.

![image.png](consigne_ressources/image%2012.png)

- L’avant dernière étape de cette installation concerne les mises à jour. Pour des raisons de sécurité, il est primordial de garder un système d’exploitation à jour. Comme cette étape prend du temps, tu passes cette étape en appuyant sur “skip”.

![image.png](consigne_ressources/image%2013.png)

- Tu a atteint la fin de cette configuration de base, tu redémarres l’appareil afin que les paramètres choisis s’appliquent correctement.

![image.png](consigne_ressources/image%2014.png)

---

### 4. Connexion à Internet

Tu vas maintenant lier les deux appareils que nous avons préparés précédemment afin de connecter ton Raspberry Pi à internet et qu’il puisse communiquer avec le reste du monde.

Afin de bien comprendre l’importance de cette étape, tu réaliseras divers tests avant et après la connexion.

**Objectif :**

- Comprendre l'importance du réseau dans l'informatique.

**Réalisation :**

- Tu vérifies d'abord l’accès à Internet. Comme tu n’as rien configuré, il est normal que cela ne fonctionne pas.
    - Pour tester, ouvre le navigateur et effectue une recherche sur `www.google.com`.
    - Tu peux aussi ouvrir l’invité de commande linux et exécuter une commande de test ping comme ci-dessous. Il suffit de recopier la commande et de l’exécuter en appuyant sur la touche [Enter].
    
    ![terminal.png](consigne_ressources/terminal.png)
    
    ```bash
    ping google.com
    ```
    
    Pour arrêter la commande, il te suffit d’appuyer simultanément sur les touches CTRL + C de ton clavier.
    
    Cette commande teste si ton ordinateur peut communiquer avec le site de Google. Elle envoie des messages (paquet réseau) pour vérifier la connexion. En retour, elle t’affiche si Google répond ainsi que le temps que ça prend.
    
- Tu lies maintenant le Raspberry Pi à l’équipement réseau. Adresse-toi au professeur présent dans la salle pour récupérer un deuxième câble réseau. Ensuite, tu le branches sur le port n°2 du switch et l’unique port réseau du Raspberry Pi.

![IMG_20250109_145113.jpg](consigne_ressources/IMG_20250109_145113.jpg)

![IMG_20250109_145043.jpg](consigne_ressources/IMG_20250109_145043.jpg)

- Maintenant, tu vérifies à nouveau la connexion avec les deux méthodes mentionnées précédemment. La connexion à Internet est établie, les tests doivent se passer sans problème.

---

### 5. Code ton Jeu du “snake” avec ta propre manette

![image.png](consigne_ressources/eea168a6-5964-40e4-b11e-b30f79640f61.png)

Nous allons, ensemble, réaliser les quelques actions pour jouer au jeu snake.

Le jeu est simple. Tu diriges un serpent qui se déplace dans un environnement en deux dimensions de manière verticale et horizontale.

Le but du serpent est de manger des pommes qui apparaissent aléatoirement sur ton écran. A chaque fois que le serpent mange une pomme, il grandit. Le jeu est infini mais, attention, il doit éviter les bords ou toi-même sinon tu perds la partie.

![image.png](consigne_ressources/41c33fea-1523-43e3-83f9-239c91f19f30.png)

Tu finalises ton installation afin de faire fonctionner le jeu correctement. Tu retrouves, ci-dessous, un schéma vulgarisé de ce que tu dois mettre en place et du rôle de chacun des appareils.

![Dessin.png](consigne_ressources/Dessin.png)

### 5.1. Préparation de la manette (sur le Raspberry Pi)

Tu as besoin d’une manette pour jouer.

- Ouvre le terminal de commandes linux

![terminal.png](consigne_ressources/terminal.png)

- Exécute les commandes suivantes une à une.
    - Téléchargement
        
        ```bash
        wget -P ~ https://raw.githubusercontent.com/emf-info/StageDecouverte/refs/heads/main/server_setup.sh
        ```
        
    - Modification des permissions
        
        ```bash
        chmod +x ~/server_setup.sh
        ```
        
    - Exécution
    
    Après avoir exécuté la commande suivante, tu entres le mot de passe défini durant la configuration du Raspberry Pi et tu valides avec la touche [Enter] 
    **Pour des raisons de sécurité,** il est normal que les caractères ne s’affichent pas lorsque tu écris le mot de passe.
    
    ```bash
    sudo ~/server_setup.sh
    ```
    

Tu as téléchargé, rendu exécutable et exécuté un script linux. Ce dernier contient une liste de commandes et d’actions à exécuter automatiquement.

Ce genre de script est utilisé pour gagner du temps lors de tâches répétitives, d’installations complexes ou pour de l’automatisation.

Dans notre cas, il met en place les différents systèmes qui permettront de jouer à snake !

### 6. Code par toi-même ! (A faire sur l'ordinateur)

**Objectif :**

Apprendre à créer un programme simple en blocs pour utiliser différents Phidgets.

**Réalisation :**

1. Connecte les Phidgets au HUB à l’aide des câbles fournis.
2. Branche le Hub au Raspberry Pi à l’aide du câble USB.
3. Ouvre le site [makecode.phidgets.com](https://makecode.phidgets.com/#).

![{C74BB9BF-FC59-4B32-9092-52578A6422F7}.png](consigne_ressources/C74BB9BF-FC59-4B32-9092-52578A6422F7.png)

1. Clique sur "Nouveau projet".
2. Tu arrives ensuite sur la page suivante :

![{35515E77-F1EB-4503-9154-7E489B299EC7}.png](consigne_ressources/35515E77-F1EB-4503-9154-7E489B299EC7.png)

Ce programme permet de prendre en main les Phidgets et la création de petits programmes simples.

Clique sur le bouton en bas à gauche pour connecter les Phidgets

Tu peux t’amuser à composer toi-même ton programme.

Des blocs d’action sont à disposition dans le menu sur la gauche. Pour les utiliser, tu les glisses et les places sur la droite. Ces blocs remplacent les lignes de code. Ils permettent de découvrir l’univers du développement de façon ludique et instinctive.

Pour te faire une idée, visualise la vidéo d’exemple. On réalise un programme qui affiche la température actuelle mais uniquement si le slider est à 100%.

[🎞️ Vidéo pour un exercice d'exemple](https://github.com/emf-info/StageDecouverte/raw/refs/heads/main/consigne_ressources/ex_phidget.mp4)

Tu as découvert comment cela fonctionne. Si tu te sens à l’aise, tu essayes de créer toi-même un programme. Tu as également d’autres Phidgets à disposition pour t’amuser et inventer… A toi de jouer !


### 6.2. Mise en place de l’affichage

Maintenant, ta manette est prête. Tu prépares l’affichage de ton jeu depuis ton poste de travail. Tu as besoin de quelques fichiers et tu fais les ajustements suivants.

- Télécharge les fichiers qui permettent d’afficher ton jeu [ici](https://github.com/emf-info/StageDecouverte/raw/refs/heads/main/Stage%20d%C3%A9couverte.zip).
- Clique avec le bouton droit de la souris sur le fichier téléchargé et sélectionne la fonctionnalité  “Extraire tout”. Il s’agit d’un fichier compressé.
- Tu as, dès lors, accès à un dossier contenant les fichiers utiles pour l’affichage de ton jeu.

- En parcourant le contenu du dossier, tu remarques trois fichiers.
    - Le premier fichier s’appelle “index.html”. Il sert à définir le contenu de notre affichage qui peut être du texte, un tableau, une liste, etc.
    - Le second fichier “styles.css” définit comment sera affiché le contenu. Il décrit, par exemple, la couleur du texte ou du fond.
    - Finalement, tu retrouves le fichier nommé “script.js”. Ce fichier contient toutes les actions techniques de notre affichage.

![{6D0DD684-DC00-4105-BD21-68B6FD4F6C19}.png](consigne_ressources/6D0DD684-DC00-4105-BD21-68B6FD4F6C19.png)

- Pour visualiser, tu double cliques sur le fichier “index.html”. Une page Internet doit s'ouvrir.

![{40035457-8722-4137-87B0-95074D62BAC2}.png](consigne_ressources/40035457-8722-4137-87B0-95074D62BAC2.png)

- Tu constates que, pour l’instant, le jeu n’est pas fonctionnel. Comme mentionné précédemment, l’affichage doit communiquer avec notre manette pour que le jeu fonctionne.  Tu dois modifier le code fournit en tenant compte des informations trouvées.

### 6.3. Rendre ton jeu fonctionnel

Dans le point précédent, nous avons mentionné les différents fichiers utiles pour l’affichage. Un de ces fichiers est utilisé pour la communication avec la manette. Tu as peut-être deviné, il s'agit du fichier “script.js” ! 

Mais avant de modifier le code, il faut d’abord savoir ce qu’on va faire. Pour trouver la manette, on doit savoir comment s’y adresser.

Les ordinateurs sont tous associés à une adresse IP sur un réseau. Cette adresse  permet de communiquer sur le réseau (comme le prénom de quelqu’un pour s’adresser à la personne). C’est cette adresse IP que nous utiliserons pour récupérer les commandes de notre manette.

Pour trouver l’adresse IP de notre Raspberry Pi, ouvre un nouveau terminal et tape la commande suivante :

```bash
ip addr show
```

Tu dois obtenir un résultat comme celui-ci :

```bash
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host 
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:15:5d:24:f1:03 brd ff:ff:ff:ff:ff:ff
    inet **XXX.XXX.XXX.XXX**/YY brd XXX.XXX.XXX.XXX scope global dynamic noprefixroute eth0
       valid_lft 86210sec preferred_lft 86210sec
    inet6 fe80::a725:1f07:d8ed:8bda/64 scope link noprefixroute 
       valid_lft forever preferred_lft forever
```

Il y a beaucoup d’informations mais c’est la suite de numéros en rouge qui nous intéresse. Prends en note pour modifier le code.

Tu peux retourner sur ton poste de travail pour modifier l’affichage.

Fais un clic droit sur le fichier “script.js”, sélectionne “Ouvrir avec” et choisis un logiciel pour éditer le code comme Visual Studio Code ou simplement le bloc-note.

Tu recherches parmi ces lignes de code, celle qui permet de spécifier l’adresse IP.

Voilà à quoi cela ressemble :

```jsx
fetch ('http://XXX.XXX.XXX.XXX:3000/api/joystick')
```

Tu remplaces l’adresse IP présente dans le code par celle de ton Raspberry Pi et tu enregistres tes modifications et tu fermes l’éditeur de texte.

Puis, retourne sur ton navigateur et recharge la page grâce à la touche “F5” sur ton clavier.

Bien joué, ton jeu Snake est maintenant opérationnel !

![](https://images.unsplash.com/photo-1499233983070-99a5f004e720?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb)

Si quelque chose ne fonctionne pas correctement ou que tu as des questions. N’hésite pas à t’adresser à l’accompagnant.

### 7. Challenges avec Scratch et Phidgets

Voici quelques challenges que tu peux effectuer avec les phidgets. On utilise le site scratch qui permet de créer des petits programmes simplement avec des bloques comme tu l’a fait durant l’exercice 5.

Ouvre scratch sur l’ordinateur à l’adresse suivante : [http://phidgets.com/education/scratch](http://phidgets.com/education/scratch)

Pour tous les challenges, tu aura besoins du HUB, du cable USB et des cables pour les phidgets. Les phidgets a utiliser sont précisés pour chaque exercice.

Pour te simplifier la tache, pour chaque challenge tu auras un fichier qui contiens la base de chaque programme. Pour utiliser cette base, tu dois la télécharger, puis l’importer dans scratch :

![{E380A225-245C-4EBB-A6C1-A9491CEE5B51}.png](consigne_ressources/E380A225-245C-4EBB-A6C1-A9491CEE5B51.png)

Et tu sélectionne le fichier que tu viens de télécharger.

Il te faut également importer les blocs de code des phidgets :

![{4CA0D872-DCEC-43A4-BC02-B29F3D0D5D9F}.png](consigne_ressources/4CA0D872-DCEC-43A4-BC02-B29F3D0D5D9F.png)

![{7BDABE97-210C-4EC6-8025-D15DACEE492A}.png](consigne_ressources/7BDABE97-210C-4EC6-8025-D15DACEE492A.png)

Et finalement, il y a deux boutons qui te permettent de lancer et de stoper le programme :

![image.png](consigne_ressources/image%2015.png)

1. **Challenge 1 : Déplacement et Saut**
    
    Utilise le capteur **thumbstick** pour déplacer Scratch et effectuer un saut.
    
    ![image.png](consigne_ressources/image%2016.png)
    
    Télécharge le programme suivant : 
    
    [Challenge_1.sb3](consigne_ressources/Challenge_1.sb3)
    
    Recopie le code suivant :
    
    ![image.png](consigne_ressources/image%2017.png)
    
2. **Challenge 2 : Mouvements avec le joystick**
    
    Utilise le capteur **thumbstick** pour déplacer le poisson horizontalement et verticalement.
    
    ![image.png](consigne_ressources/image%2018.png)
    
    Télécharge le programme suivant : 
    
    [Challenge_2.sb3](consigne_ressources/Challenge_2.sb3)
    
    Pas d’exemple de code pour cet exercice, essaie par toi-meme !
    
3. **Challenge 3 : Changement de taille avec le slider**
    
    Utilise le capteur **slider** pour modifier la taille de Scratch.
    
    ![image.png](consigne_ressources/image%2019.png)
    
    Télécharge le programme suivant : 
    
    [Challenge_3.sb3](consigne_ressources/Challenge_3.sb3)
    
    Pas d’exemple de code pour cet exercice, essaie par toi-meme !
    
4. **Challenge 4 : Musique avec la distance**
    
    Utilise le capteur de **distance** pour jouer de la musique.
    
    ![image.png](consigne_ressources/image%2020.png)
    
    Télécharge le programme suivant : 
    
    [Challenge_4.sb3](consigne_ressources/Challenge_4.sb3)
    
    Pas d’exemple de code pour cet exercice, essaie par toi-meme !
    
5. **Challenge 5 : Interaction avec le capteur sonore**
    
    Utilise le capteur **sound** pour modifier le fond en faisant du bruit.
    
    ![image.png](consigne_ressources/image%2021.png)
    
    Télécharge le programme suivant : 
    
    [Challenge_5.sb3](consigne_ressources/Challenge_5.sb3)
    
    Pas d’exemple de code pour cet exercice, essaie par toi-meme !
    

---

## 🚀 Prêt à coder et explorer ?

L’informatique, c’est comme une aventure pleine de mystères ! En suivant ces étapes, tu vas découvrir ce qu’un informaticien fait au quotidien. Qui sait, peut-être que tu deviendras le prochain génie des systèmes ou un développeur star !

Alors, prêt à relever le défi ? 🎉
