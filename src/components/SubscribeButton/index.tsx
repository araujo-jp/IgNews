import styles from './styles.module.scss'

interface SubcribeButton {
  priceId: string;
}

export function SubcribeButton({ priceId }: SubcribeButton ) {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}