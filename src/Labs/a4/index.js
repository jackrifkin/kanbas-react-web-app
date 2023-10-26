import Add from "./Add";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariables";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariables";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

const Assignment4 = () => {
    function sayHello() {
      alert("Hello");
    }
  
    return (
        <div style={{ marginLeft: "100px" }}>
            <h1>Assignment 4</h1>
            <ReduxExamples />
            <br/>
            <br/>
            <br/>
            <h2>useState Examples</h2>
            <Add a={1} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello}/>
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
        </div>
    );
};


export default Assignment4;   