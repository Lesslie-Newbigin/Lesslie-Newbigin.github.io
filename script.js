body {
  margin: 0;
  padding: 0;
  background-color: #0d0d0d;
  font-family: 'Share Tech Mono', monospace;
  color: #00ff00;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

main {
  width: 90%;
  max-width: 400px;
}

.signup-box, .welcome-box, .admin-box {
  background-color: #000;
  padding: 20px;
  border: 1px solid #00ff00;
  border-radius: 10px;
  box-shadow: 0 0 15px #00ff00;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  background-color: #0d0d0d;
  border: 1px solid #00ff00;
  padding: 10px;
  color: #00ff00;
  font-size: 16px;
  border-radius: 5px;
}

button {
  background-color: #00ff00;
  color: #000;
  padding: 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#secretBtn {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #00ff00;
  font-size: 20px;
  cursor: pointer;
}

.log-entry {
  background: #111;
  padding: 8px;
  margin: 5px 0;
  border-left: 4px solid #00ff00;
  font-size: 14px;
}