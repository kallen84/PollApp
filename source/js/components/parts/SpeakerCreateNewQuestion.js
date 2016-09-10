/******************************************************** 
 This is our form for a speaker for creating a new 
 question
********************************************************/

var React = require('react');

var CreateNewQuestion = React.createClass({

    newQuestionEntered() {
           var newQuestion = {
             q: this.refs.questionNameInput.value 
            , a: this.refs.answerInput1.value
            , b: this.refs.answerInput2.value
            , c: this.refs.answerInput3.value
            , d: this.refs.answerInput4.value
        };
        console.log(newQuestion);

        this.props.emit("newQuestionEntered", newQuestion);
        this.refs.resetForm.reset();
    },

    render() {
        return (
            <form ref="resetForm" action="javascript:void(0)" onSubmit={this.newQuestionEntered}>
                <h2>Skapa en ny fråga här...</h2>
                <label> Question: </label>
                <input type="text" placeholder="Ange din fråga här" ref="questionNameInput" className="form-control"/>
                <label> answer a: </label>
                <input type="text" placeholder="Ange ditt svar a" ref="answerInput1" className="form-control"/>
                <label> answer b: </label>
                <input type="text" placeholder="Ange ditt svar b" ref="answerInput2" className="form-control"/>
                <label> answer c: </label>
                <input type="text" placeholder="Ange ditt svar c" ref="answerInput3" className="form-control" />
                <label> answer d: </label>
                <input type="text" placeholder="Ange ditt svar d" ref="answerInput4" className="form-control" /> 
                <br />                                                                       
                <button className="btn btn-primary">Skapa</button>
            </form>
        )
    
    } // render-function




}) // CreateNewQuestion-Component
module.exports = CreateNewQuestion;
