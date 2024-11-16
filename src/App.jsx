

const App = () => {
  const city = ['a','b','c','d'];


  return (
    <div>
      <ul>
        {
          city.map((item,i) => {
            return <li key={i.toString()}>{item}</li>
          })
        }
      </ul>
    </div>
  );
};

export default App;
