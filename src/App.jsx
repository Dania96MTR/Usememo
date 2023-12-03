import { useCallback, useMemo, useState , memo } from 'react'
import './App.css'

function Box({ color, onClick }) {
  console.log(`Box color : ${color.color}`);
  return (
    <div
      style={{
        margin: 10,
        width: 100,
        height: 100,
        backgroundColor: color.color,
      }}
      onClick={onClick}
    ></div>
  );
}

const MemoBox = memo(Box);

function App() {
  const [appRender, setAppRender] = useState(0);
  const [color, setColor] = useState("red");
  const onClick = useCallback(() => {}, []);
  console.log(`App re-render : ${appRender}`);
  const colorObj = useMemo(
    () => ({
      color,
    }),
    [color]
  );
  
  return (
    <div className='container'>
      <div className='btn'>
      <button onClick={() => setAppRender((prev) => prev + 1)}>
        App re-render
      </button>
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Switch Color
      </button>
      </div>
      <MemoBox color={colorObj} onClick={onClick} />
    </div>
  )
}

export default App
