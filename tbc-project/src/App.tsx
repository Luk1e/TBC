import GlobalStyles from "./GlobalStyles";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    const realWidth = window.screen.width * window.devicePixelRatio;
    const realHeight = window.screen.height * window.devicePixelRatio;
    console.log(`Your screen resolution is: ${realWidth} x ${realHeight}`);
  });
  return (
    <div>
      <GlobalStyles />
      asd
    </div>
  );
}

export default App;
