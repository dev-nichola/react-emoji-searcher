import styles from "./Container.module.css";

export default function Container(props) {

      const {children} = props;
  return (
      <section className={styles.container}>
            {children}
      </section>
  );
}
