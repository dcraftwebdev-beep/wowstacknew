import styles from "./Container.module.css";

/** Max-width, centered content wrapper. */
export default function Container({ as: Tag = "div", className = "", children }) {
  return <Tag className={`${styles.container} ${className}`}>{children}</Tag>;
}
