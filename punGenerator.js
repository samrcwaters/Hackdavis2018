function getRand() {
    var puns = ["It's okay to wing it!", "If your first try doesn't work out, there's always a nest time!",
        "Stop right there! It's ill-eagle for you to be so cute.","Happiness occurs on the fly!",
        "It's understandable to chicken out sometimes.","How the flock are you so amazing?",
        "Some days you penguin. Some days you peng-lose. That's alright!","I sure can count on you when I'm in a finch!",
        "You're going to be happy, feather or not you like it!","Let's embark on some exciting new beak-innings!",
        "Flamin-go make your dreams come true!","Having a hard day? Owl be there for you.","You peli-CAN do it!",
        "Peli-can't there be more people like you in this world?","If I checked the time, would I be bird watching?",
        "I hope you find the peace and caw-calm that you've been looking for.","You are my swan and only.",
        "You are the cuckoo-lest!","What a pheasant surprise! It's my favorite person!",
        "I'd buy you the world, but it ain't cheep-cheep-cheep!"];
    var randNum = Math.random();
    randNum = randNum%20;
    console.log(puns[randNum]);
    //return puns[randNum];
}
