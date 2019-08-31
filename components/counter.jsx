import React, {Component} from 'react';

class Counter extends Component {
state = {
value: this.props.value,
imageUrl: "https://picsum.photos/200",
mytags: ['tag1','tag2','tag3']
};
//  <img src={this.state.imageUrl} alt="my land"/>

styles= {
fontSize: 15,
fontWeight: "bold"
};

renderTags(){
  if (this.state.mytags.length === 0) return <p>No hay tags!</p>;
  return <ul>{this.state.mytags.map(tag => <li key={tag}>{tag}</li>)}</ul>
};

//en vez de usar un constructor para ver el Handle las properties pues usamos la arrow
//cuando se usa el arrow en la función pues en el llamado también se debe de usar el arrow, es decir, en el onclick
handleIncrement =()=>{
  this.setState({ count: this.state.value + 1 });
};

  render() {
    return( 
    <div>   
    {this.props.children}
    <h1 style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</h1>
    <button onClick={() => this.handleIncrement()} className="btn btn-info btn-sm">Incrementar</button>
    <button onClick={() => this.props.onDelete()} className="btn btn-danger btn-sm m-2">Borrar</button>
    {this.renderTags()}
    </div>
    );
  }

  getBadgeClasses(){
    const classes = 'badge m-2 badge-';
classes += (this.state.value === 0) ? "warning" : "primary";
return classes;
  }

formatCount(){
  const {count } = this.state;
  return this.state.value === 0 ? 'Zero' : count;
}

}

export default Counter;