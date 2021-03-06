import { useState, useEffect } from "react";
import axios from "axios";
import styles from './block.module.css'

function Block() {
  const [pic, setPic] = useState([]);
  const [custom, setCustom] = useState("");
  const [customList, setCustomList] = useState([]);
  
  const piclist = [
    { id: 1, name: "bat" },
    { id: 2, name: "cmd" },
    { id: 3, name: "com" },
    { id: 4, name: "cpi" },
    { id: 5, name: "exe" },
    { id: 6, name: "src" },
    { id: 7, name: "js" },
  ];
  
  const addCustom = () => {

    if (custom === "") {
      return;
    }
    if (customList.length > 200) {
      return;
      setCustom("");
    }
    console.log(custom);
    axios
      .post("http://localhost:4000/create", {
        custom: custom,
      })
      .then(() => {
        console.log("O");
        console.log("- ing", customList);
        console.log(customList.length);
        setCustomList([...customList, { custom: custom }]);
        getCustom();
      });
      setCustom("");
  };

  // 빈값 / 200제한 / check

  const getCustom = () => {
    axios.get("http://localhost:4000/keyword").then((response) => {
      setCustomList(response.data);
      console.log(response.data);
    });
  };

  const deletCustom = (id) => {
    console.log(id);
    console.log("X");
    axios.delete(`http://localhost:4000/delete/${id}`).then(() => {
      getCustom();
    });
  };

  const onChangePic = (checked, id) => {
    if (checked) {
      setPic([...pic], id);
    } else {
      setPic(pic.filter((p) => p !== id));
    }
  };

  const onChangeCustom = (e) => {
    // setCustom(e.target.value);
    const {target:{value}} = e;
    setCustom(value);
  };

  useEffect(() => {
    console.log(pic);
  }, [pic]);

  return (
    <div className={styles.container}>
      <section className={styles.pick}>
        <h2>고정 확장자</h2>
        {/* {wordlist} */}
        <div className={styles.pickWrap}>
          {piclist.map(fixed => {
              return (
                  <span className={styles.check}>
                      <input type="checkBox" key={fixed.id} value={fixed.name} />
                      <label>{fixed.name}</label>
                  </span>
              )
          })}
        </div>
      </section>
      <section>
        <h2>커스텀 확장자</h2>
        <div className={styles.inputWrap}>
          <input className={styles.inputBox} name="custom" onChange={onChangeCustom} value={custom} maxLength="20" />
          <button className={styles.inputAdd} onClick={addCustom}>+ 추가</button>
        </div>
        <div className={styles.customWrap}>
          {customList.map((val, key) => {
            return (
              // <div className="custom">
              <div className={styles.custom}>
                {val.customword}
                <button className={styles.del} onClick={() => {deletCustom(val.id)}}>
                  X
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Block;
