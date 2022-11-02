window.onload = function(){
    const Person1 = [
        "Chuck Norris",
        "Bruce Lee",
        "Peter Parker",
        "Evil Kitten",
        "RumpleBeauty",
        "BoogerInt",
        "LyingRock",
        "FunnyGeek",
        "MartCure",
        "SadBiscuit",
        "StylishElf",
        "ShaggyCasual",
        "CaramelMop",
    ];
    const Person2 = [
        "Arnold Schwarzenegger",
        "4Geeks Academy",
        "GastroScout",
        "Mark Zuckerberg",
        "UnluckyEagle",
        "DriveLook",
        "AsterFinger",
        "FryMoo",
        "SmellyInfidel",
        "YakJacket",
        "DollarZen",
        "DesignPoint",
        "BiggestNative"
    ];

    const descriptions = [
        "I don't really took this picture, neither was there. I've just found it and decided to share it with you.",
        "",
        "",
        ""
    ]

    const MartianNames= [
        "RumpleBeauty",
        "BoogerInt",
        "LyingRock",
        "FunnyGeek",
        "MartCure",
        "SadBiscuit",
        "StylishElf",
        "ShaggyCasual",
        "CaramelMop",
        "UnluckyEagle",
        "DriveLook",
        "AsterFinger",
        "FryMoo",
        "SmellyInfidel",
        "YakJacket",
        "DollarZen",
        "DesignPoint",
        "BiggestNative"
    ]


 

    const locations = [
        "Milan, Italy",
        "Osaka, Japan ",
        "Cancun, Mexico",
        "Barcelona, Spain",
        "New York, USA",
        "Miami, Florida",
        "Tokyo, Japan",
        "Mexico City, Mexico",
        "Madrid, Spain",
        "L.A, USA"
    ]

   
    let id = 1;
    for (id = 1; id < 6; id++){

        let martianIndex = Math.floor(Math.random() * (MartianNames.length))
        let randomMartian = MartianNames[martianIndex];
        let martianId = `RandomMartian${id}`;
        const martianProfile= document.getElementById(martianId);
        martianProfile.innerHTML = randomMartian;

        let locationIndex = Math.floor(Math.random() * (locations.length));
        let randomPlace = locations[locationIndex];
        let locationId = `RandomLocation${id}`;
        const martianLocation = document.getElementById(locationId);
        martianLocation.innerHTML = randomPlace;

        let randomLikesI = Math.floor(Math.random() * 999);
        let randomLikesII = Math.floor(Math.random() * 999);
        let likesCountI = randomLikesI + "," + (randomLikesII < 100 ? '0'+randomLikesII: randomLikesII&&randomLikesII < 10 ? '00'+randomLikesII:randomLikesII);
        let createid = `likes${id}`
        const spanRandomLikes = document.getElementById(createid);
        spanRandomLikes.innerHTML = likesCountI;

        let personIndex1 = Math.floor(Math.random() * (Person1.length));
        let randomPerson1 = Person1[personIndex1];
        let personIndex2 = Math.floor(Math.random() * (Person2.length));
        let randomPerson2 = Person2[personIndex2];

        let displayId = `likesDisplay${id}`;
        let displayLikes = randomLikesII - 2;
        let likesCountDisplay = randomLikesI + "," + (displayLikes < 100 ? '0'+displayLikes: displayLikes&&displayLikes < 10 ? '00'+displayLikes:displayLikes);
        const likesSpanDisplay = document.getElementById(displayId);
        likesSpanDisplay.innerHTML=likesCountDisplay;

        let martianIid = `martianI${id}`
        let martianIIid =`martianII${id}`
        const randomSpan1 = document.getElementById(martianIid);
        randomSpan1.innerHTML=randomPerson1 + ", ";
        const randomSpan2 = document.getElementById(martianIIid);
        randomSpan2.innerHTML=randomPerson2;

        let commentsId = `CommentsCount${id}`
        const comentsDisplay = document.getElementById(commentsId);
        comentsDisplay.innerHTML=" " + Math.floor(Math.random() * 999)+ " ";

    }


 





  
    
}