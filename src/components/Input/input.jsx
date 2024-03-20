import styles from './input.module.css';

const Input = (props) => {
      
      const {onChange, value} = props;

      return (
            <div>
                  <input type="text"
                  className={styles.input}
                  onChange={onChange}
                  placeholder="Search"
                  value={value}      
                  />
            </div>
      );
}

export default Input;