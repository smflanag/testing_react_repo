import React from 'react';
import Season from './season';


class Seasons extends Component {

 render() {
 if (props.seasons.length === 0) {
    return (
      <div>
        No seasons found
      </div>
    );
  }
   return (
        <div>
            {props.seasons.map(s => <Season id={s.id} key={s.id} title={s.seasons.title} />)}
        </div>
   );
 }
}

export default Seasons;
