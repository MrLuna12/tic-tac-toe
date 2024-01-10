// This is a component.
// Components are used to render, manage, and update UI elements in the application
function Square({ value }) {
    return <button className="square">{value}</button>;

}



// 'export' makes the Square() accessible outside the file
// 'default' tells other files using our code that it's the main funciton in the our file
export default function Board() {
  return (
    <>
        <div className="board-row">
            <Square value="1" />
            <Square value="2" />
            <Square value="3" />
        </div>
        <div className="board-row">
            <Square value="4" />
            <Square value="5" />
            <Square value="6" />
        </div>
        <div className="board-row">
            <Square value="7" />
            <Square value="8" />
            <Square value="9" />
        </div>
    </>

  );
}
