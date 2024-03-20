import { useEffect, useState } from "react";
import EmojiBox from "../EmojisBox";
import styles from "./Emojis.module.css";
import { filterEmojis } from "../../utils/filterEmojis";
import Empty from "../Empty";

const Emojis = (props) => {
  const { emojisData, searchText } = props;

  const [filteredEmojis, setFilteredEmojis] = useState([]);

  useEffect(() => {
    setFilteredEmojis(
      filterEmojis({
        emojisData,
        searchText,
      })
    );
  }, [emojisData, searchText]);


  if(filteredEmojis.length > 0)
  {
      return (
            <div className={styles.emojisGrid}>
            {filteredEmojis.map((data, index) => (
              <EmojiBox key={index} title={data.title} symbol={data.symbol} />
            ))}
          </div>
      );
  } else
  {
      return (
            <Empty text="Ya Maaf Tidak Ada Data..."/>
      )
  }

}

export default Emojis;
