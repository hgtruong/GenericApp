import React from 'react';

//standard props
// const RenderText = (props) => {
//   return <div> {props.myText} </div>;
// }

// destrucjted props
const RenderText = ({ myText }) => {
  return <div> {myText} </div>
};

// class RenderText extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render() {
//     return <div> {this.props.myText} </div>
//   }
// }
export default RenderText;