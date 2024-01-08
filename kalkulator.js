<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kalkulator</title>
  <style>
    input {
      width: 50px;
    }
  </style>
</head>
<body>

  <h2>Kalkulator Sederhana</h2>

  <input type="text" id="display" disabled>

  <br>

  <button onclick="clearDisplay()">C</button>
  <button onclick="appendToDisplay('7')">7</button>
  <button onclick="appendToDisplay('8')">8</button>
  <button onclick="appendToDisplay('9')">9</button>
  <button onclick="appendToDisplay('/')">/</button>

  <br>

  <button onclick="appendToDisplay('4')">4</button>
  <button onclick="appendToDisplay('5')">5</button>
  <button onclick="appendToDisplay('6')">6</button>
  <button onclick="appendToDisplay('*')">*</button>

  <br>

  <button onclick="appendToDisplay('1')">1</button>
  <button onclick="appendToDisplay('2')">2</button>
  <button onclick="appendToDisplay('3')">3</button>
  <button onclick="appendToDisplay('-')">-</button>

  <br>

  <button onclick="appendToDisplay('0')">0</button>
  <button onclick="appendToDisplay('.')">.</button>
  <button onclick="calculate()">=</button>
  <button onclick="appendToDisplay('+')">+</button>

  <script>
    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }

    function calculate() {
      try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }
  </script>

</body>
</html>x
