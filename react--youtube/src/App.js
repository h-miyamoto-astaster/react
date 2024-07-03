import "./App.css";
import { useState } from "react";

function App() {
  const initialValues = {userName :"",mailAddress:"",password:""};
  const [formValues,setFormValues] = useState(initialValues);

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormValues({...formValues,name:value})
  }

  return (
    <div className="formContainer">
      <form>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder="ユーザー名" name="username" onChange={(e) => handleChange(e) }/>
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder="メールアドレス" name="mailAddress"/>
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder="パスワード" name="password"/>
          </div>
          <button className="submitButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
