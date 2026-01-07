import styles from "./home.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.home}>{children}</div>;
}
