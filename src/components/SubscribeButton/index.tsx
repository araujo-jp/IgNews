import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stipe-js'
import styles from './styles.module.scss'

interface SubcribeButton {
  priceId: string;
}

export function SubcribeButton({ priceId }: SubcribeButton ) {
  const [session] = useSession()

  async function handleSubscribe() {
    if(!session) {
      signIn('github')
      return
    }
    
    try {
      const res = await api.post('/subscribe')
      const { sessionId } = res.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}