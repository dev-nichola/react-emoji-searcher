import styles from "./Empty.module.css";

const Empty = (props) => {

      const {text} = props;
      return (
            <div className={styles.empty}>
                  {text}
            </div>
      );

}

export default Empty;