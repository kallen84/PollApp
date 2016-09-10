/******************************************************** 
 This is our server-side file which will run using node
 Here we code our Express-server
********************************************************/

var express = require('express');
var path = require('path');
var app = express();
var questions = require('./questions');

app.use(express.static('./build'));
app.use('*', function(req,res) {
    res.sendFile(path.join(__dirname,'..','build','index.html'));
    // c:\reactKurs\reactLivePoll\server\..\build\index.html         
})

var server = app.listen(3000);
var io = require('socket.io').listen(server);
var connections = [];
var audienceArr = [];
var title = 'Unnamed presentation'
var speaker = {};
var currentQuestion = null;
var results = {
      a: 0
    , b: 0
    , c: 0
    , d: 0
};


io.sockets.on('connection', function (socket) {

    socket.on('disconnect', () => {

        connections.splice(connections.indexOf(socket), 1);

        socket.disconnect();

        console.log('WS connections: %s', connections.length);

        for (var i = 0; i < audienceArr.length; i++) {
            if (audienceArr[i].id === socket.id) {
                audienceArr.splice(i, 1);
                break;
            }
        }
        io.sockets.emit('audience', audienceArr);

    }) // socket-function-disconnect

    .on('join', (payload) => {
        var member = {
            id: socket.id
            , type: 'audience'
            , name: payload.member.name
        };
        audienceArr.push(member);
        //socket.emit skickar tillbaka svaret "joined" till den som skickade "join"
        socket.emit('joined', member);

        // io.sockets.emit skickar "audience" med updpaterad audienceArr till samtliga anslutna. 
        io.sockets.emit('audience', audienceArr);
        console.log(payload.member.name);
    })

    .on('newQuestionEntered', (newQuestion) => {
       
        questions.push(newQuestion); 
        console.log("New question was created");

        io.sockets.emit('newQuestion', questions);
 
    })


    .on('start', (payload) => {
        speaker = payload.speaker;
        speaker.id = socket.id;
        speaker.type = 'speaker';

        title = payload.title;
        socket.emit('joined', speaker);

        io.sockets.emit('started', {
            title: title
            , speaker: speaker.name
            , audience: audienceArr
        });

    })

    .on('ask', (question) => {
        currentQuestion = question;

        results = {
            a: 0
            , b: 0
            , c: 0
            , d: 0
        };
 
        console.log("Questions Asked: '%s'", question.q);
        io.sockets.emit('ask', question);
    })
    
    .on('answer', (optionName) => {
        results[optionName]++;
        io.sockets.emit('results', results);
        console.log('Resultat: %j', results);
    })

    connections.push(socket);

    socket.emit('welcome', {
        title: title
        , speaker: speaker.name
        , questions: questions
        , currentQuestion: currentQuestion
    });

    console.log('WS connections: %s', connections.length);

}) // io.sockets-function


console.log('server is running on http://localhost:3000'); 
