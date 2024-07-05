import "./App.css";
import { useState } from "react";

function App() {
  const initialValues = {username :"",mailAddress:"",password:""};
  const [formValues,setFormValues] = useState(initialValues);
  const [formErros,setFormErros] = useState({});

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErros(validate(formValues));
  }

  const validate = (values) => {
    const erros = {};
    const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
    if(!values.username){
      erros.username = "ユーザー名を入力してください。"
    }
    if(!values.mailAddress){
      erros.username = "メールアドレスを入力してください。"
    }else if(!regex.test(values.mailAddress)){
      erros.mailAddress = "正しいメールアドレスを入力してください。"
    }
    if(!values.password){
      erros.username = "パスワードを入力してください。"
    }else if(values.password.length < 4){
      erros.password = "4文字以上15文字以下のパスワードを入力してください"
    }else if(values.password.length > 15){
      erros.password = "4文字以上15文字以下のパスワードを入力してください"
    }
    return erros;
  }

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input type="text" placeholder="ユーザー名" name="username" onChange={(e) => handleChange(e) } />
          </div>
          <div className="formField">
            <label>メールアドレス</label>
            <input type="text" placeholder="メールアドレス" name="mailAddress"onChange={(e) => handleChange(e) } />
          </div>
          <div className="formField">
            <label>パスワード</label>
            <input type="text" placeholder="パスワード" name="password"onChange={(e) => handleChange(e) } />
          </div>
          <button className="submitButton">ログイン</button>
        </div>
      </form>
    </div>
  );
}

export default App;
