use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Back in Time';

/**
 * Array containing quotes.
 */
var QUOTES = [
    "One point twenty-one jigga-watts",
    "Marty, we've got to go back.",
    "88 miles per hour.",
    "Marty! I need you to go back with me!",
    "Back to the Future!",
    "As for you, I'll be back up here in an hour, so you'd better not be!",
    "Nobody calls me chicken!",
    "That's about as funny as a screen door on a battleship.",
    "Screen door on a submarine, you dork.",
    "I know you just sent me back to the future, but I'm back. I'm back from the future.",
    "The Doc's alive! He's in the old west, but he's alive!",
    "Hey, The Big 'M'! How's it hanging, McFly?",
    "It's Leave you idiot! Make like a tree & leave! You sound like a damn fool when you say it wrong!",
    "Time traveling is just too dangerous. Better that I devote myself to study the other great mystery of the universe: women!",
    "Shark still looks fake.",
    "Ronald Reagan? The actor? Ha! Then who’s Vice President, Jerry Lewis? I suppose Jane Wyman is the First Lady. And Jack Benny is Secretary of the Treasury!",
    "Last night, Darth Vader came down from Planet Vulcan and told me that if I didn't take Lorraine out, that he'd melt my brain.",
    "Why don't you make like a tree and get out of here?",
    "Great Scott!"
];



exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetQuote');
    },
    'GetNewQuoteIntent': function () {
        this.emit('GetQuote');
    },
 
    'GetQuote': function () {
        // Get a random space quote from the quotes list
        var quoteIndex = Math.floor(Math.random() * QUOTES.length);
        var randomQuote = QUOTES[quoteIndex];

        // Create speech output
        var speechOutput = randomQuote;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomQuote)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can ask the quote doctor for a quote or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
