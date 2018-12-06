import React from 'react';
import InputComponent from './InputComponent.js'
//functional component AKA stateless component
// const App = () => {
// 	return <div>'I'M NOW RENDERED'</div>;
// };

//class component AKA stateful component
class App extends React.Component {
	render() {
		return (
      <div>
        <div>'I AM NOW RENDERED'</div>
        <InputComponent />
      </div>
    );

	}
}

export default App;
