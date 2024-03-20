import {useState, useEffect} from 'react';
import styles from './EmojiBox.module.css';
import classnames from 'classnames';

const EmojiBox = (props) => {
      
      const {title, symbol} = props;  
      const [selected, setSelected] = useState(false);

      useEffect(() => {
           const timer = setTimeout(() => setSelected(false), 500 );

           return () => clearTimeout(timer);
      }, [selected])

      return (
            <div
            onClick={() => {
                  navigator.clipboard.writeText(symbol);
                  setSelected(true)
            }}
            className={classnames(styles.emojiBox, {
                  [styles.selected]: selected
            })}>
                  <p 
                        className={styles.emoji}
                        dangerouslySetInnerHTML={{__html: `&#${symbol.codePointAt(0)}`}}
                  />

                  <p className={styles.emojiText} >{ selected ? 'Copied!' : title}</p>
            </div>
      );
}

export default EmojiBox;