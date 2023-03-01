import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("1");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const handleOperatorClick = (operator) => {
    if (input === "") return;
    if (result !== "") {
      setInput(result + operator);
      setResult("");
    } else {
      setInput(input + operator);
    }
  };

  const handleEqualClick = () => {
    if (input === "") return;
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleThemeChange = (themeNumber) => {
    setTheme(themeNumber);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-number", theme);
    const bullets = document.querySelectorAll("#theme-bullets > div");
    bullets.forEach((bullet) => {
      bullet.classList.remove("active");
    });
    bullets[theme - 1].classList.add("active");
  }, [theme]);

  return (
    <div className="calc-wrapper">
      <nav className="nav">
        <header className="header">Calcumate</header>
        <aside className="aside">
          <p className="theme-text">Theme</p>
          <div id="theme-grid">
            <div id="theme-numbers">
              <div className="theme-number" onClick={() => handleThemeChange("1")}>1</div>
              <div className="theme-number" onClick={() => handleThemeChange("2")}>2</div>
              <div className="theme-number" onClick={() => handleThemeChange("3")}>3</div>
            </div>
            <div id="theme-bullets">
              <div onClick={() => handleThemeChange("1")}>
                <div className="bullet"></div>
              </div>
              <div onClick={() => handleThemeChange("2")}>
                <div className="bullet"></div>
              </div>
              <div onClick={() => handleThemeChange("3")}>
                <div className="bullet"></div>
              </div>
            </div>
          </div>
        </aside>
      </nav>
      <div className="screen-wrapper">
        <input
          className="screen"
          type="text"
          readOnly
          value={input}
          onChange={handleInputChange}
        />
        <div className="result">{result}</div>
      </div>
      <div className="button-wrapper">
        <button className="gray" onClick={handleClear}>
          AC
        </button>
        <button className="gray" onClick={handleBackspace}>
          ←
        </button>
        <button className="gray" onClick={() => handleOperatorClick("/")}>
          ÷
        </button>
        <button onClick={() => setInput(input + "7")}>7</button>
        <button onClick={() => setInput(input + "8")}>8</button>
        <button onClick={() => setInput(input + "9")}>9</button>
        <button className="gray" onClick={() => handleOperatorClick("*")}>
          ×
        </button>
        <button onClick={() => setInput(input + "4")}>4</button>
        <button onClick={() => setInput(input + "5")}>5</button>
        <button onClick={() => setInput(input + "6")}>6</button>
        <button className="gray" onClick={() => handleOperatorClick("-")}>

        </button>
        <button onClick={() => setInput(input + "1")}>1</button>
        <button onClick={() => setInput(input + "2")}>2</button>
        <button onClick={() => setInput(input + "3")}>3</button>
        <button className="gray" onClick={() => handleOperatorClick("+")}>
          +
        </button>
        <button className="zero" onClick={() => setInput(input + "0")}>
          0
        </button>
        <button onClick={() => setInput(input + ".")}>.</button>
        <button className="orange" onClick={handleEqualClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;