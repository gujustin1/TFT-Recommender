export type Recommender = {
    readonly item: string;
    readonly champions: string[];
    readonly id: string;
  };
  
  type RecommenderRowProps = {
    recommender: Recommender;
  };
  
  // new code 3
  const RecommenderRow = ({
    recommender: { item, champions, id },
  }: RecommenderRowProps) => {
   
   
    //const nameStyle = { color: 'red' };
    //<td style={{ ...nameStyle }}>{item}</td>
    return (
      <tr>
        <td>{item}</td>
        <td>{champions.join(', ')}</td>
      </tr>
    );
  };
  
  type Props = {
    readonly recommenders: Recommender[];
    readonly filterText: string;
  };
  
  const RecommenderTable = ({ recommenders, filterText }: Props) => {
    const fText = filterText.toLowerCase();
    const filteredRecommenders = recommenders.filter(({item, champions}) => {
        let b = false;
        for(const champ of champions){
            if(champ.toLowerCase().includes(fText)){
                b = true;
            }
        }

      return item.toLowerCase().includes(fText) || b;
    });
  
    return (
      <table className = "table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Champions</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecommenders.map((recommender) => (
            <RecommenderRow recommender={recommender} key = {recommender.id} />
          ))}
        </tbody>
      </table>
    );
  };
  
  export default RecommenderTable;