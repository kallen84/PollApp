/******************************************************** 
 This is our Speaker-component. When a speaker joins 
 they starting the presentation and supply the 
 presentations title 
********************************************************/
var React = require('react');
var Display = require('./parts/Display');
var JoinSpeakerForm = require('./parts/JoinSpeakerForm');
var AudienceList = require('./parts/AudienceList');
var QuestionList = require('./parts/QuestionList');
var SpeakerCreateNewQuestion = require('./parts/SpeakerCreateNewQuestion');

var Speaker = React.createClass({

    render: function() {

        return (
            <Display if={this.props.status === 'connected'}>
                <Display if={this.props.member.type === 'speaker'}>
                    <QuestionList 
                        questions={this.props.questions}
                        emit={this.props.emit}
                    />

                    <SpeakerCreateNewQuestion emit={this.props.emit}/>

                    <AudienceList audience={this.props.audience} />
                </Display>

                <Display if={this.props.member.type !== 'speaker'}>
                    <JoinSpeakerForm emit={this.props.emit}/>

                </Display>

            </Display>
        )

    }

})
module.exports = Speaker;
