interface Props {
  name: string;
  quantity?: number;
};


export const ItemCounter = ({name, quantity,}: Props) => {
  return (
    <section style={{display: 'flex', alignItems: 'center', gap: 10, marginTop: 25}}>
    
    <span style={{width: 115, color: 'red'}}>{name}</span>
    <button>+1</button>
    <span>{quantity}</span>
    <button>-1</button>
    </section>
  )
}



//tip: al poner rafc crea un componente funcional